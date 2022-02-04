import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { LoginService } from 'src/app/services/login.service';
import { StorageService } from 'src/app/services/storage.service';
import { UtenteService } from 'src/app/services/utente.service';

@Component({
  selector: 'app-insert-user',
  templateUrl: './insert-user.component.html',
  styleUrls: ['./insert-user.component.scss']
})
export class InsertUserComponent implements OnInit {
  registrazioneFormGroup:FormGroup = new FormGroup({
    nome: new FormControl("", [Validators.required]),
    cognome: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    loyalty: new FormControl(""),
    username: new FormControl("", [Validators.required]),
    couponCode: new FormControl(""),
    password: new FormControl("", [Validators.required]),
    passwordValidazione: new FormControl("", [Validators.required]),
    ruolo: new FormControl("", [Validators.required]),
  });  
  constructor(private router:Router, 
    private loginService:LoginService, private utenteService: UtenteService,
    private storageService: StorageService)
     { }


  ngOnInit(): void {
  }

  setRuolo(ruolo:any){
    this.registrazioneFormGroup.value.ruolo = ruolo.value;
  }
  
  registra() {
    let currentForm = this.registrazioneFormGroup;
    let user: User = {
      nome: currentForm.value.nome,
      cognome: currentForm.value.cognome,
      email: currentForm.value.email,
      loyalty: currentForm.value.loyalty,
      credenziali: {
        user: currentForm.value.username,
        pass: currentForm.value.password,
        ruolo: currentForm.value.ruolo
      }
    }

    if(currentForm.value.couponCode != "") {
      user.couponCode = currentForm.value.couponCode;
    }


    this.utenteService.creaUtente(user).subscribe(res => {
      alert('registrazione avvenuta con successo');
      this.loginService.getLogin(user.credenziali.user + '', user.credenziali.pass + '').subscribe(
        res=>{
            this.router.navigateByUrl('/homepage');
        }
      )

    }, error => {
      alert('registrazione non avvenuta');

    })
  }

}

