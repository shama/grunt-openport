# grunt-openport

> A grunt plugin to find open ports.

## Getting Started

Install this grunt plugin next to your project's
[Gruntfile.js gruntfile](http://gruntjs.com/getting-started) with:
`npm install grunt-openport`

Then add this line to your project's `Grunfile.js` gruntfile:

```js
grunt.loadNpmTasks('grunt-openport');
```

## Documentation

This plugin provides 2 tasks: `openport` and `openports`.

* `grunt openport`  
Will set the first open port with `grunt.config('port', port)` in your Grunt config.
* `grunt openport:env.val`  
Will set the first open port with `grunt.config('env.val', port)` in your Grunt config.
* `grunt openport:port:8000`  
Will set the first open port on or above `8000` with `grunt.config('port', port)` in your Grunt config.
* `grunt openport:port:9000:9010`  
Will set the first open port between `9000` and `9010` with `grunt.config('port', port)` in your Grunt config.
* `grunt openports:ports:2000:3000:4000:5000:6000`  
Will find an open port from the given list of ports then set the array of open ports from the list with `grunt.config('ports', ports)` in your Grunt config.
* `grunt openports:ports:2000:3000:4000:5000:6000:3`  
Same as above but will only find the first 3 open ports.

## Example

A common use case is determining which port to run a live reload server on with [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch):

```js
module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      options: {
        // Use the default port, 35729, at first
        livereload: true,
      },
      all: {
        files: ['src/*.js'],
        tasks: ['copy'],
      },
    },
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-openport');
  grunt.registerTask('default', ['openport:watch.options.livereload:35729', 'watch']);
};
```

Now when `grunt` is ran and port `35729` is not available, it will start the live reload server on port `35730` instead (or the next open port).

## Contributing

Please use the issue tracker and pull requests.

## Release History

* 0.1.0 Initial release

## License

Copyright (c) 2014 Kyle Robinson Young  
Licensed under the MIT license.
