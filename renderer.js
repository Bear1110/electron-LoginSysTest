  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA5gSMC8YesBv9xaheJEAaFglXeExCdLyI",
    authDomain: "electronlogintest.firebaseapp.com",
    databaseURL: "https://electronlogintest.firebaseio.com",
    projectId: "electronlogintest",
    storageBucket: "",
    messagingSenderId: "103264841030"
  };
  firebase.initializeApp(config);

  var signUpBtn = document.getElementById('signUpBtn');
  var signIpBtn = document.getElementById('signInBtn');

  signUpBtn.addEventListener('click',()=>{
    let emailField = document.getElementById('email').value;
    let passwordField = document.getElementById('password').value;

    firebase.auth().createUserWithEmailAndPassword(emailField, passwordField).then(()=>{
        alert('User Create!!!');
    }).catch(function(error){
        if(error != null){
            console.log(error.message);
            return;
        }
        
    })
  });

  signIpBtn.addEventListener('click',()=>{
    let emailField = document.getElementById('email').value;
    let passwordField = document.getElementById('password').value;
    firebase.auth().signInWithEmailAndPassword(emailField, passwordField).then(()=>{
        document.location.href = 'pageTwo.html';
    }).catch(function(error){
        if(error != null){
            console.log(error.message);
            return;
        }
    })
});