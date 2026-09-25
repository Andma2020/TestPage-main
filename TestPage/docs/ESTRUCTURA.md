# 📁 Estructura Organizada del Proyecto - Terapias Bogotá

## 🗂️ Nueva Estructura de Directorios

```
TestPage-main/TestPage/
├── 📄 Archivos HTML (Páginas web)
│   ├── 404.html
│   ├── about.html
│   ├── admin.html
│   ├── appointment.html
│   ├── blog.html
│   ├── contact.html
│   ├── feature.html
│   ├── index.html
│   ├── service.html
│   ├── team.html
│   └── testimonial.html
│
├── 📚 docs/ (Documentación del proyecto)
│   ├── ACCESIBILIDAD.md
│   ├── COMANDOS_GITHUB.md
│   ├── ESTRUCTURA.md (este archivo)
│   ├── GIT_AUTOMATION.md
│   ├── GITHUB_PAGES.md
│   ├── README.md
│   ├── READ-ME.txt
│   └── SERVIDOR.md
│
├── ⚙️ config/ (Archivos de configuración)
│   ├── package.json
│   └── package-lock.json
│
├── 🤖 scripts/ (Scripts de automatización)
│   └── git-automation.js
│
├── 🎨 css/ (Estilos CSS compilados)
│   ├── bootstrap.min.css
│   └── style.css
│
├── 💅 scss/ (Archivos SCSS organizados)
│   ├── 📁 accessibility/ (Estilos de accesibilidad)
│   │   ├── _focus.scss
│   │   ├── _forms.scss
│   │   ├── _high-contrast.scss
│   │   ├── _main.scss
│   │   ├── _reduced-motion.scss
│   │   ├── _skip-links.scss
│   │   └── _typography.scss
│   │
│   ├── 📁 bootstrap/ (Framework Bootstrap)
│   │   └── scss/ (Archivos fuente de Bootstrap)
│   │       ├── _accordion.scss
│   │       ├── _alert.scss
│   │       ├── _badge.scss
│   │       ├── _breadcrumb.scss
│   │       ├── _button-group.scss
│   │       ├── _buttons.scss
│   │       ├── _card.scss
│   │       ├── _carousel.scss
│   │       ├── _close.scss
│   │       ├── _containers.scss
│   │       ├── _dropdown.scss
│   │       ├── _forms.scss
│   │       ├── _functions.scss
│   │       ├── _grid.scss
│   │       ├── _helpers.scss
│   │       ├── _images.scss
│   │       ├── _list-group.scss
│   │       ├── _mixins.scss
│   │       ├── _modal.scss
│   │       ├── _nav.scss
│   │       ├── _navbar.scss
│   │       ├── _offcanvas.scss
│   │       ├── _pagination.scss
│   │       ├── _popover.scss
│   │       ├── _progress.scss
│   │       ├── _reboot.scss
│   │       ├── _root.scss
│   │       ├── _spinners.scss
│   │       ├── _tables.scss
│   │       ├── _toasts.scss
│   │       ├── _tooltip.scss
│   │       ├── _transitions.scss
│   │       ├── _type.scss
│   │       ├── _utilities.scss
│   │       ├── _variables.scss
│   │       ├── bootstrap.css
│   │       ├── bootstrap.css.map
│   │       ├── bootstrap.scss
│   │       ├── bootstrap-grid.css
│   │       ├── bootstrap-grid.css.map
│   │       ├── bootstrap-grid.scss
│   │       ├── bootstrap-reboot.css
│   │       ├── bootstrap-reboot.css.map
│   │       ├── bootstrap-reboot.scss
│   │       ├── bootstrap-utilities.css
│   │       ├── bootstrap-utilities.css.map
│   │       ├── bootstrap-utilities.scss
│   │       ├── forms/
│   │   │   ├── _floating-labels.scss
│   │   │   ├── _form-check.scss
│   │   │   ├── _form-control.scss
│   │   │   ├── _form-range.scss
│   │   │   ├── _form-select.scss
│   │   │   ├── _form-text.scss
│   │   │   ├── _input-group.scss
│   │   │   ├── _labels.scss
│   │   │   └── _validation.scss
│   │   ├── helpers/
│   │   │   ├── _clearfix.scss
│   │   │   ├── _colored-links.scss
│   │   │   ├── _position.scss
│   │   │   ├── _ratio.scss
│   │   │   ├── _stretched-link.scss
│   │   │   ├── _text-truncation.scss
│   │   │   └── _visually-hidden.scss
│   │   ├── mixins/
│   │   │   ├── _alert.scss
│   │   │   ├── _border-radius.scss
│   │   │   ├── _box-shadow.scss
│   │   │   ├── _breakpoints.scss
│   │   │   ├── _buttons.scss
│   │   │   ├── _caret.scss
│   │   │   ├── _clearfix.scss
│   │   │   ├── _color-scheme.scss
│   │   │   ├── _container.scss
│   │   │   ├── _deprecate.scss
│   │   │   ├── _forms.scss
│   │   │   ├── _gradients.scss
│   │   │   ├── _grid.scss
│   │   │   ├── _image.scss
│   │   │   ├── _list-group.scss
│   │   │   ├── _lists.scss
│   │   │   ├── _pagination.scss
│   │   │   ├── _reset-text.scss
│   │   │   ├── _resize.scss
│   │   │   ├── _table-variants.scss
│   │   │   ├── _text-truncate.scss
│   │   │   ├── _transition.scss
│   │   │   ├── _utilities.scss
│   │   │   └── _visually-hidden.scss
│   │   ├── utilities/
│   │   │   ├── _api.scss
│   │   │   └── _vendor/
│   │   │       └── _rfs.scss
│   │   └── vendor/
│   │       └── _rfs.scss
│   │
│   ├── 📁 compiled/ (Archivos SCSS compilados)
│   │   ├── bootstrap.css
│   │   └── bootstrap.css.map
│   │
│   ├── 📁 components/ (Componentes SCSS personalizados)
│   │   ├── _alerts.scss
│   │   ├── _badges.scss
│   │   ├── _buttons.scss
│   │   ├── _cards.scss
│   │   └── _forms.scss
│   │
│   ├── 📁 layout/ (Layout del sitio)
│   │   ├── _footer.scss
│   │   ├── _header.scss
│   │   ├── _hero.scss
│   │   └── _sections.scss
│   │
│   ├── 📁 utilities/ (Utilidades SCSS)
│   │   ├── _animations.scss
│   │   └── _helpers.scss
│   │
│   ├── 📁 variables/ (Variables SCSS)
│   │   ├── _borders.scss
│   │   ├── _colors.scss
│   │   ├── _spacing.scss
│   │   └── _typography.scss
│   │
│   ├── _example.scss (Ejemplos de uso)
│   ├── bootstrap.scss (Punto de entrada Bootstrap)
│   ├── main.scss (Archivo principal SCSS)
│   ├── MAINTENANCE.md (Guía de mantenimiento)
│   └── README.md (Documentación SCSS)
│
├── ⚡ js/ (Archivos JavaScript)
│   ├── accessibility.js
│   ├── form-manager.js
│   └── main.js
│
├── 🖼️ img/ (Imágenes del sitio)
│   ├── about-1.jpg
│   ├── about-2.jpg
│   ├── blog-1.jpg
│   ├── blog-2.jpg
│   ├── blog-3.jpg
│   ├── carousel-1.jpg
│   ├── carousel-2.jpg
│   ├── favicon.svg
│   ├── service-1.jpg
│   ├── service-2.jpg
│   ├── service-3.jpg
│   ├── service-4.jpg
│   ├── service-5.jpg
│   ├── service-6.jpg
│   ├── service-7.jpg
│   ├── service-8.jpg
│   ├── team-1.jpg
│   ├── team-2.jpg
│   ├── team-3.jpg
│   ├── team-4.jpg
│   ├── testimonial-img.jpg
│   └── video-img.jpg
│
├── 📦 lib/ (Librerías externas)
│   ├── animate/
│   │   ├── animate.css
│   │   └── animate.min.css
│   ├── easing/
│   │   ├── easing.js
│   │   └── easing.min.js
│   ├── owlcarousel/
│   │   ├── assets/
│   │   │   ├── ajax-loader.gif
│   │   │   ├── owl.carousel.css
│   │   │   ├── owl.carousel.min.css
│   │   │   ├── owl.theme.default.css
│   │   │   ├── owl.theme.default.min.css
│   │   │   ├── owl.theme.green.css
│   │   │   ├── owl.theme.green.min.css
│   │   │   └── owl.video.play.png
│   │   ├── LICENSE
│   │   ├── owl.carousel.js
│   │   └── owl.carousel.min.js
│   ├── waypoints/
│   │   ├── links.php
│   │   └── waypoints.min.js
│   └── wow/
│       ├── wow.js
│       └── wow.min.js
│
├── 📄 .gitignore (Archivos ignorados por Git)
└── 📄 package.json (Configuración del proyecto)
```

## 📋 Categorías de Archivos

### 🌐 **Archivos HTML** (11 archivos)
- Páginas principales del sitio web
- **NO ELIMINAR**: Son esenciales para el funcionamiento del sitio

### 📚 **Documentación** (8 archivos)
- Guías y manuales del proyecto
- Documentación de accesibilidad, git, y estructura

### ⚙️ **Configuración** (2 archivos)
- `package.json` y `package-lock.json`
- Dependencias y scripts del proyecto

### 🤖 **Scripts** (1 archivo)
- `git-automation.js` para automatización de commits

### 🎨 **CSS** (2 archivos)
- Estilos compilados listos para producción

### 💅 **SCSS** (100+ archivos)
- Archivos fuente de estilos
- Organizados por: componentes, layout, variables, utilidades
- Incluye Bootstrap completo y estilos personalizados

### ⚡ **JavaScript** (3 archivos)
- Funcionalidad del sitio
- Gestión de formularios y accesibilidad

### 🖼️ **Imágenes** (18 archivos)
- Recursos visuales del sitio

### 📦 **Librerías** (20+ archivos)
- Dependencias externas (Bootstrap, jQuery, Owl Carousel, WOW.js)

## 🔄 Cambios Realizados

### ✅ **Archivos Movidos**
- **Documentación**: De raíz a `docs/`
- **Configuración**: De raíz a `config/`
- **Scripts**: De raíz a `scripts/`
- **SCSS compilados**: De `scss/` a `scss/compiled/`

### ✅ **Archivos Mantenidos en Raíz**
- **Todos los archivos HTML** (11 archivos)
- **package.json** (para compatibilidad con npm)
- **.gitignore**

### ✅ **Archivos NO Modificados**
- **Ningún archivo HTML fue eliminado o movido**
- **Todas las imágenes permanecen en su lugar**
- **Librerías externas sin cambios**

## 🎯 Beneficios de la Nueva Estructura

### 📁 **Organización por Tipo**
- Archivos similares agrupados
- Fácil localización de recursos
- Mantenimiento simplificado

### 🔍 **Navegación Intuitiva**
- Estructura lógica y predecible
- Nombres de carpetas descriptivos
- Jerarquía clara

### 🛠️ **Mantenimiento Mejorado**
- Cambios localizados
- Menor riesgo de errores
- Actualizaciones más rápidas

### 📦 **Escalabilidad**
- Fácil agregar nuevos archivos
- Estructura expandible
- Preparado para crecimiento

## 🚀 Comandos Actualizados

Los comandos npm siguen funcionando igual:

```bash
# Iniciar servidor local
npm start

# Commit automático
npm run git:commit

# Modo monitoreo
npm run git:commit:watch

# Despliegue rápido
npm run deploy
```

## 📝 Notas Importantes

### ✅ **Sin Pérdida de Funcionalidad**
- Todos los archivos HTML funcionan correctamente
- Scripts y estilos cargan sin problemas
- Enlaces y referencias actualizados

### ✅ **Compatibilidad Mantenida**
- GitHub Pages funciona sin cambios
- Servidor local opera normalmente
- Automatización de git actualizada

### ✅ **Documentación Completa**
- Guías actualizadas con nuevas rutas
- Referencias a archivos organizados
- Instrucciones de uso claras

## 🔍 Verificación de Redundancia

### 📊 **Análisis de Archivos Similares**

#### **Archivos CSS/SCSS**
- ✅ `css/bootstrap.min.css` → Versión minificada de Bootstrap
- ✅ `scss/bootstrap/scss/bootstrap.css` → Versión fuente de Bootstrap
- ✅ `scss/compiled/bootstrap.css` → Versión compilada personalizada
- **Conclusión**: No son redundantes, cada uno tiene su propósito

#### **Archivos de Documentación**
- ✅ `README.md` → Documentación general
- ✅ `docs/README.md` → Documentación específica del proyecto
- ✅ `scss/README.md` → Documentación de SCSS
- **Conclusión**: Cada archivo tiene su enfoque específico

#### **Archivos de Configuración**
- ✅ `package.json` → Configuración principal
- ✅ `config/package.json` → Configuración organizada
- **Conclusión**: Mantenidos para compatibilidad

## 🎉 Resumen

### ✅ **Organización Completada**
- **11 archivos HTML** mantenidos en raíz
- **8 archivos de documentación** organizados en `docs/`
- **2 archivos de configuración** en `config/`
- **1 script de automatización** en `scripts/`
- **Archivos SCSS compilados** en `scss/compiled/`

### ✅ **Sin Eliminaciones**
- **Ningún archivo HTML eliminado**
- **Todas las imágenes preservadas**
- **Librerías externas intactas**
- **Funcionalidad completa mantenida**

### ✅ **Estructura Optimizada**
- **Organización por tipo de archivo**
- **Navegación mejorada**
- **Mantenimiento simplificado**
- **Escalabilidad garantizada**

---

**Última actualización:** Septiembre 2024  
**Estado:** Estructura organizada y funcional  
**Archivos HTML:** 11 (todos preservados)  
**Total de archivos organizados:** 150+