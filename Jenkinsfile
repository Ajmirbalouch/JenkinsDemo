pipeline {
    agent any

    environment {
        // Setzen Sie Ihre Percy Token Umgebungsvariable
        PERCY_TOKEN = 'web_0d5d582461ea5439b6350bddb8a7de0ca6d66a33b7c5bb0c7129ea4d7c72ccb9'
    }

    tools {
        // Stellen Sie sicher, dass 'NodeJS' in den globalen Tools von Jenkins konfiguriert ist
        nodejs 'NodeJS'
    }

    stages {
        stage('Preparation') {
            steps {
                // Checkout von SCM, wenn Ihr Code in einem Git-Repository liegt
                checkout scm
            }
        }

        stage('Building') {
            steps {
                // Bauen Sie Ihr Projekt, z.B. mit npm
                sh "npm install"
                echo "wird aufgebaut"
            }
        }

        stage('Testing') {
            steps {
                // Führen Sie hier Ihre Testbefehle aus
                sh "npm install cypress --save-dev"
                sh "npm install --save-dev @percy/cli @percy/cypress"
                sh "npx percy exec -- cypress run"
            }
        }

        stage('Executed') {
            steps {
                // Hier können Sie weitere Schritte ausführen, nachdem die Tests erfolgreich waren
                echo "erfolgreich ausgeführt"
            }
        }
    }
    
    post {
        // Definieren Sie Post-Build-Aktionen
        always {
            // Bereinigen Sie den Workspace nach dem Build
            cleanWs()
        }
        success {
            // Was zu tun ist, wenn der Build erfolgreich war
            echo 'Build war erfolgreich.'
        }
        failure {
            // Was zu tun ist, wenn der Build fehlgeschlagen ist
            echo 'Build ist fehlgeschlagen.'
            // Hier können Sie Benachrichtigungen oder andere Fehlerbehebungsmaßnahmen hinzufügen
        }
        // Optional: Konfigurieren Sie weitere Post-Actions wie das Versenden von Benachrichtigungen
    }
}
