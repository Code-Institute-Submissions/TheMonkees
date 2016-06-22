angular.module('bandDirectives',[])
//Navigation bar
.directive('bandNav', function(){
	return {
	'restrict': 'E',
	'scope': false,
	'templateUrl':'templates/directives/bandNav.html'
}
})
// Subscribe to Newsletter call to action box
.directive('newsletterCta', function(){
	return {
	'restrict': 'E',
	'scope': true,
	'templateUrl':'templates/directives/newsletter-cta.html'
}
})

// Songs info for iTunes search
.directive('songInfoRow', function() {
  		return {
    		restrict: 'E',    // usage of the directive: E -> element
    		templateUrl: 'templates/directives/song-info-row.html',
    		scope: {
      		song: '=info'    // 'movie' set with the 'info' attribute
    		},
    		
  		};
	});