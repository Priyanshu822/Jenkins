module.exports = {
  default: {
    timeout:60000,
    require: [
      './tests/steps_definitions/*.js',
      './tests/support/*.js'
    ],
    paths: ['./tests/features/*.feature'],
    format: [
      'progress',
      'html:reports/report.html'
    ],
    publishQuiet: true,
    parallel: 1
  }
};
