let scontisticaMenuFormModel = [
    {
        key: 'dataInizio',
      type: 'input',
      templateOptions: {
        label: 'Data inizio promozione scontistica',
        placeholder: 'Inserire data inizio',
        required: true,
        }
    },
    {
        key: 'dataFine',
      type: 'input',
      templateOptions: {
        label: 'Data fine promozione scontistica',
        placeholder: 'Inserire data fine',
        required: true,
        }
    },
    {
        key: 'percentuale',
      type: 'input',
      templateOptions: {
        label: 'Percentuale di sconto',
        placeholder: 'Inserire percentuale sconto',
        required: true,
        }
    },
    {
        key: 'active',
        type: 'select',
        templateOptions: {
          label: 'active',
          required: true,
          options: [
            {label: 'SI', value: 0},
            {label: 'NO', value: 1},
            ]
        }
    }
]

export default scontisticaMenuFormModel;