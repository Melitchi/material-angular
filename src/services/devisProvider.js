'use strict';
var devisLabel=[
  {"name":"N° devis"},
  {"name":"Commercial"},
  {"name":"Client"},
  {"name":"Création"},
  {"name":"Dernière modification"},
  {"name":"Etat"}
];
var devis=  [{
  "id_devis":"1",
  "num_devis":"32",
  "nom_commercial":"jean",
  "nom_client":"braille",
  "date_creation":"01/01/2016",
  "date_modif":"02/01/2016",
  "etat":"en cours"
},
{
  "id_devis":"2",
  "num_devis":"33",
  "nom_commercial":"Alain",
  "nom_client":"Terrieur",
  "date_creation":"02/02/2016",
  "date_modif":"03/01/2016",
  "etat":"terminé"
},
{
  "id_devis":"3",
  "num_devis":"34",
  "nom_commercial":"Agathe",
  "nom_client":"Theblouze",
  "date_creation":"02/02/2016",
  "date_modif":"03/01/2016",
  "etat":"validé"
},
{
  "id_devis":"4",
  "num_devis":"48",
  "nom_commercial":"Gérard",
  "nom_client":"Menvussa",
  "date_creation":"02/02/2016",
  "date_modif":"03/01/2016",
  "etat":"en attente"
},
{
  "id_devis":"5",
  "num_devis":"65",
  "nom_commercial":"Clara",
  "nom_client":"Binne",
  "date_creation":"02/02/2016",
  "date_modif":"03/01/2016",
  "etat":"terminé"
},
{
  "id_devis":"6",
  "num_devis":"16",
  "nom_commercial":"Paul",
  "nom_client":"Aroïde",
  "date_creation":"02/02/2016",
  "date_modif":"03/01/2016",
  "etat":"refusé"
}
];
app.service('devisProvider', function(){
  this.getDevis = function(){
    return devis;
  }
  this.getDevisLabels = function(){
    return devisLabel;
  }
})
