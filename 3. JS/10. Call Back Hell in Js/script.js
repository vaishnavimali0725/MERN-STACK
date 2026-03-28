// console.log("One");
// console.log("Two");
// setTimeout(function(){
//     console.log("this will be exectued after 3 seconds! ");
    
// },3000)

// console.log("Three");

function getCandies(callback1){
    setTimeout(() =>{
        const candies = "🍬";
        console.log("In our getCandies methos",candies);
        callback1(candies)
        // return candies;
    },3000)
}

function handOverKeys(candies,callback2){
    setTimeout(() =>{
        const keys =candies+"🗝️"
        console.log("In our getCandies methos",keys);
        callback2(keys);
    },3000);
}

function onboarding(keys,callback3){
    setTimeout(() =>{
        const onboarding =keys+"🏚️"
        console.log("In our onboarding methos",onboarding);
        callback3(onboarding);
    },3000);
}

// console.log(getCandies());
getCandies((candies)=>{
    handOverKeys(candies,(keys)=>{
        onboarding(keys,(onboarding)=>{
            console.log("Welcome to our resturant",onboarding);
        })
    })    
})