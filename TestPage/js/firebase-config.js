// ==========================================
// CONFIGURACIÓN FIREBASE - Terapias Bogotá
// ==========================================

// Configuración de Firebase (reemplaza con tus propias credenciales)
const firebaseConfig = {
    apiKey: "TU_API_KEY",
    authDomain: "tu-proyecto.firebaseapp.com",
    databaseURL: "https://tu-proyecto-default-rtdb.firebaseio.com",
    projectId: "tu-proyecto",
    storageBucket: "tu-proyecto.appspot.com",
    messagingSenderId: "TU_SENDER_ID",
    appId: "TU_APP_ID"
};

// Inicializar Firebase
if (typeof firebase !== 'undefined') {
    firebase.initializeApp(firebaseConfig);
    const database = firebase.database();
    
    // Referencias a la base de datos
    const db = {
        citas: database.ref('citas'),
        contactos: database.ref('contactos'),
        admin: database.ref('admin')
    };
    
    // Exportar para uso global
    window.firebaseDB = db;
    window.firebaseApp = firebase;
    
    console.log('✅ Firebase inicializado correctamente');
} else {
    console.error('❌ Firebase no está cargado. Asegúrate de incluir los scripts de Firebase.');
    // Fallback a localStorage si Firebase no está disponible
    window.firebaseDB = null;
}