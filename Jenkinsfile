pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Étape de récupération du code source depuis un référentiel Git
                git 'https://github.com/mamadoucire/projetAngular.git'
            }
        }
        stage('Vérification de package.json') {
            steps {
                // Affiche le contenu du fichier package.json pour le vérifier
                sh 'type package.json'
            }
        }
        stage('Vérification de package-lock.json') {
            steps {
                // Affiche le contenu du fichier package-lock.json pour le vérifier
                sh 'type package-lock.json'
            }
        }
       stage('Installation des dépendances') {
            steps {
                sh 'npm install'
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
        stage('Test') {
            steps {
                sh './vendor/bin/phpunit'
            }
        }*/
    }
}
