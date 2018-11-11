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
    }
  })
  grunt.loadNpmTasks("grunt-responsive-images")
  grunt.loadNpmTasks("grunt-cwebp")

  grunt.registerTask("default", ["responsive_images", "cwebp"])
}
