
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue, push } from 'firebase/database';
import { getFirebaseConfig } from './firebase-config.js';
import { bookCmpnt } from './bookCmpnt';
import { getAuth,signOut,onAuthStateChanged} from 'firebase/auth';

const bookList = document.getElementById("bookList");
const firebaseAppConfig = getFirebaseConfig();
const firebaseApp = initializeApp(firebaseAppConfig);
const auth = getAuth();
const logoutbtn = document.getElementById("logout_btn");

function getBooks() {
     //Obtener base de datos
    
    const db = getDatabase();
    const dbRef = ref(db, 'books');
    onValue(dbRef, (snapshot) => {
        const data = snapshot.val();
        updateBooks(data);
    });
}

onAuthStateChanged(auth, (user_account)=>{
    if (user_account){
        // Hay usuario logueado
        console.log("account", user_account);
        //window.location.href = "vote.html"
    }
});


function updateBooks(info) {

    if (info) {
        bookList.innerHTML = "";
        Object.keys(info).forEach((k, index) => {
    
            const book = new bookCmpnt(info[k]);
            //Por cada libro que haya crea un componente
            bookList.appendChild(book.render());
        });
    }
}

logoutbtn.addEventListener('click', () => {
    signOut(auth).then(
        () => {
            window.location.href = "login.html";
        }
    ).catch(
        (error) => {
            alert(error.message);
        }
    )});
getBooks();