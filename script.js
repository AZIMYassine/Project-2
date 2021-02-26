let url ='https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson';

$(document).ready(function () {
  jQuery.getJSON(url, (data) => {
    console.log(data);
    
    data.features.map((feature) => {
      let prp = feature.properties;
      $row = $('<tr></tr>');
      let place = $('<td></td>').text(prp.place);
      $row.append(place);
      let net = $('<td></td>').text(prp.net);
      $row.append(net);
      let title = $('<td></td>').text(prp.title);
      $row.append(title);
      
      $('#myTableBody').append($row);
      
      });
  });
});
      
      
