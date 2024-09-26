module.exports = {
    branches: ['main'],
    plugins: [
      [
        '@semantic-release/commit-analyzer',
        {
          parserOpts: {
            types: [
              { type: 'feat', section: 'Features' },
              { type: 'fix', section: 'Bug Fixes' },
              { type: 'refactor', section: 'Refactors' },
              { type: 'perf', section: 'Performance Improvements' },
              { type: 'test', section: 'Tests' },
              { type: 'chore', hidden: true },
              { type: 'build', hidden: true },
            ],
          },
          releaseRules: [
            { type: 'refactor', release: 'patch' },
          ],
        },
      ],
      '@semantic-release/release-notes-generator',
      '@semantic-release/changelog',
      '@semantic-release/npm',
      '@semantic-release/github',
      '@semantic-release/git',
    ],
  };
  