const validators = {
    username: {
      rules: [
        {
          test: (value) => {
            return value.length > 0; 
          }, 
          message: 'Username field cannot be empty',
        },
        {
          test: (value) => {
            return value.length >= 6;
          },
          message: 'Username must be longer than six characters',
        },
        {
          test: /^\S+$/, 
          message: 'Username must write immediately'
        },
        {
          test: /[a-zA-Z0-9]+$/, 
          message: 'Username must character a-z or upper character, 0-9'
        }
      ],
      errors: [],
      valid: false,
      state: '',
    },
    email: {
      rules: [
        {
          test: (value) => {
            return value.length > 0; 
          }, 
          message: 'Email field cannot be empty',
        }, 
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
            return value.length > 0; 
          }, 
          message: 'Password field cannot be empty',
        }, 
        {
          test: (value) => {
            return value.length >= 8;
          },
          message: 'Password must not be shorter than 8 characters',
        },
        {
          test: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/, 
          message: 'Password included one or more (Character and upper Character and Number)', 
        },
      ],
      errors: [],
      valid: false,
      state: ''
    },
    confirmpassword: {
      rules: [
        {
          test: (value) => {
            let currentpassword = document.getElementById('password').value;
            return value === currentpassword; 
          }, 
          message: 'Confirm Password not equal Password',
        }, 
      ],
      errors: [],
      valid: false,
      state: ''
    }
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