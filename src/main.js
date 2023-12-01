import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret,faDiagramProject,faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faFreebsd } from '@fortawesome/free-brands-svg-icons'
import { faTwitter,faGithub } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faUserSecret,faFacebookF,faTwitter,faGithub,faDiagramProject,faDatabase)

const app = createApp(App);

app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
