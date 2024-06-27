const email = "inbox@apexweb.live"
const password = "youcode.ma"

var emailArray = email.split("@")

    var prefix = emailArray[0] // box

var domainArray = emailArray[1].split(".")

    var domain = domainArray[0] // exweb
    var extension = domainArray[1] // ve

var passwordArray = password.split(".")

    var prefixPassword = passwordArray[0] // ucode
    var domainPassword = passwordArray[1]
const token = prefix[0] + domain[0] + extension[0] + prefixPassword[0] + domainPassword[0] + "¤" + prefix[1] + domain[1] + extension[1] + prefixPassword[1] + domainPassword[1] + "¤" 
console.log(token);
