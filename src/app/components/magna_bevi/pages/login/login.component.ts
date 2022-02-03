import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import magna_const from 'src/app/constants/constants';
import { User } from 'src/app/interfaces/user.interface';
import { LoginService } from 'src/app/services/login.service';
import { StorageService } from 'src/app/services/storage.service';
import { UtenteService } from 'src/app/services/utente.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  loginFormGroup:FormGroup = new FormGroup({
    username: new FormControl(""),
    password: new FormControl(""),
  });

  registrazioneFormGroup:FormGroup = new FormGroup({
    nome: new FormControl("", [Validators.required]),
    cognome: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    loyalty: new FormControl(20),
    username: new FormControl("", [Validators.required]),
    couponCode: new FormControl(""),
    password: new FormControl("", [Validators.required]),
    passwordValidazione: new FormControl("", [Validators.required]),
    ruolo: new FormControl("Cliente"),
  });  


  constructor(private router:Router, 
    private loginService:LoginService, private utenteService: UtenteService,
    private storageService: StorageService)
     { }

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
  //con onInit, invochiamo un hook di angular che viene eseguito qquando
  //il componente è inizializzato
  ngOnInit(): void {

    //verifico se son loggato
    let isLogged = localStorage.getItem('isLogged');
    if(isLogged == "true"){
      this.router.navigateByUrl('/homepage');
      return;
    }
    //inizializzo il loginFormGroup. i parametri all' interno, avranno
    //lo stesso nome dei parametri nell' htlml
    
  }

  login(){
    debugger;
      this.loginService.getLogin(this.loginFormGroup.controls.username.value, this.loginFormGroup.controls.password.value).subscribe(
        res=>{

          this.storageService.setUserData(res);

          if(res.credenziali.ruolo.toLowerCase() == magna_const.ruoli.ADMIN.toLowerCase()) {
            this.router.navigateByUrl('/admin');
          } else {
            this.router.navigateByUrl('/homepage');
          }
        }
      )
  }

}
