angular.module('bandServices',[])

//Creates a var with the dates the Band is booked
.service('sharedBookedDates', function () {
	//Months start in 0 (January = 0, Feb = 1...)
    
	var booked=[{when: new Date (2016,08,23),
    			where: "Whelans, Dublin",
    			info: "www.whelanslive.ie",
    			image: "images/whelans.jpg"
    			},{
    				when: new Date (2016, 09, 02),
    				where: "Private Event",
    				info: "No info available",
    				image: "images/wedding.png"
    			},{
    				when: new Date (2016, 10, 21),
    				where: "Mezz, Dublin",
    				info: "www.mezz.ie",
    				image: "images/mezz.jpg"
    			},{
    				when: new Date (2016, 11, 04),
    				where: "Private Event",
    				info: "No info available",
    				image: "images/corporate.png"
    			}];
		
		//converts each date into an array of objects with year, month, day to show
		for (gig in booked ){	
			booked[gig].visualDate={
				year: booked[gig].when.getFullYear(),
				month:booked[gig].when.getMonth()+1,
				day: booked[gig].when.getDate()
			};			
		};
		
        return {
            getBooked: function () {
              return booked;
           }
        };
 })

//service that pull the list from iTunes and send it back to controller
.service('iTunesListService',function($http) {

   return  { getList: getList };
 
    function getList(url){
			return $http.jsonp(url);
        };
})