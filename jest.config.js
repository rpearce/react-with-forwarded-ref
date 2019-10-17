module.exports = {
  clearMocks: true,
  collectCoverageFrom: [
    '<rootDir>/source/**/*.js'
  ],
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy'
  },
  setupFilesAfterEnv: [
    '<rootDir>/test/setup.js'
  ],
  snapshotSerializers: [
    'enzyme-to-json/serializer'
  ]
}
