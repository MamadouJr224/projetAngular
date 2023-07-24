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

        stages {
        stage('Mise à jour de la version') {
            steps {
                script {
                    def VERSION_INCREMENT_SCRIPT = '''
                        def incrementVersion(version) {
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
                    '''

                    def currentVersion = sh(script: "node -p \"require('./package.json').version\"", returnStdout: true).trim()
                    def newVersion = sh(script: "${VERSION_INCREMENT_SCRIPT}\nincrementVersion('${currentVersion}')", returnStdout: true).trim()
                    sh "npm version ${newVersion}"
                }
            }
        }
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

      stage('Build') {
            steps {
                // Étape de construction de votre projet PHP (par exemple, exécution de tests, génération de fichiers, etc.)
                  bat 'npm install '
                  bat 'ng build --configuration'
                 
                //  bat 'ng new test'
                //  bat 'cd test'
                //  bat 'ng serve'
                 // bat 'php build.php'
            }
        }

      /*  stage('Deploy') {
            steps {
                // Étape de déploiement de votre projet PHP (par exemple, copie des fichiers sur un serveur distant)
                bat 'xcopy /E /I /Y src\ dist\'
                // ou utilisez d'autres commandes spécifiques à votre processus de déploiement
            }
        }*/
    }
}