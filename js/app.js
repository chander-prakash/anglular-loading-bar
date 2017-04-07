

var app = angular.module('App', ['angular-loading-bar' , 'ngAnimate']);

/* Template Configuration */
app.config(function(cfpLoadingBarProvider) {
	cfpLoadingBarProvider.spinnerTemplate = '<div id="loading-bar-spinner"><div class="spinner-icon"></div></div>';
	cfpLoadingBarProvider.loadingBarTemplate = '<div id="loading-bar"><div class="bar"><div class="peg"></div></div></div>';
});


/* Include Bar */
app.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeBar = true;
}]);

/* Include Spinner */
app.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = true;
}]);





app.controller('ajaxReq', ['$scope' , '$http', 'cfpLoadingBar' , '$timeout', function ($scope, $http ,cfpLoadingBar, $timeout) {

	$scope.start = function() {
		cfpLoadingBar.start(); // this method is used to start loader.
	};

	$scope.complete = function () {
		cfpLoadingBar.complete();  // this method is used to complete the loader.
	};

    // fake the initial load so first time users can see the bar right away:
    $scope.start();
    $timeout(function(){
    	// hiding the loading bar after 2sec
    	$scope.complete();
    }, 2000);

    // write your request code and then in request you can hide loading bar. 
    // On ajax Response hide loading bar please check by other repository  : https://github.com/chander-prakash/angular-json-parsing
}]);