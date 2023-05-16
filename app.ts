
const person ={
    name: 'Miguel',
    age: 30,
    hobbies: ['Sports', 'Cooking']
}

// example of how to use type string array or array types
let favoriteActivities: string[];
// let favoriteActivities: any[];
// let favoriteActivities: number[];

favoriteActivities = ['Skateboarding'];

person.hobbies.push(favoriteActivities[0])

console.log(person.hobbies);