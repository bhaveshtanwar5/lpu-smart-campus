pipeline {

    agent any

    stages {

        stage('Clone Repository') {
            steps {
                git 'https://github.com/bhaveshtanwar5/lpu-smart-campus.git'
            }
        }

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