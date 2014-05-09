module.exports = function(grunt) {
  grunt.initConfig({
  });
  grunt.loadTasks('tasks');
  grunt.registerTask('default', function() {
    grunt.task.run('openport:port');
    grunt.task.run('openport:port:8000:9000');
    grunt.task.run('openports:port:8000:8080:9000:2');
  });
};
