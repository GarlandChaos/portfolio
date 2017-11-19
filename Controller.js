var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when("/", {
	  templateUrl : "Home.html",
	  //controller: 'redirectController'
	})
	.when("/Design", {
	  templateUrl : "Design.html"
	})
	.when("/CrecheID", {
	  templateUrl : "CrecheID.html"
	})
	.when("/Videos", {
	  templateUrl : "Videos.html"
	})
	.when("/GuideAliens", {
	  templateUrl : "GuideAliens.html"
	})
	.when("/InfograficoAmigo", {
	  templateUrl : "InfograficoAmigo.html"
	})
	.when("/3DModels", {
	  templateUrl : "3DModels.html"
	})
	.when("/Econquest", {
	  templateUrl : "Econquest.html"
	})
	.when("/SokobanJS", {
	  templateUrl : "SokobanJS.html"
	})
	.when("/MedievalBattle", {
	  templateUrl : "MedievalBattle.html"
	})
	.when("/Programming", {
	  templateUrl : "Programming.html"
	});

});

app.controller('myCtrl', function($scope) {

});

