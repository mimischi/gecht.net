module.exports = function(grunt) {
  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: "im",
          sizes: [
            { name: "sm", suffix: "_1x", quality: 70, width: 512 },
            { name: "sm", suffix: "_2x", quality: 70, width: 1024 },
            { name: "md", suffix: "_1x", quality: 70, width: 720 },
            { name: "md", suffix: "_2x", quality: 70, width: 1440 },
            { name: "lg", suffix: "_1x", quality: 70, width: 1280 },
            { name: "lg", suffix: "_2x", quality: 70, width: 2560 }
          ]
        },
        files: [
          {
            expand: true,
            src: ["**/*.{jpg,png}"],
            cwd: "src/assets/background/src/",
            dest: "src/assets/background/dest/"
          }
        ]
      }
    },
    cwebp: {
      dynamic: {
        options: {
          q: 70
        },
        files: [
          {
            expand: true,
            cwd: "src/assets/background/dest/",
            src: ["**/*.{jpg,png}"],
            dest: "src/assets/background/dest/"
          }
        ]
      }
    },

    realFavicon: {
      favicons: {
        src: "src/assets/favicon.svg",
        dest: "src/assets/favicons/",
        options: {
          iconsPath: "src/assets/favicons/",
          // html: ["src/assets/favicons/favicons.html"],
          design: {
            ios: {
              pictureAspect: "backgroundAndMargin",
              backgroundColor: "#ffffff",
              margin: "14%",
              assets: {
                ios6AndPriorIcons: false,
                ios7AndLaterIcons: true,
                precomposedIcons: true,
                declareOnlyDefaultIcon: true
              }
            },
            desktopBrowser: {},
            windows: {
              pictureAspect: "noChange",
              backgroundColor: "#da532c",
              onConflict: "override",
              assets: {
                windows80Ie10Tile: false,
                windows10Ie11EdgeTiles: {
                  small: false,
                  medium: true,
                  big: false,
                  rectangle: false
                }
              }
            },
            androidChrome: {
              pictureAspect: "noChange",
              themeColor: "#ffffff",
              manifest: {
                name: "MG",
                startUrl: "https://gecht.net",
                display: "standalone",
                orientation: "notSet",
                onConflict: "override",
                declared: true
              },
              assets: {
                legacyIcon: false,
                lowResolutionIcons: false
              }
            },
            safariPinnedTab: {
              pictureAspect: "blackAndWhite",
              threshold: 58.59375,
              themeColor: "#5bbad5"
            }
          },
          settings: {
            compression: 1,
            scalingAlgorithm: "NearestNeighbor",
            errorOnImageTooSmall: false,
            readmeFile: true,
            htmlCodeFile: true,
            usePathAsIs: false
          }
        }
      }
    }
  })
  grunt.loadNpmTasks("grunt-responsive-images")
  grunt.loadNpmTasks("grunt-cwebp")

  grunt.loadNpmTasks("grunt-real-favicon")

  grunt.registerTask("default", ["responsive_images", "cwebp", "realFavicon"])
}
