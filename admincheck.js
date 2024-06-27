const email = "inbox@apexweb.live"
const password = "youcode.ma"

var emailArray = email.split("@")
var prefix = emailArray[0]
var domainArray = emailArray[1].split(".")
var domain = domainArray[0]
var extension = domainArray[1]

var passwordArray = password.split(".")
var prefixPassword = passwordArray[0]
var domainPassword = passwordArray[1]

const token = prefix[0] + domainArray[0] + extension[0] + prefixPassword[0] + domainPassword[0] + "¤"
console.log(token);
