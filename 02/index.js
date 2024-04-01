const argv = require('yargs/yargs')(process.argv.slice(2)).parse()
const readline = require('node:readline')
const { stdin: input, stdout: output } = require('node:process')


const rl = readline.createInterface({ input, output });

let find = 5

rl.setPrompt('Make a guesse for a number between 0 and 100: ')
rl.prompt()
rl.on('line',(guess)=> {
  if(guess > find){
    console.log('no no no,try a smaller one ')
  }else if(guess < find){
    console.log('no no no, try a bigger one')
  }else {
    rl.close(console.log('Nice.You got it!'))
  }
})
