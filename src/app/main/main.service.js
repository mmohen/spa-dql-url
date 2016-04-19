(function() {
  'use strict';

  angular
  .module('emcWorldDqlDemo')
  .service('MainService', MainService);

  /** @ngInject */
  function MainService($http, $q, API_ENDPOINT, $filter) {
   return{
    fetchDqlQuery: function(dqlQuery){
			// demo/corerest/query?query=select%20*%20from%20dm_document
			var deferred = $q.defer(),
      mappedResults = [];

      $http.get(API_ENDPOINT + 'demo/corerest/query', {params: {query: dqlQuery}})
      .success(function(response){
        angular.forEach(response, function(value){
         mappedResults.push({
          'object_id': value.id,
          'name': value.name,
          'type': value.type,
          'format': value.properties.a_content_type,
          'owner': value.properties.owner_name,
          'last_modified': $filter('date')(value.properties.r_modify_date, 'medium')
        });
       });
        deferred.resolve(mappedResults);
      })
      .error(function(data, status, headers, config){
        deferred.reject(status);
      });

      return deferred.promise;
    }
  };
}
})();