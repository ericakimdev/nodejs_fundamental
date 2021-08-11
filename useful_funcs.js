replace

$scope.newString = oldString.replace("stack","NO");

//Note that contrary to how the .NET Replace method works, the Javascript replace method replaces only the first 
//occurrence if you are using a string as first parameter. 
//If you want to replace all occurrences you need to use a regular expression so that you can specify the global (g) flag:

$scope.newString = oldString.replace(/stack/g,"NO");
