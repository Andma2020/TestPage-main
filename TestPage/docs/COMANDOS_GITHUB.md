# 🚀 Comandos para subir a GitHub

## Configuración inicial

```bash
cd C:/Users/anderson.mantilla/TestPage-main/TestPage

# Configurar tu usuario de GitHub
git config user.name "Andma2020"
git config user.email "tu-email@ejemplo.com"  # Reemplaza con tu email de GitHub
```

## Subir código a GitHub

```bash
# Agregar todos los archivos
git add .

# Hacer el primer commit
git commit -m "Initial commit - Terapia web page"

# Conectar con tu repositorio
git remote add origin https://github.com/Andma2020/Terapias-Bogota.git

# Crear rama main y subir
git branch -M main
git push -u origin main
```

## 📝 Notas importantes

1. **Reemplaza el email** con tu email de GitHub real
2. **Nombre del repositorio**: He usado `Terapias-Bogota` (sin espacios)
3. Si GitHub te pide autenticación, usa tu **Personal Access Token** o **GitHub CLI**

## 🔐 Autenticación

Si te pide contraseña, usa un **Personal Access Token**:

1. Ve a GitHub → Settings → Developer settings → Personal access tokens
2. Genera un nuevo token con permisos `repo`
3. Usa el token como contraseña

## 🌐 URL final de tu sitio

```
https://andma2020.github.io/Terapias-Bogota/
```

## 🔄 Para futuros cambios

```bash
git add .
git commit -m "Descripción del cambio"
git push
```