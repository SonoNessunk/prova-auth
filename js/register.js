import { auth, doc, setDoc, db, createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "./firebase-config.js";
const submit = document.getElementById('submit');

submit.addEventListener("click", function (event) {
    event.preventDefault()
    const username = document.getElementById('username').value
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {

            const user = userCredential.user;

            await updateProfile(user, { displayName: username });

            await setDoc(doc(db, "users", user.uid), {
                email: user.email,
                uid: user.uid,
                displayName: username,
            })
            await sendEmailVerification(user);
            alert(`Signed in as ${user.email}`);
            window.location.href = "profile"
        })

        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
            // ..
        });
});