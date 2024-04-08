//for start my script : node index2.js answer2.txt
const fs = require('fs')
const readline = require('node:readline')

//generate random number
function generateRandomNum() {           
    return Math.floor(Math.random() * 2 + 1)
}  
//log results in new file
    
function logIngo(fileName, content){
    fs.appendFileSync(fileName,`${content}`)
} 
   

//create game interface
function gameStart(logInfo){
   const rl = readline.createInterface({
    input:process.stdin, 
    output:process.stdout
}) 
rl.question('Guess 1 or 2 ? ', (answer) => {
    let guess = parseInt(answer)
    if(guess !== 1 && guess !== 2){
        console.log('Incorrect input. Please, enter a number.')
        rl.close()
        return  
    } 

    const randomNum = generateRandomNum()
    if(guess === randomNum){
        console.log('bravo! You guess it right!')
    }else {
        console.log('U a wrong.')
    }

//write result in log file
logIngo(fileNameInput,`${guess === randomNum ? "U win\n" : "U fail\n"}` )

    rl.close()
})

}


const fileNameInput = process.argv[2]


gameStart(fileNameInput)