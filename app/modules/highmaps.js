angular
  .module('demoApp')
  .controller('HighmapsCtrl', function() {
    var data = [
      {
        "hc-key": "ca-5682",
        "value": 0
      },
      {
        "hc-key": "ca-bc",
        "value": 1
      },
      {
        "hc-key": "ca-nu",
        "value": 2
      },
      {
        "hc-key": "ca-nt",
        "value": 3
      },
      {
        "hc-key": "ca-ab",
        "value": 4
      },
      {
        "hc-key": "ca-nl",
        "value": 5
      },
      {
        "hc-key": "ca-sk",
        "value": 6
      },
      {
        "hc-key": "ca-mb",
        "value": 7
      },
      {
        "hc-key": "ca-qc",
        "value": 8
      },
      {
        "hc-key": "ca-on",
        "value": 9
      },
      {
        "hc-key": "ca-nb",
        "value": 10
      },
      {
        "hc-key": "ca-ns",
        "value": 11
      },
      {
        "hc-key": "ca-pe",
        "value": 12
      },
      {
        "hc-key": "ca-yt",
        "value": 13
      }
    ];

    // Instanciate the map
    Highcharts.mapChart('highmaps', {

      title : {
        text : 'Highmaps basic demo'
      },

      mapNavigation: {
        enabled: true,
        buttonOptions: {
          verticalAlign: 'bottom'
        }
      },

      colorAxis: {
        min: 0
      },

      series : [{
        data : data,
        mapData: Highcharts.maps['countries/ca/ca-all'],
        joinBy: 'hc-key',
        name: 'Random data',
        states: {
          hover: {
            color: '#008ce1'
          }
        },
        dataLabels: {
          enabled: true,
          format: '{point.name}'
        }
      }]
    });
  });