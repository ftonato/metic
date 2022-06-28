export default {
  "transform": {
    '^.+\\.tsx?$': ['@swc/jest'],
  },
  testEnvironment: "node",
  roots: ["<rootDir>/test/"],
  testPathIgnorePatterns: ['/node_modules/', '/dist/',],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
}