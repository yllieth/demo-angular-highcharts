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
      { name: 'line with surface', value: 'area' },
      { name: 'curve', value: 'spline' },
      { name: 'curve with surface', value: 'areaspline' },
      { name: 'histogramme', value: 'bar' },
      { name: 'camembert', value: 'pie' }
    ];

    this.dashStyles = [
      { name: 'solid', value: 'solid' },
      { name: 'ShortDash', value: 'ShortDash' },
      { name: 'ShortDot', value: 'ShortDot' },
      { name: 'ShortDashDot', value: 'ShortDashDot' },
      { name: 'ShortDashDotDot', value: 'ShortDashDotDot' },
      { name: 'Dot', value: 'Dot' },
      { name: 'Dash', value: 'Dash' },
      { name: 'LongDash', value: 'LongDash' },
      { name: 'DashDot', value: 'DashDot' },
      { name: 'LongDashDot', value: 'LongDashDot' },
      { name: 'LongDashDotDot', value: 'LongDashDotDot' }
    ];

    this.series = [
      { enabled: true,  values: generateValues('line'), markers: true },
      { enabled: false, values: generateValues('line'), markers: true },
      { enabled: false, values: generateValues('line'), markers: true }
    ];

    this.options = {
      chart: {
        type: 'line',
        animation: true,
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
          color: undefined,
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

    this.newData = function(serieIndex) {
      self.options.series[serieIndex].data = generateValues(self.options.chart.type);
    };

    this.resetColor = function(serieIndex) {
      self.options.series[serieIndex].color = undefined;
    };

    this.resetStyle = function(serieIndex) {
      self.options.series[serieIndex].dashStyle = undefined;
    };
  });