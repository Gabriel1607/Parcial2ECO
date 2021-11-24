const firebaseConfig = {
    apiKey: "AIzaSyDhtSOgrpA8C-jsHlTMSrwRLXDRgu7dLbQ",
    authDomain: "eco-parcial2-2021-2.firebaseapp.com",
    projectId: "eco-parcial2-2021-2",
    storageBucket: "eco-parcial2-2021-2.appspot.com",
    messagingSenderId: "792097512835",
    appId: "1:792097512835:web:c4be62aeb3c53edd5f2ab6"
    };
  
  export function getFirebaseConfig(){
      if(!firebaseConfig || !firebaseConfig.apiKey){
          throw new Error("Firebase configuration error");
      }else{
          return firebaseConfig;
      }
    }