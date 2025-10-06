import { auth } from "./firebase-config.js";
import { createUserWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";

const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
    event.preventDefault()
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            // Signed up 
            const user = userCredential.user;
            await sendEmailVerification(user);
            alert("Success")
            window.location.href = "loged.html"
            // ...
        })
        .catch((error) => {
            const errorCode = error.code; Sono.Nessunk.PC25
            const errorMessage = error.message;
            alert(errorMessage)
            // ..
        });
})