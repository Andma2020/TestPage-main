# 🎯 Guía de Accesibilidad - Terapias Bogotá

## 📋 Resumen de Mejoras de Accesibilidad

Este documento describe las mejoras de accesibilidad implementadas para cumplir con los estándares **WCAG 2.1 AA**.

## ✅ Mejoras Implementadas

### 1. 🏗️ Estructura Semántica HTML

#### Landmarks y Roles ARIA
- ✅ `<header role="banner">` para encabezados
- ✅ `<nav role="navigation">` para navegación principal
- ✅ `<main role="main">` para contenido principal
- ✅ `<footer role="contentinfo">` para pie de página
- ✅ `<aside role="complementary">` para contenido complementario

#### Jerarquía de Headings
- ✅ Estructura jerárquica correcta (h1 → h2 → h3)
- ✅ Solo un h1 por página
- ✅ Headings descriptivos y significativos

#### Metadatos
- ✅ `lang="es"` para idioma español
- ✅ Meta description descriptiva
- ✅ Meta keywords relevantes
- ✅ Meta author y theme-color

### 2. ⌨️ Navegación por Teclado

#### Skip Links
- ✅ Enlaces para saltar al contenido principal
- ✅ Enlaces para saltar a la navegación
- ✅ Visibles solo al recibir foco
- ✅ Posicionamiento correcto al activar

#### Focus Management
- ✅ Indicadores de foco visibles y claros
- ✅ Orden lógico de tabulación
- ✅ Trapping de foco en modales
- ✅ Restauración de foco al cerrar modales

#### Atajos de Teclado
- ✅ `Escape` para cerrar modales y dropdowns
- ✅ `Tab` y `Shift+Tab` para navegación
- ✅ `Enter` y `Space` para activar elementos

### 3. 🎨 Contraste de Colores

#### Cumplimiento WCAG AA
- ✅ Contraste mínimo 4.5:1 para texto normal
- ✅ Contraste mínimo 3:1 para texto grande
- ✅ Contraste mínimo 3:1 para componentes interactivos

#### Modo Alto Contraste
- ✅ Soporte para `prefers-contrast: high`
- ✅ Clase `.high-contrast` manual
- ✅ Colores alternativos para mejor visibilidad

### 4. 📝 Formularios Accesibles

#### Labels y Descripciones
- ✅ Labels asociados explícitamente con `for` e `id`
- ✅ Labels ocultos visualmente pero accesibles
- ✅ Descripciones de campo con `aria-describedby`
- ✅ Textos de ayuda claros y concisos

#### Validación Accesible
- ✅ Validación en tiempo real
- ✅ Mensajes de error descriptivos
- ✅ Indicadores visuales de estado
- ✅ `aria-invalid` para campos con errores
- ✅ `aria-required` para campos obligatorios

#### Tipos de Input Apropiados
- ✅ `type="email"` para correos
- ✅ `type="tel"` para teléfonos
- ✅ `type="date"` para fechas
- ✅ Patrones de validación específicos

#### Feedback de Usuario
- ✅ Mensajes de éxito claros
- ✅ Anuncios a lectores de pantalla
- ✅ Confirmación antes de acciones destructivas

### 5. 🖼️ Imágenes y Multimedia

#### Texto Alternativo
- ✅ `alt` descriptivo para todas las imágenes
- ✅ `alt=""` para imágenes decorativas
- ✅ `aria-hidden="true"` para iconos decorativos
- ✅ Descripciones contextuales apropiadas

#### Video y Audio
- ✅ Controles accesibles
- ✅ Subtítulos disponibles
- ✅ Transcripciones para contenido de audio
- ✅ Alternativas textuales

### 6. 🏷️ ARIA Labels y Roles

#### Roles Semánticos
- ✅ `role="navigation"` para menús
- ✅ `role="dialog"` para modales
- ✅ `role="alert"` para mensajes importantes
- ✅ `role="status"` para actualizaciones

#### Estados y Propiedades
- ✅ `aria-expanded` para elementos expandibles
- ✅ `aria-selected` para elementos seleccionados
- ✅ `aria-pressed` para botones de toggle
- ✅ `aria-current="page"` para página actual

#### Live Regions
- ✅ `aria-live="polite"` para actualizaciones
- ✅ `aria-live="assertive"` para errores críticos
- ✅ `aria-atomic="true"` para anuncios completos

### 7. 📖 Tipografía y Legibilidad

#### Tamaño de Fuente
- ✅ Tamaño base de 16px
- ✅ Soporte para zoom hasta 200%
- ✅ Line-height adecuado (1.6)
- ✅ Longitud de línea óptima (70ch)

#### Espaciado
- ✅ Espaciado consistente
- ✅ Márgenes adecuados entre párrafos
- ✅ Padding suficiente en elementos interactivos
- ✅ Touch targets de mínimo 44x44px

### 8. 🎬 Animaciones y Movimiento

#### Reducción de Movimiento
- ✅ Soporte para `prefers-reduced-motion`
- ✅ Desactivación de animaciones automáticas
- ✅ Opción manual para reducir movimiento
- ✅ Transiciones controlables

#### Control de Usuario
- ✅ Posibilidad de pausar animaciones
- ✅ Sin parpadeo o contenido intermitente
- ✅ Sin contenido que se mueve automáticamente

### 9. 🎯 Estilos CSS Accesibles

#### Focus Visible
- ✅ Indicadores de foco claros
- ✅ Contraste suficiente en foco
- ✅ Outline visible en todos los elementos interactivos
- ✅ `:focus-visible` para navegación por teclado

#### Responsive Design
- ✅ Accesible en todos los dispositivos
- ✅ Sin contenido horizontal scroll
- ✅ Tamaño de toque adecuado en móviles
- ✅ Orientación flexible

### 10. 🔧 JavaScript Accesible

#### Gestión de Eventos
- ✅ Soporte para teclado y mouse
- ✅ Prevención de comportamientos no deseados
- ✅ Manejo apropiado de eventos
- ✅ No dependencia exclusiva de JavaScript

#### Anuncios a Lectores de Pantalla
- ✅ Live regions para contenido dinámico
- ✅ Anuncios de errores y éxito
- ✅ Actualizaciones de estado
- ✅ Navegación por voz mejorada

## 🛠️ Herramientas de Accesibilidad

### Controles de Usuario Disponibles

```javascript
// Activar modo alto contraste
enableHighContrast();

// Desactivar modo alto contraste
disableHighContrast();

// Alternar reducción de movimiento
toggleReducedMotion();

// Aumentar tamaño de fuente
increaseFontSize();

// Disminuir tamaño de fuente
decreaseFontSize();

// Restablecer tamaño de fuente
resetFontSize();
```

### Atajos de Teclado

- `Tab` - Navegar al siguiente elemento
- `Shift+Tab` - Navegar al elemento anterior
- `Enter` - Activar enlace o botón
- `Space` - Activar botón o checkbox
- `Escape` - Cerrar modal o menú
- `Alt+M` - Saltar al contenido principal
- `Alt+N` - Saltar a la navegación

## 📊 Cumplimiento WCAG 2.1

### Nivel AA Cumplido

#### Perceptible
- ✅ Alternativas textuales (1.1)
- ✅ Audio y video con alternativas (1.2)
- ✅ Adaptable (1.3)
- ✅ Distinguible (1.4)

#### Operable
- ✅ Accible por teclado (2.1)
- ✅ Tiempo suficiente (2.2)
- ✅ Convulsiones y reacciones físicas (2.3)
- ✅ Navegable (2.4)
- ✅ Modalidades de entrada (2.5)

#### Comprensible
- ✅ Legible y comprensible (3.1)
- ✅ Predecible (3.2)
- ✅ Asistencia en la entrada (3.3)

#### Robusto
- ✅ Compatible (4.1)

## 🧪 Pruebas de Accesibilidad

### Herramientas Recomendadas

1. **Automatizadas**
   - WAVE Web Accessibility Evaluator
   - axe DevTools
   - Lighthouse Accessibility Audit
   - ARC Toolkit

2. **Manuales**
   - Navegación por teclado
   - Lector de pantalla (NVDA, JAWS)
   - Zoom del navegador (200%)
   - Alto contraste del sistema

3. **Usuarios Reales**
   - Pruebas con usuarios con discapacidad
   - Feedback de lectores de pantalla
   - Pruebas con diferentes dispositivos

## 📚 Recursos Adicionales

### Documentación
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [Accessible Rich Internet Applications](https://www.w3.org/TR/wai-aria-1.2/)

### Herramientas
- [WAVE](https://wave.webaim.org/)
- [axe DevTools](https://www.deque.com/axe/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

### Comunidades
- [WebAIM](https://webaim.org/)
- [A11Y Project](https://www.a11yproject.com/)
- [Accessibility Guidelines](https://www.accessibilityguidelines.org/)

## 🔄 Mantenimiento Continuo

### Checklist de Accesibilidad

- [ ] Verificar contraste de colores en nuevos diseños
- [ ] Probar navegación por teclado en nuevas funcionalidades
- [ ] Agregar alt text a nuevas imágenes
- [ ] Validar formularios con lectores de pantalla
- [ ] Probar con diferentes dispositivos y navegadores
- [ ] Verificar compatibilidad con herramientas de accesibilidad
- [ ] Actualizar documentación de cambios
- [ ] Realizar auditorías periódicas

### Monitoreo

- Auditorías mensuales de accesibilidad
- Pruebas con usuarios cada trimestre
- Actualización de herramientas y técnicas
- Revisión de nuevas características WCAG

## 📞 Soporte

Para preguntas o sugerencias sobre accesibilidad, contactar a:
- Email: terapiasbogota@gmail.com
- Teléfono: +571 3214304913

---

**Última actualización:** Septiembre 2024  
**Versión:** 1.0  
**Cumplimiento:** WCAG 2.1 AA