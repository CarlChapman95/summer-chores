function mowYard(name, callback) {

    setTimeout(() => {
        console.log(`${name} mowed the yard.`);
        
    }, 2000);
}
function weedEat(name) {

    setTimeout(() => {
        let tiredness = Math.floor(Math.random() * 100) + 1;
        if(tiredness > 33) {
        console.log(`${name} finished using the weed eater.`);
        callback();
        } else {
            console.log(`${name} fell asleep after mowing the yard.`);
            
        }
    }, 1500);
}
function trimHedges(name) {

    setTimeout(() => {
        let tiredness = Math.floor(Math.random() * 100) + 1;
        if(tiredness > 33) {
        console.log(`${name} finished trimming the hedges.`);
        
        } else {
            console.log(`${name} fell asleep after weed eating the yard.`);
            
        }
    }, 1000);
}
function collectWood(name) {

    setTimeout(() => {
        let tiredness = Math.floor(Math.random() * 100) + 1;
        if(tiredness > 33) {
        console.log(`${name} finished collecting wood.`);
        
        } else {
            console.log(`${name} fell asleep after trimming the hedges.`);
            
        }
    }, 2500);
}
function waterGarden(name) {

    setTimeout(() => {
        let tiredness = Math.floor(Math.random() * 100) + 1;
        if(tiredness > 33) {
        console.log(`${name} finished watering the garden.`);
        
        } else {
            console.log(`${name} fell asleep after collecting wood.`);
            
        }
    }, 500);
}

function doSummerChores(name) {
    mowYard(name, () => {
        weedEat(name, () => {
            trimHedges(name, () => {
                collectWood(name, () => {
                    waterGarden(name, () => {
                        console.log(`${name} finished all their chores!`);
                    });
                });
            });
        });
    });
}

doSummerChores("Carl");
