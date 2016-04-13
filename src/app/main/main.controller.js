(function() {
  'use strict';

  angular
    .module('emcWorldDqlDemo')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, MainService, toastr, $stateParams) {
    $scope.toggleSearch = false;   
    $scope.searching = false;
    $scope.headers = [
      {
        name: 'Name', 
        field: 'name'
      },{
        'name':'Owner',
        'field':'owner'
      },{
        name:'Type', 
        field: 'type'
      },{
        name: 'Format',
        field: 'format'
      },{
        name: 'Last Modified', 
        field: 'last_modified'
      },{
        name: 'Object ID',
        field: 'object_id'
      }
    ];

    $scope.content = [];      
    if($stateParams.query)
    {
      var query = $stateParams.query.split('=');
      MainService.fetchDqlQuery(query[1]).then(function(results){
          $scope.content = results;
          $scope.searching = false;
      }, function(err){
        toastr.error("Invalid Query");
        $scope.searching = false;
        $scope.toggleSearch = true;   
      });
      $scope.searchQuery = query[1]; 
    }
    
    $scope.custom = {name: 'bold', owner:'grey' ,object_id: 'grey'};
    $scope.sortable = ['name', 'owner', 'type','format','last_modified','object_id'];
    $scope.count = 10;

    $scope.submitQuery = function(){
      if($scope.searchQuery){
        $scope.searching = true;
        $scope.temp = $scope.content;
        $scope.content = [];
        MainService.fetchDqlQuery($scope.searchQuery).then(function(results){
          $scope.content = results;
          $scope.searching = false;
        }, function(err){
          toastr.error("Invalid Query");
          $scope.searching = false;
          $scope.content = $scope.temp;      
        });        
      }else{
        toastr.error("Search field can't be empty");
      }
    };
  }
})();
