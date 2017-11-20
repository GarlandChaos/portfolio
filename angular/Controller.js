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
	.when("/Programming", {
	  templateUrl : "views/Programming.html"
	})
	.when("/Contact", {
	  templateUrl : "views/Contact.html"
	});

});

app.controller('myCtrl', function($scope) {

});

