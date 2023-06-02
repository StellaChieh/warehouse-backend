/** @type {import('ts-jest').JestConfigWithTsJest} */
import { jsWithTs as tsjPreset } from 'ts-jest/presets'
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    ...tsjPreset.transform,
    // [...]
  },
  modulePathIgnorePatterns: ['dist']
};
