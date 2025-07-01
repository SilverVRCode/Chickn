import { createAuth0 } from '@auth0/auth0-vue';
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App);

app.use(
  createAuth0({
    domain: "dev-b6rt0pxyylrinulb.us.auth0.com",
    clientId: "Kk5Gdi5hg8vhwCKmKBoIRWlJEfpYKU3W",
    authorizationParams: {
      redirect_uri: window.location.origin
    }
  })
);

app.mount('#app');