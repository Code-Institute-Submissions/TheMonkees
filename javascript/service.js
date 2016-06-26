angular.module('bandServices',[])
.factory('iTunesListService',function($http) {
// get list itunes search - not working yet
    return  { getList: getList };
 
    function getList(url){
			return $http.jsonp(url);
        };
});

