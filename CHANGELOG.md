# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [1.0.1] - 2024-06-30

### Changed

* Switched to public domain "Unlicense" license
* Removed superfluous `tslib` dependency (now has 0 deps)
* Adds `types` field to `package.json` to help with finding types

## [1.0.0] - 2022-05-23

### Changed

* Switched package to module type

### Removed

* Removed CJS, UMD, and minified builds

## [0.3.5] - 2022-05-23

### Fixed

* Fix support for React 18
* Fix `tslib` `importHelpers: true` not being set

## [0.3.4] - 2021-10-28

### Fixed

* Fix legacy peer deps issue

## [0.3.3] - 2020-12-07

### Changed

* removed unused type
* patch upgrade to `ts-lib`

## [0.3.2] - 2020-07-31

### Fixed

* `tslib` not being included in dependencies when it :100: should be
* using `{}` as a type (should use `Record` instead)

## [0.3.1] - 2020-03-13

### Fixed

* typescript definitions by rewriting project in typescript

### Removed

* browser build

## [0.3.0] - 2019-12-29

### Added

* `browser` umd field
* `sideEffects: false` to `package.json`

### Changed

* now using `rollup` for builds
* updated `main` and `module` fields (not using `index.js` in root folder any
  more)
* updated heaps of dependencies
* moved API docs back to README
* updated license from ISC to BSD-3

## [0.2.0] - 2019-10-17

### Added

* TypeScript support (PR #1)

### Changed

* bumped dev dependencies

### Removed

* removed `@babel/polyfill` from `dependencies`

## [0.1.0] - 2018-12-19

### Added

* All the things
