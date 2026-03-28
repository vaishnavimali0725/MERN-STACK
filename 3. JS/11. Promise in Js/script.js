// const ticket = new Promise(function(resolve,reject){
//     const isBoarded = false;
//     if(isBoarded){
//         resolve("You are eligblie to unboard")
//     }else{
//         reject("You are not eligblie to onboard")
//     }
// })

// ticket.then((data)=>{
//     console.log("wohooo");
    
// }).catch((data)=>{
//     console.log("Oh no",data);
// }).finally(()=>{
//     console.log("This will be executed all time");
    
// })
function getCandies(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const candies = "🍬";
            console.log("In our getCandies method", candies);
            resolve(candies);   // ✅ resolve properly
        },3000);
    });
}

function handOverKeys(candies){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const keys = candies + "🗝️";
            console.log("In our handOverKeys method", keys);
            resolve(keys);
        },3000);
    });
}

function onboarding(keys){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const onboarded = keys + "🏚️";
            console.log("In our onboarding method", onboarded);
            resolve(onboarded);   // ✅ resolve properly
        },3000);
    });
}

//  async-await with error handling
async function onboardClient(){
    try {
        const candies = await getCandies();
        console.log("Here is the candy", candies);
        
        const keys = await handOverKeys(candies);
        console.log("Here is the key", keys);
        
        const onboarded = await onboarding(keys);
        console.log("Client successfully onboarded", onboarded);

    } catch(error){
        console.log("Error Occurred :-(", error);
    }
}

onboardClient();// getCandies()
//     .then((candies)=>{
//         console.log("Here is the candies" ,candies);
//         return handOverKeys(candies)
//     })
//     .then((keys)=>{
//         console.log("Here is the keys" ,keys);
//         return handOverKeys(keys)
//     })
//     .then((onboarding) => {
//         console.log("Welcome to the restaurant" ,onboarding);
//         return handOverKeys(onboarding)
//     })
//     .catch((err)=>{
//         console.log("Error Occured :-(",err);  
//     })
//     .finally(()=>{
//         console.log("Happy to assist you :-)");
//     })

// console.log(getCandies());
