# Guía de Mantenimiento SCSS - Terapias Bogotá

## 📋 Reglas de Organización

### Convenciones de Nombres

- **Variables**: Usar kebab-case para nombres descriptivos
  ```scss
  $primary-color: #15B9D9;
  $font-size-base: 1rem;
  ```

- **Componentes**: Usar BEM (Block Element Modifier)
  ```scss
  .card { }
  .card__header { }
  .card--featured { }
  ```

- **Mixins**: Usar camelCase
  ```scss
  @mixin flexCenter { }
  ```

### Estructura de Archivos

Cada archivo debe tener:

1. **Encabezado descriptivo**
   ```scss
   // ==========================================
   // CATEGORÍA - NOMBRE DEL ARCHIVO
   // ==========================================
   ```

2. **Comentarios de sección**
   ```scss
   // Sección principal
   // Sub-sección
   ```

3. **Agrupación lógica**
   ```scss
   // Variables
   // Estilos base
   // Modificadores
   // Responsive
   ```

## 🔧 Tareas Comunes

### Agregar Nuevo Componente

1. Crear archivo en carpeta apropiada:
   ```bash
   # Para componentes
   scss/components/_nuevo-componente.scss
   
   # Para layout
   scss/layout/_nuevo-layout.scss
   ```

2. Agregar contenido con estructura estándar

3. Importar en `main.scss`:
   ```scss
   @import 'components/nuevo-componente';
   ```

4. Compilar a CSS

### Modificar Variables

1. Editar archivo correspondiente en `variables/`
2. Los cambios se aplican globalmente
3. No requiere recompilación si se usa Sass watch

### Agregar Nueva Animación

1. Editar `scss/utilities/_animations.scss`
2. Agregar keyframes:
   ```scss
   @keyframes nuevaAnimacion {
     from { }
     to { }
   }
   ```

3. Agregar clase de utilidad:
   ```scss
   .nueva-animacion {
     animation: nuevaAnimacion 0.6s ease-in-out;
   }
   ```

## 🎨 Mejores Prácticas

### Nesting (Anidamiento)

- **Máximo 3 niveles de anidamiento**
- **Evitar anidamiento excesivo**

```scss
// ✅ Bueno
.card {
  .card__header {
    .card__title {
      color: $primary;
    }
  }
}

// ❌ Malo (demasiado anidamiento)
.card {
  .card__header {
    .card__title {
      .card__title__text {
        .card__title__text__span {
          color: $primary;
        }
      }
    }
  }
}
```

### Uso de Variables

- **Siempre usar variables para colores**
- **Usar variables para espaciado consistente**
- **Definir variables para valores repetitivos**

```scss
// ✅ Bueno
.btn-primary {
  background-color: $primary;
  padding: $spacer $spacer * 2;
}

// ❌ Malo (valores hardcoded)
.btn-primary {
  background-color: #15B9D9;
  padding: 1rem 2rem;
}
```

### Comentarios

- **Comentar secciones importantes**
- **Explicar lógica compleja**
- **Documentar mixins y funciones**

```scss
// ==========================================
// COMPONENTES - BOTONES
// ==========================================

// Botón principal con efecto hover
.btn-primary {
  background-color: $primary;
  
  &:hover {
    // Oscurecer color al pasar el mouse
    background-color: darken($primary, 10%);
  }
}
```

## 🚀 Optimización

### Performance

- **Usar `@extend` con moderación**
- **Preferir mixins sobre @extend para componentes**
- **Evitar selectores universales**

### Mantenibilidad

- **Un archivo = una responsabilidad**
- **Nombres descriptivos y consistentes**
- **Documentar cambios importantes**

## 📦 Compilación

### Comandos Útiles

```bash
# Compilar una vez
sass scss/bootstrap.scss css/bootstrap.css

# Modo watch (desarrollo)
sass --watch scss:css

# Compilar comprimido (producción)
sass --style compressed scss/bootstrap.scss css/bootstrap.min.css

# Con source map (debugging)
sass --source-map scss/bootstrap.scss css/bootstrap.css
```

### Integración con Build Tools

Para integrar con herramientas como Webpack, Gulp, etc:

```javascript
// Ejemplo con webpack
module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
}
```

## 🐛 Solución de Problemas

### Errores Comunes

1. **Variables no definidas**
   - Verificar que el archivo de variables esté importado primero
   - Revisar ortografía del nombre de variable

2. **Estilos no se aplican**
   - Verificar orden de importación en main.scss
   - Revisar especificidad de selectores
   - Limpiar caché del navegador

3. **Compilación lenta**
   - Reducir anidamiento
   - Optimizar imports
   - Usar @import solo para archivos necesarios

## 📚 Recursos

- [Documentación oficial de Sass](https://sass-lang.com/documentation)
- [Guía de estilo Sass](https://sass-guidelin.es/)
- [Mejores prácticas CSS](https://css-tricks.com/)