const yargs = require('yargs')
const argv = process.argv.slice(2)


 let currentDate = new Date()


if(argv[0] == 'current' && argv[1] == '-y'){
    console.log(`Текущий месяц: ${currentDate.getFullYear()}`)
}else if(argv[0] == 'current' && argv[1] == '-m'){
    console.log(`Текущий месяц: ${currentDate.getMonth()}`)
}else if(argv[0] === 'current'){
    console.log(`Текущая дата и время в формате ISO: ${currentDate}`)
}else if(argv[0] == '--d'){
    console.log( `Дата в календарном месяце: ${currentDate.getDate()}`)
}else if(argv[0] == 'add'){
  function add(){
    let futur = new Date()
    futur.setMonth(futur.getMonth() + 2)
    console.log(futur)
  }
  add()
    

}else if(argv[0] == 'sub'){
  function sub(){
      let past = new Date()
      past.setMonth(past.getMonth() - 3)
      console.log(past)
  }
  sub()
  
}else {
    console.log('Wrong param')
}

//console.log(argv);





