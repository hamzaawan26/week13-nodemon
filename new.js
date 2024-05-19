// let x = 10
// let y = x
// x = 20
// console.log(x)
// console.log(y)
//reference
let x = { value: 10 }
let y = x
x.value = 20
console.log(y.value)
// function increment(x) {
//   x++
//   console.log(x)
// }
// console.log(x)
// increment(10)
// let students = ['Ali', 'Tayab']
// console.log(students)

var students = ['ali', 'azan', 'umair']
// let searchStudents = students.findIndex(findAli)
// students[5]= "zeshan"
// students.sort()
// students.splice(1, 0, ...['zahid', 'anwar'])
// function findAli(std) {
//   if (std == 'ali') return true
//   else return false
// }
// console.log(searchStudents)
console.log(students)

//arrow function simple
function test() {
  return 'ali'
}
console.log(test())

//arrow function
let tests = () => {
  return 'umair'
}
console.log(tests())

//single line parameter function
let testss = () => 'azan'
console.log(testss())
