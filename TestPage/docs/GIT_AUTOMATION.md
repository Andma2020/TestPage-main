# 🤖 Sistema de Automatización de Git

Este sistema automatiza el proceso de commit y push a GitHub para el proyecto Terapias Bogotá.

## 🚀 Características

- ✅ **Detección automática de cambios** en el proyecto
- ✅ **Generación inteligente de mensajes de commit** basados en los archivos modificados
- ✅ **Clasificación de cambios** por tipo de archivo (HTML, CSS, JS, SCSS, etc.)
- ✅ **Configuración automática** de git si no está configurado
- ✅ **Modo de monitoreo** para commits automáticos periódicos
- ✅ **Mensajes personalizados** cuando se necesiten

## 📋 Instalación

El sistema ya está incluido en el proyecto. No requiere instalación adicional.

## 🛠️ Uso

### Commit Automático Básico

```bash
npm run git:commit
```

Este comando:
1. Detecta los archivos modificados
2. Genera un mensaje de commit automático
3. Realiza el commit
4. Sube los cambios a GitHub

### Commit con Mensaje Personalizado

```bash
npm run git:commit:message "Tu mensaje personalizado"
```

### Modo de Monitoreo (Watch Mode)

```bash
npm run git:commit:watch
```

Este modo:
- Monitorea cambios cada 60 segundos (configurable)
- Realiza commits automáticos cuando detecta cambios
- Ideal para desarrollo continuo

### Despliegue Rápido

```bash
npm run deploy
```

Comando combinado que realiza el commit automático y muestra confirmación.

## ⚙️ Configuración

El sistema está preconfigurado con:

```javascript
{
  user: 'Andma2020',
  email: 'anderman8021@hotmail.com',
  repo: 'https://github.com/Andma2020/Terapias-Bogota.git'
}
```

### Personalizar Intervalo de Monitoreo

```bash
node git-automation.js --watch --interval=30000
```

Esto monitorea cambios cada 30 segundos.

## 📝 Formato de Mensajes de Commit

El sistema genera mensajes estructurados:

```
Actualización automática del proyecto

📄 HTML (2 archivos):
  - index.html
  - about.html

🎨 CSS (1 archivo):
  - style.css

⚡ JavaScript (1 archivo):
  - main.js

Co-Authored-By: CODA <coda@globant.com>
```

## 🔧 Funcionalidades Avanzadas

### Clasificación de Archivos

El sistema clasifica automáticamente los cambios por tipo:

- **HTML**: Archivos `.html`
- **CSS**: Archivos `.css`
- **JavaScript**: Archivos `.js`
- **SCSS**: Archivos `.scss`
- **Documentación**: Archivos `.md`
- **Otros**: Cualquier otro tipo de archivo

### Detección de Cambios

Utiliza `git status --porcelain` para detectar:
- Archivos modificados
- Archivos nuevos
- Archivos eliminados
- Archivos renombrados

### Configuración Automática

Si git no está configurado, el sistema:
- Configura el nombre de usuario
- Configura el email
- Configura el repositorio remoto

## 🎯 Casos de Uso

### 1. Desarrollo Continuo

```bash
# Iniciar monitoreo automático
npm run git:commit:watch
```

### 2. Commits Rápidos

```bash
# Commit automático después de hacer cambios
npm run git:commit
```

### 3. Commits con Contexto Específico

```bash
# Commit con mensaje personalizado
npm run git:commit:message "Corregir accesibilidad en formulario de citas"
```

### 4. Despliegue de Producción

```bash
# Commit y confirmación de despliegue
npm run deploy
```

## 🛡️ Seguridad

- ✅ Usa credenciales preconfiguradas
- ✅ No requiere tokens adicionales
- ✅ Compatible con autenticación SSH y HTTPS
- ✅ Manejo de errores robusto

## 📊 Monitoreo y Logs

El sistema proporciona información detallada:

```
🚀 Iniciando proceso de automatización de Git...

📋 Archivos modificados:
  M index.html
  M appointment.html

🔄 Agregando cambios al staging area...
✅ Agregando cambios al staging area completado

📝 Mensaje de commit:
Actualización automática del proyecto
...

🔄 Creando commit...
✅ Creando commit completado

🔄 Subiendo cambios a GitHub...
✅ Subiendo cambios a GitHub completado

🎉 Proceso completado exitosamente!
✅ Cambios subidos a GitHub automáticamente
```

## 🐛 Solución de Problemas

### Error: "git not found"

Asegúrate de tener git instalado:
```bash
git --version
```

### Error: "Authentication failed"

Verifica tus credenciales de GitHub:
```bash
git config --list
```

### Error: "Nothing to commit"

No hay cambios para commitear. El sistema lo detectará automáticamente.

## 🔄 Integración con Flujo de Trabajo

### Flujo de Desarrollo Recomendado

1. **Hacer cambios** en el proyecto
2. **Probar localmente** con `npm start`
3. **Commit automático** con `npm run git:commit`
4. **Verificar en GitHub** que los cambios estén presentes

### Integración con Editores

Puedes configurar tu editor para ejecutar el comando automáticamente:

**VS Code:**
```json
{
  "scripts": {
    "git:commit": "npm run git:commit"
  }
}
```

## 📚 Referencias

- [Documentación de Git](https://git-scm.com/doc)
- [GitHub API](https://docs.github.com/en/rest)
- [Node.js Child Process](https://nodejs.org/api/child_process.html)

## 🤝 Contribución

Para mejorar el sistema de automatización:

1. Modifica `git-automation.js`
2. Prueba los cambios localmente
3. Commit con `npm run git:commit`
4. Documenta los cambios

## 📞 Soporte

Para problemas o sugerencias:
- Email: terapiasbogota@gmail.com
- Teléfono: +571 3214304913

---

**Última actualización:** Septiembre 2024  
**Versión:** 1.0  
**Estado:** Activo y funcional