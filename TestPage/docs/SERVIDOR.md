# Servidor Web Local

Para acceder a tu página web desde cualquier navegador (no solo localmente), sigue estos pasos:

## Iniciar el servidor

1. Abre una terminal en la carpeta del proyecto:
   ```bash
   cd C:/Users/anderson.mantilla/TestPage-main/TestPage
   ```

2. Ejecuta uno de estos comandos:
   ```bash
   npm start
   # o
   npm run dev
   ```

## Acceder a la página

El servidor se iniciará automáticamente en:
- **URL**: http://localhost:8080
- El navegador se abrirá automáticamente con la página

## Ventajas

- ✅ Acceso vía HTTP (http://localhost:8080) en lugar de file://
- ✅ Funciona correctamente con todos los navegadores
- ✅ Permite cargar recursos externos sin problemas de CORS
- ✅ Simula un entorno de servidor real

## Detener el servidor

Presiona `Ctrl + C` en la terminal para detener el servidor.

## Cambiar el puerto

Si necesitas usar otro puerto, edita el archivo `package.json` y cambia el número 8080 por el puerto que desees.