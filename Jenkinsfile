pipeline {

    agent any

    stages {

        stage('Build Backend Docker Image') {
            steps {
                sh 'docker build -t lpu-backend ./backend'
            }
        }

        stage('Build Frontend Docker Image') {
            steps {
                sh 'docker build -t lpu-frontend ./frontend'
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh 'kubectl apply -f k8s/'
            }
        }
    }
}