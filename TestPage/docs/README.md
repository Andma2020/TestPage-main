# Terapias Bogotá - Web Page

Página web de fisioterapia desplegada en GitHub Pages con sistema de gestión de formularios.

## 🌐 Ver en vivo

[Acceder a la página web](https://andma2020.github.io/Terapias-Bogota/)

## 🚀 Despliegue local

Para ejecutar localmente:

```bash
npm install
npm start
```

La página estará disponible en http://localhost:8080

## 📁 Estructura

- `index.html` - Página principal con formulario de citas
- `appointment.html` - Página de agendamiento de citas
- `contact.html` - Página de contacto
- `admin.html` - Panel de administración para gestionar formularios
- `css/` - Estilos compilados (Bootstrap + personalizados)
- `scss/` - Archivos fuente SCSS organizados por tipo
  - `variables/` - Variables globales (colores, tipografía, espaciado)
  - `components/` - Componentes reutilizables (botones, formularios, tarjetas)
  - `layout/` - Layout y estructura (header, footer, secciones)
  - `utilities/` - Utilidades y helpers (animaciones, helpers)
- `js/` - Scripts (main.js + form-manager.js)
- `img/` - Imágenes del sitio
- `lib/` - Librerías externas (Bootstrap, jQuery, Owl Carousel, WOW.js)

## 🛠️ Tecnologías

- HTML5 (Estructura semántica WCAG 2.1 AA)
- CSS3 (Bootstrap 5 + SCSS organizado + Estilos accesibles)
- JavaScript (ES6+ + Gestión de accesibilidad)
- jQuery
- Owl Carousel
- WOW.js
- LocalStorage (para persistencia de datos)
- ARIA (Roles, estados y propiedades accesibles)

## 🎨 Estructura SCSS

El proyecto utiliza una estructura SCSS organizada por tipo de archivo:

### Directorios SCSS
- **variables/** - Variables globales del proyecto
- **components/** - Componentes UI reutilizables
- **layout/** - Estructura y layout de páginas
- **utilities/** - Helpers y utilidades

### Archivos Principales
- `main.scss` - Archivo principal que importa todos los módulos
- `bootstrap.scss` - Punto de entrada para compatibilidad

Para más detalles, ver `scss/README.md` y `scss/MAINTENANCE.md`

## 🤖 Automatización de Git

El proyecto incluye un sistema de automatización para subir cambios a GitHub automáticamente:

### Comandos Disponibles

```bash
# Commit automático con mensaje generado
npm run git:commit

# Commit con mensaje personalizado
npm run git:commit:message "Tu mensaje aquí"

# Modo de monitoreo (commits automáticos cada 60s)
npm run git:commit:watch

# Despliegue rápido
npm run deploy
```

### Características

- ✅ Detección automática de cambios
- ✅ Mensajes de commit inteligentes
- ✅ Clasificación por tipo de archivo
- ✅ Configuración automática de git
- ✅ Modo de monitoreo continuo

Para más detalles, ver `GIT_AUTOMATION.md`

## ♿ Accesibilidad (WCAG 2.1 AA)

El sitio cumple con los estándares de accesibilidad WCAG 2.1 Nivel AA:

### Características Accesibles
- ✅ **Navegación por teclado** completa con skip links
- ✅ **Contraste de colores** WCAG AA compliant
- ✅ **Formularios accesibles** con labels y validación
- ✅ **ARIA labels** para componentes interactivos
- ✅ **Soporte para lectores de pantalla**
- ✅ **Modo alto contraste** y reducción de movimiento
- ✅ **Estructura semántica** HTML5 apropiada
- ✅ **Textos alternativos** descriptivos en imágenes

### Controles de Usuario
```javascript
// Modo alto contraste
enableHighContrast();
disableHighContrast();

// Reducción de movimiento
toggleReducedMotion();

// Tamaño de fuente
increaseFontSize();
decreaseFontSize();
resetFontSize();
```

### Atajos de Teclado
- `Alt+M` - Saltar al contenido principal
- `Alt+N` - Saltar a la navegación
- `Escape` - Cerrar modales y menús

Para más detalles, ver `ACCESIBILIDAD.md`

## 📋 Sistema de Formularios

### Formularios Disponibles

1. **Formulario de Citas (index.html)** - Agendamiento de citas principales
2. **Formulario de Citas (appointment.html)** - Sistema de agendamiento
3. **Formulario de Contacto (contact.html)** - Mensajes de contacto

### Características

- ✅ Validación de campos requeridos
- ✅ Almacenamiento local (localStorage)
- ✅ Panel de administración
- ✅ Exportación de datos (JSON)
- ✅ Filtros y búsqueda
- ✅ Vista detallada de registros

### Panel de Administración

Accede al panel de administración en: `admin.html`

**Funcionalidades:**
- Ver todos los registros de formularios
- Estadísticas en tiempo real
- Filtrar por tipo de formulario
- Buscar por nombre, correo, teléfono
- Ver detalles completos de cada registro
- Eliminar registros individuales
- Exportar todos los datos a JSON
- Eliminar todos los datos

### Uso de los Formularios

Los formularios guardan automáticamente los datos en el navegador del usuario. Para ver los datos:

1. Accede a `admin.html`
2. Verás todos los registros enviados
3. Puedes exportar los datos en formato JSON

## 🔧 Configuración

### Variables del Sistema

El sistema usa localStorage con la clave: `terapias_bogota_data`

### Estructura de Datos

```json
{
  "id": 1234567890,
  "type": "cita",
  "timestamp": "2024-01-01T12:00:00.000Z",
  "data": {
    "nombre": "Juan Pérez",
    "correo": "juan@email.com",
    "telefono": "1234567890",
    "genero": "Masculino",
    "fecha": "2024-01-15",
    "especialidad": "Fisioterapia",
    "comentarios": "Comentarios adicionales"
  }
}
```

## 📊 Estadísticas

El panel de administración muestra:
- Total de registros
- Citas agendadas
- Mensajes de contacto
- Citas desde página principal

## 🔄 Actualización de Datos

Los datos se actualizan automáticamente cuando:
- Se envía un formulario
- Se accede al panel de administración
- Se realizan cambios en los registros

## 🚨 Notas Importantes

- Los datos se almacenan localmente en el navegador
- Para ver datos de diferentes usuarios, necesitas un backend
- Los datos persisten incluso si se cierra el navegador
- Se recomienda exportar los datos regularmente

## 👤 Autor

Anderson Mantilla

## 📄 Licencia

ISC

## 📞 Contacto

- Email: terapiasbogota@gmail.com
- Teléfono: +571 3214304913
- Ubicación: Bogotá, Colombia