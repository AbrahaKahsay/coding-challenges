class Person {
    constructor(firstName, lastName, identification) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = identification;
    }
    
    printPerson() {
        console.log(
            "Name: " + this.lastName + ", " + this.firstName 
            + "\nID: " + this.idNumber
        )
    }
}

class Student extends Person {
    /*	
    *   Class Constructor
    *   
    *   @param firstName - A string denoting the Person's first name.
    *   @param lastName - A string denoting the Person's last name.
    *   @param id - An integer denoting the Person's ID number.
    *   @param scores - An array of integers denoting the Person's test scores.
    */
    // Write your constructor here
    constructor(firstName, lastName, identification, testScores){
        
        super(firstName, lastName, identification);
        this.testScores = testScores;
        
    }
    /*	
    *   Method Name: calculate
    *   @return A character denoting the grade.
    */
    // Write your method here
    calculate(){
        
        let sum = 0
        let average;
    
        for(let i=0; i<this.testScores.length; i++){
            sum = sum+ this.testScores[i]
            average = sum/(this.testScores.length)
        }
        
        if(average>=90 && average<=100){
            return "O"
        }
        if(average>=80 && average<90){
            return "E"
        }
        if(average>=70 && average<80){
            return "A"
        }
        if(average>=55 && average<70){
            return "P"
        }
        if(average>=40 && average<55){
            return "D"
        }
        if (average <40) {
            return "T"
        }
    }
}

function main() {
    let firstName = read()
    let lastName = read()
    let id = +read()
    let numScores = +read()
    let testScores = new Array(numScores)
    
    for (var i = 0; i < numScores; i++) {
        testScores[i] = +read()  
    }

    let s = new Student(firstName, lastName, id, testScores)
    s.printPerson()
    s.calculate()
    console.log('Grade: ' + s.calculate())
}