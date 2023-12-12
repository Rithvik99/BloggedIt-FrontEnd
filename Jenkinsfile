pipeline{
    environment{
        registry = "rithvikramasani/blofront"
        dockerImage = ""
        PORT = 3001
        CONNECTION_URL = "mongodb+srv://rithvikramasani:rithvikramasani@cluster0.sgvjxgt.mongodb.net/"
    }
    agent any
    stages{
        stage('Stage 1: Git Clone'){
            steps{
                git branch: 'main',
                url: 'https://github.com/Rithvik99/BloggedIt-FrontEnd.git'
            }
        }
        stage('Building image') {
            steps{
                script {
                dockerImage = docker.build registry + ":latest"
                }
            }
        }
        stage('Deploy Image') {
            steps{
                script {
                    docker.withRegistry( '', 'DockerHubCred' ) {
                        dockerImage.push()
                    }
                }
            }
        }
        stage('Ansible Deploying the Docker Image'){
            steps{
                echo 'Deploying the Docker Image'
                ansiblePlaybook becomeUser:null,
                colorized: true,
                credentialsId: 'localhost',
                disableHostKeyChecking: true,
                installation: 'Ansible',
                inventory: 'Deployment/inventory',
                playbook: 'Deployment/playbook.yml',
                sudoUser: null
            }
        }
    }
}