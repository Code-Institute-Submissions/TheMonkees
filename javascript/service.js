angular.module('bandServices',[])

//Creates a var with the dates the Band is booked
.service('sharedBookedDates', function () {
	//Months start in 0 (January = 0, Feb = 1...)
    
	var booked=[{when: new Date (2016,08,23),
    			where: "Wheelans, Dublin",
    			info: "www.wheelans.ie"
    			},{
    				when: new Date (2016, 09, 02),
    				where: "Private Event",
    				info: "No info available."
    			},{
    				when: new Date (2016, 10, 21),
    				where: "Mezz, Dublin",
    				info: "www.mezz.ie"
    				}
    			];
		

		for (gig in booked ){	
			//converts to an array of objects with year, month, day to show
			booked[gig].visualDate={
				year: booked[gig].when.getFullYear(),
				month:booked[gig].when.getMonth()+1,
				day: booked[gig].when.getDate()
			};
			//console.log($scope.booked[i].visualDate.day);
			
		};
		


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