module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
     html: {
       files: ['**.html'],
       tasks: ['default'],
       options: {
         livereload: true,
         spawn: false,
      },
   },
},
},
});

  // Load all the plugins!
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['watch']);

};
