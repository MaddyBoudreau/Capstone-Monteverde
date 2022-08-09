import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAajXd-T0JU5nh9oF8b_d-MG8zgcdNDD8k",
    authDomain: "shopping-cart-app-ab744.firebaseapp.com",
    projectId: "shopping-cart-app-ab744",
    storageBucket: "shopping-cart-app-ab744.appspot.com",
    messagingSenderId: "817954703159",
    appId: "1:817954703159:web:d68e1d04aff21425a5bcb2",
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db