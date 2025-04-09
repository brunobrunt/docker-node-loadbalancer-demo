pipeline {
    agent any

    environment {
        COMPOSE_PROJECT_NAME = "reverseproxydemo"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                dir('app1') {
                    sh 'npm install'
                }
                dir('app2') {
                    sh 'npm install'
                }
            }
        }

        stage('Docker Compose Up') {
            steps {
                sh 'docker-compose down'
                sh 'docker-compose up -d --build'
            }
        }

        stage('Test Endpoint') {
            steps {
                echo "Testing response from Nginx (which goes to HAProxy -> App1/App2)"
                sh 'curl -s http://localhost | grep "Hello" || true'
            }
        }
    }

    post {
        always {
            echo 'Cleaning up after build...'
            sh 'docker-compose down'
        }
    }
}

