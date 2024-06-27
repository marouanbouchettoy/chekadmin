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
const token = prefix[0] + domain[0] + extension[0] + prefixPassword[0] + domainPassword[0] + "¤" 
            + prefix[1] + domain[1] + extension[1] + prefixPassword[1] + domainPassword[1] + "¤" 
            + prefix[2] + domain[2] + extension[2] + prefixPassword[2] + "¤" 
            + prefix[3] + domain[3] + extension[3] + prefixPassword[3] + "¤" 
            + prefix[4] + domain[4] + prefixPassword[4] + "¤" 
            + domain[5] + prefixPassword[5] + "¤" 
            + domain[6] + prefixPassword[6]
console.log(token);
