$(document).ready(function() {

  var planets = [
  		['Pluto', 0.06],
  		['Neptune', 1.148],
  		['Uranus', 0.917],
  		['Saturn', 1.139],
  		['Jupiter', 2.640],
  		['Mars', 0.3895],
  		['Moon', 0.1655],
  		['Earth', 1],
  		['Venus', 0.9032],
  		['Mercury', 0.377],
  		['Sun', 27.9]
  	];



for (var i=0;i<planets.length;i++){
   $('<option/>').val(planets[planets.length-1-i][1]).html(planets[planets.length-1-i][0]).appendTo('#pList');
}

  $('#button').click(function() {
    var theWeight = $('#weightSelect').val();
    var thePlanet = $('select option:selected').text();
    var theGravity = $('select option:selected').val();
    var result = theWeight * theGravity;

       $('#output').text("If you were chilling on " + thePlanet + ", you would weigh " + Math.round(result) + " lbs! DDDAAAAANNNG!!!")
   });
  /* $('#deathToPluto').change(function() {
     $('#pList').children("option:last").remove();
     */

     $('#deathToPluto').change(function() {
     if( $('#deathToPluto').is(':checked'))
      $('#pList').children("option:last").remove();
     else
      $("select").append("<option value="+planets[0][1]+">"+planets[0][0]+"</option>");
     });

   });
