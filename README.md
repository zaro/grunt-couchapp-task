# grunt-couchapp-task

> Grunt task for couchapp

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-couchapp-task --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-couchapp-task');
```

## The "couchapp" task

### Overview
In your project's Gruntfile, add a section named `couchapp` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  couchapp: {
    serve: {
      port: 3000,
      staticDir: 'attachments',
      appMain : "app.js",
      couchUrl: "http://localhost:5984/my_app"
    },
    push: {
      appMain : "app.js",
      couchUrl: "http://localhost:5984/my_app"
    },
  },
});
```

### Options

#### options.appMain
Type: `String`
Default value:

The main JS file describing your couchapp.

#### options.couchUrl
Type: `String`
Default value:

Url of a CouchDb databse.

#### options.port
Type: `Integer`
Default value: 3000

The port to serve the couch app at. Applies only for the 'serve' task.

#### options.staticDir
Type: `String`
Default value: 'attachments'

The filder with static files ( attachments) for the couchapp.
