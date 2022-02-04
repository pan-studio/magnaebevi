let createMenuFormModel = [
    {
      key: 'tipologia',
      type: 'input',
      templateOptions: {
        label: 'Tipologia',
        placeholder: 'Inserire tipologia',
        required: true,
      }
    },
    {
      key: 'lingua',
      type: 'select',
      templateOptions: {
        label: 'Scegli lingua',
        required:true,
        options: [
          {label: 'Italiano', value: 'it'},
          {label: 'Inglese', value: 'en'}
        ],
      },
    },
    {
      key: 'sezioni',
      type: 'repeat',
      templateOptions: {
        addText: 'Aggiungi sezine',
      },
      fieldArray: {
        fieldGroup: [
          {
            type: 'input',
            key: 'label',
            templateOptions: {
              label: 'Nome della sezione:',
              required: true,
            },
          },
          {
            key: 'items',
            type: 'repeat',
            templateOptions: {
              addText: 'Aggiungi piatto',
            },
            fieldArray: {
              fieldGroup: [
                {
                  type: 'input',
                  key: 'nome',
                  templateOptions: {
                    label: 'Nome del piatto:',
                    required: true,
                  },
                },
                {
                  type: 'input',
                  key: 'descrizione',
                  templateOptions: {
                    label: 'descrizione del piatto:',
                    required: true,
                  },
                },
                {
                  type: 'input',
                  key: 'prezzo',
                  templateOptions: {
                    label: 'prezzo del piatto:',
                    required: true,
                  },
                },
                {
                  type: 'select',
                  key: 'disponibile',
                  templateOptions: {
                    label: 'disponibile',
                    required: true,
                    options: [
                      {label: 'SI', value: '0'},
                      {label: 'NO', value: '1'},
                    ],
                  },
                },
              ]
            }
          }
        ],
      }
    }
  ];

  export default createMenuFormModel;