def incrementVersion(version) {
    // Vérifier si la version est vide, si oui, utiliser une version par défaut (par exemple, 1.0.0)
    version = version ?: "1.0.0"

    def parts = version.split('.')
    def major = parts[0] as Integer
    def minor = parts[1] as Integer
    def patch = parts[2] as Integer

    if (major == 0) {
        // En pre-release, incrémente la version mineure
        minor++
    } else if (major == 1) {
        // WP1, incrémente la version mineure
        minor++
        patch = 0
    } else if (major == 2) {
        // WP2, incrémente la version mineure
        minor++
        patch = 0
    }

    return "${major}.${minor}.${patch}"
}
pipeline {
    agent {
    label 'windows'
    }

    stages {
        stage('Checkout') {
            steps {
                // Étape de récupération du code source depuis un référentiel Git
                git 'https://github.com/mamadoucire/projetAngular.git'
            }
        }
    

         /*   stage('Install Dependencies') {
            steps {
                // Étape d'installation de Composer
                bat 'php --version'
                bat 'php -r "copy(\'https://getcomposer.org/installer\', \'composer-setup.php\');"'
                bat 'php composer-setup.php'
                bat 'php -r "unlink(\'composer-setup.php\');"'
                bat 'php composer.phar clear-cache'
                bat 'php composer.phar self-update'
                // Étape d'installation des dépendances via Composer
                bat 'php composer.phar install'
            }
        }*/

        stage('Vérification de Node.js et npm') {
            steps {
               bat 'node -v'
               bat 'npm -v'
            }
        }
        stage('Vérification de package.json') {
            steps {
                // Affiche le contenu du fichier package.json pour le vérifier
                bat 'type package.json'
            }
        }
        stage('Vérification de package-lock.json') {
            steps {
                // Affiche le contenu du fichier package-lock.json pour le vérifier
                bat 'type package-lock.json'
            }
        }
        stage('Mise à jour de la version initiale') {
           steps {
              bat 'npm version minor'
           }
       }
       stage('Installation des dépendances') {
            steps {
                bat 'npm install'
            }
        }
        stage('Tests') {
            steps {
                bat 'npm test'
            }
        }
        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }
        stage('Déploiement') {
            steps {
                bat '"xcopy /E /I /Y dist\* ..\..\..\..\..\..\..\..\inetpub\wwwroot\"'
            }
        }
        stage('Nettoyage') {
            steps {
                bat 'rmdir /S /Q node_modules'
                bat 'del package-lock.json'
            }
        }

        stage('Tag de la version déployée') {
            steps {
                script {
                    def currentVersion = bat(script: "node -p \"require('./package.json').version\"", returnStdout: true).trim()
                    if (currentVersion.isEmpty()) {
                        error "La version récupérée depuis package.json est vide."
                    }
                    def newVersion = incrementVersion(currentVersion)
                    bat "git tag -a v${newVersion} -m \"Recette 17/03\""
                    bat "git push origin --tags"
                }
            }
        }

        
        
      /*  stage('Mise à jour de la version') {
            steps {
               script {
                    def currentVersion = bat(script: "node -p \"require('./package.json').version\"", returnStdout: true).trim()
                    if (currentVersion.isEmpty()) {
                        error "La version récupérée depuis package.json est vide."
                    }
                    def newVersion = incrementVersion(currentVersion)
                    bat "npm version ${newVersion}"
                }
            }
        }*/
      /*  stage('Installation de angular cli et node js'){
            steps{
                // Installation de Node.js v16.20.0
                bat 'curl -sL https://nodejs.org/dist/v16.20.0/node-v16.20.0-x64.msi -o nodejs.msi'
                bat 'msiexec /i nodejs.msi /quiet'
        
               // Installation d'Angular CLI 15.2.4
               bat 'npm install -g @angular/cli@15.2.4'
               
               // Lien symbolique pour Angular CLI
               bat 'npm link @angular/cli'
               // Vérification des versions installées
               bat 'node -v'
               bat 'setx PATH "%PATH%;%APPDATA%\\npm"'
               bat 'ng --version'
            }
        }*/
      /*  stage('Test') {
            steps {
                sh './vendor/bin/phpunit'
            }
        }*/

      /*  stage('Build') {
            steps {
                // Étape de construction de votre projet PHP (par exemple, exécution de tests, génération de fichiers, etc.)
                  
                  bat 'ng build --configuration'
                 
                //  bat 'ng new test'
                //  bat 'cd test'
                //  bat 'ng serve'
                 // bat 'php build.php'
            }
        }*/

      /*  stage('Deploy') {
            steps {
                // Étape de déploiement de votre projet PHP (par exemple, copie des fichiers sur un serveur distant)
                bat 'xcopy /E /I /Y src\ dist\'
                // ou utilisez d'autres commandes spécifiques à votre processus de déploiement
            }
        }*/
        stage('fin pipeline') {
            steps {
                echo 'fin du pipeline'
            }
        }
    }
}