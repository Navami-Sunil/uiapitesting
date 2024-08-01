// features/support/apiHelper.js
const axios = require('axios');

class login {
     async fetch() {
        try {
            const response = await axios.get('https://reqres.in/api/users/1');
            return response.data.data; 
        } catch (error) {
            console.error('ERROR OCCURED--------------------------------', error);
        }
    }
}

module.exports = new login();
