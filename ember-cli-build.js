'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberAddon(defaults, {
    svgJar: {
      sourceDirs: [
        'public',
        'tests/dummy/public'
      ]
    },
    'ember-cli-addon-docs': {
      projects: {
        sandbox: {
          tree: 'lib/sandbox'
        }
      }
    }
  });

  return app.toTree();
};
