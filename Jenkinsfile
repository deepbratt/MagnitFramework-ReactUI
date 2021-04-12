uipkg='MagnitFramework-ReactUI'
branchname='dev'
packageName = 'package.json'
property = 'version'
jenkinsfile = 'Jenkinsfile'
pipeline {
  agent { label "${DBNODE}" }
  options {     
	//  skipDefaultCheckout true
	  disableConcurrentBuilds() 
	  timestamps ()
	  buildDiscarder(logRotator(numToKeepStr: '20', daysToKeepStr: '10'))}
    parameters 
    {
        string(name: 'BuildNo', defaultValue: getparams("defaultbuild"), description: 'Build Number')
    }
  stages {
	  stage('clean workspace') {
      steps {
        deleteDir()
        checkout scm
      }
    }
    stage("Set Build Name and config values"){
     steps {
        script 
        {
          currentBuild.displayName = "${BuildNo}"
          configs=getjenkinvar.getJsonString(branchname)	
	        target=getparams("target").toLowerCase()
          Source=getparams("source").toLowerCase()
          echo " source: ${Source}"
          getappval=getjsonvalue(configs."${Source}","${uipkg}")
        }
      }
    } 
	  
	stage("Build project"){
  	steps {	     
      script{	
          gitcheckout(branchname, "${DEPLOYMENTSCRIPTSREPO}", 'DeploymentScripts', 'Scripts')    
          npm.buildVersionUpdate("${WORKSPACE}\\${packageName}", property , BuildNo)
          npm.install()
          npm.build()
          deletedirectory("${WORKSPACE}\\Scripts")
          deletedirectory("${WORKSPACE}\\configpath")
          deletefile("${WORKSPACE}\\jenkinsfile")
          // npm.publish()      
        }	
      }
    }	  
  }	
  post {
    success 
      {
          echo "success"
      }
    failure 
      {
          echo "failure"
      }
    }
}
