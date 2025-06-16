// singelton
// object.create

// object literals 

const mysym = Symbol("key1")


const JsUser = {
    name: "Harshit",
    "full name" : "Harshit Singh",
    [mysym]: "mykey1",
    age: 18,
    location: "hapur",
    email: "harshitsingh9876@gmail.com",
    isLoggedIn: false,
    lastLoginDays :["Monday", "Saturday"]
}

//console.log(JsUser.email)
//console.log(JsUser["email"])
//console.log(JsUser["full name"])
//console.log(JsUser[mysym])

JsUser.email= "harshit@outlok.com"
//Object.freeze(JsUser)
JsUser.email = "harshit@microsoft.com"
 console.log(JsUser.email );


JsUser.greeting = function(){
    console.log("Hello JS user");
    
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user", ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());