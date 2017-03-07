angular
.module('app')
.config(config);

config.$inject = ['$locationProvider', '$urlRouterProvider','$stateProvider'];

function config($locationProvider,$urlRouterProvider, $stateProvider) {

  // $locationProvider.html5Mode(true);
  
  $stateProvider
    .state('home',{
      url:'/',
      templateUrl : 'app/home/home.template.html',
      controller: 'Home',
      controllerAs: 'home',
      data:{
        menu : 'home'
      }
    })
    .state('company',{
      url:'/empresa',
      templateUrl : 'app/company/company.template.html',
      // controller: 'Home',
      // controllerAs: 'home'
      data:{
        menu : 'company'
      }
    })
    .state('confidenciality',{
      url:'/confidencialidad',
      templateUrl : 'app/confidencialidad/confidencialidad.template.html'
    })
    .state('privacy',{
      url:'/privacidad',
      templateUrl : 'app/privacy/privacy.template.html'
    })
      
  $urlRouterProvider.otherwise('/');
}