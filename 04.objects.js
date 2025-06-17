//const tinderUser = new Object() // singelton object.
const tinderUser ={} // non-singelton

 tinderUser.id="123abc"
 tinderUser.name="Harshit"
 tinderUser.isLoggedIn = true

//console.log(tinderUser);

const regularUser = {
    email :"city@gmail.com",
    fullname :{
        userfullname: {
            firstName: "Harshit",
            lastName: "Singh"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstName); // Harshit

const obj1 ={1: "a", 2: "b"}
const obj2 ={3: "a", 4: "b"}
const obj4 ={5: "a", 6: "b"}

//const obj3 = {obj1, obj2} // nested object
//const obj3 = Object.assign({}, obj1, obj2, obj4) // merge objects

const obj3 = {...obj1, ...obj2,}
//console.log(obj3); 

const users = [
    {
        id:1,
        email: "harsh@gmail.com"
    },
    {
        id:1,
        email: "harsh@gmail.com"
    },
    {
        id:1,
        email: "harsh@gmail.com"
    },
    
]

users[1].email
//console.log(tinderUser);

//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course ={
    coursename: "js in hindi ",
    price: "999",
    courseInstructor: "Harshit"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

//console.log (courseInstructor);

console.log(instructor);

//const navbar = ({company}) =>{

//}


//navbar(company = "Harshit") /// from react native portion.

//{
  //  "name": "Harshit",
  //  "coursename": "js in hindi",
 //   "price": "free"
//}

[
   {},
   {},
   {},
]