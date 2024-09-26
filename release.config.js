module.exports = {
    branches: ['main'],
    plugins: [
        {
            path: '@semantic-release/commit-analyzer',
            config: {
              releaseRules: [
                { type: 'refactor', release: 'minor' },
                { breaking: true, release: 'major' }, 
                { type: 'feat', release: 'minor' }, 
                { type: 'fix', release: 'patch' }, 
                { type: 'docs', release: false },
              ],
            },
          },
      '@semantic-release/release-notes-generator',
      '@semantic-release/changelog',
      '@semantic-release/npm',
      '@semantic-release/github',
      '@semantic-release/git'
    ],
  };
  