const  obj1 = {
    name : 'akhilesh',
    age : 21,
    address : 'Bangalore'

}

const obj2 = {
    name : 'Yadav',
    age : 22,
    address : 'Barabanki'
}
const obj = {
    student : 'akhilesh',
    age1 : 21,
}
// console.log(obj);
// console.log(obj.name);
// console.log(obj.age);
// console.log(obj.address);
// console.log(obj['name']);
// console.log(obj['age']);
// console.log(obj['address']);
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));
// add to object
const obj4 = Object.assign({},obj1, obj);
// const obj3 = {...obj1, ...obj2};
// console.log(obj3);
console.log(obj4);
console.log(obj1);
const obj3 = {...obj1, ...obj};
console.log(obj3);
// console.log(obj1, obj2);
// Object.freeze(obj1);
obj1.collegeName = 'IIT';
console.log(obj1);


const myArray = [
    {
      id: 1,
      name: "John",
      age: 25,
      city: "New York",
      profession: "Engineer"
    },
    {
      id: 2,
      name: "Emily",
      age: 30,
      city: "Los Angeles",
      profession: "Designer"
    },
    {
      id: 3,
      name: "Michael",
      age: 28,
      city: "Chicago",
      profession: "Developer"
    },
    {
      id: 4,
      name: "Sarah",
      age: 24,
      city: "Houston",
      profession: "Teacher"
    },
    {
      id: 5,
      name: "David",
      age: 35,
      city: "San Francisco",
      profession: "Architect"
    }
  ];

    // console.log(myArray[0]);
    




    const myArray1 = [
        {
          id: 1,
          name: "John",
          age: 25,
          city: "New York",
          profession: "Engineer",
          phone: [
            { brand: "Apple", model: "iPhone 13", price: 999, type: "Smartphone", color: "Black" },
            { brand: "Samsung", model: "Galaxy S21", price: 799, type: "Smartphone", color: "White" }
          ]
        },
        {
          id: 2,
          name: "Emily",
          age: 30,
          city: "Los Angeles",
          profession: "Designer",
          phone: [
            { brand: "Google", model: "Pixel 6", price: 599, type: "Smartphone", color: "Gray" },
            { brand: "OnePlus", model: "9 Pro", price: 699, type: "Smartphone", color: "Green" }
          ]
        },
    ]
    console.log(myArray1[0]);
      








