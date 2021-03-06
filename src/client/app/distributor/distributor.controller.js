(function() {
  'use strict';

  angular
  .module('app.core')
  .controller('Distributor', Distributor);

  Distributor.$inject = ['$scope','$state','$stateParams', 'parse'];

  function Distributor($scope, $state, $stateParams, parse) {
    
    var distributor =  this;
    distributor.info = {
      name: null,
      address: null,
      email: null,
      contact: null,
      phone: null
    };

    distributor.error = false;
    distributor.success = false;
    distributor.sending = false;

    distributor.send = function(){
      if(!distributor.sending){
        distributor.sending = true;
        distributor.error = false; 
        distributor.error = false; 
        if(distributor.form.$valid){
          var Cloud = parse.cloud('distributor');
          Cloud.post({info:distributor.info}).then(function(result){
            distributor.success = true;
          },function(error){
            console.log(error);
          }).finally(function(){
            distributor.sending = false;
          });
        }else{
          distributor.error = true;
        }
      }
    }

  }
})();
