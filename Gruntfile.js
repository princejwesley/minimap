module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                mangle: true,
                sourceMap: false,
                preserveComments: 'some',
            },
            dynamic_mappings: {
                files: [{
                    src: 'src/minimap.js',
                    dest: 'dist/minimap.min.js',
                }, ],
            },
        },

        autoprefixer: {

            options: {
                diff: false,
                map: false,
                browsers: ['> 1%', 'last 5 versions', 'Firefox ESR', 'Opera 12.1']
            },
            prefixed_css: {
                src: 'src/minimap.css',
                dest: 'dist/minimap.min.css',
            },

        },
        jshint: {
            all: ['Gruntfile.js', 'src/*.js'],
            options: {
                multistr: true
            }
        },
        cssmin: {
            my_target: {
                options: {
                    keepSpecialComments: "*"
                },
                files: [{
                    src: 'dist/minimap.min.css',
                    dest: 'dist/minimap.min.css',
                    ext: '.min.css'
                }]
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');


    // Default task(s).
    grunt.registerTask('default', ['jshint', 'uglify', 'autoprefixer', 'cssmin']);

};
