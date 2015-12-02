module.exports = function(grunt) {
  var openport = require('openport');

  // Only supports a single call atm
  grunt.option('openportPromise', new Promise(function(resolve, reject) {
    grunt.registerTask('openport', 'Finds an open port', function(target, start, end) {
      var done = this.async();
      target = target || 'port';
      function callback(err, port) {
        if (err) {
          grunt.log.error(err);
          reject(err);
        } else {
          grunt.log.ok('Found open port: ' + port);
          grunt.config(target, port);
          done();
          resolve(port);
        }
      }
      if (start) {
        openport.find({startingPort:start,endingPort:end}, callback);
      } else {
        openport.find(callback);
      }
    });

    grunt.registerTask('openports', 'Finds open ports', function() {
      var done = this.async();
      var ports = Array.prototype.slice.call(arguments);
      var target = ports.shift();
      var count = Number(ports.pop());
      ports = ports.map(Number);

      if (count >= ports.length) {
        ports.push(count);
        count = ports.length - 1;
      }

      openport.find({ports:ports,count:count}, function(err, ports) {
        if (err){
          grunt.log.error(err); 
          reject(err);
        }
        else {
          if (!Array.isArray(ports)) ports = [ports];
          grunt.log.ok('Found ' + count + ' open port(s): ' + ports.join(','));
          grunt.config(target, ports);
          done();
          resolve(ports);
        }
      });
    });
  }));
};
