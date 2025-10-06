import { auth } from "./firebase-config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";

const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
    event.preventDefault()
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert(`Signed in as ${user.email}`);
            window.location.href = "loged.html"
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
        });
})

const googleBtn = document.getElementById('google');
const provider = new GoogleAuthProvider();

googleBtn.addEventListener("click", () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            // Signed in
            const user = result.user;
            alert(`Signed in as ${user.displayName}`);
            window.location.href = "loged.html";
        })
        .catch((error) => {
            alert(error.message);
        });
});