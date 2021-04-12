pipeline {
  agent any
  stages {
    stage('Server') {
      parallel {
        stage('Server') {
          agent any
          steps {
            sh '''echo "Building the server code..."
              '''
          }
        }

        stage('Client') {
          agent {
            node {
              label 'npm'
            }

          }
          steps {
            sh '''npm install --save react
npm build
'''
          }
        }

      }
    }

  }
}