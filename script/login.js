console.log("Login script loaded");
 document.getElementById("loginBtn").addEventListener("click", function(event) {
    console.log("Login button clicked");
    const MobileNumber= document.getElementById("input-number");
    const Number= MobileNumber.value;
    console.log("Mobile number entered:", Number);
    const passwordInput = document.getElementById("input-pin");
    const password = passwordInput.value;
    console.log("Password entered:", password);
    if (Number === "01234567891" && password === "1234") {
        alert("Login successful");
        window.location.assign("home.html");
    }
        else {
        
        alert("Login failed");
        return  ;
    }

 });