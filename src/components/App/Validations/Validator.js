const validators = {
    username: {
      rules: [
        {
          test: /^\S+$/, 
          message: 'Username must write immediately'
        }, 
        {
          test: (value) => {
            return value.length > 0; 
          }, 
          message: 'Username cannot be left blank',
        },
        {
          test: (value) => {
            return value.length >= 6;
          },
          message: 'Username must be longer than six characters',
        },
      ],
      errors: [],
      valid: false,
      state: '',
    },
    email: {
      rules: [
        {
          test: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 
          message: 'Email not true'
        }
      ], 
      errors: [], 
      valid: false, 
      state: ''
    }, 
    password: {
      rules: [
        {
          test: (value) => {
            return value.length >= 6;
          },
          message: 'Password must not be shorter than 6 characters',
        },
      ],
      errors: [],
      valid: false,
      state: ''
    },
};

export function updateValidation (type, text, validators) {

  validators[type].errors = []; 
  validators[type].state = text; 
  validators[type].valid = true; 
  validators[type].rules.forEach((rule) => {

      if (rule.test instanceof RegExp) {
          if (!rule.test.test(text)) {
            validators[type].errors.push(rule.message);
            validators[type].valid = false;
          }
      } 
      
      else if (typeof rule.test === 'function') {
          if (!rule.test(text)) {
              validators[type].errors.push(rule.message);
              validators[type].valid = false;
          }
      }
    
  });

}

export function resetValidators() {

  Object.keys(validators).forEach((fieldName) => {
    validators[fieldName].errors = [];
    validators[fieldName].state = '';
    validators[fieldName].valid = false;
  });
}

export function displayValidationErrors (fieldName, validators) {
  const validator = validators[fieldName];
    const result = '';
    if (validator && !validator.valid) {
      const errors = validator.errors.map((info, index) => {
        return (
          info
        );
      });
      return (
        errors
      );
    }
    return result;
}

export function isFormValid(validators) {
    let status = true;
    Object.keys(validators).forEach((field) => {
      if (!validators[field].valid) {
        status = false;
      } 
    });
    return status;
}

export default validators;