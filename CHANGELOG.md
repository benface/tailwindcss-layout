# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project mostly adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.2] - 2018-11-04

### Added
- Added proper tests with Jest

## [1.0.1] - 2018-08-14

### Changed
- Renamed the `pin` option to `offset`, and removed the `pin-` prefix from the generated classes (now only `t-[key]`, `r-[key]`, etc.)
- The `aspect-ratio` classes now only set `padding-bottom`

### Fixed
- Fixed escaping in selectors generated by the plugin

## 1.0.0 - 2018-05-06

Initial release

[Unreleased]: https://github.com/benface/tailwindcss-layout/compare/v1.0.2...HEAD
[1.0.2]: https://github.com/benface/tailwindcss-layout/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/benface/tailwindcss-layout/compare/v1.0.0...v1.0.1