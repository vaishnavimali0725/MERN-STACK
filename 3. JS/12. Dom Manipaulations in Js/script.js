// console.log(document.body;);
const bodyBackground = document.body;
    // bodyBackground.style.backgroundColor = "green"

//1st approach
// const box4 = document.getElementById('box-4');
// console.log(box4);

//2nd approach
// const h1=document.getElementByTayName=('h1');
// console.log(h1);

//3rd approaach
// const boxes = document.getElementsByClassName('box');
// console.log(boxes);

//modifying HTML Elements
// const box1 = document.getElementById('box-1');
// box1.innerHTML="<h2>Vaishnavi Mali</h2>"
// box1.innerText="Vaishnavi mali"

// document.getElementById('box1').innerText="Vaishnavi Mali"

// document.getElementById('p').innerText="Vaishnavi Mali"
// const Box1 = document.getElementById('box1');
// Box1.style.backgroundColor="yellow"


// // const Box2 = document.getElementById('box2');
// Box2.classList.add('circle')


// const Box3 = document.getElementById('box3');
// Box3.classList.remove('circle')

// const boxes = document.getElementsByClassName('box');

// for(i=0;i<boxes.length;i++){
//     boxes[i].classList.add('cicrle')
// }

// Box3.classList.remove('box')


//creating a new element

//1st is to get the access
//2nd is the contents
//3rd is appending

// const newPara = document.createElement('p');
const newPara = document.createElement('p');
newPara.innerText="This our nre paragraph";

const cont = document.getElementById('cont');
// cont.appendChild(newPara)
cont.appendChild(newPara);

newPara.classList.add('box')
newPara.classList.add('circle')