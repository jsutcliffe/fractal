# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.2.15](https://github.com/frctl/fractal/compare/@dryfeld/handlebars@1.2.14...@dryfeld/handlebars@1.2.15) (2022-08-17)

**Note:** Version bump only for package @dryfeld/handlebars





## [1.2.14](https://github.com/frctl/fractal/compare/@dryfeld/handlebars@1.2.13...@dryfeld/handlebars@1.2.14) (2022-01-26)

**Note:** Version bump only for package @dryfeld/handlebars





## [1.2.13](https://github.com/frctl/fractal/compare/@dryfeld/handlebars@1.2.12...@dryfeld/handlebars@1.2.13) (2021-07-20)

**Note:** Version bump only for package @dryfeld/handlebars





## [1.2.12](https://github.com/frctl/fractal/compare/@dryfeld/handlebars@1.2.11...@dryfeld/handlebars@1.2.12) (2021-07-19)

**Note:** Version bump only for package @dryfeld/handlebars





## [1.2.11](https://github.com/frctl/fractal/compare/@dryfeld/handlebars@1.2.10...@dryfeld/handlebars@1.2.11) (2021-07-12)


### Bug Fixes

* **handlebars:** fix main file path ([#1060](https://github.com/frctl/fractal/issues/1060)) ([74212fb](https://github.com/frctl/fractal/commit/74212fbb2c2e757154121d5d78a2d1c2857e1cfc))





## [1.2.10](https://github.com/frctl/fractal/compare/@dryfeld/handlebars@1.2.9...@dryfeld/handlebars@1.2.10) (2021-05-20)

**Note:** Version bump only for package @dryfeld/handlebars





## [1.2.9](https://github.com/frctl/fractal/compare/@dryfeld/handlebars@1.2.8...@dryfeld/handlebars@1.2.9) (2021-03-23)

**Note:** Version bump only for package @dryfeld/handlebars





## [1.2.8](https://github.com/frctl/fractal/compare/@dryfeld/handlebars@1.2.7...@dryfeld/handlebars@1.2.8) (2021-03-20)

**Note:** Version bump only for package @dryfeld/handlebars





## [1.2.7](https://github.com/frctl/fractal/compare/@dryfeld/handlebars@1.2.6...@dryfeld/handlebars@1.2.7) (2021-02-14)


### Bug Fixes

* **handlebars:** fix render tag resolving escaped component handles to context object ([#884](https://github.com/frctl/fractal/issues/884)) ([467d942](https://github.com/frctl/fractal/commit/467d942f089d81b955e4ce514d3c69bd1ce9c177))





## [1.2.6](https://github.com/frctl/fractal/compare/@dryfeld/handlebars@1.2.5...@dryfeld/handlebars@1.2.6) (2021-02-07)

**Note:** Version bump only for package @dryfeld/handlebars





## [1.2.5](https://github.com/frctl/fractal/compare/@dryfeld/handlebars@1.2.4...@dryfeld/handlebars@1.2.5) (2020-12-22)


### Bug Fixes

* do not modify used component context when using contextData helper ([#695](https://github.com/frctl/fractal/issues/695)) ([e6ff838](https://github.com/frctl/fractal/commit/e6ff8383b4ebc2b93d70a8a176c30c49d3581139))





## [1.2.4](https://github.com/frctl/fractal/compare/@dryfeld/handlebars@1.2.3...@dryfeld/handlebars@1.2.4) (2020-11-13)


### Bug Fixes

* clone only data for mutations ([#688](https://github.com/frctl/fractal/issues/688)) ([315ba80](https://github.com/frctl/fractal/commit/315ba8010ed33a7e3314376c108b39f68c7d4435))





## [1.2.3](https://github.com/frctl/fractal/compare/@dryfeld/handlebars@1.2.2...@dryfeld/handlebars@1.2.3) (2020-11-03)


### Bug Fixes

* do not modify parent scope when including subcomponent ([#677](https://github.com/frctl/fractal/issues/677)) ([864ad04](https://github.com/frctl/fractal/commit/864ad04faf3dfa4d2397091d991d2edb6e20d52f))





## [1.2.2](https://github.com/frctl/fractal/compare/@dryfeld/handlebars@1.2.1...@dryfeld/handlebars@1.2.2) (2020-10-19)

**Note:** Version bump only for package @dryfeld/handlebars





## [1.2.1](https://github.com/frctl/fractal/compare/@dryfeld/handlebars@1.2.0...@dryfeld/handlebars@1.2.1) (2020-10-15)


### Bug Fixes

* **handlebars:** fix handlebars render tag overwriting default context ([#648](https://github.com/frctl/fractal/issues/648)) ([035191c](https://github.com/frctl/fractal/commit/035191c7b2cd97d928143b312f428b75b1629ff6))





## 1.2.0

### Features

-   switch to use new synchronous context methods
-   catch errors from render helper

### Bug Fixes

-   skip arrays while merging context (#2)

### Chores

-   bump lodash from 4.17.4 to 4.17.13 (#3)
-   replace yarn lockfile with package-lock.json

## 1.1.5

-   Convert fractal to peerDependency

## 1.1.4

-   [NEW] Add support for referencing partials by path in addition to `@handle`

## 1.1.2

-   [FIX] Fix issue with incorrect paths being generated using the `path` helper when used within a component rendered using the `render` helper.

## 1.0.1

-   Fix `_self` variable in included templates
-   Allow path helper strings to include handlebars variables
-   Provide support for future changes to `_` ('special') variables setting

## 1.0.0

Initial release.
