// enum example with a custom type
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: 'Miguel',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
// example of how to use type string array or array types
var favoriteActivities;
// let favoriteActivities: any[];
// let favoriteActivities: number[];
favoriteActivities = ['Skateboarding'];
person.hobbies.push(favoriteActivities[0]);
console.log(Role.READ_ONLY);
