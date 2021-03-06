# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [9.8.1](https://github.com/cozy/cozy-client/compare/v9.8.0...v9.8.1) (2020-01-16)


### Bug Fixes

* Refresh token on expiration ([#618](https://github.com/cozy/cozy-client/issues/618)) ([434962d](https://github.com/cozy/cozy-client/commit/434962d))





# [9.8.0](https://github.com/cozy/cozy-client/compare/v9.7.0...v9.8.0) (2020-01-15)


### Features

* Export createClientInteractive in node entry point ([521d526](https://github.com/cozy/cozy-client/commit/521d526))
* Export createMockClient in both entry points ([7544c97](https://github.com/cozy/cozy-client/commit/7544c97))





# [9.7.0](https://github.com/cozy/cozy-client/compare/v9.6.1...v9.7.0) (2020-01-15)


### Bug Fixes

* Await promise during tests and fix the test ([d4bc48e](https://github.com/cozy/cozy-client/commit/d4bc48e))


### Features

* Add codemod to transform client.all into Q ([4ca3a1d](https://github.com/cozy/cozy-client/commit/4ca3a1d))
* Deprecate client.all in favor of Q ([887d422](https://github.com/cozy/cozy-client/commit/887d422))
* Export Q in node env ([cc11c86](https://github.com/cozy/cozy-client/commit/cc11c86))





## [9.6.1](https://github.com/cozy/cozy-client/compare/v9.6.0...v9.6.1) (2020-01-15)

**Note:** Version bump only for package cozy-client





# [9.6.0](https://github.com/cozy/cozy-client/compare/v9.5.2...v9.6.0) (2020-01-13)


### Features

* Use bookmark pagination for queryAll ([8195a72](https://github.com/cozy/cozy-client/commit/8195a72))
* Use faster concat instead of union ([544887f](https://github.com/cozy/cozy-client/commit/544887f))





## [9.5.2](https://github.com/cozy/cozy-client/compare/v9.5.1...v9.5.2) (2020-01-10)

**Note:** Version bump only for package cozy-client





## [9.5.1](https://github.com/cozy/cozy-client/compare/v9.5.0...v9.5.1) (2020-01-09)


### Bug Fixes

* Mute trigger errors without success ([53ea662](https://github.com/cozy/cozy-client/commit/53ea662))





# [9.5.0](https://github.com/cozy/cozy-client/compare/v9.4.0...v9.5.0) (2020-01-08)


### Bug Fixes

* Add btoa/cozy-logger deps needed for createClientInteractive tests ([2e80a4a](https://github.com/cozy/cozy-client/commit/2e80a4a))
* Add server-destroy dep necessary for createClientInteractive tests ([edcf7fd](https://github.com/cozy/cozy-client/commit/edcf7fd))
* Revive the client with oauthOptions ([32c0685](https://github.com/cozy/cozy-client/commit/32c0685))


### Features

* Add a manual test script for createClientInteractive ([f9ed9c1](https://github.com/cozy/cozy-client/commit/f9ed9c1))
* Add doctypes to the path of the saved credentials ([675cec0](https://github.com/cozy/cozy-client/commit/675cec0))
* Add tests for createInteractiveClient ([9850f74](https://github.com/cozy/cozy-client/commit/9850f74))
* Pass an fs object to serverOptions ([9b42325](https://github.com/cozy/cozy-client/commit/9b42325))





# [9.4.0](https://github.com/cozy/cozy-client/compare/v9.3.0...v9.4.0) (2020-01-06)


### Features

* **cozy-client:** Add getStoreURL method to applications model ([a6f5de0](https://github.com/cozy/cozy-client/commit/a6f5de0))





# [9.3.0](https://github.com/cozy/cozy-client/compare/v9.2.0...v9.3.0) (2020-01-02)


### Features

* File normalization function ([#602](https://github.com/cozy/cozy-client/issues/602)) ([ef6e11b](https://github.com/cozy/cozy-client/commit/ef6e11b)), closes [/github.com/cozy/cozy-notes/pull/41#discussion_r360844792](https://github.com//github.com/cozy/cozy-notes/pull/41/issues/discussion_r360844792)





# [9.2.0](https://github.com/cozy/cozy-client/compare/v9.1.1...v9.2.0) (2019-12-19)


### Features

* Destroy all removes the _type from the document ([1ca7ac7](https://github.com/cozy/cozy-client/commit/1ca7ac7))





## [9.1.1](https://github.com/cozy/cozy-client/compare/v9.1.0...v9.1.1) (2019-12-18)


### Bug Fixes

* Ensure backward compatibility from pre-9.0.0 ([92ee48e](https://github.com/cozy/cozy-client/commit/92ee48e))





# [9.1.0](https://github.com/cozy/cozy-client/compare/v9.0.0...v9.1.0) (2019-12-18)


### Features

* Share a link with special permissions ([#598](https://github.com/cozy/cozy-client/issues/598)) ([ab73de8](https://github.com/cozy/cozy-client/commit/ab73de8))





# [9.0.0](https://github.com/cozy/cozy-client/compare/v8.10.1...v9.0.0) (2019-12-18)


### Bug Fixes

* Export triggers model ([6553bd9](https://github.com/cozy/cozy-client/commit/6553bd9))
* Fail safe trigger state checks ([e313b08](https://github.com/cozy/cozy-client/commit/e313b08))


### Code Refactoring

* Singularize method names ([6ecfede](https://github.com/cozy/cozy-client/commit/6ecfede))


### Features

* Check if trigger errors are muted ([3d33ef6](https://github.com/cozy/cozy-client/commit/3d33ef6))
* Get accounts last error ([bed0445](https://github.com/cozy/cozy-client/commit/bed0445))
* Get last trigger error ([4583e24](https://github.com/cozy/cozy-client/commit/4583e24))
* Get last trigger exec date ([d208d88](https://github.com/cozy/cozy-client/commit/d208d88))
* Get triggers account ([50b5f0d](https://github.com/cozy/cozy-client/commit/50b5f0d))
* Mute account errors ([c2be0f9](https://github.com/cozy/cozy-client/commit/c2be0f9))


### BREAKING CHANGES

* The trigger model is now singular, update your import 
statements





## [8.10.1](https://github.com/cozy/cozy-client/compare/v8.10.0...v8.10.1) (2019-12-17)


### Bug Fixes

* Test if note ([dc80c34](https://github.com/cozy/cozy-client/commit/dc80c34))





# [8.10.0](https://github.com/cozy/cozy-client/compare/v8.9.0...v8.10.0) (2019-12-17)


### Features

* Add Note model ([5b4f150](https://github.com/cozy/cozy-client/commit/5b4f150))





# [8.9.0](https://github.com/cozy/cozy-client/compare/v8.8.1...v8.9.0) (2019-12-16)


### Features

* Add file model ([b83e58d](https://github.com/cozy/cozy-client/commit/b83e58d))





## [8.8.1](https://github.com/cozy/cozy-client/compare/v8.8.0...v8.8.1) (2019-12-12)

**Note:** Version bump only for package cozy-client





# [8.8.0](https://github.com/cozy/cozy-client/compare/v8.7.1...v8.8.0) (2019-12-12)


### Bug Fixes

* JSDoc warnings ([ac3d55a](https://github.com/cozy/cozy-client/commit/ac3d55a))


### Features

* Add mockClient creation for use in tests ([b2c7b40](https://github.com/cozy/cozy-client/commit/b2c7b40))





## [8.7.1](https://github.com/cozy/cozy-client/compare/v8.7.0...v8.7.1) (2019-12-10)

**Note:** Version bump only for package cozy-client





# [8.7.0](https://github.com/cozy/cozy-client/compare/v8.6.0...v8.7.0) (2019-12-10)


### Features

* Fix regeneratorRuntime ([#588](https://github.com/cozy/cozy-client/issues/588)) ([4612ad9](https://github.com/cozy/cozy-client/commit/4612ad9)), closes [#584](https://github.com/cozy/cozy-client/issues/584)





# [8.6.0](https://github.com/cozy/cozy-client/compare/v8.5.1...v8.6.0) (2019-12-09)


### Bug Fixes

* Require regenerator-runtime from @babel/runtime/regenerator ([3de520a](https://github.com/cozy/cozy-client/commit/3de520a))


### Features

* Instance add method to check if already subscribed ([6fb6938](https://github.com/cozy/cozy-client/commit/6fb6938))





## [8.5.1](https://github.com/cozy/cozy-client/compare/v8.5.0...v8.5.1) (2019-12-05)


### Bug Fixes

* Don't change my headers ([fa25142](https://github.com/cozy/cozy-client/commit/fa25142))





# [8.5.0](https://github.com/cozy/cozy-client/compare/v8.4.0...v8.5.0) (2019-12-02)


### Features

* Export applications model ([5579f07](https://github.com/cozy/cozy-client/commit/5579f07))





# [8.4.0](https://github.com/cozy/cozy-client/compare/v8.3.1...v8.4.0) (2019-11-29)


### Features

* Add checkForRevocation helper ([e62d62b](https://github.com/cozy/cozy-client/commit/e62d62b))
* Add helper functions ([3d9d2dd](https://github.com/cozy/cozy-client/commit/3d9d2dd))





## [8.3.1](https://github.com/cozy/cozy-client/compare/v8.3.0...v8.3.1) (2019-11-29)

**Note:** Version bump only for package cozy-client





# [8.3.0](https://github.com/cozy/cozy-client/compare/v8.2.0...v8.3.0) (2019-11-28)


### Features

* Expose cozy client's version ([df53db0](https://github.com/cozy/cozy-client/commit/df53db0))





# [8.2.0](https://github.com/cozy/cozy-client/compare/v8.1.0...v8.2.0) (2019-11-25)


### Features

* Instance model add buildPremiumLink ([722085d](https://github.com/cozy/cozy-client/commit/722085d))





# [8.1.0](https://github.com/cozy/cozy-client/compare/v8.0.0...v8.1.0) (2019-11-25)


### Features

* Add shoulDisplayOffers method ([d1a3b34](https://github.com/cozy/cozy-client/commit/d1a3b34))





# [8.0.0](https://github.com/cozy/cozy-client/compare/v7.14.0...v8.0.0) (2019-11-22)


### Bug Fixes

* SettingsCollection fix data response ([11edf5e](https://github.com/cozy/cozy-client/commit/11edf5e))


### BREAKING CHANGES

* SettingsCollection now returns the result in data : {}





# [7.14.0](https://github.com/cozy/cozy-client/compare/v7.13.0...v7.14.0) (2019-11-21)


### Features

* Add Instance Model to manager instance information ([42678fa](https://github.com/cozy/cozy-client/commit/42678fa))





# [7.13.0](https://github.com/cozy/cozy-client/compare/v7.12.0...v7.13.0) (2019-11-21)


### Features

* Attempt options auto load ([43786c8](https://github.com/cozy/cozy-client/commit/43786c8))
* Expose instance options ([9824683](https://github.com/cozy/cozy-client/commit/9824683))





# [7.12.0](https://github.com/cozy/cozy-client/compare/v7.11.0...v7.12.0) (2019-11-18)


### Features

* **cozy-stack-client:** Files get binary of a file ([31236b9](https://github.com/cozy/cozy-client/commit/31236b9))





# [7.11.0](https://github.com/cozy/cozy-client/compare/v7.10.0...v7.11.0) (2019-11-13)


### Features

* **cozy-stack-client:** Download file version ([830679b](https://github.com/cozy/cozy-client/commit/830679b))





# [7.10.0](https://github.com/cozy/cozy-client/compare/v7.9.0...v7.10.0) (2019-11-12)


### Features

* Expose Q helper to build query definitions ([64f1924](https://github.com/cozy/cozy-client/commit/64f1924))





# [7.9.0](https://github.com/cozy/cozy-client/compare/v7.8.0...v7.9.0) (2019-11-08)


### Features

* Add client creation for CLI ([d5c76cf](https://github.com/cozy/cozy-client/commit/d5c76cf))





# [7.8.0](https://github.com/cozy/cozy-client/compare/v7.7.0...v7.8.0) (2019-10-31)


### Features

* Added a simple settings collection ([fa0c1d6](https://github.com/cozy/cozy-client/commit/fa0c1d6))





# [7.7.0](https://github.com/cozy/cozy-client/compare/v7.6.0...v7.7.0) (2019-10-29)


### Features

* Log out a web client ([1569893](https://github.com/cozy/cozy-client/commit/1569893))





# [7.6.0](https://github.com/cozy/cozy-client/compare/v7.5.2...v7.6.0) (2019-10-24)


### Features

* Export fetchPolicies directly ([89293b8](https://github.com/cozy/cozy-client/commit/89293b8))





## [7.5.2](https://github.com/cozy/cozy-client/compare/v7.5.1...v7.5.2) (2019-10-21)


### Bug Fixes

* Get last execution from state ([64e194e](https://github.com/cozy/cozy-client/commit/64e194e))





## [7.5.1](https://github.com/cozy/cozy-client/compare/v7.5.0...v7.5.1) (2019-10-16)


### Bug Fixes

* Pass doctype correctly to hydrateDocuments ([a2fbe42](https://github.com/cozy/cozy-client/commit/a2fbe42))





# [7.5.0](https://github.com/cozy/cozy-client/compare/v7.4.1...v7.5.0) (2019-10-16)


### Bug Fixes

* Make unused variable an error ([19fa023](https://github.com/cozy/cozy-client/commit/19fa023))


### Features

* GetQueryFromState can hydrate documents directly ([6150ae3](https://github.com/cozy/cozy-client/commit/6150ae3))





## [7.4.1](https://github.com/cozy/cozy-client/compare/v7.4.0...v7.4.1) (2019-10-16)

**Note:** Version bump only for package cozy-client





# [7.4.0](https://github.com/cozy/cozy-client/compare/v7.3.1...v7.4.0) (2019-10-16)


### Features

* Fetch a single app from the registry ([b6a9d85](https://github.com/cozy/cozy-client/commit/b6a9d85))





## [7.3.1](https://github.com/cozy/cozy-client/compare/v7.3.0...v7.3.1) (2019-10-15)


### Bug Fixes

* Do not modify wrapped component PropTypes ([2d107f1](https://github.com/cozy/cozy-client/commit/2d107f1))





# [7.3.0](https://github.com/cozy/cozy-client/compare/v7.2.0...v7.3.0) (2019-10-14)


### Features

* Add model helper methods inside cozy-client ([ead3458](https://github.com/cozy/cozy-client/commit/ead3458))





# [7.2.0](https://github.com/cozy/cozy-client/compare/v7.1.1...v7.2.0) (2019-10-14)


### Features

* Fetch maintenance apps ([59cc024](https://github.com/cozy/cozy-client/commit/59cc024))





## [7.1.1](https://github.com/cozy/cozy-client/compare/v7.1.0...v7.1.1) (2019-10-11)

**Note:** Version bump only for package cozy-client





# [7.1.0](https://github.com/cozy/cozy-client/compare/v7.0.0...v7.1.0) (2019-10-10)


### Bug Fixes

* Deprecate updateFileMetadata ([fc811fe](https://github.com/cozy/cozy-client/commit/fc811fe))


### Features

* **cozy-stack-client:** Filecollection update file metadata ([1dbeb40](https://github.com/cozy/cozy-client/commit/1dbeb40))





# [7.0.0](https://github.com/cozy/cozy-client/compare/v6.66.0...v7.0.0) (2019-10-07)


### Bug Fixes

* Job collection has default options ([1862faf](https://github.com/cozy/cozy-client/commit/1862faf))


### Features

* Remove unused code ([f4047cb](https://github.com/cozy/cozy-client/commit/f4047cb))
* Show state when warning for unfound document/collection/query ([ff7155c](https://github.com/cozy/cozy-client/commit/ff7155c))
* Throw error if a store already has been set on the client ([744be29](https://github.com/cozy/cozy-client/commit/744be29))


### BREAKING CHANGES

* If you need to use setStore twice, you need to pass
options { force: true }
* If using StoreProxy {read/write/touch}Query, you should
not since it is undocumented and untested





# [6.66.0](https://github.com/cozy/cozy-client/compare/v6.65.0...v6.66.0) (2019-10-04)


### Features

* Add method to waitFor the completion of a job ([e4759fd](https://github.com/cozy/cozy-client/commit/e4759fd))
* Add methods to launch/update a konnector ([2e83b5b](https://github.com/cozy/cozy-client/commit/2e83b5b))





# [6.65.0](https://github.com/cozy/cozy-client/compare/v6.64.7...v6.65.0) (2019-10-03)


### Bug Fixes

* Triple equal ([52edce0](https://github.com/cozy/cozy-client/commit/52edce0))


### Features

* Add updateAll and deleteAll ([e8aa1f1](https://github.com/cozy/cozy-client/commit/e8aa1f1))
* Refresh token throws if not in web context ([b06c19d](https://github.com/cozy/cozy-client/commit/b06c19d))





## [6.64.7](https://github.com/cozy/cozy-client/compare/v6.64.6...v6.64.7) (2019-09-30)

**Note:** Version bump only for package cozy-client





## [6.64.6](https://github.com/cozy/cozy-client/compare/v6.64.5...v6.64.6) (2019-09-17)

**Note:** Version bump only for package cozy-client





## [6.64.5](https://github.com/cozy/cozy-client/compare/v6.64.4...v6.64.5) (2019-09-13)

**Note:** Version bump only for package cozy-client





## [6.64.4](https://github.com/cozy/cozy-client/compare/v6.64.3...v6.64.4) (2019-09-13)

**Note:** Version bump only for package cozy-client





## [6.64.3](https://github.com/cozy/cozy-client/compare/v6.64.2...v6.64.3) (2019-09-13)

**Note:** Version bump only for package cozy-client





## [6.64.2](https://github.com/cozy/cozy-client/compare/v6.64.1...v6.64.2) (2019-09-13)


### Bug Fixes

* **deps:** update dependency url-search-params-polyfill to v7 ([1189cc5](https://github.com/cozy/cozy-client/commit/1189cc5))





## [6.64.1](https://github.com/cozy/cozy-client/compare/v6.64.0...v6.64.1) (2019-09-12)

**Note:** Version bump only for package cozy-client





# [6.64.0](https://github.com/cozy/cozy-client/compare/v6.63.0...v6.64.0) (2019-09-09)


### Features

* Add ready-made fetch policies ([fdfb6db](https://github.com/cozy/cozy-client/commit/fdfb6db))
* Fetch policy ([22380bb](https://github.com/cozy/cozy-client/commit/22380bb))





# [6.63.0](https://github.com/cozy/cozy-client/compare/v6.62.0...v6.63.0) (2019-09-09)


### Bug Fixes

* Correctly mock requestQuery to send back a response shaped object ([c3ef9f9](https://github.com/cozy/cozy-client/commit/c3ef9f9))
* Error reports the right fix ([46c4efd](https://github.com/cozy/cozy-client/commit/46c4efd))
* Observable query automatically subscribes/unsubscribe from store ([63eddb9](https://github.com/cozy/cozy-client/commit/63eddb9))


### Features

* Better name for watchQuery ([6e83c12](https://github.com/cozy/cozy-client/commit/6e83c12))
* Create children args only when query changes ([8224f70](https://github.com/cozy/cozy-client/commit/8224f70))





# [6.62.0](https://github.com/cozy/cozy-client/compare/v6.61.0...v6.62.0) (2019-09-05)


### Bug Fixes

* Add execution flag to scripts/deploy ([cf86dc4](https://github.com/cozy/cozy-client/commit/cf86dc4))


### Features

* Publish git release with lerna ([f95cfcb](https://github.com/cozy/cozy-client/commit/f95cfcb))
* Small improvements and refactor ([#518](https://github.com/cozy/cozy-client/issues/518)) ([d3a308c](https://github.com/cozy/cozy-client/commit/d3a308c))



## [6.43.1](https://github.com/cozy/cozy-client/compare/v6.43.0...v6.43.1) (2019-06-05)



# [6.43.0](https://github.com/cozy/cozy-client/compare/v6.42.0...v6.43.0) (2019-06-05)


### Features

* Add job creation + fetching ([77ffdf4](https://github.com/cozy/cozy-client/commit/77ffdf4))



# [6.42.0](https://github.com/cozy/cozy-client/compare/v6.41.1...v6.42.0) (2019-06-04)


### Features

* Add an unified way to get the access token ([4799688](https://github.com/cozy/cozy-client/commit/4799688))



## [6.41.1](https://github.com/cozy/cozy-client/compare/v6.41.0...v6.41.1) (2019-06-03)


### Bug Fixes

* **schema:** Map on names to show duplicate error ([606a84f](https://github.com/cozy/cozy-client/commit/606a84f))



# [6.41.0](https://github.com/cozy/cozy-client/compare/v6.40.1...v6.41.0) (2019-06-03)



## [6.40.1](https://github.com/cozy/cozy-client/compare/v6.40.0...v6.40.1) (2019-05-31)


### Features

* Add queries on id in dsl ([f625f3d](https://github.com/cozy/cozy-client/commit/f625f3d))



# [6.40.0](https://github.com/cozy/cozy-client/compare/v6.39.0...v6.40.0) (2019-05-31)



# [6.39.0](https://github.com/cozy/cozy-client/compare/v6.38.2...v6.39.0) (2019-05-31)


### Bug Fixes

* Use memory adapter ([14a6332](https://github.com/cozy/cozy-client/commit/14a6332))
* Use pouchdb browser ([635f71a](https://github.com/cozy/cozy-client/commit/635f71a))


### Features

* Add fetch polyfill in jest setup ([750216d](https://github.com/cozy/cozy-client/commit/750216d))
* Delete triggers ([198062b](https://github.com/cozy/cozy-client/commit/198062b))
* Implicitly create the schema if it does not exist ([3a834a4](https://github.com/cozy/cozy-client/commit/3a834a4))



## [6.38.2](https://github.com/cozy/cozy-client/compare/v6.38.1...v6.38.2) (2019-05-29)


### Bug Fixes

* **cozy-client:** Export cancelable util ([d262983](https://github.com/cozy/cozy-client/commit/d262983))



## [6.38.1](https://github.com/cozy/cozy-client/compare/v6.38.0...v6.38.1) (2019-05-29)


### Bug Fixes

* Use NODE_ENV to differenciate authentication methods ([25499f0](https://github.com/cozy/cozy-client/commit/25499f0))



# [6.38.0](https://github.com/cozy/cozy-client/compare/v6.37.1...v6.38.0) (2019-05-28)


### Bug Fixes

* Allow fromEnv instantiation from oauth client ([4f03be9](https://github.com/cozy/cozy-client/commit/4f03be9))


### Features

* **cozy-stack-client:** Add restore method on FileCollection ([cebca37](https://github.com/cozy/cozy-client/commit/cebca37))



## [6.37.1](https://github.com/cozy/cozy-client/compare/v6.37.0...v6.37.1) (2019-05-27)



# [6.37.0](https://github.com/cozy/cozy-client/compare/v6.36.0...v6.37.0) (2019-05-27)


### Features

* Add --verbose for babel for watch to show transpiled files ([56fb28a](https://github.com/cozy/cozy-client/commit/56fb28a))
* Fetch apps ([0aa92e4](https://github.com/cozy/cozy-client/commit/0aa92e4))
* Manifest sanitization ([0e75f3f](https://github.com/cozy/cozy-client/commit/0e75f3f))



# [6.36.0](https://github.com/cozy/cozy-client/compare/v6.35.0...v6.36.0) (2019-05-27)


### Features

* Standard method of instantiating CozyClient from env vars ([dc2cfab](https://github.com/cozy/cozy-client/commit/dc2cfab))



# [6.35.0](https://github.com/cozy/cozy-client/compare/v6.34.0...v6.35.0) (2019-05-23)


### Features

* Add cancelable util ([9f20d87](https://github.com/cozy/cozy-client/commit/9f20d87))



# [6.34.0](https://github.com/cozy/cozy-client/compare/v6.33.0...v6.34.0) (2019-05-22)


### Features

* Add Registry API ([73fd7f0](https://github.com/cozy/cozy-client/commit/73fd7f0))



# [6.33.0](https://github.com/cozy/cozy-client/compare/v6.32.0...v6.33.0) (2019-05-21)


### Features

* **cozy-stack-client:** Add updateFile method to FileCollection ([21006d1](https://github.com/cozy/cozy-client/commit/21006d1))



# [6.32.0](https://github.com/cozy/cozy-client/compare/v6.31.1...v6.32.0) (2019-05-20)


### Features

* Add display name to queryConnect and withClient ([fead480](https://github.com/cozy/cozy-client/commit/fead480))



## [6.31.1](https://github.com/cozy/cozy-client/compare/v6.31.0...v6.31.1) (2019-05-14)


### Bug Fixes

* Do not bind query.fetch if it does not exist ([18846e5](https://github.com/cozy/cozy-client/commit/18846e5))



# [6.31.0](https://github.com/cozy/cozy-client/compare/v6.30.0...v6.31.0) (2019-05-14)



# [6.30.0](https://github.com/cozy/cozy-client/compare/v6.29.0...v6.30.0) (2019-05-13)


### Bug Fixes

* Do not log warnings when we know what we are doing ([cad9243](https://github.com/cozy/cozy-client/commit/cad9243))


### Features

* Can insert task immediately into PouchLink loop ([7e99e0f](https://github.com/cozy/cozy-client/commit/7e99e0f))
* Sync immediately ([343f394](https://github.com/cozy/cozy-client/commit/343f394))



# [6.29.0](https://github.com/cozy/cozy-client/compare/v6.28.0...v6.29.0) (2019-05-10)


### Features

* Cozy-client will autologin if initialized with uri and token ([467a534](https://github.com/cozy/cozy-client/commit/467a534))



# [6.28.0](https://github.com/cozy/cozy-client/compare/v6.27.0...v6.28.0) (2019-05-10)


### Features

* Fetch method on ObservableQuery ([4c505b6](https://github.com/cozy/cozy-client/commit/4c505b6))



# [6.27.0](https://github.com/cozy/cozy-client/compare/v6.26.0...v6.27.0) (2019-05-06)


### Features

* Add beforeLogin event ([c574c6a](https://github.com/cozy/cozy-client/commit/c574c6a))



# [6.26.0](https://github.com/cozy/cozy-client/compare/v6.25.0...v6.26.0) (2019-05-02)


### Features

* Emit beforeLogout event before doing the logout logic ([75a68c6](https://github.com/cozy/cozy-client/commit/75a68c6))



# [6.25.0](https://github.com/cozy/cozy-client/compare/v6.24.2...v6.25.0) (2019-04-30)


### Features

* Allows to refresh app tokens ([8b55e2c](https://github.com/cozy/cozy-client/commit/8b55e2c))



## [6.24.2](https://github.com/cozy/cozy-client/compare/v6.24.1...v6.24.2) (2019-04-29)



## [6.24.1](https://github.com/cozy/cozy-client/compare/v6.24.0...v6.24.1) (2019-04-26)


### Bug Fixes

* Bad name for attribute ([4ce8968](https://github.com/cozy/cozy-client/commit/4ce8968))
* Defensive condition ([b23e924](https://github.com/cozy/cozy-client/commit/b23e924))
* Handle isRevoked in login() ([00668fb](https://github.com/cozy/cozy-client/commit/00668fb))
* Set Authorization header ([976f47d](https://github.com/cozy/cozy-client/commit/976f47d))



# [6.24.0](https://github.com/cozy/cozy-client/compare/v6.23.3...v6.24.0) (2019-04-25)



## 6.23.3 (2019-04-25)





# [6.61.0](https://github.com/cozy/cozy-client/compare/v6.60.0...v6.61.0) (2019-09-03)


### Features

* Change plugin interface ([#511](https://github.com/cozy/cozy-client/issues/511)) ([04f4949](https://github.com/cozy/cozy-client/commit/04f4949))





# [6.60.0](https://github.com/cozy/cozy-client/compare/v6.59.0...v6.60.0) (2019-09-02)


### Features

* Add registerPlugin method ([#509](https://github.com/cozy/cozy-client/issues/509)) ([1341329](https://github.com/cozy/cozy-client/commit/1341329))





# [6.59.0](https://github.com/cozy/cozy-client/compare/v6.58.2...v6.59.0) (2019-09-02)


### Features

* Instantiate from old client ([#508](https://github.com/cozy/cozy-client/issues/508)) ([a63a5c1](https://github.com/cozy/cozy-client/commit/a63a5c1))





## [6.58.2](https://github.com/cozy/cozy-client/compare/v6.58.1...v6.58.2) (2019-08-29)


### Bug Fixes

* Typo ([92d6cf5](https://github.com/cozy/cozy-client/commit/92d6cf5))





## [6.58.1](https://github.com/cozy/cozy-client/compare/v6.58.0...v6.58.1) (2019-08-21)

**Note:** Version bump only for package cozy-client





# [6.58.0](https://github.com/cozy/cozy-client/compare/v6.57.0...v6.58.0) (2019-08-19)


### Features

* **cozy-client:** Expose main and browsers entry points ([22f96ed](https://github.com/cozy/cozy-client/commit/22f96ed))





# [6.57.0](https://github.com/cozy/cozy-client/compare/v6.56.1...v6.57.0) (2019-08-07)


### Features

* Implement referenced-by add/remove ([04aee66](https://github.com/cozy/cozy-client/commit/04aee66))





## [6.56.1](https://github.com/cozy/cozy-client/compare/v6.56.0...v6.56.1) (2019-08-07)


### Bug Fixes

* Hydrate documents also for in-flight queries ([d4623ad](https://github.com/cozy/cozy-client/commit/d4623ad))





# [6.56.0](https://github.com/cozy/cozy-client/compare/v6.55.1...v6.56.0) (2019-08-02)


### Features

* **cozy-stack-client:** We can find on TriggerCollection ([5cef03b](https://github.com/cozy/cozy-client/commit/5cef03b))





## [6.55.1](https://github.com/cozy/cozy-client/compare/v6.55.0...v6.55.1) (2019-07-30)

**Note:** Version bump only for package cozy-client





# [6.55.0](https://github.com/cozy/cozy-client/compare/v6.54.0...v6.55.0) (2019-07-23)


### Features

* **stackClient:** Implement JobCollection.get() ✨ ([3615b90](https://github.com/cozy/cozy-client/commit/3615b90))





# [6.54.0](https://github.com/cozy/cozy-client/compare/v6.53.0...v6.54.0) (2019-07-23)


### Features

* **cozy-client:** Add queryAll method ([932cdc1](https://github.com/cozy/cozy-client/commit/932cdc1))





# [6.53.0](https://github.com/cozy/cozy-client/compare/v6.52.0...v6.53.0) (2019-07-16)


### Features

* Use a lighter mime library ([#373](https://github.com/cozy/cozy-client/issues/373)) ([5a97df0](https://github.com/cozy/cozy-client/commit/5a97df0))





# [6.52.0](https://github.com/cozy/cozy-client/compare/v6.51.0...v6.52.0) (2019-07-16)


### Features

* **cozy-stack-client:** Updatefile can create metadata ([bd768f7](https://github.com/cozy/cozy-client/commit/bd768f7))





# [6.51.0](https://github.com/cozy/cozy-client/compare/v6.50.0...v6.51.0) (2019-07-16)


### Features

* IsChild ([87e92e2](https://github.com/cozy/cozy-client/commit/87e92e2))





# [6.50.0](https://github.com/cozy/cozy-client/compare/v6.49.3...v6.50.0) (2019-07-16)


### Features

* **stack:** Add deleteFilePermanently method ([e422b27](https://github.com/cozy/cozy-client/commit/e422b27))





## [6.49.3](https://github.com/cozy/cozy-client/compare/v6.49.2...v6.49.3) (2019-07-13)


### Bug Fixes

* **deps:** update dependency lodash to v4.17.14 ([dc48ea4](https://github.com/cozy/cozy-client/commit/dc48ea4))





## [6.49.2](https://github.com/cozy/cozy-client/compare/v6.49.1...v6.49.2) (2019-07-12)


### Bug Fixes

* **deps:** update dependency lodash to v4.17.13 [security] ([3af67f3](https://github.com/cozy/cozy-client/commit/3af67f3))





## [6.49.1](https://github.com/cozy/cozy-client/compare/v6.49.0...v6.49.1) (2019-07-12)


### Bug Fixes

* **deps:** update dependency cozy-device-helper to v1.7.3 ([9e1328f](https://github.com/cozy/cozy-client/commit/9e1328f))





# [6.49.0](https://github.com/cozy/cozy-client/compare/v6.48.0...v6.49.0) (2019-07-08)


### Bug Fixes

* Allow double-array in query param ([78e8d73](https://github.com/cozy/cozy-client/commit/78e8d73))


### Features

* Add cursor-based pagination ([a075999](https://github.com/cozy/cozy-client/commit/a075999))
* Add relationship pagination example ([3f26b98](https://github.com/cozy/cozy-client/commit/3f26b98))
* Force use of cursor for view pagination ([5ad9387](https://github.com/cozy/cozy-client/commit/5ad9387))
* Use recursivity for querystrings ([daaa79f](https://github.com/cozy/cozy-client/commit/daaa79f))





# [6.48.0](https://github.com/cozy/cozy-client/compare/v6.47.1...v6.48.0) (2019-06-27)


### Features

* **cozy-client:** Add set and unset methods on HasOne ([0d29b8a](https://github.com/cozy/cozy-client/commit/0d29b8a))





## [6.47.1](https://github.com/cozy/cozy-client/compare/v6.47.0...v6.47.1) (2019-06-26)


### Bug Fixes

* **cozy-client:** Association HasOne don't fail if there is no data ([262d617](https://github.com/cozy/cozy-client/commit/262d617))





# [6.47.0](https://github.com/cozy/cozy-client/compare/v6.46.0...v6.47.0) (2019-06-26)


### Features

* **stack:** Expose JobCollection via client.collection('io.cozy.jobs') ([57e5c91](https://github.com/cozy/cozy-client/commit/57e5c91))





# [6.46.0](https://github.com/cozy/cozy-client/compare/v6.45.2...v6.46.0) (2019-06-21)


### Features

* **stack:** Implment TriggerCollection.get method ✨ ([f8b170a](https://github.com/cozy/cozy-client/commit/f8b170a))





## [6.45.2](https://github.com/cozy/cozy-client/compare/v6.45.1...v6.45.2) (2019-06-20)


### Bug Fixes

* :bug: Put proptypes on wrapped component instead of wrapper ([c52bc54](https://github.com/cozy/cozy-client/commit/c52bc54))





## [6.45.1](https://github.com/cozy/cozy-client/compare/v6.45.0...v6.45.1) (2019-06-19)


### Bug Fixes

* Broken link ([986d184](https://github.com/cozy/cozy-client/commit/986d184))
* **withMutations:** Expose all withMutations provided props types ([ceeb9ee](https://github.com/cozy/cozy-client/commit/ceeb9ee))





# [6.45.0](https://github.com/cozy/cozy-client/compare/v6.44.0...v6.45.0) (2019-06-14)


### Bug Fixes

* **cozy-client:** Login links after the uri is set ([7ea68ea](https://github.com/cozy/cozy-client/commit/7ea68ea))


### Features

* **cozy-pouch-link:** Prevent creating dbs without prefix ([5b5a15b](https://github.com/cozy/cozy-client/commit/5b5a15b))





# [6.44.0](https://github.com/cozy/cozy-client/compare/v6.43.1...v6.44.0) (2019-06-14)


### Bug Fixes

* Add execution flag to scripts/deploy ([cf86dc4](https://github.com/cozy/cozy-client/commit/cf86dc4))


### Features

* Add createFileMetadata ([c5a282c](https://github.com/cozy/cozy-client/commit/c5a282c))
* Publish git release with lerna ([f95cfcb](https://github.com/cozy/cozy-client/commit/f95cfcb))





      <a name="6.43.1"></a>
## [6.43.1](https://github.com/cozy/cozy-client/compare/v6.43.0...v6.43.1) (2019-06-05)




**Note:** Version bump only for package undefined

      <a name="6.43.0"></a>
# [6.43.0](https://github.com/cozy/cozy-client/compare/v6.42.0...v6.43.0) (2019-06-05)


### Features

* Add job creation + fetching ([77ffdf4](https://github.com/cozy/cozy-client/commit/77ffdf4))




   <a name="6.42.0"></a>
# [6.42.0](https://github.com/cozy/cozy-client/compare/v6.41.1...v6.42.0) (2019-06-04)


### Features

* Add an unified way to get the access token ([4799688](https://github.com/cozy/cozy-client/commit/4799688))




 <a name="6.41.1"></a>
## [6.41.1](https://github.com/cozy/cozy-client/compare/v6.41.0...v6.41.1) (2019-06-03)


### Bug Fixes

* **schema:** Map on names to show duplicate error ([606a84f](https://github.com/cozy/cozy-client/commit/606a84f))




<a name="6.41.0"></a>
# [6.41.0](https://github.com/cozy/cozy-client/compare/v6.40.1...v6.41.0) (2019-06-03)


### Features

* Add queries on id in dsl ([f625f3d](https://github.com/cozy/cozy-client/commit/f625f3d))




<a name="6.40.1"></a>
## [6.40.1](https://github.com/cozy/cozy-client/compare/v6.40.0...v6.40.1) (2019-05-31)




**Note:** Version bump only for package undefined

<a name="6.40.0"></a>
# [6.40.0](https://github.com/cozy/cozy-client/compare/v6.39.0...v6.40.0) (2019-05-31)


### Bug Fixes

* Use memory adapter ([14a6332](https://github.com/cozy/cozy-client/commit/14a6332))
* Use pouchdb browser ([635f71a](https://github.com/cozy/cozy-client/commit/635f71a))


### Features

* Add fetch polyfill in jest setup ([750216d](https://github.com/cozy/cozy-client/commit/750216d))
* Implicitly create the schema if it does not exist ([3a834a4](https://github.com/cozy/cozy-client/commit/3a834a4))




<a name="6.39.0"></a>
# [6.39.0](https://github.com/cozy/cozy-client/compare/v6.38.2...v6.39.0) (2019-05-31)


### Features

* Delete triggers ([198062b](https://github.com/cozy/cozy-client/commit/198062b))




<a name="6.38.2"></a>
## [6.38.2](https://github.com/cozy/cozy-client/compare/v6.38.1...v6.38.2) (2019-05-29)


### Bug Fixes

* **cozy-client:** Export cancelable util ([d262983](https://github.com/cozy/cozy-client/commit/d262983))




<a name="6.38.1"></a>
## [6.38.1](https://github.com/cozy/cozy-client/compare/v6.38.0...v6.38.1) (2019-05-29)


### Bug Fixes

* Allow fromEnv instantiation from oauth client ([4f03be9](https://github.com/cozy/cozy-client/commit/4f03be9))
* Use NODE_ENV to differenciate authentication methods ([25499f0](https://github.com/cozy/cozy-client/commit/25499f0))




<a name="6.38.0"></a>
# [6.38.0](https://github.com/cozy/cozy-client/compare/v6.37.1...v6.38.0) (2019-05-28)


### Features

* **cozy-stack-client:** Add restore method on FileCollection ([cebca37](https://github.com/cozy/cozy-client/commit/cebca37))




<a name="6.37.1"></a>
## [6.37.1](https://github.com/cozy/cozy-client/compare/v6.37.0...v6.37.1) (2019-05-27)




**Note:** Version bump only for package undefined

<a name="6.37.0"></a>
# [6.37.0](https://github.com/cozy/cozy-client/compare/v6.36.0...v6.37.0) (2019-05-27)


### Features

* Add --verbose for babel for watch to show transpiled files ([56fb28a](https://github.com/cozy/cozy-client/commit/56fb28a))
* Fetch apps ([0aa92e4](https://github.com/cozy/cozy-client/commit/0aa92e4))
* Manifest sanitization ([0e75f3f](https://github.com/cozy/cozy-client/commit/0e75f3f))




<a name="6.36.0"></a>
# [6.36.0](https://github.com/cozy/cozy-client/compare/v6.35.0...v6.36.0) (2019-05-27)


### Features

* Standard method of instantiating CozyClient from env vars ([dc2cfab](https://github.com/cozy/cozy-client/commit/dc2cfab))




<a name="6.35.0"></a>
# [6.35.0](https://github.com/cozy/cozy-client/compare/v6.34.0...v6.35.0) (2019-05-23)


### Features

* Add cancelable util ([9f20d87](https://github.com/cozy/cozy-client/commit/9f20d87))




<a name="6.34.0"></a>
# [6.34.0](https://github.com/cozy/cozy-client/compare/v6.33.0...v6.34.0) (2019-05-22)


### Features

* Add Registry API ([73fd7f0](https://github.com/cozy/cozy-client/commit/73fd7f0))




<a name="6.33.0"></a>
# [6.33.0](https://github.com/cozy/cozy-client/compare/v6.32.0...v6.33.0) (2019-05-21)


### Features

* **cozy-stack-client:** Add updateFile method to FileCollection ([21006d1](https://github.com/cozy/cozy-client/commit/21006d1))




<a name="6.32.0"></a>
# [6.32.0](https://github.com/cozy/cozy-client/compare/v6.31.1...v6.32.0) (2019-05-20)


### Features

* Add display name to queryConnect and withClient ([fead480](https://github.com/cozy/cozy-client/commit/fead480))




<a name="6.31.1"></a>
## [6.31.1](https://github.com/cozy/cozy-client/compare/v6.31.0...v6.31.1) (2019-05-14)


### Bug Fixes

* Do not bind query.fetch if it does not exist ([18846e5](https://github.com/cozy/cozy-client/commit/18846e5))




<a name="6.31.0"></a>
# [6.31.0](https://github.com/cozy/cozy-client/compare/v6.30.0...v6.31.0) (2019-05-14)


### Bug Fixes

* Do not log warnings when we know what we are doing ([cad9243](https://github.com/cozy/cozy-client/commit/cad9243))


### Features

* Can insert task immediately into PouchLink loop ([7e99e0f](https://github.com/cozy/cozy-client/commit/7e99e0f))




<a name="6.30.0"></a>
# [6.30.0](https://github.com/cozy/cozy-client/compare/v6.29.0...v6.30.0) (2019-05-13)


### Features

* Sync immediately ([343f394](https://github.com/cozy/cozy-client/commit/343f394))




<a name="6.29.0"></a>
# [6.29.0](https://github.com/cozy/cozy-client/compare/v6.28.0...v6.29.0) (2019-05-10)


### Features

* Cozy-client will autologin if initialized with uri and token ([467a534](https://github.com/cozy/cozy-client/commit/467a534))




<a name="6.28.0"></a>
# [6.28.0](https://github.com/cozy/cozy-client/compare/v6.27.0...v6.28.0) (2019-05-10)


### Features

* Fetch method on ObservableQuery ([4c505b6](https://github.com/cozy/cozy-client/commit/4c505b6))




<a name="6.27.0"></a>
# [6.27.0](https://github.com/cozy/cozy-client/compare/v6.26.0...v6.27.0) (2019-05-06)


### Features

* Add beforeLogin event ([c574c6a](https://github.com/cozy/cozy-client/commit/c574c6a))




<a name="6.26.0"></a>
# [6.26.0](https://github.com/cozy/cozy-client/compare/v6.25.0...v6.26.0) (2019-05-02)


### Features

* Emit beforeLogout event before doing the logout logic ([75a68c6](https://github.com/cozy/cozy-client/commit/75a68c6))




<a name="6.25.0"></a>
# [6.25.0](https://github.com/cozy/cozy-client/compare/v6.24.2...v6.25.0) (2019-04-30)


### Features

* Allows to refresh app tokens ([8b55e2c](https://github.com/cozy/cozy-client/commit/8b55e2c))




<a name="6.24.2"></a>
## [6.24.2](https://github.com/cozy/cozy-client/compare/v6.24.1...v6.24.2) (2019-04-29)


### Bug Fixes

* Bad name for attribute ([4ce8968](https://github.com/cozy/cozy-client/commit/4ce8968))
* Defensive condition ([b23e924](https://github.com/cozy/cozy-client/commit/b23e924))
* Handle isRevoked in login() ([00668fb](https://github.com/cozy/cozy-client/commit/00668fb))
* Set Authorization header ([976f47d](https://github.com/cozy/cozy-client/commit/976f47d))




<a name="6.24.1"></a>
## [6.24.1](https://github.com/cozy/cozy-client/compare/v6.24.0...v6.24.1) (2019-04-26)




**Note:** Version bump only for package undefined

<a name="6.24.0"></a>
# [6.24.0](https://github.com/cozy/cozy-client/compare/v6.23.3...v6.24.0) (2019-04-25)


### Features

* Ensure stackClient in options has handlers ([27983ae](https://github.com/cozy/cozy-client/commit/27983ae))
* Stack client tells CozyClient of a revocation ([f7c9e95](https://github.com/cozy/cozy-client/commit/f7c9e95))




<a name="6.23.3"></a>
## [6.23.3](https://github.com/cozy/cozy-client/compare/v6.23.2...v6.23.3) (2019-04-25)


### Bug Fixes

* Find method was used for KonnectorCollection ([6a46477](https://github.com/cozy/cozy-client/commit/6a46477))




<a name="6.23.2"></a>
## [6.23.2](https://github.com/cozy/cozy-client/compare/v6.23.1...v6.23.2) (2019-04-25)


### Bug Fixes

* Await promises otherwise test errors are unhandled rejections ([a291040](https://github.com/cozy/cozy-client/commit/a291040))
* Test was failing ([73856c4](https://github.com/cozy/cozy-client/commit/73856c4))




<a name="6.23.1"></a>
## [6.23.1](https://github.com/cozy/cozy-client/compare/v6.23.0...v6.23.1) (2019-04-25)


### Bug Fixes

* **deps:** update dependency qs to v6.7.0 ([cbb1661](https://github.com/cozy/cozy-client/commit/cbb1661))




<a name="6.23.0"></a>
# [6.23.0](https://github.com/cozy/cozy-client/compare/v6.22.0...v6.23.0) (2019-04-25)


### Features

* Allow to use stack client when not completely initialized ([0c16046](https://github.com/cozy/cozy-client/commit/0c16046))
* Login can set uri and token ([9a4b6b4](https://github.com/cozy/cozy-client/commit/9a4b6b4))
* Reduce timeout for prompt access_code ([84486bf](https://github.com/cozy/cozy-client/commit/84486bf))




<a name="6.22.0"></a>
# [6.22.0](https://github.com/cozy/cozy-client/compare/v6.21.0...v6.22.0) (2019-04-24)


### Features

* Add event when token is refreshed ([7e92346](https://github.com/cozy/cozy-client/commit/7e92346))
* Client emits events for log{in,out} ([b12d20f](https://github.com/cozy/cozy-client/commit/b12d20f))




<a name="6.21.0"></a>
# [6.21.0](https://github.com/cozy/cozy-client/compare/v6.20.0...v6.21.0) (2019-04-03)


### Features

* Remove warning ([e0734c2](https://github.com/cozy/cozy-client/commit/e0734c2))




<a name="6.20.0"></a>
# [6.20.0](https://github.com/cozy/cozy-client/compare/v6.19.0...v6.20.0) (2019-03-27)


### Features

* **client:** Better AppColleciton and KonnectorCollection 📝 ([985d762](https://github.com/cozy/cozy-client/commit/985d762)), closes [#406](https://github.com/cozy/cozy-client/issues/406)




<a name="6.19.0"></a>
# [6.19.0](https://github.com/cozy/cozy-client/compare/v6.18.1...v6.19.0) (2019-03-26)


### Bug Fixes

* **client:** Revert recent changes in fetchRelationships 🚑 ([63e4e46](https://github.com/cozy/cozy-client/commit/63e4e46))


### Features

* **client:** Change HasManyTriggers implementation ✨ ([9e7c3b2](https://github.com/cozy/cozy-client/commit/9e7c3b2))
* **client:** Optimize queries by deduplicating ✨ ([1a856e1](https://github.com/cozy/cozy-client/commit/1a856e1))




<a name="6.18.1"></a>
## [6.18.1](https://github.com/cozy/cozy-client/compare/v6.18.0...v6.18.1) (2019-03-25)


### Bug Fixes

* **stack:** Make KonnectorCollection inherit from DocumentCollection 🚑i ([1a56bad](https://github.com/cozy/cozy-client/commit/1a56bad))




<a name="6.18.0"></a>
# [6.18.0](https://github.com/cozy/cozy-client/compare/v6.17.0...v6.18.0) (2019-03-22)


### Bug Fixes

* **client:** Make TriggerCollection.all() return all 📝 ([ee904c4](https://github.com/cozy/cozy-client/commit/ee904c4))
* **client:** Normalize trigger as expected 📝 ([2561588](https://github.com/cozy/cozy-client/commit/2561588))


### Features

* **client:** Add HasManyTriggers association ✨ ([0f39c37](https://github.com/cozy/cozy-client/commit/0f39c37))
* **client:** Implement find() method in TriggerCollection ✨ ([8787a79](https://github.com/cozy/cozy-client/commit/8787a79))




<a name="6.17.0"></a>
# [6.17.0](https://github.com/cozy/cozy-client/compare/v6.16.0...v6.17.0) (2019-03-21)


### Bug Fixes

* **stack:** Make KonnectorCollection export KONNECTORS_DOCTYPE 📝 ([a5eb7e8](https://github.com/cozy/cozy-client/commit/a5eb7e8))
* **stack:** Normalize Konnector after fetch 🚑 ([3e938a9](https://github.com/cozy/cozy-client/commit/3e938a9))


### Features

* **stack:** Serve KonnectorCollection and ensure legacy ✨ ([ba2821b](https://github.com/cozy/cozy-client/commit/ba2821b))




<a name="6.16.0"></a>
# [6.16.0](https://github.com/cozy/cozy-client/compare/v6.15.0...v6.16.0) (2019-03-20)


### Features

* **client:** Add Schema.add() method ✨ ([8c9e592](https://github.com/cozy/cozy-client/commit/8c9e592))
* **stack:** Make Schema.add() throw error if name or doctype exist ⚠️ ([80cf7a1](https://github.com/cozy/cozy-client/commit/80cf7a1))




<a name="6.15.0"></a>
# [6.15.0](https://github.com/cozy/cozy-client/compare/v6.14.0...v6.15.0) (2019-03-19)


### Bug Fixes

* **client:** Association query may return same QueryDefinition 📝 ([abee793](https://github.com/cozy/cozy-client/commit/abee793))
* **client:** Make association query responses unique in included 📝 ([014d056](https://github.com/cozy/cozy-client/commit/014d056))
* **client:** Make fetchRelationships handle document list 📝 ([bbf8094](https://github.com/cozy/cozy-client/commit/bbf8094))


### Features

* **client:** Allow async query method in Assocation ✨ ([529e7f0](https://github.com/cozy/cozy-client/commit/529e7f0))




<a name="6.14.0"></a>
# [6.14.0](https://github.com/cozy/cozy-client/compare/v6.13.0...v6.14.0) (2019-03-19)


### Features

* Log via minilog ([661b015](https://github.com/cozy/cozy-client/commit/661b015))




<a name="6.13.0"></a>
# [6.13.0](https://github.com/cozy/cozy-client/compare/v6.12.0...v6.13.0) (2019-03-19)


### Features

* **client:** Add getCollectionFromState() ✨ ([50ab811](https://github.com/cozy/cozy-client/commit/50ab811))




<a name="6.12.0"></a>
# [6.12.0](https://github.com/cozy/cozy-client/compare/v6.11.1...v6.12.0) (2019-03-18)


### Features

* **stack:** Add KonnectorCollection ✨ ([addc2d8](https://github.com/cozy/cozy-client/commit/addc2d8))
* **stack:** Add konnectors object under stackClient ✨ ([b6d698b](https://github.com/cozy/cozy-client/commit/b6d698b))




<a name="6.11.1"></a>
## [6.11.1](https://github.com/cozy/cozy-client/compare/v6.11.0...v6.11.1) (2019-03-14)




**Note:** Version bump only for package undefined

<a name="6.11.0"></a>
# [6.11.0](https://github.com/cozy/cozy-client/compare/v6.10.0...v6.11.0) (2019-03-14)


### Features

* **cozy-stack-client:** Add all function on TriggerCollection ([7b8e169](https://github.com/cozy/cozy-client/commit/7b8e169))




<a name="6.10.0"></a>
# [6.10.0](https://github.com/cozy/cozy-client/compare/v6.9.0...v6.10.0) (2019-03-14)


### Features

* :sparkles: Handle konnectors with AppCollection ([6c35e00](https://github.com/cozy/cozy-client/commit/6c35e00))




<a name="6.9.0"></a>
# [6.9.0](https://github.com/cozy/cozy-client/compare/v6.8.1...v6.9.0) (2019-03-08)


### Features

* Add metadataVersion automatically ([e8b03cd](https://github.com/cozy/cozy-client/commit/e8b03cd))




<a name="6.8.1"></a>
## [6.8.1](https://github.com/cozy/cozy-client/compare/v6.8.0...v6.8.1) (2019-03-08)




**Note:** Version bump only for package undefined

<a name="6.8.0"></a>
# [6.8.0](https://github.com/cozy/cozy-client/compare/v6.7.0...v6.8.0) (2019-03-08)


### Features

* Don't use client.schema to add/update cozyMetadata, new format for updatedByApps ([bf6be9b](https://github.com/cozy/cozy-client/commit/bf6be9b))




<a name="6.7.0"></a>
# [6.7.0](https://github.com/cozy/cozy-client/compare/v6.6.0...v6.7.0) (2019-03-06)


### Bug Fixes

* Copy headers since they can be mutated ([b5ee211](https://github.com/cozy/cozy-client/commit/b5ee211))


### Features

* **Stack:** Add getAuthorizationHeader, deprecate getCredentials ([3c9f82e](https://github.com/cozy/cozy-client/commit/3c9f82e))
* **stackClient:** Send cookies even without Authorization header ([b7c8983](https://github.com/cozy/cozy-client/commit/b7c8983))
* Add setToken, deprecate setCredentials ([2578a22](https://github.com/cozy/cozy-client/commit/2578a22))
* Pass custom Authorization through headers.Authorization ([e4c5acb](https://github.com/cozy/cozy-client/commit/e4c5acb))
* Remove test testing the implementation ([b321f08](https://github.com/cozy/cozy-client/commit/b321f08))




<a name="6.6.0"></a>
# [6.6.0](https://github.com/cozy/cozy-client/compare/v6.5.1...v6.6.0) (2019-03-06)


### Features

* Change to POST request for doc_ids parameter ([60528a1](https://github.com/cozy/cozy-client/commit/60528a1))
* Update changes route to match all couch parameters ([922bfe1](https://github.com/cozy/cozy-client/commit/922bfe1))




<a name="6.5.1"></a>
## [6.5.1](https://github.com/cozy/cozy-client/compare/v6.5.0...v6.5.1) (2019-03-06)




**Note:** Version bump only for package undefined

<a name="6.5.0"></a>
# [6.5.0](https://github.com/cozy/cozy-client/compare/v6.4.2...v6.5.0) (2019-03-01)


### Features

* **OAuthClient:** Add resetClient ([aa18361](https://github.com/cozy/cozy-client/commit/aa18361))




<a name="6.4.2"></a>
## [6.4.2](https://github.com/cozy/cozy-client/compare/v6.4.1...v6.4.2) (2019-02-27)




**Note:** Version bump only for package undefined

<a name="6.4.1"></a>
## [6.4.1](https://github.com/cozy/cozy-client/compare/v6.4.0...v6.4.1) (2019-02-21)


### Bug Fixes

* Support $gt null in query selectors ([516a9f5](https://github.com/cozy/cozy-client/commit/516a9f5))




<a name="6.4.0"></a>
# [6.4.0](https://github.com/cozy/cozy-client/compare/v6.3.3...v6.4.0) (2019-02-21)


### Features

* Automatic cozy metadata ([f12574b](https://github.com/cozy/cozy-client/commit/f12574b))




<a name="6.3.3"></a>
## [6.3.3](https://github.com/cozy/cozy-client/compare/v6.3.2...v6.3.3) (2019-02-20)


### Bug Fixes

* Registry and app routes have different resp fmts ([5e35615](https://github.com/cozy/cozy-client/commit/5e35615))




<a name="6.3.2"></a>
## [6.3.2](https://github.com/cozy/cozy-client/compare/v6.3.1...v6.3.2) (2019-02-20)




**Note:** Version bump only for package undefined

<a name="6.3.1"></a>
## [6.3.1](https://github.com/cozy/cozy-client/compare/v6.3.0...v6.3.1) (2019-02-19)


### Bug Fixes

* Copy options not to modify passed args ([883b010](https://github.com/cozy/cozy-client/commit/883b010))
* Options for fetch were unnecessary and buggy ([2bdcca9](https://github.com/cozy/cozy-client/commit/2bdcca9))




<a name="6.3.0"></a>
# [6.3.0](https://github.com/cozy/cozy-client/compare/v6.2.0...v6.3.0) (2019-02-18)


### Features

* Get icon from stack or registry for apps and konnectors ([c37fbe1](https://github.com/cozy/cozy-client/commit/c37fbe1))




<a name="6.2.0"></a>
# [6.2.0](https://github.com/cozy/cozy-client/compare/v6.1.0...v6.2.0) (2019-02-14)


### Features

* Allow multiple mutations in withMutations() ✨ ([0fc07e4](https://github.com/cozy/cozy-client/commit/0fc07e4))




<a name="6.1.0"></a>
# [6.1.0](https://github.com/cozy/cozy-client/compare/v6.0.0...v6.1.0) (2019-02-14)


### Bug Fixes

* **harvest:** Tests ☔️ ([739449b](https://github.com/cozy/cozy-client/commit/739449b))


### Features

* **stack-client:** Base for TriggersCollection ✨ ([d4be9c2](https://github.com/cozy/cozy-client/commit/d4be9c2))




<a name="6.0.0"></a>
# [6.0.0](https://github.com/cozy/cozy-client/compare/v5.7.7...v6.0.0) (2019-02-05)


### Features

* Auto-save addById / removeById ([83e3adf](https://github.com/cozy/cozy-client/commit/83e3adf))


### BREAKING CHANGES

* Removed deprecated Associations API




<a name="5.7.7"></a>
## [5.7.7](https://github.com/cozy/cozy-client/compare/v5.7.6...v5.7.7) (2019-02-05)


### Bug Fixes

* **client:** Use properId in all store slices ([56537e7](https://github.com/cozy/cozy-client/commit/56537e7))




<a name="5.7.6"></a>
## [5.7.6](https://github.com/cozy/cozy-client/compare/v5.7.5...v5.7.6) (2019-01-30)


### Bug Fixes

* Add dehydrate method on HasOneInPlace ([d53ab4c](https://github.com/cozy/cozy-client/commit/d53ab4c))
* Return null when getDocumentFromState errors ([51da9f5](https://github.com/cozy/cozy-client/commit/51da9f5))
* Throw if a relation is not dehydratable ([e24d187](https://github.com/cozy/cozy-client/commit/e24d187))




<a name="5.7.5"></a>
## [5.7.5](https://github.com/cozy/cozy-client/compare/v5.7.4...v5.7.5) (2019-01-30)


### Bug Fixes

* **docs:** Broken link to DocumentCollection ([b8a7d81](https://github.com/cozy/cozy-client/commit/b8a7d81))




<a name="5.7.4"></a>
## [5.7.4](https://github.com/cozy/cozy-client/compare/v5.7.3...v5.7.4) (2019-01-29)


### Bug Fixes

* Hydrating null documents failed ([c66c3c9](https://github.com/cozy/cozy-client/commit/c66c3c9))




<a name="5.7.3"></a>
## [5.7.3](https://github.com/cozy/cozy-client/compare/v5.7.2...v5.7.3) (2019-01-28)


### Bug Fixes

* Combine relationships when attaching them to responses ([5d862c3](https://github.com/cozy/cozy-client/commit/5d862c3))




<a name="5.7.2"></a>
## [5.7.2](https://github.com/cozy/cozy-client/compare/v5.7.1...v5.7.2) (2019-01-28)


### Bug Fixes

* **client:** Handle undefined relationships ([d1ffcbe](https://github.com/cozy/cozy-client/commit/d1ffcbe))




<a name="5.7.1"></a>
## [5.7.1](https://github.com/cozy/cozy-client/compare/v5.7.0...v5.7.1) (2019-01-23)


### Bug Fixes

* Avoid deleting relationships in stored documents ([372fccf](https://github.com/cozy/cozy-client/commit/372fccf))
* Broken link ([89e97a8](https://github.com/cozy/cozy-client/commit/89e97a8))
* Smarter detection of relationship attachments ([bde18dc](https://github.com/cozy/cozy-client/commit/bde18dc))




<a name="5.7.0"></a>
# [5.7.0](https://github.com/cozy/cozy-client/compare/v5.6.6...v5.7.0) (2019-01-23)


### Features

* **StackLink:** Use find instead of all if a sort option is given ([d7d7b8e](https://github.com/cozy/cozy-client/commit/d7d7b8e))




<a name="5.6.6"></a>
## [5.6.6](https://github.com/cozy/cozy-client/compare/v5.6.5...v5.6.6) (2019-01-22)




**Note:** Version bump only for package undefined

<a name="5.6.5"></a>
## [5.6.5](https://github.com/cozy/cozy-client/compare/v5.6.4...v5.6.5) (2019-01-22)


### Bug Fixes

* Update relationship meta count ([978bd8b](https://github.com/cozy/cozy-client/commit/978bd8b))




<a name="5.6.4"></a>
## [5.6.4](https://github.com/cozy/cozy-client/compare/v5.6.3...v5.6.4) (2019-01-18)


### Bug Fixes

* Docs path ([7dc79cd](https://github.com/cozy/cozy-client/commit/7dc79cd))
* Example type ([f2f34e3](https://github.com/cozy/cozy-client/commit/f2f34e3))




<a name="5.6.3"></a>
## [5.6.3](https://github.com/cozy/cozy-client/compare/v5.6.2...v5.6.3) (2019-01-17)


### Bug Fixes

* Example type ([6a4e753](https://github.com/cozy/cozy-client/commit/6a4e753))
* Example type ([96af3da](https://github.com/cozy/cozy-client/commit/96af3da))
* Example type ([bac4416](https://github.com/cozy/cozy-client/commit/bac4416))
* Example type ([9ed5aec](https://github.com/cozy/cozy-client/commit/9ed5aec))




<a name="5.6.2"></a>
## [5.6.2](https://github.com/cozy/cozy-client/compare/v5.6.1...v5.6.2) (2019-01-17)


### Bug Fixes

* Clean syncedDoctypes on property and localstorage ([25282dd](https://github.com/cozy/cozy-client/commit/25282dd))




<a name="5.6.1"></a>
## [5.6.1](https://github.com/cozy/cozy-client/compare/v5.6.0...v5.6.1) (2019-01-17)


### Features

* Split API docs into files ([0c4a9a8](https://github.com/cozy/cozy-client/commit/0c4a9a8))




<a name="5.6.0"></a>
# [5.6.0](https://github.com/cozy/cozy-client/compare/v5.5.0...v5.6.0) (2019-01-17)


### Features

* Dehydrate more relationships ([f20b7f9](https://github.com/cozy/cozy-client/commit/f20b7f9))
* New HasMany relations API ([7b11927](https://github.com/cozy/cozy-client/commit/7b11927))




<a name="5.5.0"></a>
# [5.5.0](https://github.com/cozy/cozy-client/compare/v5.4.6...v5.5.0) (2019-01-15)


### Features

* Add urls helpers ([e9de4dc](https://github.com/cozy/cozy-client/commit/e9de4dc))




<a name="5.4.6"></a>
## [5.4.6](https://github.com/cozy/cozy-client/compare/v5.4.5...v5.4.6) (2019-01-14)


### Bug Fixes

* **CozyPouchLink:** Re-add allDocs function ([e4e56c4](https://github.com/cozy/cozy-client/commit/e4e56c4))




<a name="5.4.5"></a>
## [5.4.5](https://github.com/cozy/cozy-client/compare/v5.4.3...v5.4.5) (2019-01-11)




**Note:** Version bump only for package undefined

<a name="5.4.4"></a>
## [5.4.4](https://github.com/cozy/cozy-client/compare/v5.4.3...v5.4.4) (2019-01-11)




**Note:** Version bump only for package undefined

<a name="5.4.3"></a>
## [5.4.3](https://github.com/cozy/cozy-client/compare/v5.4.2...v5.4.3) (2019-01-11)


### Bug Fixes

* Adapter limit bug ([f4fe400](https://github.com/cozy/cozy-client/commit/f4fe400))




<a name="5.4.2"></a>
## [5.4.2](https://github.com/cozy/cozy-client/compare/v5.4.1...v5.4.2) (2019-01-10)




**Note:** Version bump only for package undefined

<a name="5.4.1"></a>
## [5.4.1](https://github.com/cozy/cozy-client/compare/v5.4.0...v5.4.1) (2019-01-10)


### Bug Fixes

* **deps:** pin dependency redux-thunk to 2.3.0 ([6868e9b](https://github.com/cozy/cozy-client/commit/6868e9b))




<a name="5.4.0"></a>
# [5.4.0](https://github.com/cozy/cozy-client/compare/v5.3.0...v5.4.0) (2019-01-10)


### Features

* **cozy-client:** Deprecate connect HOC ([6b64982](https://github.com/cozy/cozy-client/commit/6b64982))




<a name="5.3.0"></a>
# [5.3.0](https://github.com/cozy/cozy-client/compare/v5.2.2...v5.3.0) (2019-01-10)


### Bug Fixes

* Fixup thunk ([cf48914](https://github.com/cozy/cozy-client/commit/cf48914))
* Update queries after association fetch more ([9fcf6b7](https://github.com/cozy/cozy-client/commit/9fcf6b7))


### Features

* Added dispatch access to Associations ([c4886cc](https://github.com/cozy/cozy-client/commit/c4886cc))
* Added redux-thunk ([2c0bbd1](https://github.com/cozy/cozy-client/commit/2c0bbd1))




<a name="5.2.2"></a>
## [5.2.2](https://github.com/cozy/cozy-client/compare/v5.2.1...v5.2.2) (2019-01-03)




**Note:** Version bump only for package undefined

<a name="5.2.1"></a>
## [5.2.1](https://github.com/cozy/cozy-client/compare/v5.2.0...v5.2.1) (2018-12-21)


### Bug Fixes

* Guard against rows containg errors ([cb298d9](https://github.com/cozy/cozy-client/commit/cb298d9))




<a name="5.2.0"></a>
# [5.2.0](https://github.com/cozy/cozy-client/compare/v5.1.0...v5.2.0) (2018-12-20)


### Features

* Method add() for Permissions ✨ ([afdd721](https://github.com/cozy/cozy-client/commit/afdd721))




<a name="5.1.0"></a>
# [5.1.0](https://github.com/cozy/cozy-client/compare/v5.0.7...v5.1.0) (2018-12-19)


### Features

* HasOne association ✨ ([64221d7](https://github.com/cozy/cozy-client/commit/64221d7))




<a name="5.0.7"></a>
## [5.0.7](https://github.com/cozy/cozy-client/compare/v5.0.6...v5.0.7) (2018-12-19)


### Bug Fixes

* Don't update queries with an id selector ([f912d62](https://github.com/cozy/cozy-client/commit/f912d62))




<a name="5.0.6"></a>
## [5.0.6](https://github.com/cozy/cozy-client/compare/v5.0.5...v5.0.6) (2018-12-19)




**Note:** Version bump only for package undefined

<a name="5.0.5"></a>
## [5.0.5](https://github.com/cozy/cozy-client/compare/v5.0.4...v5.0.5) (2018-12-19)


### Bug Fixes

* Do not crash if data is null ([6346e74](https://github.com/cozy/cozy-client/commit/6346e74))




<a name="5.0.4"></a>
## [5.0.4](https://github.com/cozy/cozy-client/compare/v5.0.3...v5.0.4) (2018-12-19)




**Note:** Version bump only for package undefined

<a name="5.0.3"></a>
## [5.0.3](https://github.com/cozy/cozy-client/compare/v5.0.2...v5.0.3) (2018-12-19)




**Note:** Version bump only for package undefined

<a name="5.0.2"></a>
## [5.0.2](https://github.com/cozy/cozy-client/compare/v5.0.1...v5.0.2) (2018-12-12)


### Bug Fixes

* **CozyStackClient:** Permissions POST endpoint 🚑 ([265633e](https://github.com/cozy/cozy-client/commit/265633e))




<a name="5.0.1"></a>
## [5.0.1](https://github.com/cozy/cozy-client/compare/v5.0.0...v5.0.1) (2018-12-12)


### Bug Fixes

* **Query-Doc:** Return included documents to data ([fbcfd94](https://github.com/cozy/cozy-client/commit/fbcfd94))




<a name="5.0.0"></a>
# [5.0.0](https://github.com/cozy/cozy-client/compare/v4.14.0...v5.0.0) (2018-12-10)


### Bug Fixes

* **CozyClient:** Query's mutations 🚑 ([4166cbc](https://github.com/cozy/cozy-client/commit/4166cbc))


### Features

* Create with fixed id ✨ ([bc26177](https://github.com/cozy/cozy-client/commit/bc26177))


### BREAKING CHANGES

* Create or Update decision is now based on _rev
attribute existence  and not _id's one anymore




<a name="4.14.0"></a>
# [4.14.0](https://github.com/cozy/cozy-client/compare/v4.13.2...v4.14.0) (2018-12-10)


### Features

* Verbose jest and coverage 🔊 ([3bd50fb](https://github.com/cozy/cozy-client/commit/3bd50fb))
* **client:** Handle stack client unregister error ([c39d816](https://github.com/cozy/cozy-client/commit/c39d816))




<a name="4.13.2"></a>
## [4.13.2](https://github.com/cozy/cozy-client/compare/v4.13.1...v4.13.2) (2018-12-04)


### Bug Fixes

* **hasMany:** Tranforom doc into query ([7189ee5](https://github.com/cozy/cozy-client/commit/7189ee5))




<a name="4.13.1"></a>
## [4.13.1](https://github.com/cozy/cozy-client/compare/v4.13.0...v4.13.1) (2018-12-03)


### Bug Fixes

* **DocumentCollection:** Check if the doc is not null ([953413e](https://github.com/cozy/cozy-client/commit/953413e))
* **DocumentCollection:** No need to filter when querying _normal_docs ([146b287](https://github.com/cozy/cozy-client/commit/146b287))




<a name="4.13.0"></a>
# [4.13.0](https://github.com/cozy/cozy-client/compare/v4.12.2...v4.13.0) (2018-11-30)


### Features

* Add fetch changes ([7193f00](https://github.com/cozy/cozy-client/commit/7193f00))




<a name="4.12.2"></a>
## [4.12.2](https://github.com/cozy/cozy-client/compare/v4.12.1...v4.12.2) (2018-11-28)


### Bug Fixes

* **DocumentCollection:** Return all docs if limit is null ([a093931](https://github.com/cozy/cozy-client/commit/a093931))




<a name="4.12.1"></a>
## [4.12.1](https://github.com/cozy/cozy-client/compare/v4.12.0...v4.12.1) (2018-11-21)


### Bug Fixes

* Loop replication witout delay ([5d08a87](https://github.com/cozy/cozy-client/commit/5d08a87))




<a name="4.12.0"></a>
# [4.12.0](https://github.com/cozy/cozy-client/compare/v4.11.0...v4.12.0) (2018-11-21)


### Features

* Remove resign cordova event ([c070d52](https://github.com/cozy/cozy-client/commit/c070d52))




<a name="4.11.0"></a>
# [4.11.0](https://github.com/cozy/cozy-client/compare/v4.10.0...v4.11.0) (2018-11-21)


### Features

* Save state of login to not start replication twice ([6a1f71f](https://github.com/cozy/cozy-client/commit/6a1f71f))




<a name="4.10.0"></a>
# [4.10.0](https://github.com/cozy/cozy-client/compare/v4.8.0...v4.10.0) (2018-11-19)


### Bug Fixes

* Remove listener and add tests ([81b6df3](https://github.com/cozy/cozy-client/commit/81b6df3))
* Rm safariViewController for Android ([6f1c0e6](https://github.com/cozy/cozy-client/commit/6f1c0e6))


### Features

* Stop Start replication when device is online/offline ([de0a1f9](https://github.com/cozy/cozy-client/commit/de0a1f9))




<a name="4.9.0"></a>
# [4.9.0](https://github.com/cozy/cozy-client/compare/v4.8.0...v4.9.0) (2018-11-19)


### Bug Fixes

* Remove listener and add tests ([81b6df3](https://github.com/cozy/cozy-client/commit/81b6df3))
* Rm safariViewController for Android ([6f1c0e6](https://github.com/cozy/cozy-client/commit/6f1c0e6))


### Features

* Stop Start replication when device is online/offline ([de0a1f9](https://github.com/cozy/cozy-client/commit/de0a1f9))




<a name="4.8.0"></a>
# [4.8.0](https://github.com/cozy/cozy-client/compare/v4.7.1...v4.8.0) (2018-11-19)


### Bug Fixes

* **DocCollection:** Correct pagination limits ([de4d7a9](https://github.com/cozy/cozy-client/commit/de4d7a9))


### Features

* **DocCollection:** Use _normal_docs route ([4622d0e](https://github.com/cozy/cozy-client/commit/4622d0e))




<a name="4.7.1"></a>
## [4.7.1](https://github.com/cozy/cozy-client/compare/v4.7.0...v4.7.1) (2018-11-19)




**Note:** Version bump only for package undefined

<a name="4.7.0"></a>
# [4.7.0](https://github.com/cozy/cozy-client/compare/v4.6.0...v4.7.0) (2018-11-14)


### Features

* **pouch:** Destroy databases when login on another instance ([a64caad](https://github.com/cozy/cozy-client/commit/a64caad))




<a name="4.6.0"></a>
# [4.6.0](https://github.com/cozy/cozy-client/compare/v4.5.0...v4.6.0) (2018-11-14)


### Features

* Add authenticate with SafariViewController on mobile ([900bdd4](https://github.com/cozy/cozy-client/commit/900bdd4))




<a name="4.5.0"></a>
# [4.5.0](https://github.com/cozy/cozy-client/compare/v4.4.0...v4.5.0) (2018-11-13)


### Bug Fixes

* Lint ([c7bc4b1](https://github.com/cozy/cozy-client/commit/c7bc4b1))


### Features

* Add index method to QueryDefinition ([70de235](https://github.com/cozy/cozy-client/commit/70de235))




<a name="4.4.0"></a>
# [4.4.0](https://github.com/cozy/cozy-client/compare/v4.3.0...v4.4.0) (2018-11-09)


### Features

* Ability to execute a custom request/mutation ([ec243f7](https://github.com/cozy/cozy-client/commit/ec243f7))




<a name="4.3.0"></a>
# [4.3.0](https://github.com/cozy/cozy-client/compare/v4.2.1...v4.3.0) (2018-11-09)


### Features

* **FileCollection:** Url-encode all parameters ([5f99a42](https://github.com/cozy/cozy-client/commit/5f99a42))




<a name="4.2.1"></a>
## [4.2.1](https://github.com/cozy/cozy-client/compare/v4.2.0...v4.2.1) (2018-11-08)


### Bug Fixes

* Case typo ([8b6acc2](https://github.com/cozy/cozy-client/commit/8b6acc2))




<a name="4.2.0"></a>
# [4.2.0](https://github.com/cozy/cozy-client/compare/v4.1.0...v4.2.0) (2018-11-08)


### Features

* **pouch:** Manage sync status by doctype ([a2d4923](https://github.com/cozy/cozy-client/commit/a2d4923))




<a name="4.1.0"></a>
# [4.1.0](https://github.com/cozy/cozy-client/compare/v4.0.0...v4.1.0) (2018-11-07)


### Features

* Add pouch parameters ([f783916](https://github.com/cozy/cozy-client/commit/f783916))




<a name="4.0.0"></a>
# [4.0.0](https://github.com/cozy/cozy-client/compare/v3.8.0...v4.0.0) (2018-11-05)


### Code Refactoring

* Client uses stackClient ([42428f7](https://github.com/cozy/cozy-client/commit/42428f7))


### Features

* Disable console via mock in all tests ([8e67741](https://github.com/cozy/cozy-client/commit/8e67741))
* Pouch link calls setData on the client ([989b432](https://github.com/cozy/cozy-client/commit/989b432))


### BREAKING CHANGES

* registerOnLinks is no longer called with a CozyStackClient
but with a CozyClient




<a name="3.8.0"></a>
# [3.8.0](https://github.com/cozy/cozy-client/compare/v3.7.7...v3.8.0) (2018-11-02)


### Features

* Log time necessary to replicate a DB ([452a1a0](https://github.com/cozy/cozy-client/commit/452a1a0))




<a name="3.7.7"></a>
## [3.7.7](https://github.com/cozy/cozy-client/compare/v3.7.6...v3.7.7) (2018-11-02)


### Bug Fixes

* Discard rev from PouchDB results ([#249](https://github.com/cozy/cozy-client/issues/249)) ([5d88ae4](https://github.com/cozy/cozy-client/commit/5d88ae4))




<a name="3.7.6"></a>
## [3.7.6](https://github.com/cozy/cozy-client/compare/v3.7.5...v3.7.6) (2018-10-31)


### Bug Fixes

* Ensure database is created on the remote side ([ff71b37](https://github.com/cozy/cozy-client/commit/ff71b37))




<a name="3.7.5"></a>
## [3.7.5](https://github.com/cozy/cozy-client/compare/v3.7.3...v3.7.5) (2018-10-31)


### Bug Fixes

* Repair HasMany files relationships ([cba9552](https://github.com/cozy/cozy-client/commit/cba9552))




<a name="3.7.4"></a>
## [3.7.4](https://github.com/cozy/cozy-client/compare/v3.7.3...v3.7.4) (2018-10-31)


### Bug Fixes

* Repair HasMany files relationships ([cba9552](https://github.com/cozy/cozy-client/commit/cba9552))




<a name="3.7.3"></a>
## [3.7.3](https://github.com/cozy/cozy-client/compare/v3.7.1...v3.7.3) (2018-10-31)


### Bug Fixes

* Better handling for null values ([4941b3c](https://github.com/cozy/cozy-client/commit/4941b3c))
* Default uri ([f8839b8](https://github.com/cozy/cozy-client/commit/f8839b8))




<a name="3.7.2"></a>
## [3.7.2](https://github.com/cozy/cozy-client/compare/v3.7.1...v3.7.2) (2018-10-31)


### Bug Fixes

* Better handling for null values ([4941b3c](https://github.com/cozy/cozy-client/commit/4941b3c))
* Default uri ([f8839b8](https://github.com/cozy/cozy-client/commit/f8839b8))




<a name="3.7.1"></a>
## [3.7.1](https://github.com/cozy/cozy-client/compare/v3.7.0...v3.7.1) (2018-10-30)




**Note:** Version bump only for package undefined

<a name="3.7.0"></a>
# [3.7.0](https://github.com/cozy/cozy-client/compare/v3.6.4...v3.7.0) (2018-10-30)


### Features

* **pouch:** Add dev logs ([b0ecff5](https://github.com/cozy/cozy-client/commit/b0ecff5))




<a name="3.6.4"></a>
## [3.6.4](https://github.com/cozy/cozy-client/compare/v3.6.3...v3.6.4) (2018-10-30)


### Bug Fixes

* **deps:** pin dependency sift to 7.0.1 ([7de2c6a](https://github.com/cozy/cozy-client/commit/7de2c6a))




<a name="3.6.3"></a>
## [3.6.3](https://github.com/cozy/cozy-client/compare/v3.6.1...v3.6.3) (2018-10-29)


### Bug Fixes

* **pouch:** Wait end of replication before triggering another one ([e5657b2](https://github.com/cozy/cozy-client/commit/e5657b2))




<a name="3.6.2"></a>
## [3.6.2](https://github.com/cozy/cozy-client/compare/v3.6.1...v3.6.2) (2018-10-29)


### Bug Fixes

* **pouch:** Wait end of replication before triggering another one ([e5657b2](https://github.com/cozy/cozy-client/commit/e5657b2))




<a name="3.6.1"></a>
## [3.6.1](https://github.com/cozy/cozy-client/compare/v3.6.0...v3.6.1) (2018-10-29)


### Bug Fixes

* Revert alloc ([e3b2832](https://github.com/cozy/cozy-client/commit/e3b2832))




<a name="3.6.0"></a>
# [3.6.0](https://github.com/cozy/cozy-client/compare/v3.5.2...v3.6.0) (2018-10-29)


### Features

* Add elapsed time ([0414cc5](https://github.com/cozy/cozy-client/commit/0414cc5))




<a name="3.5.2"></a>
## [3.5.2](https://github.com/cozy/cozy-client/compare/v3.5.1...v3.5.2) (2018-10-29)




**Note:** Version bump only for package undefined

<a name="3.5.1"></a>
## [3.5.1](https://github.com/cozy/cozy-client/compare/v3.5.0...v3.5.1) (2018-10-26)




**Note:** Version bump only for package undefined

<a name="3.5.0"></a>
# [3.5.0](https://github.com/cozy/cozy-client/compare/v3.4.1...v3.5.0) (2018-10-26)


### Features

* Add Sift for mango selectors ([7206bd5](https://github.com/cozy/cozy-client/commit/7206bd5))




<a name="3.4.1"></a>
## [3.4.1](https://github.com/cozy/cozy-client/compare/v3.4.0...v3.4.1) (2018-10-26)


### Bug Fixes

* Documents can be arrays ([7f1d845](https://github.com/cozy/cozy-client/commit/7f1d845))




<a name="3.4.0"></a>
# [3.4.0](https://github.com/cozy/cozy-client/compare/v3.3.2...v3.4.0) (2018-10-26)


### Bug Fixes

* Do not throw if the document is not available ([6f5e692](https://github.com/cozy/cozy-client/commit/6f5e692))


### Features

* Filter early ([6b7b713](https://github.com/cozy/cozy-client/commit/6b7b713))
* Reduce the number of allocation ([366ccbb](https://github.com/cozy/cozy-client/commit/366ccbb))
* Side effects free in package.json ([d558c69](https://github.com/cozy/cozy-client/commit/d558c69))




<a name="3.3.2"></a>
## [3.3.2](https://github.com/cozy/cozy-client/compare/v3.3.1...v3.3.2) (2018-10-26)


### Bug Fixes

* Hydrating relation when querying even if empty ([7a92103](https://github.com/cozy/cozy-client/commit/7a92103))




<a name="3.3.1"></a>
## [3.3.1](https://github.com/cozy/cozy-client/compare/v3.3.0...v3.3.1) (2018-10-25)




**Note:** Version bump only for package undefined

<a name="3.3.0"></a>
# [3.3.0](https://github.com/cozy/cozy-client/compare/v3.2.0...v3.3.0) (2018-10-24)


### Bug Fixes

* Example used old relationship schema ([246849b](https://github.com/cozy/cozy-client/commit/246849b))


### Features

* Deduplicate documents ([84e7cf0](https://github.com/cozy/cozy-client/commit/84e7cf0))
* Do not show warnings in production ([b144534](https://github.com/cozy/cozy-client/commit/b144534))
* Optimize id queries ([a9fa010](https://github.com/cozy/cozy-client/commit/a9fa010))




<a name="3.2.0"></a>
# [3.2.0](https://github.com/cozy/cozy-client/compare/v3.1.1...v3.2.0) (2018-10-24)


### Features

* Export getQueryFromState ([ffc75ef](https://github.com/cozy/cozy-client/commit/ffc75ef))




<a name="3.1.1"></a>
## [3.1.1](https://github.com/cozy/cozy-client/compare/v3.1.0...v3.1.1) (2018-10-23)


### Bug Fixes

* **ReferencedFiles:** Properly detect next pages ([c3a27bc](https://github.com/cozy/cozy-client/commit/c3a27bc))




<a name="3.1.0"></a>
# [3.1.0](https://github.com/cozy/cozy-client/compare/v3.0.6...v3.1.0) (2018-10-23)


### Features

* Add addById / removeById to HasMany ([1e107ef](https://github.com/cozy/cozy-client/commit/1e107ef))




<a name="3.0.6"></a>
## [3.0.6](https://github.com/cozy/cozy-client/compare/v3.0.5...v3.0.6) (2018-10-16)


### Bug Fixes

* Link was broken ([7c673d0](https://github.com/cozy/cozy-client/commit/7c673d0))




<a name="3.0.5"></a>
## [3.0.5](https://github.com/cozy/cozy-client/compare/v3.0.3...v3.0.5) (2018-10-12)


### Bug Fixes

* **deps:** update dependency lodash to v4.17.11 ([54e3880](https://github.com/cozy/cozy-client/commit/54e3880))




<a name="3.0.4"></a>
## [3.0.4](https://github.com/cozy/cozy-client/compare/v3.0.3...v3.0.4) (2018-10-12)


### Bug Fixes

* **deps:** update dependency lodash to v4.17.11 ([54e3880](https://github.com/cozy/cozy-client/commit/54e3880))




<a name="3.0.3"></a>
## [3.0.3](https://github.com/cozy/cozy-client/compare/v3.0.2...v3.0.3) (2018-10-12)


### Bug Fixes

* **deps:** update dependency mime-types to v2.1.20 ([5755856](https://github.com/cozy/cozy-client/commit/5755856))




<a name="3.0.2"></a>
## [3.0.2](https://github.com/cozy/cozy-client/compare/v3.0.1...v3.0.2) (2018-10-12)


### Bug Fixes

* Deep compare documents updates ([7ae21c5](https://github.com/cozy/cozy-client/commit/7ae21c5))




<a name="3.0.1"></a>
## [3.0.1](https://github.com/cozy/cozy-client/compare/v3.0.0...v3.0.1) (2018-10-11)




**Note:** Version bump only for package undefined

<a name="3.0.0"></a>
# [3.0.0](https://github.com/cozy/cozy-client/compare/v2.24.2...v3.0.0) (2018-10-11)


### Bug Fixes

* Selector fields are not sorted first ([63e5163](https://github.com/cozy/cozy-client/commit/63e5163))


### Features

* Respect sort order ([a2ca980](https://github.com/cozy/cozy-client/commit/a2ca980))


### BREAKING CHANGES

* Sorting order of previous queries might change




<a name="2.24.2"></a>
## [2.24.2](https://github.com/cozy/cozy-client/compare/v2.24.1...v2.24.2) (2018-10-11)


### Bug Fixes

* Avoid rerenders when no doc changed ([290770b](https://github.com/cozy/cozy-client/commit/290770b))
* Pass next documents to query reducer ([6af8518](https://github.com/cozy/cozy-client/commit/6af8518))
* Prevent state updates with identical doc ([8828f70](https://github.com/cozy/cozy-client/commit/8828f70))




<a name="2.24.1"></a>
## [2.24.1](https://github.com/cozy/cozy-client/compare/v2.24.0...v2.24.1) (2018-10-09)


### Bug Fixes

* **deps:** pin dependencies to 4.17.10 ([3c3a83a](https://github.com/cozy/cozy-client/commit/3c3a83a))




<a name="2.24.0"></a>
# [2.24.0](https://github.com/cozy/cozy-client/compare/v2.23.1...v2.24.0) (2018-10-09)


### Features

* $ne operator support ([7389dac](https://github.com/cozy/cozy-client/commit/7389dac))




<a name="2.23.1"></a>
## [2.23.1](https://github.com/cozy/cozy-client/compare/v2.23.0...v2.23.1) (2018-10-05)


### Bug Fixes

* tests all green ([980b625](https://github.com/cozy/cozy-client/commit/980b625))
* Update queries when references are mutated ([4272cbc](https://github.com/cozy/cozy-client/commit/4272cbc))




<a name="2.23.0"></a>
# [2.23.0](https://github.com/cozy/cozy-client/compare/v2.22.4...v2.23.0) (2018-10-03)


### Features

* Update file metadata ([d3ac41f](https://github.com/cozy/cozy-client/commit/d3ac41f))




<a name="2.22.4"></a>
## [2.22.4](https://github.com/cozy/cozy-client/compare/v2.22.3...v2.22.4) (2018-10-02)


### Bug Fixes

* :bug: Fix state update issue on destroy ([e842349](https://github.com/cozy/cozy-client/commit/e842349))
* Unregistering client ([e5901b9](https://github.com/cozy/cozy-client/commit/e5901b9))




<a name="2.22.3"></a>
## [2.22.3](https://github.com/cozy/cozy-client/compare/v2.22.2...v2.22.3) (2018-10-02)


### Bug Fixes

* Have a client instance in Schema class ([76f6253](https://github.com/cozy/cozy-client/commit/76f6253))
* Transmit call to Schema.validate ([95c88c1](https://github.com/cozy/cozy-client/commit/95c88c1))




<a name="2.22.2"></a>
## [2.22.2](https://github.com/cozy/cozy-client/compare/v2.22.1...v2.22.2) (2018-10-01)


### Bug Fixes

* :art: client error handling in withMutations ([8d05662](https://github.com/cozy/cozy-client/commit/8d05662))
* :bug: Fix withMutations context issue ([08be90d](https://github.com/cozy/cozy-client/commit/08be90d))




<a name="2.22.1"></a>
## [2.22.1](https://github.com/cozy/cozy-client/compare/v2.22.0...v2.22.1) (2018-09-25)


### Bug Fixes

* Really force file download ([82ab0a5](https://github.com/cozy/cozy-client/commit/82ab0a5))




<a name="2.22.0"></a>
# [2.22.0](https://github.com/cozy/cozy-client/compare/v2.21.3...v2.22.0) (2018-09-25)


### Bug Fixes

* Launch replication when device are online 📞 ([ce3be03](https://github.com/cozy/cozy-client/commit/ce3be03))


### Features

* Add information on console 🗣 ([2df2bac](https://github.com/cozy/cozy-client/commit/2df2bac))
* Save synced flag on localStorage 🧠 ([80e38ce](https://github.com/cozy/cozy-client/commit/80e38ce))




<a name="2.21.3"></a>
## [2.21.3](https://github.com/cozy/cozy-client/compare/v2.21.2...v2.21.3) (2018-09-25)




**Note:** Version bump only for package undefined

<a name="2.21.2"></a>
## [2.21.2](https://github.com/cozy/cozy-client/compare/v2.21.1...v2.21.2) (2018-09-24)




**Note:** Version bump only for package undefined

<a name="2.21.1"></a>
## [2.21.1](https://github.com/cozy/cozy-client/compare/v2.21.0...v2.21.1) (2018-09-21)




**Note:** Version bump only for package undefined

<a name="2.21.0"></a>
# [2.21.0](https://github.com/cozy/cozy-client/compare/v2.20.2...v2.21.0) (2018-09-21)


### Features

* Stop replication when app lost focus ([149f5a3](https://github.com/cozy/cozy-client/commit/149f5a3))




<a name="2.20.2"></a>
## [2.20.2](https://github.com/cozy/cozy-client/compare/v2.20.1...v2.20.2) (2018-09-20)


### Bug Fixes

* Use refresh token ([352bb93](https://github.com/cozy/cozy-client/commit/352bb93))




<a name="2.20.1"></a>
## [2.20.1](https://github.com/cozy/cozy-client/compare/v2.20.0...v2.20.1) (2018-09-18)




**Note:** Version bump only for package undefined

<a name="2.20.0"></a>
# [2.20.0](https://github.com/cozy/cozy-client/compare/v2.19.2...v2.20.0) (2018-09-18)


### Bug Fixes

* Make new documents ([694c850](https://github.com/cozy/cozy-client/commit/694c850))
* Unused variable ([ffea569](https://github.com/cozy/cozy-client/commit/ffea569))
* Validate on client proxies to schema ([9c9d061](https://github.com/cozy/cozy-client/commit/9c9d061))


### Features

* Ability for a Query to return docs ([cee8694](https://github.com/cozy/cozy-client/commit/cee8694))
* Add addById/removeById/existsById ([52b169d](https://github.com/cozy/cozy-client/commit/52b169d))
* add HasManyInPlace ([274c6fa](https://github.com/cozy/cozy-client/commit/274c6fa))
* Association is in charge of defining query ([e5ff308](https://github.com/cozy/cozy-client/commit/e5ff308))
* Client exports dehydrate ([6ad4ab5](https://github.com/cozy/cozy-client/commit/6ad4ab5))
* Custom relationship in schema ([61d28f2](https://github.com/cozy/cozy-client/commit/61d28f2))
* Defining a schema is required ([d600671](https://github.com/cozy/cozy-client/commit/d600671))
* HasOneInPlace ([d81964d](https://github.com/cozy/cozy-client/commit/d81964d))
* Relationships are resolved in schema ([45d2dc9](https://github.com/cozy/cozy-client/commit/45d2dc9))
* Remove HasManyUNSAFE ([a6b904b](https://github.com/cozy/cozy-client/commit/a6b904b))
* Remove useless warnings ([0f35115](https://github.com/cozy/cozy-client/commit/0f35115))
* Warning before error to help dev ([40c2ade](https://github.com/cozy/cozy-client/commit/40c2ade))




<a name="2.19.2"></a>
## [2.19.2](https://github.com/cozy/cozy-client/compare/v2.19.1...v2.19.2) (2018-09-14)


### Bug Fixes

* Changed revokeRecipient() signature ([0a8e935](https://github.com/cozy/cozy-client/commit/0a8e935))




<a name="2.19.1"></a>
## [2.19.1](https://github.com/cozy/cozy-client/compare/v2.19.0...v2.19.1) (2018-09-13)


### Bug Fixes

* Return sensible data when database not found ([7141deb](https://github.com/cozy/cozy-client/commit/7141deb))




<a name="2.19.0"></a>
# [2.19.0](https://github.com/cozy/cozy-client/compare/v2.18.1...v2.19.0) (2018-09-13)


### Bug Fixes

* **stack-client:** Map redirect_uris to camelcase ([286a0ee](https://github.com/cozy/cozy-client/commit/286a0ee))


### Features

* **stack:** Check mandatory fields in register ([db6afe1](https://github.com/cozy/cozy-client/commit/db6afe1))




<a name="2.18.1"></a>
## [2.18.1](https://github.com/cozy/cozy-client/compare/v2.18.0...v2.18.1) (2018-09-12)




**Note:** Version bump only for package undefined

<a name="2.18.0"></a>
# [2.18.0](https://github.com/cozy/cozy-client/compare/v2.17.0...v2.18.0) (2018-09-12)


### Features

* Add ability to fetch only one document ([ea28fdd](https://github.com/cozy/cozy-client/commit/ea28fdd))




<a name="2.17.0"></a>
# [2.17.0](https://github.com/cozy/cozy-client/compare/v2.16.0...v2.17.0) (2018-09-12)


### Features

* Add route to get own permissions ([0255600](https://github.com/cozy/cozy-client/commit/0255600))
* Preview path for sharings ([dfd14e7](https://github.com/cozy/cozy-client/commit/dfd14e7))




<a name="2.16.0"></a>
# [2.16.0](https://github.com/cozy/cozy-client/compare/v2.15.3...v2.16.0) (2018-09-12)


### Features

* Export Association ([7347883](https://github.com/cozy/cozy-client/commit/7347883))




<a name="2.15.3"></a>
## [2.15.3](https://github.com/cozy/cozy-client/compare/v2.15.2...v2.15.3) (2018-09-11)


### Bug Fixes

* **pouch:** Avoid to destroy dbs already destroyed ([0f64a98](https://github.com/cozy/cozy-client/commit/0f64a98))




<a name="2.15.2"></a>
## [2.15.2](https://github.com/cozy/cozy-client/compare/v2.15.1...v2.15.2) (2018-09-10)


### Bug Fixes

* Filter design and deleted docs in replication ([47c3107](https://github.com/cozy/cozy-client/commit/47c3107))




<a name="2.15.1"></a>
## [2.15.1](https://github.com/cozy/cozy-client/compare/v2.15.0...v2.15.1) (2018-09-10)


### Bug Fixes

* **pouch:** Updated docs were not retrieved well ([8001ad2](https://github.com/cozy/cozy-client/commit/8001ad2))




<a name="2.15.0"></a>
# [2.15.0](https://github.com/cozy/cozy-client/compare/v2.14.0...v2.15.0) (2018-09-10)


### Features

* add hooks ([6c38acc](https://github.com/cozy/cozy-client/commit/6c38acc))
* add public methods to start/stop replication ([760ee44](https://github.com/cozy/cozy-client/commit/760ee44))




<a name="2.14.0"></a>
# [2.14.0](https://github.com/cozy/cozy-client/compare/v2.13.1...v2.14.0) (2018-09-10)


### Features

* Use two way replication ([170a00f](https://github.com/cozy/cozy-client/commit/170a00f))




<a name="2.13.1"></a>
## [2.13.1](https://github.com/cozy/cozy-client/compare/v2.13.0...v2.13.1) (2018-09-07)


### Bug Fixes

* Raw() is a getter ([1314a31](https://github.com/cozy/cozy-client/commit/1314a31))




<a name="2.13.0"></a>
# [2.13.0](https://github.com/cozy/cozy-client/compare/v2.12.0...v2.13.0) (2018-09-07)


### Features

* Add _type/id to documents in onSync ([cf97ad6](https://github.com/cozy/cozy-client/commit/cf97ad6))
* Pouch onSync called with updated documents ([c67261b](https://github.com/cozy/cozy-client/commit/c67261b))




<a name="2.12.0"></a>
# [2.12.0](https://github.com/cozy/cozy-client/compare/v2.11.0...v2.12.0) (2018-09-07)


### Features

* **client:** Add setData method ([24d52c6](https://github.com/cozy/cozy-client/commit/24d52c6))




<a name="2.11.0"></a>
# [2.11.0](https://github.com/cozy/cozy-client/compare/v2.10.5...v2.11.0) (2018-09-06)


### Bug Fixes

* No warning if no relationship attribute ([36958e4](https://github.com/cozy/cozy-client/commit/36958e4))


### Features

* Dehydrate document before saving ([dedf8ed](https://github.com/cozy/cozy-client/commit/dedf8ed))




<a name="2.10.5"></a>
## [2.10.5](https://github.com/cozy/cozy-client/compare/v2.10.4...v2.10.5) (2018-09-06)


### Bug Fixes

* **pouch:** Set sync to false on reset ([19a36d4](https://github.com/cozy/cozy-client/commit/19a36d4))




<a name="2.10.4"></a>
## [2.10.4](https://github.com/cozy/cozy-client/compare/v2.10.3...v2.10.4) (2018-09-05)


### Bug Fixes

* Restored keys option for DC.all() ([c69ecb1](https://github.com/cozy/cozy-client/commit/c69ecb1))




<a name="2.10.3"></a>
## [2.10.3](https://github.com/cozy/cozy-client/compare/v2.10.2...v2.10.3) (2018-09-05)


### Bug Fixes

* Extract doc from pouch result + spec ([3d51fac](https://github.com/cozy/cozy-client/commit/3d51fac))




<a name="2.10.2"></a>
## [2.10.2](https://github.com/cozy/cozy-client/compare/v2.10.1...v2.10.2) (2018-09-05)




**Note:** Version bump only for package undefined

<a name="2.10.1"></a>
## [2.10.1](https://github.com/cozy/cozy-client/compare/v2.10.0...v2.10.1) (2018-09-05)


### Bug Fixes

* **pouch:** Call onSync when sync is done ([256e264](https://github.com/cozy/cozy-client/commit/256e264))




<a name="2.10.0"></a>
# [2.10.0](https://github.com/cozy/cozy-client/compare/v2.9.1...v2.10.0) (2018-09-04)


### Features

* Examples ([8406f0c](https://github.com/cozy/cozy-client/commit/8406f0c))




<a name="2.9.1"></a>
## [2.9.1](https://github.com/cozy/cozy-client/compare/v2.9.0...v2.9.1) (2018-09-04)


### Bug Fixes

* **oauth:** Don't forget data in updateInformation ([3f8620a](https://github.com/cozy/cozy-client/commit/3f8620a))




<a name="2.9.0"></a>
# [2.9.0](https://github.com/cozy/cozy-client/compare/v2.8.0...v2.9.0) (2018-09-04)


### Features

* **client:** Call onLogin on links ([cef01aa](https://github.com/cozy/cozy-client/commit/cef01aa))
* **pouch:** Implement onLogin lifecycle method ([ab56f40](https://github.com/cozy/cozy-client/commit/ab56f40))




<a name="2.8.0"></a>
# [2.8.0](https://github.com/cozy/cozy-client/compare/v2.7.3...v2.8.0) (2018-09-04)


### Features

* **pouch:** Handle errors for pouches destroy ([825b794](https://github.com/cozy/cozy-client/commit/825b794))




<a name="2.7.3"></a>
## [2.7.3](https://github.com/cozy/cozy-client/compare/v2.7.2...v2.7.3) (2018-09-04)


### Bug Fixes

* Default sort by datetime instead of date ([bcc17f3](https://github.com/cozy/cozy-client/commit/bcc17f3))




<a name="2.7.2"></a>
## [2.7.2](https://github.com/cozy/cozy-client/compare/v2.7.1...v2.7.2) (2018-09-03)


### Bug Fixes

* **pouch:** Replace not existing method ([3802403](https://github.com/cozy/cozy-client/commit/3802403))




<a name="2.7.1"></a>
## [2.7.1](https://github.com/cozy/cozy-client/compare/v2.7.0...v2.7.1) (2018-09-03)




**Note:** Version bump only for package undefined

<a name="2.7.0"></a>
# [2.7.0](https://github.com/cozy/cozy-client/compare/v2.6.1...v2.7.0) (2018-09-03)


### Features

* **client:** Add deprecation warning for link ([895d697](https://github.com/cozy/cozy-client/commit/895d697))
* **client:** Add login method ([9758f45](https://github.com/cozy/cozy-client/commit/9758f45))
* **client:** Always chain links ([856e559](https://github.com/cozy/cozy-client/commit/856e559))
* **client:** Save links in array in constructor ([c600986](https://github.com/cozy/cozy-client/commit/c600986))




<a name="2.6.1"></a>
## [2.6.1](https://github.com/cozy/cozy-client/compare/v2.6.0...v2.6.1) (2018-09-03)


### Bug Fixes

* Creating a doc with empty relationships ([ebf0d86](https://github.com/cozy/cozy-client/commit/ebf0d86))




<a name="2.6.0"></a>
# [2.6.0](https://github.com/cozy/cozy-client/compare/v2.5.2...v2.6.0) (2018-08-31)


### Bug Fixes

* Not able to start several time ([56a7995](https://github.com/cozy/cozy-client/commit/56a7995))
* Pouchdb is written in lowercase ([e009dbe](https://github.com/cozy/cozy-client/commit/e009dbe))
* Remove console.log ([a3d81ab](https://github.com/cozy/cozy-client/commit/a3d81ab))


### Features

* Ability to serialize/deserialize the token ([05f6d9e](https://github.com/cozy/cozy-client/commit/05f6d9e))
* add replication manager ([20511c7](https://github.com/cozy/cozy-client/commit/20511c7))
* Polish the example ([17f85b3](https://github.com/cozy/cozy-client/commit/17f85b3))




<a name="2.5.2"></a>
## [2.5.2](https://github.com/cozy/cozy-client/compare/v2.5.1...v2.5.2) (2018-08-31)




**Note:** Version bump only for package undefined

<a name="2.5.1"></a>
## [2.5.1](https://github.com/cozy/cozy-client/compare/v2.5.0...v2.5.1) (2018-08-29)


### Bug Fixes

* Use the right param for code in OAuth flow ([5d5ab56](https://github.com/cozy/cozy-client/commit/5d5ab56))




<a name="2.5.0"></a>
# [2.5.0](https://github.com/cozy/cozy-client/compare/v2.4.1...v2.5.0) (2018-08-29)


### Features

* Remove default limit ([7202208](https://github.com/cozy/cozy-client/commit/7202208))




<a name="2.4.1"></a>
## [2.4.1](https://github.com/cozy/cozy-client/compare/v2.4.0...v2.4.1) (2018-08-29)


### Bug Fixes

* **pouch:** Resolve with result after replication ([7c6b365](https://github.com/cozy/cozy-client/commit/7c6b365))




<a name="2.4.0"></a>
# [2.4.0](https://github.com/cozy/cozy-client/compare/v2.3.0...v2.4.0) (2018-08-28)


### Features

* Remove design document on response 🤪 ([202ed16](https://github.com/cozy/cozy-client/commit/202ed16))




<a name="2.3.0"></a>
# [2.3.0](https://github.com/cozy/cozy-client/compare/v2.2.3...v2.3.0) (2018-08-27)


### Bug Fixes

* Unregister on stack unregister on lib ([b5edcac](https://github.com/cozy/cozy-client/commit/b5edcac))


### Features

* Add logout function 👋 ([b2764ad](https://github.com/cozy/cozy-client/commit/b2764ad))




<a name="2.2.3"></a>
## [2.2.3](https://github.com/cozy/cozy-client/compare/v2.2.2...v2.2.3) (2018-08-27)




**Note:** Version bump only for package undefined

<a name="2.2.2"></a>
## [2.2.2](https://github.com/cozy/cozy-client/compare/v2.2.1...v2.2.2) (2018-08-24)


### Bug Fixes

* Mv ensureStore instead of getOrCreateStore ([217ad21](https://github.com/cozy/cozy-client/commit/217ad21))




<a name="2.2.1"></a>
## [2.2.1](https://github.com/cozy/cozy-client/compare/v2.2.0...v2.2.1) (2018-08-24)




**Note:** Version bump only for package undefined

<a name="2.2.0"></a>
# [2.2.0](https://github.com/cozy/cozy-client/compare/v2.1.9...v2.2.0) (2018-08-24)


### Features

* **assoc:** Throw if already initialized ([3ab5369](https://github.com/cozy/cozy-client/commit/3ab5369))
* Get or create store in watchQuery ([f9d5f15](https://github.com/cozy/cozy-client/commit/f9d5f15))
* **hydrate:** Log error if any ([9be0fa4](https://github.com/cozy/cozy-client/commit/9be0fa4))
* Throw if setStore undefined ([2e51b5f](https://github.com/cozy/cozy-client/commit/2e51b5f))




<a name="2.1.9"></a>
## [2.1.9](https://github.com/cozy/cozy-client/compare/v2.1.8...v2.1.9) (2018-08-23)


### Bug Fixes

* watchQuery calls getOrCreate store to ensure it has a store ([a4c4bbc](https://github.com/cozy/cozy-client/commit/a4c4bbc))




<a name="2.1.8"></a>
## [2.1.8](https://github.com/cozy/cozy-client/compare/v2.1.7...v2.1.8) (2018-08-23)




**Note:** Version bump only for package undefined

<a name="2.1.7"></a>
## [2.1.7](https://github.com/cozy/cozy-client/compare/v2.1.6...v2.1.7) (2018-08-23)


### Bug Fixes

* Prevent double query init ([e5b0498](https://github.com/cozy/cozy-client/commit/e5b0498))
* Use only one sorting order ([d81a159](https://github.com/cozy/cozy-client/commit/d81a159))




<a name="2.1.6"></a>
## [2.1.6](https://github.com/cozy/cozy-client/compare/v2.1.5...v2.1.6) (2018-08-22)


### Bug Fixes

* Downgrade lerna package ⬇️ ([76c5a09](https://github.com/cozy/cozy-client/commit/76c5a09))




<a name="2.1.5"></a>
## [2.1.5](https://github.com/cozy/cozy-client/compare/v2.1.4...v2.1.5) (2018-08-22)


### Bug Fixes

* Test deploy with travis 🍄 ([3ba53c4](https://github.com/cozy/cozy-client/commit/3ba53c4))





<a name="2.1.4"></a>
## [2.1.4](https://github.com/cozy/cozy-client/compare/v2.1.3...v2.1.4) (2018-08-22)


### Bug Fixes

* Lerna publish 🚀 ([7aa474c](https://github.com/cozy/cozy-client/commit/7aa474c))





<a name="2.1.3"></a>
## [2.1.3](https://github.com/cozy/cozy-client/compare/v2.1.2...v2.1.3) (2018-08-22)


### Bug Fixes

* Test lerna publish 🔭 ([a95703e](https://github.com/cozy/cozy-client/commit/a95703e))





<a name="2.1.2"></a>
## [2.1.2](https://github.com/cozy/cozy-client/compare/v2.1.1...v2.1.2) (2018-08-22)


### Bug Fixes

* Add new line at end of README.md file ([af62dea](https://github.com/cozy/cozy-client/commit/af62dea))
* Test auto release ([ec00760](https://github.com/cozy/cozy-client/commit/ec00760))





<a name="2.1.1"></a>
## [2.1.1](https://github.com/cozy/cozy-client/compare/v2.1.0...v2.1.1) (2018-08-22)


### Bug Fixes

* Sleep function was not imported ([4e18fbf](https://github.com/cozy/cozy-client/commit/4e18fbf))





<a name="2.1.0"></a>
# [2.1.0](https://github.com/cozy/cozy-client/compare/v2.0.0...v2.1.0) (2018-08-22)


### Bug Fixes

* **autoquery:** do not try to update query if response has no data ([96a4721](https://github.com/cozy/cozy-client/commit/96a4721))
* **Query:** dont call unsubscribe if it has not been set ([88772b3](https://github.com/cozy/cozy-client/commit/88772b3))
* typo in travis broke autopublish ([be8adea](https://github.com/cozy/cozy-client/commit/be8adea))
* when watching a query, ensure it exists in store ([03657ec](https://github.com/cozy/cozy-client/commit/03657ec))


### Features

* **associations:** ability to define assoc fetching inside relationship ([e50b16e](https://github.com/cozy/cozy-client/commit/e50b16e))
* **dsl:** include() throws helpful error if called with wrong args ([435c268](https://github.com/cozy/cozy-client/commit/435c268))
* **stackLink:** ability to fetch several documents in one go ([45307de](https://github.com/cozy/cozy-client/commit/45307de))
* Add deprecated message on old function ([71cc8b3](https://github.com/cozy/cozy-client/commit/71cc8b3))
* add doc for Query props ([e4c7f98](https://github.com/cozy/cozy-client/commit/e4c7f98))
* add fetchPolicy prop for Query ([ea4714e](https://github.com/cozy/cozy-client/commit/ea4714e))
* export QueryDefinition ([331eb9a](https://github.com/cozy/cozy-client/commit/331eb9a))
* Remove client on Link initialisation 🔥 ([afa6ba7](https://github.com/cozy/cozy-client/commit/afa6ba7))





<a name="2.0.0"></a>
# [2.0.0](https://github.com/cozy/cozy-client/compare/v1.0.0-beta.30...v2.0.0) (2018-08-17)


### Bug Fixes

* :chore: disable regenerator transform in babel preset ([4993b55](https://github.com/cozy/cozy-client/commit/4993b55))
* 📝  Fix AppCollection ([3b58131](https://github.com/cozy/cozy-client/commit/3b58131))
* 📝 Fix lerna watch command ([6b29587](https://github.com/cozy/cozy-client/commit/6b29587))
* add babel-preset-cozy-app at root ([2c4681f](https://github.com/cozy/cozy-client/commit/2c4681f))
* add redux dependency used in tests ([386b864](https://github.com/cozy/cozy-client/commit/386b864))
* checkout on master since travis operates in detached head mode ([df26ee6](https://github.com/cozy/cozy-client/commit/df26ee6))
* client.get query will return only 1 result ([2d496e0](https://github.com/cozy/cozy-client/commit/2d496e0))
* localStorage cannot be used with opaque origins ([f76953e](https://github.com/cozy/cozy-client/commit/f76953e))
* quote "$@" ([45ac76b](https://github.com/cozy/cozy-client/commit/45ac76b))
* typo in travis.yml ([888b3a4](https://github.com/cozy/cozy-client/commit/888b3a4))
* Watch command 🐛 ([b484d5d](https://github.com/cozy/cozy-client/commit/b484d5d))


### Features

* ⚠️ Throw error for not available appcollection methods ([44edd17](https://github.com/cozy/cozy-client/commit/44edd17))
* add helpful error handling ([bb68d1b](https://github.com/cozy/cozy-client/commit/bb68d1b))
* add hoc queryConnect and withClient ([c241f82](https://github.com/cozy/cozy-client/commit/c241f82))
* auto update queries when receiving results ([1370773](https://github.com/cozy/cozy-client/commit/1370773))
* default options for Query ([da295c1](https://github.com/cozy/cozy-client/commit/da295c1))
* extract function to give better errors ([f7a97ca](https://github.com/cozy/cozy-client/commit/f7a97ca))
* query update removes documents that no longer pertain to the query ([0a7dac5](https://github.com/cozy/cozy-client/commit/0a7dac5))
* remove context query ids ([f428d81](https://github.com/cozy/cozy-client/commit/f428d81))
* throw when ObservableQuery does not have the right params ([25b56a5](https://github.com/cozy/cozy-client/commit/25b56a5))


### Performance Improvements

* bind fetch more ([dc82671](https://github.com/cozy/cozy-client/commit/dc82671))
* do not bind functions inside render ([0227634](https://github.com/cozy/cozy-client/commit/0227634))


### BREAKING CHANGES

* before applications had to select the
first item of the results themselves, now it is
done in the library

```diff
<Query query={client.get('doctype', 'id')}>
-  { ({ data: documents }) => {
-     const myDoc = documents[0]
+  { ({ data: myDoc }) => {
...
}}
/>
```




<a name="1.0.0"></a>
# [1.0.0](https://github.com/cozy/cozy-client/compare/v1.0.0-beta.30...v1.0.0) (2018-08-17)


### Bug Fixes

* :chore: disable regenerator transform in babel preset ([4993b55](https://github.com/cozy/cozy-client/commit/4993b55))
* 📝  Fix AppCollection ([3b58131](https://github.com/cozy/cozy-client/commit/3b58131))
* 📝 Fix lerna watch command ([6b29587](https://github.com/cozy/cozy-client/commit/6b29587))
* add babel-preset-cozy-app at root ([2c4681f](https://github.com/cozy/cozy-client/commit/2c4681f))
* add redux dependency used in tests ([386b864](https://github.com/cozy/cozy-client/commit/386b864))
* checkout on master since travis operates in detached head mode ([df26ee6](https://github.com/cozy/cozy-client/commit/df26ee6))
* client.get query will return only 1 result ([2d496e0](https://github.com/cozy/cozy-client/commit/2d496e0))
* localStorage cannot be used with opaque origins ([f76953e](https://github.com/cozy/cozy-client/commit/f76953e))
* quote "$@" ([45ac76b](https://github.com/cozy/cozy-client/commit/45ac76b))
* typo in travis.yml ([888b3a4](https://github.com/cozy/cozy-client/commit/888b3a4))
* Watch command 🐛 ([b484d5d](https://github.com/cozy/cozy-client/commit/b484d5d))


### Features

* ⚠️ Throw error for not available appcollection methods ([44edd17](https://github.com/cozy/cozy-client/commit/44edd17))
* add helpful error handling ([bb68d1b](https://github.com/cozy/cozy-client/commit/bb68d1b))
* add hoc queryConnect and withClient ([c241f82](https://github.com/cozy/cozy-client/commit/c241f82))
* auto update queries when receiving results ([1370773](https://github.com/cozy/cozy-client/commit/1370773))
* default options for Query ([da295c1](https://github.com/cozy/cozy-client/commit/da295c1))
* extract function to give better errors ([f7a97ca](https://github.com/cozy/cozy-client/commit/f7a97ca))
* query update removes documents that no longer pertain to the query ([0a7dac5](https://github.com/cozy/cozy-client/commit/0a7dac5))
* remove context query ids ([f428d81](https://github.com/cozy/cozy-client/commit/f428d81))
* throw when ObservableQuery does not have the right params ([25b56a5](https://github.com/cozy/cozy-client/commit/25b56a5))


### Performance Improvements

* bind fetch more ([dc82671](https://github.com/cozy/cozy-client/commit/dc82671))
* do not bind functions inside render ([0227634](https://github.com/cozy/cozy-client/commit/0227634))


### BREAKING CHANGES

* before applications had to select the
first item of the results themselves, now it is
done in the library

```diff
<Query query={client.get('doctype', 'id')}>
-  { ({ data: documents }) => {
-     const myDoc = documents[0]
+  { ({ data: myDoc }) => {
...
}}
/>
```
