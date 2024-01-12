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
	// .when("/Contact", {
	// 	templateUrl: "views/Contact.html"
	// });
});

app.controller(
	'RootController',
	function ($scope, $route, $rootScope, $log) {
		// $scope.refreshOnSamePage = false;
		$rootScope.$on("$locationChangeStart", function (event, next, current) {
			$log.info("location changing to:" + next);
		});

		$rootScope.$on("$locationChangeSuccess", function (event, current, previous) {
			$log.info("location changed from " + previous + " to " + current);
			$log.info(event);
			// $log.info("scope.refreshOnSamePage: " + $scope.refreshOnSamePage);
			// $scope.refreshOnSamePage = true;
			// $log.info("scope.refreshOnSamePage: " + $scope.refreshOnSamePage);
			if (current != previous) {
				// $scope.refreshOnSamePage = false;
				//$log.info("Refreshed!");
				//$route.reload();
				//window.location.reload();
			}
			// else if ($rootScope.refreshOnSamePage == false) {
			// 	$rootScope.refreshOnSamePage = true;
			// 	window.location.reload();
			// }
		});

		$rootScope.isReady = function () {
			$log.info("Is ready!");
		};

		$rootScope.placeholder = "PLACEHOLDER";
		$rootScope.checkIfReady = function () {
			$log.info("Checking if ready!");
			if (document.getElementsByClassName("carousel").length > 0) {
				return true;
			}
			else {
				return false;
			}

		}
	}
);

/*
 * The whenReady directive allows you to execute the content of a when-ready
 * attribute after the element is ready (i.e. when it's done loading all sub directives and DOM
 * content). See: https://stackoverflow.com/questions/14968690/sending-event-when-angular-js-finished-loading
 *
 * Execute multiple expressions in the when-ready attribute by delimiting them
 * with a semi-colon. when-ready="doThis(); doThat()"
 *
 * Optional: If the value of a wait-for-interpolation attribute on the
 * element evaluates to true, then the expressions in when-ready will be
 * evaluated after all text nodes in the element have been interpolated (i.e.
 * {{placeholders}} have been replaced with actual values).
 *
 * Optional: Use a ready-check attribute to write an expression that
 * specifies what condition is true at any given moment in time when the
 * element is ready. The expression will be evaluated repeatedly until the
 * condition is finally true. The expression is executed with
 * requestAnimationFrame so that it fires at a moment when it is least likely
 * to block rendering of the page.
 *
 * If wait-for-interpolation and ready-check are both supplied, then the
 * when-ready expressions will fire after interpolation is done *and* after
 * the ready-check condition evaluates to true.
 *
 * Caveats: if other directives exists on the same element as this directive
 * and destroy the element thus preventing other directives from loading, using
 * this directive won't work. The optimal way to use this is to put this
 * directive on an outer element.
 */
app.directive('whenReady', ['$interpolate', function ($interpolate) {
	return {
		restrict: 'A',
		priority: Number.MIN_SAFE_INTEGER, // execute last, after all other directives if any.
		link: function ($scope, $element, $attributes) {
			var expressions = $attributes.whenReady.split(';');
			var waitForInterpolation = false;
			var hasReadyCheckExpression = false;

			function evalExpressions(expressions) {
				expressions.forEach(function (expression) {
					$scope.$eval(expression);
				});
			}

			if ($attributes.whenReady.trim().length === 0) { return; }

			if ($attributes.waitForInterpolation && $scope.$eval($attributes.waitForInterpolation)) {
				waitForInterpolation = true;
			}

			if ($attributes.readyCheck) {
				hasReadyCheckExpression = true;
			}

			if (waitForInterpolation || hasReadyCheckExpression) {
				requestAnimationFrame(function checkIfReady() {
					var isInterpolated = false;
					var isReadyCheckTrue = false;

					if (waitForInterpolation && $element.text().indexOf($interpolate.startSymbol()) >= 0) { // if the text still has {{placeholders}}
						isInterpolated = false;
					}
					else {
						isInterpolated = true;
					}

					if (hasReadyCheckExpression && !$scope.$eval($attributes.readyCheck)) { // if the ready check expression returns false
						isReadyCheckTrue = false;
					}
					else {
						isReadyCheckTrue = true;
					}

					if (isInterpolated && isReadyCheckTrue) { evalExpressions(expressions); }
					else { requestAnimationFrame(checkIfReady); }

				});
			}
			else {
				evalExpressions(expressions);
			}
		}
	};
}]);