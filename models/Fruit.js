const fruits = require('../fruit.json')

class Fruit {
    constructor (fruit) {
        this.genus = fruit.genus
        this.name = fruit.name
        this.id = fruit.id 
        this.family = fruit.family
        this.order = fruit.order
        this.nutrition = fruit.nutrition           
    }

    static showAll() {
        return fruits.map(f => new Fruit(f))

    }

    static show(name) {
        const fruit = fruits.find((fruit) => fruit.name.toLowerCase() == name)
        if (fruit) {
            return new Fruit(fruit)
        } else {
            throw new Error("Fruit not found")
        }
    }

    static create(data){
        const newFruit =data
        console.log(newFruit)

        newFruit['id'] = fruits.length + 1
        fruits.push(newFruit)

        return new Fruit(newFruit)
    }  

    update(data) {
    const updateFruit = fruits.find(fruit => fruit.name.toLowerCase() == this.name.toLowerCase())
    if (updateFruit) {
        updateFruit.name = data.name
        updateFruit.family = data.family

        return new Fruit(updateFruit)
    } else {
        throw new Error("Fruit not found")
    }
}

destroy () {
    const deletedFruit = fruits.find(fruit => fruit.name.toLowerCase() == this.name.toLowerCase())
    if (deletedFruit) {
        const index = fruits.indexOf(deletedFruit)
        fruits.splice(index, 1)
        
    } else {
        throw new Error("Fruit not found")
    }
}
}

// class Nutrition extends Fruit {
//     constructor (carbohydrates, protein, fat, calories, sugar) {
//         super(genus,name,id,order,family,)
//         this.carbohydrates = carbohydrates
//         this.protein = protein
//         this.fat = fat
//         this.calories = calories
//         this.sugar = sugar
//     }
// }


    module.exports = Fruit