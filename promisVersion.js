function mowYard(name, callback) {
   return new Promise((resolve) => { 
    setTimeout(() => {
        console.log(`${name} mowed the yard.`);
        resolve(name);
    }, 2000);
    });
}
function weedEat(name) {
   return new Promise((resolve, reject) => {
    setTimeout(() => {
        let tiredness = Math.floor(Math.random() * 100) + 1;
        if(tiredness > 33) {
        console.log(`${name} finished using the weed eater.`);
        resolve(name);
        } else {
            reject(`${name} fell asleep after mowing the yard.`);
            
        }
    }, 1500);
});
}
function trimHedges(name) {
   return new Promise((resolve, reject) => {
    setTimeout(() => {
        let tiredness = Math.floor(Math.random() * 100) + 1;
        if(tiredness > 33) {
        console.log(`${name} finished trimming the hedges.`);
        resolve(name);
        } else {
            reject(`${name} fell asleep after weed eating the yard.`);
            
        }
    }, 1000);
});
}
function collectWood(name) {
   return new Promise((resolve, reject) => {
    setTimeout(() => {
        let tiredness = Math.floor(Math.random() * 100) + 1;
        if(tiredness > 33) {
        console.log(`${name} finished collecting wood.`);
        resolve(name);
        } else {
            reject(`${name} fell asleep after trimming the hedges.`);
            
        }
    }, 2500);
});
}
function waterGarden(name) {
   return new Promise((resolve, reject) => {
    setTimeout(() => {
        let tiredness = Math.floor(Math.random() * 100) + 1;
        if(tiredness > 33) {
        console.log(`${name} finished watering the garden.`);
        resolve(name);
        } else {
            reject(`${name} fell asleep after collecting wood.`);
            
        }
    }, 500);
});
}

function doSummerChores(name) {
    mowYard(name)
        .then(weedEat)
        .then(trimHedges)
        .then(collectWood)
        .then(waterGarden)
        .then(() => {
            console.log(`${name} finished all their chores!`);
        })
            .catch((error) => {
                console.log(error);
            });
        
}

doSummerChores("Carl");
