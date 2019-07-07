import axios from 'axios';

class Auth {
    constructor() {
      this.authenticated = false;
    }
  
    login(cb) {
      let username = document.getElementById('username').value;
      let password = document.getElementById('password').value;
      axios.get(`http://5d1631a5df4e5f00145cac26.mockapi.io/api/v1/user`)
      .then(res => {
        const persons = res.data;
        console.log(persons);     
        persons.forEach(element => {
          if(element.username === username && element.password === password) {
            this.authenticated = true;
            cb();
          }
        });
      }) 
      // this.authenticated = true;
      // cb();
    }
  
    logout(cb) {
      this.authenticated = false;
      cb();
    }
  
    isAuthenticated() {
      return this.authenticated;
    }
  }
  
  export default new Auth();