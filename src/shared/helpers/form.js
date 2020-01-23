export const FORM_TYPES = {
  text: 'text',
  number: 'number',
  select: 'select',
}

export function getForm(title) {
  return {
    title,
    fields: [
      {
        type: FORM_TYPES.select,
        title: 'What is your occupation?',
        options: [
          'Writer',
          'Software developer',
          'Actor',
          'Dog food taster'
        ]
      },
      {
        type: FORM_TYPES.text,
        title: 'Company name',
        placeholder: 'What company is that?'
      },
      {
        type: FORM_TYPES.number,
        title: 'Income',
        placeholder: 'How much do you make? 😏'
      }
    ]
  };
}
