import './App.css'
import Card from './components/Card.jsx'

function App() {
  let age = 21;
  let myObj = {
    name: "Vaishnavi",
    company: "Tech Corp"
  };
  let myArray = [1,2,3,4,5];

  return (
    <>
    <Card username="Vaishnavi Mali" company="Tech Corp" age={age}  myObj={myObj}/>

    <Card />
    </>
  )
}

export default App
