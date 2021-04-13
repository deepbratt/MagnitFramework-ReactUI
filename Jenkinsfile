pipeline {
  agent {
    docker {
      args '-p 3000:3000'
      image 'node:7-alpine'
    }

  }
  stages {
    stage('Install Packages') {
      agent {
        node {
          label 'agent any'
        }

      }
      steps {
        sh 'npm install'
      }
    }

    stage('Test and Build') {
      parallel {
        stage('Run Tests') {
          steps {
            sh 'npm run test'
          }
        }

        stage('Create Build Artifacts') {
          steps {
            sh 'npm run build'
          }
        }

      }
    }

  }
  environment {
    CI = 'true'
    HOME = '.'
    npm_config_cache = 'npm-cache'
  }
}