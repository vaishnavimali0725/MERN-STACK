
import { createRoot } from 'react-dom/client'
import App from './App.jsx'  
import React from 'react'

// function CustomApp() {
  
//   return (
//     <>
//      <h1>Hello world |Vite</h1>
//       <p>This is a basic Vite React Application.</p>
//     </>
//   )
// }
const CustomReactElement = {
    type: 'a',
    props:{
        href: 'https://www.google.com',
        target: '_blank',
    },
    content: 'Click on me to navigate google page'
}
const AnotherElement = (
  <a href="https://www.google.com" target="_blank">Click on me to navigate google page</a>
)

const myName='Vaishnavi Mali'
const ReactElement = React.createElement('a',{
      href: 'https://www.google.com',
        target: '_blank',
      },'Click on me to navigate google page',myName)
  
createRoot(document.getElementById('root')).render(
  
  //<App />
  //<CustomApp />
  //CustomApp()

  //CustomReactElement()
  //<AnotherElement />
  //AnotherElement
  ReactElement

)

