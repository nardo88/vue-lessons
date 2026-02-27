import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Button from './components/ui/Button.vue'
import Input from './components/ui/Input.vue'
import Modal from './components/ui/Modal.vue'

const app = createApp(App)

// Регистрация компонента
app.component('Button', Button)
app.component('Input', Input)
app.component('Modal', Modal)

app.mount('#app')
