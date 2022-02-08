let sidebarAdmin = {
  title: 'Admin',
  items: [
    {
      id: 1,
      titolo: 'Menu',
      children: [
        {
          id: 'children_menu_crea',
          titolo: 'Crea menu',
          link: 'admin/createmenu'
        }, 
        {
          id: 'children_menu_cerca',
          titolo: 'Cerca menu',
          link: 'admin/menulista' 
        }, 
      ]
    },
    {
      id: 2,
      titolo: 'Ordine',
      children: [
        {
          id: 'children_ordine_lista',
          titolo: 'Lista ordini',
          link: '#'
        }, 
        {
          id: 'children_ordine_crea',
          titolo: 'Crea ordine',
          link: '#' 
        },
        {
          id: 'children_ordine_cerca',
          titolo: 'Cerca ordine',
          link: '#' 
        },
        {
          id: 'children_ordine_crea',
          titolo: 'Crea ordine',
          link: '#' 
        }
      ]
    },
    {
      id: 3,
      titolo: 'Scontistica',
      children: [
        {
          id: 'children_scontistica_gestione',
          titolo: 'Gestione sconti',
          link: 'admin/scontistica'
        }
      ]
    },
    {
      id: 4,
      titolo: 'Utente',
      children: [
        {
          id: 'children_utenti_lista',
          titolo: 'Lista utenti',
          link: '#'
        },
        {
          id: 'children_utenti_crea',
          titolo: 'Crea utente',
          link: '#'
        },
        {
          id: 'children_utente_trova',
          titolo: 'Trova utente',
          link: '#'
        }
      ]
    }
  ]
}

export default sidebarAdmin;