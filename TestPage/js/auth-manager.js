// ==========================================
// SISTEMA DE AUTENTICACIÓN - Terapias Bogotá
// ==========================================

class AuthManager {
    constructor() {
        this.storageKey = 'terapias_bogota_auth';
        this.currentUser = null;
        this.init();
    }

    init() {
        // Verificar si hay sesión activa
        this.checkSession();
    }

    // Credenciales de administrador (en producción usar Firebase Auth)
    getAdminCredentials() {
        return {
            username: 'admin',
            password: 'terapias2024' // Cambiar en producción
        };
    }

    // Verificar sesión activa
    checkSession() {
        const session = localStorage.getItem(this.storageKey);
        if (session) {
            try {
                this.currentUser = JSON.parse(session);
                return true;
            } catch (error) {
                console.error('Error al leer sesión:', error);
                this.logout();
                return false;
            }
        }
        return false;
    }

    // Iniciar sesión
    login(username, password) {
        const credentials = this.getAdminCredentials();
        
        if (username === credentials.username && password === credentials.password) {
            this.currentUser = {
                username: username,
                loginTime: new Date().toISOString(),
                role: 'admin'
            };
            
            localStorage.setItem(this.storageKey, JSON.stringify(this.currentUser));
            return { success: true, message: 'Inicio de sesión exitoso' };
        }
        
        return { success: false, message: 'Credenciales incorrectas' };
    }

    // Cerrar sesión
    logout() {
        localStorage.removeItem(this.storageKey);
        this.currentUser = null;
        return { success: true, message: 'Sesión cerrada correctamente' };
    }

    // Verificar si está autenticado
    isAuthenticated() {
        return this.currentUser !== null;
    }

    // Obtener usuario actual
    getCurrentUser() {
        return this.currentUser;
    }

    // Proteger rutas
    protectRoute() {
        if (!this.isAuthenticated()) {
            // Redirigir a login si no está autenticado
            if (window.location.pathname.includes('admin.html')) {
                window.location.href = 'admin-login.html';
                return false;
            }
        }
        return true;
    }
}

// Instancia global
const authManager = new AuthManager();

// Exportar para uso global
window.authManager = authManager;