module.exports = function(grunt) {	
	pkg: grunt.file.readJSON('package.json'),
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
	
	grunt.initConfig({
		uglify: {
			dist: {
				files: {
					'dist/js/d3.data-steamer.min.js': [ 'src/js/{,*/}*.js' ]
				}
			}
		},
		json_server: {
			options: {
				port: 13337,
				hostname: '0.0.0.0'				
			}
		},
		qunit: {
			options: {
				console: false,
			},
			all: ['src/tests/*.html']
		},
		jshint: {
			all: ['src/js/*.js', '/src/test/**/*.js']
		},
		watch: {
			uglify: {
				files: 'src/js/{,*/}*.js',
				tasks: ['uglify']
			},
			qunit: {
				files: ['/src/tests/*.js', '/src/tests/*.html'],
				tasks: ['qunit']
			},
			jshint: {
				files: ['src/js/*.js', '/src/test/**/*.js'],
				tasks: ['jshint']
			}
		}
	});
	grunt.registerTask('default', [		
		'uglify',
		'qunit',
		'jshint',
		'json_server'
		//'watch'
	]);
};