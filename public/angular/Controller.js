var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when("/", {
	  templateUrl : "views/Home.html",
	  //controller: 'redirectController'
	})
	.when("/Design", {
	  templateUrl : "views/Design.html"
	})
	.when("/CrecheID", {
	  templateUrl : "views/CrecheID.html"
	})
	.when("/Videos", {
	  templateUrl : "views/Videos.html"
	})
	.when("/GuideAliens", {
	  templateUrl : "views/GuiaAliens.html"
	})
	.when("/InfograficoAmigo", {
	  templateUrl : "views/InfograficoAmigo.html"
	})
	.when("/3DModels", {
	  templateUrl : "views/3DModels.html"
	})
	.when("/Econquest", {
	  templateUrl : "views/Econquest.html"
	})
	.when("/SokobanJS", {
	  templateUrl : "views/SokobanJS.html"
	})
	.when("/MedievalBattle", {
	  templateUrl : "views/MedievalBattle.html"
	})
	.when("/MediepicalBattle", {
	  templateUrl : "views/Mediepical Battle.html"
	})
	.when("/Games", {
	  templateUrl : "views/Games.html"
	})
	.when("/Mbds", {
	  templateUrl : "views/Mbds.html"
	})
	.when("/MusicalShooter", {
	  templateUrl : "views/MusicalShooter.html"
	})
	.when("/TwinDimensions", {
	  templateUrl : "views/TwinDimensions.html"
	})
	.when("/HoneyImHome", {
	  templateUrl : "views/HoneyImHome.html"
	})
	.when("/DTermination", {
		templateUrl : "views/DTermination.html"
	})
	.when("/SugarTown", {
		templateUrl : "views/SugarTown.html"
	})
	.when("/KiwiKimi", {
		templateUrl : "views/KiwiKimi.html"
	})
	.when("/CapiCalma", {
		templateUrl : "views/CapiCalma.html"
	})
	.when("/Contact", {
	  templateUrl : "views/Contact.html"
	});

});

app.controller('myCtrl', function($scope) {

});

