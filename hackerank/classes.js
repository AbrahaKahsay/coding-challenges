/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */

class Polygon {
    constructor(array){
        this.array = array
    }
    
    perimeter = ()=>{
        let sum = 0;
        for(let i=0; i<this.array.length; i++){
            sum = sum + this.array[i]
        }
        return sum
    }
}

let rectangle = new Polygon([10, 20, 30, 40])
console.log("The perimeter of the rectangle is:", rectangle.perimeter())