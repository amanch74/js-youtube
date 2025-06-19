const accountId = 14453
let accountEmail = "aman2002@google.com"
var accountPassword = "12345"
accountCity = "jaipur"

// accountId = 2 // not allowed
accountEmail ="sdi@gmail.com"
accountPassword = "23435"
accountCity = "Delhi"

console.log(accountId)

let accountState;

/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])