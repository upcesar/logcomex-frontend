
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example', require('./components/Example.vue'));

/**
 * Passport component
 */

Vue.component(
    'passport-clients',
    require('./components/passport/Clients.vue')
);

Vue.component(
    'passport-authorized-clients',
    require('./components/passport/AuthorizedClients.vue')
);

Vue.component(
    'passport-personal-access-tokens',
    require('./components/passport/PersonalAccessTokens.vue')
);


new Vue({
    el: '#formLogin',
    data: {
        user: {
            'grant_type': 'password',
            'username': null,
            'password': null,
            'client_id': 1,
            'client_secret':'SL6U6Mg7ZBj9EpcdFf0DgkAzGnyLYvQmA7a3RCCG'
        },
        submitData: null,
        loading : false,
        submitted : false, 
        seen: true,
    },
    methods: {
        doLogin: function() {
            
            const outerResp = this;
            outerResp.loading = true;
            outerResp.submitted = true;
            outerResp.submitData = null;
            
            axios.post('http://www.logcomexlogin.local/oauth/token', this.user)
                .then(response => {
                  // JSON responses are automatically parsed.
                  outerResp.submitData = 'Auth OK | ' + response.data.token_type + ' ' + response.data.access_token;
                  outerResp.loading = false;
                })
                .catch(e => {
                    if (e.response) {
                        // The request was made and the server responded with a status code
                        // that falls out of the range of 2xx
                        outerResp.submitData = e.response.data;
                        console.log(e.response.data);
                        console.log(e.response.status);
                        console.log(e.response.headers);
                    } else if (e.request) {
                        // The request was made but no response was received
                        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                        // http.ClientRequest in node.js
                        outerResp.submitData = e.message;
                        console.log(e.request);
                    } else {
                        // Something happened in setting up the request that triggered an Error
                        outerResp.submitData = e.message;
                        console.log('Error', e.message);
                    }
                    outerResp.loading = false;
                });
            
            
        }
    }
});
