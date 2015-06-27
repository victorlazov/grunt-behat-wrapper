/**
 * @file
 * Documentation missing.
 */

'use strict';

module.exports = function (grunt) {
  grunt.config.init({
    pkg: grunt.file.readJSON('package.json'),

    eslint: {
      all: {
        src: [
          'Gruntfile.js',
          'tasks/*.js',
          '<%= nodeunit.tests %>'
        ]
      }
    },

    verb: {
      options: {
        data: [
          'docs/data/*.yml'
        ]
      },
      docs: {
        files: [
          {
            src: ['docs/README.md'],
            dest: 'README.md'
          }
        ]
      }
    },

    watch: {
      docs: {
        files: ['docs/**/*.{md,yml}', 'package.json'],
        tasks: ['verb:docs']
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-internal');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-verb');

  grunt.registerTask('test', [
    'eslint',
    'nodeunit'
  ]);

  grunt.registerTask('default', ['test']);
};
