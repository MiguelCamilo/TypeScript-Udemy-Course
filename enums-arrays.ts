
// enum example with a custom type
enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
    name: 'Miguel',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
}

// example of how to use type string array or array types
let favoriteActivities: string[];
// let favoriteActivities: any[];
// let favoriteActivities: number[];

favoriteActivities = ['Skateboarding'];
// favoriteActivities = ['Skateboarding', 1];


console.log(Role.READ_ONLY);