const health = [
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
]

export function sortHealth (array = []){
 return array.sort((a,b)=>b.health - a.health) 
}

console.log(sortHealth(health))