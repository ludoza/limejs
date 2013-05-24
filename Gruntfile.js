module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	jsbeautifier : {
	  files : ["src/**/*.js"]
	}
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-jsbeautifier');

  // Default task(s).
  grunt.registerTask('default', ['jsbeautifier']);

};