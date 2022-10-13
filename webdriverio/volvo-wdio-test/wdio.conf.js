const { join } = require("path");
const allure = require("allure-commandline");

exports.config = {
  specs: ["./test/specs/**/*.js"],
  maxInstances: 1,
  capabilities: [
    {
   //   maxInstances: 1,
      browserName: "chrome",
      acceptInsecureCerts: true,
      "goog:chromeOptions": {
        args: [
          "--no-sandbox",
          "--disable-dev-shm-usage",
          "--disable-infobars",
          "--window-size=1920,1080",
        ],
      },
    },
  //   {
  //     maxInstances: 3,
  //     browserName: "firefox",
  //     acceptInsecureCerts: true,
  //     "moz:firefoxOptions": {
  //     args: ["-width=1920", "-height=1080"],
  //     },
  //   },
  ],
  logLevel: "error",
  bail: 0,
  baseUrl: "https://www.volvocars.com/intl/",
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: [
    "chromedriver",
    "geckodriver",
    [
      "image-comparison",
      {
        baselineFolder: join(process.cwd(), "./tests/baseLineImages/"),
        formatImageName: "{tag}-{logName}-{width}x{height}",
        screenshotPath: join(process.cwd(), ".tmp/"),
        savePerInstance: true,
        autoSaveBaseline: true,
        blockOutStatusBar: true,
        blockOutToolBar: true,
      },
    ],
  ],
  framework: "mocha", 
  reporters: ["spec", ["allure", { outputDir: "allure-results" }]],
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
  afterTest: async function (test, context, { passed }) {
    if (!passed) {
      void browser.takeScreenshot();
    }
  },

  onComplete: function () {
    const reportError = new Error("Could not generate Allure report");
    const generation = allure(["generate", "allure-results", "--clean"]);
    return new Promise((resolve, reject) => {
      const generationTimeout = setTimeout(() => reject(reportError), 5000);

      generation.on("exit", function (exitCode) {
        clearTimeout(generationTimeout);

        if (exitCode !== 0) {
          return reject(reportError);
        }

        console.log("Allure report successfully generated");
        resolve();
      });
    });
  },
};
