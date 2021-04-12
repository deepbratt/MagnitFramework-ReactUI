pipeline {
  agent any
  stages {
    stage('Server') {
      agent {
        docker {
          image 'maven:3.5.jdk-8-slim'
        }

      }
      steps {
        echo 'initiating.....'
        readFile(file: 'package.json', encoding: 'utf-8')
      }
    }

  }
}