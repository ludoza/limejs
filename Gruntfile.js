module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jsbeautifier: {
			files: ["lime/src/*.js"]
		},
		jsdoc: {
			dist: {
				src: ['lime/src/', 'README.md'],
				options: {
					destination: 'doc',
					recurse: true,
					template: 'templates/sour',
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-jsdoc');
	grunt.loadNpmTasks('grunt-jsbeautifier');
	// Default task(s).
	grunt.registerTask('default', ['jsbeautifier', 'jsdoc']);
};