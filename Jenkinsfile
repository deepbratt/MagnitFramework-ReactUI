pipeline {
  agent any
  stages {
    stage('Server') {
      parallel {
        stage('Server') {
          agent {
            docker {
              image 'maven:3.5.jdk-8-slim'
            }

          }
          steps {
            sh '''echo "Building the server code..."
              mvn -version
              mkdir -p target
              touch "target/server.war"
              '''
            stash(name: 'server', includes: '**/*war')
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
'''
          }
        }

      }
    }

  }
}