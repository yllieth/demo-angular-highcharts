angular
  .module('demoApp')
  .controller('HighchartsCtrl', function() {
    var self = this;
    var generateValue = function() {
      return parseFloat((Math.random()*100).toFixed(2));
    };
    var generateValues = function(chartType) {
      if (chartType === 'line') {
        return [
          generateValue(),
          generateValue(),
          generateValue(),
          generateValue(),
          generateValue(),
          generateValue(),
          generateValue(),
          generateValue(),
          generateValue(),
          generateValue(),
          generateValue(),
          generateValue()
        ]
      }
    };

    this.animated = true;

    this.allowedTypes = [
      { name: 'line', value: 'line' },
      { name: 'curve', value: 'spline' },
      { name: 'histogramme', value: 'bar' },
      { name: 'camembert', value: 'pie' },
      { name: 'surface', value: 'area' }
    ];

    this.series = [
      { enabled: true,  values: generateValues('line'), markers: true },
      { enabled: false, values: generateValues('line'), markers: true },
      { enabled: false, values: generateValues('line'), markers: true }
    ];

    this.options = {
      chart: {
        type: 'line',
        // animation: true,
        inverted: false,
        shadow: false,
        width: null,
        height: null,
        backgroundColor: '#FFFFFF'
      },

      title: {
        align: 'center',
        text: "Default title"
      },

      subtitle: {
        align: 'center',
        text: ''
      },

      legend: {
        enabled: true
      },

      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },

      series: [
        {
          animation: true,
          data: generateValues('line'),
          marker: {
            enabled: true
          }
        }
      ]
    };

    this.setTitleAlign = function(position) {
      this.options.title.align = position;
    };

    this.setSubTitleAlign = function(position) {
      this.options.subtitle.align = position;
    };

    this.toggleAnimation = function() {
      this.options.series.map(function(serie) {
        self.animated = !self.animated;
        return serie.animation = self.animated;
      })
    };
  });