// ==========================================
// SISTEMA DE GESTIÓN DE FORMULARIOS V2 - Terapias Bogotá
// ==========================================

class FormManagerV2 {
    constructor() {
        this.storageKey = 'terapias_bogota_data';
        this.useFirebase = false; // Se activará si Firebase está disponible
        this.init();
    }

    init() {
        // Verificar si Firebase está disponible
        if (window.firebaseDB) {
            this.useFirebase = true;
            console.log('✅ Usando Firebase para almacenamiento');
        } else {
            console.log('⚠️ Firebase no disponible, usando localStorage');
        }

        // Inicializar formularios
        this.setupForm('index-form', 'cita');
        this.setupForm('appointment-form', 'cita');
        this.setupForm('contact-form', 'contacto');
        
        // Configurar fecha mínima para inputs de fecha
        this.setupDateInputs();
    }

    // Configurar un formulario específico
    setupForm(formId, type) {
        const form = document.getElementById(formId);
        if (!form) {
            console.warn(`⚠️ Formulario no encontrado: ${formId}`);
            return;
        }

        console.log(`✅ Formulario configurado: ${formId} (${type})`);

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log(`📝 Formulario enviado: ${formId}`);
            this.handleFormSubmit(form, type);
        });
    }

    // Manejar envío de formulario
    async handleFormSubmit(form, type) {
        try {
            console.log(`🚀 Procesando formulario: ${type}`);
            
            // Validar formulario
            if (!this.validateForm(form)) {
                console.warn('❌ Validación fallida');
                this.showNotification('Por favor completa todos los campos requeridos', 'error');
                return;
            }

            // Recopilar datos del formulario
            const formData = this.collectFormData(form, type);
            console.log('📊 Datos recopilados:', formData);
            
            // Guardar datos
            if (this.useFirebase) {
                console.log('💾 Guardando en Firebase...');
                await this.saveToFirebase(formData, type);
            } else {
                console.log('💾 Guardando en localStorage...');
                this.saveToLocalStorage(formData, type);
            }

            // Mostrar notificación de éxito
            this.showNotification('¡Formulario enviado exitosamente!', 'success');
            
            // Limpiar formulario
            form.reset();
            
            // Actualizar fecha mínima
            this.setupDateInputs();

        } catch (error) {
            console.error('❌ Error al procesar formulario:', error);
            this.showNotification('Error al enviar el formulario. Por favor intenta nuevamente.', 'error');
        }
    }

    // Validar formulario
    validateForm(form) {
        const requiredFields = form.querySelectorAll('[required]');
        let isValid = true;

        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.classList.add('is-invalid');
            } else {
                field.classList.remove('is-invalid');
            }
        });

        // Validar email
        const emailFields = form.querySelectorAll('input[type="email"]');
        emailFields.forEach(field => {
            if (field.value && !this.isValidEmail(field.value)) {
                isValid = false;
                field.classList.add('is-invalid');
            }
        });

        // Validar teléfono
        const phoneFields = form.querySelectorAll('input[type="tel"]');
        phoneFields.forEach(field => {
            if (field.value && !this.isValidPhone(field.value)) {
                isValid = false;
                field.classList.add('is-invalid');
            }
        });

        return isValid;
    }

    // Recopilar datos del formulario
    collectFormData(form, type) {
        const formData = new FormData(form);
        const data = {};
        
        formData.forEach((value, key) => {
            data[key] = value.trim();
        });

        // Agregar metadatos
        data.id = this.generateId();
        data.type = type;
        data.timestamp = new Date().toISOString();
        data.status = 'pendiente';
        
        // Agregar información del navegador
        data.userAgent = navigator.userAgent;
        data.ip = await this.getClientIP();

        return data;
    }

    // Guardar en Firebase
    async saveToFirebase(data, type) {
        try {
            const collection = type === 'cita' ? 'citas' : 'contactos';
            const ref = window.firebaseDB[collection];
            
            await ref.push(data);
            console.log('✅ Datos guardados en Firebase:', data.id);
        } catch (error) {
            console.error('Error al guardar en Firebase:', error);
            throw error;
        }
    }

    // Guardar en localStorage (fallback)
    saveToLocalStorage(data, type) {
        try {
            console.log(`💾 Guardando en localStorage (${type}):`, data);
            
            const existingData = JSON.parse(localStorage.getItem(this.storageKey) || '{}');
            console.log('📊 Datos existentes:', existingData);
            
            if (!existingData[type]) {
                existingData[type] = [];
            }
            
            existingData[type].push(data);
            localStorage.setItem(this.storageKey, JSON.stringify(existingData));
            
            console.log('✅ Datos guardados en localStorage:', data.id);
            console.log('📊 Total registros:', {
                citas: existingData.citas?.length || 0,
                contactos: existingData.contactos?.length || 0
            });
        } catch (error) {
            console.error('❌ Error al guardar en localStorage:', error);
            throw error;
        }
    }

    // Obtener todos los datos
    async getAllData() {
        if (this.useFirebase) {
            return await this.getDataFromFirebase();
        } else {
            return this.getDataFromLocalStorage();
        }
    }

    // Obtener datos de Firebase
    async getDataFromFirebase() {
        try {
            const [citasSnapshot, contactosSnapshot] = await Promise.all([
                window.firebaseDB.citas.once('value'),
                window.firebaseDB.contactos.once('value')
            ]);

            const citas = [];
            const contactos = [];

            if (citasSnapshot.exists()) {
                citasSnapshot.forEach(child => {
                    citas.push({ id: child.key, ...child.val() });
                });
            }

            if (contactosSnapshot.exists()) {
                contactosSnapshot.forEach(child => {
                    contactos.push({ id: child.key, ...child.val() });
                });
            }

            return { citas, contactos };
        } catch (error) {
            console.error('Error al obtener datos de Firebase:', error);
            throw error;
        }
    }

    // Obtener datos de localStorage
    getDataFromLocalStorage() {
        try {
            const data = JSON.parse(localStorage.getItem(this.storageKey) || '{}');
            console.log('📊 Datos obtenidos de localStorage:', {
                citas: data.citas?.length || 0,
                contactos: data.contactos?.length || 0,
                total: (data.citas?.length || 0) + (data.contactos?.length || 0)
            });
            
            return {
                citas: data.citas || [],
                contactos: data.contactos || []
            };
        } catch (error) {
            console.error('❌ Error al obtener datos de localStorage:', error);
            return { citas: [], contactos: [] };
        }
    }

    // Eliminar un registro
    async deleteRecord(type, id) {
        if (this.useFirebase) {
            const collection = type === 'cita' ? 'citas' : 'contactos';
            await window.firebaseDB[collection].child(id).remove();
        } else {
            const existingData = JSON.parse(localStorage.getItem(this.storageKey) || '{}');
            if (existingData[type]) {
                existingData[type] = existingData[type].filter(item => item.id !== id);
                localStorage.setItem(this.storageKey, JSON.stringify(existingData));
            }
        }
    }

    // Actualizar estado de un registro
    async updateRecordStatus(type, id, status) {
        if (this.useFirebase) {
            const collection = type === 'cita' ? 'citas' : 'contactos';
            await window.firebaseDB[collection].child(id).update({ status });
        } else {
            const existingData = JSON.parse(localStorage.getItem(this.storageKey) || '{}');
            if (existingData[type]) {
                const record = existingData[type].find(item => item.id === id);
                if (record) {
                    record.status = status;
                    localStorage.setItem(this.storageKey, JSON.stringify(existingData));
                }
            }
        }
    }

    // Configurar inputs de fecha
    setupDateInputs() {
        const dateInputs = document.querySelectorAll('input[type="date"]');
        const today = new Date().toISOString().split('T')[0];
        
        dateInputs.forEach(input => {
            input.setAttribute('min', today);
        });
    }

    // Generar ID único
    generateId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }

    // Validar email
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Validar teléfono
    isValidPhone(phone) {
        const phoneRegex = /^[0-9]{10}$/;
        return phoneRegex.test(phone.replace(/\D/g, ''));
    }

    // Obtener IP del cliente
    async getClientIP() {
        try {
            const response = await fetch('https://api.ipify.org?format=json');
            const data = await response.json();
            return data.ip;
        } catch (error) {
            return 'Desconocida';
        }
    }

    // Mostrar notificación
    showNotification(message, type = 'info') {
        // Crear elemento de notificación
        const notification = document.createElement('div');
        notification.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
        notification.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;';
        notification.innerHTML = `
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'} me-2"></i>
            ${message}
        `;

        document.body.appendChild(notification);

        // Auto eliminar después de 5 segundos
        setTimeout(() => {
            notification.remove();
        }, 5000);
    }

    // Exportar datos a CSV
    async exportToCSV(type) {
        try {
            const data = await this.getAllData();
            const records = type === 'citas' ? data.citas : data.contactos;
            
            if (records.length === 0) {
                this.showNotification('No hay datos para exportar', 'warning');
                return;
            }

            // Crear CSV
            const headers = Object.keys(records[0]);
            const csvContent = [
                headers.join(','),
                ...records.map(record => headers.map(header => 
                    `"${record[header] || ''}"`).join(','))
            ].join('\n');

            // Descargar archivo
            const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = `terapias_bogota_${type}_${new Date().toISOString().split('T')[0]}.csv`;
            link.click();

            this.showNotification('Datos exportados exitosamente', 'success');
        } catch (error) {
            console.error('Error al exportar datos:', error);
            this.showNotification('Error al exportar datos', 'error');
        }
    }
}

// Instancia global
const formManagerV2 = new FormManagerV2();

// Verificar inicialización
console.log('🔍 FormManagerV2 inicializado:', {
    storageKey: formManagerV2.storageKey,
    useFirebase: formManagerV2.useFirebase,
    formsConfigured: ['index-form', 'appointment-form', 'contact-form']
});

// Exportar para uso global
window.formManagerV2 = formManagerV2;