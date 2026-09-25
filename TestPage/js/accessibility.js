// ==========================================
// ACCESIBILIDAD - JAVASCRIPT
// Terapias Bogotá - WCAG 2.1 AA Compliance
// ==========================================

class AccessibilityManager {
    constructor() {
        this.init();
    }

    init() {
        this.setupSkipLinks();
        this.setupKeyboardNavigation();
        this.setupFormValidation();
        this.setupAriaLiveRegions();
        this.setupFocusManagement();
        this.setupReducedMotion();
        this.setupHighContrast();
        this.setupImageAltText();
        this.setupLinkDescriptions();
        this.setupErrorHandling();
    }

    // Skip Links functionality
    setupSkipLinks() {
        const skipLinks = document.querySelectorAll('.skip-link');
        skipLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.setAttribute('tabindex', '-1');
                    targetElement.focus();
                    
                    // Remove tabindex after blur
                    targetElement.addEventListener('blur', () => {
                        targetElement.removeAttribute('tabindex');
                    }, { once: true });
                }
            });
        });
    }

    // Enhanced keyboard navigation
    setupKeyboardNavigation() {
        // Handle Escape key for modals and dropdowns
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeAllModals();
                this.closeAllDropdowns();
            }
        });

        // Handle Tab key for focus trapping in modals
        const modals = document.querySelectorAll('[role="dialog"]');
        modals.forEach(modal => {
            modal.addEventListener('keydown', (e) => {
                if (e.key === 'Tab') {
                    this.trapFocus(modal, e);
                }
            });
        });

        // Improve focus indicators
        const style = document.createElement('style');
        style.textContent = `
            :focus-visible {
                outline: 3px solid #15B9D9 !important;
                outline-offset: 2px !important;
                box-shadow: 0 0 0 4px rgba(21, 185, 217, 0.3) !important;
            }
        `;
        document.head.appendChild(style);
    }

    // Form validation with accessibility
    setupFormValidation() {
        const forms = document.querySelectorAll('form[novalidate]');
        forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                if (!this.validateForm(form)) {
                    e.preventDefault();
                    this.showFormErrors(form);
                }
            });

            // Real-time validation
            const inputs = form.querySelectorAll('input, select, textarea');
            inputs.forEach(input => {
                input.addEventListener('blur', () => {
                    this.validateInput(input);
                });
                
                input.addEventListener('input', () => {
                    if (input.classList.contains('is-invalid')) {
                        this.validateInput(input);
                    }
                });
            });
        });
    }

    validateForm(form) {
        let isValid = true;
        const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
        
        inputs.forEach(input => {
            if (!this.validateInput(input)) {
                isValid = false;
            }
        });
        
        return isValid;
    }

    validateInput(input) {
        const formGroup = input.closest('.form-group') || input.parentElement;
        let isValid = true;
        let errorMessage = '';

        // Required validation
        if (input.hasAttribute('required') && !input.value.trim()) {
            isValid = false;
            errorMessage = 'Este campo es obligatorio';
        }

        // Email validation
        if (input.type === 'email' && input.value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value)) {
                isValid = false;
                errorMessage = 'Por favor ingresa un correo electrónico válido';
            }
        }

        // Phone validation
        if (input.type === 'tel' && input.value) {
            const phoneRegex = /^[0-9]{10}$/;
            if (!phoneRegex.test(input.value.replace(/\D/g, ''))) {
                isValid = false;
                errorMessage = 'Por favor ingresa un número de teléfono válido (10 dígitos)';
            }
        }

        // Pattern validation
        if (input.pattern && input.value) {
            const pattern = new RegExp(input.pattern);
            if (!pattern.test(input.value)) {
                isValid = false;
                errorMessage = 'El formato no es válido';
            }
        }

        // Update UI
        if (isValid) {
            input.classList.remove('is-invalid');
            input.classList.add('is-valid');
            input.setAttribute('aria-invalid', 'false');
            
            const errorElement = formGroup.querySelector('.error-message');
            if (errorElement) {
                errorElement.classList.remove('show');
            }
        } else {
            input.classList.remove('is-valid');
            input.classList.add('is-invalid');
            input.setAttribute('aria-invalid', 'true');
            
            let errorElement = formGroup.querySelector('.error-message');
            if (!errorElement) {
                errorElement = document.createElement('div');
                errorElement.className = 'error-message';
                formGroup.appendChild(errorElement);
            }
            
            errorElement.textContent = errorMessage;
            errorElement.classList.add('show');
            errorElement.setAttribute('role', 'alert');
        }

        return isValid;
    }

    showFormErrors(form) {
        const firstInvalid = form.querySelector('.is-invalid');
        if (firstInvalid) {
            firstInvalid.focus();
            this.announceToScreenReader('Hay errores en el formulario. Por favor corrígelos antes de enviar.');
        }
    }

    // ARIA live regions for dynamic content
    setupAriaLiveRegions() {
        // Create live regions if they don't exist
        if (!document.getElementById('aria-live-polite')) {
            const liveRegion = document.createElement('div');
            liveRegion.id = 'aria-live-polite';
            liveRegion.setAttribute('aria-live', 'polite');
            liveRegion.setAttribute('aria-atomic', 'true');
            liveRegion.className = 'visually-hidden';
            document.body.appendChild(liveRegion);
        }

        if (!document.getElementById('aria-live-assertive')) {
            const liveRegion = document.createElement('div');
            liveRegion.id = 'aria-live-assertive';
            liveRegion.setAttribute('aria-live', 'assertive');
            liveRegion.setAttribute('aria-atomic', 'true');
            liveRegion.className = 'visually-hidden';
            document.body.appendChild(liveRegion);
        }
    }

    announceToScreenReader(message, priority = 'polite') {
        const liveRegionId = priority === 'assertive' ? 'aria-live-assertive' : 'aria-live-polite';
        const liveRegion = document.getElementById(liveRegionId);
        
        if (liveRegion) {
            liveRegion.textContent = '';
            setTimeout(() => {
                liveRegion.textContent = message;
            }, 100);
        }
    }

    // Focus management
    setupFocusManagement() {
        // Save last focused element before modal opens
        let lastFocusedElement;
        
        document.querySelectorAll('[data-bs-toggle="modal"]').forEach(trigger => {
            trigger.addEventListener('click', () => {
                lastFocusedElement = document.activeElement;
            });
        });

        // Restore focus when modal closes
        document.querySelectorAll('[data-bs-dismiss="modal"]').forEach(closeBtn => {
            closeBtn.addEventListener('click', () => {
                if (lastFocusedElement) {
                    setTimeout(() => {
                        lastFocusedElement.focus();
                    }, 100);
                }
            });
        });
    }

    trapFocus(element, event) {
        const focusableElements = element.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstFocusable = focusableElements[0];
        const lastFocusable = focusableElements[focusableElements.length - 1];

        if (event.shiftKey && document.activeElement === firstFocusable) {
            event.preventDefault();
            lastFocusable.focus();
        } else if (!event.shiftKey && document.activeElement === lastFocusable) {
            event.preventDefault();
            firstFocusable.focus();
        }
    }

    // Reduced motion support
    setupReducedMotion() {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        
        if (prefersReducedMotion.matches) {
            // Disable animations
            document.body.classList.add('reduced-motion');
            
            // Disable carousel auto-play
            const carousels = document.querySelectorAll('.owl-carousel');
            carousels.forEach(carousel => {
                if (carousel.owl) {
                    carousel.owl.trigger('stop.owl.autoplay');
                }
            });
        }

        // Listen for changes
        prefersReducedMotion.addEventListener('change', () => {
            if (prefersReducedMotion.matches) {
                document.body.classList.add('reduced-motion');
            } else {
                document.body.classList.remove('reduced-motion');
            }
        });
    }

    // High contrast mode support
    setupHighContrast() {
        const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');
        
        if (prefersHighContrast.matches) {
            document.body.classList.add('high-contrast');
        }

        prefersHighContrast.addEventListener('change', () => {
            if (prefersHighContrast.matches) {
                document.body.classList.add('high-contrast');
            } else {
                document.body.classList.remove('high-contrast');
            }
        });
    }

    // Image alt text improvement
    setupImageAltText() {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            if (!img.alt || img.alt === '' || img.alt === 'Image') {
                // Generate descriptive alt text based on context
                const parent = img.closest('.service-item, .team-member, .blog-item');
                if (parent) {
                    const title = parent.querySelector('h5, h4, h3');
                    if (title) {
                        img.alt = `Imagen relacionada con ${title.textContent.trim()}`;
                    }
                } else {
                    img.alt = 'Imagen descriptiva del contenido';
                }
            }
        });
    }

    // Link descriptions
    setupLinkDescriptions() {
        const links = document.querySelectorAll('a[href="#"]');
        links.forEach(link => {
            if (!link.getAttribute('aria-label') && !link.textContent.trim()) {
                const icon = link.querySelector('i, [class*="fa-"]');
                if (icon) {
                    const iconClass = Array.from(icon.classList).find(cls => cls.includes('fa-'));
                    if (iconClass) {
                        link.setAttribute('aria-label', this.getIconDescription(iconClass));
                    }
                }
            }
        });
    }

    getIconDescription(iconClass) {
        const iconDescriptions = {
            'fa-facebook': 'Facebook',
            'fa-twitter': 'Twitter',
            'fa-instagram': 'Instagram',
            'fa-linkedin': 'LinkedIn',
            'fa-phone': 'Teléfono',
            'fa-envelope': 'Correo electrónico',
            'fa-map-marker': 'Ubicación',
            'fa-bars': 'Menú',
            'fa-times': 'Cerrar',
            'fa-arrow-up': 'Ir arriba',
            'fa-arrow-left': 'Atrás',
            'fa-arrow-right': 'Adelante',
            'fa-search': 'Buscar',
            'fa-user': 'Usuario',
            'fa-shopping-cart': 'Carrito de compras',
            'fa-heart': 'Favoritos',
            'fa-star': 'Estrella',
            'fa-check': 'Correcto',
            'fa-times-circle': 'Incorrecto',
            'fa-info-circle': 'Información',
            'fa-question-circle': 'Ayuda',
            'fa-exclamation-circle': 'Advertencia',
            'fa-play': 'Reproducir',
            'fa-pause': 'Pausar',
            'fa-volume-up': 'Activar sonido',
            'fa-volume-mute': 'Silenciar',
            'fa-expand': 'Expandir',
            'fa-compress': 'Comprimir'
        };

        for (const [key, description] of Object.entries(iconDescriptions)) {
            if (iconClass.includes(key)) {
                return description;
            }
        }

        return 'Enlace';
    }

    // Error handling
    setupErrorHandling() {
        window.addEventListener('error', (e) => {
            console.error('Error:', e.message);
            this.announceToScreenReader('Ha ocurrido un error. Por favor recarga la página.', 'assertive');
        });

        // Handle form submission errors
        document.addEventListener('submit', (e) => {
            const form = e.target;
            if (form.tagName === 'FORM') {
                form.addEventListener('submit-error', () => {
                    this.announceToScreenReader('Error al enviar el formulario. Por favor intenta nuevamente.', 'assertive');
                });
            }
        });
    }

    // Utility methods
    closeAllModals() {
        const modals = document.querySelectorAll('[role="dialog"].show');
        modals.forEach(modal => {
            const closeBtn = modal.querySelector('[data-bs-dismiss="modal"]');
            if (closeBtn) {
                closeBtn.click();
            }
        });
    }

    closeAllDropdowns() {
        const dropdowns = document.querySelectorAll('.dropdown-menu.show');
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove('show');
            const toggle = dropdown.previousElementSibling;
            if (toggle && toggle.classList.contains('dropdown-toggle')) {
                toggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // Public methods for external use
    enableHighContrastMode() {
        document.body.classList.add('high-contrast');
        this.announceToScreenReader('Modo de alto contraste activado');
    }

    disableHighContrastMode() {
        document.body.classList.remove('high-contrast');
        this.announceToScreenReader('Modo de alto contraste desactivado');
    }

    enableReducedMotion() {
        document.body.classList.add('reduced-motion');
        this.announceToScreenReader('Animaciones reducidas');
    }

    disableReducedMotion() {
        document.body.classList.remove('reduced-motion');
        this.announceToScreenReader('Animaciones restauradas');
    }

    increaseFontSize() {
        const html = document.documentElement;
        const currentSize = parseFloat(window.getComputedStyle(html).fontSize);
        const newSize = Math.min(currentSize + 2, 24); // Max 24px
        html.style.fontSize = `${newSize}px`;
        this.announceToScreenReader(`Tamaño de fuente aumentado a ${newSize}px`);
    }

    decreaseFontSize() {
        const html = document.documentElement;
        const currentSize = parseFloat(window.getComputedStyle(html).fontSize);
        const newSize = Math.max(currentSize - 2, 14); // Min 14px
        html.style.fontSize = `${newSize}px`;
        this.announceToScreenReader(`Tamaño de fuente reducido a ${newSize}px`);
    }

    resetFontSize() {
        document.documentElement.style.fontSize = '';
        this.announceToScreenReader('Tamaño de fuente restablecido');
    }
}

// Initialize accessibility manager when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.accessibilityManager = new AccessibilityManager();
});

// Make methods available globally for accessibility controls
window.enableHighContrast = () => {
    if (window.accessibilityManager) {
        window.accessibilityManager.enableHighContrastMode();
    }
};

window.disableHighContrast = () => {
    if (window.accessibilityManager) {
        window.accessibilityManager.disableHighContrastMode();
    }
};

window.toggleReducedMotion = () => {
    if (window.accessibilityManager) {
        if (document.body.classList.contains('reduced-motion')) {
            window.accessibilityManager.disableReducedMotion();
        } else {
            window.accessibilityManager.enableReducedMotion();
        }
    }
};

window.increaseFontSize = () => {
    if (window.accessibilityManager) {
        window.accessibilityManager.increaseFontSize();
    }
};

window.decreaseFontSize = () => {
    if (window.accessibilityManager) {
        window.accessibilityManager.decreaseFontSize();
    }
};

window.resetFontSize = () => {
    if (window.accessibilityManager) {
        window.accessibilityManager.resetFontSize();
    }
};