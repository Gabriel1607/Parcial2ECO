import {
    getDatabase, ref, set, onValue, push} from 'firebase/database';
    import { getAuth, updateProfile } from "firebase/auth";


export class bookCmpnt {
    constructor(book) {
        this.book = book;
    }
    render() {

        let bookCard = document.createElement("div");
        bookCard.className = "bookCard";


        let title = document.createElement("h3");
        title.className = "bookTitle";
        title.innerHTML = this.book.title;

        let bookRating = document.createElement("p");
        bookRating.className = "bookRating";
        if(this.book.rating ===0 && this.book.votes===0 ){
            bookRating.innerHTML = 0;
        }else{
            bookRating.innerHTML = this.book.rating / this.book.votes;
        }

    let starBox = document.createElement("ul");
        starBox.className ="starbox";

       let starz1 = document.createElement("li");
       starz1.className = "starz1";
       starz1.innerHTML = "✰";

       let starz2 = document.createElement("li");
       starz2.className = "starz2";
       starz2.innerHTML = "✰";

       let starz3 = document.createElement("li");
       starz3.className = "starz3";
       starz3.innerHTML = "✰";

       let starz4 = document.createElement("li");
       starz4.className = "starz4";
       starz4.innerHTML = "✰";

       let starz5 = document.createElement("li");
       starz5.className = "starz5";
       starz5.innerHTML = "✰";

         bookCard.appendChild(title);
        bookCard.appendChild(bookRating);
        bookCard.appendChild(starBox);
        starBox.appendChild(starz5);
        starBox.appendChild(starz4);
        starBox.appendChild(starz3);
        starBox.appendChild(starz2);
        starBox.appendChild(starz1);


        starz1.addEventListener('click', (e, ev) =>{
            
            const db = getDatabase();
            const bookRef = ref(db, 'books/' + this.book.id);

            const auth = getAuth();
            const user = auth.currentUser;
            const displayName = user.displayName;
            console.log(user.displayName);
            if(user.displayName==null){
                updateProfile(auth.currentUser, {
                    displayName: "YaVotó"
                  }).then(() => {
                    const calific = this.book.rating+1;

                    const updateBook = {
                        id:this.book.id,
                        rating: calific,
                        title: this.book.title,
                        votes: this.book.votes + 1
                    }
                    set(bookRef, updateBook);
                  }).catch((error) => {
                    
                  });
            }else{
                alert("Este usuario ya votó");
            }
            
        });
        starz2.addEventListener('click', (e, ev) =>{
            const db = getDatabase();
            const bookRef = ref(db, 'books/' + this.book.id);

            const auth = getAuth();
            const user = auth.currentUser;
            const displayName = user.displayName;
            console.log(user.displayName);
            if(user.displayName==null){
                updateProfile(auth.currentUser, {
                    displayName: "YaVotó"
                  }).then(() => {
                    const calific = this.book.rating+2;

                    const updateBook = {
                        id:this.book.id,
                        rating: calific,
                        title: this.book.title,
                        votes: this.book.votes + 1
                    }
                    set(bookRef, updateBook);
                  }).catch((error) => {
                    
                  });
            }else{
                alert("Este usuario ya votó");
            }
        });
        starz3.addEventListener('click', (e, ev) =>{
            const db = getDatabase();
            const bookRef = ref(db, 'books/' + this.book.id);

            const auth = getAuth();
            const user = auth.currentUser;
            const displayName = user.displayName;
            console.log(user.displayName);
            if(user.displayName==null){
                updateProfile(auth.currentUser, {
                    displayName: "YaVotó"
                  }).then(() => {
                    const calific = this.book.rating+3;

                    const updateBook = {
                        id:this.book.id,
                        rating: calific,
                        title: this.book.title,
                        votes: this.book.votes + 1
                    }
                    set(bookRef, updateBook);
                  }).catch((error) => {
                    
                  });
            }else{
                alert("Este usuario ya votó");
            }
        });
        starz4.addEventListener('click', (e, ev) =>{
            const db = getDatabase();
            const bookRef = ref(db, 'books/' + this.book.id);

            const auth = getAuth();
            const user = auth.currentUser;
            const displayName = user.displayName;
            console.log(user.displayName);
            if(user.displayName==null){
                updateProfile(auth.currentUser, {
                    displayName: "YaVotó"
                  }).then(() => {
                    const calific = this.book.rating+4;

                    const updateBook = {
                        id:this.book.id,
                        rating: calific,
                        title: this.book.title,
                        votes: this.book.votes + 1
                    }
                    set(bookRef, updateBook);
                  }).catch((error) => {
                    
                  });
            }else{
                alert("Este usuario ya votó");
            }
        });
        starz5.addEventListener('click', (e, ev) =>{
            const db = getDatabase();
            const bookRef = ref(db, 'books/' + this.book.id);

            const auth = getAuth();
            const user = auth.currentUser;
            const displayName = user.displayName;
            console.log(user.displayName);
            if(user.displayName==null){
                updateProfile(auth.currentUser, {
                    displayName: "YaVotó"
                  }).then(() => {
                    const calific = this.book.rating+5;

                    const updateBook = {
                        id:this.book.id,
                        rating: calific,
                        title: this.book.title,
                        votes: this.book.votes + 1
                    }
                    set(bookRef, updateBook);
                  }).catch((error) => {
                    
                  });
            }else{
                alert("Este usuario ya votó");
            }
        });

        return bookCard;
    }

}