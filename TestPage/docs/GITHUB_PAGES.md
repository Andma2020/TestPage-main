# 🚀 Despliegue en GitHub Pages

## Pasos para desplegar tu página web en GitHub Pages

### 1. Crear un repositorio en GitHub

1. Ve a [github.com](https://github.com) e inicia sesión
2. Haz clic en el botón **"+"** en la esquina superior derecha
3. Selecciona **"New repository"**
4. Dale un nombre a tu repositorio (ej: `terapia-web`)
5. Configura como **Public** (importante para GitHub Pages gratuito)
6. Haz clic en **"Create repository"**

### 2. Subir tu código a GitHub

En tu terminal, ejecuta estos comandos:

```bash
cd C:/Users/anderson.mantilla/TestPage-main/TestPage

# Agregar archivos al git
git add .

# Hacer el primer commit
git commit -m "Initial commit - Terapia web page"

# Conectar con tu repositorio (reemplaza TU_USUARIO y NOMBRE_REPO)
git remote add origin https://github.com/TU_USUARIO/NOMBRE_REPO.git

# Subir el código
git branch -M main
git push -u origin main
```

### 3. Activar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Haz clic en **Settings** (configuración)
3. En el menú lateral, busca **Pages**
4. En **Source**, selecciona **Deploy from a branch**
5. En **Branch**, selecciona **main** y **/ (root)**
6. Haz clic en **Save**

### 4. Esperar el despliegue

GitHub Pages tomará unos minutos en desplegar tu sitio. Cuando esté listo, verás un enlace como:

```
https://TU_USUARIO.github.io/NOMBRE_REPO/
```

## 🌐 Tu URL final

Tu página web estará disponible en:
```
https://TU_USUARIO.github.io/NOMBRE_REPO/
```

## 🔄 Actualizar tu sitio

Cada vez que hagas cambios:

```bash
git add .
git commit -m "Descripción de los cambios"
git push
```

GitHub Pages actualizará automáticamente tu sitio.

## 📱 Compartir tu sitio

Ahora puedes compartir tu URL con cualquier persona y podrán acceder a tu página web desde cualquier navegador en cualquier lugar del mundo.

## ⚠️ Notas importantes

- El repositorio debe ser **Public** para GitHub Pages gratuito
- Los cambios pueden tardar 1-3 minutos en aparecer
- Asegúrate de que `index.html` esté en la raíz del repositorio
- GitHub Pages soporta sitios estáticos (HTML, CSS, JS)