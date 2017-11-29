const eslintCommand = 'eslint *.js --config @cid-harvard/eslint-config/base.js';

module.exports = {
  scripts: {
    eslint: {
      script: eslintCommand,
      fix: {
        script: `${eslintCommand} --fix`,
      },
    },
  },
};
