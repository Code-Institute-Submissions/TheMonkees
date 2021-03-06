angular.module('bandDirectives',[])
//Navigation bar
.directive('bandNav', function(){
	return {
	'restrict': 'E',
	'scope': false,
	'templateUrl':'templates/directives/bandNav.html'
	}
})
//Footer
.directive('footer', function(){
	return {
	'restrict': 'E',
	'scope': false,
	'templateUrl':'templates/directives/footer.html'
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
