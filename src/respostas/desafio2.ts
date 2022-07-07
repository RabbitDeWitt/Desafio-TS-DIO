let x: number = 0

interface People {
  name: string;
  age: number;
  profession: string
}

let listPeople: Array<People>

listPeople = [
  {
    name: "Maria",
    age: 29,
    profession: "Atriz"
  },
  {
    name: "Roberto",
    age: 19,
    profession: "Padeiro"
  },
  {
    name: "Laura",
    age: 32,
    profession: "Atriz"
  },
  {
    name: "Carlos",
    age: 19,
    profession: "Padeiro"
  }
]

listPeople.push({
  name: "David",
  age: 26,
  profession: "Desenvolvedor"
})

do{
  console.log(listPeople[x])
  x++
}while(x < listPeople.length)