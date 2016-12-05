'use strict';

/* Controllers */

app
/////////////////////// list controller  ///////////////////////////////////////////////////
.controller('listCtrl',  function ($scope, $routeParams, devisProvider) {
  console.log("heyo!");
  var param=$routeParams.param; // on récupère la valeur passée dans l'url
  $scope.displayDevis=false;
  $scope.displayCatalogue=false;
  $scope.displayFournisseur=false;
  $scope.sortReverse = false;  // sens du tri par defaut
  $scope.searchText = ''; // vide le champ de recherche
  // Test pour récupérer les données correspondant au paramètre envoyé
  $scope.getSelectedText = function() {
    if ($scope.sortType !== undefined) {
      console.log("You have selected: Item " + $scope.sortType);
    } else {
      console.log("Please select an item");
    }
  };
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
      $scope.pageTitle ="Catalogue";
      $scope.displayCatalogue=true;
    break;
    case "fournisseurs":
      $scope.pageTitle ="Liste des fournisseurs";
      $scope.displayFournisseur=true;
    break;
    default:
  }
})
