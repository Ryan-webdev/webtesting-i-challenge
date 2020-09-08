const enhancer = require('./enhancer.js');
// test away!

const Item = {
    name: 'Iron Sword',
    durability: 60,
    enhancement: 10,
}

//Repair Item test

describe('Enhancer', () =>{
    describe('repair() method', () =>{
        it('should take in an object to repair, and output an object with a durability of 100', function(){
            let Weapon = enhancer.repair(Item);
            
            //expect(Weapon.durability).toBe(2) -- expect to fail
            expect(Weapon.durability).toBe(100)
        })
    })
})

