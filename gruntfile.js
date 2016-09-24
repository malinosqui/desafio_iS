module.exports = function (grunt) {

    grunt.initConfig({

        browserify: {
            development: {
                src: [
                    "./src/js/main.js",
                    "./src/js/clock.js"
                ],
                dest: './dist/app/common.js',
                options: {
                    browserifyOptions: { debug: true },
                    transform: [["babelify", { "presets": ["es2015"] }]],
                    plugin: [
                        ["factor-bundle", {
                            outputs: [
                                "./dist/app/main.js",
                                "./dist/app/clock.js"
                            ]
                        }]
                    ],
                    watch: true,
                    keepAlive: true,
                }
            },
            production: {
                src: [
                    "./src/js/main.js",
                    "./src/js/clock.js"
                ],
                dest: './dist/app/common.min.js',
                options: {
                    browserifyOptions: { debug: false },
                    transform: [["babelify", { "presets": ["es2015"] }]],
                    plugin: [
                        ["factor-bundle", {
                            outputs: [
                                "./dist/app/main.min.js",
                                "./dist/app/clock.min.js"
                            ]
                        }],
                        ["minifyify", { map: false }]
                    ]
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                    "src": ["index.html"],
                    "dest": "dist/index.html"
                }]
            }
        },
        imagemin: {                          // Task
            dynamic: {                         // Another target
                files: [{
                    expand: true,                  // Enable dynamic expansion
                    cwd: 'src/',                   // Src matches are relative to this path
                    src: ['imgs/*.{png,jpg,gif,jpeg}'],   // Actual patterns to match
                    dest: 'dist/'                  // Destination path prefix
                }]
            }
        },
        cssmin: {
            build: {
                files: {
                    'dist/css/style.min.css': ['src/css/*.css']

                }
            }
        }

    });

    grunt.loadNpmTasks("grunt-contrib-htmlmin");
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-browserify');

    grunt.registerTask("buildDev", ['htmlmin', 'cssmin', 'browserify:development']);
    grunt.registerTask("buildProd", ['htmlmin', 'cssmin', 'browserify:production']);

};