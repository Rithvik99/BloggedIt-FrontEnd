pipeline{
    environment{
        registry = "sashank369/bloback"
        dockerImage = ""
    }
    agent any
    stages{
        stage('Git Clone'){
            steps{
                git branch: 'main',
                url:'https://github.com/sashank369/BloggedIt-BackEnd.git'
            }
        }
        /*stage('Test'){
            steps {
                echo 'Building..'
                sh 'npm install'
                echo 'Testing..'
                sh 'npm test'
            }
        }*/
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
        /*stage('Clean docker images'){
            steps{
                script{
                    sh 'docker container prune -f'
                    sh 'docker image prune -f'
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
        }*/
    }
}