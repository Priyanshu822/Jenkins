pipeline {
    agent any

    tools {
        nodejs 'nodejs'   // Must match NodeJS name in Jenkins
    }

    stages {

        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat 'npx playwright test'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**', fingerprint: true
        }
        success {
            echo 'Playwright tests executed successfully'
        }
        failure {
            echo 'Playwright tests failed'
        }
    }
}
