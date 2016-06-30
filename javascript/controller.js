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
	 	
	 //create map details
		$scope.map = {
        	address: '25 St Stephen Green, Dublin 2, Dublin',
        	zoom: 14,
        	width: 500,
        	height: 400      
        };

 
	})

	// Controller for newsletter subscribe form
	.controller('FormNewsletterController',function($scope) {
		$scope.user = {};
	  	$scope.wasSubmitted = false;
	  	$scope.submit = function() {
	    	$scope.wasSubmitted = true;
	  	};

	})
	.controller('FormContactUsController',function($scope) {
		$scope.user = {};
	  	$scope.wasSubmitted = false;
	  	$scope.formContactus = function() {
	    	$scope.wasSubmitted = true;
	  	};
	})
	
	//Controller for audio player
	.controller('AudioPlayer',function($scope){

		//Array with tracks: title, track source and cover src
		var tracks = [
			{title:"Clarksville",
			 	trackSrc:"audio/Clarksville.mp3",
			 	cover:"images/album1.jpg"},
			{title: "Daydream Believer",
				 trackSrc:"audio/DaydreamBeliever.mp3",
				 cover:"images/album2.jpg"},
			 {title: "I am a Believer",
				 trackSrc:"audio/ImABeliever.mp3",
				 cover:"images/album2.jpg"},
			 {title: "Stepping Stone",
				 trackSrc:"audio/SteppingStone.mp3",
				 cover:"images/album3.jpg"},
			 {title: "Tailtoddle",
				 trackSrc:"audio/tailtoddle_lo.mp3",
				 cover:"images/album3.jpg"}
		];		
	

		var current = 0; //var to track the current song
		//var with the audio player 
		var playlistPlayer = document.querySelector("#audio-player audio");
		playlistPlayer.volume=0.2; //set the volume 
		// var with the img item for the current song cover
		var playlistCover = document.querySelector("#audio-player img");
		
		//check if player exists
		if (playlistPlayer === null){
			throw "Playlist Player does not exist...";
		}else{
			update_player_with_current_track(tracks[current]);			
			//wait for a song to finish to execute function next
			playlistPlayer.addEventListener('ended',next, false)
		}

		
		//Start new song when the current one ends
		function next(){
			if (current === tracks.length -1){ //if it's the last one
				current = 0; //start again
			}else{
				current++; //go to the next one in the array
			}
			update_player_with_current_track(tracks[current]);
		}	
		
		function update_player_with_current_track(newTrack){
			//set the audio src and title to the new one
			playlistPlayer.src=newTrack.trackSrc; 
			playlistPlayer.title=newTrack.title;
			//set the img src with the new cover
			playlistCover.src=newTrack.cover;
			//save the current track in scope to use it in the page
			$scope.song=newTrack;
		}

		//$scope.play=AudioPlayerService.playThis(newSong)
		// Play the new song when click in one in the list (ng-click)
		$scope.playThis=function (newSong){
			found=0;
			for (var i = 0; i <= tracks.length -1; i++) {
				//If the song is found set current to that song
				if(newSong===tracks[i].title){
					current=i;
					update_player_with_current_track(tracks[current]);
					playlistPlayer.play();
					document.getElementById("error-song").setAttribute("class", "hidden");
					found=1
					break;
				}

			}
			//if it is not found show an error.
			if (found===0){
				playlistPlayer.pause();
				document.getElementById("error-song").setAttribute("class", "show");	
			}		

		}

		
		//document.getElementById('Daydream-Believer').addEventListener('click', function () {
		//	playThis("Daydream Believer")
		//}, false);	
	
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


