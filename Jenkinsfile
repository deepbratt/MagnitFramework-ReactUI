pipeline {
  agent any
  stages {
    stage('Server') {
      parallel {
        stage('Server') {
          steps {
            sh '''echo "Building the server code..."
              '''
          }
        }

        stage('Client') {
          agent {
            docker {
              image 'node:7-alpine'
            }

          }
          steps {
            sh '''npm install
'''
          }
        }

      }
    }

  }
}