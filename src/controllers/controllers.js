'use strict';

/* Controllers */

app
/////////////////////// list controller  ///////////////////////////////////////////////////
.controller('listCtrl',  function ($scope, $routeParams, devisProvider) {
  console.log("heyo!");
  var param=$routeParams.param; // on récupère la valeur passée dans l'url
  $scope.displayDevis=false;
  //$scope.displayCatalogue=false;
  //$scope.displayFournisseur=false;
  //$scope.sortReverse = false;  // sens du tri par defaut
  //$scope.searchText = ''; // vide le champ de recherche
  // Test pour récupérer les données correspondant au paramètre envoyé
  $scope.pageTitle ="titre switch";

  switch (param) {
    case "devis":
    $scope.pageTitle ="Liste des devis";
    $scope.sortType = 'num_devis'; // tri sur le num_devis par defaut
    $scope.datas = devisProvider.getDevis();
    $scope.labels=devisProvider.getDevisLabels();
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
    case "catalogue":
  /*  $scope.pageTitle ="Catalogue";
    $http.get("catalogue.json").then(function (response) {
      $scope.catalogue = response.data;
    });
    $scope.displayCatalogue=true;
*/
    break;
    case "fournisseurs":
    /*$scope.pageTitle ="Liste des fournisseurs";
    $http.get("liste_fournisseurs.json").then(function (response) {
      $scope.fournisseurs = response.data;
    });
    $scope.displayFournisseur=true;
    break;*/
    default:
  }
})
