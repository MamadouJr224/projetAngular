pipeline {
    agent any

    stages {
        stage('Vérification de package.json') {
            steps {
              script {
                // Affiche le contenu du fichier package.json pour le vérifier
                sh 'type package.json'
              }
            }
        }
        stage('Vérification de package-lock.json') {
            steps {
              script {
                // Affiche le contenu du fichier package-lock.json pour le vérifier
                sh 'type package-lock.json'
              }
            }
        }
       stage('Installation des dépendances') {
            steps {
              script {
                sh 'npm install'
              }
            }
        }
        stage('Tests') {
            steps {
              {
                bat 'npm test'
              }
            }
        }
        stage('Build') {
            steps {
              script {
                bat 'npm run build'
              }
            }
        }
        stage('Test') {
            steps {
              script {
                sh './vendor/bin/phpunit'
              }
            }
        }
    }
}
