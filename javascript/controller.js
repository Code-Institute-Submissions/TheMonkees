angular.module("bandControllers",[])
	.controller('HomeController', function($scope) {
	  $scope.title = "Welcome";
	})
	.controller('TheBandController', function($scope) {
	  $scope.title = "The Band";
	})
	.controller('NewsController', function($scope) {
	  $scope.title = "News";
	})
	.controller('MusicController', function($scope) {
	  $scope.title = "Music";
	})
	.controller('BookBandController', function($scope) {
	  $scope.title = "Book The Band";
	})
	.controller('UpcomingGigsController', function($scope) {
	  $scope.title = "Upcoming Gigs";
	})
	.controller('ContactController', function($scope) {
	  $scope.title = "Contact Us";
	})

	// Controller for newsletter subscribe form
	.controller('FormNewsletterController',function($scope) {
		$scope.user = {};
	  	$scope.wasSubmitted = false;
	  	$scope.submit = function() {
	    	$scope.wasSubmitted = true;
	  	};
	})

	// Controller for iTunes search API
	// Not working
	.controller('ITunesListController',function($scope, $http) {
	 	$scope.loading = true;
		 //$scope.title = 'title'
	 	var url = 'https://itunes.apple.com/search?term=the+monkees';
	 	$scope.iTunesList = [];
	 
	 	iTunesListService.getList('https://itunes.apple.com/search?term=the+monkees')
	 		.then(
	      		function(result){
	          		$scope.iTunesList = result.data.results; /*res.filter(function(val){return val !== null});;*/
	          		$scope.loading = false;
	      		}
	      	).catch(
	        	function(error) { 
	        		console.log('error', error)
	        	}
	        );
	})



