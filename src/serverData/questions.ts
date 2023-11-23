const questions = [
  {
    id: '0',
    text: 'What Bitlocus services and products will you use?',
    description: '*Please select the option',
    placeholder: '',
    type: 'CHECKBOX',
    options: ['Deposit/Withdraw Crypto', 'Crypto Exchange Services', 'Other']
  },
  {
    id: '1',
    text: 'What is the purpose of the individual account in Bitlocus?',
    description: '*Please select the option',
    placeholder: '',
    type: 'CHECKBOX',
    options: [
      'Deposit/ withdraw Bitlocus account and purchase (buy/sell) cryptocurrencies (ETH, BTC, etc.)',
      'Trade cryptocurrencies on the Bitlocus platform (place buy/sell orders at specific prices in an effort to profit from price movements in the market)',
      'Receive cryptocurrency payments for services provided',
      'Store cryptocurrencies on Bitlocus account'
    ]
  },
  {
    id: '2',
    text: 'Expected monthly deposit turnover',
    description:
      '*Please indicate the range for the total monthly expected deposit transactions on your Bitlocus account.',
    placeholder: 'Choose one option',
    type: 'DROPDOWN',
    options: [
      'Up to 50,000 Eur',
      '50,001 - 100,000 Eur',
      '100,001 - 500,000 Eur',
      'More than 500,001 Eur'
    ]
  },
  {
    id: '3',
    text: 'Expected monthly withdrawal turnover:',
    description:
      '*Please indicate the range for the total monthly expected deposit transactions on your Bitlocus account.',
    placeholder: 'Choose one option',
    type: 'DROPDOWN',
    options: [
      'Up to 50,000 Eur',
      '50,001 - 100,000 Eur',
      '100,001 - 500,000 Eur',
      'More than 500,001 Eur'
    ]
  },
  {
    id: '4',
    text: 'Expected monthly trading turnover:',
    description:
      '*Please indicate the range for the total monthly expected deposit transactions on your Bitlocus account.',
    placeholder: 'Choose one option',
    type: 'DROPDOWN',
    options: [
      'Up to 50,000 Eur',
      '50,001 - 100,000 Eur',
      '100,001 - 500,000 Eur',
      'More than 500,001 Eur'
    ]
  },
  {
    id: '5',
    text: 'Expected monthly transactions turnovers.',
    description: '',
    placeholder: 'Enter the range for the total expected transactons on your Bitlocus account',
    type: 'TEXT',
    options: null
  },
  {
    id: '6',
    text: 'What is the name of the bank / payment institution where you have your personal bank account?',
    description: '',
    placeholder: 'Enter name of your bank/ payment institution',
    type: 'TEXT',
    options: null
  },
  {
    id: '7',
    text: 'What is your personal bank paymet account number?',
    description: '',
    placeholder: 'Enter account number',
    type: 'TEXT',
    options: null
  },
  {
    id: '8',
    text: 'Please specify your personal bank SWIFT / BIC code.',
    description: '',
    placeholder: 'Enter SWIFT/ BIC code',
    type: 'TEXT',
    options: null
  },
  {
    id: '9',
    text: 'Select your personal bank / payment institution country',
    description: '*Select a country',
    placeholder: 'Choose one option',
    type: 'DROPDOWN',
    options: ['Poland', 'France', 'USA']
  },
  {
    id: '10',
    text: 'What is your occupation?',
    description: '',
    placeholder: '*Please specify your occupation that provides you with your primary income.',
    type: 'TEXT',
    options: null
  },
  {
    id: '11',
    text: 'What is your occupation?',
    description: '*Please specify your occupation that provides you with your primary income.',
    placeholder: '',
    type: 'CHECKBOX',
    options: ['Private sector employee', 'Public sector employee', 'Retired']
  },
  {
    id: '12',
    text: 'Role name in the present workplace',
    description: '',
    placeholder: 'Enter name of your position in the workplace.',
    type: 'TEXT',
    options: null
  },
  {
    id: '13',
    text: 'Name of the present workplace',
    description: '',
    placeholder: 'Enter name of your workplace',
    type: 'TEXT',
    options: null
  },
  {
    id: '14',
    text: 'Country of the present workplace',
    description: '*Select a country',
    placeholder: 'Choose one option',
    type: 'DROPDOWN',
    options: ['Poland', 'France', 'USA']
  },
  {
    id: '15',
    text: 'What is nature of your income?',
    description: '*You can select several options.',
    placeholder: '',
    type: 'CHECKBOX',
    options: ['Salary', 'Cryptocurrency mining', 'Professional services', 'Investment', 'Other']
  },
  {
    id: '16',
    text: 'What is your average monthly after tax income?',
    description: '*You can choose only one option',
    placeholder: 'Choose one option',
    type: 'DROPDOWN',
    options: [
      'Up to 50,000 Eur',
      '50,001 - 100,000 Eur',
      '100,001 - 500,000 Eur',
      'More than 500,001 Eur'
    ]
  },
  {
    id: '17',
    text: 'Please indicate your country of tax residence',
    description: '*Select a country',
    placeholder: 'Choose one option',
    type: 'DROPDOWN',
    options: ['Poland', 'France', 'USA']
  },
  {
    id: '18',
    text: 'Tax Identification Number (TIN)',
    description: '',
    placeholder: 'Enter your Tax Identification Number',
    type: 'TEXT',
    options: null
  },
  {
    id: '19',
    text: 'I confirm that:',
    description: '*Please confirm',
    placeholder: '',
    type: 'CHECKBOX',
    options: [
      'I am not a politically exposed person (PEP)* and I have not been a politically exposed person at any time during the last twelve months.',
      'I am acting on my own behalf and I am the actual owner of the funds in the current accounts opened in my name.',
      'I am over 18 years old.'
    ]
  }
];

export default questions;
