// Sistema de gestión de formularios - Terapias Bogotá

class FormManager {
    constructor() {
        this.storageKey = 'terapias_bogota_data';
        this.init();
    }

    init() {
        // Inicializar formularios
        this.setupForm('appointment-form', 'cita');
        this.setupForm('contact-form', 'contacto');
        this.setupForm('index-form', 'cita_principal');
        
        // Cargar datos existentes
        this.loadAllData();
    }

    setupForm(formId, type) {
        const form = document.getElementById(formId);
        if (!form) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleFormSubmit(form, type);
        });
    }

    handleFormSubmit(form, type) {
        const formData = new FormData(form);
        const data = {
            id: Date.now(),
            type: type,
            timestamp: new Date().toISOString(),
            data: {}
        };

        // Recopilar datos del formulario
        for (let [key, value] of formData.entries()) {
            data.data[key] = value;
        }

        // Guardar en localStorage
        this.saveData(data);

        // Mostrar confirmación
        this.showSuccessMessage(form);

        // Limpiar formulario
        form.reset();

        // Actualizar contador
        this.updateCounter();
    }

    saveData(data) {
        let allData = this.getAllData();
        allData.push(data);
        localStorage.setItem(this.storageKey, JSON.stringify(allData));
        
        console.log('Datos guardados:', data);
    }

    getAllData() {
        const data = localStorage.getItem(this.storageKey);
        return data ? JSON.parse(data) : [];
    }

    loadAllData() {
        const allData = this.getAllData();
        console.log('Total de registros:', allData.length);
        this.updateCounter();
    }

    updateCounter() {
        const counter = document.getElementById('data-counter');
        if (counter) {
            const count = this.getAllData().length;
            counter.textContent = count;
        }
    }

    showSuccessMessage(form) {
        // Crear mensaje de éxito
        const message = document.createElement('div');
        message.className = 'alert alert-success alert-dismissible fade show';
        message.innerHTML = `
            <strong>¡Éxito!</strong> Tu información ha sido guardada correctamente.
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;

        // Insertar después del formulario
        form.parentNode.insertBefore(message, form.nextSibling);

        // Remover después de 5 segundos
        setTimeout(() => {
            message.remove();
        }, 5000);
    }

    exportData() {
        const allData = this.getAllData();
        const dataStr = JSON.stringify(allData, null, 2);
        const dataBlob = new Blob([dataStr], {type: 'application/json'});
        const url = URL.createObjectURL(dataBlob);
        
        const link = document.createElement('a');
        link.href = url;
        link.download = `terapias_bogota_${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        
        URL.revokeObjectURL(url);
    }

    clearData() {
        if (confirm('¿Estás seguro de que quieres eliminar todos los datos?')) {
            localStorage.removeItem(this.storageKey);
            this.updateCounter();
            alert('Todos los datos han sido eliminados.');
        }
    }

    getDataByType(type) {
        const allData = this.getAllData();
        return allData.filter(item => item.type === type);
    }

    getDataByDateRange(startDate, endDate) {
        const allData = this.getAllData();
        return allData.filter(item => {
            const itemDate = new Date(item.timestamp);
            return itemDate >= new Date(startDate) && itemDate <= new Date(endDate);
        });
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    window.formManager = new FormManager();
});

// Funciones globales para acceso desde HTML
window.exportFormData = () => {
    if (window.formManager) {
        window.formManager.exportData();
    }
};

window.clearFormData = () => {
    if (window.formManager) {
        window.formManager.clearData();
    }
};