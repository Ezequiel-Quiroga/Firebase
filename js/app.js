(function(){
	// Initialize Firebase
  	var config = {
    	apiKey: "AIzaSyAUjAF3rQuu3TtTi3Po7HgmwikeKzhu1os",
    	authDomain: "appapp-13e8b.firebaseapp.com",
    	databaseURL: "https://appapp-13e8b.firebaseio.com",
    	storageBucket: "appapp-13e8b.appspot.com",
    	messagingSenderId: "47334882239"
  	};
  	firebase.initializeApp(config);
  	//referencia al objeto
  	const preObject=document.getElementById('objeto');

  	//referencia al la bd
  	const dbRefObject=firebase.database().ref().child('objeto');

  	//sincronizo cambios de objeto
  	dbRefObject.on('value',snap=> console.log(snap.val()));
} ()):