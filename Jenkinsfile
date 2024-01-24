pipeline {
    agent {
      label 'alma_slave'
    }

    stages {
        stage('Vérification de package.json') {
            steps {
                script {
                    // Affiche le contenu du fichier package.json pour le vérifier
                    sh 'cat package.json'
                }
            }
        }
        stage('Vérification de package-lock.json') {
            steps {
                script {
                    // Affiche le contenu du fichier package-lock.json pour le vérifier
                    sh 'cat package-lock.json'
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
                script {
                    sh 'npm test'
                }
            }
        }
        stage('Build') {
            steps {
                script {
                    sh 'npm run build'
                }
            }
        }
        stage('Test PHP') {
            steps {
                script {
                    sh './vendor/bin/phpunit'
                }
            }
        }
    }
}
