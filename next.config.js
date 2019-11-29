const withPlugins = require("next-compose-plugins");
const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const optimizedImages = require("next-optimized-images");
const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");

const { ANALYZE, ASSET_HOST } = process.env;

// for those who using CDN
const assetPrefix = ASSET_HOST || "";

const nextConfiguration = {
  assetPrefix,
  target: "serverless",
  webpack: (config, { dev }) => {
    config.output.publicPath = `${assetPrefix}${config.output.publicPath}`;

    return config;
  }
  // useFileSystemPublicRoutes: false
};

module.exports = withPlugins(
  [
    withSass,
    [
      optimizedImages,
      {
        optimizeImagesInDev: true,
        svgo: {
          // enable/disable svgo plugins here
        }
      }
    ],
    withCSS,
    [
      withBundleAnalyzer,
      {
        analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
        analyzeBrowser: ["browser", "both"].includes(
          process.env.BUNDLE_ANALYZE
        ),
        bundleAnalyzerConfig: {
          server: {
            analyzerMode: "static",
            reportFilename: "../bundles/server.html"
          },
          browser: {
            analyzerMode: "static",
            reportFilename: "../bundles/client.html"
          }
        }
      }
    ]
  ],
  nextConfiguration
);
