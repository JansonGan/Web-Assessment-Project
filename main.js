const prompt = require('prompt-sync')({sigint: true});
const clear = require('clear-screen');
 
const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
const row = 10;
const col = 10;

class Field {
    constructor() {
        this.field = [];
        // Current location of character.
        this.locationX = 0;
        this.locationY = 0;
        this.gameEnd = false;

        for (let a = 0; a < col; a++) {
            this.field[a] = [];
        }
        
        this.generateField(row, col, 0.2);
    }

    runGame() {
        // Implement codes
        while (!this.gameEnd) { // if game path is correct game continue.

        this.print();
        this.askQuestion();
    }
}
 

    print() {
        clear();
        const displayString = this.field.map(row => {
            return row.join(" ");
        }).join("\n");
        console.log(displayString);
}

    askQuestion() {
        const answer = prompt("Which way?").toUpperCase();
        // Validate user input to move the pathCharacter
       switch (answer) {
           case "u":
               this.locationY -= 1;
               break;
            case "d":
                this.locationY += 1;
                break;    
            case "l":
                this.locationX -= 1;
                break;
            case "r":
                this.locationX += 1;
                break;
                default:
               console.log("Invalid key input.");
       }
    }

    generateField(height, width, percentage = 0.1) {
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                // generate random holes
                const numX = Math.floor(Math.random() * height); // Generate a random y and x value for the holes.
                const numY= Math.floor(Math.random() * width);
               this.field[numY][numX] = hole;
                this.field[y][x] = fieldCharacter;
            }
        }

        // set character position as [0][0]
        this.field[this.locationY][this.locationX] = pathCharacter;
         // set hat location randomly
        let hatX = Math.floor(Math.random() * width);
        let hatY = Math.floor(Math.random() * height);
        this.field[hatY][hatX] = hat;
    }

  
}// End of class

const myfield = new Field();
myfield.runGame();

