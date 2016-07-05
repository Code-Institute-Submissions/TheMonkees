angular.module('bandServices',[])

//Creates a var with the dates the Band is booked
.service('sharedBookedDates', function () {
	//Months start in 0 (January = 0, Feb = 1...)
    var booked=[new Date (2016,06,20), 
    			new Date (2016, 07, 02), 
    			new Date (2016, 08, 15)];
		
		
        return {
            getBooked: function () {
              return booked;
           }
            //addBooked: function(newDate) {
            //	add code to push into the array
            //}
        };
 })

.service('iTunesListService',function($http) {
 //get list itunes search - not working yet
   return  { getList: getList };
 
    function getList(url){
			return $http.jsonp(url);
        };
})