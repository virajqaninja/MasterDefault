exports.config = {
    // launch locally when fields directConnect and seleniumAddress are not provided
    chromeDriver: 'D:/Eclipse progs/driverserver/chromedriver.exe',
    seleniumServerJar: 'D:/Eclipse progs/jars/selenium-server-standalone-3.11.0.jar',
    specs: ['D:\\Protractor\\test.js'],
    capabilities: {
      browserName: 'chrome'
    }
  }