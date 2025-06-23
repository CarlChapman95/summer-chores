function mowYard(name, callback) {

    setTimeout(() => {
        console.log(`${name} mowed the yard.`);
        callback();
    }, 2000);
}
function weedEat(name, callback) {

    setTimeout(() => {
        let tiredness = Math.floor(Math.random() * 100) + 1;
        if(tiredness > 33) {
        console.log(`${name} finished using the weed eater.`);
        } else {
            console.log(`${name} fell asleep after mowing the yard.`);
            callback();
        }
    }, 1500);
}
function trimHedges(name, callback) {

    setTimeout(() => {
        let tiredness = Math.floor(Math.random() * 100) + 1;
        if(tiredness > 33) {
        console.log(`${name} finished trimming the hedges.`);
        } else {
            console.log(`${name} fell asleep after weed eating the yard.`);
            callback();
        }
    }, 1000);
}
function collectWood(name, callback) {

    setTimeout(() => {
        let tiredness = Math.floor(Math.random() * 100) + 1;
        if(tiredness > 33) {
        console.log(`${name} finished collecting wood.`);
        } else {
            console.log(`${name} fell asleep after trimming the hedges.`);
            callback();
        }
    }, 2500);
}
function waterGarden(name, callback) {

    setTimeout(() => {
        let tiredness = Math.floor(Math.random() * 100) + 1;
        if(tiredness > 33) {
        console.log(`${name} finished watering the garden.`);
        } else {
            console.log(`${name} fell asleep after collecting wood.`);
            callback();
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
