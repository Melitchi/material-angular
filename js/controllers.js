'use strict';

/* Controllers */

angular
.module('Madera', [ 'ngMessages','ngMaterial','ngRoute', 'ngMdIcons'])
.config(function($mdThemingProvider) {
  var customBlueMap = 		$mdThemingProvider.extendPalette('orange', {
    'contrastDefaultColor': 'light',
    'contrastDarkColors': ['50'],
    '50': 'ffffff'
  });
  $mdThemingProvider.definePalette('customBlue', customBlueMap);
  $mdThemingProvider.theme('default')
    .primaryPalette('customBlue', {
      'default': '500',
      'hue-1': '50'
    })
    .accentPalette('pink');
  $mdThemingProvider.theme('input', 'default')
        .primaryPalette('grey')
})

.config(['$routeProvider',
function ($routeProvider) {
  $routeProvider
  .when('/index', {
    templateUrl: 'index.html',
    controller: 'connectCtrl'
  })
  .when('/accueil', {
    templateUrl: 'accueil.html',
    controller: 'accueilCtrl'
  })
  .when('/liste/:param', {
    templateUrl: 'liste.html',
    controller: 'listCtrl'
  })
  .when('/edit_devis', {
    templateUrl: 'devis.html',
    controller: 'formCtrl'
  })
  .when('/compte', {
    templateUrl: 'compte.html',
    controller: 'compteCtrl'
  })
  .otherwise({
    redirectTo: '/liste/devis'
  });
}
])

/////////////////////// list controller  ///////////////////////////////////////////////////
.controller('listCtrl', ['$scope', '$ngRoute', function ($scope, $ngRoute) {
  var param=$routeParams.param; // on récupère la valeur passée dans l'url
  $scope.displayDevis=false;
  $scope.displayCatalogue=false;
  $scope.displayFournisseur=false;
  $scope.sortReverse = false;  // sens du tri par defaut
  $scope.searchText = ''; // vide le champ de recherche
  // Test pour récupérer les données correspondant au paramètre envoyé

  switch (param) {
    case "devis":
    $scope.pageTitle ="Liste des devis";
    $scope.sortType = 'num_devis'; // tri sur le num_devis par defaut
    /*$http.get("liste_devis.json").then(function (response) {
      $scope.datas = response.data;
    });*/
    $scope.displayDevis=true;
    /*$scope.getAvancementColor = function (input) {
      if (input == "refusé") {
        return "bold redFont";
      }
      else if (input == "terminé") {
        return "bold greenFont";
      }
    }*/
    break;
    /*case "catalogue":
    $scope.pageTitle ="Catalogue";
    $http.get("catalogue.json").then(function (response) {
      $scope.catalogue = response.data;
    });
    $scope.displayCatalogue=true;

    break;
    case "fournisseurs":
    $scope.pageTitle ="Liste des fournisseurs";
    $http.get("liste_fournisseurs.json").then(function (response) {
      $scope.fournisseurs = response.data;
    });
    $scope.displayFournisseur=true;
    break;*/
    default:
  }
}]);
