module.exports = {
  preset: 'conventionalcommits',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/npm',
      {
        npmPublish: false,
      },
    ],
    '@semantic-release/git',
    '@semantic-release/github',
    [
      '@semantic-release/exec',
      {
        successCmd:
          'echo "::set-output name=next_version::${nextRelease.version}"',
      },
    ],
  ],
}
