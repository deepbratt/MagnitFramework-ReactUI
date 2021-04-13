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
            node {
              label '14.0.0'
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