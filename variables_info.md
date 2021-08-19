## Difference between var and let

var is function scoped and let is block scoped.</br>
It can be said that a variable declared with var is defined throughout the program as compared to let.

**var example**
```
Input:
console.log(x);
var x=5;
console.log(x);

Output:
undefined
5
```

**let example**
```
Input:
console.log(x);
let x=5;
console.log(x);

Output:
Error
```

The let keyword was introduced in ES6 (2015).</br>
Variables defined with let cannot be Redeclared.</br>
Variables defined with let must be declared before use.</br>
Variables defined with let have Block Scope.</br>

```
let x = "John Doe";
let x = 0;
// SyntaxError: 'x' has already been declared
```

With var you can:
```
var x = "John Doe";
var x = 0;
```

Before ES6 (2015), JavaScript had only Global Scope and Function Scope.</br>
ES6 introduced two important new JavaScript keywords: let and const.</br>
These two keywords provide Block Scope in JavaScript.</br>
Variables declared inside a { } block cannot be accessed from outside the block:</br>
```
{
  let x = 2;
}
// x can NOT be used here
```
Variables declared with the var keyword can NOT have block scope.</br>
Variables declared inside a { } block can be accessed from outside the block.</br>
```
{
  var x = 2;
}
// x CAN be used here
```
Redeclaring a variable using the var keyword can impose problems.</br>
Redeclaring a variable inside a block will also redeclare the variable outside the block:</br>
```
var x = 10;
// Here x is 10
{
var x = 2;
// Here x is 2
}
// Here x is 2
```

references
https://www.w3schools.com/js/js_let.asp
