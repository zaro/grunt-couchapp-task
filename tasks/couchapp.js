/*
 * grunt-couchapp-task
 * https://github.com/zaro/grunt-couchapp-task
 *
 * Copyright (c) 2015 Svetlozar Argirov
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('couchapp', 'Grunt task for couchapp', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      port: 3000,
      staticDir: 'attachments',
      appMain : null,
      couchUrl: null
    });
    var command = this.target;
    grunt.log.writeln(this.target + ':' + command);
    if ( command != 'serve' && command != 'push') {
      grunt.log.error('you must use either :push or :serve');
      return false;
    }

    if (!options.appMain) {
      grunt.log.error('appMain must point to the couchapp main file');
      return false;
    }
    if (!options.couchUrl) {
      grunt.log.error('couchUrl must be the url to push/serve to');
      return false;
    }

    var couchapp = require('couchapp');
    var path = require('path')

    var done = this.async();

    couchapp.createApp(require(path.resolve(options.appMain)), options.couchUrl, function(app){
      if(command == 'push'){
        app.push();
        done();
      }
      if(command == 'serve'){
        app.serve(options);
        done();
      }
    });
  });

};
