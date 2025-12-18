import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Myfirstcomponenet/>
  </StrictMode>,
)


function Myfirstcomponenet(){


  return(
    <div>
      <h1>My first react</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum impedit rem voluptatem iusto possimus at reprehenderit quaerat eos. Explicabo consequatur assumenda voluptatum dolorem odio laudantium debitis similique. Nisi, voluptate quaerat?</p>
    </div>
  )
}
