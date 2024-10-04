function generatePassword() {
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/";
    const allChars = letters + numbers + symbols;
    const passwordLength = 12;
    let password = "";

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+\[\]{}|;:'",.<>?/])[A-Za-z\d!@#$%^&*()\-_=+\[\]{}|;:'",.<>?/]{12,}$/;

    // random number generator cryptographically
    const getRandomInt = (max) => {
        const cryptoArray = new Uint32Array(1);
        window.crypto.getRandomValues(cryptoArray);
        return cryptoArray[0] % max;
    };

    // Keep generating a password until it passes the security regex
    while (!passwordRegex.test(password)) {
        password = "";

        // Fill the password with random characters from allChars
        for (let i = 0; i < passwordLength; i++) {
            password += allChars[getRandomInt(allChars.length)];
        }
    }

    return password;
}

document.getElementById("btn").onclick = function() {
    try {
    const newPassword = generatePassword();
    document.getElementById("out").value = newPassword;
    console.log("Secure password generated successfully!")
    }
    catch(err) {
        console.log(err);
    }
   
}

document.getElementById("out").onclick = function() {
    const outInput = document.getElementById("out");
    outInput.select();
    document.execCommand("copy");

    // Show the alert
    const copyAlert = document.getElementById("copyAlert");
    copyAlert.style.display = "block";

    // Hide the alert after 3 seconds
    setTimeout(function() {
        copyAlert.style.display = "none";
    }, 3000);
}
