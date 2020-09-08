const enhancer = require('./enhancer.js');
// test away!

const Item = {
    name: 'Iron Sword',
    durability: 60,
    enhancement: 10,
}

//Repair Item test

describe('Enhancer', () =>{
    describe('repair method', () =>{
        it('should take in an object to repair, and output an object with a durability of 100', function(){
            let Weapon = enhancer.repair(Item);
            
            //expect(Weapon.durability).toBe(2)// -- expect to fail
            expect(Weapon.durability).toBe(100)
        })
    })

    // Item enhancement succeed test
    describe('success method', () =>{
        it('should return a new item object with the enhancement increased by 1', () => {
            let EnhancedWeapon = enhancer.success(Item);

            //expect(EnhancedWeapon.enhancement).toBe(15); // -- expect to fail
            expect(EnhancedWeapon.enhancement).toBe(11);
        })
        it('should return the object with the enhancement unchanged', ()=>{
            let newItem = Item;
            newItem.enhancement = 20;

            let UnenhancedWeapon = enhancer.success(newItem);

            //expect(EnhancedWeapon.enhancement).toBe(15); // -- expect to fail
            expect(UnenhancedWeapon.enhancement).toBe(20);
        })
    })
})

