var app = angular.module('myApp', ['ngRoute', 'ui.materialize']);

app.config(function ($routeProvider) {
	$routeProvider
		.when("/", {
			templateUrl: "views/Home.html",
			//controller: 'redirectController'
		})
		.when("/Design", {
			templateUrl: "views/Design.html"
		})
		.when("/CrecheID", {
			templateUrl: "views/CrecheID.html"
		})
		.when("/Videos", {
			templateUrl: "views/Videos.html"
		})
		.when("/GuideAliens", {
			templateUrl: "views/GuiaAliens.html"
		})
		.when("/InfograficoAmigo", {
			templateUrl: "views/InfograficoAmigo.html"
		})
		.when("/3DModels", {
			templateUrl: "views/3DModels.html"
		})
		.when("/Econquest", {
			templateUrl: "views/Econquest.html"
		})
		.when("/SokobanJS", {
			templateUrl: "views/SokobanJS.html"
		})
		.when("/MedievalBattle", {
			templateUrl: "views/MedievalBattle.html"
		})
		.when("/MediepicalBattle", {
			templateUrl: "views/Mediepical Battle.html"
		})
		// .when("/Games", {
		// 	templateUrl: "views/Games.html"
		// })
		.when("/Mbds", {
			templateUrl: "views/Mbds.html"
		})
		.when("/MusicalShooter", {
			templateUrl: "views/MusicalShooter.html"
		})
		.when("/TwinDimensions", {
			templateUrl: "views/TwinDimensions.html"
		})
		.when("/HoneyImHome", {
			templateUrl: "views/HoneyImHome.html"
		})
		.when("/DTermination", {
			templateUrl: "views/DTermination.html"
		})
		.when("/SugarTown", {
			templateUrl: "views/SugarTown.html"
		})
		.when("/KiwiKimi", {
			templateUrl: "views/KiwiKimi.html"
		})
		.when("/CapiCalma", {
			templateUrl: "views/CapiCalma.html"
		})
		.when("/RaytracerCPlusPlus", {
			templateUrl: "views/RaytracerCPlusPlus.html"
		})
		.when("/SnakeSnackEscape", {
			templateUrl: "views/SnakeSnackEscape.html"
		})
		.when("/Dananeer", {
			templateUrl: "views/Dananeer.html"
		})
		.when("/CryptRaider", {
			templateUrl: "views/CryptRaider.html"
		})
		.when("/ObstacleAssault", {
			templateUrl: "views/ObstacleAssault.html"
		})
		.when("/WarehouseWreckage", {
			templateUrl: "views/WarehouseWreckage.html"
		})
	// .when("/Contact", {
	// 	templateUrl: "views/Contact.html"
	// });
});

app.controller(
	'RootController',
	function ($scope, $route, $rootScope, $log) {
		$rootScope.$on("$locationChangeSuccess", function (event, current, previous) {
			$('.carousel').carousel();
			setTimeout(() => {
				$('.carousel').carousel();
				$('.carousel').css('opacity', '1');
			}, 500);

			setTimeout(() => {
				$('.carousel').carousel();
				$('.carousel').css('opacity', '1');
			}, 3000);

			setTimeout(() => {
				$('.carousel').carousel();
				$('.carousel').css('opacity', '1');
			}, 10000);
		});
	}
);