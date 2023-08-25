const inquirer = require('inquirer');
const fs = require('fs');



    class Shape {
        constructor(shapecolor) {
            this.shapecolor = shapecolor;
        }
        generateSvg() {
            return '';
        }
    }
    
    class Circle extends Shape {
        constructor(shapecolor) {
        super(shapecolor);
        this.shapecolor= 'circle';
    }

    generateSvg() {
        console.log("generate Circle");
      return `<circle cx="100" cy="100" r="50" fill="circle" fill="${this.shapecolor}" />`;
    }
    }

    class Square extends Shape {
        constructor(shapecolor) {
            
                super(shapecolor);
                this.shapecolor = 'rect';

            }
            generateSvg() {
                console.log("generate Square");
                return `<rect x="100" y="50" width="100" height="100" fill="${this.shapecolor}" />`; 
            }

        }
    

    class Triangle extends Shape {
        constructor(shapecolor) {
            super(shapecolor);
            this.shapecolor = 'polygon';
        }
        generateSvg() {
            console.log("generate Triangle");
            return `<polygon points="150,50 100,150 200,150" fill="${this.shapeColor}" />`;
        }
    }

   

   
   
   
   
    async function createLogo() {
        const userInput = await inquirer.prompt([
            { 
                type: 'input',
                name: 'text',
                message: 'Enter Abbreveation:'
            },
           
            {
                type:'input',
                name: 'textColor',
                message: 'Enter text color:'
            },
          
            {
                type: 'list',
                name: 'shape',
                message: 'Choose a logo shape:',
                choices: ['Circle', 'Square', 'Triangle']
            },
        
            {
                type: 'input',
                name: 'shapeColor',
                message: 'Input shape color:'
            }
        
    
        ]);

        let logoshape;

        switch(userInput.shape) {
            case 'Circle':
                logoshape = new Circle(userInput.shapecolor);
                break;
                case 'Square':
                    logoshape = new Square(userInput.shapecolor);
                    break;
                    case 'Triangle':
                        logoshape = new Triangle(userInput.shapeColor);
                        break;
        }
                        const svgContent= `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                        ${logoshape.generateSvg()} 
                        <text x="150" y="100" text-anchor="middle" font-size="20" fill="${userInput.textColor}">
                          ${userInput.text}
                        </text>
                      </svg>
                    `;
                    
fs.writeFileSync('logo.svg', svgContent);
console.log('Generated logo.svg');

        }
        









createLogo();


