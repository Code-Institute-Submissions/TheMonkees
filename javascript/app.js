angular.module("bandApp",["ngRoute","bandControllers","bandDirectives"])
.config(function($routeProvider){
	$routeProvider
	.when("/",{
		templateUrl: "templates/home.html",
		controller: "HomeController"
	})
	.when("/the-band",{
		templateUrl: "templates/the-band.html",
		controller: "TheBandController"
	})
	.when("/the-band",{
		templateUrl: "templates/the-band.html",
		controller: "TheBandController"
	})
	.when("/news",{
		templateUrl: "templates/news.html",
		controller: "NewsController"
	})
	.when("/music",{
		templateUrl: "templates/music.html",
		controller: "MusicController"
//test for iTunes API
//		templateUrl: "templates/iTunes-search.html",
//		controller: "ITunesListController"

	})	
	.when("/book-band",{
		templateUrl: "templates/book-band.html",
		controller: "BookBandController"
	})
	.when("/upcoming-gigs",{
		templateUrl: "templates/upcoming-gigs.html",
		controller: "UpcomingGigsController"
	})
	.otherwise({redirectTo: '/'});
})