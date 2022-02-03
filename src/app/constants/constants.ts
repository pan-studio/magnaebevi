let magna_const = {
    isMock:true,
    ordini: {
    creato: "CREATO",
    in_lavorazione: "INLAVORAZIONE",
    evaso:"EVASO",
    cancellato:"CANCELLATO"
    },
    service: {
        beurl: 'http://localhost:8080',
        beUrlLogin: "http://localhost:8080/api/v1/login/",
        beUrlMenu: "http://localhost:8080/api/v1/magnabevi/menu/",
        beUrlOrdini: "http://localhost:8080/api/v1/magnabevi/ordine/"
    },

    hideNavbar: [
        '/login',
        '/',
        '/admin'
    ],
    hideFooter: [
        '/admin'
    ],

    ruoli: {
        ADMIN: 'Admin',
        CLIENTE: 'Cliente'
    },

    menuToLoad: 2
}

export default magna_const;