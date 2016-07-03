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
//.directive('songInfoRow', function() {
  //		return {
    //		restrict: 'E',    // usage of the directive: E -> element
    //		templateUrl: 'templates/directives/song-info-row.html',
    //		scope: {
      //		song: '=info'    // 'movie' set with the 'info' attribute
    	//	},
    		
  //		};
//	});


// directive to make the map interactive
.directive('makeMap', function() {
        var directive = {
            templateUrl: 'templates/directives/map.html',
            scope: {
                map: '='
            },
            controller: function mapController($scope) {
                $scope.zoomIn = function() {
                    $scope.map.zoom++;
                }
 
                $scope.zoomOut = function() {
                    $scope.map.zoom--;
                }

                $scope.mapDimensions = function() {

                    if (!$scope.map.width) {
                        $scope.map.width = 300;
                    } 
 
                    if (!$scope.map.height) {
                        $scope.map.height = 300;
                    } 
                    return ($scope.map.width+"x"+$scope.map.height)
                }

            }
        };
        return directive;
    })
