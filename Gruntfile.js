'use strict';

var LIVERELOAD_PORT = 35729;

var lrSnippet = require( 'connect-livereload' )({
    port: LIVERELOAD_PORT
});

var mountFolder = function ( connect, dir ) {
    return connect.static( require( 'path' ).resolve( dir ) );
};

module.exports = function ( grunt ) {


    pkg: grunt.file.readJSON('package.json'),
    require( 'matchdep' ).filterDev('grunt-*').forEach( grunt.loadNpmTasks );

    grunt.initConfig({
        connect: {
            options: {
                port: 9000,
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    middleware: function ( connect ) {
                        return [
                            lrSnippet,
                            mountFolder(connect, 'src')
                        ];
                    }
                }
            }
        },
        tag: {
            banner: "/*!\n" +
                    " * data-streamer\n" +
                    " * @author Anthony Fassett\n" +
                    " * @version 1.0.0\n" +
                    " * Copyright 2015.\n" +
                    " */\n"
        },		
        uglify: {
            dist: {
                files: {
                    'dist/js/d3.data-streamer.min.js': 'src/js/*.js'
                }
            },
            options: {
                banner: "<%= tag.banner %>"
            }
        },
		qunit: {
			options: {
				console: false,
			},
			all: ['src/*.html']
		},
		jshint: {
			all: ['src/js/*.js', '/src/test/**/*.js']
		},        
        open: {
            server: {
                path: 'http://localhost:<%= connect.options.port %>'
            }
        },
        watch: {
            uglify: {
                files: 'src/js/{,*/}*.js',
                tasks: ['uglify']
            },
            qunit: {
				files: ['/src/tests/*.js', '/src/*.html'],
				tasks: ['qunit']
			},
			jshint: {
				files: ['src/js/*.js', '/src/test/**/*.js'],
				tasks: ['jshint']
			},
            livereload: {
                options: {
                    livereload: LIVERELOAD_PORT
                },
                files: [
                    'src/index.html',
                    'src/css/*.css',
                    'src/js/{,*/}*.js',
					'src/test/{,*/}*'
                ]
            }
        }
    });

    grunt.registerTask( 'default' , [				
        'uglify',
		'qunit',
		'jshint',
        'connect:livereload',
        'open',
        'watch'
    ]);

};