# Estructura SCSS Organizada - Terapias Bogotá

## 📁 Nueva Estructura de Directorios

```
scss/
├── README.md                    # Esta documentación
├── main.scss                    # Archivo principal que importa todo
├── bootstrap.scss              # Punto de entrada para compatibilidad
├── bootstrap.css               # CSS compilado
├── bootstrap.css.map           # Source map
│
├── variables/                  # Variables globales
│   ├── _colors.scss           # Colores del proyecto
│   ├── _typography.scss       # Tipografía y fuentes
│   ├── _spacing.scss          # Espaciado y márgenes
│   └── _borders.scss          # Bordes y radios
│
├── components/                 # Componentes reutilizables
│   ├── _buttons.scss          # Estilos de botones
│   ├── _forms.scss            # Estilos de formularios
│   └── _cards.scss            # Estilos de tarjetas
│
├── layout/                     # Layout y estructura
│   ├── _header.scss           # Encabezado y navegación
│   ├── _footer.scss           # Pie de página
│   └── _hero.scss             # Hero y carrusel
│
├── utilities/                  # Utilidades y helpers
│   └── _animations.scss       # Animaciones y transiciones
│
└── vendor/                     # Librerías de terceros
    └── (archivos de Bootstrap)
```

## 🎨 Variables del Proyecto

### Colores
- `$primary: #15B9D9` - Color principal (azul cyan)
- `$secondary: #EFA286` - Color secundario (naranja suave)
- `$light: #FAF9FB` - Color claro (fondo)
- `$dark: #202135` - Color oscuro (texto)

### Tipografía
- `$font-family-base: 'Open Sans', sans-serif`
- `$headings-font-family: 'Playfair Display', serif`

### Espaciado
- `$border-radius: 10px` - Radio de borde consistente

## 📝 Uso

### Compilar SCSS

Para compilar los archivos SCSS a CSS:

```bash
# Usando Sass CLI
sass scss/bootstrap.scss css/bootstrap.css

# Con watch mode (para desarrollo)
sass --watch scss:css
```

### Importar en HTML

```html
<link href="css/bootstrap.css" rel="stylesheet">
```

## 🔧 Mantenimiento

### Agregar nuevos componentes

1. Crear archivo en la carpeta apropiada
2. Importar en `main.scss`
3. Compilar a CSS

### Modificar variables

Editar los archivos en la carpeta `variables/`:

```scss
// scss/variables/_colors.scss
$primary: #nuevo-color;
```

## 📦 Estructura de Importación

El archivo `main.scss` importa en este orden:

1. **Variables** - Definiciones globales
2. **Componentes** - Elementos reutilizables
3. **Layout** - Estructura de página
4. **Utilidades** - Helpers y animaciones
5. **Bootstrap** - Framework base
6. **Personalizados** - Estilos específicos del proyecto

## 🚀 Beneficios de esta Organización

- ✅ **Mantenibilidad**: Fácil encontrar y modificar estilos
- ✅ **Escalabilidad**: Simple agregar nuevos componentes
- ✅ **Consistencia**: Variables globales para diseño consistente
- ✅ **Performance**: Solo compila lo necesario
- ✅ **Colaboración**: Múltiples desarrolladores pueden trabajar en paralelo

## 🔄 Migración desde Bootstrap Original

Los archivos originales de Bootstrap se mantienen en `scss/bootstrap/scss/` para compatibilidad.