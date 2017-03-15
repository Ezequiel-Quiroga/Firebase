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
  	const ulList=document.getElementById('lista');
  	//referencia al la bd
  	const dbRefObject=firebase.database().ref().child('objeto');
  	const dbRefList=dbRefObject.child('habilidades');

  	//sincronizarlos cambios en la lista
  	dbRefList.on('child_added',snap=>{
  		const li=document.createElement('li');
  		li.innerText=snap.val();
  		li.id=snap.key;
  		ulList.appendChild(li);
  	});

  	//sincronizo cambios de objeto
  	dbRefObject.on('value',snap=> {
  		preObject.innerText=JSON.stringify(snap.val(),null,3);
  	});
} ());