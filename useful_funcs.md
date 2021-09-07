### replace()

```$scope.newString = oldString.replace("stack","NO");```

Note that contrary to how the .NET Replace method works, the Javascript replace method replaces only the first </br> 
occurrence if you are using a string as first parameter.  </br>
If you want to replace all occurrences you need to use a regular expression so that you can specify the global (g) flag: </br>

```$scope.newString = oldString.replace(/stack/g,"NO");```

### Difference between find() and filter()

* filter() </br>
search through all the elements. </br>
is used to filters all the elements and returns the element that matches and the element that do not match are removed. </br>
return all matching items </br>
return an array (always) </br>
return blank array e.g. [], if nothing matched </br>

* find() </br>
search through all the child elements only. </br>
used to find all the descendant elements of the selected element.  </br>
return first item with matching condition </br>
return an object or value </br>
return undefined if nothing matched </br>

```
const array1 = [5, 12, 8, 130, 44];
const found = array1.find(x => x > 10);  
// Return 12

const found = array1.filter(element => element > 10);
// Return [12, 130, 44]
```
```
let person = [ 
  { name: "Bob", age: "32", occupation: "developer" }, 
  { name: "Bill", age: "17", occupation: "delinquent" }, 
  { name: "Brad", age: "40", occupation: "yes" } 
];

const found = person.find(item => item.age > 30);
// return { name: "Bob", age: "32", occupation: "developer" }

const found = person.filter(item => item.age > 30);
/* return [
  { name: "Bob", age: "32", occupation: "developer" }, 
  { name: "Brad", age: "40", occupation: "yes" }
] */
```
reference: https://stackoverflow.com/questions/2438223/difference-between-find-and-filter

