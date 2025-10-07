import { auth, signInWithEmailAndPassword, db, collection, query, where, getDocs } from "./firebase-config.js";

const submit = document.getElementById('submit');
submit.addEventListener("click", async function (event) {
    event.preventDefault()
    const loginId = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let emailToUse = loginId

    if (!loginId.includes("@")) {
        const q = query(collection(db, "users"), where("displayName", "==", loginId));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            alert("Username non trovato");
            return;
        }
        emailToUse = querySnapshot.docs[0].data().email;
    }

    signInWithEmailAndPassword(auth, emailToUse, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert(`Signed in as ${user.email}`);
            window.location.href = "profile"
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
        });
})
