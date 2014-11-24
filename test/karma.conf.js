module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
      'app/lib/angular.js',
      'app/lib/angular-route.js',
      'app/lib/angular-mocks.js',
      'app/js/**/*.js',
      'test/unit/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['PhantomJS'],

    plugins : [
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-htmlfile-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    },

    reporters: ['progress', 'html'],

    htmlReporter: {
      outputFile: 'test_out/units.html'
    }

  });
};
