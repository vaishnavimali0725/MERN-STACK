//Events

//1.Event Handling
//(onclick,onload, onmouseover, onmouseout, onkeypress, onkeydown, onkekup)

// function onClickFunc(){
//     console.log("The box has been clicked");
    
// }

// const keyPressEvent = () => {
//     console.log("the key has been hitted");    
// }

// const onKeyUp = () => {
//     console.log("onKey Up");  
// }

// const onKeyDown = () => {
//     console.log("onKey Down");  
// }

// function fristFunCall(){
//     console.log("func 1");
// }

// function secFunCall(){
//     console.log("func 2");
// }

// 2.Event listerns
const box1 = document.getElementById('box-1');
box1.addEventListener('click', (event) =>{
    console.log("box");
})

const cont = document.getElementById('cont');
box1.addEventListener('click', (event) =>{
    console.log("Container");
},true)

// box1.addEventListener('click', () =>{
//     console.log("Click has been triggered - 2");
// })

