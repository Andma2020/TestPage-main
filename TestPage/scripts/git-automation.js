#!/usr/bin/env node

/**
 * Sistema de Automatización de Git para Terapias Bogotá
 * Este script automatiza el proceso de commit y push a GitHub
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class GitAutomation {
    constructor() {
        this.projectDir = process.cwd();
        this.gitConfig = {
            user: 'Andma2020',
            email: 'anderman8021@hotmail.com',
            repo: 'https://github.com/Andma2020/Terapias-Bogota.git'
        };
    }

    /**
     * Ejecuta un comando de shell y retorna el resultado
     */
    executeCommand(command, description) {
        try {
            console.log(`🔄 ${description}...`);
            const result = execSync(command, { 
                cwd: this.projectDir,
                encoding: 'utf-8',
                stdio: 'inherit'
            });
            console.log(`✅ ${description} completado`);
            return result;
        } catch (error) {
            console.error(`❌ Error en ${description}:`, error.message);
            throw error;
        }
    }

    /**
     * Verifica si hay cambios pendientes
     */
    hasChanges() {
        try {
            const status = execSync('git status --porcelain', { 
                cwd: this.projectDir,
                encoding: 'utf-8'
            });
            return status.trim().length > 0;
        } catch (error) {
            console.error('Error verificando cambios:', error.message);
            return false;
        }
    }

    /**
     * Obtiene los archivos modificados
     */
    getChangedFiles() {
        try {
            const status = execSync('git status --porcelain', { 
                cwd: this.projectDir,
                encoding: 'utf-8'
            });
            return status.trim().split('\n').filter(line => line.trim());
        } catch (error) {
            console.error('Error obteniendo archivos modificados:', error.message);
            return [];
        }
    }

    /**
     * Genera un mensaje de commit automático basado en los cambios
     */
    generateCommitMessage() {
        const changedFiles = this.getChangedFiles();
        const changes = {
            html: [],
            css: [],
            js: [],
            scss: [],
            md: [],
            other: []
        };

        changedFiles.forEach(file => {
            const status = file.substring(0, 2).trim();
            const filePath = file.substring(3);
            const ext = path.extname(filePath).toLowerCase();

            if (ext === '.html') changes.html.push(filePath);
            else if (ext === '.css') changes.css.push(filePath);
            else if (ext === '.js') changes.js.push(filePath);
            else if (ext === '.scss') changes.scss.push(filePath);
            else if (ext === '.md') changes.md.push(filePath);
            else changes.other.push(filePath);
        });

        let message = 'Actualización automática del proyecto\n\n';

        if (changes.html.length > 0) {
            message += `📄 HTML (${changes.html.length} archivos):\n`;
            changes.html.forEach(file => {
                message += `  - ${file}\n`;
            });
        }

        if (changes.css.length > 0) {
            message += `🎨 CSS (${changes.css.length} archivos):\n`;
            changes.css.forEach(file => {
                message += `  - ${file}\n`;
            });
        }

        if (changes.scss.length > 0) {
            message += `💅 SCSS (${changes.scss.length} archivos):\n`;
            changes.scss.forEach(file => {
                message += `  - ${file}\n`;
            });
        }

        if (changes.js.length > 0) {
            message += `⚡ JavaScript (${changes.js.length} archivos):\n`;
            changes.js.forEach(file => {
                message += `  - ${file}\n`;
            });
        }

        if (changes.md.length > 0) {
            message += `📝 Documentación (${changes.md.length} archivos):\n`;
            changes.md.forEach(file => {
                message += `  - ${file}\n`;
            });
        }

        if (changes.other.length > 0) {
            message += `📦 Otros (${changes.other.length} archivos):\n`;
            changes.other.forEach(file => {
                message += `  - ${file}\n`;
            });
        }

        message += `\nCo-Authored-By: CODA <coda@globant.com>`;
        return message;
    }

    /**
     * Configura git si no está configurado
     */
    setupGit() {
        try {
            // Verificar si git está configurado
            const currentConfig = execSync('git config --list', { 
                cwd: this.projectDir,
                encoding: 'utf-8'
            });

            if (!currentConfig.includes('user.name=Andma2020')) {
                this.executeCommand('git config user.name "Andma2020"', 'Configurando nombre de usuario');
            }

            if (!currentConfig.includes('user.email=anderman8021@hotmail.com')) {
                this.executeCommand('git config user.email "anderman8021@hotmail.com"', 'Configurando email de usuario');
            }

            // Verificar si el remote está configurado
            try {
                execSync('git remote get-url origin', { 
                    cwd: this.projectDir,
                    encoding: 'utf-8'
                });
            } catch (error) {
                this.executeCommand(
                    `git remote add origin ${this.gitConfig.repo}`,
                    'Configurando repositorio remoto'
                );
            }

        } catch (error) {
            console.error('Error configurando git:', error.message);
            throw error;
        }
    }

    /**
     * Realiza el proceso completo de commit y push
     */
    async commitAndPush(customMessage = null) {
        try {
            console.log('🚀 Iniciando proceso de automatización de Git...\n');

            // Verificar si hay cambios
            if (!this.hasChanges()) {
                console.log('✨ No hay cambios para commitear');
                return;
            }

            // Configurar git
            this.setupGit();

            // Mostrar cambios
            console.log('\n📋 Archivos modificados:');
            const changedFiles = this.getChangedFiles();
            changedFiles.forEach(file => {
                console.log(`  ${file}`);
            });

            // Agregar todos los cambios
            this.executeCommand('git add .', 'Agregando cambios al staging area');

            // Generar o usar mensaje personalizado
            const commitMessage = customMessage || this.generateCommitMessage();
            console.log('\n📝 Mensaje de commit:');
            console.log(commitMessage);

            // Crear commit
            this.executeCommand(`git commit -m "${commitMessage.replace(/"/g, '\\"')}"`, 'Creando commit');

            // Hacer push
            this.executeCommand('git push', 'Subiendo cambios a GitHub');

            console.log('\n🎉 Proceso completado exitosamente!');
            console.log('✅ Cambios subidos a GitHub automáticamente');

        } catch (error) {
            console.error('\n❌ Error en el proceso de automatización:', error.message);
            throw error;
        }
    }

    /**
     * Monitorea cambios y hace commit automático
     */
    async watchAndCommit(interval = 60000) {
        console.log(`👀 Monitoreando cambios cada ${interval / 1000} segundos...`);
        console.log('Presiona Ctrl+C para detener\n');

        setInterval(async () => {
            if (this.hasChanges()) {
                console.log('\n🔔 Cambios detectados, iniciando commit automático...');
                try {
                    await this.commitAndPush();
                } catch (error) {
                    console.error('Error en commit automático:', error.message);
                }
            }
        }, interval);
    }
}

// Exportar para uso como módulo
module.exports = GitAutomation;

// Ejecutar si se llama directamente
if (require.main === module) {
    const gitAutomation = new GitAutomation();
    
    // Verificar argumentos de línea de comandos
    const args = process.argv.slice(2);
    
    if (args.includes('--watch')) {
        // Modo de monitoreo
        const interval = parseInt(args.find(arg => arg.startsWith('--interval='))?.split('=')[1]) || 60000;
        gitAutomation.watchAndCommit(interval);
    } else if (args.includes('--message')) {
        // Commit con mensaje personalizado
        const messageIndex = args.indexOf('--message');
        const customMessage = args[messageIndex + 1];
        gitAutomation.commitAndPush(customMessage);
    } else {
        // Commit automático normal
        gitAutomation.commitAndPush();
    }
}