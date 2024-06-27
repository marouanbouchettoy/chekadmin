// document.body.setAttribute('oncontextmenu','return false')
// document.onkeydown = (e) => {
//     if (e.key == 123) {
//         e.preventDefault();
//     }
//     if (e.ctrlKey && e.shiftKey && e.key == 'I') {
//         e.preventDefault();
//     }
//     if (e.ctrlKey && e.shiftKey && e.key == 'C') {
//         e.preventDefault();
//     }
//     if (e.ctrlKey && e.shiftKey && e.key == 'J') {
//         e.preventDefault();
//     }
//     if (e.ctrlKey && e.key == 'U') {
//         e.preventDefault();
//     }
// };

function generateToken(email, password) {
    // Split the email into prefix and domain
    var emailArray = email.split("@");
    var prefix = emailArray[0];
    var domainArray = emailArray[1].split(".");
    var domain = domainArray[0];
    var extension = domainArray[1];

    // Split the password into prefixPassword and domainPassword
    var passwordArray = password.split(".");
    var prefixPassword = passwordArray[0];
    var domainPassword = passwordArray[1];

    // Define the parts and the steps to create the token
    const parts = [
        { p: 0, d: 0, e: 0, pp: 0, dp: 0 },
        { p: 1, d: 1, e: 1, pp: 1, dp: 1 },
        { p: 2, d: 2, e: 2, pp: 2 },
        { p: 3, d: 3, e: 3, pp: 3 },
        { p: 4, d: 4, pp: 4 },
        { d: 5, pp: 5 },
        { d: 6, pp: 6 }
    ];

    // Construct the token
    let token = "";

    parts.forEach((step, index) => {
        if (step.p !== undefined) token += prefix[step.p];
        if (step.d !== undefined) token += domain[step.d];
        if (step.e !== undefined) token += extension[step.e];
        if (step.pp !== undefined) token += prefixPassword[step.pp];
        if (step.dp !== undefined) token += domainPassword[step.dp];
        if (index < parts.length - 1) token += "¤";
    });

    return token;
}
