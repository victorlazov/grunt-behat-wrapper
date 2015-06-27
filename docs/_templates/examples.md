## Basic

```javascript
require('jit-grunt')(
  grunt,
  // Mapping.
  {
    'behat-definitions': 'grunt-behat-wrapper',
    'behat-story-syntax': 'grunt-behat-wrapper',
    'behat-config-reference': 'grunt-behat-wrapper',
    'behat-run': 'grunt-behat-wrapper',
    'behat-rerun': 'grunt-behat-wrapper'
  }
);

grunt.config.init({
  'behat-definitions': {
    main: {}
  },
  'behat-story-syntax': {
    main: {}
  },
  'behat-config-reference': {
    main: {}
  },
  'behat-run': {
    main: {}
  },
  'behat-rerun': {
    main: {}
  }
});
```
