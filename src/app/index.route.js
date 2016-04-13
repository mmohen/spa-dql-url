(function() {
  'use strict';

  angular
    .module('emcWorldDqlDemo')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, $sceDelegateProvider) {

    // Trust Blob URL
    $sceDelegateProvider.resourceUrlWhitelist(['**']);

    $stateProvider
      .state('home', {
        url: '/:query',
        templateUrl: 'app/main/main.html',
        controller: 'MainController'
      })
      .state('pdfviewer', {
        url: '/pdfviewer/:id',
        templateUrl: 'app/pdfviewer/templates/main.html',
        controller: 'pdfViewerController',
        resolve: {
          pdfBlobUrl: function ($stateParams, pdfService) {
            return pdfService.openDocument($stateParams.id).then(function(response){ return response; });
          }
        }
      });

    $urlRouterProvider.otherwise('/');
  }

})();
