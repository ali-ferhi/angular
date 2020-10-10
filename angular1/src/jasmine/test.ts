

let indicator = 0;

function understandSetTimeout() {
    
    setTimeout( () => 
        {
            indicator = 0;
        },
        5000
    );            
}

console.log(`indicator = ${indicator}`);
understandSetTimeout();
console.log(`indicator = ${indicator}`);