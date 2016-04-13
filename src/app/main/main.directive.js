(function() {
	'use strict';

	angular
	.module('emcWorldDqlDemo')
	.directive('mdTable', mdTable)
	.directive('submitOnEnter', submitOnEnter)


	/** @ngInject */
	function mdTable() {
		return {
			restrict: 'E',
			scope: { 
				headers: '=', 
				content: '=', 
				sortable: '=', 
				filters: '=',
				customClass: '=customClass',
				count: '=',
				searching: '=',
				openPdf: '&'
			},
			controller: function ($scope,$filter,$window) {
				var orderBy = $filter('orderBy');
				$scope.tablePage = 0;
				$scope.nbOfPages = function () {
					return Math.ceil($scope.content.length / $scope.count);
				},
				$scope.handleSort = function (field) {
					if ($scope.sortable.indexOf(field) > -1) { return true; } else { return false; }
				};
				$scope.order = function(predicate, reverse) {
					$scope.content = orderBy($scope.content, predicate, reverse);
					$scope.predicate = predicate;
				};
				$scope.order($scope.sortable[0],false);
				$scope.getNumber = function (num) {
					return new Array(num);
				};
				$scope.goToPage = function (page) {
					$scope.tablePage = page;
				};
			},
			templateUrl: 'app/main/mdTable.html'
		};
	}

	function submitOnEnter() {
		return function (scope, element, attrs) {
			element.bind("keydown keypress", function (event) {
				if(event.which === 13) {
					scope.$eval(attrs.submitOnEnter);
					event.preventDefault();
				}
			});
		};
	}
})();