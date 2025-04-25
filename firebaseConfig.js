const firebaseConfig = {
  apiKey: "AIzaSyCPi7ueFICScnAPhUuoUeo52xyxocr7T_M",
  authDomain: "iesencuesta.firebaseapp.com",
  projectId: "iesencuesta",
  storageBucket: "iesencuesta.firebasestorage.app",
  messagingSenderId: "713817230380",
  appId: "1:713817230380:web:762944cb969becbf98d589",
  measurementId: "G-HQ83YS382L"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Verificar que Firebase se ha inicializado correctamente
firebase.firestore().enablePersistence()
  .then(function() {
    console.log("Conexión a Firestore exitosa");
  })
  .catch(function(err) {
    if (err.code === 'failed-precondition') {
      console.error("La persistencia no está habilitada debido a múltiples pestañas abiertas.");
    } else if (err.code === 'unimplemented') {
      console.error("La persistencia no está disponible en este navegador.");
    } else {
      console.error("Error al conectar a Firestore:", err);
    }
  });
