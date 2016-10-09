/* global angular */

angular.module('flintAndSteel')
.controller('MetricsCtrl',
    [
        'paginateSvc',
        function(paginateSvc) {
            "use strict";

            var ctrl = this;



        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {


          var newIdeaData = google.visualization.arrayToDataTable([
            ['Month', 'Ideas Created'],
            ['Jan',  100],
            ['Feb',  87],
            ['Mar',  105],
            ['Apr',  94]
          ]);

          var prototypedIdeaData = google.visualization.arrayToDataTable([
            ['Month', 'Ideas Prototyped'],
            ['Jan',  10],
            ['Feb',  15],
            ['Mar',  12],
            ['Apr',  8]
          ]);

          var fundedIdeaData = google.visualization.arrayToDataTable([
            ['Month', 'Ideas Funded'],
            ['Jan',  4],
            ['Feb',  3],
            ['Mar',  5],
            ['Apr',  2]
          ]);

          var completedIdeaData = google.visualization.arrayToDataTable([
            ['Month', 'Ideas Completed'],
            ['Jan',  2],
            ['Feb',  3],
            ['Mar',  1],
            ['Apr',  4]
          ]);



          var newIdeaOptions = {
            title: 'New Ideas Generated',
            curveType: 'function',
            legend: { position: 'bottom' }
          };

          var prototypedIdeaOptions = {
            title: 'Ideas Prototyped',
            curveType: 'function',
            legend: { position: 'bottom' }
          };

          var fundedIdeaOptions = {
            title: 'Ideas Funded',
            curveType: 'function',
            legend: { position: 'bottom' }
          };

          var completedIdeaOptions = {
            title: 'Ideas Completed',
            curveType: 'function',
            legend: { position: 'bottom' }
          };



          var newIdeas = new google.visualization.LineChart(document.getElementById('new_ideas_chart'));
          var prototypedIdeas = new google.visualization.LineChart(document.getElementById('prototyped_ideas_chart'));
          var fundedIdeas = new google.visualization.LineChart(document.getElementById('funded_ideas_chart'));
          var completedIdeas = new google.visualization.LineChart(document.getElementById('completed_ideas_chart'));


          newIdeas.draw(newIdeaData, newIdeaOptions);
          prototypedIdeas.draw(prototypedIdeaData, prototypedIdeaOptions);
          fundedIdeas.draw(fundedIdeaData, fundedIdeaOptions);
          completedIdeas.draw(completedIdeaData, completedIdeaOptions);
        }

        }
    ]
);
