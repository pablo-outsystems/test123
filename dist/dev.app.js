/*! dev.app.js || Version: 5.1.128117 || Generated: Fri May 19 2023 17:16:01 GMT+0100 (Western European Summer Time) */
/******/ (function(modules) { // webpackBootstrap
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = window["webpackHotUpdate"];
/******/ 	window["webpackHotUpdate"] = // eslint-disable-next-line no-unused-vars
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) {
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if (parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var script = document.createElement("script");
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		if (null) script.crossOrigin = null;
/******/ 		document.head.appendChild(script);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest(requestTimeout) {
/******/ 		requestTimeout = requestTimeout || 10000;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if (typeof XMLHttpRequest === "undefined") {
/******/ 				return reject(new Error("No browser support"));
/******/ 			}
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = requestTimeout;
/******/ 				request.send(null);
/******/ 			} catch (err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if (request.readyState !== 4) return;
/******/ 				if (request.status === 0) {
/******/ 					// timeout
/******/ 					reject(
/******/ 						new Error("Manifest request to " + requestPath + " timed out.")
/******/ 					);
/******/ 				} else if (request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if (request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch (e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "5e5372f33dc600f6857d";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_selfInvalidated: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/ 			invalidate: function() {
/******/ 				this._selfInvalidated = true;
/******/ 				switch (hotStatus) {
/******/ 					case "idle":
/******/ 						hotUpdate = {};
/******/ 						hotUpdate[moduleId] = modules[moduleId];
/******/ 						hotSetStatus("ready");
/******/ 						break;
/******/ 					case "ready":
/******/ 						hotApplyInvalidatedModule(moduleId);
/******/ 						break;
/******/ 					case "prepare":
/******/ 					case "check":
/******/ 					case "dispose":
/******/ 					case "apply":
/******/ 						(hotQueuedInvalidatedModules =
/******/ 							hotQueuedInvalidatedModules || []).push(moduleId);
/******/ 						break;
/******/ 					default:
/******/ 						// ignore requests in error states
/******/ 						break;
/******/ 				}
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash, hotQueuedInvalidatedModules;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus(hotApplyInvalidatedModules() ? "ready" : "idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			var chunkId = "app";
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/ 		return hotApplyInternal(options);
/******/ 	}
/******/
/******/ 	function hotApplyInternal(options) {
/******/ 		hotApplyInvalidatedModules();
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (
/******/ 					!module ||
/******/ 					(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 				)
/******/ 					continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted &&
/******/ 				// removed self-accepted modules should not be required
/******/ 				appliedUpdate[moduleId] !== warnUnexpectedRequire &&
/******/ 				// when called invalidate self-accepting is not possible
/******/ 				!installedModules[moduleId].hot._selfInvalidated
/******/ 			) {
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					parents: installedModules[moduleId].parents.slice(),
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		if (hotUpdateNewHash !== undefined) {
/******/ 			hotCurrentHash = hotUpdateNewHash;
/******/ 			hotUpdateNewHash = undefined;
/******/ 		}
/******/ 		hotUpdate = undefined;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = item.parents;
/******/ 			hotCurrentChildModule = moduleId;
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		if (hotQueuedInvalidatedModules) {
/******/ 			return hotApplyInternal(options).then(function(list) {
/******/ 				outdatedModules.forEach(function(moduleId) {
/******/ 					if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 				});
/******/ 				return list;
/******/ 			});
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	function hotApplyInvalidatedModules() {
/******/ 		if (hotQueuedInvalidatedModules) {
/******/ 			if (!hotUpdate) hotUpdate = {};
/******/ 			hotQueuedInvalidatedModules.forEach(hotApplyInvalidatedModule);
/******/ 			hotQueuedInvalidatedModules = undefined;
/******/ 			return true;
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApplyInvalidatedModule(moduleId) {
/******/ 		if (!Object.prototype.hasOwnProperty.call(hotUpdate, moduleId))
/******/ 			hotUpdate[moduleId] = modules[moduleId];
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire("./src/app.js")(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./components/index.scss */ "./src/components/index.scss");

//Import all JS files
const requireAll = r => r.keys().forEach(r);
requireAll(__webpack_require__("./src/components sync recursive \\.js$"));

/***/ }),

/***/ "./src/components sync recursive \\.js$":
/*!***********************************!*\
  !*** ./src/components sync \.js$ ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./00-settings/config.js": "./src/components/00-settings/config.js",
	"./03-elements/script.js": "./src/components/03-elements/script.js",
	"./05-components/layout/layout-base.js": "./src/components/05-components/layout/layout-base.js",
	"./05-components/layout/layout-blank.js": "./src/components/05-components/layout/layout-blank.js",
	"./05-components/layout/layout-emergency.js": "./src/components/05-components/layout/layout-emergency.js",
	"./05-components/layout/layout-popup.js": "./src/components/05-components/layout/layout-popup.js",
	"./05-components/layout/subLayoutLeft.js": "./src/components/05-components/layout/subLayoutLeft.js",
	"./05-components/v3-pat/actions-menu/scripts.js": "./src/components/05-components/v3-pat/actions-menu/scripts.js",
	"./05-components/v3-pat/button-link/scripts.js": "./src/components/05-components/v3-pat/button-link/scripts.js",
	"./05-components/v3-pat/card-charts/scripts.js": "./src/components/05-components/v3-pat/card-charts/scripts.js",
	"./05-components/v3-pat/collapsible-side-panel/scripts.js": "./src/components/05-components/v3-pat/collapsible-side-panel/scripts.js",
	"./05-components/v3-pat/comp-line/scripts.js": "./src/components/05-components/v3-pat/comp-line/scripts.js",
	"./05-components/v3-pat/country-phone/scripts.js": "./src/components/05-components/v3-pat/country-phone/scripts.js",
	"./05-components/v3-pat/data-tables/scripts.js": "./src/components/05-components/v3-pat/data-tables/scripts.js",
	"./05-components/v3-pat/datetime-range-picker/scripts.js": "./src/components/05-components/v3-pat/datetime-range-picker/scripts.js",
	"./05-components/v3-pat/drag-drop/scripts.js": "./src/components/05-components/v3-pat/drag-drop/scripts.js",
	"./05-components/v3-pat/dropdown-categories/scripts.js": "./src/components/05-components/v3-pat/dropdown-categories/scripts.js",
	"./05-components/v3-pat/dropzone/dropzone.js": "./src/components/05-components/v3-pat/dropzone/dropzone.js",
	"./05-components/v3-pat/expandable-link/scripts.js": "./src/components/05-components/v3-pat/expandable-link/scripts.js",
	"./05-components/v3-pat/fullscreen-tabs-wrapper/scripts.js": "./src/components/05-components/v3-pat/fullscreen-tabs-wrapper/scripts.js",
	"./05-components/v3-pat/generic-card/scripts.js": "./src/components/05-components/v3-pat/generic-card/scripts.js",
	"./05-components/v3-pat/generic-gallery/scripts.js": "./src/components/05-components/v3-pat/generic-gallery/scripts.js",
	"./05-components/v3-pat/generic-grid/scripts.js": "./src/components/05-components/v3-pat/generic-grid/scripts.js",
	"./05-components/v3-pat/horizontal-toolbar/scripts.js": "./src/components/05-components/v3-pat/horizontal-toolbar/scripts.js",
	"./05-components/v3-pat/hour-picker/scripts.js": "./src/components/05-components/v3-pat/hour-picker/scripts.js",
	"./05-components/v3-pat/input-lasa/scripts.js": "./src/components/05-components/v3-pat/input-lasa/scripts.js",
	"./05-components/v3-pat/input-with-clear/scripts.js": "./src/components/05-components/v3-pat/input-with-clear/scripts.js",
	"./05-components/v3-pat/input-with-list/scripts.js": "./src/components/05-components/v3-pat/input-with-list/scripts.js",
	"./05-components/v3-pat/line-add/scripts.js": "./src/components/05-components/v3-pat/line-add/scripts.js",
	"./05-components/v3-pat/line-details-expand-box/script.js": "./src/components/05-components/v3-pat/line-details-expand-box/script.js",
	"./05-components/v3-pat/location-box/scripts.js": "./src/components/05-components/v3-pat/location-box/scripts.js",
	"./05-components/v3-pat/main-interactive-card/scripts.js": "./src/components/05-components/v3-pat/main-interactive-card/scripts.js",
	"./05-components/v3-pat/menu-bar/scripts.js": "./src/components/05-components/v3-pat/menu-bar/scripts.js",
	"./05-components/v3-pat/multiple-selection-button/scripts.js": "./src/components/05-components/v3-pat/multiple-selection-button/scripts.js",
	"./05-components/v3-pat/panel/confirmation-panel.js": "./src/components/05-components/v3-pat/panel/confirmation-panel.js",
	"./05-components/v3-pat/panel/confirmation-popup.js": "./src/components/05-components/v3-pat/panel/confirmation-popup.js",
	"./05-components/v3-pat/panel/modal-popup.js": "./src/components/05-components/v3-pat/panel/modal-popup.js",
	"./05-components/v3-pat/panel/panel-by-id-notify.js": "./src/components/05-components/v3-pat/panel/panel-by-id-notify.js",
	"./05-components/v3-pat/panel/panel-by-id.js": "./src/components/05-components/v3-pat/panel/panel-by-id.js",
	"./05-components/v3-pat/panel/popup-menu.js": "./src/components/05-components/v3-pat/panel/popup-menu.js",
	"./05-components/v3-pat/panel/sapphire-panel.js": "./src/components/05-components/v3-pat/panel/sapphire-panel.js",
	"./05-components/v3-pat/panel/scripts.js": "./src/components/05-components/v3-pat/panel/scripts.js",
	"./05-components/v3-pat/patient-call-cancel/patient-call-cancel-structure.js": "./src/components/05-components/v3-pat/patient-call-cancel/patient-call-cancel-structure.js",
	"./05-components/v3-pat/patient-call-cancel/patient-call-cancel.js": "./src/components/05-components/v3-pat/patient-call-cancel/patient-call-cancel.js",
	"./05-components/v3-pat/prescription-card/scripts.js": "./src/components/05-components/v3-pat/prescription-card/scripts.js",
	"./05-components/v3-pat/prescription-expandable/scripts.js": "./src/components/05-components/v3-pat/prescription-expandable/scripts.js",
	"./05-components/v3-pat/sapphire-header/scripts.js": "./src/components/05-components/v3-pat/sapphire-header/scripts.js",
	"./05-components/v3-pat/sapphire-popup/scripts.js": "./src/components/05-components/v3-pat/sapphire-popup/scripts.js",
	"./05-components/v3-pat/sapphire-radio-button/scripts.js": "./src/components/05-components/v3-pat/sapphire-radio-button/scripts.js",
	"./05-components/v3-pat/scales/scale-main-structure.js": "./src/components/05-components/v3-pat/scales/scale-main-structure.js",
	"./05-components/v3-pat/scales/toggle-item-control.js": "./src/components/05-components/v3-pat/scales/toggle-item-control.js",
	"./05-components/v3-pat/search-and-select/select-ssd.js": "./src/components/05-components/v3-pat/search-and-select/select-ssd.js",
	"./05-components/v3-pat/search-and-select/ssd-search.js": "./src/components/05-components/v3-pat/search-and-select/ssd-search.js",
	"./05-components/v3-pat/searchable-client-side/scripts.js": "./src/components/05-components/v3-pat/searchable-client-side/scripts.js",
	"./05-components/v3-pat/section-expandable-custom/scripts.js": "./src/components/05-components/v3-pat/section-expandable-custom/scripts.js",
	"./05-components/v3-pat/section-expandable-inside/scripts.js": "./src/components/05-components/v3-pat/section-expandable-inside/scripts.js",
	"./05-components/v3-pat/select-system/scripts.js": "./src/components/05-components/v3-pat/select-system/scripts.js",
	"./05-components/v3-pat/shift-container/scripts.js": "./src/components/05-components/v3-pat/shift-container/scripts.js",
	"./05-components/v3-pat/shift-table/shiftTable.js": "./src/components/05-components/v3-pat/shift-table/shiftTable.js",
	"./05-components/v3-pat/shift-table/shiftTableCard.js": "./src/components/05-components/v3-pat/shift-table/shiftTableCard.js",
	"./05-components/v3-pat/shift-table/shiftTableCardProgress.js": "./src/components/05-components/v3-pat/shift-table/shiftTableCardProgress.js",
	"./05-components/v3-pat/shift-table/shiftTableHover.js": "./src/components/05-components/v3-pat/shift-table/shiftTableHover.js",
	"./05-components/v3-pat/side-menu/scripts.js": "./src/components/05-components/v3-pat/side-menu/scripts.js",
	"./05-components/v3-pat/sidebar/sidebar-structure.js": "./src/components/05-components/v3-pat/sidebar/sidebar-structure.js",
	"./05-components/v3-pat/small-box-selectable/scripts.js": "./src/components/05-components/v3-pat/small-box-selectable/scripts.js",
	"./05-components/v3-pat/spinner-horizontal/scripts.js": "./src/components/05-components/v3-pat/spinner-horizontal/scripts.js",
	"./05-components/v3-pat/spinner-vertical/scripts.js": "./src/components/05-components/v3-pat/spinner-vertical/scripts.js",
	"./05-components/v3-pat/split-button/scripts.js": "./src/components/05-components/v3-pat/split-button/scripts.js",
	"./05-components/v3-pat/ssd-component-block/scripts.js": "./src/components/05-components/v3-pat/ssd-component-block/scripts.js",
	"./05-components/v3-pat/ssd-list-line/scripts.js": "./src/components/05-components/v3-pat/ssd-list-line/scripts.js",
	"./05-components/v3-pat/table-form/scripts.js": "./src/components/05-components/v3-pat/table-form/scripts.js",
	"./05-components/v3-pat/tabs-extended/scripts.js": "./src/components/05-components/v3-pat/tabs-extended/scripts.js",
	"./05-components/v3-pat/tabular-list/scripts.js": "./src/components/05-components/v3-pat/tabular-list/scripts.js",
	"./05-components/v3-pat/tabular-scroll/scripts.js": "./src/components/05-components/v3-pat/tabular-scroll/scripts.js",
	"./05-components/v3-pat/timeline/scripts.js": "./src/components/05-components/v3-pat/timeline/scripts.js",
	"./05-components/v3-pat/trigger-iframe-tooltip/trigger-iframe-tooltip.js": "./src/components/05-components/v3-pat/trigger-iframe-tooltip/trigger-iframe-tooltip.js",
	"./05-components/v3-pat/truncated-content/scripts.js": "./src/components/05-components/v3-pat/truncated-content/scripts.js",
	"./08-pages/clinicianWorkArea.js": "./src/components/08-pages/clinicianWorkArea.js",
	"./08-pages/eSignature.js": "./src/components/08-pages/eSignature.js",
	"./08-pages/remoteAppointment.js": "./src/components/08-pages/remoteAppointment.js",
	"./globals.js": "./src/components/globals.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/components sync recursive \\.js$";

/***/ }),

/***/ "./src/components/00-settings/config.js":
/*!**********************************************!*\
  !*** ./src/components/00-settings/config.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

SapphireWidgets = window.SapphireWidgets = window.SapphireWidgets || {};


/***/ }),

/***/ "./src/components/03-elements/script.js":
/*!**********************************************!*\
  !*** ./src/components/03-elements/script.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component Textarea */
(function($, window, document, SapphireWidgets) {
  
  $(document).ready(function() {
    window.parent.CallTextAreaAutoResize();
  });

  window.CallTextAreaAutoResize = function prepareTextAreaAutoResize(TextAreaId){
    
    if(TextAreaId==undefined){
      var textAreaInput = $('textarea');
    }else{
      var textAreaInput = $('#'+TextAreaId);
    }
    textAreaInput.each(function(){
        $(this).attr('rows',2);
        resizeTextArea($(this));
    });

    textAreaInput.on('input', function(){
      resizeTextArea($(this));
    });
  }

  function resizeTextArea ($textAreaInput) {
    console.log($textAreaInput[0].scrollHeight);
    if($textAreaInput[0].scrollHeight == 0){
      $textAreaInput.css('height', '60px');
    }else{
      $textAreaInput.css('height', $textAreaInput[0].scrollHeight+'px');
    }
  }
})(jQuery, window, document, SapphireWidgets);

/***/ }),

/***/ "./src/components/05-components/layout/layout-base.js":
/*!************************************************************!*\
  !*** ./src/components/05-components/layout/layout-base.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component LayoutBase */
(function($, window, document, SapphireWidgets) {
	var create = function(config) {
		window[config.widgetId] = new LayoutBase(config);
		SapphireWidgets.LayoutBase.widgetId = config.widgetId;
	};

	var openSidebarIframe = function(duration) {
		window[SapphireWidgets.LayoutBase.widgetId].openSidebarIframe(duration);
	};

	var closeSidebarIframe = function(duration) {
		window[SapphireWidgets.LayoutBase.widgetId].closeSidebarIframe(duration);
	};

	var scrollToElement = function($element, offset = 0) {
		var $targetElement = $element;

		if (!!$targetElement.length) {
			var scrollToOffsetInterval;

			scrollToOffsetInterval = setInterval(function() {
				if (window[SapphireWidgets.LayoutBase.widgetId].getThresholds().secondaryThreshold > 0) {
					clearInterval(scrollToOffsetInterval);

					let targetElementOffsetTop = $targetElement.offset().top;

					const isFixed = $('.LayoutBase-secondary').hasClass('isFixed');
					const isEmergency = !!$('.LayoutBase-emergency').text();

					const headerHeight = $('.SapphireHeader').height();
					const secondaryHeight = $('.LayoutBase-secondary').outerHeight();
					const emergencyHeight = isEmergency ? $('.LayoutBase-emergency').height() : 0;

					//const secondaryFixed = isFixed ? secondaryHeight : secondaryHeight - 26;
					targetElementOffsetTop = targetElementOffsetTop - (headerHeight + secondaryHeight + emergencyHeight);

					$('body, html').scrollTop(targetElementOffsetTop - 16);
				}
			}, 250);
		}
	};

	var LayoutBase = function(config) {
		var _this = this;
		this.layoutBaseRedrawTimer = 0;
		this.hasHeader = config.hasHeader;
		this.isExpandable = config.isExpandable;
		this.isTopWindow = window.top === window.self ? true : false;
		this.$widget = $('#' + config.widgetId);
		this.$wrapper = this.$widget.find('.LayoutBase-Wrapper');
		this.$spacer = this.$widget.find('.LayoutBase-spacer');
		this.$mainMenu = this.$widget.find('.LayoutBase-MainMenu');
		this.$header = this.$widget.find('.LayoutBase-header');
		this.$headerBody = this.$widget.find('.SapphireHeader-body');
		this.$primaryMenu = this.$widget.find('.LayoutBase-primary-menu');
		this.$emergency = this.$widget.find('.LayoutBase-emergency');
		this.$secondary = this.$widget.find('.LayoutBase-secondary');
		this.$secondaryMenu = this.$widget.find('.LayoutBase-secondary-menu');
		this.$iframeSidebar = this.$widget.find('.LayoutBase-iframesidebar');
		this.$headerAdditionalContent = this.$widget.find('.SapphireHeader-additional-content');
		this.$topfixedContent = this.$widget.find('.LayoutBase-topfixedcontent');
		this.$bottomfixedContent = this.$widget.find('.LayoutBase-bottomfixedcontent');
		this.$mainContent = this.$widget.find('.LayoutBase-MainContent');
		this.extraPaddingEmergency = 0;
		this.extraPaddingSecondary = 0;
		this.setupWindowEvents();
		this.$iframeSidebar.append('<div class="lds-ring 1"><div></div><div></div><div></div><div></div></div>');

		$(function() {
			$('body').addClass('LayoutBase');
			if (_this.isTopWindow) {
				$('body').css('overflow-y', 'scroll');
			}
		});

		$(window).load(function() {
			$('body').click();
			$(window).scroll();

			_this.$iframeSidebar.find('.lds-ring').fadeOut();
		});
	};

	LayoutBase.prototype.setupWindowEvents = function() {
		var _this = this;
		var cursorPositon = 0;

		$(window).resize(function() {
			_this.updateThresholds();
			_this.handleOptionalContainers();
			_this.handleLayoutTopPadding();
			_this.handleLayoutBottomPadding();
		});

		$(window).scroll(function() {
			var newPosition = $(window).scrollTop();

			window.clearTimeout(_this.layoutBaseRedrawTimer);
			_this.layoutBaseRedrawTimer = window.setTimeout(function() {
				_this.updateThresholds();
				_this.handleOptionalContainers();
				_this.handleLayoutTopPadding();
				_this.handleLayoutBottomPadding();
				_this.handleManageQueueCard(cursorPositon, newPosition);
				cursorPositon = newPosition;
			}, 100);
		});
	};

	LayoutBase.prototype.handleOptionalContainers = function() {
		/*const scrollTop = $(window).scrollTop();
		const isEmergency = !!$('.LayoutBase-emergency').text();*/
	};

	LayoutBase.prototype.handleLayoutTopPadding = function() {
		var paddingTop = this.contentThreshold + this.extraPaddingEmergency + this.extraPaddingSecondary;
		this.$spacer.stop().animate(
			{
				height: paddingTop,
			},
			0,
			'linear'
		);
		if (this.$topfixedContent.length === 1) {
			this.$topfixedContent.css({
				width: $('.LayoutBase-MainContent').width(),
				top: this.topfixedContentThreshold + 'px',
			});
		}
	};

	LayoutBase.prototype.handleLayoutBottomPadding = function() {
		if (this.$bottomfixedContent.length === 1) {
			if ($('body')[0].scrollHeight > $('body').height()) {
				var bottomFixedHeight = this.$bottomfixedContent.outerHeight(true);
				this.$wrapper.addClass('hasFixedBottom').css('padding-bottom', bottomFixedHeight + 'px');
				this.$bottomfixedContent.css({
					width: $('.LayoutBase-MainContent').outerWidth(true),
				});
			} else {
				this.$wrapper.removeClass('hasFixedBottom').css('padding-bottom', '');
				this.$bottomfixedContent.css({
					width: '',
				});
			}
		}
	};

	LayoutBase.prototype.updateThresholds = function() {
		var mainMenuHeight = this.$mainMenu.outerHeight(true) || 0;
		var headerBodyHeight = this.$headerBody.outerHeight(true) || this.$header.outerHeight(true) || 0;
		var topfixedContentHeight = this.$topfixedContent.outerHeight(true) || 0;
		var primaryMenuHeight = this.$primaryMenu.outerHeight(true) || 0;
		var emergencyHeight = this.$emergency.outerHeight(true) || 0;
		this.topfixedContentThreshold = mainMenuHeight + headerBodyHeight;
		this.contentThreshold = mainMenuHeight + headerBodyHeight + topfixedContentHeight;
		this.emergencyThreshold = mainMenuHeight + headerBodyHeight + topfixedContentHeight + primaryMenuHeight;
		this.secondaryThreshold =
			mainMenuHeight + headerBodyHeight + topfixedContentHeight + primaryMenuHeight + emergencyHeight;
	};

	LayoutBase.prototype.getThresholds = function() {
		return {
			topfixedContentThreshold: this.topfixedContentThreshold,
			contentThreshold: this.contentThreshold,
			emergencyThreshold: this.emergencyThreshold,
			secondaryThreshold: this.secondaryThreshold,
		};
	};

	LayoutBase.prototype.openSidebarIframe = function(duration_in) {
		var duration = duration_in >= 0 ? duration_in : 100;
		this.$iframeSidebar.animate(
			{
				width: '100%',
			},
			duration
		);
		$('body')
			.css('overflow-y', 'scroll')
			.click();
	};

	LayoutBase.prototype.closeSidebarIframe = function(duration_in) {
		var duration = duration_in >= 0 ? duration_in : 100;
		var targetWidth = this.isExpandable ? 40 : 262;
		this.$iframeSidebar.animate(
			{
				width: targetWidth,
			},
			duration
		);
		$('body').css('overflow-y', 'scroll');
	};

	LayoutBase.prototype.handleManageQueueCard = function(cursorPositon, newPosition) {
		const $manageQueue = $('.ManageQueueContainer');

		if ($manageQueue.length) {
			if (newPosition > cursorPositon) {
				$manageQueue.addClass('ManageQueueContainer--closed');
			} else if (newPosition < cursorPositon) {
				$manageQueue.removeClass('ManageQueueContainer--closed');
			}
		}
	};

	SapphireWidgets.LayoutBase = {
		create,
		closeSidebarIframe,
		openSidebarIframe,
		scrollToElement,
	};
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/layout/layout-blank.js":
/*!*************************************************************!*\
  !*** ./src/components/05-components/layout/layout-blank.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component LayoutBlank */
$(function () {
	if (window.frameElement) {
		if (!!$(this.frameElement).closest('.MainInteractiveCard').length) {
			$('.LayoutBlank.Page').addClass('MainInteractiveCard');
		}
	}
});

/***/ }),

/***/ "./src/components/05-components/layout/layout-emergency.js":
/*!*****************************************************************!*\
  !*** ./src/components/05-components/layout/layout-emergency.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function($, window, document, SapphireWidgets) {
	const ForwardPatientComponent = () => {
		const $allOptions = $('.ForwardLocationsContent');
		const $multiple = $('.ForwardLocationsDiv');
		const $single = $('.SingleLocation');

		$('body').mouseup(function(e) {
			const notClickInAllOptions = !$allOptions.is(e.target) && $allOptions.has(e.target).length === 0;
			const notClickInMultiple = !$multiple.is(e.target) && $multiple.has(e.target).length === 0;
			const notClickInSingle = !$single.is(e.target) && $single.has(e.target).length === 0;
			const isOpen = $multiple.is(':visible');

			if (notClickInAllOptions && notClickInMultiple && notClickInSingle && isOpen) {
				$multiple.click();
			}
		});
	};

	SapphireWidgets.LayoutEmergency = {
		ForwardPatientComponent,
	};
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/layout/layout-popup.js":
/*!*************************************************************!*\
  !*** ./src/components/05-components/layout/layout-popup.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component LayoutPopup */
(function($, window, document, SapphireWidgets) {
	var popupWidth;
	var popupMinWidth;
	var popupHeight;
	var popupMinHeight;
	var popupMaxHeight;
	var popupWidthPercentage;
	var layoutPopupResizeTimer;

	var $popup = $('.LayoutPopup');
	var $osPopup = window.parent.$('.os-internal-Popup.os-internal-ui-dialog');
	var $osPopupContent = window.parent.$('.os-internal-ui-dialog-content.os-internal-ui-widget-content');
	var $overlay = window.parent.$('.os-internal-ui-widget-overlay');
	var popupSize;
	var paddingBody;

	const BODY_PADDING_TOP_BOTTOM = 32;

	const create = function(config) {
		SapphireWidgets.LayoutPopup.config = config;
		popupSize = SapphireWidgets.LayoutPopup.config.PopupSize;
		paddingBody = config.noContentPadding ? 0 : BODY_PADDING_TOP_BOTTOM;

		$(function() {
			$('body').addClass('LayoutPopup'); // because datetimerangepicker is attached to body

			if (SapphireWidgets.LayoutPopup.config.isTouch) {
				$popup.addClass('isTouch');
				$('body').addClass('isTouch'); // because select2 is attached to body
			}

			var observer = new MutationObserver(function(mutations) {
				mutations.forEach(function(mutation, index) {
					// Avoid to redraw the dialog if it is one the following popups
					if (
						SapphireWidgets.PopupsToAvoidMutations &&
						SapphireWidgets.PopupsToAvoidMutations.some(e => $(`.${e}`).length)
					) {
						return false;
					}

					redrawDialogWindow();
				});
			});

			observer.observe(document.body, {
				childList: true,
				subtree: true,
				attributes: false,
			});

			$('body').css('visibility', 'hidden');
		});

		$(window).load(function() {
			$(this.frameElement).css({
				width: '100%',
				height: '100%',
			});

			setTimeout(function() {
				resizeDialog();
				resizeContent();
				$('body').css('visibility', 'visible');
			}, 150);

			osAjaxBackend.BindAfterAjaxRequest(SapphireWidgets.LayoutPopup.redrawDialogWindow);
		});

		$(window.parent)
			.off('resize.LayoutPopup')
			.on('resize.LayoutPopup', function() {
				redrawDialogWindow();
			});
	};

	const redrawDialogWindow = function() {
		clearTimeout(layoutPopupResizeTimer);
		layoutPopupResizeTimer = setTimeout(function() {
			resizeDialog();
			resizeContent();
			$('body').css('visibility', 'visible');
		}, 300);
	};

	const resizeDialog = function() {
		if (SapphireWidgets.LayoutPopup.config.hasClose) {
			window.parent.$('.os-internal-ui-dialog-titlebar').show();

			if (window.top._iframePopup != undefined || false) {
				const $closeButton = window.parent.$('.os-internal-ui-dialog-titlebar-close');

				$closeButton.removeAttr('href');
				$closeButton.off('click').on('click', () => window.top._iframePopup.SapphireWidgets.SapphirePopup.close());
			}
		}

		if (window.top.$('body').hasClass('LayoutBase')) {
			window.top.$('body').css({
				overflowY: 'hidden',
			});
		}

		$overlay.width('100%');

		calcWidthPercentage(popupSize, $osPopupContent);

		$osPopup.css({
			left: 'unset',
			top: 'unset',
			height: 'auto',
			minWidth: popupMinWidth + 'px',
			width: popupWidth + 'px',
		});
	};

	const resizeContent = function() {
		var $body = $('.LayoutPopup__body__content');
		var contentScrollTop = $body.scrollTop();

		if (popupSize === 'Small' && $('.daterangepicker:visible').length > 0) {
			// skip the reset of .LayoutPopup__body__content
		} else {
			$body.css({
				height: 'auto',
			});
		}

		let bodyContent = paddingBody
			? $('.LayoutPopup__body__content')[0].scrollHeight
			: $('.LayoutPopup__body__content').height();

		var headerHeight = $('.LayoutPopup__header').innerHeight() || 0;
		var introHeight = $('.LayoutPopup__intro').innerHeight() || 0;
		var bodyHeight = bodyContent || 0;
		var footerHeight = $('.LayoutPopup__footer').innerHeight() || 0;
		var contentHeight = headerHeight + introHeight + bodyHeight + footerHeight + paddingBody;
		var dialogHeight = window.parent.$('.os-internal-Popup.os-internal-ui-dialog').outerHeight();
		const windowHeight = $(window.parent).height();

		if (popupSize === 'Small') {
			var parentHeight = $(window.parent).height();

			if (contentHeight > parentHeight) {
				$osPopupContent.height(parentHeight - 70);
				$body.height($osPopupContent.height() - paddingBody);
			} else {
				$osPopupContent.height(contentHeight);
			}
		} else {
			if (contentHeight < dialogHeight && SapphireWidgets.LayoutPopup.config.isFixedHeight) {
				var forcedBodyHeight = dialogHeight - headerHeight - introHeight - footerHeight - paddingBody;
				$body.height(forcedBodyHeight);
			} else if (contentHeight < dialogHeight) {
				$osPopupContent.height(contentHeight);
				if (contentHeight < popupMinHeight) {
					var diference = popupMinHeight - contentHeight;
					$body.height(bodyHeight + diference);
				}
			} else if (contentHeight >= dialogHeight && SapphireWidgets.LayoutPopup.config.isFixedHeight) {
				var forcedBodyHeight = dialogHeight - headerHeight - introHeight - footerHeight - paddingBody;
				$body.height(forcedBodyHeight);
			} else if (contentHeight >= dialogHeight) {
				if (contentHeight > popupMaxHeight) {
					$osPopupContent.height(popupMaxHeight);
					var forcedBodyHeight = popupMaxHeight - headerHeight - introHeight - footerHeight - paddingBody;
					$body.height(forcedBodyHeight);
				} else {
					$osPopupContent.height(contentHeight);
				}
			} else {
				console.warn('Unexpected combination...');
			}
		}

		// Handle when DateTimeRangePicker is opened
		var dateRangePicker = $('.daterangepicker:visible');
		if (dateRangePicker.length === 1) {
			if (dateRangePicker[0].getBoundingClientRect().bottom > dialogHeight) {
				var difference = dateRangePicker[0].getBoundingClientRect().bottom - dialogHeight;
				var bodyHeight = $('.LayoutPopup__body__content').outerHeight(true);

				$('.LayoutPopup__body__content').height(bodyHeight + difference + paddingBody);
				$osPopupContent.height($('body')[0].scrollHeight);

				const popupTotalHeight = $osPopupContent.height();
				const newContentHeight = $('.LayoutPopup__body').outerHeight(true) + headerHeight + introHeight + footerHeight;

				if (windowHeight < 720) {
					const coords = dateRangePicker[0].getBoundingClientRect();
					var point = window.parent.scrollY + coords.top - coords.height;
					dateRangePicker.addClass('drop-up').css('top', point);
				} else if (windowHeight < 980 && newContentHeight > popupTotalHeight) {
					$osPopupContent.css({
						maxHeight: newContentHeight + 'px',
					});
				}
			}
		}

		$body.scrollTop(contentScrollTop);
	};

	const increaseHeight = function(diference) {
		$osPopupContent.height($osPopupContent.height() + diference);
	};

	const scrollToElement = function($element) {
		var $targetElement = $element;
		if (!!$targetElement.length) {
			var scrollToOffsetInterval;
			scrollToOffsetInterval = setInterval(function() {
				clearInterval(scrollToOffsetInterval);
				var headerHeight = $('.LayoutPopup__header').outerHeight(true) || 0;
				var introHeight = $('.LayoutPopup__intro').outerHeight(true) || 0;
				var currentBodyScroll = $('.LayoutPopup__body__content')[0].scrollTop || 0;
				var targetElementOffsetTop = $targetElement.offset().top - headerHeight - introHeight + currentBodyScroll - 20;
				$('.LayoutPopup__body__content').scrollTop(targetElementOffsetTop);
			}, 250);
		}
	};

	const calcWidthPercentage = () => {
		const windowHeight = $(window.parent).height();
		const windowWidth = $(window.parent).width();

		if (popupSize === 'Small') {
			let percentage = 0.33;

			if (windowWidth <= 1024) percentage = 0.5;
			else if (windowWidth > 1024 && windowWidth <= 1440) percentage = 0.4;

			popupWidth = parseInt(windowWidth * percentage);
			popupMinWidth = 400;
		} else if (popupSize === 'Medium') {
			if (windowWidth <= 1024) popupWidthPercentage = 0.8;
			else {
				switch (SapphireWidgets.LayoutPopup.config.PopupWidth) {
					case 'XSmall':
						popupMinWidth = 200;
						popupWidthPercentage = 0.2;
						break;
					case 'Small':
						popupMinWidth = 300;
						popupWidthPercentage = 0.3;
						break;
					case 'Medium':
						popupMinWidth = 700;
						popupWidthPercentage = 0.6;
						break;
					default:
						popupMinWidth = 700;
						popupWidthPercentage = 0.7;
				}

				popupWidthPercentage = SapphireWidgets.LayoutPopup.config.isTouch ? 0.8 : popupWidthPercentage;
			}

			popupWidth = parseInt(windowWidth * popupWidthPercentage);
			popupMinHeight = 100;
			popupMaxHeight = SapphireWidgets.LayoutPopup.config.isTouch
				? parseInt(windowHeight * 0.9)
				: parseInt(windowHeight * 0.7);

			if (SapphireWidgets.LayoutPopup.config.isFixedHeight) popupHeight = popupMaxHeight;
			else popupHeight = window.parent.$('.os-internal-Popup.os-internal-ui-dialog').outerHeight();

			$osPopupContent.css({
				maxHeight: popupMaxHeight + 'px',
				minHeight: popupMinHeight + 'px',
				height: popupHeight + 'px',
			});
		} else if (popupSize === 'Large') {
			popupMinWidth = parseInt(windowWidth * 0.8);
			popupMaxHeight = parseInt(windowHeight * 0.9);
		} else if (popupSize === 'Fixed') {
			popupWidth = SapphireWidgets.SapphirePopup.popupWidth;
			popupMinWidth = SapphireWidgets.SapphirePopup.popupWidth;
		}
	};

	SapphireWidgets.LayoutPopup = {
		create,
		resizeDialog,
		resizeContent,
		increaseHeight,
		redrawDialogWindow,
		scrollToElement,
	};
})(jQuery, window, document, SapphireWidgets);

$(window).unload(function() {
	if (!!$('.LayoutPopup').length) {
		window.top.$('body').css({
			overflowY: 'scroll',
		});
	}
});


/***/ }),

/***/ "./src/components/05-components/layout/subLayoutLeft.js":
/*!**************************************************************!*\
  !*** ./src/components/05-components/layout/subLayoutLeft.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component SubLayoutLeft */
(function($, window, document, SapphireWidgets) {
	const create = function() {};

	SapphireWidgets.SubLayoutLeft = {
		create,
	};
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/actions-menu/scripts.js":
/*!*********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/actions-menu/scripts.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component ActionsMenu */
(function($, window, SapphireWidgets) {
	var create = function(config) {
		var $triggerElement = $('#' + config.triggerElement);
		var $contentElement = $('#' + config.contentElement);

		if ($contentElement.text().length < 1) {
			$triggerElement.hide();
		}

		$(function() {
			// inside a document ready due to sapphire popup binded events
			window.setTimeout(function() {
				var position = config.position;
				if (config.locale === 'AR') {
					switch (config.position) {
						case 'right':
							position = 'left';
							break;
						case 'left':
							position = 'right';
							break;
						case 'bottom-left':
							position = 'bottom-right';
							break;
						case 'bottom-right':
							position = 'bottom-left';
							break;
						case 'top-left':
							position = 'top-right';
							break;
						case 'top-right':
							position = 'top-left';
							break;
					}
				}
				$triggerElement.tooltipster({
					content: $('<section/>').append($contentElement.clone(true, true)),
					trigger: config.triggerEvent,
					position: position,
					maxWidth: config.maxWidth,
					theme:
						'tooltipster-location--' +
						config.location +
						' ActionsMenu-tooltip Padding--' +
						config.padding +
						' Border--' +
						config.border,
				});
				$contentElement.remove();
			}, 500);
		});
	};

	SapphireWidgets.ActionsMenu = {
		create,
	};
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/button-link/scripts.js":
/*!********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/button-link/scripts.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component ButtonLink */
(function($, window, SapphireWidgets) {
	const create = config => {
		$(document).ready(function() {
			const $widget = $(`#${config.widgetId} .ButtonClick`);

			$widget.off('click').on('click', function(e) {
				const _target = $(e.target);

				if (_target.closest('.ButtonClick.click').length == 0) {
					$('.ButtonClick.click').removeClass('click');
					$(this).addClass('click');
				}
			});
		});
	};

	SapphireWidgets.ButtonLink = { create };
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/card-charts/scripts.js":
/*!********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/card-charts/scripts.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component CardCharts */
SapphireWidgets.CardChartsPopup = () => {
	$(document).ready(function() {
		window['CardChartsScroll'] = {};
		const isInsideIframe = window.frameElement != undefined || false;

		let $component = $('.CardCharts');
		let $header = $component.find('.CardCharts__Header');
		let $content = $component.find('.CardCharts__Content');
		let $properties = $component.find('.CardCharts__Properties');
		let $headerDiv = $component.find('.CardCharts__HeaderChart > div');
		let $fakeColumns = $('.FakeColumns');
		let $bodyContent = $('.LayoutPopup__body');

		if (isInsideIframe && !$fakeColumns.length) {
			$headerDiv.append(`<div class='FakeColumns'></div>`);
		}

		if (isInsideIframe) {
			$fakeColumns = $('.FakeColumns');

			$content.on('scroll', () => {
				clearTimeout(window['CardChartsScroll'].scrollFinished);
				window['CardChartsScroll'].scrollFinished = setTimeout(function() {
					if ($content.scrollTop() > 0) $header.addClass('ShadowMedium');
					else $header.removeClass('ShadowMedium');
				}, 50);
			});
		}

		$(window).resize(function() {
			$component = $('.CardCharts');
			$header = $component.find('.CardCharts__Header');
			$content = $component.find('.CardCharts__Content');
			$properties = $component.find('.CardCharts__Properties');
			$fakeColumns = $('.FakeColumns');
			$bodyContent = $('.LayoutPopup__body');

			let headerTitleHeight = 63;
			const headerPropertiesHeight = 56;

			const $charts = $content.find('.CardCharts__Charts .OSChart');

			$charts.each(function() {
				const $chart = $(this);

				const newWidth = $content.width() - $properties.width() + 40;
				$chart.highcharts().setSize(newWidth, $chart.height());
			});

			if (isInsideIframe) {
				const timeoutHeight = setTimeout(() => {
					const $headerTitle = $component.find('.CardCharts__HeaderTitle');

					headerTitleHeight = $headerTitle.length ? $headerTitle.outerHeight() : headerTitleHeight - 6;

					const newHeight = $(window.frameElement).height() - headerTitleHeight;

					$fakeColumns.css('height', `${newHeight + headerPropertiesHeight}px`);
					$content.css('height', `${newHeight - headerPropertiesHeight}px`);

					clearTimeout(timeoutHeight);
				}, 500);
			}
		});

		// See MutationObserver (LayoutPopup)
		SapphireWidgets.PopupsToAvoidMutations = ['ChartsPopup'];
	});
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/collapsible-side-panel/scripts.js":
/*!*******************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/collapsible-side-panel/scripts.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component CollapsibleSidePanel */
(function($, window, SapphireWidgets) {
	class CollapsibleSidePanel {
		constructor(config) {
			this.options = {
				...config,
			};

			this.onComponentInit();
		}

		openCloseSidePanel(toOpen) {
			if (toOpen) {
				this.$content.css('display', 'grid');

				setTimeout(() => {
					this.$component.addClass('CollapsibleSidePanel--open');
				}, 50);
			} else {
				this.$component.removeClass('CollapsibleSidePanel--open');

				setTimeout(() => {
					$('.CollapsibleSidePanel__Content').css('display', 'none');
				}, 350);
			}
		}

		onComponentInit() {
			this.$component = $(`#${this.options.widgetId}`);
			this.$header = this.$component.find('.CollapsibleSidePanel__Header');
			this.$content = this.$component.find('.CollapsibleSidePanel__Content');
			this.$counter1 = this.$component.find('.CollapsibleSidePanel__Title span.Counter');
			this.$counter2 = this.$component.find('.CollapsibleSidePanel__PanelTitle span.Counter');
			this.$panelContent = this.$component.find('.CollapsibleSidePanel__PanelContent');
			this.$close = this.$component.find('.CollapsibleSidePanel__PanelHeader .icon');
			this.$closeEventLink = this.$component.find('.CollapsibleSidePanel__PanelHeader .PanelCloseButton');

			this.$header.on('click', () => this.openCloseSidePanel(true));
			this.$close.on('click', () => {
				this.openCloseSidePanel(false);

				this.$closeEventLink.click();

				if ($('.PanelContentEmpty').length) {
					SapphireWidgets.CollapsibleSidePanel.close(this.options.widgetId, true);
				}
			});

			if (this.options.isAutoCounter) {
				calculateCounter(this.$panelContent, this.$counter1, this.$counter2);

				this.$counter1.removeClass('Hidden');
				this.$counter2.removeClass('Hidden');
			}

			const hasEmptyMessage = this.$panelContent.find('.CollapsibleEmptyMessage');
			const contentToVerify = hasEmptyMessage.length ? this.$panelContent.find('>:first-child') : this.$panelContent;

			if (this.options.hideWhenEmpty && !contentToVerify.text()) {
				this.$component.hide();
			}

			//Diogo Ribeiro - it seems we only need margins when we show the header
			if(!this.options.hideHeader) {
				$(document).ready(function() {
					$('.CollapsibleSidePanel:visible').addClass('MultiMarginTopSmall');
					$('.CollapsibleSidePanel:visible:first').addClass('MultiMarginTopLarge');
				});
			}
			
		}
	}

	const calculateCounter = (panelContent, counter1, counter2) => {
		let total = 0;
		const counters = panelContent.find('.ExapandablePlaceholder.Counter');

		counters.each(function() {
			total += +$(this).text();
		});

		counter1.text(total);
		counter2.text(total);

		if (total === 0) counter2.addClass('ColorLightGreyBG');
	};

	const updateCounter = (widgetId, counter) => {
		this.$component = $(`#${widgetId}`);
		this.counter1 = this.$component.find('.CollapsibleSidePanel__Title span.Counter');
		this.counter2 = this.$component.find('.CollapsibleSidePanel__PanelTitle span.Counter');

		this.counter1.text(counter);
		this.counter2.text(counter);

		if (+counter === 0) this.counter2.addClass('ColorLightGreyBG');
	};

	const close = (widgetId, hideHeader, updateCounter) => {
		this.$component = $(`#${widgetId}`);

		if (!this.$component.hasClass('CollapsibleSidePanel')) {
			this.$component = $(`#${widgetId}`).find('.CollapsibleSidePanel');
		}

		if (hideHeader) {
			this.$component.addClass('CollapsibleSidePanel--headerHidden');
		}

		this.$component.removeClass('CollapsibleSidePanel--open');

		$('.CollapsibleSidePanel:visible').removeClass('MultiMarginTopSmall');
		$('.CollapsibleSidePanel:visible:first').removeClass('MultiMarginTopLarge');
	};

	const checkEmpty = widgetId => {
		this.$component = $(`#${widgetId}`).find('.CollapsibleSidePanel');
		this.$panelContent = this.$component.find('.CollapsibleSidePanel__PanelContent');
		this.$counter1 = this.$component.find('.CollapsibleSidePanel__Title span.Counter');
		this.$counter2 = this.$component.find('.CollapsibleSidePanel__PanelTitle span.Counter');
		this.$emptyMessage = this.$component.find('.CollapsibleEmptyMessage');

		this.$emptyMessage.show();

		calculateCounter(this.$panelContent, this.$counter1, this.$counter2);
	};

	const create = config => (window[config.widgetId] = new CollapsibleSidePanel(config));

	SapphireWidgets.CollapsibleSidePanel = { create, close, updateCounter, checkEmpty };
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/comp-line/scripts.js":
/*!******************************************************************!*\
  !*** ./src/components/05-components/v3-pat/comp-line/scripts.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component CompLine */
(function($, window, SapphireWidgets) {
	function SectionCompline() {
		var that = this;

		// Object to save stats
		var previewstat = [];

		// set click events
		function clickEvents(ob) {
			// store querys in a single var
			var holder = $(ob).closest('.CompLine');
			var Section = $(ob).closest('.CompLineExpandable');
			var SectionContent = Section.children('.CompLine_Expand');

			// get id
			var id = holder.attr('id');

			var tempHeight = 0;

			// has class expanded
			if (Section.hasClass('expanded')) {
				// Calc and set a fixed height, during this process, transitions are disabled
				SectionContent.addClass('noTransition');
				SectionContent.height(SectionContent.height());
				SectionContent[0].offsetHeight; // hack to force a repaint
				SectionContent.removeClass('noTransition');

				// Collapse content
				SectionContent.height(0);
				Section.removeClass('expanded');
				SectionContent.css('overflow', 'hidden');

				// Remove class, set height and save state
				previewstat[id]['client'] = false;

				if (holder.hasClass('notRenderInteractions')) {
					holder.find('.CompLine-toggle-interactions').trigger('click');
				}
			} else {
				// Calc and set a fixed height
				SectionContent.height('auto');
				tempHeight = SectionContent.height();
				SectionContent.height(0);
				SectionContent.height(tempHeight);
				SectionContent.css('overflow', 'hidden');

				// remove class, set height and save state
				Section.addClass('expanded');
				previewstat[id]['client'] = true;

				if ($('.Page').hasClass('ie8') || $('.Page').hasClass('ie9')) {
					SectionContent.height('auto');
					SectionContent.css('overflow', 'visible');
				}

				if (holder.hasClass('notRenderInteractions')) {
					holder.find('.CompLine-toggle-interactions').trigger('click');
				}
			}
		}

		// ajax refres function
		that.ajaxRefresh = function() {
			// remove click events
			$('.CompLine_headLine').off();

			// add stop prepagation
			$('.CompLine_headLine input, .CompLine_headLine select, .CompLine_headLine a').click(function(event) {
				event.stopPropagation();
			});

			// add new click events
			$('.CompLine__expandIcon').unbind('click');
			$('.CompLine__expandIcon').on('click', function() {
				clickEvents(this.parentElement);
			});

			// each all sections
			$('.CompLineExpandable').each(function() {
				// if new SectionExpandable then add to previewstat array
				if (
					previewstat[
						$(this)
							.closest('.CompLine')
							.attr('id')
					] == null
				) {
					// add stat on array
					var stat = false;
					// if open
					if ($(this).hasClass('expanded')) {
						stat = true;
					}
					// add row
					previewstat[
						$(this)
							.closest('.CompLine')
							.attr('id')
					] = {
						client: stat,
						server: stat,
					};
				}

				// curent state (ajax state x initial state)
				var curState = false;

				// check if start expandable
				if ($(this).hasClass('expanded')) {
					curState = true;
				}

				// check if ajax != initial server
				if (
					curState !=
					previewstat[
						$(this)
							.closest('.CompLine')
							.attr('id')
					]['server']
				) {
					// curstate
					previewstat[
						$(this)
							.closest('.CompLine')
							.attr('id')
					]['client'] = curState;
					previewstat[
						$(this)
							.closest('.CompLine')
							.attr('id')
					]['server'] = curState;
				} else {
					// has class expanded
					if (
						previewstat[
							$(this)
								.closest('.CompLine')
								.attr('id')
						]['client'] == false &&
						$(this).hasClass('expanded')
					) {
						$(this).removeClass('expanded');
						$(this)
							.children('.CompLine_Expand')
							.height(0);
					} else if (
						previewstat[
							$(this)
								.closest('.CompLine')
								.attr('id')
						]['client'] == true &&
						!$(this).hasClass('expanded')
					) {
						$(this).addClass('expanded');
					}
				}
			});
		};

		// set events
		that.init = function() {
			// each all sections to create array stat
			$('.CompLineExpandable').each(function() {
				// add stat on array
				var stat = false;

				// if open
				if ($(this).hasClass('expanded')) {
					stat = true;
				}

				// add row
				previewstat[
					$(this)
						.closest('.CompLine')
						.attr('id')
				] = {
					client: stat,
					server: stat,
				};
			});

			// add click events
			$('.CompLine__expandIcon').unbind('click');
			$('.CompLine__expandIcon').on('click', function() {
				clickEvents(this.parentElement);
			});

			// add stop prepagation
			$('.CompLine_headLine input, .CompLine_headLine select, .CompLine_headLine a').click(function(event) {
				event.stopPropagation();
			});

			// remove unecessary behaviors

			// event ajax
			osAjaxBackend.BindAfterAjaxRequest(that.ajaxRefresh);
		};
	}

	const create = () => {
		const expandable = new SectionCompline();

		expandable.init();
	};

	SapphireWidgets.CompLine = { create };
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/country-phone/scripts.js":
/*!**********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/country-phone/scripts.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component CountryPhone */
(function($, window, SapphireWidgets) {
	const create = config => {
		const $element = document.querySelector(`#${config.widgetId}`);
		const additionalValidations = config.additionalValidations;

		const countryPhoneInput = window.intlTelInput($element, {
			initialCountry: config.initialCountry,
			preferredCountries: config.preferredCountries,
			separateDialCode: config.separateDialCode,
			nationalMode: config.nationalMode,
			autoPlaceholder: config.autoPlaceholder ? 'polite' : false,
			formatOnDisplay: false,
			utilsScript: '/V3_Pat/js/utils.js',
		});

		const $input = $(`#${config.widgetId}`);

		$input.on('keyup', function(e) {
			if ($input.val() === '+' || $input.val() === '') {
				countryPhoneInput.setCountry(config.initialCountry);
			}
		});

		$input.on('keypress', function(e) {
			const selectedCountry = countryPhoneInput.getSelectedCountryData();
			const filter = additionalValidations.find(i => i.CountryPhoneValidations.CountryCode === selectedCountry.iso2);
			const value = $input.val().trim();

			let isValid = true;

			if (filter) {
				const withouCode = value.replace(`+${selectedCountry.dialCode}`, '');

				isValid = withouCode.trim().length + 1 <= filter.CountryPhoneValidations.PhoneLength;
			}

			if (value === `+${selectedCountry.dialCode}`) {
				$input.val(`+${selectedCountry.dialCode} `);
			}

			return (
				isValid &&
				(e.metaKey || // cmd/ctrl
				e.which <= 0 || // arrow keys
				e.which == 8 || // delete key
					(!value.length && e.key === '+') ||
					/[0-9]/.test(String.fromCharCode(e.which)))
			);
		});

		$element.addEventListener('countrychange', function() {
			onChangeCountry();
		});

		const onChangeCountry = () => {
			const $selectedCountryInput = $(`#${config.selectedCountryInput}`);
			const selectedCountry = countryPhoneInput.getSelectedCountryData();

			$selectedCountryInput.val(selectedCountry.iso2);
			$selectedCountryInput.trigger('change');
		};

		$(document).ready(function() {
			onChangeCountry();
		});
	};

	SapphireWidgets.CountryPhone = {
		create,
	};
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/data-tables/scripts.js":
/*!********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/data-tables/scripts.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() {
	class DataTables {
		constructor(config) {
			this.config = config;
			this.$widget = $(`#${config.widgetId}`);
			this.$table = this.$widget.find('table');
			this.$table.addClass('cell-border compact');
			this.onInit();
		}

		onInit() {
			this.options = {
				...this.config,
				fixedColumns: true,
				info: false,
				ordering: false,
				paging: false,
				scrollCollapse: true,
				scrollX: true,
				searching: false,
			};

			$(() => {
				this.$table.DataTable(this.options);
			});
		}
	}

	const create = config => (window[config.widgetId] = new DataTables(config));

	SapphireWidgets.DataTables = {
		create,
	};
})();


/***/ }),

/***/ "./src/components/05-components/v3-pat/datetime-range-picker/scripts.js":
/*!******************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/datetime-range-picker/scripts.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component DateTimeRangePicker */
(function($, window, document, SapphireWidgets) {
	var allDateTimeRangePickers = [];

	var create = function(config) {
		for (var i = 0; i < allDateTimeRangePickers.length; i++) {
			if (allDateTimeRangePickers[i].config.widgetId === config.widgetId) {
				allDateTimeRangePickers.splice(i, 1);
			}
		}
		window[config.widgetId] = new DateTimeRangePicker(config);
		allDateTimeRangePickers.push(window[config.widgetId]);
	};

	var DateTimeRangePicker = function(config) {
		this.config = config;
		this.currentLocale = config.currentLocale;

		this.$widget = $('#' + config.widgetId);
		this.$widget.addClass('DateTimeRangePicker');
		this.$clear = this.$widget.find('.DateTimeRangePicker-clear');
		this.$label = this.$widget.find('.DateTimeRangePicker-label');

		this.isEmptyHour = false;

		if (this.config.attachToInput) {
			this.$widget.addClass('attachedInput');
			this.$model = this.$widget.find('.DateTimeRangePicker-placeholder input[type="text"]');
			this.$model.attr('tabIndex', -1);
		}

		this.$input = $('#' + config.inputId);

		if (!this.config.allowsTyping) {
			this.$input.prop('readonly', true);
		}

		if (this.currentLocale === 'AR') {
			moment.locale('ar-kw');
		}

		var options = {};
		options.startDate = config.startDate;
		options.singleDatePicker = config.singleDatePicker;
		options.autoApply = config.autoApply;
		options.autoUpdateInput = config.autoUpdateInput;
		options.timePicker = config.timePicker;
		options.timePicker24Hour = config.timePicker24Hour;
		options.timePickerIncrement = config.timePickerIncrement;
		options.showDropdowns = config.hasDropdowns; // Month/Year Picker
		options.drops = config.drops;
		options.opens = config.currentLocale === 'AR' && config.opens != 'center' ? 'left' : config.opens;

		var stringConnection = '[, at]';

		if (config.timePicker) {
			if (!this.config.attachToInput) this.$input.prop('placeholder', 'DD-MM-YYYY HH:MM');

			if (options.timePicker24Hour) {
				this.config.formatInput = `${this.config.systemDateFormat} HH:mm`;
				this.config.formatLabel = this.config.hasYearWhenText
					? 'D MMM YYYY' + stringConnection + ' HH:mm'
					: 'D MMM' + stringConnection + ' HH:mm';
			} else {
				this.config.formatInput = `${this.config.systemDateFormat} hh:mm A`;
				this.config.formatLabel = this.config.hasYearWhenText
					? 'D MMM YYYY' + stringConnection + ' hh:mm A'
					: 'D MMM' + stringConnection + ' hh:mm A';
			}
		} else {
			this.$widget.addClass('onlyDate');

			if (!this.config.attachToInput) this.$input.prop('placeholder', 'DD-MM-YYYY');

			this.config.formatInput = this.config.systemDateFormat;
			this.config.formatLabel = this.config.hasYearWhenText ? 'D MMM YYYY' : 'D MMM';
		}

		if (!config.singleDatePicker) {
			this.$widget.addClass('rangeDates');
		}

		this.config.formatLabel = this.config.hasWeekDayNameWhenText
			? 'ddd[, ]' + this.config.formatLabel
			: this.config.formatLabel;

		options.locale = {
			direction: config.currentLocale === 'AR' ? 'rtl' : 'ltr',
			format: this.config.formatInput,
			cancelLabel: 'Cancel',
			applyLabel: 'Apply',
		};

		if (config.hasTextTrigger) {
			this.$widget.addClass('textTrigger');
		}

		const nulldDates = ['01-01-1900 00:00:00', '1900-01-01 00:00:00'];

		if (config.endDate && !nulldDates.some(i => i === config.endDate)) {
			options.endDate = config.endDate;
		}

		if (config.maxDate && !nulldDates.some(i => i === config.maxDate)) {
			options.maxDate = config.maxDate;
		}

		if (config.minDate && !nulldDates.some(i => i === config.minDate)) {
			options.minDate = config.minDate;
		}

		if (config.DisabledWeekDays) {
			var disabledWeekDays = config.DisabledWeekDays.split(',');
			options.isInvalidDate = function(date) {
				return disabledWeekDays.includes(
					moment(date)
						.day()
						.toString()
				);
			};
		}

		var _this = this;

		this.$input.daterangepicker(options, function(startDate, endDate, label) {
			// after a selection is made
			if (_this.config.attachToInput) {
				let format = '';

				if (_this.config.timePicker) {
					format = `${_this.config.systemDateFormat} HH:mm`;
				}

				if (_this.config.singleDatePicker) {
					if (_this.config.timePicker) _this.$model.val(startDate.format(format));
					else _this.$model.val(startDate.format(_this.config.systemDateFormat));
				} else {
					let start, end;

					if (_this.config.timePicker) {
						start = startDate.format(format);
						end = endDate.format(format);
					} else {
						start = startDate.format(_this.config.systemDateFormat);
						end = endDate.format(_this.config.systemDateFormat);
					}

					_this.$model.val(`${start}  ·  ${end}`);
				}

				_this.$model.trigger('change');
			}

			const initialValue = _this.$input.val();
			const allowsMMYY = _this.config.allowsTyping && _this.config.allowsTypeMMYY && _this.config.singleDatePicker;

			if (allowsMMYY && initialValue.length === 4) {
				_this.picker.setStartDate(moment(`01${initialValue}`, 'DDMMYY'));

				if (_this.config.attachToInput) {
					let format = '';

					if (_this.config.timePicker) format = `${_this.config.systemDateFormat} HH:mm`;
					else format = _this.config.systemDateFormat;

					_this.$model.val(_this.picker.startDate.format(format));
					_this.$model.trigger('change');
				}
			}
		});

		// now we have a proper instance
		this.picker = this.$input.data('daterangepicker');

		this.$calendar = $(this.picker.container);

		if (!!this.config.cssClass) {
			this.$calendar.addClass(this.config.cssClass);
		}

		this.$timeHolder = this.$calendar.find('.calendar-time');
		this.$buttonsHolder = this.$calendar.find('.drp-buttons');

		if (this.config.autoApply) {
			this.$buttonsHolder.hide();
		}

		if (config.isEmptyStartDate) {
			this.clear(false);
		} else if (config.isEmptyStartHour) {
			this.isEmptyHour = true;
			this.updateLabeling();
		} else {
			this.updateLabeling();
		}

		if (config.enabled) {
			this.nativeEvents();
			this.customEvents();
		} else {
			this.$clear.hide();
			this.$input.off('click focus keydown keyup');
		}

		if (this.config.attachToInput) {
			this.handleCustomValidation();
		}
	};

	DateTimeRangePicker.prototype.handleCustomValidation = function() {
		// TO DO
	};

	DateTimeRangePicker.prototype.nativeEvents = function() {
		const _this = this;

		this.$input.on('showCalendar.daterangepicker', function(event, picker) {
			if (_this.config.hasGoToday) {
				_this.$calendar
					.find('.calendar-table thead tr')
					.eq(0)
					.after(
						'<tr><td colspan="7" class="DateTimeRangePicker-calendar-gotoday">' +
							_this.config.goTodayLabel +
							'</td></tr>'
					);
				if (_this.config.drops === 'up') {
					_this.$calendar.css('top', _this.$calendar.offset().top - 24);
				}
			}
			_this.handleViewportPosition();

			if (!_this.config.singleDatePicker) {
				$('.drp-selected').each(function() {
					let text = $(this).text();
					text = text.replace(/-/gi, '·');

					$(this).text(text);
				});
			}
		});

		this.$input.on('show.daterangepicker', function(event, picker) {
			if (_this.config.timePicker && _this.config.hasClearHour) {
				_this.$calendar.find('.calendar-time').append('<span class="DateTimeRangePicker-calendar-clear"></span>');
				if (_this.isEmptyHour) {
					_this.$timeHolder.css('opacity', 0.5);
					_this.$calendar.find('.DateTimeRangePicker-calendar-clear').addClass('disabled');
				} else {
					_this.$timeHolder.css('opacity', 1);
					_this.$calendar.find('.DateTimeRangePicker-calendar-clear').removeClass('disabled');
				}
			}
			_this.handleViewportPosition();
			SapphireWidgets.DateTimeRangePicker.openedWidgetId = _this.config.widgetId;

			if (_this.config.cssClass === 'CalendarPopup' && window.frameElement) {
				const oldBodyHeight = $('body')[0].scrollHeight + 8;
				const calendarSafeHeight = _this.$calendar.outerHeight() + 32;

				const newHeight = oldBodyHeight > calendarSafeHeight ? oldBodyHeight : calendarSafeHeight;

				$('<div class="CalendarPopup__Overlay"></div>').insertAfter(_this.$calendar);

				$(window.frameElement).animate({ minHeight: newHeight });
				$('body').animate({ minHeight: newHeight });
			}
		});

		this.$input.on('hide.daterangepicker', function(event, picker) {
			_this.$calendar.find('.DateTimeRangePicker-calendar-clear').remove();
			_this.updateParentIframe();

			if (_this.config.cssClass === 'CalendarPopup' && window.frameElement) {
				$(window.frameElement).css({ minHeight: 'unset' });
				$('body').css({ minHeight: 'unset' });

				$('.CalendarPopup__Overlay').remove();
			}
		});

		this.$input.on('cancel.daterangepicker', function(event, picker) {});

		this.$input.on('outsideClick.daterangepicker', function(event, picker) {});

		this.$input.on('timechanged.daterangepicker', function(event, picker) {
			_this.isEmptyHour = false;
			_this.$timeHolder.css('opacity', 1);
			if (_this.config.hasClearHour) {
				_this.$calendar.find('.calendar-time').append('<span class="DateTimeRangePicker-calendar-clear"></span>');
			}
			if (_this.config.autoApply) {
				_this.$clear.removeClass('disabled');
				_this.updateLabeling();
				_this.sendNotification();
			}
		});

		this.$input.on('clickDate.daterangepicker', function(event, picker) {
			if (_this.config.autoApply) {
				_this.$clear.removeClass('disabled');
				_this.updateLabeling();
				_this.sendNotification();
			}
		});

		this.$input.on('apply.daterangepicker', function(event, picker) {
			
			if(_this.config.autoApply && _this.config.attachToInput){
				_this.$model.trigger('change');//same fix as below for when the date is the same/today, when input is attached it seems we also need this extra step
			}
			_this.$input.trigger('change'); // Fix to call the change when the date is the same/today
			_this.$clear.removeClass('disabled');
			_this.updateLabeling();
			_this.sendNotification();
		});
	};

	DateTimeRangePicker.prototype.customEvents = function() {
		var _this = this;
		this.$label.off('click').on('click', function(event) {
			_this.picker.toggle();
		});
		this.$clear.off('click').on('click', function(event) {
			_this.clear();
			_this.picker.hide();
		});
		this.$calendar.on('click', '.DateTimeRangePicker-calendar-clear', function() {
			if (_this.config.timePicker24Hour) {
				_this.$calendar
					.find('.hourselect')
					.val('0')
					.trigger('change');
			} else {
				_this.$calendar
					.find('.hourselect')
					.val('12')
					.trigger('change');
			}
			_this.$calendar
				.find('.minuteselect')
				.val('0')
				.trigger('change');
			_this.$calendar
				.find('.ampmselect')
				.val('AM')
				.trigger('change');
			_this.isEmptyHour = true;
			_this.$timeHolder.css('opacity', 0.5);
			_this.$calendar.find('.DateTimeRangePicker-calendar-clear').addClass('disabled');
		});
		this.$calendar.on('click', '.DateTimeRangePicker-calendar-gotoday', function() {
			_this.picker.setStartDate(moment());
			_this.picker.setEndDate(moment());

			_this.picker.hide();

			if (!_this.config.autoUpdateInput || _this.config.hasTextTrigger || _this.config.attachToInput) {
				_this.updateLabeling();
				_this.$model && _this.$model.trigger('change');
			}

			_this.sendNotification();
		});

		if (this.config.attachToInput) {
			// Nothing
		} else {
			this.$input.on('click', function() {
				window.setTimeout(function() {
					_this.updateParentIframe();
				}, 50);
			});
		}

		this.$input.on('blur', function(evt) {
			_this.sendNotification();
		});
	};

	DateTimeRangePicker.prototype.updateLabeling = function() {
		var labelMask = this.config.formatLabel;
		var inputMask = this.config.formatInput;

		if (moment(this.picker.startDate).isSame(moment(), 'day')) {
			if (labelMask.includes('D MMM YYYY')) {
				labelMask = labelMask.replace('D MMM YYYY', '[Today,] D MMM YYYY');
			} else if (labelMask.includes('D MMM')) {
				labelMask = labelMask.replace('D MMM', '[Today]');
			}
		}
		if (this.isEmptyHour) {
			labelMask = labelMask.replace('hh:mm A', '[--:--]').replace('HH:mm', '[--:--]');
			inputMask = inputMask.replace('hh:mm A', '[--:--]').replace('HH:mm', '[--:--]');

			if (this.config.hasTextTrigger) {
				this.$label.html(this.config.prefixTextTrigger + this.picker.startDate.format(labelMask));

				if (this.config.timePicker) {
					this.$input.val(this.picker.startDate.format(`${this.config.systemDateFormat} [00:00:00]`));
				} else {
					this.$input.val(this.picker.startDate.format(this.config.systemDateFormat));
				}
			} else {
				this.$input.val(this.picker.startDate.format(`${this.config.systemDateFormat} [00:00:00]`));
			}
		} else {
			if (this.config.hasTextTrigger) {
				this.$label.html(this.config.prefixTextTrigger + this.picker.startDate.format(labelMask));
				this.$input.val(this.picker.startDate.format(inputMask));
			} else {
				if (this.config.attachToInput) {
					if (this.config.singleDatePicker) {
						this.$input.val(this.picker.startDate.format(inputMask));
						if (this.config.timePicker) {
							this.$model && this.$model.val(this.picker.startDate.format(`${this.config.systemDateFormat} HH:mm:ss`));
						} else {
							this.$model && this.$model.val(this.picker.startDate.format(this.config.systemDateFormat));
						}
					} else {
						const startDate = this.picker.startDate.format(inputMask);
						const endDate = this.picker.endDate.format(inputMask);

						this.$input.val(`${startDate}  ·  ${endDate}`);
					}
				} else {
					if (this.config.singleDatePicker) {
						this.$input.val(this.picker.startDate.format(this.config.formatInput));
					} else {
						let startDate = this.picker.startDate.format(this.config.formatInput);
						let endDate = this.picker.endDate.format(this.config.formatInput);

						this.$input.val(`${startDate}  ·  ${endDate}`);
					}
				}
			}
		}
	};

	DateTimeRangePicker.prototype.handleViewportPosition = function() {
		if (
			window.frameElement &&
			($(window.frameElement.parentElement).hasClass('tooltipster-content') ||
				$(window.frameElement.parentElement).hasClass('os-internal-ui-dialog-content'))
		) {
			return;
		}

		if (!this.isInViewport()) {
			var coords = this.$calendar[0].getBoundingClientRect();
			if (this.$calendar.hasClass('drop-up') && this.$calendar[0].getBoundingClientRect().top < 0) {
				var point = window.scrollY + coords.bottom + this.$input.height() + 7;
				this.$calendar
					.removeClass('drop-up')
					.addClass('drop-down')
					.css('top', point);
			} else if (
				!this.$calendar.hasClass('drop-up') &&
				this.$calendar[0].getBoundingClientRect().bottom > (window.innerHeight || document.documentElement.clientHeight)
			) {
				var point = window.scrollY + coords.top - coords.height - this.$input.height() - 7;
				this.$calendar.addClass('drop-up').css('top', point);
			}
		}
	};

	DateTimeRangePicker.prototype.isInViewport = function() {
		var bounding = this.$calendar[0].getBoundingClientRect();
		return (
			bounding.top >= 0 && bounding.bottom <= (window.innerHeight + 5 || document.documentElement.clientHeight + 5)
		);
	};

	DateTimeRangePicker.prototype.clear = function(sendNotification) {
		this.picker.setStartDate(moment());
		this.picker.setEndDate(moment());
		this.isEmptyHour = false;
		this.$clear.addClass('disabled');
		if (this.config.hasTextTrigger) {
			this.$label.html('-- -- --');
		} else {
			this.$input.val('');
		}
		if (sendNotification || sendNotification == undefined) {
			this.sendNotification(false);
		}
	};

	DateTimeRangePicker.prototype.show = function() {
		this.picker.show();
	};

	DateTimeRangePicker.prototype.hide = function() {
		this.picker.hide();
	};

	DateTimeRangePicker.prototype.cancel = function() {
		this.picker.clickCancel();
	};

	DateTimeRangePicker.prototype.sendNotification = function(sendDate) {
		if (this.$widget.hasClass('attachedInput')) {
			this.$input.trigger('change');

			return false;
		}

		if (sendDate || sendDate == undefined) {
			if (this.isEmptyHour) {
				OsNotifyWidget(
					this.config.dateTimeRangePickerFakeNotifyId,
					this.picker.startDate.format(`${this.config.systemDateFormat} [00:00:00]`) + '|' + this.isEmptyHour
				);
			} else {
				if (this.config.timePicker) {
					OsNotifyWidget(
						this.config.dateTimeRangePickerFakeNotifyId,
						this.picker.startDate.format(`${this.config.systemDateFormat} HH:mm:ss`) + '|' + this.isEmptyHour
					);
				} else {
					OsNotifyWidget(
						this.config.dateTimeRangePickerFakeNotifyId,
						this.picker.startDate.format(this.config.systemDateFormat) + '|' + this.isEmptyHour
					);
				}
			}
		} else {
			OsNotifyWidget(this.config.dateTimeRangePickerFakeNotifyId, 'null|true');
		}
	};

	DateTimeRangePicker.prototype.updateParentIframe = function() {
		if (typeof SapphireWidgets.ResizeParentIframe === 'object') {
			SapphireWidgets.ResizeParentIframe.resize();
		}
		if ($('.Page.LayoutPopup').length === 1) {
			SapphireWidgets.LayoutPopup.redrawDialogWindow();
		}
	};

	SapphireWidgets.DateTimeRangePicker = {
		create: create,
		all: function() {
			return allDateTimeRangePickers;
		},
	};
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/drag-drop/scripts.js":
/*!******************************************************************!*\
  !*** ./src/components/05-components/v3-pat/drag-drop/scripts.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component DragDropArea */
(function($, window, document, SapphireWidgets) {
	var dragDropAreaWidget;

	var create = function(config) {
		window[config.dragDropAreaId] = new DragDropArea(config);
		dragDropAreaWidget = window[config.dragDropAreaId];

		$(window).load(function() {
			osAjaxBackend.BindAfterAjaxRequest(SapphireWidgets.DragDropArea.refreshDragDrop);
		});
	};

	var refreshDragDrop = function() {
		try {
			dragDropAreaWidget.setupDraggable();
			dragDropAreaWidget.setupDroppable();
		} catch (error) {
			console.error(error);
		}
	};

	var DragDropArea = function(config) {
		var _this = this;
		this.config = config;
		this.$area = $('#' + config.dragDropAreaId);
		this.$area.css('display', 'block');
		this.skin = config.skin;
		this.fakeNotifyWidgetId = config.fakeNotifyWidgetId;
		this.setupDroppable();
		if (config.sortable) {
			this.setupSortable();
		}
		this.setupDraggable();
		this.attachEvents();
		this.$area.find('.DragDrop-droppable').each(function() {
			_this.handleDroppable($(this));
		});
	};

	DragDropArea.prototype.setupDraggable = function() {
		var _this = this;

		this.$area.find('.DragDrop-draggable').draggable({
			disabled: this.config.disabled,
			containment: this.$area,
			scope: this.config.dragDropAreaId,
			delay: 0,
			scroll: true,
			revert: 'invalid',
			revertDuration: 0,
			connectToSortable: '.DragDrop-droppable',
			stop: function(event, ui) {
				if (ui.helper.hasClass('ui-draggable-dragging')) {
					const $target = _this.$area.find('.ui-droppable.ui-sortable');

					if (_this.skin === 'Teams') {
						//$(ui.helper).hide();
						OsNotifyWidget($target.data('fakenotify'), ui.helper.data('itemtype') + '|' + ui.helper.data('itemid'));
					} else {
						OsNotifyWidget(
							$target.data('fakenotify'),
							_this.$area.find('.DragDrop-draggable-placeholder').index() + '|' + ui.helper.data('itemid')
						);
					}
				}
			},
		});
	};

	DragDropArea.prototype.setupDroppable = function() {
		var _this = this;
		this.$area.find('.DragDrop-droppable').droppable({
			hoverClass: 'hovered',
			addClasses: true,
			disabled: this.config.disabled,
			scope: this.config.dragDropAreaId,
			tolerance: 'pointer',
			drop: function(event, ui) {
				if (_this.skin === 'Teams') {
					$(ui.draggable).hide();
					OsNotifyWidget(
						$(event.target).data('fakenotify'),
						ui.draggable.data('itemtype') + '|' + ui.draggable.data('itemid')
					);
				} else {
					OsNotifyWidget(
						$(event.target).data('fakenotify'),
						_this.$area.find('.DragDrop-draggable-placeholder').index() + '|' + ui.draggable.data('itemid')
					);
				}
			},
		});
	};

	DragDropArea.prototype.setupSortable = function() {
		this.$area.find('.DragDrop-droppable').sortable({
			disabled: this.config.disabled,
			forcePlaceholderSize: true,
			containment: this.$area,
			tolerance: 'pointer',
			revert: 200,
			items: '.DragDrop-droppable-items .DragDrop-draggable',
			placeholder: 'DragDrop-draggable-placeholder',
		});
	};

	DragDropArea.prototype.attachEvents = function() {
		var _this = this;
		this.$area.on('click', '.DragDrop-draggable input', function(evt) {
			evt.stopPropagation();

			const $checkbox = $(evt.currentTarget);
			const $droppable = $checkbox.closest('.DragDrop-droppable');
			const $draggable = $checkbox.closest('.DragDrop-draggable');
			const $action = $draggable.find('.DragDrop-draggable-select-action a');

			$action.trigger('click');

			if ($droppable.hasClass('allowMultiple')) {
				if ($checkbox.prop('checked')) {
					//$checkbox.prop('checked', false);
					$draggable.addClass('selected');
				} else {
					//$checkbox.prop('checked', true);
					$draggable.removeClass('selected');
				}

				//_this.handleDroppable($droppable);
			}
		});

		this.$area.on('click', '.DragDrop-draggable-select-action a', function(evt) {
			evt.stopPropagation();
		});
	};

	DragDropArea.prototype.handleDroppable = function($droppable) {
		if ($droppable.hasClass('allowMultiple')) {
			var $actions = $droppable.find('.DragDrop-droppable-intro');
			var chkSelected = $droppable.find('input[type="checkbox"]:checked').length;
			if (chkSelected > 0) {
				$actions.find('a, button').attr('disabled', false);
			} else {
				$actions.find('a, button').attr('disabled', true);
			}
		} else {
			$droppable.find('input[type="checkbox"]').prop('disabled', true);
		}
	};

	SapphireWidgets.DragDropArea = {
		create: create,
		refreshDragDrop: refreshDragDrop,
	};
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/dropdown-categories/scripts.js":
/*!****************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/dropdown-categories/scripts.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component DropdownCategories */
(function ($, window, SapphireWidgets) {
	function optGroupSetValue(selectId, inputBoxId, buttonId) {
		var v = document.getElementById(selectId).value;
		$('#' + inputBoxId).val(v);
		$('#' + selectId + ' option[selected]').removeAttr('selected');

		if (v != -1) {
			$('#' + selectId + ' option[value="' + v + '"]').attr('selected', 'selected');
		}

		$('#' + buttonId).click();
		$('#s2id_' + selectId).removeClass('select2-container-active');
	}

	function OsCustomValidatorOptGroup(a, b) {
		var _e = $('#' + a.controltovalidate);
		var isValid = _e.find('option[selected]').length;
		var hasSibling_MandatorySelect2 = _e.prev('div.select2-container.Mandatory').length;

		if (hasSibling_MandatorySelect2) {
			if (isValid) {
				_e.prev('div.select2-container.Mandatory').removeClass('Not_Valid');
			} else {
				_e.prev('div.select2-container.Mandatory').addClass('Not_Valid');
			}
		}

		return isValid;
	}

	function addOptGroupValidator(optGroupElementId) {
		OsPage_Validators.push({
			controltovalidate: optGroupElementId,
			enabled: true,
			errormessage: 'Required field!',
			evaluationfunction: 'SapphireWidgets.DropdownCategories.OsCustomValidatorOptGroup',
			initialvalue: '',
			isvalid: true,
		});
	}

	SapphireWidgets.DropdownCategories = {
		optGroupSetValue,
		OsCustomValidatorOptGroup,
		addOptGroupValidator,
	};
})(jQuery, window, SapphireWidgets);

/***/ }),

/***/ "./src/components/05-components/v3-pat/dropzone/dropzone.js":
/*!******************************************************************!*\
  !*** ./src/components/05-components/v3-pat/dropzone/dropzone.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component Dropzone */
(function($, window, document, SapphireWidgets) {
	const create = function(config) {
		window.Dropzone.autoDiscover = false;

		$(document).ready(function() {
			bindEvents(config);

			const myDropzone = new window.Dropzone(config.hiddenInputContainer, {
				...config,
				init: function() {
					let prevFile;

					const filesList = config.filesList ? config.filesList.split(',') : [];

					for (const item of filesList) {
						const mockFile = { name: item, size: 12345678 };

						this.emit('addedfile', mockFile);
						this.emit('complete', mockFile);
						this.files.push(mockFile);

						$(`${config.hiddenInputContainer} .dz-filename`).attr('title', item);

						prevFile = mockFile;
					}

					if (+config.maxFiles === 1 && config.isReplacePrevious) {
						this.on('addedfile', function() {
							if (prevFile !== undefined) {
								this.removeFile(prevFile);
							}
						});
					}

					const $notifyInput = $(`#${config.notifyInputId}`);

					this.on('success', function(file, responseText) {
						prevFile = file;

						$(`#${config.notifyInputId} .dz-filename`).attr('title', file.name);
						$notifyInput.val(responseText);
						$notifyInput.change();
					});

					this.on('error', function(file, responseText) {
						prevFile = file;

						$notifyInput.val(responseText);
						$notifyInput.change();
					});
				},
			});
		});
	};

	const bindEvents = function(config) {
		$(`#${config.widgetId} .UploadMessageClass`).on('click', () => {
			$(`#${config.widgetId} .dz-clickable`).click();
		});
	};

	SapphireWidgets.Dropzone = { create };
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/expandable-link/scripts.js":
/*!************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/expandable-link/scripts.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component ExpandableLink */
(function($, window, SapphireWidgets) {
	const create = widgetID => {
		const $elementWrapper = $(`#${widgetID}`);

		if ($elementWrapper.parent('.ExpandableList').hasClass('HideWhenEmpty')) {
			const text = $elementWrapper.find('.ExpandableLink__Content').text();

			if (text.length === 0) $elementWrapper.parent('.ExpandableList').hide();
		}

		bindEvents(widgetID);
	};

	const bindEvents = widgetID => {
		$(`#${widgetID} .ExpandableLink__Header`).click(() => openClose(`#${widgetID}`));
	};

	const openClose = elementID => {
		// When the expandables are inside a container with class ExpandableLinkGroup, will act like a expandable group
		const $linkGroup = $(elementID).closest('.ExpandableLinkGroup');

		if ($linkGroup.length) {
			const $expandables = $linkGroup.find('.ExpandableLink--expanded').not(elementID);

			$expandables.removeClass('ExpandableLink--expanded');
		}

		$(elementID).toggleClass('ExpandableLink--expanded');

		if (SapphireWidgets.ResizeParentIframe) {
			SapphireWidgets.ResizeParentIframe.resize();
		}
	};

	SapphireWidgets.ExpandableLink = { create };
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/fullscreen-tabs-wrapper/scripts.js":
/*!********************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/fullscreen-tabs-wrapper/scripts.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component FullScreenTabsWrapper */
SapphireWidgets.FullScreenTabsWrapper = () => {
	$(document).ready(function() {
		$('.TabWrapper').click(function() {
			const $wrapper = $(this).closest('.FullScreenTabsWrapper__Tabs');
			$wrapper.find('*').removeClass('Active');

			$(this).addClass('Active');
		});
	});
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/generic-card/scripts.js":
/*!*********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/generic-card/scripts.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component PersonCard */
$(document).ready(function() {
	var PersonCardEvent = function() {
		$('.IsExpandable .PersonCard__headerLeftInfo, .IsExpandable .PersonCard__content')
			.off('click')
			.on('click', function() {
				const $header = $(this).closest('.PersonCard_header');
				const $onCardOpenLink = $header.find('.PersonCard__OnCardOpenLink');
				const $onCardCloseLink = $header.find('.PersonCard__OnCardCloseClick');
				const $content = $header.next();

				const $card = $(this).closest('.PersonCard');

				$content.removeClass('IsExpanded');

				if ($card.hasClass('IsOpen')) {
					$onCardCloseLink.triggerHandler('click');
					$card.removeClass('IsOpen');
				} else {
					$onCardOpenLink.triggerHandler('click');

					$content.addClass('IsExpanded');

					$card.addClass('IsOpen');
				}
			});
	};

	$('.StopPropagation').click(function(event) {
		event.stopPropagation();
	});

	PersonCardEvent();

	osAjaxBackend.BindAfterAjaxRequest(PersonCardEvent);
});


/***/ }),

/***/ "./src/components/05-components/v3-pat/generic-gallery/scripts.js":
/*!************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/generic-gallery/scripts.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component GenericGallery */
(function($, window, document, SapphireWidgets) {
	var create = function(config) {
		window[config.widgetId] = new GenericGallery(config);
	};

	var GenericGallery = function(config) {
		this.config = config;
		this.$widget = $('#' + this.config.widgetId).css('display', 'block');
		this.equalHeight = this.config.equalHeight;
		if (
			this.$widget.find('> .GenericGallery-content > span').length === 1 &&
			this.$widget.find('.GenericGallery-content > span').hasClass('ListRecords')
		) {
			this.$gallery = this.$widget.find('> .GenericGallery-content > span.ListRecords');
		} else {
			this.$gallery = this.$widget.find('> .GenericGallery-content');
		}

		let templateColumn = 'repeat(' + this.config.columnSizing + ', minmax(' + this.config.columnMinWidth + ', 1fr))';

		if (this.config.maxItemsRow > 0) {
			templateColumn = `repeat(${this.config.columnSizing}, minmax(max(${this.config.columnMinWidth}, (100% - (${this.config.maxItemsRow} - 1) * ${this.config.gapColumn}px) / ${this.config.maxItemsRow}), 1fr))`;
		}

		this.$gallery.css({
			display: 'grid',
			gridTemplateColumns: templateColumn,
		});

		this.$galleryItems = this.$gallery.children();
		this.$galleryItems.each(function() {
			if (!$(this).hasClass('GenericGallery-item')) {
				$(this).wrap('<div class="GenericGallery-item"></div>');
			}
		});
	};

	SapphireWidgets.GenericGallery = {
		create: create,
	};
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/generic-grid/scripts.js":
/*!*********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/generic-grid/scripts.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component GenericGrid */
(function ($, window, document, SapphireWidgets) {
	var allGenericGrids = [];

	var create = function (config) {
		window[config.widgetId] = new GenericGrid(config);
		allGenericGrids.push(window[config.widgetId]);
	};

	var GenericGrid = function (config) {
		var _this = this;
		this.config = config;
		console.log(this.config);
	};

	SapphireWidgets.GenericGrid = {
		create: create,
	};

})(jQuery, window, document, SapphireWidgets);

/***/ }),

/***/ "./src/components/05-components/v3-pat/horizontal-toolbar/scripts.js":
/*!***************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/horizontal-toolbar/scripts.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component HorizontalToolbar */
(function($, window, SapphireWidgets) {
	const create = config => {
		const $widget = $('#' + config.widgetId);

		$(document).ready(() => init($widget, config));

		if (config.isArrowNavigation) {
			$(window).load(() => {
				const $itemWrapper = $widget.find('.MenuItemWrapper.Active');
				if ($itemWrapper.length) {
					$itemWrapper[0].scrollIntoView({
						behavior: 'auto',
						block: 'end',
					});
				}
			});
		}
	};

	const init = ($widget, config) => {
		if (config.isArrowNavigation) {
			handleArrows($widget);

			const $toolbarItems = $widget.find('.Toolbar__Items');
			const $listItems = $widget.find('.Toolbar__Items .ListRecords');
			const $btnRight = $widget.find('.Toolbar__rightBtn');
			const $btnLeft = $widget.find('.Toolbar__leftBtn');

			$toolbarItems.scroll(() => handleArrows($widget));

			$btnRight.click(function() {
				var currentScroll = $toolbarItems.scrollLeft();
				var maxScrolll = $listItems.width() - $toolbarItems.width();
				var sideWidth = maxScrolll - 50;
				$toolbarItems.scrollLeft(currentScroll + 50);

				if (currentScroll == sideWidth) $btnRight.addClass('Disabled');
				if (currentScroll != 50) $btnLeft.removeClass('Disabled');
			});

			$btnLeft.click(function() {
				var currentScroll = $toolbarItems.scrollLeft();
				var maxScrolll = $listItems.width() - $toolbarItems.width();
				var sideWidth = maxScrolll - 50;
				$toolbarItems.scrollLeft(currentScroll - 50);

				if (currentScroll != sideWidth) $btnRight.removeClass('Disabled');
				if (currentScroll == 50) $btnLeft.addClass('Disabled');
			});

			$(window).on('resize.toolbar', () => handleArrows($widget));
		} else {
			handleResize($widget);
			bindEventsClick($widget);

			$(window).on('resize.toolbar', () => handleResize($widget));

			window.addEventListener('ToolbarFixed', () => handleResize($widget), false);
		}
	};

	handleArrows = $widget => {
		const $toolbarItems = $widget.find('.Toolbar__Items');
		const $listItems = $widget.find('.Toolbar__Items .ListRecords');
		const $btnRight = $widget.find('.Toolbar__rightBtn');
		const $btnLeft = $widget.find('.Toolbar__leftBtn');

		let currentScroll = $toolbarItems.scrollLeft();
		let menuWidth = $listItems.width();
		let externalWidth = $toolbarItems.width();
		var maxScrolll = menuWidth - externalWidth;

		if (externalWidth > menuWidth) {
			$btnLeft.hide();
			$btnRight.hide();

			$widget.find('.Toolbar_container').addClass('Toolbar_container--noarrows');
		} else {
			$btnLeft.show();
			$btnRight.show();

			$widget.find('.Toolbar_container').removeClass('Toolbar_container--noarrows');
		}

		if (currentScroll === 0) $btnLeft.addClass('Disabled');
		else $btnLeft.removeClass('Disabled');

		if (currentScroll >= maxScrolll) $btnRight.addClass('Disabled');
		else $btnRight.removeClass('Disabled');
	};

	handleResize = $widget => {
		let itemsTotal = 0;
		let hasItemsHidden = false;

		const $listItems = $widget.find('.Toolbar__Items .ListRecords');
		$listItems.find('> a[ui]').css('display', 'none');

		const menuWidth = $widget.find('.Toolbar__Items').outerWidth(true);

		$listItems.find('a[ui]').each(function() {
			itemsTotal += parseInt($(this).outerWidth(true), 10);

			if (itemsTotal + 90 < menuWidth) {
				$(this).css('display', 'block');
			} else {
				hasItemsHidden = true;

				return false;
			}
		});

		if (hasItemsHidden && !$listItems.find('.Toolbar__MoreOptions').length) {
			$widget
				.find('.Toolbar__MoreOptions')
				.clone()
				.css('display', 'block')
				.appendTo($listItems);

			hasItemsHidden = false;
		}

		const $optionsList = $widget.find('.Toolbar__Items .Toolbar__MoreOptionsList');

		$listItems.find('.Toolbar__MoreOptions').css('display', $optionsList.length ? 'block' : 'none');

		const $hiddenItems = $listItems.find('> a[ui]').filter(function() {
			return $(this).css('display') == 'none';
		});

		$optionsList.empty();

		const hasNotificationHidden = $hiddenItems.find('.MenuItemWrapper_Badge:not(:empty)').length !== 0;
		const $trigger = $widget.find('.Toolbar__Items .Toolbar__MoreOptionsIcon');

		if (hasNotificationHidden) $trigger.addClass('Toolbar__MoreOptionsIcon--notification');
		else $trigger.removeClass('Toolbar__MoreOptionsIcon--notification');

		$hiddenItems
			.clone()
			.css('display', 'block')
			.appendTo($optionsList);
	};

	bindEventsClick = $widget => {
		const $moreOptions = $widget.find('.Toolbar__Items .Toolbar__MoreOptions');
		const $trigger = $widget.find('.Toolbar__Items .Toolbar__MoreOptionsIcon');
		const $optionsList = $widget.find('.Toolbar__MoreOptionsList');

		$trigger.on('click', event => {
			$moreOptions.toggleClass('Toolbar__MoreOptions--open');
			event.stopPropagation();
		});

		$optionsList.on('mousewheel', event => {
			event.stopPropagation();
		});

		$('body').on('mouseup', event => {
			const $target = $(event.target).parents();

			if (!$target.andSelf().is($moreOptions)) {
				$moreOptions.removeClass('Toolbar__MoreOptions--open');
			}
		});
	};

	SapphireWidgets.HorizontalToolbar = {
		create,
	};
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/hour-picker/scripts.js":
/*!********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/hour-picker/scripts.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component HourPicker */
(function($, window, SapphireWidgets) {
	class HourPicker {
		constructor(config) {
			// Options used by jQuery Timerpicker (External Lib)
			this.options = {
				...config,
			};

			SapphireWidgets.HourPicker.allIntances.push(config.widgetId);

			this.onComponentInit();
		}

		isComponentValid() {
			let valid = true;
			let message = `Component HourPicker (${this.options.widgetId}):`;
			let errors = '';

			if (this.$model.length && this.$model.length > 1) {
				errors = `${errors} - Needs one - and just one - Input element.`;
				valid = false;
			}

			if (!this.$model.length && this.$component.find('.HourPicker__Placeholder input').length) {
				errors = `${errors}\n - The Input element must be of type Text.`;
				valid = false;
			}

			if (!valid) console.error(`${message} ${errors}`);

			return valid;
		}

		setComponentPosition() {
			const $widget = $('.ui-timepicker-container');
			const labelLeft = this.$label.offset().left;
			const labelWidth = this.$label.width();
			const labelOuterWidth = this.$label.outerWidth();
			const widgetOuterWidth = $widget.outerWidth();
			const widgetMinWidth = +$widget.css('min-width').replace('px', '');
			const isOutsideWindow =
				labelLeft + labelOuterWidth > $(window).scrollLeft() + $(window).width() - widgetOuterWidth;

			$widget.css({
				left: () => {
					let value = labelLeft - (widgetMinWidth - labelWidth) / 2;

					if (isOutsideWindow) value = labelLeft + labelWidth - widgetOuterWidth;
					else if (value < 0) value = labelLeft;

					return value;
				},
			});
		}

		setElementClass(selector, className) {
			return className ? $(selector).addClass(className) : false;
		}

		defineTimeFormat() {
			let format = [];
			let amPm = '';

			format.push(this.options.is24hFormat ? 'HH' : 'hh');
			if (this.options.showMinutes) format.push('mm');
			if (this.options.showSeconds) format.push('ss');
			if (!this.options.is24hFormat) amPm = ' p';

			return `${format.join(':')}${amPm}`;
		}

		convertTime12to24(value) {
			const [time, modifier] = value.split(' ');
			let [hours, minutes = '00', seconds = '00'] = time.split(':');

			if (hours === '12') hours = '00';
			if (modifier === 'PM') hours = parseInt(hours, 10) + 12;

			return `${hours}:${minutes}:${seconds}`;
		}

		convertTimeFormatToMask(value = '') {
			return value.replace(/[a-zA-Z]+/g, '--');
		}

		onChangeEvent(value = '') {
			let model = '01-01-1900 00:00:00'; //i.e. null
			let label = this.convertTimeFormatToMask(this.options.timeFormat);

			if (value && !!value.trim()) {
				// This condition is correct, model always uses the 24h format
				model = this.options.is24hFormat ? value : this.convertTime12to24(value);
				label = value;
			}

			if (this.options.isNotifyEnabled) OsNotifyWidget(this.options.hourPickerFakeNotifyId, model);
			if (this.options.isTextTriggerable) this.$label.text(label);

			this.$model.val(model);
			this.$model.change();

			return;
		}

		onComponentInit() {
			this.$component = $(`#${this.options.widgetId}`);
			this.$model = this.$component.find('.HourPicker__Placeholder input[type="text"]');
			this.$input = this.$component.find('.HourPicker__Displayed .HourPicker__InputValue');
			this.$element = this.$input;

			this.options.timeFormat = this.defineTimeFormat();

			if (!this.isComponentValid()) return;
			else {
				const $container = this.$component;

				if (this.options.isTextTriggerable) {
					$container.addClass('HourPicker--textTrigger');

					this.$label = $container.find('.HourPicker__Displayed .HourPicker__LabelValue');
					this.$element = this.$label;

					this.$label.text(this.convertTimeFormatToMask(this.options.timeFormat));

					this.$label.on('click', () => {
						this.$label.timepicker().open();

						this.setComponentPosition();
					});
				}

				if (this.options.isClearable) {
					this.$buttonClear = $container.find('.HourPicker__Displayed .HourPicker__ButtonClear');

					this.$buttonClear.on('click', () => {
						this.$input.val('');
						this.onChangeEvent();
					});
				}

				this.$element.timepicker({
					...this.options,
					change: time => this.onChangeEvent(time ? $().timepicker.formatTime(this.options.timeFormat, time) : null),
				});

				this.setElementClass('.ui-timepicker-container', this.options.currentLocale === 'AR' ? 'rtl' : 'ltr');

				this.$input.prop('readonly', !this.options.isTypeEnabled);
				this.$input.prop('placeholder', this.options.timeFormat);
			}
		}
	}

	const create = config => {
		window[config.widgetId] = new HourPicker(config);
	};

	SapphireWidgets.HourPicker = {
		create,
		allIntances: [],
	};
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/input-lasa/scripts.js":
/*!*******************************************************************!*\
  !*** ./src/components/05-components/v3-pat/input-lasa/scripts.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component InputLASA */
(function() {
	var setupInput = function(config) {
		$('body').off('click', '#' + config.labelId);
		$('body').off('blur change input', '#' + config.inputId);

		$('#' + config.inputId).css('width', '100%');
		$('#' + config.labelId).css('width', '100%');

		$('#' + config.inputId).hide();
		$('#' + config.labelId).show();

		SapphireWidgets.MarkWordsFromList.handlePrompt(config);

		$('body').on('click', '#' + config.labelId, function() {
			$('#' + config.labelId).hide();
			$('#' + config.inputId).show();
			$('#' + config.inputId).focus();
		});

		$('body').on('blur', '#' + config.inputId, function() {
			SapphireWidgets.MarkWordsFromList.handlePrompt(config);
			$('#' + config.inputId).hide();
			$('#' + config.labelId).show();
			window.setTimeout(function() {
				SapphireWidgets.MarkWordsFromList.handlePrompt(config);
				SapphireWidgets.MarkWordsFromList.applyMarking({ target: config.labelId });
			}, 250);
		});

		$('body').on('change input', '#' + config.inputId, function() {
			$('#' + config.labelId).text($('#' + config.inputId).val());
			window.setTimeout(function() {
				SapphireWidgets.MarkWordsFromList.applyMarking({ target: 'page' });
			}, 250);
		});
	};

	var handlePrompt = function(config) {
		if (!$('#' + config.inputId).val().length) {
			$('#' + config.labelId)
				.text($('#' + config.inputId).prop('placeholder'))
				.css('color', '#999');
		} else {
			$('#' + config.labelId)
				.text($('#' + config.inputId).val())
				.css('color', '');
		}
	};

	SapphireWidgets.MarkWordsFromList = SapphireWidgets.MarkWordsFromList = SapphireWidgets.MarkWordsFromList || {};
	SapphireWidgets.MarkWordsFromList.setupInput = setupInput;
	SapphireWidgets.MarkWordsFromList.handlePrompt = handlePrompt;
})();


/***/ }),

/***/ "./src/components/05-components/v3-pat/input-with-clear/scripts.js":
/*!*************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/input-with-clear/scripts.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() {
	class InputWithClear {
		constructor(config) {
			this.config = config;
			this.$widget = $(`#${config.widgetId}`);
			this.$input = this.$widget.find('input[type]');
			this.$clear = this.$widget.find('.InputWithClear-clear');
			this.$notifyLink = this.$widget.find('.InputWithClear-notify-link');
			this.$widgetShield = this.$widget.find('.InputWithClear--shield');
			this.onInit();
		}

		onInit() {
			this.$input.on('keyup', e => {
				if (this.$input.val() !== '') this.$clear.show();
				else this.$clear.show();
			});

			this.$input.on('blur', () => {
				if (this.$input.val() === '') {
					window.setTimeout(() => {
						if ($('.daterangepicker:visible').length === 1) {
							return false;
						}
						this.$clear.hide();
						this.$notifyLink.trigger('click');
					}, 100);
				}
			});
			this.$clear.on('click', () => {
				this.$input.val('');
				this.$clear.hide();
				this.$notifyLink.trigger('click');
			});
			if (this.config.hasShield) {
				window.setTimeout(() => {
					this.$widgetShield.hide();
				}, this.config.shieldTimeout);
				if (this.config.shieldTimeout > 0) {
					this.$widgetShield.on('click', () => {
						this.$clear.hide();
					});
				}
			}
		}
	}

	const create = config => (window[config.widgetId] = new InputWithClear(config));

	SapphireWidgets.InputWithClear = {
		create,
	};
})();


/***/ }),

/***/ "./src/components/05-components/v3-pat/input-with-list/scripts.js":
/*!************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/input-with-list/scripts.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() {
	class InputWithList {
		constructor(config) {
			this.config = config;
			this.$widget = $(`#${config.widgetId}`);
			this.$input = this.$widget.find('input[type]');
			this.$list = this.$widget.find('.InputWithList__List');

			this.$input.val('');

			this.onInit();
		}

		onInit() {
			this.$input.on('keyup', e => {
				// Getting elements again in order to work when this component is cloned (e.g. when using inside ActionsMenu)
				this.$widget = $(`#${this.config.widgetId}`);
				const $input = this.$widget.find('input[type]');
				const $list = this.$widget.find('.InputWithList__List');
				this.$hiddenInput = this.$widget.find('.InputWithList__HiddenInput input');

				if ($input.val().trim() !== '') {
					$list.empty();

					$list.append(`<div><b>Create:</b> ${$input.val()}</div>`);

					if (!$list.is(':visible')) $list.show();
				} else {
					$list.hide();
				}
			});

			this.$list.on('click', e => {
				const $linkNotify = this.$widget.find('.InputWithList-notify-link');
				const $list = this.$widget.find('.InputWithList__List');
				const $input = this.$widget.find('input[type]');

				this.$hiddenInput.val($input.val());
				this.$hiddenInput.change();

				$linkNotify.click();
				$list.hide();
			});
		}
	}

	const create = config => (window[config.widgetId] = new InputWithList(config));

	SapphireWidgets.InputWithList = {
		create,
	};
})();


/***/ }),

/***/ "./src/components/05-components/v3-pat/line-add/scripts.js":
/*!*****************************************************************!*\
  !*** ./src/components/05-components/v3-pat/line-add/scripts.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component LineAdd */
(function($, window, SapphireWidgets) {
	const create = function(config) {
		$(window).load(function() {
			setWidth(config.widgetId);
			SapphireWidgets.LineAdd.widgetId = config.widgetId;

			osAjaxBackend.BindAfterAjaxRequest(() => setWidth(config.widgetId));
		});

		$(window).on('resize.LineAdd', () => setWidth(config.widgetId));
	};

	const setWidth = function(widgetId) {
		window.setTimeout(function() {
			const $widget = $(`#${widgetId || SapphireWidgets.LineAdd.widgetId}`);
			const widths = [];

			for (i = 1; i < 8; i++) {
				let maxWidthContent = Math.max.apply(
					null,
					$widget
						.find('.lacol' + i)
						.map(function() {
							return $(this).width();
						})
						.get()
				);

				widths.push(maxWidthContent);
				$widget.find('.lacol' + i).width(maxWidthContent);
			}
		}, 100);
	};

	SapphireWidgets.LineAdd = { create, setWidth };
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/line-details-expand-box/script.js":
/*!*******************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/line-details-expand-box/script.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component LineDetailsExpandBox */
(function($, window, SapphireWidgets) {
	const init = config => {
		$(`#${config.widgetId} + .LineDetailsExpandBox_action`).click(event => {
			event.stopPropagation();
		});
	};

	const create = config => $(document).ready(() => init(config));

	SapphireWidgets.LineDetailsExpandBox = { create };
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/location-box/scripts.js":
/*!*********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/location-box/scripts.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component LocationBox */
SapphireWidgets.LocationBox = function(widgetId) {
	const $component = $(`#${widgetId}`);

	if ($component.hasClass('On')) {
		$('.DisableRoom').each(function() {
			$(this)
				.removeClass('Off')
				.removeClass('On');
			$(this)
				.parent('.RoomBox')
				.css({
					opacity: '1',
				})
				.removeClass('Selected');
		});
	} else {
		$component
			.addClass('On')
			.removeClass('Off')
			.parent('.RoomBox')
			.css({
				opacity: '1',
			})
			.addClass('Selected');

		$('.DisableRoom:not(#' + widgetId + ')').each(function() {
			$(this).addClass('Off');
			$(this).removeClass('On');
		});

		$('.DisableRoom.Off')
			.parent('.RoomBox')
			.css({
				opacity: '0.50',
			})
			.removeClass('Selected');
	}
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/main-interactive-card/scripts.js":
/*!******************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/main-interactive-card/scripts.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component MainInteractiveCard */
(function($, window, document, SapphireWidgets) {
	var allMainInteractiveCards = [];
	var defaultDuration = 300;

	var create = function(config) {
		for (var i = 0; i < allMainInteractiveCards.length; i++) {
			if (allMainInteractiveCards[i].config.widgetId === config.widgetId) {
				allMainInteractiveCards.splice(i, 1);
			}
		}
		window[config.widgetId] = new MainInteractiveCard(config);
		allMainInteractiveCards.push(window[config.widgetId]);

		if (!!!SapphireWidgets.MainInteractiveCard.afterAjaxRequestBinded && !!osAjaxBackend) {
			osAjaxBackend.BindAfterAjaxRequest(function() {
				var allMainInteractiveCards = SapphireWidgets.MainInteractiveCard.all();
				allMainInteractiveCards.forEach(function(element) {
					element.handleHeaderWithAbsoluteButtons();
				});
			});
			SapphireWidgets.MainInteractiveCard.afterAjaxRequestBinded = true;
		}
	};

	var MainInteractiveCard = function(config) {
		var _this = this;
		this.config = config;
		this.isLockedOnClose = false;
		this.isOpen = config.isOpen;
		this.isEnabled = config.isEnabled;
		this.isSelectable = config.isSelectable;
		this.allowOpening = config.allowOpening;
		this.allowMultipleOpen = config.allowMultipleOpen;
		this.emitNotifyOnOpen = config.emitNotifyOnOpen;
		this.hideActionsOnOpen = config.hideActionsOnOpen;
		this.hideCaptionOnOpen = config.hideCaptionOnOpen;
		this.hideTitleOnOpen = config.hideTitleOnOpen;
		this.hideSubTitleOnOpen = config.hideSubTitleOnOpen;
		this.headerHeightWhenOpen = config.headerHeightWhenOpen;
		this.MainInteractiveCardFakeNotifyId = config.mainInteractiveCardFakeNotifyId;

		this.$widget = $('#' + config.widgetId);
		this.$widget.css('display', 'block');
		this.$card = this.$widget.find('> .MainInteractiveCard');
		this.$header = this.$widget.find('> .MainInteractiveCard > .MainInteractiveCard-header');
		this.$headerText = this.$header.find('.MainInteractiveCard-header-text');
		this.$expandIcon = this.$header.find('.MainInteractiveCard-expand-icon');
		this.$body = this.$widget.find('> .MainInteractiveCard > div > .MainInteractiveCard-body');
		this.$actions = this.$widget.find(
			'> .MainInteractiveCard > .MainInteractiveCard-header .MainInteractiveCard-header-actions'
		);
		this.$caption = this.$widget.find(
			'> .MainInteractiveCard > .MainInteractiveCard-header .MainInteractiveCard-header-text-caption'
		);
		this.$title = this.$widget.find(
			'> .MainInteractiveCard > .MainInteractiveCard-header .MainInteractiveCard-header-text-title'
		);
		this.$subTitle = this.$widget.find(
			'> .MainInteractiveCard > .MainInteractiveCard-header .MainInteractiveCard-header-text-subtitle'
		);
		this.$selectTrigger = this.$widget.find(
			'> .MainInteractiveCard > .MainInteractiveCard-header > .MainInteractiveCard-header-selectable > .MainInteractiveCard-header-selectable-trigger'
		);
		this.$selectPlaceholder = this.$widget.find(
			'> .MainInteractiveCard > .MainInteractiveCard-header .MainInteractiveCard-header-selectable-placeholder'
		);
		this.$triggerPlaceholder = this.$widget.find(
			'> .MainInteractiveCard > .MainInteractiveCard-header-triggerAction-placeholder'
		);

		if (this.$triggerPlaceholder.find('a').length === 1) {
			this.$trigger = this.$triggerPlaceholder.find('a');
		}

		if (this.isOpen) {
			this.open(false, -1);
			this.$card.addClass('forceOpen');
		}

		this.$card.addClass(this.headerHeightWhenOpen + 'Header');

		if (this.allowOpening) {
			this.$card.addClass('allowOpening');
		}

		this.attachEvents();

		var observer = new MutationObserver(function(mutations) {
			mutations.forEach(function(mutation, index) {
				_this.handleHeaderWithAbsoluteButtons();
			});
		});

		observer.observe(document.getElementById(config.widgetId), {
			childList: true,
			subtree: true,
			attributes: false,
		});
	};

	MainInteractiveCard.prototype.handleHeaderWithAbsoluteButtons = function() {
		var _this = this;
		if (!!this.$body.find('> div .MainInteractiveCard-absolute-actions').length && this.isOpen) {
			var absoluteActionsWidth = Math.max.apply(
				Math,
				this.$body
					.find('> div .MainInteractiveCard-absolute-actions')
					.map(function() {
						return $(this).outerWidth(true);
					})
					.get()
			);
			var headerMaxWidth = this.$header.width() - absoluteActionsWidth;
			if (headerMaxWidth > 10) {
				this.$headerText.css({
					maxWidth: headerMaxWidth + 'px',
				});
			}
			this.$body
				.find('> div .MainInteractiveCard-absolute-actions .MainInteractiveCard--close')
				.off('click')
				.on('click', function(e) {
					e.preventDefault();
					_this.close();
				});
		}
	};

	MainInteractiveCard.prototype.attachEvents = function() {
		var _this = this;
		this.$header
			.find('.MainInteractiveCard--open:not([disabled])')
			.off('click')
			.on('click', function(e) {
				e.preventDefault();
				_this.open(true);
			});
		this.$header
			.find('.MainInteractiveCard--close')
			.off('click')
			.on('click', function(e) {
				e.preventDefault();
				_this.close();
			});
		if (this.allowOpening) {
			const clickAction = function(evt) {
				if ($(evt.target).hasClass('Button')) {
					// the user clicked on a Button inside the header, nothing to do here
				} else {
					if (_this.isOpen) {
						if (
							_this.$widget.find('iframe').length === 1 &&
							!_this.$widget.find('iframe').hasClass('cke_wysiwyg_frame')
						) {
							// do not close when and iframe exists
						} else if (
							_this.$actions.find('a').length > 0 &&
							_this.$actions.find('.MainInteractiveCard--close').length > 0
						) {
							// do not close when the card has actions
						} else {
							_this.close();
						}
					} else {
						_this.open(true);
					}
				}
			};

			this.$headerText.off('click').on('click', function(e) {
				clickAction(e);
			});
			this.$expandIcon.off('click').on('click', function(e) {
				clickAction(e);
			});
		}
		if (this.isSelectable) {
			this.$selectTrigger.off('click').on('click', function(e) {
				if (_this.$selectPlaceholder.find('a').length === 1) {
					_this.$selectPlaceholder.find('a').click();
				} else {
					console.warn('You need 1 link in this placeholder.');
				}
			});
		}
	};

	MainInteractiveCard.prototype.open = function(sendNotify, duration) {
		var duration = duration || defaultDuration;
		this.isOpen = true;
		this.$card.addClass('isOpen');
		if (this.hideActionsOnOpen) {
			this.$actions.css('display', 'none');
		}
		if (this.hideTitleOnOpen) {
			this.$title.css('display', 'none');
		}
		if (this.hideSubTitleOnOpen) {
			this.$subTitle.find('a').css('display', 'none');
		}
		if (this.hideCaptionOnOpen) {
			this.$caption.css('display', 'none');
		}
		if (this.emitNotifyOnOpen) {
			if (sendNotify) {
				OsNotifyWidget(this.MainInteractiveCardFakeNotifyId, 'open');
			}
			this.$body.css('display', 'block');
		} else if (this.$trigger) {
			this.$trigger.click();
			this.$body.css('display', 'block');
		} else {
			if (duration > 0) {
				this.$body.slideDown(duration);
			} else {
				this.$body.css('display', 'block');
			}
		}
		if (this.$widget.find('iframe').length === 1 && !this.$widget.find('iframe').hasClass('cke_wysiwyg_frame')) {
			var iframeContents = this.$widget.find('iframe').contents();
			iframeContents.find('.MainInteractiveCard-iframe-actions').css('visibility', 'visible');
		} else {
			this.handleHeaderWithAbsoluteButtons();
		}
		if (!this.allowMultipleOpen) {
			allMainInteractiveCards.forEach(item => (item !== this && item.allowOpening ? item.close(duration) : null));
		}
	};

	MainInteractiveCard.prototype.close = function(duration) {
		var self = this;
		var duration = duration || defaultDuration;
		this.isOpen = false;
		this.$card.removeClass('isOpen');
		if (this.$widget.find('iframe').length === 1 && !this.$widget.find('iframe').hasClass('cke_wysiwyg_frame')) {
			this.$widget
				.find('iframe')
				.find('.MainInteractiveCard-iframe-actions')
				.css('visibility', 'hidden');
		}
		this.$body.slideUp(duration, function() {
			if (self.$card.hasClass('forceOpen')) {
				self.$card.removeClass('forceOpen');
			}
		});
		if (this.hideActionsOnOpen) {
			this.$actions.show();
		}
		if (this.hideTitleOnOpen) {
			this.$title.css('display', 'block');
		}
		if (this.hideSubTitleOnOpen) {
			this.$subTitle.find('a').css('display', 'block');
		}
		if (this.hideCaptionOnOpen) {
			this.$caption.css('display', 'block');
		}

		if (this.$header.width() - this.$actions.width() > 10) {
			this.$headerText.css({
				maxWidth: this.$header.width() - this.$actions.width() + 'px',
			});
		}
	};

	MainInteractiveCard.prototype.isOpen = function() {
		return this.isOpen;
	};

	SapphireWidgets.MainInteractiveCard = {
		create: create,
		all: function() {
			return allMainInteractiveCards;
		},
	};
})(jQuery, window, document, SapphireWidgets);

$(window).load(function() {
	if (!!$('.MainInteractiveCard').length) {
		if (!!!SapphireWidgets.MainInteractiveCard.afterAjaxRequestBinded) {
			osAjaxBackend.BindAfterAjaxRequest(function() {
				var allMainInteractiveCards = SapphireWidgets.MainInteractiveCard.all();
				allMainInteractiveCards.forEach(function(element) {
					element.handleHeaderWithAbsoluteButtons();
				});
			});
			SapphireWidgets.MainInteractiveCard.afterAjaxRequestBinded = true;
		}
	}

	setTimeout(function() {
		var allMainInteractiveCards = SapphireWidgets.MainInteractiveCard.all();
		allMainInteractiveCards.forEach(function(element) {
			element.handleHeaderWithAbsoluteButtons();
		});
	}, 1000);
});


/***/ }),

/***/ "./src/components/05-components/v3-pat/menu-bar/scripts.js":
/*!*****************************************************************!*\
  !*** ./src/components/05-components/v3-pat/menu-bar/scripts.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component MenuBar */
SapphireWidgets.MenuBar = function(config) {
	$(function() {
		var $menuWidget = $('#' + config.menuWidget);

		var menuResider = function() {
			var navWidth = 0;
			var availabeEspace = $menuWidget.find('.Menubar_item').width();

			$menuWidget.find('.Menubar_item .MenuItem').each(function() {
				navWidth += $(this).outerWidth(true);
			});

			if (navWidth > availabeEspace) {
				var lastItem = $menuWidget.find('.Menubar_item .MenuItem').last();
				lastItem.attr('data-width', lastItem.outerWidth(true));
				lastItem.prependTo($menuWidget.find('.Menubar__extraContainer'));
				menuResider();
			} else {
				var firstMoreElement = $menuWidget.find('.Menubar__extraContainer .MenuItem').first();
				if (navWidth + firstMoreElement.data('width') < availabeEspace) {
					firstMoreElement.insertAfter($menuWidget.find('.Menubar_item .MenuItem').last());
					menuResider();
				}
			}

			if (!$menuWidget.find('.Menubar__extraContainer').is(':empty')) {
				$menuWidget.find('.Menubar_extraItem').addClass('show');
			} else {
				$menuWidget.find('.Menubar_extraItem').removeClass('show');
			}
		};

		$menuWidget.find('.MenuItem').click(function() {
			if (
				!$(this)
					.parent()
					.hasClass('Menubar__extraContainer')
			) {
				if (!$(this).hasClass('active') && !$(this).hasClass('activeIndicator')) {
					$(this).addClass('active');
					$menuWidget.find('.activeIndicator').addClass('shadow');
					$(this)
						.find('.MenuItem_subItems')
						.toggleClass('show');
				} else if (!$(this).hasClass('active') && $(this).hasClass('activeIndicator')) {
					$(this).addClass('active');
					$(this)
						.find('.MenuItem_subItems')
						.toggleClass('show');
				}
			} else {
				$(this)
					.find('.MenuItem_subItems')
					.toggleClass('show');
			}
		});

		$menuWidget.find('.Menubar_extraItem .icon').click(function() {
			$menuWidget.find('.Menubar__extraContainer ').toggleClass('show');
		});

		$(document).mouseup(e => {
			var $menu = $menuWidget.find('.MenuItem.active');
			var $moreOptions = $menuWidget.find('.Menubar_extraItem');

			// if the target of the click isn't the menu or a descendant of the menu
			if ($menu.length > 0) {
				if (!$menu.is(e.target) && $menu.has(e.target).length === 0) {
					$menu.find('.MenuItem_subItems').removeClass('show');
					$('.activeIndicator').removeClass('shadow');
					$menuWidget.find('.MenuItem.active').removeClass('active');
				}
			}

			if (!$moreOptions.is(e.target) && $moreOptions.has(e.target).length === 0) {
				$moreOptions.find('.Menubar__extraContainer').removeClass('show');
				$('.activeIndicator').removeClass('shadow');
			}
		});

		$(window).on('resize load', function() {
			menuResider();
		});
	});
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/multiple-selection-button/scripts.js":
/*!**********************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/multiple-selection-button/scripts.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component MultipleSelectionButton */
SapphireWidgets.MultipleSelectionButton = function(WrapperId) {
	const $widget = $(WrapperId);
	const $control = $widget.find('input[type="checkbox"]');

	if ($(WrapperId + ' input[type="checkbox"]').is(':disabled')) {
		$widget.addClass('disabled');
	} else {
		$widget.removeClass('disabled');
	}

	if ($(WrapperId + ' input[type="checkbox"]').is(':checked')) {
		$widget.addClass('active');
	} else {
		$widget.removeClass('active');
	}

	$widget.find('input[type="checkbox"]').change(function() {
		const $parent = $(this).parent();

		if ($(this).is(':checked')) $parent.parent().addClass('active');
		else $parent.parent().removeClass('active');
	});

	$widget.find('.MultipleSelectionButton-label').click(function() {
		$control[0].click();

		setTimeout(function() {
			if ($control.is(':checked')) $widget.addClass('active');
			else $widget.removeClass('active');
		}, 10);
	});
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/panel/confirmation-panel.js":
/*!*************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/panel/confirmation-panel.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component ConfirmationPanel3Options ConfirmationPanel same javascript code*/

SapphireWidgets.ConfirmationPanel = {
	isAnyPanelOpened: function() {
		return $('body').hasClass('PanelOpened') && $('.PanelContainer:visible').length;
	},

	togglePanel: function(PanelId) {
		if (!OsValidatorOnSubmit()) return;

		if (!SapphireWidgets.ConfirmationPanel.isAnyPanelOpened()) {
			$('body').addClass('PanelOpened');
			$('#' + PanelId).fadeIn(140);

			setTimeout(function() {
				$('#' + PanelId)
					.find('.PanelContainer')
					.slideToggle(150);
			}, 100);

			if (window.frameElement) {
				SapphireWidgets.RemoteAppointment.setModalMinimized();
			}
		}
	},

	closePanel: function(PanelId) {
		$('body').removeClass('PanelOpened');
		$('#' + PanelId).fadeOut(140);

		setTimeout(function() {
			$('#' + PanelId)
				.find('.PanelContainer')
				.slideUp(150);
		}, 100);
	},

	setPanelBehavior: function() {
		$('.Panel[confirmation-panel-trigger-elementid]').each(function() {
			var this_panel = $(this);
			$('#' + this_panel.attr('confirmation-panel-trigger-elementid') + '')
				.off('click')
				.on('click', function() {
					SapphireWidgets.ConfirmationPanel.togglePanel(this_panel.attr('id'));
					return false;
				});
		});
	},
};

$(document).ready(function() {
	SapphireWidgets.ConfirmationPanel.setPanelBehavior();
	if (osAjaxBackend.EventHandlers.AfterAjaxRequest.toString().indexOf('setPanelBehavior') == -1) {
		osAjaxBackend.BindAfterAjaxRequest(SapphireWidgets.ConfirmationPanel.setPanelBehavior);
	}
});


/***/ }),

/***/ "./src/components/05-components/v3-pat/panel/confirmation-popup.js":
/*!*************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/panel/confirmation-popup.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component ConfirmationPopup */
var _isInIframe = window.frameElement != undefined || false;
SapphireWidgets.ConfirmationPopup = {
	isAnyConfirmationOpened: function() {
		if (_isInIframe) {
			return window.top.$('body').hasClass('confirmation-opened') && window.top.$('.confirm-container:visible').length;
		} else {
			return $('body').hasClass('confirmation-opened') && $('.confirm-container:visible').length;
		}
	},

	toggleConfirm: function(_id, _question, _message, _notifyId, _HasNotifyOnCancel) {
		if (!OsValidatorOnSubmit()) return;

		if (!this.isAnyConfirmationOpened()) {
			var _body = $('body');
			var _bodyJS = document.body;
			if (_isInIframe) {
				_body = window.top.$('body');
				_bodyJS = window.top.document.body;
			}

			_body.addClass('confirmation-opened');

			var _confirmId = 'confirm_' + _id;

			var _container = document.createElement('DIV');
			_container.setAttribute('id', _confirmId);
			_container.setAttribute('class', 'confirm confirm-wb');
			_container.setAttribute('confirm-trigger-elementid', _id);

			var _background = document.createElement('DIV');
			_background.setAttribute('class', 'confirm-background confirm-wb');
			_background.setAttribute('id', 'bg_' + _confirmId);
			_container.appendChild(_background);

			var _confirm = document.createElement('DIV');
			_confirm.setAttribute('class', 'confirm-container confirm-wb');
			_container.appendChild(_confirm);

			var _confirmTitle = document.createElement('DIV');
			_confirmTitle.setAttribute('class', 'confirm-title');
			var _title = document.createTextNode(_question);
			_confirmTitle.appendChild(_title);
			_confirm.appendChild(_confirmTitle);

			var _confirmMsg = document.createElement('DIV');
			_confirmMsg.setAttribute('class', 'confirm-message');

			_confirmMsg.innerHTML = _message; /* Set HTML to render the message HTML tags, similar to the Escape Content set as No. */
			_confirm.appendChild(_confirmMsg);

			var _confirmActions = document.createElement('DIV');
			_confirmActions.setAttribute('class', 'confirm-actions');
			_confirm.appendChild(_confirmActions);

			var _noBtnLnk = document.createElement('A');
			_noBtnLnk.setAttribute('class', 'Button Third MultiMarginRight10');
			_noBtnLnk.setAttribute('cancel-button', 'cancel-button');
			_noBtnLnk.setAttribute('ui', 'ConfirmNo1');
			if (_HasNotifyOnCancel == 'True') {
				if (_isInIframe) {
					_noBtnLnk.setAttribute(
						'onclick',
						'document.getElementById("' +
							'iframe_' +
							_id +
							'").contentWindow.OsNotifyWidget("' +
							_notifyId +
							'","CANCEL"); SapphireWidgets.ConfirmationPopup.closeConfirmPopup("' +
							_confirmId +
							'");'
					);
				} else {
					_noBtnLnk.setAttribute(
						'onclick',
						'OsNotifyWidget("' +
							_notifyId +
							'","CANCEL"); SapphireWidgets.ConfirmationPopup.closeConfirmPopup("' +
							_confirmId +
							'");'
					);
				}
			} else {
				if (_isInIframe) {
					_noBtnLnk.setAttribute(
						'onclick',
						'SapphireWidgets.ConfirmationPopup.closeConfirmPopup("' + _confirmId + '");'
					);
				} else {
					_noBtnLnk.setAttribute(
						'onclick',
						'SapphireWidgets.ConfirmationPopup.closeConfirmPopup("' + _confirmId + '");'
					);
				}
			}

			var _noBtn = document.createTextNode('No');
			_noBtnLnk.appendChild(_noBtn);
			_confirmActions.appendChild(_noBtnLnk);

			var _yesBtnLnk = document.createElement('A');
			_yesBtnLnk.setAttribute('class', 'Button SetAsValid Is_Default');
			_yesBtnLnk.setAttribute('cancel-button', '');
			_yesBtnLnk.setAttribute('ui', 'ConfirmYes1');

			if (_isInIframe) {
				_yesBtnLnk.setAttribute(
					'onclick',
					'document.getElementById("' +
						'iframe_' +
						_id +
						'").contentWindow.OsNotifyWidget("' +
						_notifyId +
						'","OK"); SapphireWidgets.ConfirmationPopup.closeConfirmPopup("' +
						_confirmId +
						'");'
				);
			} else {
				_yesBtnLnk.setAttribute(
					'onclick',
					'OsNotifyWidget("' +
						_notifyId +
						'","OK"); SapphireWidgets.ConfirmationPopup.closeConfirmPopup("' +
						_confirmId +
						'");'
				);
			}
			var _yesBtn = document.createTextNode('Yes');
			_yesBtnLnk.appendChild(_yesBtn);
			_confirmActions.appendChild(_yesBtnLnk);

			_confirm.appendChild(_confirmActions);

			_container.appendChild(_confirm);

			_bodyJS.appendChild(_container);

			if (_isInIframe) {
				window.top.$('#bg_' + _confirmId).fadeIn(140);
				setTimeout(function() {
					window.top
						.$('#' + _confirmId)
						.find('.confirm-container')
						.slideToggle(150);
					window.top.$('#' + _confirmId + ' [cancel-button]').focus();
				}, 100);

				SapphireWidgets.RemoteAppointment.setModalMinimized();
			} else {
				$('#bg_' + _confirmId).fadeIn(140);
				setTimeout(function() {
					$('#' + _confirmId)
						.find('.confirm-container')
						.slideToggle(150);
					$('#' + _confirmId + ' [cancel-button]').focus();
				}, 100);
			}
		}
	},

	closeConfirmPopup: function(_confirmId) {
		$('body').removeClass('confirmation-opened');
		$('body').css('overflow-y', 'scroll');
		$('#bg_' + _confirmId).fadeOut(140);

		setTimeout(function() {
			$('#' + _confirmId)
				.find('.confirm-container')
				.slideUp(150);
			$('#' + _confirmId).remove();
		}, 100);
	},

	create: function(_id, _question, _message, _notifyId, _HasNotifyOnCancel) {
		$(document).ready(function() {
			$('#' + _id)
				.off('click')
				.on('click', function() {
					SapphireWidgets.ConfirmationPopup.toggleConfirm(_id, _question, _message, _notifyId, _HasNotifyOnCancel);
					if (_isInIframe) {
						window.frameElement.setAttribute('menu-id', _id);
						window.frameElement.setAttribute('id', 'iframe_' + _id);
					}
					return false;
				});
		});
	},
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/panel/modal-popup.js":
/*!******************************************************************!*\
  !*** ./src/components/05-components/v3-pat/panel/modal-popup.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* Component ModalPopup */

var _isInIframe = window.frameElement != undefined || false;

SapphireWidgets.ModalPopup = {
	create: function(widgetId) {
		$(document).ready(function() {
			// Use this code to append the component to the root body
			// window.frameElement && $(window.frameElement).closest('.MainInteractiveCard-body').length > 0
			if (false) {} else {
				const $widget = $(`#${widgetId}`);
				const $btnClose = $widget.find('.modalPopup_close');

				if (window.frameElement) {
					const $modalRemoteAppt = window.top.$('.RemoteAppointment');

					if ($modalRemoteAppt.length) {
						const $minimizeModal = $modalRemoteAppt.find('.Minimize');
						$minimizeModal.click();
					}
				}

				$btnClose.click(function() {
					$widget.removeClass('Open');
					$widget.removeClass('showclose');
				});
			}
		});
	},
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/panel/panel-by-id-notify.js":
/*!*************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/panel/panel-by-id-notify.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component PanelByIDNotify */
var panelNotifyWidget;
SapphireWidgets.PanelByIdNotify = {
	isAnyPanelOpenedDeprecated: function() {
		return $('body').hasClass('PanelOpened');
	},
	togglePanelByNotify: function(Id) {
		if (!isAnyPanelOpenedDeprecated()) {
			$('body').addClass('PanelOpened');
			$('#' + Id)
				.parents('.ToggleButton')
				.parent()
				.children('.Panel')
				.fadeIn(140);

			try {
				if (justDragged == false) {
					$('.PanelContainer')
						.css('margin-left', panelMarginLeft)
						.css('left', panelLeft)
						.addClass(panelArrowClass);
				}
			} catch (e) {
				console.log(e);
			}

			setTimeout(function() {
				$('#' + Id)
					.parents('.ToggleButton')
					.parent()
					.children('.Panel')
					.children('.PanelContainer')
					.slideDown(150);
			}, 100);
		} else {
			$('body').removeClass('PanelOpened');
			$('#' + Id)
				.parents('.ToggleButton')
				.parent()
				.children('.Panel')
				.fadeOut(140);
			setTimeout(function() {
				$('#' + Id)
					.parents('.ToggleButton')
					.parent()
					.children('.Panel')
					.children('.PanelContainer')
					.slideUp(150);
			}, 100);
		}
	},
	togglePanelNotifyById: function(Id) {
		$('body').toggleClass('PanelOpened');
		$('#' + Id)
			.parents('.ToggleButton')
			.parent()
			.children('.Panel')
			.fadeToggle(140);

		panelNotifyWidget = $('#' + Id)
			.parents('.ToggleButton')
			.attr('NotifyId');

		setTimeout(function() {
			$('#' + Id)
				.parents('.ToggleButton')
				.parent()
				.children('.Panel')
				.children('.PanelContainer')
				.slideToggle(150);
		}, 100);
	},
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/panel/panel-by-id.js":
/*!******************************************************************!*\
  !*** ./src/components/05-components/v3-pat/panel/panel-by-id.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component PanelByID */
SapphireWidgets.PanelById = {
	isAnyPanelOpenedDeprecated: function() {
		return $('body').hasClass('PanelOpened');
	},

	toggleButton: function(id) {
		const $toggleButton = $(`#${id}`).parents('.ToggleButton').length
			? $(`#${id}`).parents('.ToggleButton')
			: $(`#${id}`);

		$toggleButton.click();
	},

	togglePanelById: function(Id) {
		const $toggleButton = $(`#${Id}`).parents('.ToggleButton');
		const $panel = $toggleButton.parent().children('.Panel');
		const $panelContainer = $panel.children('.PanelContainer');
		const $panelBackground = $panel.children('.PanelBackground');

		if (!this.isAnyPanelOpenedDeprecated()) {
			$('body').addClass('PanelOpened');
			$('body').css('overflow-y', 'hidden');

			$panel.show();
			$panelContainer.slideDown(200);

			try {
				if (typeof justDragged !== 'undefined') {
					if (justDragged == false) {
						$('.PanelByIdNew_PanelContainer')
							.css('margin-left', panelMarginLeft)
							.css('left', panelLeft)
							.addClass(panelArrowClass);
					}
				}
			} catch (e) {
				console.log(e);
			}

			setTimeout(function() {
				$panelBackground.fadeIn(80);

				$toggleButton.click();
			}, 50);
		} else {
			$panelContainer.slideUp(200);

			$panelBackground.fadeOut(80, () => {
				$toggleButton.click();

				$('body').css('overflow-y', 'scroll');
				$('body').removeClass('PanelOpened');

				$panel.hide();
			});
		}
	},
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/panel/popup-menu.js":
/*!*****************************************************************!*\
  !*** ./src/components/05-components/v3-pat/panel/popup-menu.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component PopUpMenu */
SapphireWidgets.PopUpMenu = {
	menuPosition: function(id, Context, Locale) {
		/* Hide any other menus on page and set button as collapsed. */
		$('.popup-menu:visible').hide();

		//var _this = $(this);
		var _this = $('#' + id);
		var Xx = 0;
		var Yy = 0;
		var Ww = 0;
		var Hh = 0;

		//_this.children('.button-expand:visible').hide();

		/* Get the menu element. */
		var _el = _this.next('.popup-menu');

		/* Display the menu. */
		_el.show();

		/* Set button collapse. */
		_this.children('.button-collapse').show();

		/* Get the dimensions of the button. */
		buttonHh = _this.outerHeight();
		buttonWw = _this.outerWidth();

		var buttonY = _this.position().top + buttonHh + 10;
		var buttonX = _this.offset().left;
		//var buttonX = _this.position().left;

		/* Get the distance of menu button and the parent element */
		var popupParentXx = _this.offset().left - _this.position().left;

		var popupXx = _el.offset().left;
		var popupWw = _el.outerWidth();

		Xx = Math.abs(buttonX - $('body').scrollLeft() - popupParentXx);
		Yy = Math.abs(buttonHh - buttonY - $('body').scrollTop());

		if (Locale != 'AR') {
			/* Check if clicked position plus the popup width exceed the window width. */
			if (buttonX + popupWw - $('body').scrollLeft() > $(Context).width()) {
				Xx = buttonX - popupWw - $('body').scrollLeft() - popupParentXx + buttonWw;
				//Xx = ($(window).width() - popupWw) - $('body').scrollLeft();
			}
		}

		/* Set menu position. */
		_el.css({
			left: Xx + 'px',
			top: buttonY + 'px',
		});

		/* Refresh value */
		popupXx = _el.offset().left;

		var _balloonEl = _el.children('.popup-menu-balloon');

		var _balloonXx = _balloonEl.offset().left;
		var _balloonWw = _balloonEl.outerWidth();
		var _balloonPosXx = Math.abs(buttonX - Xx - popupParentXx);

		/* Is the balloon icon positioned out of the popup menu? */
		if (_balloonPosXx + Xx + _balloonWw > Xx + popupWw) {
			_balloonPosXx = _balloonPosXx - _balloonWw;
		}

		/* Set position of the balloon effect. */
		_balloonEl.css('left', _balloonPosXx + 'px');
	},
	menuEvents: function(Context, Locale) {
		$('.popup-button')
			.off('click')
			.on('click', function(e) {
				var id = $(this).attr('id');
				SapphireWidgets.PopUpMenu.menuPosition(id, Context, Locale);

				/*e.stopPropagation();*/

				/* Prevent link submission */
				return false;
			});

		/* v *** Hide popup when click outside *** v */
		function PMClickOutside(event) {
			if (event.hasOwnProperty('target')) {
				var target = $(event.target);
				/*if ((target.parents().index($('a[sapphirehospital], .HospitalPopUp')) == -1)) {}*/
				if (
					!$(event.target).closest(
						'.popup-button, .popup-menu, .os-internal-ui-autocomplete, .os-internal-ui-menu-item, .os-internal-ui-corner-all, ui-autocomplete-item'
					).length
				) {
					$('.popup-menu:visible').hide();
					$('.button-collapse:visible').hide();
					//$('.button-expand').show();
				}
			}
		}

		var _PMIsDrag = false;
		var _PMIsClick = false;
		$(document).on('touchstart', function(event) {
			_PMIsDrag = false;
			_PMIsClick = true;
		});
		$(document).on('touchmove', function(event) {
			_PMIsDrag = true;
		});
		$(document).on('click', function(event) {
			PMClickOutside(event);
			_PMIsDrag = false;
			_PMIsClick = false;
		});
		$(document).on('touchend', function(event) {
			if (!_PMIsDrag && _PMIsClick) {
				PMClickOutside(event);
			}
			_PMIsDrag = false;
			_PMIsClick = false;
		});

		$('.button-collapse').on('click', function(event) {
			$('body').trigger('click');
			return false;
		});
		/* ^ *** Hide popup when click outside *** ^ */
	},
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/panel/sapphire-panel.js":
/*!*********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/panel/sapphire-panel.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component SapphirePanel */
SapphireWidgets.SapphirePanel = {
	checkOpenPanel: function() {
		return $('body').hasClass('SapphirePanelOpen') && $('.SapphirePanel_Container:visible').length;
	},

	toggleSapphirePanel: function(PanelId) {
		if (!OsValidatorOnSubmit()) {
			return;
		}

		if (!SapphireWidgets.SapphirePanel.checkOpenPanel()) {
			$('body').addClass('SapphirePanelOpen');
			$('#' + PanelId).fadeIn(140);

			setTimeout(function() {
				$('#' + PanelId)
					.find('.SapphirePanel_Container')
					.slideToggle(150);
			}, 100);
		}
	},

	closeSapphirePanel: function(PanelId) {
		$('body').removeClass('SapphirePanelOpen');
		$('#' + PanelId).fadeOut(140);

		setTimeout(function() {
			$('#' + PanelId)
				.find('.SapphirePanel_Container')
				.slideUp(150);
		}, 100);
	},

	setPanelBehavior: function() {
		$('.Panel[panel-trigger-elementid]').each(function() {
			var this_panel = $(this);
			$('#' + this_panel.attr('panel-trigger-elementid') + '')
				.off('click')
				.on('click', function() {
					SapphireWidgets.SapphirePanel.toggleSapphirePanel(this_panel.attr('id'));
					return false;
				});
		});
	},
};

$(document).ready(function() {
	SapphireWidgets.SapphirePanel.setPanelBehavior();

	if (osAjaxBackend.EventHandlers.AfterAjaxRequest.toString().indexOf('setPanelBehavior') == -1) {
		osAjaxBackend.BindAfterAjaxRequest(SapphireWidgets.SapphirePanel.setPanelBehavior);
	}
});


/***/ }),

/***/ "./src/components/05-components/v3-pat/panel/scripts.js":
/*!**************************************************************!*\
  !*** ./src/components/05-components/v3-pat/panel/scripts.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./confirmation-panel */ "./src/components/05-components/v3-pat/panel/confirmation-panel.js");
__webpack_require__(/*! ./modal-popup */ "./src/components/05-components/v3-pat/panel/modal-popup.js");
__webpack_require__(/*! ./panel-by-id */ "./src/components/05-components/v3-pat/panel/panel-by-id.js");
__webpack_require__(/*! ./popup-menu */ "./src/components/05-components/v3-pat/panel/popup-menu.js");
__webpack_require__(/*! ./sapphire-panel */ "./src/components/05-components/v3-pat/panel/sapphire-panel.js");


/***/ }),

/***/ "./src/components/05-components/v3-pat/patient-call-cancel/patient-call-cancel-structure.js":
/*!**************************************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/patient-call-cancel/patient-call-cancel-structure.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component PatientCallCancelStructure */
(function($, window, document, SapphireWidgets) {
	const create = function(config) {
		const $widget = $('#' + config.widgetId).find('.PatientCallCancelStructure');
		const $listQueueWrapper = $widget.find('.PatientCallCancelStructure__ListQueues');
		const $dropdown = $listQueueWrapper.find('.InlineDropdown_label');

		$listQueueWrapper.on('click', event => {
			if (!$dropdown.length) return;
			event.stopPropagation();

			$widget.toggleClass('PatientCallCancelStructure--active');

			$(document).on('click.PatientCallCancelStructure', () => {
				$widget.removeClass('PatientCallCancelStructure--active');
				$(document).off('click.PatientCallCancelStructure');
			});

			$dropdown.trigger('click');
			event.preventDefault();
		});
	};

	SapphireWidgets.PatientCallCancelStructure = { create };
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/patient-call-cancel/patient-call-cancel.js":
/*!****************************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/patient-call-cancel/patient-call-cancel.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component PatientCallCancel */
(function($, window, document, SapphireWidgets) {
	const create = function(config) {
		const $widget = $('#' + config.widgetId);
		const $countdown = $widget.find('[ui=data-counter]');
		let $callButton = $widget.find('[ui=data-button-call]');
		let $cancelButton = $widget.find('[ui=data-button-cancel]');
		const $otherContent = $widget.find('.PatientCallCancel__Other');

		let interval;
		let timeCounter;

		const callPatient = function($widget) {
			toggleCallingState();

			if (config.showCountdown) $countdown.text(config.txtCallingIn + ' ' + config.timeToCancel);
			else $countdown.text(config.txtCallingIn);

			startCounter();
		};

		const toggleCallingState = () => {
			$widget.toggleClass('CallingPatient');
			$countdown.text(config.txtCallPatient);
		};

		const setInitialState = () => {
			$widget.removeClass('CallingPatient');
			$callButton.show();
			$otherContent.show();
		};

		const startCounter = () => {
			timeCounter = config.timeToCancel;
			interval = window.setInterval(updateCounter, 1000);
		};

		const updateCounter = () => {
			timeCounter--;

			if (timeCounter === 0) {
				clearInterval(interval);
				OsNotifyWidget(config.patientCallFakeNotifyId, '');

				setInitialState();
			}

			if (config.showCountdown) $countdown.text(config.txtCallingIn + ' ' + timeCounter);
			else $countdown.text(config.txtCallingIn);
		};

		if (config.startCounting) callPatient($widget);

		$callButton.on('click', () => {
			if ($widget.hasClass('CallingPatient')) return;

			callPatient($widget);

			$callButton.hide();
			$otherContent.hide();
		});

		$cancelButton.on('click', event => {
			timeCounter = config.timeToCancel;
			$countdown.text(timeCounter);
			clearInterval(interval);

			toggleCallingState();

			$callButton.show();
			$otherContent.show();
		});
	};

	SapphireWidgets.PatientCallCancel = { create };
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/prescription-card/scripts.js":
/*!**************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/prescription-card/scripts.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component PrescriptionCard */
(function($, window, SapphireWidgets) {
	const create = config => {
		const $component = $(`#${config.widgetId} .PrescriptionCard`);

		if (config.isExpandable) {
			const $expandLink = $component.find('.PrescriptionCard__ExpandIcon');

			$expandLink.click(() => {
				$component.toggleClass('PrescriptionCard--expanded');
			});
		}
	};

	SapphireWidgets.PrescriptionCard = { create };
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/prescription-expandable/scripts.js":
/*!********************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/prescription-expandable/scripts.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component PrescriptionExpandable */
(function($, window, SapphireWidgets) {
	const PrescriptionExpandable = function(config) {
		const widgetId = config.widgetId;
		const previewstat = [];

		const $elementWrapper = $(`#${config.widgetId}`);

		const clickEvents = ob => {
			if ($(ob).hasClass('PrescriptionExpandable_header__LinksDiv')) {
				var Section = $(ob)
					.parent()
					.parent()
					.parent();
			} else {
				var Section = $(ob).parent();
			}

			var SectionContent = Section.children('.PrescriptionExpandable_content');

			// get id
			var id = Section.attr('id');

			var tempHeight = 0;

			// has class expanded
			if (Section.hasClass('expanded')) {
				// Calc and set a fixed height, during this process, transitions are disabled
				SectionContent.addClass('noTransition');
				SectionContent.height(SectionContent.height());
				SectionContent[0].offsetHeight; // hack to force a repaint
				SectionContent.removeClass('noTransition');

				// Collapse content
				SectionContent.height(0);
				Section.removeClass('expanded');
				SectionContent.css('overflow', 'hidden');

				// Remove class, set height and save state
				previewstat[id]['client'] = false;
			} else {
				// Calc and set a fixed height
				SectionContent.height('auto');
				tempHeight = SectionContent.height();
				SectionContent.height(0);
				SectionContent.height(tempHeight);
				SectionContent.css('overflow', 'hidden');

				// remove class, set height and save state
				Section.addClass('expanded');
				previewstat[id]['client'] = true;
			}
		};

		this.init = () => {
			const $header = $elementWrapper.find('.PrescriptionExpandable_header');
			const $links = $header.find('.PrescriptionExpandable_header__LinksDiv');

			// Create array stat
			$('.SectionPrescriptionExpandableArea').each(() => {
				const stat = $header.hasClass('expanded') ? true : false;
				previewstat[widgetId] = { client: stat, server: stat };
			});

			if ($header.hasClass('NotExpandable')) {
				$header.on('click', e => e.preventDefault());
			} else if ($header.hasClass('isLinkEpandableClick')) {
				$links.on('click', e => clickEvents($links));
			} else {
				$header.on('click', e => clickEvents($header));
			}

			const elements =
				'.PrescriptionExpandable_header input, .PrescriptionExpandable_header select, .PrescriptionExpandable_header a';
			$(elements).click(function(event) {
				event.stopPropagation();
			});

			osAjaxBackend && osAjaxBackend.BindAfterAjaxRequest(ajaxRefresh);
		};

		const ajaxRefresh = function(event) {
			// remove click events
			//$('.PrescriptionExpandable_header').off();

			// add stop prepagation
			$(
				'.PrescriptionExpandable_header input, .PrescriptionExpandable_header select, .PrescriptionExpandable_header a'
			).click(function(event) {
				event.stopPropagation();
			});

			// each all sections
			$('.SectionPrescriptionExpandableArea').each(function() {
				// if new SectionExpandable then add to previewstat array
				if (previewstat[$(this).attr('id')] == null) {
					// add stat on array
					var stat = false;
					// if open
					if ($(this).hasClass('expanded')) {
						stat = true;
					}
					// add row
					previewstat[$(this).attr('id')] = { client: stat, server: stat };
				}

				// curent state (ajax state x initial state)
				var curState = false;

				// check if start expandable
				if ($(this).hasClass('expanded')) {
					curState = true;
				}

				// check if ajax != initial server
				if (curState != previewstat[$(this).attr('id')]['server']) {
					// curstate
					previewstat[$(this).attr('id')]['client'] = curState;
					previewstat[$(this).attr('id')]['server'] = curState;
				} else {
					// has class expanded
					if (previewstat[$(this).attr('id')]['client'] == false && $(this).hasClass('expanded')) {
						$(this).removeClass('expanded');
						$(this)
							.children('.PrescriptionExpandable_content')
							.height(0);
					} else if (previewstat[$(this).attr('id')]['client'] == true && !$(this).hasClass('expanded')) {
						$(this).addClass('expanded');
					}
				}
			});
		};
	};

	const create = config => {
		const expandable = new PrescriptionExpandable(config);

		expandable.init();
	};

	SapphireWidgets.PrescriptionExpandable = { create };
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/sapphire-header/scripts.js":
/*!************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/sapphire-header/scripts.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component SapphireHeader */
(function($, window, document, SapphireWidgets) {
	var create = function(config) {
		window[config.widgetId] = new SapphireHeader(config);
		SapphireWidgets.SapphireHeader.widgetId = config.widgetId;
	};

	var handleDemographics = function() {
		window[SapphireWidgets.SapphireHeader.widgetId].handleDemographics();
	};

	var SapphireHeader = function(config) {
		var _this = this;
		this.config = config;
		this.isConfidential = config.isConfidential;
		this.$widget = $('#' + config.widgetId);
		this.$widget.css({
			display: 'block',
		});
		this.$header = this.$widget.find('.SapphireHeader');
		this.$navigation = this.$widget.find('.SapphireHeader-navigation');
		this.$identification = this.$widget.find('.SapphireHeader-identification');
		this.$demographic = this.$widget.find('.SapphireHeader-demographics');
		this.$information = this.$widget.find('.SapphireHeader-information');
		this.$actions = this.$widget.find('.SapphireHeader-actions');
		this.$additionalTrigger = this.$widget.find('.SapphireHeader-additional-trigger');
		this.$additionalContent = this.$widget.find('.SapphireHeader-additional-content');

		this.handleResize();
		this.attachEvents();

		if (this.$information.text() === '') {
			this.$information.hide();
		}
	};

	SapphireHeader.prototype.getConfig = function() {
		return this.config;
	};

	SapphireHeader.prototype.handleResize = function() {
		var _this = this;
		$(window).resize(function() {
			_this.handleDemographics();
		});
	};

	SapphireHeader.prototype.attachEvents = function() {
		var _this = this;
		this.$additionalTrigger.on('click', function() {
			if (_this.$header.hasClass('isOpen')) {
				_this.$header.removeClass('isOpen');
				//$('.LayoutBase-header').css('z-index', 2);
			} else {
				_this.$header.addClass('isOpen');
				//$('.LayoutBase-header').css('z-index', 3);
			}
		});
	};

	SapphireHeader.prototype.handleDemographics = function() {
		const _this = this;
		this.$demographic.find('.Demographic-item').css('display', 'none');

		this.$additionalTrigger.hide();
		this.$additionalContent.empty();

		const demographicWidth = this.$demographic.outerWidth(true);
		let itemsTotal = 0;

		const componentWidth = this.$widget.outerWidth(true);
		const navigationWidth = this.$navigation.width();
		const identificationWidth = this.$identification.width();
		const demographicsWidth = this.$demographic.width();
		const informationWidth = this.$information.width();
		const actionsWidth = this.$actions.width();

		this.$demographic.find('.Demographic-item').each(function(index) {
			itemsTotal += parseInt($(this).outerWidth(true), 10);

			// 64 -> margins and 99 -> More Info button
			if (itemsTotal + 64 + 110 < demographicWidth) {
				$(this).css('display', 'inline-block');
			} else {
				$(this)
					.clone()
					.css('display', 'inline-block')
					.appendTo(_this.$additionalContent);
				_this.$additionalTrigger.show();
			}
		});

		if (this.$additionalContent.find('.Demographic-item').length === 0) {
			this.$header.removeClass('isOpen');
		}
	};

	SapphireHeader.prototype.showAdditional = function() {
		return this.$header.addClass('isOpen');
	};

	SapphireHeader.prototype.hideAdditional = function() {
		return this.$header.removeClass('isOpen');
	};

	SapphireWidgets.SapphireHeader = {
		create: create,
		handleDemographics: handleDemographics,
	};
})(jQuery, window, document, SapphireWidgets);

$(window).load(function() {
	if (!!SapphireWidgets.SapphireHeader.widgetId) {
		window[SapphireWidgets.SapphireHeader.widgetId].handleDemographics();
	}
	if (!!$('.SapphireHeader-demographics').length) {
		osAjaxBackend &&
			osAjaxBackend.BindAfterAjaxRequest(function() {
				window[SapphireWidgets.SapphireHeader.widgetId].handleDemographics();
			});
	}
});


/***/ }),

/***/ "./src/components/05-components/v3-pat/sapphire-popup/scripts.js":
/*!***********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/sapphire-popup/scripts.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component SapphirePopup */
var RichWidgets_Popup_Editor_notifyWidget;

(function($, window, SapphireWidgets) {
	// Check if the widget is loaded inside an iFrame
	let isInsideIframe = window.frameElement != undefined || false;

	// Constants
	const POPUP_INITIAL_WIDTH = 300;
	const POPUP_INITIAL_HEIGHT = 100;
	const POPUP_WINDOW_INDEX = 4010;
	const POPUP_CLOSING_TAG = 'closing';
	const POPUP_CLOSING_VALUE = 'true';

	let POPUP_NOTIFY_WIDGET;
	let POPUP_PARENT_URL;

	const create = config => {
		if (config.ignoreIframe) isInsideIframe = false;

		$().ready(function($) {
			const _id = config.linkId;
			const linkQuery = `#${config.linkId}`;
			let linkWidget;

			try {
				linkWidget = $(linkQuery).get(0);
			} catch (e) {}

			if (typeof linkWidget == 'undefined') {
				//Case the widget is inexistent or invisible, it will show no errors.
				return;
			}

			POPUP_PARENT_URL = config.parentUrl;

			const linkResult = getLinkHREF(linkWidget);
			const linkHref = linkResult[0];
			const isAButton = linkResult[1];

			if (typeof linkHref == 'undefined' || linkHref == '' || linkHref == '#' || linkHref.indexOf('javascript:') == 0) {
				try {
					window.OsHandleException(
						new Error('Popup link id must be the id of a Link or Button Widget with Method Navigate.'),
						outsystems.osErrorCodes.SystemJavascriptError,
						'Popup_Editor'
					);
				} catch (e) {}

				return;
			}

			// Remove the existing on-click event
			if (isAButton) {
				linkWidget.setAttribute(
					'onclick',
					linkWidget
						.getAttribute('onclick')
						.toString()
						.replace('window.location.href=', 'return false;window.location.href=')
				);
			}

			// If there's a confirmation message, store in an attribute the result
			if (linkWidget.getAttribute('onclick') != null) {
				linkWidget.setAttribute(
					'onclick',
					linkWidget
						.getAttribute('onclick')
						.toString()
						.replace(
							'if( ret != true )',
							"$('" + linkQuery + "').get(0).setAttribute('confirmed', ret); if( ret != true )"
						)
				);
			}

			const clickHandler = function(event) {
				// The clickHandler event is registered in osjs and $ for compatibillity reasons, they must not run both for the same click.
				// Variable is set to false in resize function.
				if ($.data(event.target, 'os-internal-processing') == true) {
					return false;
				} else {
					$.data(event.target, 'os-internal-processing', true);
				}

				// Check if the clicked link is disabled
				if (linkWidget.getAttribute('disabled') != null) {
					var linkDisabled = linkWidget
						.getAttribute('disabled')
						.toString()
						.toLowerCase();

					if (linkDisabled == 'disabled' || linkDisabled.indexOf('true') != -1) {
						return false;
					}
				}

				if (linkWidget.getAttribute('confirmed') == 'false') return false;
				if (OsIsIE()) osFocusBackend.ClearFocusedElement();

				let popupDiv;
				let pleaseWaitDiv;

				const waitText = `<div style="margin-top: 36px;">${config.loadingMessage}</div>`;
				const imgHTML = '<div class="lds-ring"><div></div></div>';
				const loadingElement = `<div class="LayoutPopup-loading">${imgHTML} ${waitText}</div>`;
				const iFrameElement = `<iframe id="iframe_${_id}" width="100%" scrolling="no" height="100%" frameborder="0" src="javascript:void(0);"/>`;

				if (isInsideIframe) {
					let _div = document.createElement('DIV');
					_div.setAttribute('style', 'text-align: center; display: none;');
					_div.setAttribute('id', 'window_' + _id);
					window.top.document.body.appendChild(_div);

					popupDiv = window.top.$('#window_' + _id);
					popupDiv.append(iFrameElement);

					pleaseWaitDiv = popupDiv.prepend(loadingElement);
				} else {
					popupDiv = $("<div style='text-align: center; display: none;'></div>").appendTo('body');
					popupDiv.append(iFrameElement);

					pleaseWaitDiv = popupDiv.prepend(loadingElement);
				}

				const loadTargetPage = function() {
					if (isInsideIframe) {
						window.top.POPUP_NOTIFY_WIDGET = config.notifyId;
						// Create a reference to the iframe object on the document parent
						window.top._iframePopup = window.frameElement.contentWindow;
					} else {
						window.top._iframePopup = window;
					}

					POPUP_NOTIFY_WIDGET = config.notifyId;
					RichWidgets_Popup_Editor_notifyWidget = config.notifyId;
					window.top._iframePopup.RichWidgets_Popup_Editor_notifyWidget = config.notifyId;

					// Load target page
					const ohref = getLinkHREF(linkWidget)[0];
					const rhref = ohref.replace(/(\?|&)_=.*?(&|$)/, '$1_=' + +new Date().now + '$2');
					const xhref = rhref + (rhref == ohref ? (rhref.indexOf('?') >= 0 ? '&' : '?') + '_=' + +new Date() : '');

					popupDiv.find('iframe').attr('src', xhref);

					(function(popupDiv) {
						popupDiv.find('iframe').load(function() {
							// After loading try to resize
							resize(popupDiv, _id, config.setWidth, config.setHeight, true, event);
						});
					})(popupDiv);

					popupDiv = null;
					pleaseWaitDiv = null;
				};

				openPopup(popupDiv, pleaseWaitDiv, loadTargetPage, event, config);

				return false;
			};

			$(linkQuery).click(clickHandler);

			SapphireWidgets.SapphirePopup.popupWidth = config.setWidth || POPUP_INITIAL_WIDTH;
		});
	};

	const resize = (divToPopup, _id, setWidth, setHeight, recenter, event) => {
		// Code to support old resize method Popup_Window_resize(setWidth, setHeight, recenter)
		if (typeof recenter == 'undefined') {
			recenter = setHeight;
			setHeight = setWidth;
			setWidth = divToPopup;

			if (isInsideIframe) {
				divToPopup = window.top.$('.os-internal-ui-dialog-content');
			} else {
				divToPopup = $('.os-internal-ui-dialog-content');
			}
		}

		// Resize must bail out immediately if the popup is marked as closing, and not start the animation.
		if ($.data(divToPopup.get(0), POPUP_CLOSING_TAG) == POPUP_CLOSING_VALUE) {
			return false;
		}

		let documentServer;
		let frameObj = divToPopup.find('iframe')[0];

		if (typeof frameObj == 'undefined') {
			frameObj = window.top.$('#iframe_' + _id)[0];
		}

		if (isInsideIframe) {
			documentServer = window.top.document.location.href.replace(/(https?:\/\/[^\/]*).*/, '$1');
		} else {
			documentServer = document.location.href.replace(/(https?:\/\/[^\/]*).*/, '$1');
		}

		if (typeof frameObj != 'undefined') {
			const frameServer = frameObj.src.replace(/(https?:\/\/[^\/]*).*/, '$1');
			const sameOrigin = frameServer.toLowerCase() == documentServer.toLowerCase() || frameServer.indexOf('http') != 0;

			if (!sameOrigin && (setWidth == -1 || setHeight == -1)) {
				throw new Error('A Popup with a screen from a different server (or https) needs explicict width, height set.');
			}

			if (sameOrigin) {
				if (frameObj.contentDocument !== null || frameObj.contentWindow !== null) {
					var innerDoc = frameObj.contentDocument ? frameObj.contentDocument : frameObj.contentWindow.document;
					if (innerDoc.documentElement.scrollHeight == 0)
						// Strangely this event is also triggered on close
						return false;
				}
			}

			let oldHeight;
			if (isInsideIframe) {
				oldHeight = window.top
					.$(divToPopup)
					.parents('.os-internal-Popup')
					.outerHeight();
			} else {
				oldHeight = $(divToPopup)
					.parents('.os-internal-Popup')
					.outerHeight();
			}

			let width = setWidth == -1 ? $(innerDoc).width() : setWidth;
			let height = setHeight == -1 ? $(innerDoc).height() : setHeight;

			var titleHeight;
			if (isInsideIframe) {
				titleHeight = window.top.$('.os-internal-ui-dialog-titlebar').height();
			} else {
				titleHeight = $('.os-internal-ui-dialog-titlebar').height();
			}

			// Verify if the parent window width is less than the pop-up window, if so set the responsive class on the iframe body (for responsive themes)
			if (window.innerWidth < width) {
				// only set the class if the origin is the same
				if (sameOrigin) {
					$(innerDoc)
						.find('body')
						.addClass('Responsive');
					width = window.innerWidth - 20; // 10px "padding" effect, to keep the popup look and feel on top of content
				}
			}

			// Fix issues with scrollbars
			if (setHeight == -1) {
				// IE7 needs a little more space to remove the scrollbars
				if ($.browser.msie) height = height + 1;
			} else {
				//when explicitly setting the height
				if (sameOrigin){
					if(innerDoc != undefined){
						innerDoc.body.style.height = 'auto';
					}else{
						console.log("The innerDoc.body is undefined");
					}
				}
			}

			if (isInsideIframe) {
				window.top.$(divToPopup).height(height);
			} else {
				$(divToPopup).height(height);
			}

			//Hide ECT
			if (isInsideIframe) {
				window.top
					.$(innerDoc)
					.find('.ECT_FeedbackContainer')
					.hide();
				var divPopupOuterWindow = window.top.$(divToPopup).parents('.os-internal-Popup');
			} else {
				$(innerDoc)
					.find('.ECT_FeedbackContainer')
					.hide();
				var divPopupOuterWindow = $(divToPopup).parents('.os-internal-Popup');
			}

			var animateFinal = {};

			if (setHeight == -1) {
				var oldTop = parseInt(divPopupOuterWindow.css('top'));
				if (recenter) animateFinal.top = Math.max(20, oldTop + (oldHeight - (height + titleHeight)) / 2);
				animateFinal.height = height + titleHeight;
			}

			if (setWidth == -1) {
				var oldLeft = parseInt(divPopupOuterWindow.css('left'));
				if (recenter) animateFinal.left = oldLeft + (divPopupOuterWindow.width() - width) / 2;
				animateFinal.width = width;
			}

			if (
				divPopupOuterWindow.width() == animateFinal.width &&
				divPopupOuterWindow.height() == animateFinal.height - ($.browser.msie ? 1 : 0)
			) {
				$('.os-internal-ui-dialog-content>.LayoutPopup-loading').hide();
				$(divToPopup).height(height - ($.browser.msie ? 1 : 0)); // restore size
				return true; // nothing to do...
			}

			// hide content in first resize - readjustments will not flickr
			if (divPopupOuterWindow.width() == POPUP_INITIAL_WIDTH && divPopupOuterWindow.height() == POPUP_INITIAL_HEIGHT) {
				$(frameObj).height(0);
			}

			var onAnimationComplete = function() {
				setTimeout(function() {
					if (isInsideIframe) {
						window.top.$('.os-internal-ui-dialog-titlebar-close-no-title').css('display', 'block');
						window.top
							.$(divToPopup)
							.find('iframe')
							.height('100%')
							.width(animateFinal.width);
					} else {
						$('.os-internal-ui-dialog-titlebar-close-no-title').css('display', 'block');
						$(divToPopup)
							.find('iframe')
							.height('100%')
							.width(animateFinal.width);
					}
				}, 13);
			};

			var divPleaseWait;
			if (isInsideIframe) {
				divPleaseWait = window.top.$('.os-internal-ui-dialog-content>.LayoutPopup-loading');
			} else {
				divPleaseWait = $('.os-internal-ui-dialog-content>.LayoutPopup-loading');
			}

			divPleaseWait.hide();

			if (setHeight == -1 || setWidth == -1) {
				divPopupOuterWindow.animate(animateFinal, {
					duration: 200,
					complete: onAnimationComplete,
				});
			} else {
				onAnimationComplete();
			}
			innerDoc = null;
			divPopupOuterWindow = null;
			if (isInsideIframe) {
				window.top.$.data(event.target, 'os-internal-processing', false);
			} else {
				$.data(event.target, 'os-internal-processing', false);
			}
			return true;
		}
	};

	const close = () => {
		let popupToClose;
		let popupContainer;

		if (isInsideIframe) {
			popupToClose = window.top.$('.os-internal-ui-dialog-content');
			popupContainer = window.top.$('.SapphirePopup');
		} else {
			popupToClose = $('.os-internal-ui-dialog-content');
			popupContainer = $('.SapphirePopup');
		}

		popupToClose.data(POPUP_CLOSING_TAG, POPUP_CLOSING_VALUE);

		//setTimeout(function() {
		if (popupToClose.length) popupToClose.dialog('close');

		popupToClose.remove();
		popupContainer.remove();
		//}, 0);
	};

	const getLinkHREF = widget => {
		let linkHref;
		let isAButton = false;

		try {
			//Checks if the id is from a link or not
			linkHref = $(widget).attr('href');

			//Tests for visibility/existence
			if (typeof linkHref == 'undefined') {
				const onClick = widget.getAttribute('onclick');

				if (typeof onClick != 'undefined') {
					isAButton = true;

					if (onClick != null) {
						let hrefMatch;

						if ((hrefMatch = onClick.toString().match(/href='([^']*)'/)) != null) {
							linkHref = hrefMatch[1];
						}
					}
				}
			}
		} catch (e) {}

		return [linkHref, isAButton];
	};

	const openPopup = (divToPopup, divPleaseWait, loadTargetPage, event, config) => {
		// Destroy any previous dialog
		close(null);

		if (isInsideIframe) {
			const $jParent = window.top.$;
			$jParent('.os-internal-Popup').remove();
		}

		// If any close is pending, schedule to execute itself asynchronously exit
		// If no close is pending, continue with open operation
		let closingPopups;

		if (isInsideIframe) closingPopups = window.top.$('.os-internal-ui-dialog-content');
		else closingPopups = $('.os-internal-ui-dialog-content');

		for (var i = 0; i < closingPopups.length; i++) {
			if ($.data(closingPopups.get(i), POPUP_CLOSING_TAG) == POPUP_CLOSING_VALUE) {
				setTimeout(function() {
					openPopup(divToPopup, divPleaseWait, loadTargetPage, event, config);
				}, 13);

				return false;
			}
		}

		let _dialog;

		if (isInsideIframe) {
			const popupContainer = document.createElement('DIV');
			popupContainer.setAttribute('class', 'SapphirePopup');

			window.top.document.body.appendChild(popupContainer);

			_dialog = window.top.$(divToPopup);
		} else {
			$('<div class="SapphirePopup"></div>').appendTo('body');

			_dialog = $(divToPopup);
		}

		$(divPleaseWait).show();

		if ($('.ISidebar').length) window.parent.SapphireWidgets.LayoutBase.openSidebarIframe(0);

		_dialog.show().dialog({
			appendTo: '.SapphirePopup',
			dialogClass: 'os-internal-Popup',
			resizable: false,
			autoResize: false,
			closeOnEscape: !config.hideCloseButton,
			bgiframe: true,
			draggable: false,
			autoOpen: true,
			title: config.setTitle,
			modal: !(config.useModal === false),
			height: config.setHeight == -1 ? POPUP_INITIAL_HEIGHT : config.setHeight,
			position: 'center',
			width: config.setWidth == -1 ? POPUP_INITIAL_WIDTH : config.setWidth,
			zIndex: POPUP_WINDOW_INDEX,
			close: function() {
				// If the popup is closed before it is resized (ESC) we need to set the processing event to false.
				$.data(event.target, 'os-internal-processing', false);

				_dialog.find('iframe').unbind('load');
				_dialog.find('iframe').attr('src', 'about:blank');

				setTimeout(function() {
					_dialog.find('iframe').empty();
					_dialog.empty();
				}, 13);
			},
		});

		_dialog.find('iframe').height(0);
		_dialog.parents('.os-internal-ui-dialog').dropShadow();

		if (config.CssClasses !== ' ') {
			if (isInsideIframe) window.top.$('.os-internal-ui-dialog').addClass(config.CssClasses);
			else $('.os-internal-ui-dialog').addClass(config.CssClasses);
		}

		loadTargetPage();
	};

	SapphireWidgets.SapphirePopup = { create, close, resize };
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/sapphire-radio-button/scripts.js":
/*!******************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/sapphire-radio-button/scripts.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component SapphireRadioButton */
SapphireWidgets.SapphireRadioButton = widgetId => {
	const $widget = $(`#${widgetId}`);
	const $input = $widget.find('input[type="radio"]');
	const $label = $widget.find('.ButtonRadioInp_radioText');
	const name = $input.prop('name');

	const addRemoveClass = ($el, toAdd) => {
		if (toAdd) $el.addClass('active');
		else $el.removeClass('active');
	};

	const isChecked = $el => {
		if ($el.is(':checked')) addRemoveClass($widget, true);
		else addRemoveClass($widget, false);
	};

	$input.click(function() {
		$widget.removeClass('active');

		$(`input[type="radio"][name="${name}"]`).each(function() {
			addRemoveClass($(this).closest('.ButtonRadioInp'), $(this).is(':checked'));
		});
	});

	$input.on('change', function() {
		isChecked($(this));
	});

	$label.click(function() {
		const $closestElement = $(this).closest('.ButtonRadioInp');

		if ($closestElement.hasClass('disabled')) return false;

		$input[0].click();
		//isChecked($input);
	});

	isChecked($input);
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/scales/scale-main-structure.js":
/*!****************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/scales/scale-main-structure.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component ScaleMainStructure */
(function($, window, SapphireWidgets) {
	const create = config => {
		$(document).ready(function() {
			setupScale();
			bindClicks();

			osAjaxBackend &&
				osAjaxBackend.BindAfterAjaxRequest(function() {
					setTimeout(function() {
						bindClicks();
					}, 1000);
				});
		});
	};

	ScaleCount = conf => {
		$(function() {
			var CardScale = conf.IsCardScale;
			var RulerScale = conf.IsRulerScale;
			var MultipleScale = conf.IsMultipleScale;
			var $totalPlace = $('.ScaleMainStructure_footerResult');
			var totalCardScale = 0;
			var totalMultipleScale = 0;
			var totalRulerScale = 0;

			var ScaleTypeCard = function() {
				var totalSelected = $('.ScaleList.CardScale').find('.ScaleCard.active').length;
				var totalNumber = 0;
				$(".ScaleList.CardScale:not('.isTitle')").each(function() {
					if ($(this).find('.ScaleCard').length > 0) {
						totalNumber += 1;
					}
				});

				if (totalNumber === totalSelected) {
					var total = [];
					var inputValue = '';
					var $scaleRow = $('.ScaleList.CardScale:not(.isTitle)');
					$scaleRow.each(function() {
						inputValue = $(this)
							.find('.ScaleCard.active')
							.data('value');
						$(this)
							.find('.ScaleList_inputValue input')
							.val(inputValue);
					});

					$('.ScaleList.CardScale .ScaleCard.active').each(function() {
						total.push($(this).data('value'));
					});
					var finalTotal = eval(total.join('+'));
					return finalTotal;
				}
			};

			var ScaleTypeRuler = function() {
				var activeRulerValue = '';
				var $activeRuler = $('.RulerScale_number.active');
				if ($activeRuler.length > 0) {
					var activeRulerValue = $('.RulerScale_number.active')
						.closest('.RulerScale')
						.data().value;
					$('.ScaleList.Ruler')
						.find('.ScaleList_inputValue input')
						.val(activeRulerValue);

					return activeRulerValue;
				}
				return activeRulerValue;
			};

			var ScaleTypeMultiple = function() {
				var numberofCols = $('.ScaleList.MultipleScale')
					.first()
					.find('.ButtonGroupScale').length;
				var numberofRows = $('.ButtonGroupScale').closest('.ScaleList.MultipleScale:not(.isTitle):not(.isSubtotal)')
					.length;
				var total = [];
				var i = 0;
				var j = 0;
				var countActive = 0;
				var countallActiveCols = 0;
				var totalOfItems = numberofCols * numberofRows;
				var totalScore = [];

				for (i = 0; i < numberofCols; i++) {
					for (j = 0; j < numberofRows; j++) {
						var ScaleListSelected = document.querySelectorAll(
							'.ScaleList.MultipleScale:not(.isTitle):not(.isSubtotal)'
						)[j];
						var ButtonScaleSelected = ScaleListSelected.querySelectorAll('.ButtonGroupScale')[i];

						if (ButtonScaleSelected.querySelectorAll('.ButtonGroup_button.active').length > 0) {
							var ScaleValue = ButtonScaleSelected.querySelectorAll('.ButtonGroup_button.active')[0].innerText;
							total.push(parseInt(ScaleValue));
							totalScore.push(parseInt(ScaleValue));
							countActive = countActive + 1;
						}
					}
					if ($('.ScaleList.MultipleScale.isSubtotal').length > 0) {
						if (countActive === numberofRows) {
							var subTotal = eval(total.join('+'));
							var subtotalScale = document.querySelectorAll('.ScaleList.MultipleScale.isSubtotal .ButtonGroupScale')[i];
							subtotalScale.innerText = subTotal;
							countallActiveCols = countallActiveCols + 1;
						}
					}
					countActive = 0;
					total = [];
				}

				if (document.querySelectorAll('.ButtonGroup_button.active').length === totalOfItems) {
					var i = 0;
					var j = 0;
					for (i = 0; i < numberofRows; i++) {
						var ScaleListRow = $('.ScaleList.MultipleScale:not(.isTitle):not(.isSubttotal)')[i];
						var $ScaleListInput = $(ScaleListRow).find('.ScaleList_inputValue input');
						var valuesSelected = '';
						for (j = 0; j < numberofCols; j++) {
							var ActiveButton = $(ScaleListRow).find('.ButtonGroup_button.active')[j];
							var ActiveValue = ActiveButton.innerText;
							//valuesSelected=valuesSelected+','+ActiveValue;
							if (j === numberofCols - 1) {
								valuesSelected += ActiveValue;
							} else {
								valuesSelected += ActiveValue + ',';
							}
						}
						$ScaleListInput.val(valuesSelected);
					}
					var getTotal = eval(totalScore.join('+'));
					return getTotal;
				}
			};

			const TotalCalc = function() {
				let isEmpty = false;

				if (CardScale === true) {
					totalCardScale = ScaleTypeCard();
					isEmpty = totalCardScale === '';
				}

				if (RulerScale === true) {
					totalRulerScale = ScaleTypeRuler();
					isEmpty = totalRulerScale === '';
				}

				if (MultipleScale === true) {
					totalMultipleScale = ScaleTypeMultiple();
					isEmpty = totalMultipleScale === '';
				}

				const $footerResult = $('.ScaleMainStructure_footerResult');
				const $totalScore = $('.ScaleMainStructure_totalScore');
				const $scoreLabel = $('.ScaleMainStructure_footerResult .TotalLabel');

				if (isEmpty) {
					$totalScore.text('---');
					$scoreLabel.text('-');

					$footerResult.removeClass('ColorZetaBG');
				} else if (!isNaN(totalMultipleScale) && !isNaN(totalCardScale) && !isNaN(totalRulerScale)) {
					const totalAbsoluteScore = totalCardScale + totalMultipleScale + totalRulerScale;
					const totalAbsoluteLabel = totalAbsoluteScore > 11 ? 'High' : 'Low';

					$totalScore.text(totalAbsoluteLabel);
					$scoreLabel.text(totalAbsoluteScore);

					$footerResult.addClass('ColorZetaBG');

					const $hiddenLink = $('.ScaleMainStructure_hiddingLink a');

					if ($hiddenLink.length > 0) $hiddenLink.click();
				}
			};

			if (CardScale === true) {
				$('.ScaleCard').click(function() {
					if (!$(this).hasClass('disabled')) {
						$parentScaleCard = $(this).closest('.ScaleList.CardScale');
						$parentScaleCard.find('.ScaleCard').removeClass('active');
						$(this).addClass('active');
						TotalCalc();
					}
				});
				TotalCalc();
			}

			if (RulerScale === true) {
				$('.RulerScale').click(function() {
					if ($(this).find('.viewmode').length === 0) {
						var $rulerScaleList = $(this).closest('.ScaleList.Ruler');
						$rulerScaleList.find('.RulerScale_number').removeClass('active');
						$(this)
							.find('.RulerScale_number')
							.addClass('active');
						TotalCalc();
					}
				});
				TotalCalc();
			}

			if (MultipleScale === true) {
				var counter;
				var ScaleListTitle = document.querySelector('.ScaleList.MultipleScale.isTitle');
				var ScaleListSubTotal = document.querySelector('.ScaleList.MultipleScale.isSubtotal');
				var ScaleList = document.querySelector('.ScaleList.MultipleScale:not(.isTitle):not(.isSubtotal)');

				$('.ButtonGroupScale')
					.closest('.ScaleList.MultipleScale:nth-child(2n)')
					.addClass('EvenLine');
				var numberOfGroupScale = ScaleList.querySelectorAll('.ButtonGroupScale').length;

				$('.ScaleList.MultipleScale.isSubtotal .ButtonGroupScale').text(0);
				// Check if Multiple Scale Title exists then adjust title width
				if ($('.ScaleList.MultipleScale.isTitle').length > 0) {
					for (counter = 0; counter < numberOfGroupScale; counter++) {
						var ScaleListWidth = ScaleList.querySelectorAll('.ButtonGroupScale')[counter].offsetWidth;
						ScaleListTitle.querySelectorAll('.ButtonGroupScale')[counter].style.width = ScaleListWidth + 'px';
						ScaleListSubTotal.querySelectorAll('.ButtonGroupScale')[counter].style.width = ScaleListWidth + 'px';
					}
				}

				$('.ButtonGroup_button').click(function() {
					TotalCalc();
				});
				TotalCalc();
			}
		});
	};

	setupScale = () => {
		var IsCardScale;
		var IsRulerScale;
		var IsMultipleScale;

		$('.ScaleCard').length > 0 ? (IsCardScale = true) : (IsCardScale = false);
		$('.ButtonGroupScale').length > 0 ? (IsMultipleScale = true) : (IsMultipleScale = false);
		$('.RulerScale').length > 0 ? (IsRulerScale = true) : (IsRulerScale = false);

		setTimeout(function() {
			ScaleCount({
				IsCardScale: IsCardScale,
				IsRulerScale: IsRulerScale,
				IsMultipleScale: IsMultipleScale,
			});
		}, 500);

		if ($('.ScaleMainStructure_options .ToggleItemControl').length > 0) {
			$('.ScaleMainStructure_options .ToggleItemControl').click(function() {
				$('.ScaleMainStructure_totalScore').text('---');
			});
		}
	};

	resetScales = () => {
		$('.ScaleMainStructure_content').css('visibility', 'hidden');
		$('.ScaleMainStructure_options .ToggleItemControl').addClass('disabled');
		setTimeout(function() {
			$('.ScaleMainStructure_totalScore').text('---');
			setupScale();
		}, 600);
		setTimeout(function() {
			$('.ScaleMainStructure_content').css('visibility', 'visible');
			$('.ScaleMainStructure_options .ToggleItemControl').removeClass('disabled');
		}, 1000);
	};

	bindClicks = () => {
		if ($('.ScaleMainStructure_options .ToggleItemControl ').length > 0) {
			$('.ScaleMainStructure')
				.off('click')
				.on('click', '.ToggleItemControl', function() {
					resetScales();
				});
		}

		if ($('.Navigation_control').length > 0) {
			$('.Navigation_right').click(function() {
				if (
					!$(this)
						.find('a')[0]
						.hasAttribute('disabled')
				) {
					resetScales();
				}
			});

			$('.Navigation_left').click(function() {
				if (
					!$(this)
						.find('a')[0]
						.hasAttribute('disabled')
				) {
					resetScales();
				}
			});
		}
	};

	SapphireWidgets.ScaleMainStructure = { create };
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/scales/toggle-item-control.js":
/*!***************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/scales/toggle-item-control.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component ToggleItemControl */
SapphireWidgets.ToggleItemControl = () => {
	$(document).ready(function() {
		$('.ToggleItemControl input[type="radio"]').each(function() {
			if ($(this).is(':checked')) {
				$(this)
					.parent()
					.parent()
					.addClass('active');
			}
		});

		$('.ToggleItemControl')
			.off('click')
			.on('click', function() {
				$('.ToggleItemControl').removeClass('active');
				$(this)
					.find('input[type="radio"]')
					.not(':checked')
					.prop('checked', true)
					.click();
				if (
					$(this)
						.find('input[type="radio"]')
						.is(':checked')
				) {
					$(this).addClass('active');
				} else {
					$(this).removeClass('active');
				}
			});

		osAjaxBackend &&
			osAjaxBackend.BindAfterAjaxRequest(function() {
				$('.ToggleItemControl input[type="radio"]').each(function() {
					if ($(this).is(':checked')) {
						$(this)
							.parent()
							.parent()
							.addClass('active');
					}
				});

				$('.ToggleItemControl')
					.off('click')
					.on('click', function() {
						$('.ToggleItemControl').removeClass('active');

						if (
							$(this)
								.find('input[type="radio"]')
								.is(':checked')
						) {
							$(this).addClass('active');
						} else {
							$(this).removeClass('active');
						}
					});
			});
	});
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/search-and-select/select-ssd.js":
/*!*****************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/search-and-select/select-ssd.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var SearchSelectDefine = (window.SearchSelectDefine = window.SearchSelectDefine || {});

SapphireWidgets.SelectSSD = function SSDSelectSetup(config) {
	$(function() {
		var $SSDselectId = $('#' + config.SSDSelectId);
		var isMultiple = config.isMultiple;

		var $ComponentSSD = $SSDselectId.closest('.SearchSD');
		var $ComponentSSDinput = $ComponentSSD.find('.SearchSD___input input');
		var Componentinputlength = $ComponentSSDinput.val().length;

		if (Componentinputlength > 0) {
			$SSDselectId.find('.SelectSD__contentTitle').highlight($ComponentSSDinput.val(), {
				className: 'SelectSD-searched-term',
				caseSensitive: false,
				wordsOnly: false,
			});
		}

		var $favoritesSearchInput = $ComponentSSD.find('.SearchSD_filterfavorites input');

		if ($favoritesSearchInput.length) {
			var favoritesSearchLength = $favoritesSearchInput.val().length;

			if (config.HasFavorite === 'True' && favoritesSearchLength > 0) {
				$SSDselectId.find('.SelectSD__contentTitle').highlight($favoritesSearchInput.val(), {
					className: 'SelectSD-searched-term',
					caseSensitive: false,
					wordsOnly: false,
				});
			}
		}

		var OpenConfirmPopup = function($SSDselectId) {
			$ComponentSSD = $SSDselectId.closest('.SearchSD');
			$PopupID = $ComponentSSD.siblings('.SSDPopupWrapper');

			$PopupID.fadeIn('fast', function() {
				$ComponentSSD.addClass('Dont_Close');
				$PopupID
					.find('.SSDpopupOk')
					.off('click')
					.on('click', function() {
						$PopupID.fadeOut('fast', function() {
							$SSDselectId.find('.SelectSD__starTrigger > a').click();
							setTimeout($ComponentSSD.removeClass('Dont_Close'), 500);
						});
					});

				$PopupID
					.find('.SSDpopupCancel')
					.off('click')
					.on('click', function() {
						$PopupID.fadeOut('fast', function() {
							setTimeout($ComponentSSD.removeClass('Dont_Close'), 500);
						});
					});
			});
		};

		var SSDCheckBoxSelect = function($widgetId) {
			var checkBoxCount = 0;
			if (isMultiple === 'True') {
				checkBoxCount = $widgetId
					.closest('.SearchSD.showFavorite')
					.find('.SelectSD__multiple > input[type="checkbox"]:checked').length;

				$allListcard = $widgetId.closest('.SearchSD_content');

				if (checkBoxCount > 0) {
					$widgetId.closest('.SearchSD.showFavorite').addClass('MultiSelectActive');
					$widgetId.closest('.SearchSD_content .SelectSD').each(function() {
						$(this)
							.find('.SelectSD_contentWrapper')
							.off('click');
						$(this)
							.find('.SelectSD_actionLink')
							.off('click');
					});
				} else {
					$widgetId.closest('.SearchSD.showFavorite').removeClass('MultiSelectActive');
					$widgetId.closest('.SearchSD_content .SelectSD ').each(function() {
						$(this)
							.find('.SelectSD_contentWrapper')
							.on('click', function(e) {
								$(this)
									.find('.LineActionLINK > a')
									.click();
							});
						$(this)
							.find('.SelectSD_actionLink')
							.on('click', function(e) {
								$(this)
									.find('.LineActionLINK > a')
									.click();
							});
					});
				}
			}
		};

		if (isMultiple === 'True') {
			$SSDselectId.find('.SelectSD__multiple > input').click(function() {
				SSDCheckBoxSelect($SSDselectId);
			});
		}

		$SSDselectId.find('.SelectSD__starLink').on('click', function(e) {
			if (!$SSDselectId.find('.SelectSD .SelectSD__starWrapper').hasClass('starDisabled')) {
				if ($SSDselectId.find('.SelectSD .SelectSD__starWrapper').hasClass('starSelected')) {
					OpenConfirmPopup($SSDselectId);
				} else {
					$SSDselectId.find('.SelectSD__starTrigger > a').click();
				}
			}
		});

		$SSDselectId.find('.SelectSD_contentWrapper').on('click', function(e) {
			$ComponentSSD = $SSDselectId.closest('.SearchSD');
			$SSDselectId.find('.LineActionLINK > a').click();
			if (!$ComponentSSD.hasClass('MultiSelectActive')) {
				SearchSelectDefine.SSDSearch.returnToSearch($SSDselectId.closest('.SearchSD'));
				SearchSelectDefine.SSDSearch.closeSSD($SSDselectId.closest('.SearchSD'));
			}

			$ComponentSSDinput.val('');
		});

		$SSDselectId.find('.SelectSD_actionLink').on('click', function(e) {
			$ComponentSSD = $SSDselectId.closest('.SearchSD');
			$SSDselectId.find('.LineActionLINK > a').click();
			if (!$ComponentSSD.hasClass('MultiSelectActive')) {
				SearchSelectDefine.SSDSearch.returnToSearch($SSDselectId.closest('.SearchSD'));
				SearchSelectDefine.SSDSearch.closeSSD($SSDselectId.closest('.SearchSD'));
			}
		});
	});
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/search-and-select/ssd-search.js":
/*!*****************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/search-and-select/ssd-search.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var SearchSelectDefine = (window.SearchSelectDefine = window.SearchSelectDefine || {});

SapphireWidgets.SSDSearch = function SSDsearchSetup(config) {
	$(function() {
		var $SSDwidget = $('#' + config.SSDWidgetId); // SSDComponent map not used again
		var $SSDComponent = $SSDwidget.find('.SearchSD'); // SSDSearch Component id for use in the function and manipulate classes
		var $SSDComponentContent = $SSDComponent.find('.SearchSD_content'); // SSDcomponent content
		var hasClone = config.HasClone; // HasClone variable input parameter value
		var hasFavorite = config.HasFavorite; // HasFavorite variable input parameter value
		var showClones = config.ShowClones; // ShowClones variable input parameter value
		var letterLimit = config.LimitLetter; // Number of letter to enter before trigger the search action
		var hasShield = config.HasShield;
		var shieldTimeout = config.ShieldTimeout;
		var inputLength = config.SearchInputLength;
		var $widgetShield = $SSDComponent.find('.SearchSD--shield');
		var searchTriggerTimer;
		const $SSDClearButton = $SSDComponent.find('.SearchSD___remove');
		const $SSDInputElement = $SSDComponent.find('.SearchSD___input input');

		$SSDInputElement.attr('maxLength', inputLength);

		var executeSearch = function() {
			clearTimeout(searchTriggerTimer);
			searchTriggerTimer = setTimeout(function() {
				TriggerSearch($SSDComponent);
			}, 700);
		};

		if (hasShield) {
			window.setTimeout(function() {
				$widgetShield.hide();
			}, shieldTimeout);
		}

		/*  Returns a function, that, as long as it continues to be invoked, will not
		 *   be triggered. The function will be called after it stops being called for
		 *   N milliseconds. If `immediate` is passed, trigger the function on the
		 *   leading edge, instead of the trailing.
		 */
		var debounce = function(func, wait, immediate) {
			var timeout;
			return function executedFunction() {
				var context = this;
				var args = arguments;

				var later = function() {
					timeout = null;
					if (!immediate) func.apply(context, args);
				};

				var callNow = immediate && !timeout;
				clearTimeout(timeout);
				timeout = setTimeout(later, wait);
				if (callNow) func.apply(context, args);
			};
		};

		/****
		 *   Reset Search UI to the initial state
		 */
		var resetUI = function($SSDComponent) {
			$SSDComponent.find('.SearchSD__inputWrapper').show();
			$SSDComponent.find('.SearchSD_search_favoriteLink').hide();
			$SSDComponent.find('.SearchSD___goToFavorite').hide();
			$SSDComponent.find('.SearchSD__FavoriteActions').hide();
			$SSDComponent.find('.SearchSD__FavoriteRemove').hide();
			$SSDComponent.find('.SearchSD__cloneWrapper').hide();
			$SSDComponent.find('.SearchSD__inputWrapper .SearchSD__return').hide();

			if ($SSDInputElement.val().trim() === '') {
				$SSDComponent.find('.SearchSD___remove').hide();
			}

			$SSDComponent.removeClass('showFavorite');
			$SSDComponent.removeClass('showClone');
		};

		/*
		 *
		 *  Go to Favorites UI
		 *  --  rest SSDcomponent
		 *  --  show Favorite features
		 *  --  remove class showClone if component have that class
		 *  --  add class showFavorite to have component control
		 *  --  addClass Open with slide
		 */
		var goToFavorites = function($SSDComponent) {
			resetUI($SSDComponent);

			$SSDComponent.find('.SearchSD___input input').val('');
			$SSDComponent.removeClass('Open');
			$SSDComponent.removeClass('MultiSelectActive');
			$SSDComponent.find('.SearchSD__return').hide();
			$SSDComponent.find('.SearchSD__inputWrapper').hide();

			if ($SSDComponent.hasClass('showClone')) {
				$SSDComponent.removeClass('showClone');
			}

			$SSDComponent.find('.SearchSD_search_favoriteLink ').show();
			$SSDComponent.find('.SearchSD__FavoriteRemove ').show();
			$SSDComponent.find('.SearchSD__FavoriteActions').show();
			$SSDComponent.addClass('showFavorite');
			$SSDComponent.find('.SelectSD.hasFavorite > a').focus();
			$SSDComponent.addClass('Open');

			// loading show hide list
			$SSDComponent.find('.SearchSD_contentList').hide();
			$SSDComponent.find('.SearchSD__loading').show();
			if ($SSDComponent.find('.SearchSD_showMore a').length > 0) {
				$SSDComponent.find('.SearchSD_showMore').hide();
			}
		};

		/**************
		 *
		 *  Go to Clone UI
		 *  --  remove class Open
		 *  -- Add ShowClone class
		 *  -- SlideDown effect and add Open Class
		 */
		var goToClone = function($SSDComponent) {
			// loading show hide list
			$SSDComponent.find('.SearchSD_contentList').hide();
			$SSDComponent.find('.SearchSD__loading').show();
			if ($SSDComponent.find('.SearchSD_showMore a').length > 0) {
				$SSDComponent.find('.SearchSD_showMore').hide();
			}

			$SSDComponent.find('.SearchSD___input input').val('');
			$SSDComponent.removeClass('Open');

			if (!$SSDComponent.hasClass('showClone')) {
				$SSDComponent.addClass('showClone');
			}
			$SSDComponent.addClass('Open');
		};

		/*
		 * Return to search from favorite or clone
		 */
		var returnToSearch = function($SSDComponent) {
			// loading show hide list
			$SSDComponent.find('.SearchSD_contentList').hide();
			$SSDComponent.find('.SearchSD__loading').show();
			if ($SSDComponent.find('.SearchSD_showMore a').length > 0) {
				$SSDComponent.find('.SearchSD_showMore').hide();
			}

			resetUI($SSDComponent);
			$SSDComponent.removeClass('showClone');
			$SSDComponent.removeClass('showFavorite');
			$SSDComponent.removeClass('Open');
			$SSDComponent.removeClass('MultiSelectActive');

			$SSDComponent.find('.SearchSD__inputWrapper .SearchSD__return').hide();

			if ($SSDComponent.hasClass('hasClone')) {
				$SSDComponent.addClass('hasClone');
				$SSDComponent.find('.SearchSD__cloneWrapper').css('display', 'flex');
			}
			if ($SSDComponent.hasClass('hasFavorite')) {
				$SSDComponent.addClass('hasFavorite');
				$SSDComponent.find('.SearchSD_search_favoriteLink').show();
			}
		};

		/*
		 *   SSDClear closes SSDSearch container
		 *   and clear ssd filter input
		 */
		var ssdClear = function($SSDComponent) {
			$SSDComponent.removeClass('Open');
			$SSDComponent.find('.SearchSD___input input').val('');
		};

		/*
		 *   CloseSSD closes SSDSearch container
		 *   must remove hightlightSelection done by keyboard navigation
		 */
		var closeSSD = function($SSDComponent) {
			$SSDComponent.removeClass('Open');
			$SSDComponentContent.slideUp('250');
			$SSDComponent.find('.selected').removeClass('.selected');
		};

		/*
		 *   Add Open class to SSDComponent
		 *   if SSDComponent has class Open then focus
		 *   makes open effect, check the characters inside the input to filter
		 */
		var ssdFocus = function($SSDComponent) {
			if (!$SSDComponent.hasClass('Open')) {
				// loading show hide list
				$SSDComponent.find('.SearchSD_contentList').hide();
				$SSDComponent.find('.SearchSD__loading').show();
				if ($SSDComponent.find('.SearchSD_showMore a').length > 0) {
					$SSDComponent.find('.SearchSD_showMore').hide();
				}

				$SSDComponent.removeClass('Open');
				$SSDComponent.removeClass('.showClone');
				$SSDComponent.removeClass('.showFavorite');

				if (!$SSDComponent.hasClass('Open')) {
					$SSDComponent.find('.SearchLinkInput a').click();
					$SSDComponent.addClass('Open');
				}
			}
		};

		/*
		 *   When clicking clicking outside the component
		 *   the SSD must close and return to initial state
		 */
		var ClickOut = function(e, $SSDComponent) {
			if (!$SSDComponent.is(e.target) && $SSDComponent.has(e.target).length === 0) {
				returnToSearch($SSDComponent);
				$SSDComponent.removeClass('MultiSelectActive');
			}
		};

		/*
		 *   Triggers the link to initialize
		 *   the database search based on current length of the string inserted on the input
		 */
		var TriggerSearch = function($SSDComponent) {
			var currentWord = $SSDComponent.find('.SearchSD___input input').val();
			var currentCount = currentWord.length;
			if (currentCount >= letterLimit || currentCount === 0) {
				$SSDComponent.find('.SearchLinkInput > a').click();
			}
		};

		/*
		 *   Removes all favorite checked boxes
		 *   and ends MultipleSelect
		 */
		var MultiUncheck = function($SSDComponent) {
			$checkBoxes = $SSDComponent.parent().find('.SelectSD__multiple > input[type="checkbox"]');
			$SSDComponent.removeClass('MultiSelectActive');

			$SSDComponent
				.parent()
				.find('.SelectSD__multiple > input[type="checkbox"]')
				.each(function() {
					$(this).prop('checked', false);
				});
		};

		/*
		 *   KeyBoard events up down and enter if not filter
		 */
		var keyboardEvents = function(e, $SSDComponent) {
			if ($SSDComponent.hasClass('Open')) {
				var currentSelected = $SSDComponentContent.find('.ListRecords > span.selected'); // Current selectable item
				var $firstSelect = $SSDComponentContent.find('.ListRecords > span:first-child'); // First selectable item
				var $lastSelect = $SSDComponentContent.find('.ListRecords > span:last-child'); // Last selectable item
				var countSelected = currentSelected.length; // Number of selected item

				if (e.which == 38) {
					// if key pressed is up arrow
					if (countSelected === 0) {
						currentSelected = $lastSelect;
						$lastSelect.addClass('selected');
					} else {
						currentSelected.removeClass('selected');
						next = currentSelected.prev();

						if (next.length > 0) {
							currentSelected = next.addClass('selected');
						} else {
							currentSelected = currentSelected.last().addClass('selected');
						}
					}
				} else if (e.which == 40) {
					// if key pressed is down arrow
					if (countSelected === 0) {
						$firstSelect.addClass('selected');
					} else {
						next = currentSelected.next();
						currentSelected.removeClass('selected');

						if (next.length > 0) {
							currentSelected = next.addClass('selected');
						} else {
							currentSelected = currentSelected.eq(0).addClass('selected');
						}
					}
				} else if (e.which == 13) {
					// if key pressed is enter
					if (countSelected > 0) {
						e.preventDefault();
						currentSelected.find('.SelectSD .SelectSD_actionLink').click();
						ssdClear($SSDComponent);

						return true;
					} else if ($SSDComponent.find('SearchSD___input input').is(':active') && countSelected === 0) {
						e.preventDefault();
						return true;
					}
				} else {
					executeSearch();
				}
			}
		};

		/*
		 *   The first step is to reset the seetings to default
		 */
		resetUI($SSDComponent);

		/*
		 *  Remove autoComplete from search input
		 */
		$SSDComponent.find('.SearchSD___input input').attr('autocomplete', 'off');

		/*
		 *   If SSD has Clone and the clone list is visible
		 *   onclick "Clone previous medication" then
		 *   remove Open and show items to clone list
		 */
		if (hasClone === 'True') {
			$SSDComponent.addClass('hasClone');
			$SSDComponent.find('.SearchSD__cloneWrapper').css('display', 'flex');
		}

		if (hasFavorite === 'True') {
			$SSDComponent.addClass('hasFavorite');
			$SSDComponent.find('.SearchSD_search_favoriteLink').show();
		}

		if ((hasClone === 'True') & (showClones === 'True')) {
			$SSDComponent.find('.SearchSD_cloneWrapper').click(function() {
				$SSDComponent.addClass('Open');
			});
		}

		$SSDComponent.find('.SearchSD__FavoriteRemove').click(function() {
			ssdClear($SSDComponent);
			returnToSearch($SSDComponent);
			debounce(TriggerSearch($SSDComponent), 550);
			debounce($SSDComponent.find('.SearchSD___input input').focus(), 560);
		});

		$SSDComponent.find('.SearchSD__cloneWrapper').click(function() {
			goToClone($SSDComponent);
			$SSDComponent.find('.SearchSD___goToClone > a').click();
		});

		$SSDComponent.find('.SearchSD__inputWrapper').click(function() {
			if ($SSDComponent.hasClass('showClone')) {
				returnToSearch($SSDComponent);
			}
		});

		$SSDComponent.find('.SearchSD__FavoriteActionsCancel').click(function() {
			MultiUncheck($SSDComponent);
		});

		$SSDComponent.find('.SearchSD___input input').focus(function() {
			debounce(ssdFocus($SSDComponent), 600);
		});

		$('body').mouseup(function(e) {
			ClickOut(e, $SSDComponent);
		});
		/*
		 *   KeyBoard events on key press
		 */
		$SSDComponent
			.find('.SearchSD___input input')
			.add($SSDComponent.find('.SelectSD_actionLink'))
			.on('keyup', function(e) {
				if (!e.which != 13) {
					keyboardEvents(e, $SSDComponent);
				}

				if ($SSDInputElement.val().trim() === '') {
					$SSDClearButton.animate({ opacity: 'hide' }, 300);
				} else {
					$SSDClearButton.animate({ opacity: 'show' }, 300);
				}
			});

		/*
		 *   Prevent form submission on enter,
		 *   instead go to keyboard events to trigger
		 *   the selection
		 */
		$($SSDComponent).on('keydown', function(e) {
			if (e.which == 13) {
				keyboardEvents(e, $SSDComponent);
			}
		});

		$SSDComponent.find('.SearchSD___remove').click(function() {
			ssdClear($SSDComponent);
			debounce(returnToSearch($SSDComponent), 600);
		});

		$SSDComponent.find('.SearchSD_search_favoriteLink').click(function() {
			ssdClear($SSDComponent);
			goToFavorites($SSDComponent);
			$SSDComponent.find('.SearchSD___goToFavorite > a').click();
		});

		$SSDComponent.find('.SearchSD__FavoriteActionsAdd > a').click(function() {
			debounce(TriggerSearch($SSDComponent), 200);
			debounce(returnToSearch($SSDComponent), 350);
		});

		/*
		 *   On Ajax Request hide loading div if the SSD is open then show the
		 *   ListRecords
		 */
		osAjaxBackend &&
			osAjaxBackend.BindAfterAjaxRequest(function() {
				if ($SSDComponent.hasClass('Open')) {
					$SSDComponent.find('.SearchSD__loading').hide();
					$SSDComponentContent.slideDown('1000', function() {
						$SSDComponent.find('.SearchSD_contentList').show();
						if ($SSDComponent.find('.SearchSD_showMore a').length > 0) {
							$SSDComponent.find('.SearchSD_showMore').show();
						}
					});
				}
			});

		$('form').append('<input type="submit" name="ssdInput" onclick="return false;"  style="display:none;" />');

		window.SearchSelectDefine.SSDSearch = {
			returnToSearch: returnToSearch,
			resetUI: resetUI,
			closeSSD: closeSSD,
			ssdFocus: ssdFocus,
			TriggerSearch: TriggerSearch,
			ssdClear: ssdClear,
		};
	});
};
// Added to close the select list if we click the prescription Iframe;
window.addEventListener('DOMContentLoaded', event => {
	var rootElement = document.querySelector('body');
	rootElement.addEventListener(
		'click',
		function(event) {
			document.querySelector("iframe[src*='Prescriptions_CW']") &&
				document
					.querySelector("iframe[src*='Prescriptions_CW']")
					.contentWindow.document.addEventListener('click', e => {
						e.stopPropagation();
						document.querySelector('.SearchSD').classList.remove('Open');
						var allInput = document.querySelector('.SearchSD___input').children;
						for (const element in allInput) {
							return allInput[element].value != undefined ? (allInput[element].value = '') : null;
						}
					});
		},
		true
	);
});


/***/ }),

/***/ "./src/components/05-components/v3-pat/searchable-client-side/scripts.js":
/*!*******************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/searchable-client-side/scripts.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component SearchClientSide */
(function($, window, SapphireWidgets) {
	class SearchClientSide {
		constructor(config) {
			this.options = {
				...config,
			};

			this.onComponentInit();

			$(window).load(() => {
				osAjaxBackend &&
					osAjaxBackend.BindAfterAjaxRequest(() => {
						setTimeout(() => {
							$('#' + this.options.inputId).trigger('change');
						}, 200);
					});
			});
		}

		onComponentInit() {
			$('#' + this.options.inputId).on('change keydown paste input', e => {
				if (e.keyCode === 13) {
					e.preventDefault();
				} else {
					this.searchClientSide(
						this.options.inputId,
						this.options.searchableElementSelector,
						this.options.searchableChildSelector
					);
				}
			});
		}

		searchClientSide(inputId, selector, childSelector) {
			if ($('#' + inputId).is(':visible')) {
				var searchText = osjs('#' + inputId)
					.val()
					.toLowerCase();
				var searchCounter = 0;
				var selecion = osjs(selector);

				selecion.removeClass('searchNotFound');
				selecion.removeClass('searchFound');
				selecion.unhighlight();

				if (childSelector) {
					const elementToSearch = osjs(childSelector);
					elementToSearch.unhighlight();
				}

				if (searchText.length > 1) {
					selecion.each(function() {
						const textToCompare = childSelector
							? $(this)
									.find(childSelector)
									.text()
							: this.innerText;

						if (
							textToCompare
								.trim()
								.toLowerCase()
								.indexOf(searchText) > -1
						) {
							osjs(this).addClass('searchFound');
							searchCounter++;
							osjs(this).highlight(searchText);
						} else {
							osjs(this).addClass('searchNotFound');
						}
					});
				}
			}
		}
	}

	const create = config => (window[config.widgetId] = new SearchClientSide(config));

	SapphireWidgets.SearchClientSide = {
		create,
	};
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/section-expandable-custom/scripts.js":
/*!**********************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/section-expandable-custom/scripts.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component SectionExpandable */
(function($, window, SapphireWidgets) {
	function SectionExpandableCustom() {
		var that = this;

		// Object to save stats
		var previewstat = [];

		// set click events
		function clickEvents(ob) {
			// store querys in a single var
			var Section = $(ob).parent();
			var SectionContent = Section.children('.SectionExpandableCustom_content');

			// get id
			var id = Section.attr('id');

			var tempHeight = 0;

			// has class expanded
			if (Section.hasClass('expanded')) {
				// Calc and set a fixed height, during this process, transitions are disabled
				SectionContent.addClass('noTransition');
				SectionContent.height(SectionContent.height());
				SectionContent[0].offsetHeight; // hack to force a repaint
				SectionContent.removeClass('noTransition');

				// Collapse content
				SectionContent.height(0);
				Section.removeClass('expanded');
				SectionContent.css('overflow', 'hidden');

				// Remove class, set height and save state
				previewstat[id]['client'] = false;
			} else {
				// Calc and set a fixed height
				SectionContent.height('auto');
				tempHeight = SectionContent.height();
				SectionContent.height(0);
				SectionContent.height(tempHeight);
				SectionContent.css('overflow', 'hidden');

				// remove class, set height and save state
				Section.addClass('expanded');
				previewstat[id]['client'] = true;

				if ($('.Page').hasClass('ie8') || $('.Page').hasClass('ie9')) {
					SectionContent.height('auto');
					SectionContent.css('overflow', 'visible');
				}
			}
		}

		// ajax refres function
		that.ajaxRefresh = function() {
			// remove click events
			$('.SectionExpandable_headerCustom').off();

			// add stop prepagation
			$(
				'.SectionExpandable_headerCustom input, .SectionExpandable_headerCustom select, .SectionExpandable_headerCustom a'
			).click(function(event) {
				event.stopPropagation();
			});

			// add new click events
			$('.SectionExpandable_headerCustom').on('click', function() {
				clickEvents(this);
			});

			// each all sections
			$('.SectionExpandableCustom').each(function() {
				// if new SectionExpandable then add to previewstat array
				if (previewstat[$(this).attr('id')] == null) {
					// add stat on array
					var stat = false;
					// if open
					if ($(this).hasClass('expanded')) {
						stat = true;
					}
					// add row
					previewstat[$(this).attr('id')] = {
						client: stat,
						server: stat,
					};
				}

				// curent state (ajax state x initial state)
				var curState = false;

				// check if start expandable
				if ($(this).hasClass('expanded')) {
					curState = true;
				}

				// check if ajax != initial server
				if (curState != previewstat[$(this).attr('id')]['server']) {
					// curstate
					previewstat[$(this).attr('id')]['client'] = curState;
					previewstat[$(this).attr('id')]['server'] = curState;
				} else {
					// has class expanded
					if (previewstat[$(this).attr('id')]['client'] == false && $(this).hasClass('expanded')) {
						$(this).removeClass('expanded');
						$(this)
							.children('.SectionExpandableCustom_content')
							.height(0);
					} else if (previewstat[$(this).attr('id')]['client'] == true && !$(this).hasClass('expanded')) {
						$(this).addClass('expanded');
					}
				}
			});
		};

		// set events
		that.init = function() {
			// each all sections to create array stat
			$('.SectionExpandableCustom').each(function() {
				// add stat on array
				var stat = false;

				// if open
				if ($(this).hasClass('expanded')) {
					stat = true;
				}

				// add row
				previewstat[$(this).attr('id')] = {
					client: stat,
					server: stat,
				};

				if (
					$(this).hasClass('HideWhenEmpty') &&
					$(this)
						.find('.SectionExpandableCustom_content')
						.text().length === 0
				) {
					$(this).hide();
				}

				// hack to display a message when SectionExpandableCustom has no child items
				var isEmpty = true;
				$(this)
					.find('.SectionExpandableCustom_content div, .SectionExpandableCustom_content span')
					.not('.SectionExpandableCustom_content--empty')
					.each(function() {
						if ($(this).text().length > 0) {
							isEmpty = false;
							return false;
						}
					});
				if (!isEmpty) {
					$(this)
						.find('.SectionExpandableCustom_content--empty')
						.css({
							display: 'none',
						});
				}

				var $expandableInstance = $(this);
				var $toggler = $(this).find('> .SectionExpandable-toggler');
				if ($toggler.length === 1) {
					var $togglerState = false;
					$toggler.find('[data-labelvalue]').text($toggler.find('[data-labelshow]').data('labelshow'));
					$toggler.off('click').on('click', function(evt) {
						evt.stopPropagation();
						$togglerState = !$togglerState;
						if ($togglerState) {
							$expandableInstance.find('.SectionExpandable-toggled').show();
							$toggler.find('[data-labelvalue]').text($toggler.find('[data-labelhide]').data('labelhide'));
						} else {
							$expandableInstance.find('.SectionExpandable-toggled').hide();
							$toggler.find('[data-labelvalue]').text($toggler.find('[data-labelshow]').data('labelshow'));
						}
					});
				}
			});

			// add click events
			$('.SectionExpandable_headerCustom')
				.off('click')
				.on('click', function() {
					clickEvents(this);
				});

			// add stop prepagation
			$(
				'.SectionExpandable_headerCustom input, .SectionExpandable_headerCustom select, .SectionExpandable_headerCustom a'
			).click(function(event) {
				event.stopPropagation();
			});

			// event ajax
			osAjaxBackend && osAjaxBackend.BindAfterAjaxRequest(that.ajaxRefresh);
		};
	}

	const create = () => {
		const expandable = new SectionExpandableCustom();

		expandable.init();
	};

	SapphireWidgets.SectionExpandable = {
		create,
	};
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/section-expandable-inside/scripts.js":
/*!**********************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/section-expandable-inside/scripts.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component SectionExpandableInside */
(function($, window, SapphireWidgets) {
	function SectionExpandableInside() {
		var that = this;

		// Object to save stats
		var previewstat = [];

		// set click events
		function clickEvents(ob) {
			// store querys in a single var
			var Section = $(ob).parent();
			var SectionContent = Section.children('.SectionExpandableInside_content');

			// get id
			var id = Section.attr('id');

			var tempHeight = 0;

			// has class expanded
			if (Section.hasClass('expanded')) {
				// Calc and set a fixed height, during this process, transitions are disabled
				SectionContent.addClass('noTransition');
				SectionContent.height(SectionContent.height());
				SectionContent[0].offsetHeight; // hack to force a repaint
				SectionContent.removeClass('noTransition');

				// Collapse content
				SectionContent.height(0);
				Section.removeClass('expanded');
				SectionContent.css('overflow', 'hidden');

				// Remove class, set height and save state
				previewstat[id]['client'] = false;
			} else {
				// Calc and set a fixed height
				SectionContent.height('auto');
				// tempHeight = SectionContent.height();
				// SectionContent.height(0);
				// SectionContent.height(tempHeight);
				SectionContent.css('overflow', 'hidden');

				// remove class, set height and save state
				Section.addClass('expanded');
				previewstat[id]['client'] = true;
			}
		}

		// ajax refres function
		that.ajaxRefresh = function() {
			// remove click events
			$('.SectionExpandableInside .SectionExpandableInside_header').off();

			// add stop prepagation
			$(
				'.SectionExpandableInside .SectionExpandableInside_header input, .SectionExpandableInside .SectionExpandableInside_header select, .SectionExpandableInside .SectionExpandableInside_header a'
			).click(function(event) {
				event.stopPropagation();
			});

			// add new click events
			$('.SectionExpandableInside .SectionExpandableInside_header').on('click', function() {
				clickEvents(this);
			});

			// each all sections
			$('.SectionExpandableInside').each(function() {
				// if new SectionExpandable then add to previewstat array
				if (previewstat[$(this).attr('id')] == null) {
					// add stat on array
					var stat = false;
					// if open
					if ($(this).hasClass('expanded')) {
						stat = true;
					}
					// add row
					previewstat[$(this).attr('id')] = { client: stat, server: stat };
				}

				// curent state (ajax state x initial state)
				var curState = false;

				// check if start expandable
				if ($(this).hasClass('expanded')) {
					curState = true;
				}

				// check if ajax != initial server
				if (curState != previewstat[$(this).attr('id')]['server']) {
					// curstate
					previewstat[$(this).attr('id')]['client'] = curState;
					previewstat[$(this).attr('id')]['server'] = curState;
				} else {
					// has class expanded
					if (previewstat[$(this).attr('id')]['client'] == false && $(this).hasClass('expanded')) {
						$(this).removeClass('expanded');
						$(this)
							.children('.SectionExpandableInside_content')
							.height(0);
					} else if (previewstat[$(this).attr('id')]['client'] == true && !$(this).hasClass('expanded')) {
						$(this).addClass('expanded');
					}
				}
			});
		};

		// set events
		that.init = function() {
			// each all sections to create array stat
			$('.SectionExpandableInside').each(function() {
				// add stat on array
				var stat = false;

				// if open
				if ($(this).hasClass('expanded')) {
					stat = true;
				}

				// add row
				previewstat[$(this).attr('id')] = { client: stat, server: stat };
			});

			// add click events
			$('.SectionExpandableInside .SectionExpandableInside_header')
				.off('click')
				.on('click', function() {
					clickEvents(this);
				});

			// add stop prepagation
			$(
				'.SectionExpandableInside .SectionExpandableInside_header input, .SectionExpandableInside .SectionExpandableInside_header select, .SectionExpandableInside .SectionExpandableInside_header a'
			).click(function(event) {
				event.stopPropagation();
			});

			// event ajax
			osAjaxBackend && osAjaxBackend.BindAfterAjaxRequest(that.ajaxRefresh);
		};
	}

	const setOpenCloseClass = id => {
		id.click(function() {
			if (id.parent().hasClass('expanded')) {
				$(this)
					.find('.HeaderIcon')
					.removeClass('open');
				$(this)
					.find('.HeaderIcon')
					.addClass('closed');
			} else {
				$(this)
					.find('.HeaderIcon')
					.removeClass('closed');
				$(this)
					.find('.HeaderIcon')
					.addClass('open');
			}
		});
	};

	const create = () => {
		const expandable = new SectionExpandableInside();

		expandable.init();
	};

	SapphireWidgets.SectionExpandableInside = {
		create,
		setOpenCloseClass,
	};
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/select-system/scripts.js":
/*!**********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/select-system/scripts.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component SelectSystem */
SapphireWidgets.SelectSystem = config => {
	$(function() {
		var WidgetId = config.WidgetId; //Combo Box Id to be used.
		var Class = config.Class; //All Combo boxes with this class will be be transformed.
		var NoResultsText = config.NoResultsText; //Text to display when there are no results.
		var inputType = config.InpuType; //Options: FIlters, Dropdown, Select2
		var Prompt = config.Prompt; //Prompt in search
		var Select2Type = config.SelectType; // Type of select2 configuration
		var HasSearch = config.HasSearch; // has search
		var OnSelectingJS = config.OnSelectingJS;
		var OnUnSelectingJS = config.OnUnSelectingJS;
		var MaximumLength = config.MaximumLength;
		var SelectedValue = config.SelectedValue;
		var allowClear = config.allowClear;
		//  Select2 Ajax Configuration
		var AjaxURL = config.AjaxURL;
		var AjaxDelay = config.AjaxDelay;
		var PaginationSize = config.PaginationSize;
		var MinimumInputLenght = config.MinimumInputLenght;
		var SearchTerm = config.SearchTerm;
		var SearchExtraParam1 = config.SearchExtraParam1;
		var PageTerm = config.PageTerm;
		var AmountPage = config.PageAmount;
		var isMultiple = config.isMultiple;
		var Select2Options = {};
		var $WidgetIdentifier;

		if (config.locale === 'AR' || config.locale === 'FA') {
			Select2Options.dir = 'rtl';
		}
		
		Select2Options.theme = 'default SelectSystem';

		console.log("--- " + Select2Type + " ---");
		/*  
          Change select2 search display 
              -Multiple Select2 search UI like Single Select2
      */
		$.fn.select2.amd.define(
			'SearchLikeSingle',
			[
				'select2/utils',
				'select2/dropdown',
				'select2/dropdown/attachBody',
				'select2/dropdown/attachContainer',
				'select2/dropdown/search',
				'select2/dropdown/minimumResultsForSearch',
			],
			function(Utils, Dropdown, AttachBody, AttachContainer, Search, minimumResultsForSearch) {
				let dropdownSearch = Utils.Decorate(Dropdown, Search);
				dropdownSearch.prototype.render = function() {
					var $rendered = Dropdown.prototype.render.call(this);
					// Add ability for a placeholder in the search box
					let placeholder = this.options.get('placeholderForSearch') || '';
					var $search = $(
						'<span class="select2-search select2-search--dropdown">' +
							'<input class="select2-search__field" placeholder="' +
							placeholder +
							'" type="search"' +
							' tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off"' +
							' spellcheck="false" role="textbox" />' +
							'</span>'
					);

					this.$searchContainer = $search;
					this.$search = $search.find('input');
					$search.addClass('MultipleSelect');

					$rendered.prepend($search);
					$search.parent().addClass('MultipleSelect');
					return $rendered;
				};

				// Decorate the dropdown+search with the containers
				let adapter = Utils.Decorate(dropdownSearch, AttachContainer);
				adapter = Utils.Decorate(adapter, AttachBody);

				return adapter;
			}
		);

		/**
		 * Default Configuration needed to associate the widget to the select2 plugin
		 */
		if (WidgetId === '' && Class != '') {
			$WidgetIdentifier = $('.' + Class);
		} else {
			$WidgetIdentifier = $('#' + WidgetId);
		}
		Select2Options.containerCssClass = 'select-hide ' + inputType;

		//  Select2Options.dropdownParent= $('#'+ParentDiv);

		var formatResult = function(result) {
			var $selectedOptionsValue = $WidgetIdentifier.find(':selected');
			var selectedOptions = $selectedOptionsValue.length;
			var totalOptions = $WidgetIdentifier.find('option').length;
			var selectAllOpt = $WidgetIdentifier.find('option:first-child:selected').length;
			var activeValues = '';
			var allOptExceptAll = $WidgetIdentifier.find(':selected:not(".SelectedAll")').length;
			var $allOptExceptAllObj = $WidgetIdentifier.find(':selected:not(".SelectedAll")');

			if (selectedOptions === totalOptions) {
				if (totalOptions - 1 > 3) {
					return 'All Selected';
				} else {
					$allOptExceptAllObj.each(function() {
						activeValues = activeValues + ' ' + $(this)[0].innerText;
					});
					activeValues = activeValues.replace(/,\s*$/, '');
					return activeValues;
				}
			} else {
				var totalopt = totalOptions - 1;
				if (selectedOptions > 3) {
					return selectedOptions + ' of ' + totalopt + ' selected';
				} else {
					if (selectedOptions > 0) {
						$selectedOptionsValue.each(function() {
							activeValues = activeValues + ' ' + $(this)[0].innerText + ', ';
						});
						activeValues = activeValues.replace(/,\s*$/, '');
						return activeValues;
					} else {
						return 'Select an option';
					}
				}
			}
		};

		if (NoResultsText != '') {
			Select2Options.formatNoMatches = function() {
				return NoResultsText;
			};
		}

		if (inputType != '') {
			Select2Options.dropdownCssClass = inputType;
		}

		if (allowClear === 'True') {
			Select2Options.allowClear = true;
		}

		if (MaximumLength != '') {
			Select2Options.maximumInputLength = MaximumLength;
		}

		if (Prompt != '') {
			Select2Options.placeholder = Prompt;
		} else {
			Select2Options.placeholder = {
				id: '-1', // the value of the option
				text: 'Select an option',
			};
		}

		if (Select2Type === '3') {
			// Select2 Ajax
			Select2Options = {};

			if (config.locale === 'AR' || config.locale === 'FA') {
				Select2Options.dir = 'rtl';
			}

			Select2Options.allowClear = false;

			Select2Options.templateSelection = function(repo) {
				if (!repo.element) {
					return Prompt;
				}

				return repo.full_name || repo.text;
			};

			Select2Options.templateResult = function(repo) {
				if (repo.loading) {
					return repo.text;
				}
				var markup = '<div class=""Clearfix"">' + '<div class=""ThemeGrid_Width12"">' + repo.text + '</div>';
				if (repo.description) {
					markup += '<div class=""OSAutoMarginTop"">' + repo.description + '</div>';
				}
				markup += '</div>';
				return markup;
			};

			(Select2Options.ajax = {
				url: AjaxURL,
				dataType: 'json',
				delay: AjaxDelay,
				data: function(params) {
					var Select2AjaxOpt = {};
					var SplitParameter = SearchExtraParam1.split(',');
					Select2AjaxOpt.SearchParameter = params.term;
					Select2AjaxOpt.Page = params.page || 1;
					Select2AjaxOpt.PageAmount = AmountPage;

					SplitParameter.forEach(function(el) {
						var splitText = el.split(':');
						Select2AjaxOpt[splitText[0]] = splitText[1];
					});

					return Select2AjaxOpt;
				},
				processResults: function(data, params) {
					params.page = params.page || 1;

					return {
						results: data.items,
						pagination: {
							more: params.page * PaginationSize < data.total_count,
						},
					};
				},
				cache: true,
			}),
				(Select2Options.minimumInputLength = MinimumInputLenght);

			Select2Options.escapeMarkup = function(markup) {
				return markup;
			};

			if (config.isMultiple) {
				Select2Options.multiple = true;
				Select2Options.containerCssClass = 'Select2Ajax Multiple';
				Select2Options.dropdownCssClass = 'Select2Ajax Multiple';
			} else {
				Select2Options.multiple = false;
				Select2Options.containerCssClass = 'Select2Ajax';
				Select2Options.dropdownCssClass = 'Select2Ajax';
			}

			if (SelectedValue !== '') {
				try {
					const data = JSON.parse(SelectedValue);
					const option = new Option(data.Value, data.Id, true, true);

					$WidgetIdentifier.append(option).trigger('change');
				} catch (error) {
					console.error(`Component SelectSystem (${WidgetId}): SelectedValue must be a valid JSON!`);
				}
			}

			Select2Options.minimumResultsForSearch = 0;
			Select2Options.tags = config.HasTags;
			Select2Options.closeOnselect = true;
		}

		if (Select2Type === '2') {
			//Select2 with CheckBox

			var isAllSelected = false;
			if ($WidgetIdentifier[0].options.length === $WidgetIdentifier[0].selectedOptions.length) {
				isAllSelected = true;
			}

			if (WidgetId != '') {
				option = new Option('Select All', 'All', true, isAllSelected);
				$WidgetIdentifier.prepend(option);
				$WidgetIdentifier.find('option:first-child').addClass('SelectedAll');
			}
			Select2Options.multiple = true;
			Select2Options.closeOnSelect = false;
			Select2Options.allowHtml = false;
			Select2Options.tags = false;

			if (HasSearch === 'True') {
				Select2Options.dropdownAdapter = $.fn.select2.amd.require('SearchLikeSingle');
			} else {
				Select2Options.minimumResultsForSearch = -1;
			}

			Select2Options.containerCssClass = 'MultipleSelect';
			Select2Options.dropdownCssClass = 'MultipleSelect';
			Select2Options.templateSelection = formatResult;
		}

		if (Select2Type === '6') {
			// Select2 HtmlOptions
			Select2Options = {};
			if (config.locale === 'AR' || config.locale === 'FA') {
				Select2Options.dir = 'rtl';
			}

			var dataHtmlOption = [];
			$WidgetIdentifier.find('option').each(function(key, value) {
				var optionObject = {
					id: $(this).val(),
					text: $(this).text(),
					html: $(this).text(),
				};
				dataHtmlOption.push(optionObject);
			});

			Select2Options.containerCssClass = 'customSelect';
			Select2Options.dropdownCssClass = 'dropdownCustom';
			Select2Options.data = dataHtmlOption;
			Select2Options.escapeMarkup = function(markup) {
				return markup;
			};

			if (SelectedValue != '') {
				$WidgetIdentifier.val(SelectedValue).trigger('change');
			} else {
				$WidgetIdentifier.val('').trigger('change');
			}
		}

		if (Select2Type === '1') {
			// Select2 TagCustom
			Select2Options.tags = true;
			Select2Options.containerCssClass = 'tagCustom';
			Select2Options.dropdownCssClass = 'tagCustom';
			Select2Options.TokenSeparatos = [',', ' '];
			Select2Options.createSearchChoice = function(term, data) {
				if (
					$(data).filter(function() {
						return this.text.localeCompare(term) === 0;
					}).length === 0
				) {
					return {
						id: term,
						text: term,
					};
				}
			};
		}

		if (Select2Type === '5') {
			// Select2 TagMultiple
			Select2Options.tags = true;
			Select2Options.containerCssClass = 'tagSystem';
			Select2Options.dropdownCssClass = 'tagSystem';
			Select2Options.createTag = function(params) {
				var term = $.trim(params.term);
				if (term === '') {
					return null;
				}
				return {
					id: '#' + term,
					text: term,
					newTag: true, // add additional parameters
				};
			};
		}

		if (HasSearch === 'False') {
			Select2Options.minimumResultsForSearch = -1;
		}

		if (OnUnSelectingJS != '' || OnSelectingJS != '') {
			$WidgetIdentifier
				.select2(Select2Options)
				.on('select2:unselecting', function(e) {
					$(this).data('unselecting', true);
					OnUnSelectingJS;
				})
				.on('select:selecting', function(e) {
					OnSelectingJS;
				})
				.on('select:opening', function(e) {
					if ($(this).data('unselecting')) {
						$(this).removeData('unselecting');
						e.preventDefault();
					}
				})
				.on('select:open', function(evt) {
					evt.preventDefault();
				})
				.on('select2:close', function(evt) {
					evt.preventDefault();
				});
		} else {
			if (Select2Type === '2') {
				$WidgetIdentifier.select2(Select2Options);
				var idwidget = '#' + WidgetId;

				$WidgetIdentifier.on('select2:select', function(e) {
					UnselectedId = e.params.data.id;
					if (UnselectedId === 'All') {
						var selectedItems = [];
						var allOptions = $(idwidget + ' option');
						allOptions.each(function() {
							selectedItems.push($(this).val());
						});
						$WidgetIdentifier.select2('destroy');
						$WidgetIdentifier.val(selectedItems).trigger('change');
						$WidgetIdentifier.select2(Select2Options);
						$WidgetIdentifier.select2('open');
					} else {
						var selectedOptions = $WidgetIdentifier.find('option:selected').length;
						var totalOptions = $WidgetIdentifier.find('option').length;
						if (selectedOptions === totalOptions - 1 && $(idwidget + ' >  option:selected:first-child').length === 0) {
							var selectedItems = [];
							var allOptions = $(idwidget + ' option');
							allOptions.each(function() {
								selectedItems.push($(this).val());
							});
							$WidgetIdentifier.select2('destroy');
							$WidgetIdentifier.val(selectedItems).trigger('change');
							$WidgetIdentifier.select2(Select2Options);
							$WidgetIdentifier.select2('open');
						}
					}
				});

				$WidgetIdentifier.on('select2:unselect', function(e) {
					UnselectedId = e.params.data.id;
					if (UnselectedId === 'All') {
						$(idwidget + ' > option').removeAttr('selected');
						$WidgetIdentifier.select2('destroy');
						$WidgetIdentifier.select2(Select2Options);
						$WidgetIdentifier.select2('open');
						$(idwidget)
							.val('')
							.trigger('change');
						//$(idwidget +' > option').attr('selected', "selected");
					} else {
						$(idwidget + ' > option:first-child').removeAttr('selected');
						$WidgetIdentifier.select2(Select2Options);
						$WidgetIdentifier.select2('open');
					}
				});
			} else {
				$WidgetIdentifier.select2(Select2Options);
			}
		}

		if (Select2Type === '4') {
			$WidgetIdentifier.select2(Select2Options);
			var idwidget = '#' + WidgetId;

			$WidgetIdentifier.on('select2:select', function(e) {
				if(e.target.selectedIndex !== 0){
					$WidgetIdentifier.parent().addClass('SelectSystemFilter-Selected');
				}else{
					$WidgetIdentifier.parent().removeClass('SelectSystemFilter-Selected');
				}
			})
		}
	});
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/shift-container/scripts.js":
/*!************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/shift-container/scripts.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component ShiftContainer */
(function($, window, document, SapphireWidgets) {
	let shiftTimelineResizeTimer;
	let $shiftContainerId = $();

	const create = shiftContainerId => {
		// $('.ShiftCard_timeLine').css('visibility', 'hidden');

		$('.ShiftExpandable_container .ActionsMenu ').css('display', 'none');

		$shiftContainerId = $(shiftContainerId);

		hasScrollBar();
		handleShiftTable();

		// setTimeout(function () {
		// 	$('.ShiftCard_timeLine').css('visibility', 'visible');
		// 	$('.ShiftExpandable_container .ActionsMenu ').css('display', 'block');
		// }, 1500);

		$('.ShiftExpandable__arrow')
			.off('mousedown')
			.on('mousedown', function() {
				setTimeout(function() {
					redrawShiftTimeline();
				}, 1500);
			});
	};

	const handleShiftTable = () => {
		$('.ShiftExpandable').each(function(index, el) {
			var $elFlag = $(this)
				.parent()
				.find('.FlagLine');
			var $elFlagTime = $(this)
				.parent()
				.find('.FlagLine_time');
			var $columnFlag = $elFlag.data('column');
			var $minutesFlag = $elFlag.data('minutes');
			var $slots = $(this)
				.closest('.ShiftContainer')
				.find('.ShiftContainer_header')
				.find('.ShiftCellContent');
			var $slotWidth = Math.round($slots.eq(0).width());
			var minutesPosition = ($minutesFlag * $slotWidth) / 60;

			// handle current time flog horizontal positioning
			var slotsPosition = [];
			$slots.each(function(index, el) {
				slotsPosition.push($(this).position().left);
			});
			$elFlag.css('left', slotsPosition[$columnFlag - 1] + minutesPosition);
			$elFlag.css('display', 'block');
			if ($columnFlag === $slots.length) {
				$elFlagTime.css({
					right: '1px',
					left: 'auto',
				});
			}

			// handle cells that might span over several slots
			$(this)
				.find('.ShiftCard')
				.each(function(index, elRow) {
					var rowHasSpannedCell = false;
					$(elRow)
						.find('.ShiftCellContent')
						.each(function(index, elCell) {
							var colspan = $(elCell).data('colspan');
							if (colspan === slotsPosition.length || rowHasSpannedCell) {
								$(elCell).css({
									display: 'inline-block',
									flex: '1 1 auto',
								});
							} else if (colspan > 1) {
								rowHasSpannedCell = true;
								$(elCell).css({
									display: 'inline-block',
									flex: 'none',
									width: +(slotsPosition[colspan] - slotsPosition[0]) + 'px',
								});
							}
						});
				});

			// handle horizontal scroll behavior
			if (el.scrollWidth > el.clientWidth) {
				$(el).width(el.scrollWidth);
				$(this)
					.closest('.ShiftContainer')
					.find('.ShiftContainer_header')
					.width(el.scrollWidth);
			} else {
				$(el).width('auto');
				$(this)
					.closest('.ShiftContainer')
					.find('.ShiftContainer_header')
					.width('auto');
			}
		});
	};

	const hasScrollBar = () => {
		var $ScrollableDiv = $shiftContainerId.find('.ShiftExpandable_container');
		if ($shiftContainerId.find('.ShiftExpandable_container').length > 0) {
			if ($ScrollableDiv.get(0).scrollHeight > $ScrollableDiv.height()) {
				var $lastCell = $shiftContainerId.find('.IsTimer:last-child');
				$lastCell.css('padding-right', '7px');
			}
		}
	};

	const redrawShiftTimeline = () => {
		clearTimeout(shiftTimelineResizeTimer);
		shiftTimelineResizeTimer = setTimeout(function() {
			hasScrollBar();
			handleShiftTable();
		}, 400);
	};

	const checkScroll = () => {
		var hContent = $('.Content').height();
		var hWindow = $(window).height();

		if (hContent > hWindow) redrawShiftTimeline();
	};

	SapphireWidgets.ShiftContainer = {
		create,
		checkScroll,
		redrawShiftTimeline,
	};
})(jQuery, window, document, SapphireWidgets);

$(window)
	.off('resize.GenericGallery')
	.on('resize.GenericGallery', function() {
		$('.ShiftCard_timeLine').css('visibility', 'hidden');
		$('.ShiftExpandable_container .ActionsMenu').css('display', 'none');

		SapphireWidgets.ShiftContainer.redrawShiftTimeline();

		osAjaxBackend && osAjaxBackend.BindAfterAjaxRequest(SapphireWidgets.ShiftContainer.redrawShiftTimeline);

		setTimeout(SapphireWidgets.ShiftContainer.checkScroll, 1000);

		setTimeout(function() {
			$('.ShiftCard_timeLine').css('visibility', 'visible');
			$('.ShiftExpandable_container .ActionsMenu').css('display', 'block');
		}, 1500);
	});

$(window).load(function() {
	if (!!$('.ShiftContainer').length) {
		$('.ShiftCard_timeLine').css('visibility', 'hidden');
		$('.ShiftExpandable_container .ActionsMenu').css('display', 'none');

		setTimeout(function() {
			SapphireWidgets.ShiftContainer.redrawShiftTimeline();
		}, 400);

		setTimeout(SapphireWidgets.ShiftContainer.checkScroll, 500);

		setTimeout(function() {
			$('.ShiftCard_timeLine').css('visibility', 'visible');
			$('.ShiftExpandable_container .ActionsMenu').css('display', 'block');
		}, 600);

		$('.navigation-control-item')
			.off('click')
			.on('click', function() {
				$('.ShiftCard_timeLine').css('visibility', 'hidden');
				$('.ShiftExpandable_container .ActionsMenu').css('display', 'none');
			});

		//Verify the scroll if tooltip opened
		$('.ShiftExpandable_container').on('scroll', function() {
			if ($('.tooltipster-base').is(':visible')) {
				$('.tooltipster-base').css('visibility', 'hidden');
			}
		});

		osAjaxBackend.BindAfterAjaxRequest(function() {
			setTimeout(function() {
				SapphireWidgets.ShiftContainer.redrawShiftTimeline();
			}, 400);

			setTimeout(SapphireWidgets.ShiftContainer.checkScroll, 500);

			setTimeout(function() {
				$('.ShiftCard_timeLine').css('visibility', 'visible');
				$('.ShiftExpandable_container .ActionsMenu').css('display', 'block');
			}, 600);

			// SapphireWidgets.ShiftContainer.redrawShiftTimeline;
		});
	}
});


/***/ }),

/***/ "./src/components/05-components/v3-pat/shift-table/shiftTable.js":
/*!***********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/shift-table/shiftTable.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component ShiftTable */
SapphireWidgets.ShiftTable = widgetId => {
	$(document).ready(() => {
		setTimeout(() => {
			const $shiftTable = $(`#${widgetId}`);
			const $headerCellList = $shiftTable.find('.ShiftTable__HeaderLabels .ShiftTableCell');
			const $hourLine = $shiftTable.find('.HourLine');

			const columnLine = $hourLine.data('column');
			const minutesLine = $hourLine.data('minutes');

			const cellWidth = $headerCellList.eq(0).width();
			const minutesPosition = (cellWidth / 60) * minutesLine;

			// Handle current hour line horizontal positioning
			const cellPosition = [];

			$headerCellList.each(function(index, el) {
				cellPosition.push($(this).position().left);
			});

			$hourLine.css('left', cellPosition[columnLine - 1] + minutesPosition);
			$hourLine.css('display', 'flex');
		}, 500);
	});
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/shift-table/shiftTableCard.js":
/*!***************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/shift-table/shiftTableCard.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component ShiftTableCard */
SapphireWidgets.ShiftTableCard = widgetId => {
	const $component = $(`#${widgetId}`);
	const $actions = $component.find('.MoreActions');
	const hasActions = $actions.length > 0;

	if (hasActions) {
		$actions.on('click', e => {
			e.stopPropagation();

			$('.ShiftTableCard').removeClass('ShiftTableCard--selected');
			$component.addClass('ShiftTableCard--selected');

			window.addEventListener('click', onClickOutside);
		});

		const onClickOutside = e => {
			const $target = $(e.target);

			if (!e.target.className.includes($component) && !$target.parents($component).is($component)) {
				$component.removeClass('ShiftTableCard--selected');

				window.removeEventListener('click', onClickOutside);
			}
		};
	}
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/shift-table/shiftTableCardProgress.js":
/*!***********************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/shift-table/shiftTableCardProgress.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

SapphireWidgets.ShiftTableCardProgress = config => {
	const DEFAULT_PADDING = 0;
	const DEFAULT_CARD_HEIGHT = 56;

	const setTableCardProgress = () => {
		const cardProgresID = config.widgetId;
		const startColumn = config.startColumn;
		const endColumn = config.endColumn;
		const initialMinutes = config.initialMinutes;
		const beginsIncomplete = config.beginsIncomplete;
		const endsIncomplete = config.endsIncomplete;

		const $cardProgress = $('#' + cardProgresID);
		const $shiftTable = $cardProgress.closest('.ShiftTable');
		const $tableCellList = $shiftTable.find('.ShiftTable__Content .ShiftTableCell');
		const $tableRowContent = $cardProgress.closest('.ShiftTableRow__Content');
		const $tableCard = $tableRowContent.find('.ShiftTableCard');
		const $cardProgressList = $tableRowContent.find('.ShiftTableCardProgress');
		const $progressBarList = $cardProgress.find('.ProgressBarWrap');
		const $actions = $cardProgress.find('.MoreActions');

		const cardsTotal = $tableCard.length;
		const timeSlotWidth = $tableCellList[1].getBoundingClientRect().width;
		const colFill = parseInt(endColumn) - parseInt(startColumn) + 1;
		const minuteValueWidth = timeSlotWidth / 60;
		const hasActions = $actions.length > 0;

		let totalLeft = beginsIncomplete ? 0 : (initialMinutes * minuteValueWidth);

		for (let i = 1; i < parseInt(startColumn); i++) {
			totalLeft += $tableCellList[i].getBoundingClientRect().width;
		}

		let roundWidth = Math.round((timeSlotWidth + Number.EPSILON) * 100) / 100;
		const paddingOffset = DEFAULT_PADDING * 2;
		const newWidth = parseFloat((colFill * roundWidth - paddingOffset) - (beginsIncomplete ? 0 : (endsIncomplete ? (initialMinutes * minuteValueWidth) : 0)));
		const direction = $('.Page').hasClass('AR') || $('.Page').hasClass('FA') ? 'right' : 'left';

		$cardProgress.css('width', `${newWidth}px`);
		$cardProgress.css('max-width', 'unset');
		$cardProgress.css(direction, `${(totalLeft += DEFAULT_PADDING)}px`);

		if (cardsTotal > 0) {
			let count = 0;

			$tableCard.each(function() {
				const $this = $(this);
				const isOverlaped = checkForOverlap($cardProgress[0], $this[0]);

				if (isOverlaped === true && count < $cardProgressList.length) {
					$cardProgress.css('top', $this[0].offsetTop + $cardProgress.height());
				}

				count = count++;
			});

			$cardProgressList.each(function() {
				const $this = $(this);

				const helper = helperObj($this, $cardProgress, $cardProgressList);

				if (helper.isOverlaped) {
					$cardProgress.css('top', $this[0].offsetTop + 130);
				} else {
					$cardProgress.css('top', $tableRowContent.height() - DEFAULT_PADDING);
				}
			});

			const offset = 4 + DEFAULT_CARD_HEIGHT + DEFAULT_PADDING * 2;

			$tableRowContent.height($cardProgressList.last().position().top + offset);
		} else {
			$cardProgressList.each(function() {
				const $this = $(this);

				const helper = helperObj($this, $cardProgress, $cardProgressList);

				if (helper.isOverlaped) {
					const offset = DEFAULT_CARD_HEIGHT + DEFAULT_PADDING * 2;

					$cardProgress.css('top', $cardProgress[0].offsetTop + offset + 'px');
					helper.$shiftCard.height(helper.$shiftCard.height() + $this[0].offsetHeight);
				}
			});
		}

		setTimeout(() => {
			if (timeSlotWidth !== $tableCellList[1].getBoundingClientRect().width) {
				setTableCardProgress(config);
			}
		}, 500);

		if (hasActions) {
			$actions.on('click', e => {
				e.stopPropagation();

				$cardProgress.addClass('ShiftTableCardProgress--selected');

				window.addEventListener('click', onClickOutside);
			});

			const onClickOutside = e => {
				const $target = $(e.target);

				if (!e.target.className.includes($cardProgress) && !$target.parents($cardProgress).is($cardProgress)) {
					$cardProgress.removeClass('ShiftTableCardProgress--selected');

					window.removeEventListener('click', onClickOutside);
				}
			};
		}

		/*$progressBarList.each(function(index) {
			const beginslot = $(this).data('beginslot');
			const beginminute = $(this).data('beginminute');
			const endslot = $(this).data('endslot');
			const endminute = $(this).data('endminute');
			const actionsWidth = 56;

			const progressBarMinutes = (endslot - beginslot) * 60 + endminute - beginminute;
			const progressendWithPer = progressBarMinutes * minuteValueWidth;

			const $progressTotal = $(this).find('.ProgressBar__animation');

			//$(this).css('left', ((beginslot - 1) * 60 + beginminute) * minuteValueWidth + 'px');
			$progressTotal.css('width', progressendWithPer - actionsWidth + 'px');
		});*/
	};

	const checkForOverlap = (el1, el2) => {
		const bounds1 = el1.getBoundingClientRect();
		const bounds2 = el2.getBoundingClientRect();

		const firstIstLeftmost = bounds1.left <= bounds2.left;
		const leftest = firstIstLeftmost ? bounds1 : bounds2;
		const rightest = firstIstLeftmost ? bounds2 : bounds1;

		// Replace > to to >= if border overlap should count
		if (leftest.right > rightest.left) {
			const firstIsTopmost = bounds1.top <= bounds2.top;
			const topest = firstIsTopmost ? bounds1 : bounds2;
			const bottomest = firstIsTopmost ? bounds2 : bounds1;

			// Replace > to >= if border should count
			return topest.bottom > bottomest.top;
		} else return false;
	};

	const helperObj = ($this, $cardProgress, $cardProgressList) => {
		const $shiftCard = $this.closest('.ShiftTableRow__Content');
		let isOverlaped = checkForOverlap($cardProgress[0], $this[0]);
		const createdId = $cardProgress.attr('id');
		const loopedId = $this.attr('id');
		const $firstSlotCreated = $cardProgressList[0];

		isOverlaped = isOverlaped === true && createdId != loopedId && createdId != $firstSlotCreated.id;

		return { $shiftCard, createdId, loopedId, $firstSlotCreated, isOverlaped };
	};

	$(document).ready(function() {
		setTableCardProgress(config);
	});

	$(window).resize(function() {
		if (window[config.widgetId]) {
			clearTimeout(window[config.widgetId].resizedFinished);
			window[config.widgetId].resizedFinished = setTimeout(function() {
				setTableCardProgress(config);
			}, 250);
		}
	});
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/shift-table/shiftTableHover.js":
/*!****************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/shift-table/shiftTableHover.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component ShiftTableCardHover */
SapphireWidgets.ShiftTableCardHover = widgetId => {
	$(document).ready(function() {
		const $card = $(`#${widgetId}`);
		const $cardContent = $card.find('.ShiftTableCardHover__Content');

		$cardContent.on('click', e => {
			e.stopPropagation();

			$card.addClass('ShiftTableCardHover--selected');

			window.addEventListener('click', onClickOutside);
		});

		const onClickOutside = e => {
			const $target = $(e.target);

			if (!e.target.className.includes($card) && !$target.parents($card).is($card)) {
				$card.removeClass('ShiftTableCardHover--selected');

				window.removeEventListener('click', onClickOutside);
			}
		};
	});
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/side-menu/scripts.js":
/*!******************************************************************!*\
  !*** ./src/components/05-components/v3-pat/side-menu/scripts.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component SideMenuStructure */
(function($, window, SapphireWidgets) {
	class SideMenu {
		constructor(config) {
			this.options = {
				...config,
			};

			this.onComponentInit();
		}

		setMainMenuWidth() {
			$(document).ready(() => {
				const $sideBarIframe = $('.LayoutBase-iframesidebar.notExpandable');

				if ($sideBarIframe.length) {
					const $mainMenu = $('.LayoutBase-MainMenu');
					$mainMenu.css({
						width: 'calc(100% - 262px)',
					});
				}
			});
		}

		openCloseMenu(toOpen) {
			if (toOpen) {
				this.$component.addClass('SideMenu--open');

				$('.LayoutBase-iframesidebar').css({
					zIndex: 0,
				});
			} else {
				this.$component.removeClass('SideMenu--open');

				$('.LayoutBase-iframesidebar').css({
					zIndex: 70,
				});
			}
		}

		windowClick($component) {
			$(window)
				.off('click.SideMenuStructure')
				.on('click.SideMenuStructure', event => {
					const isMenuItem = event.target.offsetParent && $(event.target.offsetParent).hasClass('MenuItem');

					if (!isMenuItem) {
						$component.find('.SideMenu__MenuItems .active').removeClass('active');
						$component.find('.SideMenu__MenuItems .show').removeClass('show');

						$(window).off('click.SideMenuStructure');
					}
				});
		}

		onComponentInit() {
			this.setMainMenuWidth();

			this.$component = $(`#${this.options.widgetId}`);
			this.$trigger = this.$component.find('.SideMenu__Trigger');
			this.$shield = this.$component.find('.SideMenu__Shield');
			this.$closeButton = this.$component.find('.SideMenu__MenuClose');
			this.$tabItem = this.$component.find('.SideMenu__TabItems .MenuItem');
			this.$menuItem = this.$component.find('.SideMenu__MenuItems .MenuItem__ItemTitle');
			this.$subItem = this.$component.find('.SideMenu__MenuItems .MenuItem_subItems');
			this.$department = this.$component.find('.SideMenu__Tabs .DepartmentName');

			//this.$trigger.hide();
			this.$department.hide();

			this.$iframeContainer = this.$component.find('.iframeContainer');
			this.$iframeContainer.append('<div class="lds-ring OI"><div></div><div></div><div></div><div></div></div>');
			this.$iframeContainer.find('iframe').load(() => {
				this.$iframeContainer.find('.lds-ring').fadeOut();

				if (!this.$component.hasClass('SideMenu--tabsTheme')) {
					//this.$trigger.show();
					this.$department.show();
				}
			});

			this.$trigger.on('click', () => this.openCloseMenu(true));
			this.$shield.on('click', () => this.openCloseMenu(false));
			this.$closeButton.on('click', () => this.openCloseMenu(false));

			this.$tabItem.on('click', event => {
				const $target = $(event.currentTarget);
				const $link = $target.find('.MenuItem_label a');

				if ($link.length) $link.get(0).click();
			});

			this.$menuItem.on('click', event => {
				const isIcon = event.target.className === 'icon icon-changedown';
				if (event.target !== event.currentTarget && !isIcon) return;

				const $target = $(event.currentTarget).parent();
				const $subItems = $target.find('.MenuItem_subItems');
				const $link = $target.find('.MenuItem_label a');

				if ($link.length) $link.get(0).click();

				if ($target.hasClass('active')) {
					$target.removeClass('active');
					$subItems.removeClass('show');
				} else {
					this.$component
						.find('.SideMenu__MenuItems .active')
						.not($target)
						.removeClass('active');

					this.$component
						.find('.SideMenu__MenuItems .show')
						.not($target)
						.removeClass('show');

					$target.toggleClass('active');
					$subItems.toggleClass('show');

					if (this.$component.hasClass('SideMenu--tabsTheme')) {
						this.windowClick(this.$component);
					}
				}
			});

			this.$subItem.on('click', event => event.stopPropagation());

			this.$component
				.find('.SideMenu__TabItems > div:empty')
				.parent()
				.hide();
		}
	}

	const resizeTabs = ($component, $menuTabs, isRecursive) => {
		const $menuTrigger = $component.find('.SideMenu__Trigger');
		const headerWidth = $component.find('.SideMenu__Header').outerWidth();
		const $menuItems = $menuTabs.find('.SideMenu__MenuItems');
		const tabsWidth = $menuItems.length ? $menuItems.outerWidth() : $menuTabs.outerWidth();

		const fixedValue = $(window.parent).width() < 1024 ? 180 : 196;
		let hasItemToRemove = true;

		if (tabsWidth > 0 && tabsWidth + fixedValue > headerWidth && hasItemToRemove) {
			const $moreOptions = $component.find('.SideMenu__Content');
			const $lastItem = $menuTabs
				.find('.SideMenu__MenuItems .MenuItem')
				.last()
				.detach();

			if (!$moreOptions.find('.SideMenu__MenuItems').length) {
				$('<div class="SideMenu__MenuItems"></div>').appendTo($moreOptions);
			}

			const $menuItems = $moreOptions.find('.SideMenu__MenuItems');
			$lastItem.prependTo($menuItems);

			$menuTrigger.css('visibility', 'visible');

			hasItemToRemove = !!$lastItem.length;

			resizeTabs($component, $menuTabs, !!$lastItem.length);
		} else if (!isRecursive) {
			const $menuItems = $menuTabs.find('.SideMenu__MenuItems');
			let $firstItem = $component.find('.SideMenu__Content .SideMenu__MenuItems .MenuItem').first();

			const newLinkWidth = 140 * 1.16 + 16; // Font-size + padding between items (gap)
			const newItemsWidth = newLinkWidth + $menuItems.outerWidth();

			if (newItemsWidth + fixedValue < headerWidth) {
				$firstItem = $firstItem.detach();
				$firstItem.appendTo($menuTabs.find('.SideMenu__MenuItems'));

				if ($component.find('.SideMenu__Content .SideMenu__MenuItems .MenuItem').length) {
					resizeTabs($component, $menuTabs);
				} else {
					$menuTrigger.css('visibility', 'hidden');
				}
			}
		}
	};

	const setTabsTheme = () => {
		$(top.document).ready(function() {
			$('.SideMenu', window.parent.document).addClass('SideMenu--tabsTheme');

			const $component = $('.SideMenu', window.parent.document);
			const $menuTabs = $component.find('.SideMenu__Tabs');

			$menuTabs.find('> div:empty').hide();

			const $items = $component.find('.SideMenu__MenuItems').detach();
			$items.appendTo($menuTabs);

			$(document).ready(function() {
				resizeTabs($component, $menuTabs, true);
			});

			$(window.parent).resize(function() {
				clearTimeout(window.resizedFinished);
				window.resizedFinished = setTimeout(function() {
					resizeTabs($component, $menuTabs);
				}, 250);
			});
		});
	};

	const create = config => (window[config.widgetId] = new SideMenu(config));

	SapphireWidgets.SideMenu = { create, setTabsTheme };
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/sidebar/sidebar-structure.js":
/*!**************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/sidebar/sidebar-structure.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component ISidebar */
(function($, window, document, SapphireWidgets) {
	var create = function(config) {
		window[config.widgetId] = new Sidebar(config);
		SapphireWidgets.Sidebar.widgetId = config.widgetId;
	};

	var close = function() {
		window[SapphireWidgets.Sidebar.widgetId].close();
	};

	var Sidebar = function(config) {
		var _this = this;
		this.isExpandable = config.isExpandable;
		this.$widget = $('#' + config.widgetId);
		this.$sidebar = this.$widget.find('.ISidebar');
		this.$sidebarMenu = this.$widget.find('.ISidebar-menu');
		this.$sidebarMenuItem = this.$widget.find('.SidebarMenuItem');
		this.$sidebarShield = this.$widget.find('.ISidebar-shield');
		this.$sidebarContent = this.$widget.find('.ISidebar-content');
		this.showLastViewed = false;

		this.$sidebarContent.find('> div').each(function() {
			if ($(this).hasClass('PH') && $(this).text() === '') {
				$(this).remove();
			}
		});
		this.attachEvents();
		if (!this.isExpandable) {
			this.openMenuItem(0);
		}
		$(function() {
			console.log(this.$showLastViewed);

			if (!config.isExpandable) {
				$(`.${config.selectedTab}`).click();
			}

			window.parent.$('.LayoutBase-iframesidebar .lds-ring').fadeOut();

			if (!this.isExpandable) {
				$('input[type="text"]:visible')
					.eq(0)
					.focus();
			}
		});

		$(window).unload(function() {
			window.parent.$('.LayoutBase-iframesidebar .lds-ring').fadeOut();
		});
	};

	Sidebar.prototype.attachEvents = function() {
		var _this = this;
		this.$sidebarMenu.on('click', function(evt) {
			console.log(evt);

			evt.stopPropagation();
			if (!_this.$sidebar.hasClass('open')) {
				_this.openMenuItem(0);
			}
		});
		this.$sidebarMenuItem.on('click', function() {
			var selectedPosition = $(this).index();
			_this.openMenuItem(selectedPosition);
		});
		this.$sidebarShield.on('click', function() {
			_this.close();
		});
		this.$sidebar.on('click', '.SearchSideBarFields .ButtonGroup_button:first-child', function() {
			_this.$sidebar
				.find('.FieldsSlider')
				.addClass('Tab1')
				.removeClass('Tab2');
			_this.setFieldFocus(_this.$sidebarContent.find('.TextInput:visible').eq(0));
		});
		this.$sidebar.on('click', '.SearchSideBarFields .ButtonGroup_button:last-child', function() {
			_this.$sidebar
				.find('.FieldsSlider')
				.addClass('Tab2')
				.removeClass('Tab1');
			_this.setFieldFocus(_this.$sidebarContent.find('.TextInput:visible').eq(0));
		});

		this.$sidebar.on('click', '.show-last-viewed', function() {
			_this.showLastViewed = !_this.showLastViewed;

			document.querySelector('.ISidebar').dataset.showlastviewed = _this.showLastViewed;

			window.parent.document.querySelector('.LayoutBase-iframesidebar.notExpandable').dataset.showlastviewed =
				_this.showLastViewed;

			if (_this.showLastViewed) {
				window.parent.document.querySelector('.LayoutBase-iframesidebar.notExpandable').style.width = '100%';
			} else {
				_this.close();
			}
		});
	};

	Sidebar.prototype.openMenuItem = function(selectedPosition) {
		var _this = this;

		this.$sidebar
			.find('.SidebarMenuItem')
			.removeClass('active')
			.eq(selectedPosition)
			.addClass('active');

		this.$sidebar
			.find('.ISidebar-content > .ISidebar-content-panel')
			.hide()
			.eq(selectedPosition)
			.show();

		this.$sidebar.addClass('open');

		// console.log(this.$sidebar);

		if (window.parent.length && this.isExpandable) {
			document.querySelector('.ISidebar').dataset.showlastviewed = 'true';
			window.parent.SapphireWidgets.LayoutBase.openSidebarIframe(0);
		}

		if (this.$sidebarContent.find('.TextInput:visible').length > 0) {
			this.setFieldFocus(this.$sidebarContent.find('.TextInput:visible').eq(0));
		}

		if (window.parent.$('.select2-container--open').length) {
			window.parent.$('.select2-hidden-accessible').select2('close');
		}
	};

	Sidebar.prototype.setFieldFocus = function($input) {
		window.setTimeout(function() {
			$input.click().select();
		}, 250);
	};

	Sidebar.prototype.close = function() {
		var _this = this;

		console.log('sidebar close');

		if (window.parent.length) {
			window.parent.SapphireWidgets.LayoutBase.closeSidebarIframe(0);
			_this.showLastViewed = false;
			document.querySelector('.ISidebar').dataset.showlastviewed = _this.showLastViewed;
			window.parent.document.querySelector('.LayoutBase-iframesidebar').dataset.showlastviewed = _this.showLastViewed;
		}
		if (this.isExpandable) {
			this.$sidebar.removeClass('open');
			this.$sidebar.find('.SidebarMenuItem').removeClass('active');
			this.$sidebar.find('.ISidebar-content > .ISidebar-content-panel').hide();
		}
	};

	SapphireWidgets.Sidebar = {
		create: create,
		close: close,
	};
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/small-box-selectable/scripts.js":
/*!*****************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/small-box-selectable/scripts.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

SapphireWidgets.SmallBoxSelectable = function(config) {
	const $component = $(`#${config.widgetId}`);

	if (config.selectOnClick) {
		$component.click(() => {
			const $list = $('.SmallBoxList .SmallBoxSelectable').not($component);

			$list.removeClass('SmallBoxSelectable--selected');
			$component.toggleClass('SmallBoxSelectable--selected');
		});
	}
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/spinner-horizontal/scripts.js":
/*!***************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/spinner-horizontal/scripts.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component SpinnerHorizontal */
SapphireWidgets.SpinnerHorizontal = {
	create: config => {
		const $input = $(`#${config.widgetId} input`);
		const $plus = $(`#${config.widgetId} a.Plus`);
		const $minus = $(`#${config.widgetId} a.Minus`);

		let val = $input.val();

		if (val <= +config.minValue) {
			$minus.attr('disabled', 'disabled');
		} else if (val >= +config.maxValue) {
			$plus.attr('disabled', 'disabled');
		}

		$input.on('change', function() {
			val = Math.abs(parseInt(this.value, 10) || +config.minValue);
			this.value = val > +config.maxValue ? +config.maxValue : val < +config.minValue ? +config.minValue : val;

			if (val <= +config.minValue) $minus.attr('disabled', 'disabled');
			else $minus.removeAttr('disabled');

			if (val >= +config.maxValue) $plus.attr('disabled', 'disabled');
			else $plus.removeAttr('disabled');
		});
	},
	increment: function(elementId, minValue, maxValue, triggerOnChange) {
		var _element = $(elementId)
			.find('input[type="number"]')
			.first();
		if (_element.val() == undefined || _element.val() == '' || isNaN(parseFloat(_element.val()))) {
			_element.val(minValue);
			if (triggerOnChange) {
				_element.trigger('change');
			}
		} else {
			if (parseFloat(_element.val()) < maxValue) {
				_element.val(parseFloat(_element.val()) + 1);
				if (triggerOnChange) {
					_element.trigger('change');
				}
				$(elementId)
					.find('a.Minus')
					.removeAttr('disabled');
			}
			if (parseFloat(_element.val()) >= maxValue) {
				$(elementId)
					.find('a.Plus')
					.attr('disabled', 'disabled');
			}
		}
	},
	decrement: function(elementId, minValue, triggerOnChange) {
		var _element = $(elementId)
			.find('input[type="number"]')
			.first();
		if (_element.val() == undefined || _element.val() == '' || isNaN(parseFloat(_element.val()))) {
			_element.val(minValue);
			if (triggerOnChange) {
				_element.trigger('change');
			}
		} else {
			if (parseFloat(_element.val()) > minValue) {
				_element.val(parseFloat(_element.val()) - 1);
				if (triggerOnChange) {
					_element.trigger('change');
				}
				$(elementId)
					.find('a.Plus')
					.removeAttr('disabled');
			}
			if (parseFloat(_element.val()) <= minValue) {
				$(elementId)
					.find('a.Minus')
					.attr('disabled', 'disabled');
			}
		}
	},
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/spinner-vertical/scripts.js":
/*!*************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/spinner-vertical/scripts.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component SpinnerVertical */
(function($, window, document, SapphireWidgets) {
	const create = function(config) {
		$(document).ready(function() {
			const $minusVertical = $(`#${config.widgetId}`).find('.MinusVertical');
			const $inputSpinner = $(`#${config.widgetId} .SpinnerInputVertical input`);

			$inputSpinner.on('blur keyup input', function(event) {
				const currentInputValue = $inputSpinner.val();

				if (config.numberList && event.type === 'blur') {
					const inputValueInt = parseInt(currentInputValue);
					const arrayToSpin = config.numberList;
					const $errorMessage = $(`#${config.widgetId} .SpinnerErrorMessage`);

					$errorMessage.css('display', arrayToSpin.indexOf(inputValueInt) === -1 ? 'block' : 'none');
				}

				if (currentInputValue < config.minValue) $minusVertical.addClass('DisabledSpin');
				else $minusVertical.removeClass('DisabledSpin');
			});

			if ($inputSpinner.val() <= config.minValue) {
				$minusVertical.addClass('DisabledSpin');
			}

			if (config.numberList && $inputSpinner.val() === '') {
				let currentNumber = 0;
				const arrayToSpin = config.numberList.split(',');

				$inputSpinner.val(arrayToSpin[currentNumber]);
				$minusVertical.addClass('DisabledSpin');
			}

			if (config.isCursorOnFocus) {
				$('body').on('focus', `#${config.inputID} input`, function() {
					var that = this;

					setTimeout(function() {
						that.focus();
						var val = that.value;
						that.value = '';
						that.value = val;
					}, 1);
				});
			}

			if (config.isInputEmpty) {
				$inputSpinner.attr('value', '');
				$minusVertical.addClass('DisabledSpin');
			}
		});
	};

	const increment = (elementId, minValue, maxValue, triggerOnChange, triggerOnInput, listTospin = []) => {
		const $spinner = $(elementId);
		let $input = $spinner.find('input[type="text"], input[type="number"]').first();

		var forceInteger = $(elementId).data('forceinteger') === 'True' ? true : false;
		var currentValue = parseFloat($input.val());
		var incrementUnit = 1;
		var isDecimals = currentValue % 1 != 0;
		var arraytospin = listTospin;

		const $minusVertical = $(elementId).find('.MinusVertical');
		const $plusVertical = $(elementId).find('.PlusVertical');

		$minusVertical.removeClass('DisabledSpin');

		if (arraytospin.length) {
			var currentPosition = arraytospin.indexOf(parseInt($input.val()));
			var maximumToSpin = arraytospin.lastIndexOf(arraytospin.slice(-1)[0]);

			$plusVertical.removeClass('DisabledSpin');

			if (maximumToSpin - 1 === currentPosition) {
				currentPosition = currentPosition + 1;
				$input.val(arraytospin[currentPosition]);

				if (triggerOnChange) $input.trigger('change');
				if (triggerOnInput) $input.trigger('input');
			} else if (maximumToSpin === currentPosition) {
				currentPosition = currentPosition % maximumToSpin;
				$input.val(arraytospin[currentPosition]);

				triggerEvents($input, triggerOnChange, triggerOnInput);
			} else {
				currentPosition = (currentPosition + 1) % maximumToSpin;
				$input.val(arraytospin[currentPosition]);

				triggerEvents($input, triggerOnChange, triggerOnInput);
			}

			if (currentPosition === maximumToSpin) $plusVertical.addClass('DisabledSpin');
			if (currentPosition === 0) $minusVertical.addClass('DisabledSpin');

			$spinner.find('.SpinnerErrorMessage').css('display', 'none');
		} else {
			if (parseFloat(currentValue) < minValue) {
				$minusVertical.addClass('DisabledSpin');
			} else {
				$minusVertical.removeClass('DisabledSpin');
			}

			if (!forceInteger && isDecimals) incrementUnit = parseFloat(0.1);

			if (currentValue === undefined || currentValue === '' || isNaN(parseFloat(currentValue))) {
				$input.val(minValue);

				triggerEvents($input, triggerOnChange, triggerOnInput);
			} else {
				if (parseFloat(currentValue) < maxValue) {
					if (currentValue === 0 && !forceInteger) incrementUnit = parseFloat(0.1);

					$input.val(parseFloat((currentValue + incrementUnit).toFixed(1)));

					triggerEvents($input, triggerOnChange, triggerOnInput);

					$minusVertical.removeAttr('disabled');
				} else {
					$plusVertical.attr('disabled', 'disabled');
				}
			}

			checkDisabledStatus(elementId, parseFloat($input.val()), minValue, maxValue);
		}
	};

	const decrement = (elementId, minValue, maxValue, triggerOnChange, triggerOnInput, listTospin = []) => {
		const $spinner = $(elementId);
		const $input = $spinner.find('input[type="text"], input[type="number"]').first();

		let forceInteger = $(elementId).data('forceinteger') === 'True' ? true : false;
		let currentValue = parseFloat($input.val());
		let incrementUnit = 1;
		let isDecimals = currentValue % 1 != 0;
		let arraytospin = listTospin;

		const $minusVertical = $(elementId).find('.MinusVertical');
		const $plusVertical = $(elementId).find('.PlusVertical');

		if (arraytospin.length) {
			let currentPosition = arraytospin.indexOf(parseInt($input.val()));
			let maximumToSpin = arraytospin.lastIndexOf(arraytospin.slice(-1)[0]);

			if (currentPosition == 0) {
				$input.val(arraytospin[maximumToSpin]);

				if (triggerOnChange) $input.trigger('change');
				if (triggerOnInput) $input.trigger('input');
			} else {
				currentPosition = (currentPosition - 1) % maximumToSpin;
				$input.val(arraytospin[currentPosition]);

				triggerEvents($input, triggerOnChange, triggerOnInput);
			}

			$spinner.find('.SpinnerErrorMessage').css('display', 'none');
		} else {
			if (!forceInteger && isDecimals) incrementUnit = parseFloat(0.1);

			if (currentValue === undefined || currentValue === '' || isNaN(parseFloat(currentValue))) {
				$input.val(minValue);

				triggerEvents($input, triggerOnChange, triggerOnInput);
			} else {
				if (parseFloat(currentValue) > minValue) {
					if (currentValue === 1 && !forceInteger) incrementUnit = parseFloat(0.1);

					$input.val(parseFloat((currentValue - incrementUnit).toFixed(1)));

					triggerEvents($input, triggerOnChange, triggerOnInput);

					$plusVertical.removeAttr('disabled');
				} else {
					$minusVertical.attr('disabled', 'disabled');
				}
			}

			checkDisabledStatus(elementId, parseFloat($input.val()), minValue, maxValue);
		}
	};

	const triggerEvents = (input, triggerOnChange, triggerOnInput) => {
		if (triggerOnChange) input.trigger('change');
		if (triggerOnInput) input.trigger('input');
	};

	const checkDisabledStatus = (elementId, valueToCheck, minValue, maxValue) => {
		if (valueToCheck <= minValue) {
			$(elementId)
				.find('a.MinusVertical')
				.attr('disabled', 'disabled');
		} else {
			$(elementId)
				.find('a.MinusVertical')
				.removeAttr('disabled');
		}
		if (valueToCheck >= maxValue) {
			$(elementId)
				.find('a.PlusVertical')
				.attr('disabled', 'disabled');
		} else {
			$(elementId)
				.find('a.PlusVertical')
				.removeAttr('disabled');
		}
	};

	SapphireWidgets.SpinnerVertical = {
		create,
		increment,
		decrement,
	};
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/split-button/scripts.js":
/*!*********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/split-button/scripts.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component SplitButton */
(function($, window, document, SapphireWidgets) {
	var create = function(config) {
		window[config.widgetId] = new SplitButton(config);
	};

	var SplitButton = function(config) {
		var _this = this;
		this.config = config;
		this.$widget = $('#' + this.config.widgetId);
		this.$button = this.$widget.find('.SplitButton-button');
		this.$buttonLink = this.$button.find('> a');
		this.$trigger = this.$widget.find('.SplitButton-trigger');
		this.$actions = this.$widget.find('.SplitButton-actions');
		if (!!this.$actions.text()) {
			this.$widget.find('> .SplitButton').addClass('hasTrigger');
			this.buildActionsTrigger();
		}
	};

	SplitButton.prototype.buildActionsTrigger = function() {
		var _this = this;
		var classList = this.$buttonLink[0].classList.value;
		this.$trigger.addClass(classList);
		$(function() {
			// inside a document ready due to sapphire popup binded events
			if (!_this.$trigger.hasClass('tooltipstered')) {
				_this.$trigger.tooltipster({
					arrow: true,
					content: $('<section/>').append(_this.$actions.clone(true)),
					trigger: _this.config.triggerEvent,
					position: _this.config.position,
					maxWidth: _this.config.maxWidth,
					theme: 'tooltipster-splitbutton Padding-' + _this.config.padding,
				});
				_this.$actions.remove();
			}
		});
	};

	SapphireWidgets.SplitButton = {
		create: create,
	};
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/ssd-component-block/scripts.js":
/*!****************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/ssd-component-block/scripts.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var milisecondpassed = 0;
var stoptimer = true;
var myTimout  = null;

function onKeydownFunction() {
    milisecondpassed = 0;
  
    stoptimer=true;
    clearInterval(myTimout);
    myTimout = null;
  };
  
  function onKeyUpFunction(elementToClick) {
  stoptimer = false;
  
  if(milisecondpassed == 0 && myTimout==null){
      myTimout = setInterval(
        function() {
          milisecondpassed+=100;
         
          if (milisecondpassed >= 400 && stoptimer==false) {
            milisecondpassed = 0;
            stoptimer=true;
            clearInterval(myTimout);
            myTimout = null;
            elementToClick.click();
          
          }
          else{
            if(stoptimer==true){
            clearInterval(myTimout);
            myTimout = null;
            }
          }
        }, 100);
        if(stoptimer==true){
            clearInterval(myTimout);
            myTimout = null;
        }
    }
    else{
        if(stoptimer==true){
            clearInterval(myTimout);
            myTimout = null;
        }   
    }
};

if(typeof(ssdComponent) === 'undefined') {

    ssdComponent = {
        length: 0,
        numberOfActive: 0,
        isRTL: false,
        id: '',
        toDestroy: false,
        onBlurDestroy: function() {
            if (ssdComponent.id != '') {
                var _ssdComponent = $('#' + ssdComponent.id);
                var _wrapper = $('[data-ssd-placeholder=' + ssdComponent.id + ']');
                if (ssdComponent.toDestroy) {
                    _wrapper.find('.SSDListRefreshHandler').find('a.to-destroy').click();
                    _wrapper.remove();
                }
                else {
                     var _wrapper = $('[data-ssd-placeholder=' + ssdComponent.id + ']');
                    _wrapper.find('input').val('');
                    ssdComponent.blur();
                }
            }
        },
        focus: function(ssdComponentWidget) {
            var _ssdComponentWidget = $(ssdComponentWidget).children('div.SSD-Wrapper:not(.Selected)');
            
            if(!_ssdComponentWidget.length)
                return; //If this SSD-Wrapper is already Selected, return.
            
            if(ssdComponent.numberOfActive)
                ssdComponent.blur(); //Blurs the other focused SSD's.
            
            ssdComponent.numberOfActive++;
            if(!_ssdComponentWidget.parent().hasClass('SSDPopup')){
                _ssdComponentWidget.children('.SSD-Component')
                .css({
                    'width': function() {
                        return $(this).outerWidth();
                    },
                    'top': function() {
                        return this.getBoundingClientRect().top + $(document).scrollTop();
                    },
                    'left': function() {
                        if(ssdComponent.isRTL)
                            return 'auto';
                        return this.getBoundingClientRect().left;
                    },
                    'right': function() {
                        if(ssdComponent.isRTL)
                            return $(window).width() - $(this).outerWidth() - this.getBoundingClientRect().left;
                        return 'auto';
                    }
                })
                .children('.SSD-Bar').css({
                    'width': function() {
                        return $(this).outerWidth();
                    }
                })
                .siblings('.SSD-List').attr('current-focus', 0);
            }
            else{
                _ssdComponentWidget.children('.SSD-Component')
                .css({
                    'width': function() {
                        return $(this).outerWidth();
                    }
                })
                .children('.SSD-Bar').css({
                    'width': function() {
                        return $(this).outerWidth();
                    }
                })
                .siblings('.SSD-List').attr('current-focus', 0);
            }
            
            if(!_ssdComponentWidget.parent().hasClass('SSDPopup')){
                _ssdComponentWidget.closest('form').append(_ssdComponentWidget);
            }
            _ssdComponentWidget.addClass('Positioned');
            
            setTimeout(
                function() {
                    _ssdComponentWidget.addClass('Selected');
                }
                , 1
            );
            
        },
        
        
        
        blur: function() {
            if(!ssdComponent.numberOfActive)
                return;
            
            var _wrapper = $('div.SSD-Wrapper.Positioned.Selected');
            
            _wrapper.each(function() {
                var parent = $('#' + $(this).attr('data-ssd-placeholder'));
                parent.append($(this));
            });
            
            _wrapper.removeClass('Positioned')
            .children('.SSD-Component')
                .css({
                    'width': '',
                    'top': '',
                    'left': '',
                    'right': ''
                })
                .removeClass('Searching Fixed KeyboardNav')
            .children('.SSD-Bar').css({
                'width': ''
            });
                
            setTimeout(
                function() {
                    _wrapper.removeClass('Selected')
                    .find('.SSD-Bar').each(function() {
                        ssdComponent.tabsClear(this);
                    });
                }
                , 1
            );
                
            ssdComponent.numberOfActive--;
            $(".SSD_ListRecords span, .SSD_ListLine.ShowMore, .SSD_DeleteOnBlur").remove();
        },
        resize: function() {
            if(!ssdComponent.numberOfActive)
                return; //If there's no SSD active, there's no need to resize it.
            
            var _ssdWrapper = $('div.SSD-Wrapper.Selected').first();
            var _ssdComponentWidget = $('#' + _ssdWrapper.attr('data-ssd-placeholder'))[0];
            var _ssdComponent = _ssdWrapper.children('.SSD-Component');
            
            if (typeof _ssdComponentWidget.getBoundingClientRect !== "undefined") {
                _ssdComponent.css({
                    'width': function() {
                        return $(_ssdComponentWidget).width();
                    }/*,
                    'top': function() {
                        return _ssdComponentWidget.getBoundingClientRect().top + $(document).scrollTop();
                    },
                    'left': function() {
                        if(ssdComponent.isRTL)
                            return 'auto';
                        return _ssdComponentWidget.getBoundingClientRect().left;
                    },
                    'right': function() {
                        if(ssdComponent.isRTL)
                            return $(window).width() - $(_ssdComponentWidget).outerWidth() - _ssdComponentWidget.getBoundingClientRect().left;
                        return 'auto';
                    }*/
                }).children('.SSD-Bar').css({
                    'width': function() {
                        return $(this).closest('.SSD-Component').innerWidth();
                    }
                });
            }
        },
        tabSelect: function(ssdComponentWidget, ssdBar, selectedTab, isInputEvent) {
            var _selectedTab = $(selectedTab);

            if(ssdComponent.numberOfActive == 0) {
                ssdComponent.focus(ssdComponentWidget);
            }
            
            if(!_selectedTab.is('.Selected')) {
                ssdComponent.tabsClear(ssdBar);
                _selectedTab.addClass('Selected');
            }
            
            ssdComponent.focusSelectedTab(ssdBar,isInputEvent);
        },
        focusSelectedTab: function(ssdBar,isInputEvent) {
            // Selected tab is the Search input?
            if(ssdBar.children('.SearchInput-Container.Selected').length) {
                var elementToClick = ssdBar.siblings('.SSDListRefreshHandler').find('a:not(.to-destroy)');
                
                if(isInputEvent){
                    onKeyUpFunction(elementToClick);
                }
                else{
                    elementToClick.click();
                }
                ssdBar.find('.InputPlaceholder input[type="text"]:not(:focus)').first().select().focus();
                return;
            }
            
            // Selected tab is the Short list?
            if(ssdBar.children('.ShortListSelector-Container.Selected').length) {
                ssdBar.find('.ShortListSelector-Container > a').focus();
                return;
            }
        },
        /*
         * Method being called by user action js_ssdComponent_focusCurrentRow
         */
        focusCurrentRow: function() {
            var _ssdComponent = $('div.SSD-Wrapper.Selected .SSD-Component').first();
            var _ssdList = _ssdComponent.find('.SSD-List');
            var _currentFocus = _ssdList.attr('current-focus');

            _ssdComponent.addClass('KeyboardNav');
            _ssdList.find('span.SSD_ListRecords > span:nth-child(' + _currentFocus + ')').addClass('focus');
        },
        tabsClear: function(ssdBar) {
            $(ssdBar).children().removeClass('Selected');
        },
        searchIcon: function(event) {
            ssdComponent.tabSelect(event.data.ssdComponentWidget, event.data.ssdBar, $(event.data.ssdBar).children('.SearchInput-Container'),false);
        },
        /*
         * @name inputEvent
         * @description 
         */
        inputEvent: function(event) {
            var _inputContainer = $(event.data.input).closest('.SearchInput-Container');
            
            ssdComponent.tabSelect(event.data.ssdComponentWidget, event.data.ssdBar, _inputContainer,true);
            
            if($(event.data.input).val() == '') {
                _inputContainer.closest('.SSD-Component').removeClass('Searching');
            }
            else {
                _inputContainer.closest('.SSD-Component').addClass('Searching');
            }
        },
        keydownEvent: function(event) {
           onKeydownFunction();          
          
        },
        keyboardHandler: function(event) {
            if(event.key == "Shift" || event.key == "Control")
                return;

            var _ssdComponent = $('div.SSD-Wrapper.Selected .SSD-Component').first();
            var _ssdList = _ssdComponent.find('.SSD-List');

            if(event.key == "Enter" && _ssdList.find('.SSD_ListLine.ShowMore.focus').length)
                return;

            if(event.key == "Tab") {
                _ssdComponent.addClass('KeyboardNav');
                return;
            }
            
            if(event.key == "ArrowUp" || event.key == "ArrowDown") {
                var _currentFocus = _ssdList.attr('current-focus');
                var _selectedElement = $(null);
                
                if(_ssdList.find('.SSD_ListLine.ShowMore.focus').length) {
                    _selectedElement = _ssdList.find('.SSD_ListLine.ShowMore.focus');
                }
                else if(_currentFocus > 0) {
                    _selectedElement = _ssdList.find('span.SSD_ListRecords > span:nth-child(' + _currentFocus + ')');
                }
                
                _ssdComponent.addClass('KeyboardNav')
                
                if(event.key == "ArrowUp") {
                    if(_selectedElement.length) {
                        
                        if(_selectedElement.is('.SSD_ListLine.ShowMore.focus')) {
                            _selectedElement.removeClass('focus');
                            _selectedElement = _ssdList.find('span.SSD_ListRecords > span:last-child');
                        }
                        else {
                            _selectedElement = _selectedElement.removeClass('focus').prev();
                        }

                        _currentFocus--;
                    }
                    else {
                        _currentFocus = _ssdList.find('span.SSD_ListRecords > span').length;

                        if(_ssdList.find('.SSD_ListLine.ShowMore').length) {
                            _selectedElement = _ssdList.find('.SSD_ListLine.ShowMore');
                            _currentFocus++;
                        }
                        else {
                            _selectedElement = _ssdList.find('span.SSD_ListRecords > span:last-child');
                        }
                    }
                }
                
                if(event.key == "ArrowDown") {
                    if(_selectedElement.length) {
                        
                        if(_selectedElement.is('.SSD_ListLine.ShowMore.focus')) {
                            _selectedElement.removeClass('focus');
                            _selectedElement = $(null);
                        }
                        else {
                            _selectedElement = _selectedElement.removeClass('focus').next();
                            
                            if(!_selectedElement.length && _ssdList.find('.SSD_ListLine.ShowMore').length) {
                                _selectedElement = _ssdList.find('.SSD_ListLine.ShowMore');
                            }
                        }
                        
                        _currentFocus++;
                    }
                    else {
                        _selectedElement = _ssdList.find('span.SSD_ListRecords > span:first-child');
                        _currentFocus = 1;
                    }
                }
                
                _selectedElement.addClass('focus');
                
                if(!_selectedElement.length) {
                    ssdComponent.focusSelectedTab(_ssdComponent.find('.SSD-Bar'),false);
                    _currentFocus = 0;
                }
                else if (!_selectedElement.find('.SSD_ListLine.Disabled').length){
                    _selectedElement.find('.ExpandControl > a').focus();
                }
                else {
                    _ssdList.find('a.OtherControlLink').focus();
                }
                
                _ssdList.attr('current-focus', _currentFocus);

                return;
            }
            
            ssdComponent.clearKeyboardNavStatus(_ssdComponent);
        },
        clearKeyboardNavStatus: function(ssdComponent) {
            var _ssdComponent = $(ssdComponent);
            var _ssdList = _ssdComponent.find('.SSD-List');

            if(_ssdList.find('.SSD_ListLine.ShowMore.focus').length)
                return;

            _ssdComponent.removeClass('KeyboardNav');
            _ssdList.attr('current-focus', 0)
                .find('span.SSD_ListRecords > span.focus').removeClass('focus')
                .find('.ExpandControl > a').blur();
        },
        scrollHandler: function() {
            var _ssdComponent = $('div.SSD-Wrapper.Selected .SSD-Component').first();
            if(Math.max(document.documentElement.clientWidth, window.innerWidth || 0) <= 1024){
                if(_ssdComponent[0].getBoundingClientRect().top > $(".toolbar-wrapper.Fixed").outerHeight()) {
                    _ssdComponent.removeClass('Fixed');
                    return;
                }else{
                    $('.SSD-Wrapper.Selected > .SSD-Component.Fixed > .SSD-Bar').css('top', $(".toolbar-wrapper.Fixed").outerHeight() + 'px'); 
                    
                    
                }
            }else{
                /*Not Mobile apply fixed behaviour*/
                if(_ssdComponent[0].getBoundingClientRect().top > ($('.TopPatientHeader').outerHeight(true) + $('.Header').outerHeight(true) + $(".toolbar-wrapper").outerHeight()+ $('.CTTASLevelAssessmentMainContainer').outerHeight(true) )) {
                    _ssdComponent.removeClass('Fixed');
                    return;
                }else{
                    $('.SSD-Wrapper.Selected > .SSD-Component.Fixed > .SSD-Bar').css('top',($('.TopPatientHeader').outerHeight(true) + $('.Header').outerHeight(true) + $(".toolbar-wrapper").outerHeight() + $('.CTTASLevelAssessmentMainContainer').outerHeight(true)) + 'px'); 
                }
            }


            _ssdComponent.addClass('Fixed');
        },
        destroy: function(_inputId) { /* Used to destroy a specific ssd component by receive the input identifier as parameter and determine the wrapper to remove. */
            $('[data-ssd-placeholder=' + ssdComponent.id + ']').remove();
        },
        init: function(ssdComponentWidget,_toDestroy) {
            ssdComponent.length++;
            ssdComponent.numberOfActive = 0;
            ssdComponent.isRTL = $('html').is('.rtl');
            ssdComponent.toDestroy = _toDestroy;
            if (typeof ssdComponentWidget != 'undefined') {
                ssdComponent.id = $(ssdComponentWidget).attr('id');
            }
            var _ssdComponentWidget = $(ssdComponentWidget);
            var _ssdComponent = _ssdComponentWidget.find('.SSD-Component');
            var _ssdBar = _ssdComponent.children('.SSD-Bar').first();
            var _searchIcon = _ssdBar.find('.SearchIcon').first();
            var _input = _ssdBar.find('input[type="text"]').first();
            var _clearControl = _ssdBar.find('.ClearControl').first();
            
            _searchIcon.off('click').on('click', {
                ssdComponentWidget: _ssdComponentWidget,
                ssdBar: _ssdBar
            }, ssdComponent.searchIcon);
            
            _ssdBar.children('div').off('click').on('click', {
                ssdComponentWidget: _ssdComponentWidget,
                ssdBar: _ssdBar
            }, function(event) {
                ssdComponent.tabSelect(event.data.ssdComponentWidget, event.data.ssdBar, this,false);
            });
            
            _clearControl.off('click').on('click', ssdComponent.onBlurDestroy);
            
            _input.off('keyup').on('keyup', {
                ssdComponentWidget: _ssdComponentWidget,
                ssdBar: _ssdBar,
                input: _input
            }, ssdComponent.inputEvent);
            
            _input.off('keydown').on('keydown', {
                ssdComponentWidget: _ssdComponentWidget,
                ssdBar: _ssdBar,
                input: _input
            }, ssdComponent.keydownEvent);
            
            $(_ssdComponent).off('click').on('click', {
                ssdComponent: _ssdComponent
            }, function(event) {
                ssdComponent.clearKeyboardNavStatus(event.data.ssdComponent);
            });
        }
    }
}

$(document).ready(function() {
    $(window).on('resize', function(event) {
        ssdComponent.resize();
    });
    
    $(document).on('click', function(event) {
        if(!$(event.target).is(':visible')) { /* Clicks on hidden elements are dismissed. */
            return;
        }
        
        var e = $(event.target).closest('.SSD-Component');
        
        if(!e.length) { // User clicked outside the SSD-Component?
            ssdComponent.onBlurDestroy();
        }
    });
    
    $(document).on('keydown', function(event) {
        if(ssdComponent.numberOfActive > 0) {
            if(event.keyCode == "27") { // User hit Escape
                ssdComponent.onBlurDestroy();
            }
            if(event.key == "ArrowUp" || event.key == "ArrowDown") {
                event.preventDefault();
            }
        }
    });
    
    $(document).on('keyup', function(event) {
        if(ssdComponent.numberOfActive > 0) { // If there's an SSD component active, go for Keyboard handler
            ssdComponent.keyboardHandler(event);
        }
    });
    
    $(document).on('scroll', function() {
        if(ssdComponent.numberOfActive > 0) { // If there's an SSD component active, go for scroll handler
            ssdComponent.scrollHandler();
        }
    });
});


/***/ }),

/***/ "./src/components/05-components/v3-pat/ssd-list-line/scripts.js":
/*!**********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/ssd-list-line/scripts.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component SSDListLine */
SapphireWidgets.SSDListLine = {
	toggle: (lineId, lineHandler = '') => {
		var _line = $(lineId).is('.SSD_ListLine')
			? $(lineId)
			: $(lineId)
					.children('.SSD_ListLine')
					.first();

		if (!_line.length) return;

		var _expandControl = $('.expand-control-custom-width');

		if (_expandControl.length != 0) {
			_expandControl.removeClass('expand-control-custom-width');
			_expandControl.css('width', '');
		}

		if (!_line.is('.Active')) {
			var _lineHeader = _line
				.closest('div.SelectableList, .SelectableList-ListRecords')
				.find('div.SelectableList-Line.Active')
				.not(_line);

			_lineHeader.find('a[hide-action]').click();
			_lineHeader
				.removeClass('Active')
				.children('span')
				.hide(200);
			_line.addClass('Active');

			if ($(lineHandler).length) {
				$(lineHandler).click();
			}
		} else {
			_line.removeClass('Active');
		}
	},
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/table-form/scripts.js":
/*!*******************************************************************!*\
  !*** ./src/components/05-components/v3-pat/table-form/scripts.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component TableForm */
(function($, window, SapphireWidgets) {
	const addEmptyLine = config => {
		const $list = $('.TableFormColumn:not(.TableFormColumn--editMode) .TableFormColumn__Fields > .ListRecords');

		$list.append('<div class="TableFormColumn__EmptyItem"></div>');
	};

	const removeEmptyLine = config => {
		const $list = $('.TableFormColumn:not(.TableFormColumn--editMode) .TableFormColumn__Fields > .ListRecords');

		$list.each(function(index) {
			$(this)
				.find('> .TableFormColumn__EmptyItem:first')
				.remove();
		});
	};

	const onComponentReload = widgetId => {
		const $table = $(`#${widgetId}`);
		const $editing = $table.find('.TableFormColumn--editMode');

		if ($editing.length) {
			$table.addClass('TableForm--scrollDisabled');
		} else {
			$table.removeClass('TableForm--scrollDisabled');
		}
	};

	SapphireWidgets.TableForm = { addEmptyLine, onComponentReload, removeEmptyLine };
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/tabs-extended/scripts.js":
/*!**********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/tabs-extended/scripts.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component TabsExtended */
SapphireWidgets.TabsExtended = function(config) {
	$(document).ready(function() {
		const $component = $(`#${config.widgetId} .Tabs_Extended`);
		const $tabHeader = $component.find('.Tabs_header');
		const $tabContainer = $component.find('.TabsContainer');
		const $tabs = $tabHeader.find('> .Tabs__tab');
		const $tabsEnabled = $tabHeader.find('> .Tabs__tab:not(.disabled)');
		const $tabsInput = $component.find('.Tabs_Input input');

		$tabs.each(function() {
			if ($(this).text() === '') {
				$(this).remove();
			}
		});

		$tabsEnabled.on('click', function() {
			$tabContainer.attr('activetab', $(this).attr('value'));

			$tabsInput.val($(this).attr('value'));
			$tabsInput.change();
		});

		$tabsEnabled.off('mousedown').on('mousedown', function(evt) {
			var $tabsExtended = $(evt.target).closest('.Tabs_Extended');
			$tabsExtended.removeClass('isClosed');
		});

		$('.Tabs_Extended.HideActiveOnClick .Tabs_header')
			.off('mousedown')
			.on('mousedown', '.Tabs__tab.active', function(evt) {
				var $tabsExtended = $(evt.target).closest('.Tabs_Extended');
				var $tabsBody = $tabsExtended.find('.Tabs_body');

				if ($tabsBody.hasClass('Tabs_body--closed')) {
					$tabsBody.removeClass('Tabs_body--closed');
					$tabsExtended.removeClass('isClosed');
				} else {
					$tabsBody.addClass('Tabs_body--closed');
					$tabsExtended.addClass('isClosed');
				}
			});

		$tabHeader.find('.Tabs_Extended--disabled').each(function(index, el) {
			$(el)
				.parent()
				.css('cursor', 'default')
				.off('click');
		});

		$component.each(function(index, el) {
			if ($(el).hasClass('Tabs_Extended--closedonstart')) {
				$(el)
					.find('.Tabs_body')
					.addClass('Tabs_body--closed');
				$(el).addClass('isClosed');
				$(el).removeClass('Tabs_Extended--closedonstart');
			}

			$(el)
				.off('click')
				.on('click', '.Tabs_Extended--close', function(evt) {
					$(evt.target)
						.closest('.Tabs_body')
						.addClass('Tabs_body--closed');
				});
		});

		if (!config.tab1Enabled) $tabHeader.find('> .Tabs__tab[value=1]').addClass('disabled');
		if (!config.tab2Enabled) $tabHeader.find('> .Tabs__tab[value=2]').addClass('disabled');
		if (!config.tab3Enabled) $tabHeader.find('> .Tabs__tab[value=3]').addClass('disabled');
		if (!config.tab4Enabled) $tabHeader.find('> .Tabs__tab[value=4]').addClass('disabled');
		if (!config.tab5Enabled) $tabHeader.find('> .Tabs__tab[value=5]').addClass('disabled');
	});
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/tabular-list/scripts.js":
/*!*********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/tabular-list/scripts.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component TabularList */
(function($, window, document, SapphireWidgets) {
	var allTabularLists = [];

	var create = function(config) {
		window[config.tabularListId] = new TabularList(config);
		allTabularLists.push(window[config.tabularListId]);

		$(window).load(function() {
			var allTabularLists = SapphireWidgets.TabularList.all();
			allTabularLists.forEach(function(element, i) {
				element.handleTabularListColumns();
				element.handleResponsiveClasses(200);
			});
		});

		$(window).on('resize.tabularlist', function() {
			var allTabularLists = SapphireWidgets.TabularList.all();
			allTabularLists.forEach(function(element, i) {
				element.handleResponsiveClasses(200);
			});
		});
	};

	var TabularList = function(config) {
		var _this = this;
		this.config = config;
		this.tabularListResizeTimer = 0;
		this.$widget = $('#' + config.tabularListId);
		this.$widgetList = this.$widget.find('> .TabularList');
		this.$widget.find('.TabularListRow').each(function(i, row) {
			_this.columnsCount = 0;
			$(row)
				.find('.TabularListRow-values .TabularListRow-item')
				.each(function(i, el) {
					$(el).addClass('TabularListColumn' + (i + 1));
					_this.columnsCount++;
				});
		});
		if (!!config.breakOn) {
			this.breakOnOrder = parseInt(config.breakOn);
		} else {
			this.breakOnOrder = 0;
		}
		this.handleTabularListColumns();
	};

	TabularList.prototype.handleTabularListColumns = function() {
		if (this.config.columnsWidth === 'Auto') {
			if (this.$widgetList.width() > 1) {
				for (i = 1; i <= this.columnsCount; i++) {
					var maxWidthContent = Math.max.apply(
						null,
						this.$widget
							.find('.TabularListColumn' + i)
							.map(function() {
								return $(this).outerWidth(true);
							})
							.get()
					);
					this.$widget.find('.TabularListColumn' + i).width(maxWidthContent);
					this.$widget.find('.TabularListColumn' + i).css('opacity', 1);
				}
			}
		}
		if (!!this.config.propertyMinWidth) {
			this.$widget.find('.TabularListRow-property').css('min-width', convertInCSSValue(this.config.propertyMinWidth));
		}
		if (!!this.config.propertyMaxWidth) {
			this.$widget.find('.TabularListRow-property').css('max-width', convertInCSSValue(this.config.propertyMaxWidth));
		}
		if (!!this.config.actionsMinWidth) {
			this.$widget.find('.TabularListRow-actions').css('min-width', convertInCSSValue(this.config.actionsMinWidth));
		}
		if (!!this.config.actionsMaxWidth) {
			this.$widget.find('.TabularListRow-actions').css('max-width', convertInCSSValue(this.config.actionsMaxWidth));
		}
	};

	TabularList.prototype.handleResponsiveClasses = function(timeout) {
		var _this = this;
		window.clearTimeout(this.tabularListResizeTimer);
		this.tabularListResizeTimer = window.setTimeout(function() {
			_this.$widgetList.removeClass(function(index, className) {
				return (className.match(/(^|\s)screen-\S+/g) || []).join(' ');
			});

			_this.$widgetList.removeClass('isBreaking');

			var widgetWidth = _this.$widgetList.outerWidth(true);
			if (widgetWidth === 0) {
				widgetWidth = _this.$widgetList
					.parents(':visible')
					.eq(0)
					.outerWidth(true);
			}

			if (widgetWidth >= 1900) {
				_this.$widgetList.addClass('screen-DesktopHD');
				if (_this.breakOnOrder >= 6) {
					_this.$widgetList.addClass('isBreaking');
				}
			} else if (widgetWidth >= 1600) {
				_this.$widgetList.addClass('screen-DesktopBig');
				if (_this.breakOnOrder >= 5) {
					_this.$widgetList.addClass('isBreaking');
				}
			} else if (widgetWidth >= 1366) {
				_this.$widgetList.addClass('screen-Desktop');
				if (_this.breakOnOrder >= 4) {
					_this.$widgetList.addClass('isBreaking');
				}
			} else if (widgetWidth >= 1024) {
				_this.$widgetList.addClass('screen-DesktopSmall');
				if (_this.breakOnOrder >= 3) {
					_this.$widgetList.addClass('isBreaking');
				}
			} else if (widgetWidth >= 420) {
				_this.$widgetList.addClass('screen-Tablet');
				if (_this.breakOnOrder >= 2) {
					_this.$widgetList.addClass('isBreaking');
				}
			} else {
				_this.$widgetList.addClass('screen-Phone');
				if (_this.breakOnOrder >= 1) {
					_this.$widgetList.addClass('isBreaking');
				}
			}
		}, timeout);
	};

	SapphireWidgets.TabularList = {
		create: create,
		all: function() {
			return allTabularLists;
		},
	};
})(jQuery, window, document, SapphireWidgets);

function convertInCSSValue(value_in) {
	var returned;
	if (value_in.includes('px') || value_in.includes('%')) {
		returned = value_in;
	} else {
		returned = value_in + 'px';
	}
	return returned;
}


/***/ }),

/***/ "./src/components/05-components/v3-pat/tabular-scroll/scripts.js":
/*!***********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/tabular-scroll/scripts.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component TabularScroll */
(function($, window, document, SapphireWidgets) {
	const create = function(config) {
		$(document).ready(function() {
			$('.TabularScroll').each(function(i, el) {
				setupTabularScroll($(el));
			});
		});

		$(window).load(function() {
			osAjaxBackend &&
				osAjaxBackend.BindAfterAjaxRequest(function() {
					$('.TabularScroll').each(function(i, el) {
						setupTabularScroll($(el));
						resizeRows($(el));
					});
				});
		});

		$(window).on('resize.tabularscroll', function() {
			$('.TabularScroll').each(function(i, el) {
				var $centerTable = $(el).find('.TabularScroll-center-table');
				var tableWidth = $centerTable.find('table').width();
				$(el)
					.find('.TabularScroll-center .TopScrollDragger')
					.width(tableWidth);
				if ($centerTable[0].scrollWidth > $centerTable.width()) {
					$(el)
						.find('.TopScrollWrapper')
						.css('visibility', 'visible');
				} else {
					$(el)
						.find('.TopScrollWrapper')
						.css('visibility', 'hidden');
				}
			});
		});
	};

	const setupTabularScroll = function($tabularScroll) {
		var $topScrollWrapper = $tabularScroll.find('.TopScrollWrapper');
		var $centerTable = $tabularScroll.find('.TabularScroll-center-table');
		$tabularScroll.find('.TopScrollWrapper').scroll(function() {
			$centerTable.scrollLeft($topScrollWrapper.scrollLeft());
		});
		$centerTable.scroll(function() {
			$topScrollWrapper.scrollLeft($centerTable.scrollLeft());
		});
		// similar to Resize
		var tableWidth = $centerTable.find('table').width();
		$tabularScroll.find('.TabularScroll-center .TopScrollDragger').width(tableWidth);
		if ($centerTable[0].scrollWidth > $centerTable.width()) {
			$tabularScroll.find('.TopScrollWrapper').css('visibility', 'visible');
		} else {
			$tabularScroll.find('.TopScrollWrapper').css('visibility', 'hidden');
		}
	};

	const resizeRows = function($tabularScroll) {
		let arrrayHeight = [];
		const $tableCenter = $tabularScroll.find('.TabularScroll-center-table table tbody');
		const $tableRight = $tabularScroll.find('.TabularScroll-right .ListRecords');
		const $tableLeft = $tabularScroll.find('.TabularScroll-left .ListRecords');

		arrrayHeight = $tableCenter
			.children('tr')
			.map(function() {
				return $(this).height();
			})
			.get();

		$tableRight.children().each(function(index) {
			$(this).css('height', arrrayHeight[index] + 'px');
		});

		$tableLeft.children().each(function(index) {
			$(this).css('height', arrrayHeight[index] + 'px');
		});
	};

	SapphireWidgets.TabularScroll = { create };
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/timeline/scripts.js":
/*!*****************************************************************!*\
  !*** ./src/components/05-components/v3-pat/timeline/scripts.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Timeline Helpers */
SapphireWidgets.TimelineCounterItems = function(titleItemID, label) {
	$(document).ready(function() {
		const $section = $(`#${titleItemID}`).parents('.TimelineItemSection');
		const $title = $section.find('.TimelineItemHeader a');
		const $items = $section.find('.TimelineItem');

		$title.append($(`<div class='ColorGreyText TextLarge TextRegular'> (${$items.length})</div>`));
	});
};

SapphireWidgets.ScrollToEvent = function(elementId) {
	SapphireWidgets.LayoutBase.scrollToElement($(`#${elementId}:first`, window.top.document), 52);
};

SapphireWidgets.LineTimelineComponent = function(widgetId, hasContent, isExpandable) {
	$(document).ready(function() {
		const $component = $(`#${widgetId}`);

		if (hasContent && isExpandable) {
			const $expandableLink = $component.find('.LineTimeLine__Header');
			const $actions = $component.find('.LineTimeLine__Actions');

			$expandableLink.click(() => {
				$component.toggleClass('LineTimeLine--expanded');

				return false;
			});

			$actions.click(function(e) {
				e.stopPropagation();
			});
		}
	});
};

SapphireWidgets.TimelinePageEvents = function(showMoreTimelineLink) {
	$(document).ready(function() {
		$(window)
			.off('scroll.Timeline')
			.on('scroll.Timeline', function() {
				if (window.scrollY === 0) {
					const $item = $('.TimelineAnchor').first();
					const $list = $('.TimelinePage__Navigation .ListRecords');

					selectItem($item.attr('id'));
					clearTimeout(window.scrollFinished);

					$list.scrollTop(0);
				} else {
					clearTimeout(window.scrollFinished);
					window.scrollFinished = setTimeout(function() {
						let id = 0;

						$('.TimelineAnchor').each(function(index) {
							if ($(window).scrollTop() + 190 >= $(this).offset().top) {
								id = $(this).attr('id');

								if (index == $('.TimelineAnchor').length - 1) selectItem(id);
							} else {
								selectItem(id, true);

								window.lastItemID = id;

								return false;
							}
						});

						if ($(document).height() - $(this).height() - 150 < $(this).scrollTop()) {
							const $list = $('.TimelinePage__Navigation .ListRecords');

							$(`#${showMoreTimelineLink}`).click();
							$('.TimelinePage__Right .TimelinePage__LoadingMore').css('display', 'flex');

							window.scrollListPosition = $list.scrollTop();
						}
					}, 100);
				}

				checkEndOfPage();
			});

		infiniteScrollList(showMoreTimelineLink);
	});
};

SapphireWidgets.TimelineRestoreEvents = function(showMoreTimelineLink) {
	$('.TimelinePage__Navigation .ListRecords').scrollTop(window.scrollListPosition);
	$('.TimelinePage__LoadingMore').css('display', 'none');

	window.alreadyClicked = false;

	infiniteScrollList(showMoreTimelineLink);

	if (window.lastItemID) selectItem(window.lastItemID);
};

function selectItem(id, scrollTo) {
	const $navItem = $(`[data-item=event-${id}] .TimelineItem`);

	$('.TimelineItem.TimelineItem--active').removeClass('TimelineItem--active');
	$navItem.addClass('TimelineItem--active');

	if (scrollTo && $navItem.length) scrollToView($navItem);
}

function scrollToView(element) {
	const $parentDiv = $('.TimelinePage__Navigation .ListRecords');

	$parentDiv.scrollTop(
		$parentDiv.scrollTop() + element.position().top - $parentDiv.height() / 2 + element.height() / 2
	);

	return true;
}

function infiniteScrollList(showMoreNavLink, name) {
	const $list = $('.TimelinePage__Navigation .ListRecords');

	$list.off('mousewheel.TimelineNav').on('mousewheel.TimelineNav', function() {
		const listHeight = $list.height();
		const scrollTop = $list.scrollTop();
		const scrollHeight = $list.prop('scrollHeight');

		if (listHeight + scrollTop + 100 > scrollHeight && scrollTop > 0 && !window.alreadyClicked) {
			clearTimeout(window.scrollListFinished);
			window.scrollListFinished = setTimeout(function() {
				$(`#${showMoreNavLink}`).click();

				$('.TimelinePage__LoadingMore').css('display', 'flex');

				window.scrollListPosition = $list.scrollTop();
				window.alreadyClicked = true;
			}, 100);
		}
	});
}

function checkEndOfPage() {
	if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
		const $item = $('.TimelineAnchor').last();
		window.lastItemID = $item.attr('id');
	}
}


/***/ }),

/***/ "./src/components/05-components/v3-pat/trigger-iframe-tooltip/trigger-iframe-tooltip.js":
/*!**********************************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/trigger-iframe-tooltip/trigger-iframe-tooltip.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component TriggerIframeTooltip */
(function($, window, document, SapphireWidgets) {
	var create = function(config) {
		var $elementId = $('#' + config.elementId);

		config.minHeight = config.minHeight + 32;

		$elementId.addClass('tooltip');

		if (config.triggerId === 'click') $elementId.addClass('tooltipstered--pointer');

		const widgetNotifyDiv = $.find('[data-iframetooltiptriggerid="' + config.elementId + '"]');
		let widgetNotifyId = '';

		if (widgetNotifyDiv.length === 1) {
			widgetNotifyId = $(widgetNotifyDiv).data('iframetooltipnotifyid');
		}

		$elementId.tooltipster({
			contentAsHTML: true,
			theme: config.theme,
			interactive: true,
			position: config.positionId,
			trigger: config.triggerId,
			minWidth: config.minWidth,
			maxWidth: config.maxWidth,
			zindex: config.zindex,
			onlyOne: true,
			content: `<iframe id="tooltipster-frame" data-ui="iframe-tooltip" src="${config.URL}" style="border:none; min-height:${config.minHeight}px;" data-iframetooltiptriggerid="${config.elementId}" iframetooltipnotifyid="${widgetNotifyId}"></iframe>`,
			functionReady: function(instance, helper) {
				$(helper).css({ visibility: 'hidden' });

				if (config.noPadding) $('.tooltipster-content').addClass('tooltipster--noPadding');
				if (config.customClass) $('.tooltipster-base').addClass(config.customClass);

				setTimeout(function() {
					$('.tooltipster-base').css({
						visibility: 'visible',
						minHeight: config.minHeight > 0 ? config.minHeight : 'auto',
					});
				}, 500);

				$('.tooltipster-content').prepend('<div class="TooltipsterLoading"><div class="lds-ring"><div></div></div>');

				const isLeftOrRight = config.positionId === 'left' || config.positionId === 'right';

				// Set a fixed height in order to keep the arrow in the same position
				if (isLeftOrRight) {
					setFixHeight();

					$(window)
						.off('scroll.Tooltip')
						.on('scroll.Tooltip', function() {
							setTimeout(() => {
								setFixHeight();
							}, 500);
						});
				}
			},
			functionAfter: function() {
				$(window).off('scroll.Tooltip');
			},
		});
	};

	const setFixHeight = () => {
		const $arrow = $('.tooltipster-arrow');

		$arrow.height($arrow.height());
	};

	SapphireWidgets.TriggerIframeTooltip = { create };
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/truncated-content/scripts.js":
/*!**************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/truncated-content/scripts.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component TruncatedContent */
(function($, window, document, SapphireWidgets) {
	const create = function(config = {}) {
		$(document).ready(function() {
			var $allTruncated = $([]);
			var rootSelector = `#${config.widgetId}`;
			var openerSelector = '.TruncatedContent--all';
			var bodySelector = '.TruncatedContent--body';

			$(rootSelector).each(function() {
				var $el = $(this);
				$allTruncated = $allTruncated.add($el);
				var $elBody = $el.find(bodySelector);
				var maxLines = $el.data('maxlines');
				var lineHeight = window
					.getComputedStyle($el.find('> div')[0])
					.getPropertyValue('line-height')
					.replace('px', '');
				var lineCount = Math.ceil($el.height() / lineHeight);
				if (lineCount > maxLines) {
					$elBody.css({
						maxHeight: lineHeight * maxLines + 'px',
					});
					var sentence = $el.data('additional').replace('{n}', lineCount - maxLines);
					$el.append('<p class="' + openerSelector.replace('.', '') + '">' + sentence + '</p>');
				}
			});

			$(rootSelector).on('click', openerSelector, function() {
				var el = $(this).closest(rootSelector);
				openTruncatedContent(el);
			});

			openTruncatedContent = function(el) {
				$(el)
					.find(bodySelector)
					.css('max-height', 'none');
				$(el)
					.find(openerSelector)
					.css('display', 'none');
			};

			if (window.frameElement && window.frameElement.id === 'tooltipster-frame') {
				$(rootSelector).off('click', openerSelector);
				$(openerSelector).addClass('in-tooltip');
			}
		});
	};

	SapphireWidgets.TruncatedContent = {
		create,
		open: function(el) {
			openTruncatedContent(el);
		},
		openAll: function() {
			$allTruncated.each(function() {
				openTruncatedContent($(this));
			});
		},
	};
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/08-pages/clinicianWorkArea.js":
/*!******************************************************!*\
  !*** ./src/components/08-pages/clinicianWorkArea.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

SapphireWidgets.ClinicianWorkArea = function(containerID) {
	$(document).ready(function() {
		const $container = $(`#${containerID}`);
		const $toggler = $container.find('.SectionExpandable-toggler');

		if ($toggler.length === 1) {
			let $togglerState = false;

			$toggler.find('[data-labelvalue]').text($toggler.find('[data-labelshow]').data('labelshow'));

			$toggler.off('click').on('click', function(evt) {
				evt.stopPropagation();

				buttonClick();
			});

			const buttonClick = function() {
				$togglerState = !$togglerState;

				if ($togglerState) {
					$container.find('.SectionExpandable-toggled').show();
					$toggler.find('[data-labelvalue]').text($toggler.find('[data-labelhide]').data('labelhide'));

					$toggler.hide();

					const $cancelButton = $('.SectionExpandable-toggled .ButtonCancelSearch');
					$cancelButton.click(() => buttonClick());
				} else {
					$container.find('.SectionExpandable-toggled').hide();
					$toggler.find('[data-labelvalue]').text($toggler.find('[data-labelshow]').data('labelshow'));

					$toggler.show();

					const $cancelButton = $('.SectionExpandable-toggled .ButtonCancelSearch');
					$cancelButton.off('click');
				}
			};
		}
	});
};


/***/ }),

/***/ "./src/components/08-pages/eSignature.js":
/*!***********************************************!*\
  !*** ./src/components/08-pages/eSignature.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

SapphireWidgets.QRCodeScanner = function(options) {
	Html5Qrcode.getCameras()
		.then(devices => {
			if (devices && devices.length) startCamera(devices[0].id);
		})
		.catch(err => {
			// App doesn't have access to the camera...

			setTimeout(() => {
				const $checkbox = $('.AccessCodeOption');

				$checkbox.attr('checked', true).trigger('click');
				$('.LayoutScanCode').addClass('LayoutScanCode--modeOnlyCode');

				$('.LayoutScanCode__Splash').fadeOut(500);
			}, 500);
		});

	function startCamera(cameraID) {
		const html5QrCode = new Html5Qrcode('qrreader');
		const config = { fps: 5, qrbox: 250 };

		const successCallback = response => {
			if ($('.ModeAccessCode').length) return;

			$('.ScanOverlay').addClass('ScanOverlay--correctCode');

			OsNotifyWidget(options.widgetFakeNotifyId, response);

			//setTimeout(() => html5QrCode.stop(), 1000);
		};

		const errorCallback = response => {
			// console.error(response);
		};

		html5QrCode
			.start({ facingMode: 'environment' }, config, successCallback, errorCallback)
			.then(() => {
				setTimeout(() => $('.LayoutScanCode__Splash').fadeOut(500), 500);
			})
			.catch(err => {
				console.error(err);
			});
	}

	let isPortrait = window.matchMedia('(orientation: portrait)').matches;
	let isOrientarionChanged = false;

	$(window).on('orientationchange', function(event) {
		if ($('.ModeAccessCode').length) {
			isOrientarionChanged = window.matchMedia('(orientation: portrait)').matches;
			SapphireWidgets.IsOrientarionChanged = !(isPortrait ^ isOrientarionChanged);

			return;
		}

		window.location.reload();
	});
};

SapphireWidgets.OnModeChange = function() {
	$('.ScanOverlay').removeClass('ScanOverlay--correctCode');
	$('.ScanOverlay').removeClass('ScanOverlay--incorrectCode');

	if (SapphireWidgets.IsOrientarionChanged && !$('.ModeAccessCode').length) {
		window.location.reload();
	}
};

SapphireWidgets.GoNextInput = function(currentInput, nextInputClass) {
	const key = event.keyCode || event.charCode;
	const isNumber = !isNaN(event.key) && !isNaN(parseFloat(event.key));

	const $curr = $(currentInput);
	const $next = $(`.${nextInputClass}`);
	const $prev = $curr.prevAll('input').first();

	if (key === 8 || key === 46) {
		$prev.focus();
		$curr.removeClass('ColorAlphaBorder');

		return;
	}

	if (isNumber) {
		$next.focus();
		$curr.addClass('ColorAlphaBorder');
		$('.ValidateInputButton').click();
	} else event.preventDefault();
};


/***/ }),

/***/ "./src/components/08-pages/remoteAppointment.js":
/*!******************************************************!*\
  !*** ./src/components/08-pages/remoteAppointment.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function($, window, SapphireWidgets) {
	const create = () => {
		const $widget = $('.RemoteAppointment');
		const $header = $widget.find('.RemoteAppointment__Header');
		const $minimize = $header.find('.Minimize');
		const $smallSize = $header.find('.Small');
		const $mediumSize = $header.find('.Medium');
		const $fullScreen = $header.find('.FullScreen');
		const $restoreWindow = $widget.find('.RemoteAppointment__RestoreWindow');

		let isPreviousSmall = $smallSize.is(':visible');

		$minimize.click(() => {
			isPreviousSmall = $mediumSize.is(':visible');

			//$widget.draggable({ disabled: true });

			$widget.addClass('RemoteAppointment--minimized');
			$minimize.hide();
			$mediumSize.show();

			$widget.animate(minimizedPosition($header.height()));
		});

		$smallSize.click(() => {
			$widget.removeClass('RemoteAppointment--minimized');
			$minimize.show();
			$smallSize.hide();
			$mediumSize.show();

			$widget.animate({
				top: '50%',
				right: '50%',
				left: '50%',
				width: '280px',
				height: '380px',
			});
		});

		$mediumSize.click(() => {
			const isCallStarted = $widget.hasClass('RemoteAppointment--callStarted');

			//$widget.draggable('enable');

			$widget.removeClass('RemoteAppointment--minimized');
			$minimize.show();
			$mediumSize.hide();
			if (isCallStarted) $smallSize.show();

			$widget.animate({
				top: '50%',
				right: '50%',
				left: '50%',
				width: isCallStarted ? '45vw' : '450px',
				height: isCallStarted ? '45vh' : '260px',
			});
		});

		$fullScreen.click(() => {
			const iframe = document.querySelector('.RemoteAppointment iframe');

			if (iframe.requestFullscreen) {
				iframe.requestFullscreen();
			} else if (iframe.webkitRequestFullscreen) {
				iframe.webkitRequestFullscreen();
			}
		});

		$restoreWindow.click(() => {
			if (isPreviousSmall) $smallSize.click();
			else $mediumSize.click();
		});

		$(document).ready(function() {
			$widget.draggable({
				containment: 'window',
				handle: $header,
				scroll: false,
				snap: true,
				iframeFix: true,
			});

			fakeAjaxRefresh();
		});

		checkIframeLoaded();
	};

	const minimizedPosition = (headerHeight = 48) => {
		return {
			top: $(window).height() - headerHeight - 16,
			right: '76px',
			left: $(window).width() - 280 - 60 - 16,
			width: '275px',
			height: '48px',
		};
	};

	const resizeWhenJoin = () => {
		const $widget = $('.RemoteAppointment');
		const $smallSize = $widget.find('.Small');

		$smallSize.show();
		$widget.addClass('RemoteAppointment--callStarted');

		$widget.css({
			height: '45vh',
			width: '45vw',
		});

		const centerPx = ($(window.top).width() - $widget.width()) / 2;

		$widget.css({
			inset: `230px auto auto ${centerPx}px`,
		});

		let timeout;

		function warning(e) {
			timeout = setTimeout(function() {
				// Hack to keep the current tab selected if user doesn't go to another page
				const iframeContents = window.top.$('.MainContent > iframe').contents();
				const tabItems = iframeContents.find('.TabWrapper');

				tabItems.removeClass('Active');
				tabItems.first().addClass('Active');
			}, 1000);

			return (e.returnValue = 'You are leaving the page');
		}

		function noTimeout() {
			clearTimeout(timeout);
		}

		window.top.onbeforeunload = warning;
		window.top.unload = noTimeout;

		/*window.top.addEventListener('beforeunload', function(e) {
			e.preventDefault();
			e.returnValue = '123';
		});*/
	};

	const setInitialState = () => {
		const $widget = $('.RemoteAppointment');
		const $smallSize = $widget.find('.Small');
		const $mediumSize = $widget.find('.Medium');

		$smallSize.hide();
		$mediumSize.hide();
		$widget.removeClass('RemoteAppointment--callStarted');

		window.top.unload = null;
		window.top.onbeforeunload = null;

		$('.RemoteAppointment').css({
			display: 'initial',
			right: '22%',
			top: '30%',
			height: '260px',
			width: '450px',
		});
	};

	const setModalMinimized = () => {
		// To use only inside Sapphire iFrame pages
		const $modalRemoteAppt = window.top.$('.RemoteAppointment');

		if ($modalRemoteAppt.length) {
			const $minimizeModal = $modalRemoteAppt.find('.Minimize');
			$minimizeModal.click();
		}
	};

	const checkIframeLoaded = () => {
		const iframe = document.getElementsByClassName('SapphireFrame')[0];
		const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

		if (iframeDoc.readyState == 'complete') {
			iframe.contentWindow.onload = function() {
				setInitialState();
			};

			return;
		}

		window.setTimeout(checkIframeLoaded, 100);
	};

	const setCallStarted = () => {};

	const fakeAjaxRefresh = () => {
		const $iframe = $('.SapphireFrame');

		$iframe.on('load', function() {
			$iframe[0].contentWindow.onbeforeunload = function(e) {
				$('.Feedback_AjaxWait').show();
			};

			$('.Feedback_AjaxWait').hide();
		});
	};

	const openModalLeaveContext = url => {
		SapphireWidgets.RemoteAppointment.leaveURL = url;

		window.top.unload = null;
		window.top.onbeforeunload = null;

		$('.OpenModalLeaveContext').click();
	};

	SapphireWidgets.RemoteAppointment = {
		create,
		resizeWhenJoin,
		setCallStarted,
		setInitialState,
		fakeAjaxRefresh,
		setModalMinimized,
		openModalLeaveContext,
	};
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/globals.js":
/*!***********************************!*\
  !*** ./src/components/globals.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

//SapphireWidgets = window.SapphireWidgets = window.SapphireWidgets || {};

/***/ }),

/***/ "./src/components/index.scss":
/*!***********************************!*\
  !*** ./src/components/index.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cyBzeW5jIFxcLmpzJCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wMC1zZXR0aW5ncy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDMtZWxlbWVudHMvc2NyaXB0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvbGF5b3V0L2xheW91dC1iYXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvbGF5b3V0L2xheW91dC1ibGFuay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL2xheW91dC9sYXlvdXQtZW1lcmdlbmN5LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvbGF5b3V0L2xheW91dC1wb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL2xheW91dC9zdWJMYXlvdXRMZWZ0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2FjdGlvbnMtbWVudS9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2J1dHRvbi1saW5rL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvY2FyZC1jaGFydHMvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9jb2xsYXBzaWJsZS1zaWRlLXBhbmVsL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvY29tcC1saW5lL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvY291bnRyeS1waG9uZS9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2RhdGEtdGFibGVzL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvZGF0ZXRpbWUtcmFuZ2UtcGlja2VyL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvZHJhZy1kcm9wL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvZHJvcGRvd24tY2F0ZWdvcmllcy9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2Ryb3B6b25lL2Ryb3B6b25lLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2V4cGFuZGFibGUtbGluay9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2Z1bGxzY3JlZW4tdGFicy13cmFwcGVyL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvZ2VuZXJpYy1jYXJkL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvZ2VuZXJpYy1nYWxsZXJ5L3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvZ2VuZXJpYy1ncmlkL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvaG9yaXpvbnRhbC10b29sYmFyL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvaG91ci1waWNrZXIvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9pbnB1dC1sYXNhL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvaW5wdXQtd2l0aC1jbGVhci9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2lucHV0LXdpdGgtbGlzdC9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2xpbmUtYWRkL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvbGluZS1kZXRhaWxzLWV4cGFuZC1ib3gvc2NyaXB0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2xvY2F0aW9uLWJveC9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L21haW4taW50ZXJhY3RpdmUtY2FyZC9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L21lbnUtYmFyL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvbXVsdGlwbGUtc2VsZWN0aW9uLWJ1dHRvbi9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3BhbmVsL2NvbmZpcm1hdGlvbi1wYW5lbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9wYW5lbC9jb25maXJtYXRpb24tcG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvcGFuZWwvbW9kYWwtcG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvcGFuZWwvcGFuZWwtYnktaWQtbm90aWZ5LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3BhbmVsL3BhbmVsLWJ5LWlkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3BhbmVsL3BvcHVwLW1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvcGFuZWwvc2FwcGhpcmUtcGFuZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvcGFuZWwvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9wYXRpZW50LWNhbGwtY2FuY2VsL3BhdGllbnQtY2FsbC1jYW5jZWwtc3RydWN0dXJlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3BhdGllbnQtY2FsbC1jYW5jZWwvcGF0aWVudC1jYWxsLWNhbmNlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9wcmVzY3JpcHRpb24tY2FyZC9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3ByZXNjcmlwdGlvbi1leHBhbmRhYmxlL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2FwcGhpcmUtaGVhZGVyL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2FwcGhpcmUtcG9wdXAvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zYXBwaGlyZS1yYWRpby1idXR0b24vc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zY2FsZXMvc2NhbGUtbWFpbi1zdHJ1Y3R1cmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2NhbGVzL3RvZ2dsZS1pdGVtLWNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2VhcmNoLWFuZC1zZWxlY3Qvc2VsZWN0LXNzZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zZWFyY2gtYW5kLXNlbGVjdC9zc2Qtc2VhcmNoLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NlYXJjaGFibGUtY2xpZW50LXNpZGUvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zZWN0aW9uLWV4cGFuZGFibGUtY3VzdG9tL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2VjdGlvbi1leHBhbmRhYmxlLWluc2lkZS9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NlbGVjdC1zeXN0ZW0vc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zaGlmdC1jb250YWluZXIvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zaGlmdC10YWJsZS9zaGlmdFRhYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NoaWZ0LXRhYmxlL3NoaWZ0VGFibGVDYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NoaWZ0LXRhYmxlL3NoaWZ0VGFibGVDYXJkUHJvZ3Jlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2hpZnQtdGFibGUvc2hpZnRUYWJsZUhvdmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NpZGUtbWVudS9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NpZGViYXIvc2lkZWJhci1zdHJ1Y3R1cmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc21hbGwtYm94LXNlbGVjdGFibGUvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zcGlubmVyLWhvcml6b250YWwvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zcGlubmVyLXZlcnRpY2FsL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc3BsaXQtYnV0dG9uL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc3NkLWNvbXBvbmVudC1ibG9jay9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NzZC1saXN0LWxpbmUvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC90YWJsZS1mb3JtL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvdGFicy1leHRlbmRlZC9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3RhYnVsYXItbGlzdC9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3RhYnVsYXItc2Nyb2xsL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvdGltZWxpbmUvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC90cmlnZ2VyLWlmcmFtZS10b29sdGlwL3RyaWdnZXItaWZyYW1lLXRvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvdHJ1bmNhdGVkLWNvbnRlbnQvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wOC1wYWdlcy9jbGluaWNpYW5Xb3JrQXJlYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wOC1wYWdlcy9lU2lnbmF0dXJlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA4LXBhZ2VzL3JlbW90ZUFwcG9pbnRtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2dsb2JhbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxHQUFHOztRQUVIO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7UUFDQSxNQUFNO1FBQ047UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0E7UUFDQSxPQUFPO1FBQ1A7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSzs7UUFFTDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQSw2QkFBNkI7UUFDN0IsNkJBQTZCO1FBQzdCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EscUJBQXFCLGdCQUFnQjtRQUNyQztRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBLHFCQUFxQixnQkFBZ0I7UUFDckM7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSzs7UUFFTDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0E7UUFDQSxLQUFLOztRQUVMO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQSxrQkFBa0IsOEJBQThCO1FBQ2hEO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxNQUFNO1FBQ047UUFDQTtRQUNBO1FBQ0EsT0FBTztRQUNQO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLG9CQUFvQiwyQkFBMkI7UUFDL0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLE9BQU87UUFDUDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0EsbUJBQW1CLGNBQWM7UUFDakM7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLGdCQUFnQixLQUFLO1FBQ3JCO1FBQ0E7UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsZ0JBQWdCLFlBQVk7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQSxjQUFjLDRCQUE0QjtRQUMxQztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7O1FBRUo7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7UUFDQSxlQUFlLDRCQUE0QjtRQUMzQztRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBLGVBQWUsNEJBQTRCO1FBQzNDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsdUNBQXVDO1FBQ3hEO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsdUNBQXVDO1FBQ3hEO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLHNCQUFzQjtRQUN2QztRQUNBO1FBQ0E7UUFDQSxRQUFRO1FBQ1I7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsVUFBVTtRQUNWO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLGNBQWMsd0NBQXdDO1FBQ3REO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0E7UUFDQSxPQUFPO1FBQ1A7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsU0FBUztRQUNUO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsUUFBUTtRQUNSO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQSxNQUFNO1FBQ047UUFDQSxLQUFLO1FBQ0w7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxlQUFlO1FBQ2Y7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7O1FBRUE7UUFDQSxzQ0FBc0MsdUJBQXVCOzs7UUFHN0Q7UUFDQTs7Ozs7Ozs7Ozs7O0FDdjFCQSxtQkFBTyxDQUFDLDREQUF5Qjs7QUFFakM7QUFDQTtBQUNBLFdBQVcsNkRBQThDLEU7Ozs7Ozs7Ozs7O0FDSnpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2RDs7Ozs7Ozs7Ozs7QUN0R0E7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLENBQUMsNkM7Ozs7Ozs7Ozs7O0FDaENEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSwwREFBMEQ7QUFDMUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUN0TkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEU7Ozs7Ozs7Ozs7O0FDUEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNyQkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBLGtDQUFrQztBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELEVBQUU7QUFDL0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDMVNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNQRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsSUFBSTtBQUNKLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUN6REQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZ0JBQWdCOztBQUV6QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7QUFDSDs7QUFFQSwrQkFBK0I7QUFDL0IsQ0FBQzs7Ozs7Ozs7Ozs7O0FDbEJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxtQ0FBbUMsbUNBQW1DO0FBQ3RFLCtCQUErQixtQ0FBbUM7O0FBRWxFO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsRUFBRTtBQUNGOzs7Ozs7Ozs7Ozs7QUNyRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLHNCQUFzQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixTQUFTO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLFNBQVM7O0FBRW5DO0FBQ0EsMkJBQTJCLFNBQVM7QUFDcEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixTQUFTO0FBQ25DO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEseUNBQXlDO0FBQ3pDLENBQUM7Ozs7Ozs7Ozs7OztBQ2xJRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw2QkFBNkI7QUFDN0IsQ0FBQzs7Ozs7Ozs7Ozs7O0FDak5EO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxnQkFBZ0I7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUgsdUJBQXVCLGdCQUFnQjs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EseUNBQXlDLHlCQUF5Qjs7QUFFbEU7QUFDQTs7QUFFQSxxQkFBcUIseUJBQXlCO0FBQzlDLG1CQUFtQix5QkFBeUI7QUFDNUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSx1Q0FBdUMsNEJBQTRCO0FBQ25FOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ3ZFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnQkFBZ0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDakNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixvQ0FBb0M7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGlDQUFpQyw2QkFBNkI7QUFDOUQ7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLGlDQUFpQyw2QkFBNkI7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQiw4QkFBOEI7QUFDL0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCLE1BQU0sT0FBTyxJQUFJO0FBQzFDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDBDQUEwQyxhQUFhOztBQUV2RDtBQUNBOztBQUVBLDhDQUE4Qyw4QkFBOEI7QUFDNUU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxvQ0FBb0MsdUJBQXVCO0FBQzNELHVCQUF1Qix1QkFBdUI7QUFDOUM7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdDQUFnQyxxQkFBcUI7QUFDckQsbUJBQW1CLHFCQUFxQjs7QUFFeEM7QUFDQTtBQUNBLEdBQUc7O0FBRUgscUVBQXFFOztBQUVyRSwyRUFBMkU7O0FBRTNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EscURBQXFELDZCQUE2QjtBQUNsRixLQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUk7QUFDSixvREFBb0QsNkJBQTZCO0FBQ2pGO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRSw2QkFBNkI7QUFDbkcsT0FBTztBQUNQO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQSx5QkFBeUIsVUFBVSxPQUFPLFFBQVE7QUFDbEQ7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBLHlCQUF5QixVQUFVLE9BQU8sUUFBUTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsNkJBQTZCO0FBQ2xFO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyw2QkFBNkI7QUFDbkU7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDbGlCRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQzNKRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxtQzs7Ozs7Ozs7Ozs7QUMvQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHdCQUF3Qjs7QUFFeEI7QUFDQTtBQUNBOztBQUVBLFdBQVcsNEJBQTRCOztBQUV2QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsZ0NBQWdDLHFCQUFxQjs7QUFFckQ7QUFDQTs7QUFFQSxZQUFZLHFCQUFxQjtBQUNqQztBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sS0FBSztBQUNMLElBQUk7QUFDSixHQUFHO0FBQ0g7O0FBRUE7QUFDQSxRQUFRLGdCQUFnQjtBQUN4QixTQUFTLGdCQUFnQjtBQUN6QixHQUFHO0FBQ0g7O0FBRUEsNkJBQTZCO0FBQzdCLENBQUM7Ozs7Ozs7Ozs7OztBQy9ERDtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsU0FBUzs7QUFFekM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLFNBQVMscURBQXFELFNBQVM7QUFDL0U7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQ0FBbUM7QUFDbkMsQ0FBQzs7Ozs7Ozs7Ozs7O0FDcENEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSCxFQUFFO0FBQ0Y7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGOztBQUVBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDbkNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSw4QkFBOEIseUJBQXlCLGVBQWUsMkJBQTJCLGFBQWEsd0JBQXdCLFVBQVUsc0JBQXNCLFFBQVEsd0JBQXdCO0FBQ3RNOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUN6Q0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLENBQUMsNkM7Ozs7Ozs7Ozs7O0FDbkJEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDM0tEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMENBQTBDLHNCQUFzQjtBQUNoRTs7QUFFQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QjtBQUNBOztBQUVBLGdDQUFnQyxRQUFRLEdBQUcsT0FBTzs7QUFFbEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSxpQkFBaUIsRUFBRSxLQUFLO0FBQ3JDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGFBQWEsTUFBTSxHQUFHLFFBQVEsR0FBRyxRQUFRO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFDQUFxQztBQUNyQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLHNCQUFzQjtBQUNqRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNsS0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCx5QkFBeUI7QUFDN0UsSUFBSTtBQUNKLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELGlCQUFpQjtBQUNyRSxJQUFJO0FBQ0osR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNyREQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0JBQWdCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ3BERDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnQkFBZ0I7QUFDeEM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixxQkFBcUI7QUFDOUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUNBQXlDLGFBQWE7O0FBRXREO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ25ERDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF5Qiw2Q0FBNkM7QUFDdEU7O0FBRUEsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSw0QkFBNEI7QUFDNUIsQ0FBQzs7Ozs7Ozs7Ozs7O0FDcENEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsZ0JBQWdCO0FBQ3hCO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBLHlDQUF5QztBQUN6QyxDQUFDOzs7Ozs7Ozs7Ozs7QUNYRDtBQUNBO0FBQ0EsMEJBQTBCLFNBQVM7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSCxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsb0NBQW9DO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFO0FBQ0YsQ0FBQzs7Ozs7Ozs7Ozs7O0FDelNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTtBQUNGOzs7Ozs7Ozs7Ozs7QUNyRkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7QUFDRjs7Ozs7Ozs7Ozs7O0FDaENBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ3ZERDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG9DQUFvQztBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQSxXQUFXO0FBQ1g7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILEVBQUU7QUFDRjs7Ozs7Ozs7Ozs7O0FDNUxBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLEVBb0JWO0FBQ0osMEJBQTBCLFNBQVM7QUFDbkM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSCxFQUFFO0FBQ0Y7Ozs7Ozs7Ozs7OztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7QUFDRjs7Ozs7Ozs7Ozs7O0FDeEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBLDhCQUE4QixHQUFHO0FBQ2pDLFdBQVcsR0FBRztBQUNkLFdBQVcsR0FBRzs7QUFFZDtBQUNBLEVBQUU7O0FBRUY7QUFDQSw4QkFBOEIsR0FBRztBQUNqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLElBQUk7QUFDSixHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsRUFBRTtBQUNGOzs7Ozs7Ozs7Ozs7QUMxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCOztBQUUxQjtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNGQUFzRjtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEVBQUU7QUFDRjs7Ozs7Ozs7Ozs7O0FDbElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILEVBQUU7QUFDRjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ3JERCxtQkFBTyxDQUFDLCtGQUFzQjtBQUM5QixtQkFBTyxDQUFDLGlGQUFlO0FBQ3ZCLG1CQUFPLENBQUMsaUZBQWU7QUFDdkIsbUJBQU8sQ0FBQywrRUFBYztBQUN0QixtQkFBTyxDQUFDLHVGQUFrQjs7Ozs7Ozs7Ozs7O0FDSjFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLCtDQUErQztBQUMvQyxDQUFDOzs7Ozs7Ozs7Ozs7QUN4QkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLHNDQUFzQztBQUN0QyxDQUFDOzs7Ozs7Ozs7Ozs7QUMzRUQ7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGdCQUFnQjs7QUFFM0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUEscUNBQXFDO0FBQ3JDLENBQUM7Ozs7Ozs7Ozs7OztBQ2ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0NBQWdDLGdCQUFnQjs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QixJQUFJOztBQUVKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwyQ0FBMkM7QUFDM0MsQ0FBQzs7Ozs7Ozs7Ozs7O0FDN0lEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ3pIRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIsY0FBYztBQUN2Qzs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRUFBcUU7QUFDckU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1EQUFtRCxJQUFJLHNCQUFzQjtBQUM3RTtBQUNBLCtEQUErRCxRQUFRLEdBQUcsU0FBUztBQUNuRixnREFBZ0QsSUFBSSxvRkFBb0Y7O0FBRXhJO0FBQ0E7QUFDQSxvREFBb0QsZUFBZTtBQUNuRTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsa0RBQWtELGVBQWU7QUFDakU7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07O0FBRU47QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RDtBQUM1RCxnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQiwwQkFBMEI7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSixHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxrQ0FBa0M7QUFDbEMsQ0FBQzs7Ozs7Ozs7Ozs7O0FDamZEO0FBQ0E7QUFDQSx1QkFBdUIsU0FBUztBQUNoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQ0FBaUMsS0FBSztBQUN0QztBQUNBLEdBQUc7QUFDSCxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTs7Ozs7Ozs7Ozs7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlLGtCQUFrQjtBQUNqQyxnQkFBZ0Isa0JBQWtCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isa0JBQWtCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsOEJBQThCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUEsdUNBQXVDO0FBQ3ZDLENBQUM7Ozs7Ozs7Ozs7OztBQy9TRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxNQUFNO0FBQ04sSUFBSTtBQUNKLEVBQUU7QUFDRjs7Ozs7Ozs7Ozs7O0FDNURBLHFGQUFxRjs7QUFFckY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ04sSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7QUFDRjs7Ozs7Ozs7Ozs7O0FDeklBLHFGQUFxRjs7QUFFckY7QUFDQTtBQUNBLCtDQUErQztBQUMvQyxtREFBbUQ7QUFDbkQscUVBQXFFO0FBQ3JFLGlDQUFpQztBQUNqQyx1Q0FBdUM7QUFDdkMscUNBQXFDO0FBQ3JDLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0ZBQW9GO0FBQ3BGLG9GQUFvRjtBQUNwRixrRkFBa0Y7QUFDbEYsK0NBQStDOztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCLGtCQUFrQjtBQUNoRCxLQUFLO0FBQ0wsOEJBQThCLGtCQUFrQjtBQUNoRDtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsSUFBSTs7QUFFSiwrRUFBK0UsdUJBQXVCOztBQUV0RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUM3Y0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ04sSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDbEZEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQy9NRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVDQUF1QztBQUN2QyxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUMzS0Q7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDLDJCQUEyQjtBQUMzQiwyQ0FBMkM7QUFDM0Msa0NBQWtDO0FBQ2xDLDZCQUE2QjtBQUM3QixzQ0FBc0M7QUFDdEMsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMLDhDQUE4QyxTQUFTO0FBQ3ZEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLEVBQUU7QUFDRjs7Ozs7Ozs7Ozs7O0FDM2JBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDck1EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLFNBQVM7QUFDdEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7QUFDRjs7Ozs7Ozs7Ozs7O0FDekJBO0FBQ0E7QUFDQSwwQkFBMEIsU0FBUztBQUNuQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsaUJBQWlCLDJCQUEyQjtBQUM1QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdDQUFnQyxTQUFTO0FBQ3pDO0FBQ0Esa0NBQWtDLCtCQUErQjs7QUFFakU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUk7O0FBRUo7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUcsRUFBRTtBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLEVBQUU7QUFDRjs7Ozs7Ozs7Ozs7O0FDNUtBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixTQUFTO0FBQy9COztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQSwyQkFBMkIsc0JBQXNCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUEsd0NBQXdDO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0osR0FBRztBQUNIOztBQUVBOztBQUVBLDZCQUE2QjtBQUM3QixDQUFDOzs7Ozs7Ozs7Ozs7QUNsTkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVLG1CQUFtQjtBQUM3Qjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ2pLRDtBQUNBLDBCQUEwQixnQkFBZ0I7O0FBRTFDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixnQkFBZ0I7QUFDdkMsc0JBQXNCLGdCQUFnQjtBQUN0Qyx1QkFBdUIsZ0JBQWdCOztBQUV2Qzs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOzs7Ozs7Ozs7Ozs7QUM5RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsZ0JBQWdCO0FBQ2hELCtCQUErQixnQkFBZ0I7O0FBRS9DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGdCQUFnQjs7QUFFakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhCQUE4QixlQUFlO0FBQzdDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ3RORDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUMzQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCOztBQUV2QjtBQUNBLG9DQUFvQzs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7Ozs7QUFJVDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLHVCQUF1Qjs7QUFFdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsK0I7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQiw4STs7O0FBR0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsaVI7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLFNBQVM7QUFDVCxxQ0FBcUM7QUFDckM7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7O0FBRUE7O0FBRUEsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7Ozs7Ozs7Ozs7OztBQzFmRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBRTtBQUNGOzs7Ozs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0EsdUJBQXVCLFNBQVM7QUFDaEM7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUEsOEJBQThCO0FBQzlCLENBQUM7Ozs7Ozs7Ozs7OztBQzlCRDtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsZ0JBQWdCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7Ozs7Ozs7Ozs7O0FDMUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHdCQUF3QjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ25KQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxrQ0FBa0M7QUFDbEMsQ0FBQzs7Ozs7Ozs7Ozs7O0FDakZEO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixZQUFZO0FBQ3JDO0FBQ0E7O0FBRUEsd0VBQXdFLGNBQWM7QUFDdEYsRUFBRTtBQUNGOztBQUVBO0FBQ0Esa0RBQWtELFVBQVU7QUFDNUQ7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQixTQUFTOztBQUVwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVE7QUFDUjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBOztBQUVBLGFBQWEscUJBQXFCO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQSxJQUFJOztBQUVKO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esd0NBQXdDLEdBQUc7O0FBRTNDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVSxnQkFBZ0I7O0FBRTFCOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMvSUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RUFBNEUsV0FBVyxxQkFBcUIsY0FBYyxpQkFBaUIsR0FBRyxpQ0FBaUMsaUJBQWlCLDJCQUEyQixlQUFlO0FBQzFPO0FBQ0EsbUJBQW1CLHVCQUF1Qjs7QUFFMUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixLQUFLOztBQUVMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLE9BQU87QUFDUDtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUNBQXlDO0FBQ3pDLENBQUM7Ozs7Ozs7Ozs7OztBQ3hFRDtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQSwwQkFBMEIsZ0JBQWdCO0FBQzFDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04scURBQXFELEVBQUU7QUFDdkQ7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixHQUFHO0FBQ0g7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUM1REQ7QUFDQTtBQUNBLDJCQUEyQixZQUFZO0FBQ3ZDOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLElBQUk7O0FBRUo7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLElBQUk7QUFDSixHQUFHOztBQUVIO0FBQ0E7QUFDQSxrQkFBa0I7O0FBRWxCO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLDRCQUE0QjtBQUN2QztBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsZUFBZTtBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7Ozs7Ozs7Ozs7O0FDMUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLHdCQUF3QixpQkFBaUI7O0FBRXpDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osR0FBRzs7QUFFSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBLDZCQUE2QixTQUFTO0FBQ3RDLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsRUFBRTtBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDOU5ELDBFOzs7Ozs7Ozs7OztBQ0FBLHVDIiwiZmlsZSI6ImRldi5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHRmdW5jdGlvbiBob3REaXNwb3NlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHRkZWxldGUgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0fVxuIFx0dmFyIHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrID0gd2luZG93W1wid2VicGFja0hvdFVwZGF0ZVwiXTtcbiBcdHdpbmRvd1tcIndlYnBhY2tIb3RVcGRhdGVcIl0gPSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIHdlYnBhY2tIb3RVcGRhdGVDYWxsYmFjayhjaHVua0lkLCBtb3JlTW9kdWxlcykge1xuIFx0XHRob3RBZGRVcGRhdGVDaHVuayhjaHVua0lkLCBtb3JlTW9kdWxlcyk7XG4gXHRcdGlmIChwYXJlbnRIb3RVcGRhdGVDYWxsYmFjaykgcGFyZW50SG90VXBkYXRlQ2FsbGJhY2soY2h1bmtJZCwgbW9yZU1vZHVsZXMpO1xuIFx0fSA7XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90RG93bmxvYWRVcGRhdGVDaHVuayhjaHVua0lkKSB7XG4gXHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuIFx0XHRzY3JpcHQuY2hhcnNldCA9IFwidXRmLThcIjtcbiBcdFx0c2NyaXB0LnNyYyA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyBob3RDdXJyZW50SGFzaCArIFwiLmhvdC11cGRhdGUuanNcIjtcbiBcdFx0aWYgKG51bGwpIHNjcmlwdC5jcm9zc09yaWdpbiA9IG51bGw7XG4gXHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiBcdH1cblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3REb3dubG9hZE1hbmlmZXN0KHJlcXVlc3RUaW1lb3V0KSB7XG4gXHRcdHJlcXVlc3RUaW1lb3V0ID0gcmVxdWVzdFRpbWVvdXQgfHwgMTAwMDA7XG4gXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gXHRcdFx0XHRyZXR1cm4gcmVqZWN0KG5ldyBFcnJvcihcIk5vIGJyb3dzZXIgc3VwcG9ydFwiKSk7XG4gXHRcdFx0fVxuIFx0XHRcdHRyeSB7XG4gXHRcdFx0XHR2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuIFx0XHRcdFx0dmFyIHJlcXVlc3RQYXRoID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGhvdEN1cnJlbnRIYXNoICsgXCIuaG90LXVwZGF0ZS5qc29uXCI7XG4gXHRcdFx0XHRyZXF1ZXN0Lm9wZW4oXCJHRVRcIiwgcmVxdWVzdFBhdGgsIHRydWUpO1xuIFx0XHRcdFx0cmVxdWVzdC50aW1lb3V0ID0gcmVxdWVzdFRpbWVvdXQ7XG4gXHRcdFx0XHRyZXF1ZXN0LnNlbmQobnVsbCk7XG4gXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG4gXHRcdFx0XHRyZXR1cm4gcmVqZWN0KGVycik7XG4gXHRcdFx0fVxuIFx0XHRcdHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRpZiAocmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0KSByZXR1cm47XG4gXHRcdFx0XHRpZiAocmVxdWVzdC5zdGF0dXMgPT09IDApIHtcbiBcdFx0XHRcdFx0Ly8gdGltZW91dFxuIFx0XHRcdFx0XHRyZWplY3QoXG4gXHRcdFx0XHRcdFx0bmV3IEVycm9yKFwiTWFuaWZlc3QgcmVxdWVzdCB0byBcIiArIHJlcXVlc3RQYXRoICsgXCIgdGltZWQgb3V0LlwiKVxuIFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0fSBlbHNlIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gNDA0KSB7XG4gXHRcdFx0XHRcdC8vIG5vIHVwZGF0ZSBhdmFpbGFibGVcbiBcdFx0XHRcdFx0cmVzb2x2ZSgpO1xuIFx0XHRcdFx0fSBlbHNlIGlmIChyZXF1ZXN0LnN0YXR1cyAhPT0gMjAwICYmIHJlcXVlc3Quc3RhdHVzICE9PSAzMDQpIHtcbiBcdFx0XHRcdFx0Ly8gb3RoZXIgZmFpbHVyZVxuIFx0XHRcdFx0XHRyZWplY3QobmV3IEVycm9yKFwiTWFuaWZlc3QgcmVxdWVzdCB0byBcIiArIHJlcXVlc3RQYXRoICsgXCIgZmFpbGVkLlwiKSk7XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHQvLyBzdWNjZXNzXG4gXHRcdFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRcdFx0dmFyIHVwZGF0ZSA9IEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpO1xuIFx0XHRcdFx0XHR9IGNhdGNoIChlKSB7XG4gXHRcdFx0XHRcdFx0cmVqZWN0KGUpO1xuIFx0XHRcdFx0XHRcdHJldHVybjtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRyZXNvbHZlKHVwZGF0ZSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdHZhciBob3RBcHBseU9uVXBkYXRlID0gdHJ1ZTtcbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0dmFyIGhvdEN1cnJlbnRIYXNoID0gXCI1ZTUzNzJmMzNkYzYwMGY2ODU3ZFwiO1xuIFx0dmFyIGhvdFJlcXVlc3RUaW1lb3V0ID0gMTAwMDA7XG4gXHR2YXIgaG90Q3VycmVudE1vZHVsZURhdGEgPSB7fTtcbiBcdHZhciBob3RDdXJyZW50Q2hpbGRNb2R1bGU7XG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdHZhciBob3RDdXJyZW50UGFyZW50cyA9IFtdO1xuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHR2YXIgaG90Q3VycmVudFBhcmVudHNUZW1wID0gW107XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90Q3JlYXRlUmVxdWlyZShtb2R1bGVJZCkge1xuIFx0XHR2YXIgbWUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0aWYgKCFtZSkgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX187XG4gXHRcdHZhciBmbiA9IGZ1bmN0aW9uKHJlcXVlc3QpIHtcbiBcdFx0XHRpZiAobWUuaG90LmFjdGl2ZSkge1xuIFx0XHRcdFx0aWYgKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0pIHtcbiBcdFx0XHRcdFx0aWYgKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKSA9PT0gLTEpIHtcbiBcdFx0XHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHMucHVzaChtb2R1bGVJZCk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0aG90Q3VycmVudENoaWxkTW9kdWxlID0gcmVxdWVzdDtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChtZS5jaGlsZHJlbi5pbmRleE9mKHJlcXVlc3QpID09PSAtMSkge1xuIFx0XHRcdFx0XHRtZS5jaGlsZHJlbi5wdXNoKHJlcXVlc3QpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRjb25zb2xlLndhcm4oXG4gXHRcdFx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICtcbiBcdFx0XHRcdFx0XHRyZXF1ZXN0ICtcbiBcdFx0XHRcdFx0XHRcIikgZnJvbSBkaXNwb3NlZCBtb2R1bGUgXCIgK1xuIFx0XHRcdFx0XHRcdG1vZHVsZUlkXG4gXHRcdFx0XHQpO1xuIFx0XHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbXTtcbiBcdFx0XHR9XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ocmVxdWVzdCk7XG4gXHRcdH07XG4gXHRcdHZhciBPYmplY3RGYWN0b3J5ID0gZnVuY3Rpb24gT2JqZWN0RmFjdG9yeShuYW1lKSB7XG4gXHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfX1tuYW1lXTtcbiBcdFx0XHRcdH0sXG4gXHRcdFx0XHRzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX19bbmFtZV0gPSB2YWx1ZTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9O1xuIFx0XHR9O1xuIFx0XHRmb3IgKHZhciBuYW1lIGluIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoX193ZWJwYWNrX3JlcXVpcmVfXywgbmFtZSkgJiZcbiBcdFx0XHRcdG5hbWUgIT09IFwiZVwiICYmXG4gXHRcdFx0XHRuYW1lICE9PSBcInRcIlxuIFx0XHRcdCkge1xuIFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCBuYW1lLCBPYmplY3RGYWN0b3J5KG5hbWUpKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0Zm4uZSA9IGZ1bmN0aW9uKGNodW5rSWQpIHtcbiBcdFx0XHRpZiAoaG90U3RhdHVzID09PSBcInJlYWR5XCIpIGhvdFNldFN0YXR1cyhcInByZXBhcmVcIik7XG4gXHRcdFx0aG90Q2h1bmtzTG9hZGluZysrO1xuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoY2h1bmtJZCkudGhlbihmaW5pc2hDaHVua0xvYWRpbmcsIGZ1bmN0aW9uKGVycikge1xuIFx0XHRcdFx0ZmluaXNoQ2h1bmtMb2FkaW5nKCk7XG4gXHRcdFx0XHR0aHJvdyBlcnI7XG4gXHRcdFx0fSk7XG5cbiBcdFx0XHRmdW5jdGlvbiBmaW5pc2hDaHVua0xvYWRpbmcoKSB7XG4gXHRcdFx0XHRob3RDaHVua3NMb2FkaW5nLS07XG4gXHRcdFx0XHRpZiAoaG90U3RhdHVzID09PSBcInByZXBhcmVcIikge1xuIFx0XHRcdFx0XHRpZiAoIWhvdFdhaXRpbmdGaWxlc01hcFtjaHVua0lkXSkge1xuIFx0XHRcdFx0XHRcdGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGlmIChob3RDaHVua3NMb2FkaW5nID09PSAwICYmIGhvdFdhaXRpbmdGaWxlcyA9PT0gMCkge1xuIFx0XHRcdFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fTtcbiBcdFx0Zm4udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdFx0aWYgKG1vZGUgJiAxKSB2YWx1ZSA9IGZuKHZhbHVlKTtcbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy50KHZhbHVlLCBtb2RlICYgfjEpO1xuIFx0XHR9O1xuIFx0XHRyZXR1cm4gZm47XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90Q3JlYXRlTW9kdWxlKG1vZHVsZUlkKSB7XG4gXHRcdHZhciBob3QgPSB7XG4gXHRcdFx0Ly8gcHJpdmF0ZSBzdHVmZlxuIFx0XHRcdF9hY2NlcHRlZERlcGVuZGVuY2llczoge30sXG4gXHRcdFx0X2RlY2xpbmVkRGVwZW5kZW5jaWVzOiB7fSxcbiBcdFx0XHRfc2VsZkFjY2VwdGVkOiBmYWxzZSxcbiBcdFx0XHRfc2VsZkRlY2xpbmVkOiBmYWxzZSxcbiBcdFx0XHRfc2VsZkludmFsaWRhdGVkOiBmYWxzZSxcbiBcdFx0XHRfZGlzcG9zZUhhbmRsZXJzOiBbXSxcbiBcdFx0XHRfbWFpbjogaG90Q3VycmVudENoaWxkTW9kdWxlICE9PSBtb2R1bGVJZCxcblxuIFx0XHRcdC8vIE1vZHVsZSBBUElcbiBcdFx0XHRhY3RpdmU6IHRydWUsXG4gXHRcdFx0YWNjZXB0OiBmdW5jdGlvbihkZXAsIGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkFjY2VwdGVkID0gdHJ1ZTtcbiBcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwiZnVuY3Rpb25cIikgaG90Ll9zZWxmQWNjZXB0ZWQgPSBkZXA7XG4gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKVxuIFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdFx0XHRob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbigpIHt9O1xuIFx0XHRcdFx0ZWxzZSBob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcF0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbigpIHt9O1xuIFx0XHRcdH0sXG4gXHRcdFx0ZGVjbGluZTogZnVuY3Rpb24oZGVwKSB7XG4gXHRcdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkRlY2xpbmVkID0gdHJ1ZTtcbiBcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpXG4gXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0XHRcdGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwXSA9IHRydWU7XG4gXHRcdFx0fSxcbiBcdFx0XHRkaXNwb3NlOiBmdW5jdGlvbihjYWxsYmFjaykge1xuIFx0XHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG4gXHRcdFx0fSxcbiBcdFx0XHRhZGREaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiBcdFx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuIFx0XHRcdH0sXG4gXHRcdFx0cmVtb3ZlRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gXHRcdFx0XHR2YXIgaWR4ID0gaG90Ll9kaXNwb3NlSGFuZGxlcnMuaW5kZXhPZihjYWxsYmFjayk7XG4gXHRcdFx0XHRpZiAoaWR4ID49IDApIGhvdC5fZGlzcG9zZUhhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdH0sXG4gXHRcdFx0aW52YWxpZGF0ZTogZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHR0aGlzLl9zZWxmSW52YWxpZGF0ZWQgPSB0cnVlO1xuIFx0XHRcdFx0c3dpdGNoIChob3RTdGF0dXMpIHtcbiBcdFx0XHRcdFx0Y2FzZSBcImlkbGVcIjpcbiBcdFx0XHRcdFx0XHRob3RVcGRhdGUgPSB7fTtcbiBcdFx0XHRcdFx0XHRob3RVcGRhdGVbbW9kdWxlSWRdID0gbW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRcdFx0aG90U2V0U3RhdHVzKFwicmVhZHlcIik7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJyZWFkeVwiOlxuIFx0XHRcdFx0XHRcdGhvdEFwcGx5SW52YWxpZGF0ZWRNb2R1bGUobW9kdWxlSWQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwicHJlcGFyZVwiOlxuIFx0XHRcdFx0XHRjYXNlIFwiY2hlY2tcIjpcbiBcdFx0XHRcdFx0Y2FzZSBcImRpc3Bvc2VcIjpcbiBcdFx0XHRcdFx0Y2FzZSBcImFwcGx5XCI6XG4gXHRcdFx0XHRcdFx0KGhvdFF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcyA9XG4gXHRcdFx0XHRcdFx0XHRob3RRdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMgfHwgW10pLnB1c2gobW9kdWxlSWQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRkZWZhdWx0OlxuIFx0XHRcdFx0XHRcdC8vIGlnbm9yZSByZXF1ZXN0cyBpbiBlcnJvciBzdGF0ZXNcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdH1cbiBcdFx0XHR9LFxuXG4gXHRcdFx0Ly8gTWFuYWdlbWVudCBBUElcbiBcdFx0XHRjaGVjazogaG90Q2hlY2ssXG4gXHRcdFx0YXBwbHk6IGhvdEFwcGx5LFxuIFx0XHRcdHN0YXR1czogZnVuY3Rpb24obCkge1xuIFx0XHRcdFx0aWYgKCFsKSByZXR1cm4gaG90U3RhdHVzO1xuIFx0XHRcdFx0aG90U3RhdHVzSGFuZGxlcnMucHVzaChsKTtcbiBcdFx0XHR9LFxuIFx0XHRcdGFkZFN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uKGwpIHtcbiBcdFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG4gXHRcdFx0fSxcbiBcdFx0XHRyZW1vdmVTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbihsKSB7XG4gXHRcdFx0XHR2YXIgaWR4ID0gaG90U3RhdHVzSGFuZGxlcnMuaW5kZXhPZihsKTtcbiBcdFx0XHRcdGlmIChpZHggPj0gMCkgaG90U3RhdHVzSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0fSxcblxuIFx0XHRcdC8vaW5oZXJpdCBmcm9tIHByZXZpb3VzIGRpc3Bvc2UgY2FsbFxuIFx0XHRcdGRhdGE6IGhvdEN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXVxuIFx0XHR9O1xuIFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSB1bmRlZmluZWQ7XG4gXHRcdHJldHVybiBob3Q7XG4gXHR9XG5cbiBcdHZhciBob3RTdGF0dXNIYW5kbGVycyA9IFtdO1xuIFx0dmFyIGhvdFN0YXR1cyA9IFwiaWRsZVwiO1xuXG4gXHRmdW5jdGlvbiBob3RTZXRTdGF0dXMobmV3U3RhdHVzKSB7XG4gXHRcdGhvdFN0YXR1cyA9IG5ld1N0YXR1cztcbiBcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBob3RTdGF0dXNIYW5kbGVycy5sZW5ndGg7IGkrKylcbiBcdFx0XHRob3RTdGF0dXNIYW5kbGVyc1tpXS5jYWxsKG51bGwsIG5ld1N0YXR1cyk7XG4gXHR9XG5cbiBcdC8vIHdoaWxlIGRvd25sb2FkaW5nXG4gXHR2YXIgaG90V2FpdGluZ0ZpbGVzID0gMDtcbiBcdHZhciBob3RDaHVua3NMb2FkaW5nID0gMDtcbiBcdHZhciBob3RXYWl0aW5nRmlsZXNNYXAgPSB7fTtcbiBcdHZhciBob3RSZXF1ZXN0ZWRGaWxlc01hcCA9IHt9O1xuIFx0dmFyIGhvdEF2YWlsYWJsZUZpbGVzTWFwID0ge307XG4gXHR2YXIgaG90RGVmZXJyZWQ7XG5cbiBcdC8vIFRoZSB1cGRhdGUgaW5mb1xuIFx0dmFyIGhvdFVwZGF0ZSwgaG90VXBkYXRlTmV3SGFzaCwgaG90UXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzO1xuXG4gXHRmdW5jdGlvbiB0b01vZHVsZUlkKGlkKSB7XG4gXHRcdHZhciBpc051bWJlciA9ICtpZCArIFwiXCIgPT09IGlkO1xuIFx0XHRyZXR1cm4gaXNOdW1iZXIgPyAraWQgOiBpZDtcbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90Q2hlY2soYXBwbHkpIHtcbiBcdFx0aWYgKGhvdFN0YXR1cyAhPT0gXCJpZGxlXCIpIHtcbiBcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJjaGVjaygpIGlzIG9ubHkgYWxsb3dlZCBpbiBpZGxlIHN0YXR1c1wiKTtcbiBcdFx0fVxuIFx0XHRob3RBcHBseU9uVXBkYXRlID0gYXBwbHk7XG4gXHRcdGhvdFNldFN0YXR1cyhcImNoZWNrXCIpO1xuIFx0XHRyZXR1cm4gaG90RG93bmxvYWRNYW5pZmVzdChob3RSZXF1ZXN0VGltZW91dCkudGhlbihmdW5jdGlvbih1cGRhdGUpIHtcbiBcdFx0XHRpZiAoIXVwZGF0ZSkge1xuIFx0XHRcdFx0aG90U2V0U3RhdHVzKGhvdEFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCkgPyBcInJlYWR5XCIgOiBcImlkbGVcIik7XG4gXHRcdFx0XHRyZXR1cm4gbnVsbDtcbiBcdFx0XHR9XG4gXHRcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXAgPSB7fTtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXNNYXAgPSB7fTtcbiBcdFx0XHRob3RBdmFpbGFibGVGaWxlc01hcCA9IHVwZGF0ZS5jO1xuIFx0XHRcdGhvdFVwZGF0ZU5ld0hhc2ggPSB1cGRhdGUuaDtcblxuIFx0XHRcdGhvdFNldFN0YXR1cyhcInByZXBhcmVcIik7XG4gXHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRcdGhvdERlZmVycmVkID0ge1xuIFx0XHRcdFx0XHRyZXNvbHZlOiByZXNvbHZlLFxuIFx0XHRcdFx0XHRyZWplY3Q6IHJlamVjdFxuIFx0XHRcdFx0fTtcbiBcdFx0XHR9KTtcbiBcdFx0XHRob3RVcGRhdGUgPSB7fTtcbiBcdFx0XHR2YXIgY2h1bmtJZCA9IFwiYXBwXCI7XG4gXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWxvbmUtYmxvY2tzXG4gXHRcdFx0e1xuIFx0XHRcdFx0aG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0fVxuIFx0XHRcdGlmIChcbiBcdFx0XHRcdGhvdFN0YXR1cyA9PT0gXCJwcmVwYXJlXCIgJiZcbiBcdFx0XHRcdGhvdENodW5rc0xvYWRpbmcgPT09IDAgJiZcbiBcdFx0XHRcdGhvdFdhaXRpbmdGaWxlcyA9PT0gMFxuIFx0XHRcdCkge1xuIFx0XHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuIFx0XHRcdH1cbiBcdFx0XHRyZXR1cm4gcHJvbWlzZTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90QWRkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgbW9yZU1vZHVsZXMpIHtcbiBcdFx0aWYgKCFob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSB8fCAhaG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0pXG4gXHRcdFx0cmV0dXJuO1xuIFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSA9IGZhbHNlO1xuIFx0XHRmb3IgKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0aG90VXBkYXRlW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYgKC0taG90V2FpdGluZ0ZpbGVzID09PSAwICYmIGhvdENodW5rc0xvYWRpbmcgPT09IDApIHtcbiBcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHRpZiAoIWhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdKSB7XG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzTWFwW2NodW5rSWRdID0gdHJ1ZTtcbiBcdFx0fSBlbHNlIHtcbiBcdFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSA9IHRydWU7XG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzKys7XG4gXHRcdFx0aG90RG93bmxvYWRVcGRhdGVDaHVuayhjaHVua0lkKTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RVcGRhdGVEb3dubG9hZGVkKCkge1xuIFx0XHRob3RTZXRTdGF0dXMoXCJyZWFkeVwiKTtcbiBcdFx0dmFyIGRlZmVycmVkID0gaG90RGVmZXJyZWQ7XG4gXHRcdGhvdERlZmVycmVkID0gbnVsbDtcbiBcdFx0aWYgKCFkZWZlcnJlZCkgcmV0dXJuO1xuIFx0XHRpZiAoaG90QXBwbHlPblVwZGF0ZSkge1xuIFx0XHRcdC8vIFdyYXAgZGVmZXJyZWQgb2JqZWN0IGluIFByb21pc2UgdG8gbWFyayBpdCBhcyBhIHdlbGwtaGFuZGxlZCBQcm9taXNlIHRvXG4gXHRcdFx0Ly8gYXZvaWQgdHJpZ2dlcmluZyB1bmNhdWdodCBleGNlcHRpb24gd2FybmluZyBpbiBDaHJvbWUuXG4gXHRcdFx0Ly8gU2VlIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTQ2NTY2NlxuIFx0XHRcdFByb21pc2UucmVzb2x2ZSgpXG4gXHRcdFx0XHQudGhlbihmdW5jdGlvbigpIHtcbiBcdFx0XHRcdFx0cmV0dXJuIGhvdEFwcGx5KGhvdEFwcGx5T25VcGRhdGUpO1xuIFx0XHRcdFx0fSlcbiBcdFx0XHRcdC50aGVuKFxuIFx0XHRcdFx0XHRmdW5jdGlvbihyZXN1bHQpIHtcbiBcdFx0XHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdCk7XG4gXHRcdFx0XHRcdH0sXG4gXHRcdFx0XHRcdGZ1bmN0aW9uKGVycikge1xuIFx0XHRcdFx0XHRcdGRlZmVycmVkLnJlamVjdChlcnIpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHQpO1xuIFx0XHR9IGVsc2Uge1xuIFx0XHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcbiBcdFx0XHRmb3IgKHZhciBpZCBpbiBob3RVcGRhdGUpIHtcbiBcdFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBpZCkpIHtcbiBcdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2godG9Nb2R1bGVJZChpZCkpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKG91dGRhdGVkTW9kdWxlcyk7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90QXBwbHkob3B0aW9ucykge1xuIFx0XHRpZiAoaG90U3RhdHVzICE9PSBcInJlYWR5XCIpXG4gXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiYXBwbHkoKSBpcyBvbmx5IGFsbG93ZWQgaW4gcmVhZHkgc3RhdHVzXCIpO1xuIFx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiBcdFx0cmV0dXJuIGhvdEFwcGx5SW50ZXJuYWwob3B0aW9ucyk7XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdEFwcGx5SW50ZXJuYWwob3B0aW9ucykge1xuIFx0XHRob3RBcHBseUludmFsaWRhdGVkTW9kdWxlcygpO1xuXG4gXHRcdHZhciBjYjtcbiBcdFx0dmFyIGk7XG4gXHRcdHZhciBqO1xuIFx0XHR2YXIgbW9kdWxlO1xuIFx0XHR2YXIgbW9kdWxlSWQ7XG5cbiBcdFx0ZnVuY3Rpb24gZ2V0QWZmZWN0ZWRTdHVmZih1cGRhdGVNb2R1bGVJZCkge1xuIFx0XHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbdXBkYXRlTW9kdWxlSWRdO1xuIFx0XHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuXG4gXHRcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLm1hcChmdW5jdGlvbihpZCkge1xuIFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0Y2hhaW46IFtpZF0sXG4gXHRcdFx0XHRcdGlkOiBpZFxuIFx0XHRcdFx0fTtcbiBcdFx0XHR9KTtcbiBcdFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuIFx0XHRcdFx0dmFyIHF1ZXVlSXRlbSA9IHF1ZXVlLnBvcCgpO1xuIFx0XHRcdFx0dmFyIG1vZHVsZUlkID0gcXVldWVJdGVtLmlkO1xuIFx0XHRcdFx0dmFyIGNoYWluID0gcXVldWVJdGVtLmNoYWluO1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAoXG4gXHRcdFx0XHRcdCFtb2R1bGUgfHxcbiBcdFx0XHRcdFx0KG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZCAmJiAhbW9kdWxlLmhvdC5fc2VsZkludmFsaWRhdGVkKVxuIFx0XHRcdFx0KVxuIFx0XHRcdFx0XHRjb250aW51ZTtcbiBcdFx0XHRcdGlmIChtb2R1bGUuaG90Ll9zZWxmRGVjbGluZWQpIHtcbiBcdFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtZGVjbGluZWRcIixcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG4gXHRcdFx0XHRcdH07XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAobW9kdWxlLmhvdC5fbWFpbikge1xuIFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdHR5cGU6IFwidW5hY2NlcHRlZFwiLFxuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbixcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcbiBcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbW9kdWxlLnBhcmVudHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0dmFyIHBhcmVudElkID0gbW9kdWxlLnBhcmVudHNbaV07XG4gXHRcdFx0XHRcdHZhciBwYXJlbnQgPSBpbnN0YWxsZWRNb2R1bGVzW3BhcmVudElkXTtcbiBcdFx0XHRcdFx0aWYgKCFwYXJlbnQpIGNvbnRpbnVlO1xuIFx0XHRcdFx0XHRpZiAocGFyZW50LmhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0XHRcdHR5cGU6IFwiZGVjbGluZWRcIixcbiBcdFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG4gXHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRwYXJlbnRJZDogcGFyZW50SWRcbiBcdFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGlmIChvdXRkYXRlZE1vZHVsZXMuaW5kZXhPZihwYXJlbnRJZCkgIT09IC0xKSBjb250aW51ZTtcbiBcdFx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuIFx0XHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdKVxuIFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdID0gW107XG4gXHRcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdLCBbbW9kdWxlSWRdKTtcbiBcdFx0XHRcdFx0XHRjb250aW51ZTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdO1xuIFx0XHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaChwYXJlbnRJZCk7XG4gXHRcdFx0XHRcdHF1ZXVlLnB1c2goe1xuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG4gXHRcdFx0XHRcdFx0aWQ6IHBhcmVudElkXG4gXHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cblxuIFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHR0eXBlOiBcImFjY2VwdGVkXCIsXG4gXHRcdFx0XHRtb2R1bGVJZDogdXBkYXRlTW9kdWxlSWQsXG4gXHRcdFx0XHRvdXRkYXRlZE1vZHVsZXM6IG91dGRhdGVkTW9kdWxlcyxcbiBcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzOiBvdXRkYXRlZERlcGVuZGVuY2llc1xuIFx0XHRcdH07XG4gXHRcdH1cblxuIFx0XHRmdW5jdGlvbiBhZGRBbGxUb1NldChhLCBiKSB7XG4gXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBiLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHR2YXIgaXRlbSA9IGJbaV07XG4gXHRcdFx0XHRpZiAoYS5pbmRleE9mKGl0ZW0pID09PSAtMSkgYS5wdXNoKGl0ZW0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIGF0IGJlZ2luIGFsbCB1cGRhdGVzIG1vZHVsZXMgYXJlIG91dGRhdGVkXG4gXHRcdC8vIHRoZSBcIm91dGRhdGVkXCIgc3RhdHVzIGNhbiBwcm9wYWdhdGUgdG8gcGFyZW50cyBpZiB0aGV5IGRvbid0IGFjY2VwdCB0aGUgY2hpbGRyZW5cbiBcdFx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG4gXHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcbiBcdFx0dmFyIGFwcGxpZWRVcGRhdGUgPSB7fTtcblxuIFx0XHR2YXIgd2FyblVuZXhwZWN0ZWRSZXF1aXJlID0gZnVuY3Rpb24gd2FyblVuZXhwZWN0ZWRSZXF1aXJlKCkge1xuIFx0XHRcdGNvbnNvbGUud2FybihcbiBcdFx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICsgcmVzdWx0Lm1vZHVsZUlkICsgXCIpIHRvIGRpc3Bvc2VkIG1vZHVsZVwiXG4gXHRcdFx0KTtcbiBcdFx0fTtcblxuIFx0XHRmb3IgKHZhciBpZCBpbiBob3RVcGRhdGUpIHtcbiBcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhvdFVwZGF0ZSwgaWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVJZCA9IHRvTW9kdWxlSWQoaWQpO1xuIFx0XHRcdFx0LyoqIEB0eXBlIHtUT0RPfSAqL1xuIFx0XHRcdFx0dmFyIHJlc3VsdDtcbiBcdFx0XHRcdGlmIChob3RVcGRhdGVbaWRdKSB7XG4gXHRcdFx0XHRcdHJlc3VsdCA9IGdldEFmZmVjdGVkU3R1ZmYobW9kdWxlSWQpO1xuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0cmVzdWx0ID0ge1xuIFx0XHRcdFx0XHRcdHR5cGU6IFwiZGlzcG9zZWRcIixcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogaWRcbiBcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdC8qKiBAdHlwZSB7RXJyb3J8ZmFsc2V9ICovXG4gXHRcdFx0XHR2YXIgYWJvcnRFcnJvciA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGRvQXBwbHkgPSBmYWxzZTtcbiBcdFx0XHRcdHZhciBkb0Rpc3Bvc2UgPSBmYWxzZTtcbiBcdFx0XHRcdHZhciBjaGFpbkluZm8gPSBcIlwiO1xuIFx0XHRcdFx0aWYgKHJlc3VsdC5jaGFpbikge1xuIFx0XHRcdFx0XHRjaGFpbkluZm8gPSBcIlxcblVwZGF0ZSBwcm9wYWdhdGlvbjogXCIgKyByZXN1bHQuY2hhaW4uam9pbihcIiAtPiBcIik7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRzd2l0Y2ggKHJlc3VsdC50eXBlKSB7XG4gXHRcdFx0XHRcdGNhc2UgXCJzZWxmLWRlY2xpbmVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbiBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2Ygc2VsZiBkZWNsaW5lOiBcIiArXG4gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJkZWNsaW5lZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIGRlY2xpbmVkIGRlcGVuZGVuY3k6IFwiICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdFwiIGluIFwiICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQucGFyZW50SWQgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcInVuYWNjZXB0ZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vblVuYWNjZXB0ZWQpIG9wdGlvbnMub25VbmFjY2VwdGVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZVVuYWNjZXB0ZWQpXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBcIiArIG1vZHVsZUlkICsgXCIgaXMgbm90IGFjY2VwdGVkXCIgKyBjaGFpbkluZm9cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJhY2NlcHRlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uQWNjZXB0ZWQpIG9wdGlvbnMub25BY2NlcHRlZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGRvQXBwbHkgPSB0cnVlO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwiZGlzcG9zZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRpc3Bvc2VkKSBvcHRpb25zLm9uRGlzcG9zZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRkb0Rpc3Bvc2UgPSB0cnVlO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRkZWZhdWx0OlxuIFx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlVuZXhjZXB0aW9uIHR5cGUgXCIgKyByZXN1bHQudHlwZSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAoYWJvcnRFcnJvcikge1xuIFx0XHRcdFx0XHRob3RTZXRTdGF0dXMoXCJhYm9ydFwiKTtcbiBcdFx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGFib3J0RXJyb3IpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKGRvQXBwbHkpIHtcbiBcdFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSBob3RVcGRhdGVbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIHJlc3VsdC5vdXRkYXRlZE1vZHVsZXMpO1xuIFx0XHRcdFx0XHRmb3IgKG1vZHVsZUlkIGluIHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcykge1xuIFx0XHRcdFx0XHRcdGlmIChcbiBcdFx0XHRcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChcbiBcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzLFxuIFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZFxuIFx0XHRcdFx0XHRcdFx0KVxuIFx0XHRcdFx0XHRcdCkge1xuIFx0XHRcdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pXG4gXHRcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSA9IFtdO1xuIFx0XHRcdFx0XHRcdFx0YWRkQWxsVG9TZXQoXG4gXHRcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSxcbiBcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXVxuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChkb0Rpc3Bvc2UpIHtcbiBcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCBbcmVzdWx0Lm1vZHVsZUlkXSk7XG4gXHRcdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gd2FyblVuZXhwZWN0ZWRSZXF1aXJlO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIFN0b3JlIHNlbGYgYWNjZXB0ZWQgb3V0ZGF0ZWQgbW9kdWxlcyB0byByZXF1aXJlIHRoZW0gbGF0ZXIgYnkgdGhlIG1vZHVsZSBzeXN0ZW1cbiBcdFx0dmFyIG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcyA9IFtdO1xuIFx0XHRmb3IgKGkgPSAwOyBpIDwgb3V0ZGF0ZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0bW9kdWxlSWQgPSBvdXRkYXRlZE1vZHVsZXNbaV07XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gJiZcbiBcdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmhvdC5fc2VsZkFjY2VwdGVkICYmXG4gXHRcdFx0XHQvLyByZW1vdmVkIHNlbGYtYWNjZXB0ZWQgbW9kdWxlcyBzaG91bGQgbm90IGJlIHJlcXVpcmVkXG4gXHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSAhPT0gd2FyblVuZXhwZWN0ZWRSZXF1aXJlICYmXG4gXHRcdFx0XHQvLyB3aGVuIGNhbGxlZCBpbnZhbGlkYXRlIHNlbGYtYWNjZXB0aW5nIGlzIG5vdCBwb3NzaWJsZVxuIFx0XHRcdFx0IWluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmhvdC5fc2VsZkludmFsaWRhdGVkXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMucHVzaCh7XG4gXHRcdFx0XHRcdG1vZHVsZTogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdHBhcmVudHM6IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLnBhcmVudHMuc2xpY2UoKSxcbiBcdFx0XHRcdFx0ZXJyb3JIYW5kbGVyOiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5ob3QuX3NlbGZBY2NlcHRlZFxuIFx0XHRcdFx0fSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gTm93IGluIFwiZGlzcG9zZVwiIHBoYXNlXG4gXHRcdGhvdFNldFN0YXR1cyhcImRpc3Bvc2VcIik7XG4gXHRcdE9iamVjdC5rZXlzKGhvdEF2YWlsYWJsZUZpbGVzTWFwKS5mb3JFYWNoKGZ1bmN0aW9uKGNodW5rSWQpIHtcbiBcdFx0XHRpZiAoaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0gPT09IGZhbHNlKSB7XG4gXHRcdFx0XHRob3REaXNwb3NlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0fVxuIFx0XHR9KTtcblxuIFx0XHR2YXIgaWR4O1xuIFx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMuc2xpY2UoKTtcbiBcdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiBcdFx0XHRtb2R1bGVJZCA9IHF1ZXVlLnBvcCgpO1xuIFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdGlmICghbW9kdWxlKSBjb250aW51ZTtcblxuIFx0XHRcdHZhciBkYXRhID0ge307XG5cbiBcdFx0XHQvLyBDYWxsIGRpc3Bvc2UgaGFuZGxlcnNcbiBcdFx0XHR2YXIgZGlzcG9zZUhhbmRsZXJzID0gbW9kdWxlLmhvdC5fZGlzcG9zZUhhbmRsZXJzO1xuIFx0XHRcdGZvciAoaiA9IDA7IGogPCBkaXNwb3NlSGFuZGxlcnMubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdGNiID0gZGlzcG9zZUhhbmRsZXJzW2pdO1xuIFx0XHRcdFx0Y2IoZGF0YSk7XG4gXHRcdFx0fVxuIFx0XHRcdGhvdEN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXSA9IGRhdGE7XG5cbiBcdFx0XHQvLyBkaXNhYmxlIG1vZHVsZSAodGhpcyBkaXNhYmxlcyByZXF1aXJlcyBmcm9tIHRoaXMgbW9kdWxlKVxuIFx0XHRcdG1vZHVsZS5ob3QuYWN0aXZlID0gZmFsc2U7XG5cbiBcdFx0XHQvLyByZW1vdmUgbW9kdWxlIGZyb20gY2FjaGVcbiBcdFx0XHRkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG5cbiBcdFx0XHQvLyB3aGVuIGRpc3Bvc2luZyB0aGVyZSBpcyBubyBuZWVkIHRvIGNhbGwgZGlzcG9zZSBoYW5kbGVyXG4gXHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcblxuIFx0XHRcdC8vIHJlbW92ZSBcInBhcmVudHNcIiByZWZlcmVuY2VzIGZyb20gYWxsIGNoaWxkcmVuXG4gXHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZS5jaGlsZHJlbi5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGNoaWxkID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGUuY2hpbGRyZW5bal1dO1xuIFx0XHRcdFx0aWYgKCFjaGlsZCkgY29udGludWU7XG4gXHRcdFx0XHRpZHggPSBjaGlsZC5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSB7XG4gXHRcdFx0XHRcdGNoaWxkLnBhcmVudHMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gcmVtb3ZlIG91dGRhdGVkIGRlcGVuZGVuY3kgZnJvbSBtb2R1bGUgY2hpbGRyZW5cbiBcdFx0dmFyIGRlcGVuZGVuY3k7XG4gXHRcdHZhciBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcztcbiBcdFx0Zm9yIChtb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdGlmIChtb2R1bGUpIHtcbiBcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tqXTtcbiBcdFx0XHRcdFx0XHRpZHggPSBtb2R1bGUuY2hpbGRyZW4uaW5kZXhPZihkZXBlbmRlbmN5KTtcbiBcdFx0XHRcdFx0XHRpZiAoaWR4ID49IDApIG1vZHVsZS5jaGlsZHJlbi5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIE5vdyBpbiBcImFwcGx5XCIgcGhhc2VcbiBcdFx0aG90U2V0U3RhdHVzKFwiYXBwbHlcIik7XG5cbiBcdFx0aWYgKGhvdFVwZGF0ZU5ld0hhc2ggIT09IHVuZGVmaW5lZCkge1xuIFx0XHRcdGhvdEN1cnJlbnRIYXNoID0gaG90VXBkYXRlTmV3SGFzaDtcbiBcdFx0XHRob3RVcGRhdGVOZXdIYXNoID0gdW5kZWZpbmVkO1xuIFx0XHR9XG4gXHRcdGhvdFVwZGF0ZSA9IHVuZGVmaW5lZDtcblxuIFx0XHQvLyBpbnNlcnQgbmV3IGNvZGVcbiBcdFx0Zm9yIChtb2R1bGVJZCBpbiBhcHBsaWVkVXBkYXRlKSB7XG4gXHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhcHBsaWVkVXBkYXRlLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gYXBwbGllZFVwZGF0ZVttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gY2FsbCBhY2NlcHQgaGFuZGxlcnNcbiBcdFx0dmFyIGVycm9yID0gbnVsbDtcbiBcdFx0Zm9yIChtb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdGlmIChtb2R1bGUpIHtcbiBcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRcdHZhciBjYWxsYmFja3MgPSBbXTtcbiBcdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2ldO1xuIFx0XHRcdFx0XHRcdGNiID0gbW9kdWxlLmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwZW5kZW5jeV07XG4gXHRcdFx0XHRcdFx0aWYgKGNiKSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2tzLmluZGV4T2YoY2IpICE9PSAtMSkgY29udGludWU7XG4gXHRcdFx0XHRcdFx0XHRjYWxsYmFja3MucHVzaChjYik7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0XHRjYiA9IGNhbGxiYWNrc1tpXTtcbiBcdFx0XHRcdFx0XHR0cnkge1xuIFx0XHRcdFx0XHRcdFx0Y2IobW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMpO1xuIFx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuIFx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcImFjY2VwdC1lcnJvcmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3lJZDogbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbaV0sXG4gXHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuIFx0XHRcdFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuIFx0XHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIExvYWQgc2VsZiBhY2NlcHRlZCBtb2R1bGVzXG4gXHRcdGZvciAoaSA9IDA7IGkgPCBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgaXRlbSA9IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlc1tpXTtcbiBcdFx0XHRtb2R1bGVJZCA9IGl0ZW0ubW9kdWxlO1xuIFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gaXRlbS5wYXJlbnRzO1xuIFx0XHRcdGhvdEN1cnJlbnRDaGlsZE1vZHVsZSA9IG1vZHVsZUlkO1xuIFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKTtcbiBcdFx0XHR9IGNhdGNoIChlcnIpIHtcbiBcdFx0XHRcdGlmICh0eXBlb2YgaXRlbS5lcnJvckhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xuIFx0XHRcdFx0XHR0cnkge1xuIFx0XHRcdFx0XHRcdGl0ZW0uZXJyb3JIYW5kbGVyKGVycik7XG4gXHRcdFx0XHRcdH0gY2F0Y2ggKGVycjIpIHtcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvci1oYW5kbGVyLWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyMixcbiBcdFx0XHRcdFx0XHRcdFx0b3JpZ2luYWxFcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyMjtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuIFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBoYW5kbGUgZXJyb3JzIGluIGFjY2VwdCBoYW5kbGVycyBhbmQgc2VsZiBhY2NlcHRlZCBtb2R1bGUgbG9hZFxuIFx0XHRpZiAoZXJyb3IpIHtcbiBcdFx0XHRob3RTZXRTdGF0dXMoXCJmYWlsXCIpO1xuIFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gXHRcdH1cblxuIFx0XHRpZiAoaG90UXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzKSB7XG4gXHRcdFx0cmV0dXJuIGhvdEFwcGx5SW50ZXJuYWwob3B0aW9ucykudGhlbihmdW5jdGlvbihsaXN0KSB7XG4gXHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMuZm9yRWFjaChmdW5jdGlvbihtb2R1bGVJZCkge1xuIFx0XHRcdFx0XHRpZiAobGlzdC5pbmRleE9mKG1vZHVsZUlkKSA8IDApIGxpc3QucHVzaChtb2R1bGVJZCk7XG4gXHRcdFx0XHR9KTtcbiBcdFx0XHRcdHJldHVybiBsaXN0O1xuIFx0XHRcdH0pO1xuIFx0XHR9XG5cbiBcdFx0aG90U2V0U3RhdHVzKFwiaWRsZVwiKTtcbiBcdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcbiBcdFx0XHRyZXNvbHZlKG91dGRhdGVkTW9kdWxlcyk7XG4gXHRcdH0pO1xuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RBcHBseUludmFsaWRhdGVkTW9kdWxlcygpIHtcbiBcdFx0aWYgKGhvdFF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcykge1xuIFx0XHRcdGlmICghaG90VXBkYXRlKSBob3RVcGRhdGUgPSB7fTtcbiBcdFx0XHRob3RRdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMuZm9yRWFjaChob3RBcHBseUludmFsaWRhdGVkTW9kdWxlKTtcbiBcdFx0XHRob3RRdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMgPSB1bmRlZmluZWQ7XG4gXHRcdFx0cmV0dXJuIHRydWU7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90QXBwbHlJbnZhbGlkYXRlZE1vZHVsZShtb2R1bGVJZCkge1xuIFx0XHRpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChob3RVcGRhdGUsIG1vZHVsZUlkKSlcbiBcdFx0XHRob3RVcGRhdGVbbW9kdWxlSWRdID0gbW9kdWxlc1ttb2R1bGVJZF07XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGhvdDogaG90Q3JlYXRlTW9kdWxlKG1vZHVsZUlkKSxcbiBcdFx0XHRwYXJlbnRzOiAoaG90Q3VycmVudFBhcmVudHNUZW1wID0gaG90Q3VycmVudFBhcmVudHMsIGhvdEN1cnJlbnRQYXJlbnRzID0gW10sIGhvdEN1cnJlbnRQYXJlbnRzVGVtcCksXG4gXHRcdFx0Y2hpbGRyZW46IFtdXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIGhvdENyZWF0ZVJlcXVpcmUobW9kdWxlSWQpKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG4gXHQvLyBfX3dlYnBhY2tfaGFzaF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIGhvdEN1cnJlbnRIYXNoOyB9O1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIGhvdENyZWF0ZVJlcXVpcmUoXCIuL3NyYy9hcHAuanNcIikoX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hcHAuanNcIik7XG4iLCJyZXF1aXJlKCcuL2NvbXBvbmVudHMvaW5kZXguc2NzcycpO1xuXG4vL0ltcG9ydCBhbGwgSlMgZmlsZXNcbmNvbnN0IHJlcXVpcmVBbGwgPSByID0+IHIua2V5cygpLmZvckVhY2gocik7XG5yZXF1aXJlQWxsKHJlcXVpcmUuY29udGV4dCgnLi9jb21wb25lbnRzJywgdHJ1ZSwgL1xcLmpzJC8pKTsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vMDAtc2V0dGluZ3MvY29uZmlnLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wMC1zZXR0aW5ncy9jb25maWcuanNcIixcblx0XCIuLzAzLWVsZW1lbnRzL3NjcmlwdC5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDMtZWxlbWVudHMvc2NyaXB0LmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL2xheW91dC9sYXlvdXQtYmFzZS5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LWJhc2UuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvbGF5b3V0L2xheW91dC1ibGFuay5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LWJsYW5rLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL2xheW91dC9sYXlvdXQtZW1lcmdlbmN5LmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL2xheW91dC9sYXlvdXQtZW1lcmdlbmN5LmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL2xheW91dC9sYXlvdXQtcG9wdXAuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvbGF5b3V0L2xheW91dC1wb3B1cC5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy9sYXlvdXQvc3ViTGF5b3V0TGVmdC5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy9sYXlvdXQvc3ViTGF5b3V0TGVmdC5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvYWN0aW9ucy1tZW51L3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2FjdGlvbnMtbWVudS9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9idXR0b24tbGluay9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9idXR0b24tbGluay9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9jYXJkLWNoYXJ0cy9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9jYXJkLWNoYXJ0cy9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9jb2xsYXBzaWJsZS1zaWRlLXBhbmVsL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2NvbGxhcHNpYmxlLXNpZGUtcGFuZWwvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvY29tcC1saW5lL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2NvbXAtbGluZS9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9jb3VudHJ5LXBob25lL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2NvdW50cnktcGhvbmUvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvZGF0YS10YWJsZXMvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvZGF0YS10YWJsZXMvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvZGF0ZXRpbWUtcmFuZ2UtcGlja2VyL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2RhdGV0aW1lLXJhbmdlLXBpY2tlci9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9kcmFnLWRyb3Avc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvZHJhZy1kcm9wL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L2Ryb3Bkb3duLWNhdGVnb3JpZXMvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvZHJvcGRvd24tY2F0ZWdvcmllcy9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9kcm9wem9uZS9kcm9wem9uZS5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvZHJvcHpvbmUvZHJvcHpvbmUuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L2V4cGFuZGFibGUtbGluay9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9leHBhbmRhYmxlLWxpbmsvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvZnVsbHNjcmVlbi10YWJzLXdyYXBwZXIvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvZnVsbHNjcmVlbi10YWJzLXdyYXBwZXIvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvZ2VuZXJpYy1jYXJkL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2dlbmVyaWMtY2FyZC9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9nZW5lcmljLWdhbGxlcnkvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvZ2VuZXJpYy1nYWxsZXJ5L3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L2dlbmVyaWMtZ3JpZC9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9nZW5lcmljLWdyaWQvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvaG9yaXpvbnRhbC10b29sYmFyL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2hvcml6b250YWwtdG9vbGJhci9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9ob3VyLXBpY2tlci9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9ob3VyLXBpY2tlci9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9pbnB1dC1sYXNhL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2lucHV0LWxhc2Evc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvaW5wdXQtd2l0aC1jbGVhci9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9pbnB1dC13aXRoLWNsZWFyL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L2lucHV0LXdpdGgtbGlzdC9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9pbnB1dC13aXRoLWxpc3Qvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvbGluZS1hZGQvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvbGluZS1hZGQvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvbGluZS1kZXRhaWxzLWV4cGFuZC1ib3gvc2NyaXB0LmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9saW5lLWRldGFpbHMtZXhwYW5kLWJveC9zY3JpcHQuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L2xvY2F0aW9uLWJveC9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9sb2NhdGlvbi1ib3gvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvbWFpbi1pbnRlcmFjdGl2ZS1jYXJkL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L21haW4taW50ZXJhY3RpdmUtY2FyZC9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9tZW51LWJhci9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9tZW51LWJhci9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9tdWx0aXBsZS1zZWxlY3Rpb24tYnV0dG9uL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L211bHRpcGxlLXNlbGVjdGlvbi1idXR0b24vc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvcGFuZWwvY29uZmlybWF0aW9uLXBhbmVsLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9wYW5lbC9jb25maXJtYXRpb24tcGFuZWwuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3BhbmVsL2NvbmZpcm1hdGlvbi1wb3B1cC5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvcGFuZWwvY29uZmlybWF0aW9uLXBvcHVwLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9wYW5lbC9tb2RhbC1wb3B1cC5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvcGFuZWwvbW9kYWwtcG9wdXAuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3BhbmVsL3BhbmVsLWJ5LWlkLW5vdGlmeS5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvcGFuZWwvcGFuZWwtYnktaWQtbm90aWZ5LmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9wYW5lbC9wYW5lbC1ieS1pZC5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvcGFuZWwvcGFuZWwtYnktaWQuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3BhbmVsL3BvcHVwLW1lbnUuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3BhbmVsL3BvcHVwLW1lbnUuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3BhbmVsL3NhcHBoaXJlLXBhbmVsLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9wYW5lbC9zYXBwaGlyZS1wYW5lbC5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvcGFuZWwvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvcGFuZWwvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvcGF0aWVudC1jYWxsLWNhbmNlbC9wYXRpZW50LWNhbGwtY2FuY2VsLXN0cnVjdHVyZS5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvcGF0aWVudC1jYWxsLWNhbmNlbC9wYXRpZW50LWNhbGwtY2FuY2VsLXN0cnVjdHVyZS5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvcGF0aWVudC1jYWxsLWNhbmNlbC9wYXRpZW50LWNhbGwtY2FuY2VsLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9wYXRpZW50LWNhbGwtY2FuY2VsL3BhdGllbnQtY2FsbC1jYW5jZWwuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3ByZXNjcmlwdGlvbi1jYXJkL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3ByZXNjcmlwdGlvbi1jYXJkL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3ByZXNjcmlwdGlvbi1leHBhbmRhYmxlL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3ByZXNjcmlwdGlvbi1leHBhbmRhYmxlL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NhcHBoaXJlLWhlYWRlci9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zYXBwaGlyZS1oZWFkZXIvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvc2FwcGhpcmUtcG9wdXAvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2FwcGhpcmUtcG9wdXAvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvc2FwcGhpcmUtcmFkaW8tYnV0dG9uL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NhcHBoaXJlLXJhZGlvLWJ1dHRvbi9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9zY2FsZXMvc2NhbGUtbWFpbi1zdHJ1Y3R1cmUuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NjYWxlcy9zY2FsZS1tYWluLXN0cnVjdHVyZS5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvc2NhbGVzL3RvZ2dsZS1pdGVtLWNvbnRyb2wuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NjYWxlcy90b2dnbGUtaXRlbS1jb250cm9sLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9zZWFyY2gtYW5kLXNlbGVjdC9zZWxlY3Qtc3NkLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zZWFyY2gtYW5kLXNlbGVjdC9zZWxlY3Qtc3NkLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9zZWFyY2gtYW5kLXNlbGVjdC9zc2Qtc2VhcmNoLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zZWFyY2gtYW5kLXNlbGVjdC9zc2Qtc2VhcmNoLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9zZWFyY2hhYmxlLWNsaWVudC1zaWRlL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NlYXJjaGFibGUtY2xpZW50LXNpZGUvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvc2VjdGlvbi1leHBhbmRhYmxlLWN1c3RvbS9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zZWN0aW9uLWV4cGFuZGFibGUtY3VzdG9tL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NlY3Rpb24tZXhwYW5kYWJsZS1pbnNpZGUvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2VjdGlvbi1leHBhbmRhYmxlLWluc2lkZS9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9zZWxlY3Qtc3lzdGVtL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NlbGVjdC1zeXN0ZW0vc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvc2hpZnQtY29udGFpbmVyL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NoaWZ0LWNvbnRhaW5lci9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9zaGlmdC10YWJsZS9zaGlmdFRhYmxlLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zaGlmdC10YWJsZS9zaGlmdFRhYmxlLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9zaGlmdC10YWJsZS9zaGlmdFRhYmxlQ2FyZC5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2hpZnQtdGFibGUvc2hpZnRUYWJsZUNhcmQuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NoaWZ0LXRhYmxlL3NoaWZ0VGFibGVDYXJkUHJvZ3Jlc3MuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NoaWZ0LXRhYmxlL3NoaWZ0VGFibGVDYXJkUHJvZ3Jlc3MuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NoaWZ0LXRhYmxlL3NoaWZ0VGFibGVIb3Zlci5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2hpZnQtdGFibGUvc2hpZnRUYWJsZUhvdmVyLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9zaWRlLW1lbnUvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2lkZS1tZW51L3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NpZGViYXIvc2lkZWJhci1zdHJ1Y3R1cmUuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NpZGViYXIvc2lkZWJhci1zdHJ1Y3R1cmUuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NtYWxsLWJveC1zZWxlY3RhYmxlL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NtYWxsLWJveC1zZWxlY3RhYmxlL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NwaW5uZXItaG9yaXpvbnRhbC9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zcGlubmVyLWhvcml6b250YWwvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvc3Bpbm5lci12ZXJ0aWNhbC9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zcGlubmVyLXZlcnRpY2FsL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NwbGl0LWJ1dHRvbi9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zcGxpdC1idXR0b24vc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvc3NkLWNvbXBvbmVudC1ibG9jay9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zc2QtY29tcG9uZW50LWJsb2NrL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NzZC1saXN0LWxpbmUvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc3NkLWxpc3QtbGluZS9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC90YWJsZS1mb3JtL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3RhYmxlLWZvcm0vc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvdGFicy1leHRlbmRlZC9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC90YWJzLWV4dGVuZGVkL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3RhYnVsYXItbGlzdC9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC90YWJ1bGFyLWxpc3Qvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvdGFidWxhci1zY3JvbGwvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvdGFidWxhci1zY3JvbGwvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvdGltZWxpbmUvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvdGltZWxpbmUvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvdHJpZ2dlci1pZnJhbWUtdG9vbHRpcC90cmlnZ2VyLWlmcmFtZS10b29sdGlwLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC90cmlnZ2VyLWlmcmFtZS10b29sdGlwL3RyaWdnZXItaWZyYW1lLXRvb2x0aXAuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3RydW5jYXRlZC1jb250ZW50L3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3RydW5jYXRlZC1jb250ZW50L3NjcmlwdHMuanNcIixcblx0XCIuLzA4LXBhZ2VzL2NsaW5pY2lhbldvcmtBcmVhLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wOC1wYWdlcy9jbGluaWNpYW5Xb3JrQXJlYS5qc1wiLFxuXHRcIi4vMDgtcGFnZXMvZVNpZ25hdHVyZS5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDgtcGFnZXMvZVNpZ25hdHVyZS5qc1wiLFxuXHRcIi4vMDgtcGFnZXMvcmVtb3RlQXBwb2ludG1lbnQuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA4LXBhZ2VzL3JlbW90ZUFwcG9pbnRtZW50LmpzXCIsXG5cdFwiLi9nbG9iYWxzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy9nbG9iYWxzLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2NvbXBvbmVudHMgc3luYyByZWN1cnNpdmUgXFxcXC5qcyRcIjsiLCJTYXBwaGlyZVdpZGdldHMgPSB3aW5kb3cuU2FwcGhpcmVXaWRnZXRzID0gd2luZG93LlNhcHBoaXJlV2lkZ2V0cyB8fCB7fTtcclxuIiwiLyogQ29tcG9uZW50IFRleHRhcmVhICovXG4oZnVuY3Rpb24oJCwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKSB7XG4gIFxuICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICB3aW5kb3cucGFyZW50LkNhbGxUZXh0QXJlYUF1dG9SZXNpemUoKTtcbiAgfSk7XG5cbiAgd2luZG93LkNhbGxUZXh0QXJlYUF1dG9SZXNpemUgPSBmdW5jdGlvbiBwcmVwYXJlVGV4dEFyZWFBdXRvUmVzaXplKFRleHRBcmVhSWQpe1xuICAgIFxuICAgIGlmKFRleHRBcmVhSWQ9PXVuZGVmaW5lZCl7XG4gICAgICB2YXIgdGV4dEFyZWFJbnB1dCA9ICQoJ3RleHRhcmVhJyk7XG4gICAgfWVsc2V7XG4gICAgICB2YXIgdGV4dEFyZWFJbnB1dCA9ICQoJyMnK1RleHRBcmVhSWQpO1xuICAgIH1cbiAgICB0ZXh0QXJlYUlucHV0LmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgJCh0aGlzKS5hdHRyKCdyb3dzJywyKTtcbiAgICAgICAgcmVzaXplVGV4dEFyZWEoJCh0aGlzKSk7XG4gICAgfSk7XG5cbiAgICB0ZXh0QXJlYUlucHV0Lm9uKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XG4gICAgICByZXNpemVUZXh0QXJlYSgkKHRoaXMpKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2l6ZVRleHRBcmVhICgkdGV4dEFyZWFJbnB1dCkge1xuICAgIGNvbnNvbGUubG9nKCR0ZXh0QXJlYUlucHV0WzBdLnNjcm9sbEhlaWdodCk7XG4gICAgaWYoJHRleHRBcmVhSW5wdXRbMF0uc2Nyb2xsSGVpZ2h0ID09IDApe1xuICAgICAgJHRleHRBcmVhSW5wdXQuY3NzKCdoZWlnaHQnLCAnNjBweCcpO1xuICAgIH1lbHNle1xuICAgICAgJHRleHRBcmVhSW5wdXQuY3NzKCdoZWlnaHQnLCAkdGV4dEFyZWFJbnB1dFswXS5zY3JvbGxIZWlnaHQrJ3B4Jyk7XG4gICAgfVxuICB9XG59KShqUXVlcnksIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cyk7IiwiLyogQ29tcG9uZW50IExheW91dEJhc2UgKi9cclxuKGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cykge1xyXG5cdHZhciBjcmVhdGUgPSBmdW5jdGlvbihjb25maWcpIHtcclxuXHRcdHdpbmRvd1tjb25maWcud2lkZ2V0SWRdID0gbmV3IExheW91dEJhc2UoY29uZmlnKTtcclxuXHRcdFNhcHBoaXJlV2lkZ2V0cy5MYXlvdXRCYXNlLndpZGdldElkID0gY29uZmlnLndpZGdldElkO1xyXG5cdH07XHJcblxyXG5cdHZhciBvcGVuU2lkZWJhcklmcmFtZSA9IGZ1bmN0aW9uKGR1cmF0aW9uKSB7XHJcblx0XHR3aW5kb3dbU2FwcGhpcmVXaWRnZXRzLkxheW91dEJhc2Uud2lkZ2V0SWRdLm9wZW5TaWRlYmFySWZyYW1lKGR1cmF0aW9uKTtcclxuXHR9O1xyXG5cclxuXHR2YXIgY2xvc2VTaWRlYmFySWZyYW1lID0gZnVuY3Rpb24oZHVyYXRpb24pIHtcclxuXHRcdHdpbmRvd1tTYXBwaGlyZVdpZGdldHMuTGF5b3V0QmFzZS53aWRnZXRJZF0uY2xvc2VTaWRlYmFySWZyYW1lKGR1cmF0aW9uKTtcclxuXHR9O1xyXG5cclxuXHR2YXIgc2Nyb2xsVG9FbGVtZW50ID0gZnVuY3Rpb24oJGVsZW1lbnQsIG9mZnNldCA9IDApIHtcclxuXHRcdHZhciAkdGFyZ2V0RWxlbWVudCA9ICRlbGVtZW50O1xyXG5cclxuXHRcdGlmICghISR0YXJnZXRFbGVtZW50Lmxlbmd0aCkge1xyXG5cdFx0XHR2YXIgc2Nyb2xsVG9PZmZzZXRJbnRlcnZhbDtcclxuXHJcblx0XHRcdHNjcm9sbFRvT2Zmc2V0SW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRpZiAod2luZG93W1NhcHBoaXJlV2lkZ2V0cy5MYXlvdXRCYXNlLndpZGdldElkXS5nZXRUaHJlc2hvbGRzKCkuc2Vjb25kYXJ5VGhyZXNob2xkID4gMCkge1xyXG5cdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbChzY3JvbGxUb09mZnNldEludGVydmFsKTtcclxuXHJcblx0XHRcdFx0XHRsZXQgdGFyZ2V0RWxlbWVudE9mZnNldFRvcCA9ICR0YXJnZXRFbGVtZW50Lm9mZnNldCgpLnRvcDtcclxuXHJcblx0XHRcdFx0XHRjb25zdCBpc0ZpeGVkID0gJCgnLkxheW91dEJhc2Utc2Vjb25kYXJ5JykuaGFzQ2xhc3MoJ2lzRml4ZWQnKTtcclxuXHRcdFx0XHRcdGNvbnN0IGlzRW1lcmdlbmN5ID0gISEkKCcuTGF5b3V0QmFzZS1lbWVyZ2VuY3knKS50ZXh0KCk7XHJcblxyXG5cdFx0XHRcdFx0Y29uc3QgaGVhZGVySGVpZ2h0ID0gJCgnLlNhcHBoaXJlSGVhZGVyJykuaGVpZ2h0KCk7XHJcblx0XHRcdFx0XHRjb25zdCBzZWNvbmRhcnlIZWlnaHQgPSAkKCcuTGF5b3V0QmFzZS1zZWNvbmRhcnknKS5vdXRlckhlaWdodCgpO1xyXG5cdFx0XHRcdFx0Y29uc3QgZW1lcmdlbmN5SGVpZ2h0ID0gaXNFbWVyZ2VuY3kgPyAkKCcuTGF5b3V0QmFzZS1lbWVyZ2VuY3knKS5oZWlnaHQoKSA6IDA7XHJcblxyXG5cdFx0XHRcdFx0Ly9jb25zdCBzZWNvbmRhcnlGaXhlZCA9IGlzRml4ZWQgPyBzZWNvbmRhcnlIZWlnaHQgOiBzZWNvbmRhcnlIZWlnaHQgLSAyNjtcclxuXHRcdFx0XHRcdHRhcmdldEVsZW1lbnRPZmZzZXRUb3AgPSB0YXJnZXRFbGVtZW50T2Zmc2V0VG9wIC0gKGhlYWRlckhlaWdodCArIHNlY29uZGFyeUhlaWdodCArIGVtZXJnZW5jeUhlaWdodCk7XHJcblxyXG5cdFx0XHRcdFx0JCgnYm9keSwgaHRtbCcpLnNjcm9sbFRvcCh0YXJnZXRFbGVtZW50T2Zmc2V0VG9wIC0gMTYpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSwgMjUwKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHR2YXIgTGF5b3V0QmFzZSA9IGZ1bmN0aW9uKGNvbmZpZykge1xyXG5cdFx0dmFyIF90aGlzID0gdGhpcztcclxuXHRcdHRoaXMubGF5b3V0QmFzZVJlZHJhd1RpbWVyID0gMDtcclxuXHRcdHRoaXMuaGFzSGVhZGVyID0gY29uZmlnLmhhc0hlYWRlcjtcclxuXHRcdHRoaXMuaXNFeHBhbmRhYmxlID0gY29uZmlnLmlzRXhwYW5kYWJsZTtcclxuXHRcdHRoaXMuaXNUb3BXaW5kb3cgPSB3aW5kb3cudG9wID09PSB3aW5kb3cuc2VsZiA/IHRydWUgOiBmYWxzZTtcclxuXHRcdHRoaXMuJHdpZGdldCA9ICQoJyMnICsgY29uZmlnLndpZGdldElkKTtcclxuXHRcdHRoaXMuJHdyYXBwZXIgPSB0aGlzLiR3aWRnZXQuZmluZCgnLkxheW91dEJhc2UtV3JhcHBlcicpO1xyXG5cdFx0dGhpcy4kc3BhY2VyID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5MYXlvdXRCYXNlLXNwYWNlcicpO1xyXG5cdFx0dGhpcy4kbWFpbk1lbnUgPSB0aGlzLiR3aWRnZXQuZmluZCgnLkxheW91dEJhc2UtTWFpbk1lbnUnKTtcclxuXHRcdHRoaXMuJGhlYWRlciA9IHRoaXMuJHdpZGdldC5maW5kKCcuTGF5b3V0QmFzZS1oZWFkZXInKTtcclxuXHRcdHRoaXMuJGhlYWRlckJvZHkgPSB0aGlzLiR3aWRnZXQuZmluZCgnLlNhcHBoaXJlSGVhZGVyLWJvZHknKTtcclxuXHRcdHRoaXMuJHByaW1hcnlNZW51ID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5MYXlvdXRCYXNlLXByaW1hcnktbWVudScpO1xyXG5cdFx0dGhpcy4kZW1lcmdlbmN5ID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5MYXlvdXRCYXNlLWVtZXJnZW5jeScpO1xyXG5cdFx0dGhpcy4kc2Vjb25kYXJ5ID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5MYXlvdXRCYXNlLXNlY29uZGFyeScpO1xyXG5cdFx0dGhpcy4kc2Vjb25kYXJ5TWVudSA9IHRoaXMuJHdpZGdldC5maW5kKCcuTGF5b3V0QmFzZS1zZWNvbmRhcnktbWVudScpO1xyXG5cdFx0dGhpcy4kaWZyYW1lU2lkZWJhciA9IHRoaXMuJHdpZGdldC5maW5kKCcuTGF5b3V0QmFzZS1pZnJhbWVzaWRlYmFyJyk7XHJcblx0XHR0aGlzLiRoZWFkZXJBZGRpdGlvbmFsQ29udGVudCA9IHRoaXMuJHdpZGdldC5maW5kKCcuU2FwcGhpcmVIZWFkZXItYWRkaXRpb25hbC1jb250ZW50Jyk7XHJcblx0XHR0aGlzLiR0b3BmaXhlZENvbnRlbnQgPSB0aGlzLiR3aWRnZXQuZmluZCgnLkxheW91dEJhc2UtdG9wZml4ZWRjb250ZW50Jyk7XHJcblx0XHR0aGlzLiRib3R0b21maXhlZENvbnRlbnQgPSB0aGlzLiR3aWRnZXQuZmluZCgnLkxheW91dEJhc2UtYm90dG9tZml4ZWRjb250ZW50Jyk7XHJcblx0XHR0aGlzLiRtYWluQ29udGVudCA9IHRoaXMuJHdpZGdldC5maW5kKCcuTGF5b3V0QmFzZS1NYWluQ29udGVudCcpO1xyXG5cdFx0dGhpcy5leHRyYVBhZGRpbmdFbWVyZ2VuY3kgPSAwO1xyXG5cdFx0dGhpcy5leHRyYVBhZGRpbmdTZWNvbmRhcnkgPSAwO1xyXG5cdFx0dGhpcy5zZXR1cFdpbmRvd0V2ZW50cygpO1xyXG5cdFx0dGhpcy4kaWZyYW1lU2lkZWJhci5hcHBlbmQoJzxkaXYgY2xhc3M9XCJsZHMtcmluZyAxXCI+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48L2Rpdj4nKTtcclxuXHJcblx0XHQkKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKCdib2R5JykuYWRkQ2xhc3MoJ0xheW91dEJhc2UnKTtcclxuXHRcdFx0aWYgKF90aGlzLmlzVG9wV2luZG93KSB7XHJcblx0XHRcdFx0JCgnYm9keScpLmNzcygnb3ZlcmZsb3cteScsICdzY3JvbGwnKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0JCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQoJ2JvZHknKS5jbGljaygpO1xyXG5cdFx0XHQkKHdpbmRvdykuc2Nyb2xsKCk7XHJcblxyXG5cdFx0XHRfdGhpcy4kaWZyYW1lU2lkZWJhci5maW5kKCcubGRzLXJpbmcnKS5mYWRlT3V0KCk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRMYXlvdXRCYXNlLnByb3RvdHlwZS5zZXR1cFdpbmRvd0V2ZW50cyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIF90aGlzID0gdGhpcztcclxuXHRcdHZhciBjdXJzb3JQb3NpdG9uID0gMDtcclxuXHJcblx0XHQkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRfdGhpcy51cGRhdGVUaHJlc2hvbGRzKCk7XHJcblx0XHRcdF90aGlzLmhhbmRsZU9wdGlvbmFsQ29udGFpbmVycygpO1xyXG5cdFx0XHRfdGhpcy5oYW5kbGVMYXlvdXRUb3BQYWRkaW5nKCk7XHJcblx0XHRcdF90aGlzLmhhbmRsZUxheW91dEJvdHRvbVBhZGRpbmcoKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdCQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciBuZXdQb3NpdGlvbiA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuXHJcblx0XHRcdHdpbmRvdy5jbGVhclRpbWVvdXQoX3RoaXMubGF5b3V0QmFzZVJlZHJhd1RpbWVyKTtcclxuXHRcdFx0X3RoaXMubGF5b3V0QmFzZVJlZHJhd1RpbWVyID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0X3RoaXMudXBkYXRlVGhyZXNob2xkcygpO1xyXG5cdFx0XHRcdF90aGlzLmhhbmRsZU9wdGlvbmFsQ29udGFpbmVycygpO1xyXG5cdFx0XHRcdF90aGlzLmhhbmRsZUxheW91dFRvcFBhZGRpbmcoKTtcclxuXHRcdFx0XHRfdGhpcy5oYW5kbGVMYXlvdXRCb3R0b21QYWRkaW5nKCk7XHJcblx0XHRcdFx0X3RoaXMuaGFuZGxlTWFuYWdlUXVldWVDYXJkKGN1cnNvclBvc2l0b24sIG5ld1Bvc2l0aW9uKTtcclxuXHRcdFx0XHRjdXJzb3JQb3NpdG9uID0gbmV3UG9zaXRpb247XHJcblx0XHRcdH0sIDEwMCk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRMYXlvdXRCYXNlLnByb3RvdHlwZS5oYW5kbGVPcHRpb25hbENvbnRhaW5lcnMgPSBmdW5jdGlvbigpIHtcclxuXHRcdC8qY29uc3Qgc2Nyb2xsVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG5cdFx0Y29uc3QgaXNFbWVyZ2VuY3kgPSAhISQoJy5MYXlvdXRCYXNlLWVtZXJnZW5jeScpLnRleHQoKTsqL1xyXG5cdH07XHJcblxyXG5cdExheW91dEJhc2UucHJvdG90eXBlLmhhbmRsZUxheW91dFRvcFBhZGRpbmcgPSBmdW5jdGlvbigpIHtcclxuXHRcdHZhciBwYWRkaW5nVG9wID0gdGhpcy5jb250ZW50VGhyZXNob2xkICsgdGhpcy5leHRyYVBhZGRpbmdFbWVyZ2VuY3kgKyB0aGlzLmV4dHJhUGFkZGluZ1NlY29uZGFyeTtcclxuXHRcdHRoaXMuJHNwYWNlci5zdG9wKCkuYW5pbWF0ZShcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGhlaWdodDogcGFkZGluZ1RvcCxcclxuXHRcdFx0fSxcclxuXHRcdFx0MCxcclxuXHRcdFx0J2xpbmVhcidcclxuXHRcdCk7XHJcblx0XHRpZiAodGhpcy4kdG9wZml4ZWRDb250ZW50Lmxlbmd0aCA9PT0gMSkge1xyXG5cdFx0XHR0aGlzLiR0b3BmaXhlZENvbnRlbnQuY3NzKHtcclxuXHRcdFx0XHR3aWR0aDogJCgnLkxheW91dEJhc2UtTWFpbkNvbnRlbnQnKS53aWR0aCgpLFxyXG5cdFx0XHRcdHRvcDogdGhpcy50b3BmaXhlZENvbnRlbnRUaHJlc2hvbGQgKyAncHgnLFxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRMYXlvdXRCYXNlLnByb3RvdHlwZS5oYW5kbGVMYXlvdXRCb3R0b21QYWRkaW5nID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAodGhpcy4kYm90dG9tZml4ZWRDb250ZW50Lmxlbmd0aCA9PT0gMSkge1xyXG5cdFx0XHRpZiAoJCgnYm9keScpWzBdLnNjcm9sbEhlaWdodCA+ICQoJ2JvZHknKS5oZWlnaHQoKSkge1xyXG5cdFx0XHRcdHZhciBib3R0b21GaXhlZEhlaWdodCA9IHRoaXMuJGJvdHRvbWZpeGVkQ29udGVudC5vdXRlckhlaWdodCh0cnVlKTtcclxuXHRcdFx0XHR0aGlzLiR3cmFwcGVyLmFkZENsYXNzKCdoYXNGaXhlZEJvdHRvbScpLmNzcygncGFkZGluZy1ib3R0b20nLCBib3R0b21GaXhlZEhlaWdodCArICdweCcpO1xyXG5cdFx0XHRcdHRoaXMuJGJvdHRvbWZpeGVkQ29udGVudC5jc3Moe1xyXG5cdFx0XHRcdFx0d2lkdGg6ICQoJy5MYXlvdXRCYXNlLU1haW5Db250ZW50Jykub3V0ZXJXaWR0aCh0cnVlKSxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLiR3cmFwcGVyLnJlbW92ZUNsYXNzKCdoYXNGaXhlZEJvdHRvbScpLmNzcygncGFkZGluZy1ib3R0b20nLCAnJyk7XHJcblx0XHRcdFx0dGhpcy4kYm90dG9tZml4ZWRDb250ZW50LmNzcyh7XHJcblx0XHRcdFx0XHR3aWR0aDogJycsXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRMYXlvdXRCYXNlLnByb3RvdHlwZS51cGRhdGVUaHJlc2hvbGRzID0gZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgbWFpbk1lbnVIZWlnaHQgPSB0aGlzLiRtYWluTWVudS5vdXRlckhlaWdodCh0cnVlKSB8fCAwO1xyXG5cdFx0dmFyIGhlYWRlckJvZHlIZWlnaHQgPSB0aGlzLiRoZWFkZXJCb2R5Lm91dGVySGVpZ2h0KHRydWUpIHx8IHRoaXMuJGhlYWRlci5vdXRlckhlaWdodCh0cnVlKSB8fCAwO1xyXG5cdFx0dmFyIHRvcGZpeGVkQ29udGVudEhlaWdodCA9IHRoaXMuJHRvcGZpeGVkQ29udGVudC5vdXRlckhlaWdodCh0cnVlKSB8fCAwO1xyXG5cdFx0dmFyIHByaW1hcnlNZW51SGVpZ2h0ID0gdGhpcy4kcHJpbWFyeU1lbnUub3V0ZXJIZWlnaHQodHJ1ZSkgfHwgMDtcclxuXHRcdHZhciBlbWVyZ2VuY3lIZWlnaHQgPSB0aGlzLiRlbWVyZ2VuY3kub3V0ZXJIZWlnaHQodHJ1ZSkgfHwgMDtcclxuXHRcdHRoaXMudG9wZml4ZWRDb250ZW50VGhyZXNob2xkID0gbWFpbk1lbnVIZWlnaHQgKyBoZWFkZXJCb2R5SGVpZ2h0O1xyXG5cdFx0dGhpcy5jb250ZW50VGhyZXNob2xkID0gbWFpbk1lbnVIZWlnaHQgKyBoZWFkZXJCb2R5SGVpZ2h0ICsgdG9wZml4ZWRDb250ZW50SGVpZ2h0O1xyXG5cdFx0dGhpcy5lbWVyZ2VuY3lUaHJlc2hvbGQgPSBtYWluTWVudUhlaWdodCArIGhlYWRlckJvZHlIZWlnaHQgKyB0b3BmaXhlZENvbnRlbnRIZWlnaHQgKyBwcmltYXJ5TWVudUhlaWdodDtcclxuXHRcdHRoaXMuc2Vjb25kYXJ5VGhyZXNob2xkID1cclxuXHRcdFx0bWFpbk1lbnVIZWlnaHQgKyBoZWFkZXJCb2R5SGVpZ2h0ICsgdG9wZml4ZWRDb250ZW50SGVpZ2h0ICsgcHJpbWFyeU1lbnVIZWlnaHQgKyBlbWVyZ2VuY3lIZWlnaHQ7XHJcblx0fTtcclxuXHJcblx0TGF5b3V0QmFzZS5wcm90b3R5cGUuZ2V0VGhyZXNob2xkcyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0dG9wZml4ZWRDb250ZW50VGhyZXNob2xkOiB0aGlzLnRvcGZpeGVkQ29udGVudFRocmVzaG9sZCxcclxuXHRcdFx0Y29udGVudFRocmVzaG9sZDogdGhpcy5jb250ZW50VGhyZXNob2xkLFxyXG5cdFx0XHRlbWVyZ2VuY3lUaHJlc2hvbGQ6IHRoaXMuZW1lcmdlbmN5VGhyZXNob2xkLFxyXG5cdFx0XHRzZWNvbmRhcnlUaHJlc2hvbGQ6IHRoaXMuc2Vjb25kYXJ5VGhyZXNob2xkLFxyXG5cdFx0fTtcclxuXHR9O1xyXG5cclxuXHRMYXlvdXRCYXNlLnByb3RvdHlwZS5vcGVuU2lkZWJhcklmcmFtZSA9IGZ1bmN0aW9uKGR1cmF0aW9uX2luKSB7XHJcblx0XHR2YXIgZHVyYXRpb24gPSBkdXJhdGlvbl9pbiA+PSAwID8gZHVyYXRpb25faW4gOiAxMDA7XHJcblx0XHR0aGlzLiRpZnJhbWVTaWRlYmFyLmFuaW1hdGUoXHJcblx0XHRcdHtcclxuXHRcdFx0XHR3aWR0aDogJzEwMCUnLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRkdXJhdGlvblxyXG5cdFx0KTtcclxuXHRcdCQoJ2JvZHknKVxyXG5cdFx0XHQuY3NzKCdvdmVyZmxvdy15JywgJ3Njcm9sbCcpXHJcblx0XHRcdC5jbGljaygpO1xyXG5cdH07XHJcblxyXG5cdExheW91dEJhc2UucHJvdG90eXBlLmNsb3NlU2lkZWJhcklmcmFtZSA9IGZ1bmN0aW9uKGR1cmF0aW9uX2luKSB7XHJcblx0XHR2YXIgZHVyYXRpb24gPSBkdXJhdGlvbl9pbiA+PSAwID8gZHVyYXRpb25faW4gOiAxMDA7XHJcblx0XHR2YXIgdGFyZ2V0V2lkdGggPSB0aGlzLmlzRXhwYW5kYWJsZSA/IDQwIDogMjYyO1xyXG5cdFx0dGhpcy4kaWZyYW1lU2lkZWJhci5hbmltYXRlKFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0d2lkdGg6IHRhcmdldFdpZHRoLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRkdXJhdGlvblxyXG5cdFx0KTtcclxuXHRcdCQoJ2JvZHknKS5jc3MoJ292ZXJmbG93LXknLCAnc2Nyb2xsJyk7XHJcblx0fTtcclxuXHJcblx0TGF5b3V0QmFzZS5wcm90b3R5cGUuaGFuZGxlTWFuYWdlUXVldWVDYXJkID0gZnVuY3Rpb24oY3Vyc29yUG9zaXRvbiwgbmV3UG9zaXRpb24pIHtcclxuXHRcdGNvbnN0ICRtYW5hZ2VRdWV1ZSA9ICQoJy5NYW5hZ2VRdWV1ZUNvbnRhaW5lcicpO1xyXG5cclxuXHRcdGlmICgkbWFuYWdlUXVldWUubGVuZ3RoKSB7XHJcblx0XHRcdGlmIChuZXdQb3NpdGlvbiA+IGN1cnNvclBvc2l0b24pIHtcclxuXHRcdFx0XHQkbWFuYWdlUXVldWUuYWRkQ2xhc3MoJ01hbmFnZVF1ZXVlQ29udGFpbmVyLS1jbG9zZWQnKTtcclxuXHRcdFx0fSBlbHNlIGlmIChuZXdQb3NpdGlvbiA8IGN1cnNvclBvc2l0b24pIHtcclxuXHRcdFx0XHQkbWFuYWdlUXVldWUucmVtb3ZlQ2xhc3MoJ01hbmFnZVF1ZXVlQ29udGFpbmVyLS1jbG9zZWQnKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdFNhcHBoaXJlV2lkZ2V0cy5MYXlvdXRCYXNlID0ge1xyXG5cdFx0Y3JlYXRlLFxyXG5cdFx0Y2xvc2VTaWRlYmFySWZyYW1lLFxyXG5cdFx0b3BlblNpZGViYXJJZnJhbWUsXHJcblx0XHRzY3JvbGxUb0VsZW1lbnQsXHJcblx0fTtcclxufSkoalF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpO1xyXG4iLCIvKiBDb21wb25lbnQgTGF5b3V0QmxhbmsgKi9cclxuJChmdW5jdGlvbiAoKSB7XHJcblx0aWYgKHdpbmRvdy5mcmFtZUVsZW1lbnQpIHtcclxuXHRcdGlmICghISQodGhpcy5mcmFtZUVsZW1lbnQpLmNsb3Nlc3QoJy5NYWluSW50ZXJhY3RpdmVDYXJkJykubGVuZ3RoKSB7XHJcblx0XHRcdCQoJy5MYXlvdXRCbGFuay5QYWdlJykuYWRkQ2xhc3MoJ01haW5JbnRlcmFjdGl2ZUNhcmQnKTtcclxuXHRcdH1cclxuXHR9XHJcbn0pOyIsIihmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpIHtcclxuXHRjb25zdCBGb3J3YXJkUGF0aWVudENvbXBvbmVudCA9ICgpID0+IHtcclxuXHRcdGNvbnN0ICRhbGxPcHRpb25zID0gJCgnLkZvcndhcmRMb2NhdGlvbnNDb250ZW50Jyk7XHJcblx0XHRjb25zdCAkbXVsdGlwbGUgPSAkKCcuRm9yd2FyZExvY2F0aW9uc0RpdicpO1xyXG5cdFx0Y29uc3QgJHNpbmdsZSA9ICQoJy5TaW5nbGVMb2NhdGlvbicpO1xyXG5cclxuXHRcdCQoJ2JvZHknKS5tb3VzZXVwKGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0Y29uc3Qgbm90Q2xpY2tJbkFsbE9wdGlvbnMgPSAhJGFsbE9wdGlvbnMuaXMoZS50YXJnZXQpICYmICRhbGxPcHRpb25zLmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwO1xyXG5cdFx0XHRjb25zdCBub3RDbGlja0luTXVsdGlwbGUgPSAhJG11bHRpcGxlLmlzKGUudGFyZ2V0KSAmJiAkbXVsdGlwbGUuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDA7XHJcblx0XHRcdGNvbnN0IG5vdENsaWNrSW5TaW5nbGUgPSAhJHNpbmdsZS5pcyhlLnRhcmdldCkgJiYgJHNpbmdsZS5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PT0gMDtcclxuXHRcdFx0Y29uc3QgaXNPcGVuID0gJG11bHRpcGxlLmlzKCc6dmlzaWJsZScpO1xyXG5cclxuXHRcdFx0aWYgKG5vdENsaWNrSW5BbGxPcHRpb25zICYmIG5vdENsaWNrSW5NdWx0aXBsZSAmJiBub3RDbGlja0luU2luZ2xlICYmIGlzT3Blbikge1xyXG5cdFx0XHRcdCRtdWx0aXBsZS5jbGljaygpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRTYXBwaGlyZVdpZGdldHMuTGF5b3V0RW1lcmdlbmN5ID0ge1xyXG5cdFx0Rm9yd2FyZFBhdGllbnRDb21wb25lbnQsXHJcblx0fTtcclxufSkoalF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpO1xyXG4iLCIvKiBDb21wb25lbnQgTGF5b3V0UG9wdXAgKi9cclxuKGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cykge1xyXG5cdHZhciBwb3B1cFdpZHRoO1xyXG5cdHZhciBwb3B1cE1pbldpZHRoO1xyXG5cdHZhciBwb3B1cEhlaWdodDtcclxuXHR2YXIgcG9wdXBNaW5IZWlnaHQ7XHJcblx0dmFyIHBvcHVwTWF4SGVpZ2h0O1xyXG5cdHZhciBwb3B1cFdpZHRoUGVyY2VudGFnZTtcclxuXHR2YXIgbGF5b3V0UG9wdXBSZXNpemVUaW1lcjtcclxuXHJcblx0dmFyICRwb3B1cCA9ICQoJy5MYXlvdXRQb3B1cCcpO1xyXG5cdHZhciAkb3NQb3B1cCA9IHdpbmRvdy5wYXJlbnQuJCgnLm9zLWludGVybmFsLVBvcHVwLm9zLWludGVybmFsLXVpLWRpYWxvZycpO1xyXG5cdHZhciAkb3NQb3B1cENvbnRlbnQgPSB3aW5kb3cucGFyZW50LiQoJy5vcy1pbnRlcm5hbC11aS1kaWFsb2ctY29udGVudC5vcy1pbnRlcm5hbC11aS13aWRnZXQtY29udGVudCcpO1xyXG5cdHZhciAkb3ZlcmxheSA9IHdpbmRvdy5wYXJlbnQuJCgnLm9zLWludGVybmFsLXVpLXdpZGdldC1vdmVybGF5Jyk7XHJcblx0dmFyIHBvcHVwU2l6ZTtcclxuXHR2YXIgcGFkZGluZ0JvZHk7XHJcblxyXG5cdGNvbnN0IEJPRFlfUEFERElOR19UT1BfQk9UVE9NID0gMzI7XHJcblxyXG5cdGNvbnN0IGNyZWF0ZSA9IGZ1bmN0aW9uKGNvbmZpZykge1xyXG5cdFx0U2FwcGhpcmVXaWRnZXRzLkxheW91dFBvcHVwLmNvbmZpZyA9IGNvbmZpZztcclxuXHRcdHBvcHVwU2l6ZSA9IFNhcHBoaXJlV2lkZ2V0cy5MYXlvdXRQb3B1cC5jb25maWcuUG9wdXBTaXplO1xyXG5cdFx0cGFkZGluZ0JvZHkgPSBjb25maWcubm9Db250ZW50UGFkZGluZyA/IDAgOiBCT0RZX1BBRERJTkdfVE9QX0JPVFRPTTtcclxuXHJcblx0XHQkKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKCdib2R5JykuYWRkQ2xhc3MoJ0xheW91dFBvcHVwJyk7IC8vIGJlY2F1c2UgZGF0ZXRpbWVyYW5nZXBpY2tlciBpcyBhdHRhY2hlZCB0byBib2R5XHJcblxyXG5cdFx0XHRpZiAoU2FwcGhpcmVXaWRnZXRzLkxheW91dFBvcHVwLmNvbmZpZy5pc1RvdWNoKSB7XHJcblx0XHRcdFx0JHBvcHVwLmFkZENsYXNzKCdpc1RvdWNoJyk7XHJcblx0XHRcdFx0JCgnYm9keScpLmFkZENsYXNzKCdpc1RvdWNoJyk7IC8vIGJlY2F1c2Ugc2VsZWN0MiBpcyBhdHRhY2hlZCB0byBib2R5XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHZhciBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uKG11dGF0aW9ucykge1xyXG5cdFx0XHRcdG11dGF0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKG11dGF0aW9uLCBpbmRleCkge1xyXG5cdFx0XHRcdFx0Ly8gQXZvaWQgdG8gcmVkcmF3IHRoZSBkaWFsb2cgaWYgaXQgaXMgb25lIHRoZSBmb2xsb3dpbmcgcG9wdXBzXHJcblx0XHRcdFx0XHRpZiAoXHJcblx0XHRcdFx0XHRcdFNhcHBoaXJlV2lkZ2V0cy5Qb3B1cHNUb0F2b2lkTXV0YXRpb25zICYmXHJcblx0XHRcdFx0XHRcdFNhcHBoaXJlV2lkZ2V0cy5Qb3B1cHNUb0F2b2lkTXV0YXRpb25zLnNvbWUoZSA9PiAkKGAuJHtlfWApLmxlbmd0aClcclxuXHRcdFx0XHRcdCkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0cmVkcmF3RGlhbG9nV2luZG93KCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0b2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5ib2R5LCB7XHJcblx0XHRcdFx0Y2hpbGRMaXN0OiB0cnVlLFxyXG5cdFx0XHRcdHN1YnRyZWU6IHRydWUsXHJcblx0XHRcdFx0YXR0cmlidXRlczogZmFsc2UsXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0JCgnYm9keScpLmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdCQod2luZG93KS5sb2FkKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKHRoaXMuZnJhbWVFbGVtZW50KS5jc3Moe1xyXG5cdFx0XHRcdHdpZHRoOiAnMTAwJScsXHJcblx0XHRcdFx0aGVpZ2h0OiAnMTAwJScsXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXNpemVEaWFsb2coKTtcclxuXHRcdFx0XHRyZXNpemVDb250ZW50KCk7XHJcblx0XHRcdFx0JCgnYm9keScpLmNzcygndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XHJcblx0XHRcdH0sIDE1MCk7XHJcblxyXG5cdFx0XHRvc0FqYXhCYWNrZW5kLkJpbmRBZnRlckFqYXhSZXF1ZXN0KFNhcHBoaXJlV2lkZ2V0cy5MYXlvdXRQb3B1cC5yZWRyYXdEaWFsb2dXaW5kb3cpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0JCh3aW5kb3cucGFyZW50KVxyXG5cdFx0XHQub2ZmKCdyZXNpemUuTGF5b3V0UG9wdXAnKVxyXG5cdFx0XHQub24oJ3Jlc2l6ZS5MYXlvdXRQb3B1cCcsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJlZHJhd0RpYWxvZ1dpbmRvdygpO1xyXG5cdFx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCByZWRyYXdEaWFsb2dXaW5kb3cgPSBmdW5jdGlvbigpIHtcclxuXHRcdGNsZWFyVGltZW91dChsYXlvdXRQb3B1cFJlc2l6ZVRpbWVyKTtcclxuXHRcdGxheW91dFBvcHVwUmVzaXplVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZXNpemVEaWFsb2coKTtcclxuXHRcdFx0cmVzaXplQ29udGVudCgpO1xyXG5cdFx0XHQkKCdib2R5JykuY3NzKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcclxuXHRcdH0sIDMwMCk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgcmVzaXplRGlhbG9nID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAoU2FwcGhpcmVXaWRnZXRzLkxheW91dFBvcHVwLmNvbmZpZy5oYXNDbG9zZSkge1xyXG5cdFx0XHR3aW5kb3cucGFyZW50LiQoJy5vcy1pbnRlcm5hbC11aS1kaWFsb2ctdGl0bGViYXInKS5zaG93KCk7XHJcblxyXG5cdFx0XHRpZiAod2luZG93LnRvcC5faWZyYW1lUG9wdXAgIT0gdW5kZWZpbmVkIHx8IGZhbHNlKSB7XHJcblx0XHRcdFx0Y29uc3QgJGNsb3NlQnV0dG9uID0gd2luZG93LnBhcmVudC4kKCcub3MtaW50ZXJuYWwtdWktZGlhbG9nLXRpdGxlYmFyLWNsb3NlJyk7XHJcblxyXG5cdFx0XHRcdCRjbG9zZUJ1dHRvbi5yZW1vdmVBdHRyKCdocmVmJyk7XHJcblx0XHRcdFx0JGNsb3NlQnV0dG9uLm9mZignY2xpY2snKS5vbignY2xpY2snLCAoKSA9PiB3aW5kb3cudG9wLl9pZnJhbWVQb3B1cC5TYXBwaGlyZVdpZGdldHMuU2FwcGhpcmVQb3B1cC5jbG9zZSgpKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh3aW5kb3cudG9wLiQoJ2JvZHknKS5oYXNDbGFzcygnTGF5b3V0QmFzZScpKSB7XHJcblx0XHRcdHdpbmRvdy50b3AuJCgnYm9keScpLmNzcyh7XHJcblx0XHRcdFx0b3ZlcmZsb3dZOiAnaGlkZGVuJyxcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0JG92ZXJsYXkud2lkdGgoJzEwMCUnKTtcclxuXHJcblx0XHRjYWxjV2lkdGhQZXJjZW50YWdlKHBvcHVwU2l6ZSwgJG9zUG9wdXBDb250ZW50KTtcclxuXHJcblx0XHQkb3NQb3B1cC5jc3Moe1xyXG5cdFx0XHRsZWZ0OiAndW5zZXQnLFxyXG5cdFx0XHR0b3A6ICd1bnNldCcsXHJcblx0XHRcdGhlaWdodDogJ2F1dG8nLFxyXG5cdFx0XHRtaW5XaWR0aDogcG9wdXBNaW5XaWR0aCArICdweCcsXHJcblx0XHRcdHdpZHRoOiBwb3B1cFdpZHRoICsgJ3B4JyxcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHJlc2l6ZUNvbnRlbnQgPSBmdW5jdGlvbigpIHtcclxuXHRcdHZhciAkYm9keSA9ICQoJy5MYXlvdXRQb3B1cF9fYm9keV9fY29udGVudCcpO1xyXG5cdFx0dmFyIGNvbnRlbnRTY3JvbGxUb3AgPSAkYm9keS5zY3JvbGxUb3AoKTtcclxuXHJcblx0XHRpZiAocG9wdXBTaXplID09PSAnU21hbGwnICYmICQoJy5kYXRlcmFuZ2VwaWNrZXI6dmlzaWJsZScpLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0Ly8gc2tpcCB0aGUgcmVzZXQgb2YgLkxheW91dFBvcHVwX19ib2R5X19jb250ZW50XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQkYm9keS5jc3Moe1xyXG5cdFx0XHRcdGhlaWdodDogJ2F1dG8nLFxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHRsZXQgYm9keUNvbnRlbnQgPSBwYWRkaW5nQm9keVxyXG5cdFx0XHQ/ICQoJy5MYXlvdXRQb3B1cF9fYm9keV9fY29udGVudCcpWzBdLnNjcm9sbEhlaWdodFxyXG5cdFx0XHQ6ICQoJy5MYXlvdXRQb3B1cF9fYm9keV9fY29udGVudCcpLmhlaWdodCgpO1xyXG5cclxuXHRcdHZhciBoZWFkZXJIZWlnaHQgPSAkKCcuTGF5b3V0UG9wdXBfX2hlYWRlcicpLmlubmVySGVpZ2h0KCkgfHwgMDtcclxuXHRcdHZhciBpbnRyb0hlaWdodCA9ICQoJy5MYXlvdXRQb3B1cF9faW50cm8nKS5pbm5lckhlaWdodCgpIHx8IDA7XHJcblx0XHR2YXIgYm9keUhlaWdodCA9IGJvZHlDb250ZW50IHx8IDA7XHJcblx0XHR2YXIgZm9vdGVySGVpZ2h0ID0gJCgnLkxheW91dFBvcHVwX19mb290ZXInKS5pbm5lckhlaWdodCgpIHx8IDA7XHJcblx0XHR2YXIgY29udGVudEhlaWdodCA9IGhlYWRlckhlaWdodCArIGludHJvSGVpZ2h0ICsgYm9keUhlaWdodCArIGZvb3RlckhlaWdodCArIHBhZGRpbmdCb2R5O1xyXG5cdFx0dmFyIGRpYWxvZ0hlaWdodCA9IHdpbmRvdy5wYXJlbnQuJCgnLm9zLWludGVybmFsLVBvcHVwLm9zLWludGVybmFsLXVpLWRpYWxvZycpLm91dGVySGVpZ2h0KCk7XHJcblx0XHRjb25zdCB3aW5kb3dIZWlnaHQgPSAkKHdpbmRvdy5wYXJlbnQpLmhlaWdodCgpO1xyXG5cclxuXHRcdGlmIChwb3B1cFNpemUgPT09ICdTbWFsbCcpIHtcclxuXHRcdFx0dmFyIHBhcmVudEhlaWdodCA9ICQod2luZG93LnBhcmVudCkuaGVpZ2h0KCk7XHJcblxyXG5cdFx0XHRpZiAoY29udGVudEhlaWdodCA+IHBhcmVudEhlaWdodCkge1xyXG5cdFx0XHRcdCRvc1BvcHVwQ29udGVudC5oZWlnaHQocGFyZW50SGVpZ2h0IC0gNzApO1xyXG5cdFx0XHRcdCRib2R5LmhlaWdodCgkb3NQb3B1cENvbnRlbnQuaGVpZ2h0KCkgLSBwYWRkaW5nQm9keSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0JG9zUG9wdXBDb250ZW50LmhlaWdodChjb250ZW50SGVpZ2h0KTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKGNvbnRlbnRIZWlnaHQgPCBkaWFsb2dIZWlnaHQgJiYgU2FwcGhpcmVXaWRnZXRzLkxheW91dFBvcHVwLmNvbmZpZy5pc0ZpeGVkSGVpZ2h0KSB7XHJcblx0XHRcdFx0dmFyIGZvcmNlZEJvZHlIZWlnaHQgPSBkaWFsb2dIZWlnaHQgLSBoZWFkZXJIZWlnaHQgLSBpbnRyb0hlaWdodCAtIGZvb3RlckhlaWdodCAtIHBhZGRpbmdCb2R5O1xyXG5cdFx0XHRcdCRib2R5LmhlaWdodChmb3JjZWRCb2R5SGVpZ2h0KTtcclxuXHRcdFx0fSBlbHNlIGlmIChjb250ZW50SGVpZ2h0IDwgZGlhbG9nSGVpZ2h0KSB7XHJcblx0XHRcdFx0JG9zUG9wdXBDb250ZW50LmhlaWdodChjb250ZW50SGVpZ2h0KTtcclxuXHRcdFx0XHRpZiAoY29udGVudEhlaWdodCA8IHBvcHVwTWluSGVpZ2h0KSB7XHJcblx0XHRcdFx0XHR2YXIgZGlmZXJlbmNlID0gcG9wdXBNaW5IZWlnaHQgLSBjb250ZW50SGVpZ2h0O1xyXG5cdFx0XHRcdFx0JGJvZHkuaGVpZ2h0KGJvZHlIZWlnaHQgKyBkaWZlcmVuY2UpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIGlmIChjb250ZW50SGVpZ2h0ID49IGRpYWxvZ0hlaWdodCAmJiBTYXBwaGlyZVdpZGdldHMuTGF5b3V0UG9wdXAuY29uZmlnLmlzRml4ZWRIZWlnaHQpIHtcclxuXHRcdFx0XHR2YXIgZm9yY2VkQm9keUhlaWdodCA9IGRpYWxvZ0hlaWdodCAtIGhlYWRlckhlaWdodCAtIGludHJvSGVpZ2h0IC0gZm9vdGVySGVpZ2h0IC0gcGFkZGluZ0JvZHk7XHJcblx0XHRcdFx0JGJvZHkuaGVpZ2h0KGZvcmNlZEJvZHlIZWlnaHQpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKGNvbnRlbnRIZWlnaHQgPj0gZGlhbG9nSGVpZ2h0KSB7XHJcblx0XHRcdFx0aWYgKGNvbnRlbnRIZWlnaHQgPiBwb3B1cE1heEhlaWdodCkge1xyXG5cdFx0XHRcdFx0JG9zUG9wdXBDb250ZW50LmhlaWdodChwb3B1cE1heEhlaWdodCk7XHJcblx0XHRcdFx0XHR2YXIgZm9yY2VkQm9keUhlaWdodCA9IHBvcHVwTWF4SGVpZ2h0IC0gaGVhZGVySGVpZ2h0IC0gaW50cm9IZWlnaHQgLSBmb290ZXJIZWlnaHQgLSBwYWRkaW5nQm9keTtcclxuXHRcdFx0XHRcdCRib2R5LmhlaWdodChmb3JjZWRCb2R5SGVpZ2h0KTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0JG9zUG9wdXBDb250ZW50LmhlaWdodChjb250ZW50SGVpZ2h0KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Y29uc29sZS53YXJuKCdVbmV4cGVjdGVkIGNvbWJpbmF0aW9uLi4uJyk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBIYW5kbGUgd2hlbiBEYXRlVGltZVJhbmdlUGlja2VyIGlzIG9wZW5lZFxyXG5cdFx0dmFyIGRhdGVSYW5nZVBpY2tlciA9ICQoJy5kYXRlcmFuZ2VwaWNrZXI6dmlzaWJsZScpO1xyXG5cdFx0aWYgKGRhdGVSYW5nZVBpY2tlci5sZW5ndGggPT09IDEpIHtcclxuXHRcdFx0aWYgKGRhdGVSYW5nZVBpY2tlclswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b20gPiBkaWFsb2dIZWlnaHQpIHtcclxuXHRcdFx0XHR2YXIgZGlmZmVyZW5jZSA9IGRhdGVSYW5nZVBpY2tlclswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b20gLSBkaWFsb2dIZWlnaHQ7XHJcblx0XHRcdFx0dmFyIGJvZHlIZWlnaHQgPSAkKCcuTGF5b3V0UG9wdXBfX2JvZHlfX2NvbnRlbnQnKS5vdXRlckhlaWdodCh0cnVlKTtcclxuXHJcblx0XHRcdFx0JCgnLkxheW91dFBvcHVwX19ib2R5X19jb250ZW50JykuaGVpZ2h0KGJvZHlIZWlnaHQgKyBkaWZmZXJlbmNlICsgcGFkZGluZ0JvZHkpO1xyXG5cdFx0XHRcdCRvc1BvcHVwQ29udGVudC5oZWlnaHQoJCgnYm9keScpWzBdLnNjcm9sbEhlaWdodCk7XHJcblxyXG5cdFx0XHRcdGNvbnN0IHBvcHVwVG90YWxIZWlnaHQgPSAkb3NQb3B1cENvbnRlbnQuaGVpZ2h0KCk7XHJcblx0XHRcdFx0Y29uc3QgbmV3Q29udGVudEhlaWdodCA9ICQoJy5MYXlvdXRQb3B1cF9fYm9keScpLm91dGVySGVpZ2h0KHRydWUpICsgaGVhZGVySGVpZ2h0ICsgaW50cm9IZWlnaHQgKyBmb290ZXJIZWlnaHQ7XHJcblxyXG5cdFx0XHRcdGlmICh3aW5kb3dIZWlnaHQgPCA3MjApIHtcclxuXHRcdFx0XHRcdGNvbnN0IGNvb3JkcyA9IGRhdGVSYW5nZVBpY2tlclswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdFx0XHRcdHZhciBwb2ludCA9IHdpbmRvdy5wYXJlbnQuc2Nyb2xsWSArIGNvb3Jkcy50b3AgLSBjb29yZHMuaGVpZ2h0O1xyXG5cdFx0XHRcdFx0ZGF0ZVJhbmdlUGlja2VyLmFkZENsYXNzKCdkcm9wLXVwJykuY3NzKCd0b3AnLCBwb2ludCk7XHJcblx0XHRcdFx0fSBlbHNlIGlmICh3aW5kb3dIZWlnaHQgPCA5ODAgJiYgbmV3Q29udGVudEhlaWdodCA+IHBvcHVwVG90YWxIZWlnaHQpIHtcclxuXHRcdFx0XHRcdCRvc1BvcHVwQ29udGVudC5jc3Moe1xyXG5cdFx0XHRcdFx0XHRtYXhIZWlnaHQ6IG5ld0NvbnRlbnRIZWlnaHQgKyAncHgnLFxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0JGJvZHkuc2Nyb2xsVG9wKGNvbnRlbnRTY3JvbGxUb3ApO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGluY3JlYXNlSGVpZ2h0ID0gZnVuY3Rpb24oZGlmZXJlbmNlKSB7XHJcblx0XHQkb3NQb3B1cENvbnRlbnQuaGVpZ2h0KCRvc1BvcHVwQ29udGVudC5oZWlnaHQoKSArIGRpZmVyZW5jZSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3Qgc2Nyb2xsVG9FbGVtZW50ID0gZnVuY3Rpb24oJGVsZW1lbnQpIHtcclxuXHRcdHZhciAkdGFyZ2V0RWxlbWVudCA9ICRlbGVtZW50O1xyXG5cdFx0aWYgKCEhJHRhcmdldEVsZW1lbnQubGVuZ3RoKSB7XHJcblx0XHRcdHZhciBzY3JvbGxUb09mZnNldEludGVydmFsO1xyXG5cdFx0XHRzY3JvbGxUb09mZnNldEludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbChzY3JvbGxUb09mZnNldEludGVydmFsKTtcclxuXHRcdFx0XHR2YXIgaGVhZGVySGVpZ2h0ID0gJCgnLkxheW91dFBvcHVwX19oZWFkZXInKS5vdXRlckhlaWdodCh0cnVlKSB8fCAwO1xyXG5cdFx0XHRcdHZhciBpbnRyb0hlaWdodCA9ICQoJy5MYXlvdXRQb3B1cF9faW50cm8nKS5vdXRlckhlaWdodCh0cnVlKSB8fCAwO1xyXG5cdFx0XHRcdHZhciBjdXJyZW50Qm9keVNjcm9sbCA9ICQoJy5MYXlvdXRQb3B1cF9fYm9keV9fY29udGVudCcpWzBdLnNjcm9sbFRvcCB8fCAwO1xyXG5cdFx0XHRcdHZhciB0YXJnZXRFbGVtZW50T2Zmc2V0VG9wID0gJHRhcmdldEVsZW1lbnQub2Zmc2V0KCkudG9wIC0gaGVhZGVySGVpZ2h0IC0gaW50cm9IZWlnaHQgKyBjdXJyZW50Qm9keVNjcm9sbCAtIDIwO1xyXG5cdFx0XHRcdCQoJy5MYXlvdXRQb3B1cF9fYm9keV9fY29udGVudCcpLnNjcm9sbFRvcCh0YXJnZXRFbGVtZW50T2Zmc2V0VG9wKTtcclxuXHRcdFx0fSwgMjUwKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRjb25zdCBjYWxjV2lkdGhQZXJjZW50YWdlID0gKCkgPT4ge1xyXG5cdFx0Y29uc3Qgd2luZG93SGVpZ2h0ID0gJCh3aW5kb3cucGFyZW50KS5oZWlnaHQoKTtcclxuXHRcdGNvbnN0IHdpbmRvd1dpZHRoID0gJCh3aW5kb3cucGFyZW50KS53aWR0aCgpO1xyXG5cclxuXHRcdGlmIChwb3B1cFNpemUgPT09ICdTbWFsbCcpIHtcclxuXHRcdFx0bGV0IHBlcmNlbnRhZ2UgPSAwLjMzO1xyXG5cclxuXHRcdFx0aWYgKHdpbmRvd1dpZHRoIDw9IDEwMjQpIHBlcmNlbnRhZ2UgPSAwLjU7XHJcblx0XHRcdGVsc2UgaWYgKHdpbmRvd1dpZHRoID4gMTAyNCAmJiB3aW5kb3dXaWR0aCA8PSAxNDQwKSBwZXJjZW50YWdlID0gMC40O1xyXG5cclxuXHRcdFx0cG9wdXBXaWR0aCA9IHBhcnNlSW50KHdpbmRvd1dpZHRoICogcGVyY2VudGFnZSk7XHJcblx0XHRcdHBvcHVwTWluV2lkdGggPSA0MDA7XHJcblx0XHR9IGVsc2UgaWYgKHBvcHVwU2l6ZSA9PT0gJ01lZGl1bScpIHtcclxuXHRcdFx0aWYgKHdpbmRvd1dpZHRoIDw9IDEwMjQpIHBvcHVwV2lkdGhQZXJjZW50YWdlID0gMC44O1xyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRzd2l0Y2ggKFNhcHBoaXJlV2lkZ2V0cy5MYXlvdXRQb3B1cC5jb25maWcuUG9wdXBXaWR0aCkge1xyXG5cdFx0XHRcdFx0Y2FzZSAnWFNtYWxsJzpcclxuXHRcdFx0XHRcdFx0cG9wdXBNaW5XaWR0aCA9IDIwMDtcclxuXHRcdFx0XHRcdFx0cG9wdXBXaWR0aFBlcmNlbnRhZ2UgPSAwLjI7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnU21hbGwnOlxyXG5cdFx0XHRcdFx0XHRwb3B1cE1pbldpZHRoID0gMzAwO1xyXG5cdFx0XHRcdFx0XHRwb3B1cFdpZHRoUGVyY2VudGFnZSA9IDAuMztcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICdNZWRpdW0nOlxyXG5cdFx0XHRcdFx0XHRwb3B1cE1pbldpZHRoID0gNzAwO1xyXG5cdFx0XHRcdFx0XHRwb3B1cFdpZHRoUGVyY2VudGFnZSA9IDAuNjtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0XHRwb3B1cE1pbldpZHRoID0gNzAwO1xyXG5cdFx0XHRcdFx0XHRwb3B1cFdpZHRoUGVyY2VudGFnZSA9IDAuNztcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHBvcHVwV2lkdGhQZXJjZW50YWdlID0gU2FwcGhpcmVXaWRnZXRzLkxheW91dFBvcHVwLmNvbmZpZy5pc1RvdWNoID8gMC44IDogcG9wdXBXaWR0aFBlcmNlbnRhZ2U7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHBvcHVwV2lkdGggPSBwYXJzZUludCh3aW5kb3dXaWR0aCAqIHBvcHVwV2lkdGhQZXJjZW50YWdlKTtcclxuXHRcdFx0cG9wdXBNaW5IZWlnaHQgPSAxMDA7XHJcblx0XHRcdHBvcHVwTWF4SGVpZ2h0ID0gU2FwcGhpcmVXaWRnZXRzLkxheW91dFBvcHVwLmNvbmZpZy5pc1RvdWNoXHJcblx0XHRcdFx0PyBwYXJzZUludCh3aW5kb3dIZWlnaHQgKiAwLjkpXHJcblx0XHRcdFx0OiBwYXJzZUludCh3aW5kb3dIZWlnaHQgKiAwLjcpO1xyXG5cclxuXHRcdFx0aWYgKFNhcHBoaXJlV2lkZ2V0cy5MYXlvdXRQb3B1cC5jb25maWcuaXNGaXhlZEhlaWdodCkgcG9wdXBIZWlnaHQgPSBwb3B1cE1heEhlaWdodDtcclxuXHRcdFx0ZWxzZSBwb3B1cEhlaWdodCA9IHdpbmRvdy5wYXJlbnQuJCgnLm9zLWludGVybmFsLVBvcHVwLm9zLWludGVybmFsLXVpLWRpYWxvZycpLm91dGVySGVpZ2h0KCk7XHJcblxyXG5cdFx0XHQkb3NQb3B1cENvbnRlbnQuY3NzKHtcclxuXHRcdFx0XHRtYXhIZWlnaHQ6IHBvcHVwTWF4SGVpZ2h0ICsgJ3B4JyxcclxuXHRcdFx0XHRtaW5IZWlnaHQ6IHBvcHVwTWluSGVpZ2h0ICsgJ3B4JyxcclxuXHRcdFx0XHRoZWlnaHQ6IHBvcHVwSGVpZ2h0ICsgJ3B4JyxcclxuXHRcdFx0fSk7XHJcblx0XHR9IGVsc2UgaWYgKHBvcHVwU2l6ZSA9PT0gJ0xhcmdlJykge1xyXG5cdFx0XHRwb3B1cE1pbldpZHRoID0gcGFyc2VJbnQod2luZG93V2lkdGggKiAwLjgpO1xyXG5cdFx0XHRwb3B1cE1heEhlaWdodCA9IHBhcnNlSW50KHdpbmRvd0hlaWdodCAqIDAuOSk7XHJcblx0XHR9IGVsc2UgaWYgKHBvcHVwU2l6ZSA9PT0gJ0ZpeGVkJykge1xyXG5cdFx0XHRwb3B1cFdpZHRoID0gU2FwcGhpcmVXaWRnZXRzLlNhcHBoaXJlUG9wdXAucG9wdXBXaWR0aDtcclxuXHRcdFx0cG9wdXBNaW5XaWR0aCA9IFNhcHBoaXJlV2lkZ2V0cy5TYXBwaGlyZVBvcHVwLnBvcHVwV2lkdGg7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0U2FwcGhpcmVXaWRnZXRzLkxheW91dFBvcHVwID0ge1xyXG5cdFx0Y3JlYXRlLFxyXG5cdFx0cmVzaXplRGlhbG9nLFxyXG5cdFx0cmVzaXplQ29udGVudCxcclxuXHRcdGluY3JlYXNlSGVpZ2h0LFxyXG5cdFx0cmVkcmF3RGlhbG9nV2luZG93LFxyXG5cdFx0c2Nyb2xsVG9FbGVtZW50LFxyXG5cdH07XHJcbn0pKGpRdWVyeSwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKTtcclxuXHJcbiQod2luZG93KS51bmxvYWQoZnVuY3Rpb24oKSB7XHJcblx0aWYgKCEhJCgnLkxheW91dFBvcHVwJykubGVuZ3RoKSB7XHJcblx0XHR3aW5kb3cudG9wLiQoJ2JvZHknKS5jc3Moe1xyXG5cdFx0XHRvdmVyZmxvd1k6ICdzY3JvbGwnLFxyXG5cdFx0fSk7XHJcblx0fVxyXG59KTtcclxuIiwiLyogQ29tcG9uZW50IFN1YkxheW91dExlZnQgKi9cclxuKGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cykge1xyXG5cdGNvbnN0IGNyZWF0ZSA9IGZ1bmN0aW9uKCkge307XHJcblxyXG5cdFNhcHBoaXJlV2lkZ2V0cy5TdWJMYXlvdXRMZWZ0ID0ge1xyXG5cdFx0Y3JlYXRlLFxyXG5cdH07XHJcbn0pKGpRdWVyeSwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKTtcclxuIiwiLyogQ29tcG9uZW50IEFjdGlvbnNNZW51ICovXHJcbihmdW5jdGlvbigkLCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cykge1xyXG5cdHZhciBjcmVhdGUgPSBmdW5jdGlvbihjb25maWcpIHtcclxuXHRcdHZhciAkdHJpZ2dlckVsZW1lbnQgPSAkKCcjJyArIGNvbmZpZy50cmlnZ2VyRWxlbWVudCk7XHJcblx0XHR2YXIgJGNvbnRlbnRFbGVtZW50ID0gJCgnIycgKyBjb25maWcuY29udGVudEVsZW1lbnQpO1xyXG5cclxuXHRcdGlmICgkY29udGVudEVsZW1lbnQudGV4dCgpLmxlbmd0aCA8IDEpIHtcclxuXHRcdFx0JHRyaWdnZXJFbGVtZW50LmhpZGUoKTtcclxuXHRcdH1cclxuXHJcblx0XHQkKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQvLyBpbnNpZGUgYSBkb2N1bWVudCByZWFkeSBkdWUgdG8gc2FwcGhpcmUgcG9wdXAgYmluZGVkIGV2ZW50c1xyXG5cdFx0XHR3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR2YXIgcG9zaXRpb24gPSBjb25maWcucG9zaXRpb247XHJcblx0XHRcdFx0aWYgKGNvbmZpZy5sb2NhbGUgPT09ICdBUicpIHtcclxuXHRcdFx0XHRcdHN3aXRjaCAoY29uZmlnLnBvc2l0aW9uKSB7XHJcblx0XHRcdFx0XHRcdGNhc2UgJ3JpZ2h0JzpcclxuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbiA9ICdsZWZ0JztcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0Y2FzZSAnbGVmdCc6XHJcblx0XHRcdFx0XHRcdFx0cG9zaXRpb24gPSAncmlnaHQnO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRjYXNlICdib3R0b20tbGVmdCc6XHJcblx0XHRcdFx0XHRcdFx0cG9zaXRpb24gPSAnYm90dG9tLXJpZ2h0JztcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0Y2FzZSAnYm90dG9tLXJpZ2h0JzpcclxuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbiA9ICdib3R0b20tbGVmdCc7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdGNhc2UgJ3RvcC1sZWZ0JzpcclxuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbiA9ICd0b3AtcmlnaHQnO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRjYXNlICd0b3AtcmlnaHQnOlxyXG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uID0gJ3RvcC1sZWZ0JztcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0JHRyaWdnZXJFbGVtZW50LnRvb2x0aXBzdGVyKHtcclxuXHRcdFx0XHRcdGNvbnRlbnQ6ICQoJzxzZWN0aW9uLz4nKS5hcHBlbmQoJGNvbnRlbnRFbGVtZW50LmNsb25lKHRydWUsIHRydWUpKSxcclxuXHRcdFx0XHRcdHRyaWdnZXI6IGNvbmZpZy50cmlnZ2VyRXZlbnQsXHJcblx0XHRcdFx0XHRwb3NpdGlvbjogcG9zaXRpb24sXHJcblx0XHRcdFx0XHRtYXhXaWR0aDogY29uZmlnLm1heFdpZHRoLFxyXG5cdFx0XHRcdFx0dGhlbWU6XHJcblx0XHRcdFx0XHRcdCd0b29sdGlwc3Rlci1sb2NhdGlvbi0tJyArXHJcblx0XHRcdFx0XHRcdGNvbmZpZy5sb2NhdGlvbiArXHJcblx0XHRcdFx0XHRcdCcgQWN0aW9uc01lbnUtdG9vbHRpcCBQYWRkaW5nLS0nICtcclxuXHRcdFx0XHRcdFx0Y29uZmlnLnBhZGRpbmcgK1xyXG5cdFx0XHRcdFx0XHQnIEJvcmRlci0tJyArXHJcblx0XHRcdFx0XHRcdGNvbmZpZy5ib3JkZXIsXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0JGNvbnRlbnRFbGVtZW50LnJlbW92ZSgpO1xyXG5cdFx0XHR9LCA1MDApO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0U2FwcGhpcmVXaWRnZXRzLkFjdGlvbnNNZW51ID0ge1xyXG5cdFx0Y3JlYXRlLFxyXG5cdH07XHJcbn0pKGpRdWVyeSwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpO1xyXG4iLCIvKiBDb21wb25lbnQgQnV0dG9uTGluayAqL1xyXG4oZnVuY3Rpb24oJCwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpIHtcclxuXHRjb25zdCBjcmVhdGUgPSBjb25maWcgPT4ge1xyXG5cdFx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblx0XHRcdGNvbnN0ICR3aWRnZXQgPSAkKGAjJHtjb25maWcud2lkZ2V0SWR9IC5CdXR0b25DbGlja2ApO1xyXG5cclxuXHRcdFx0JHdpZGdldC5vZmYoJ2NsaWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdGNvbnN0IF90YXJnZXQgPSAkKGUudGFyZ2V0KTtcclxuXHJcblx0XHRcdFx0aWYgKF90YXJnZXQuY2xvc2VzdCgnLkJ1dHRvbkNsaWNrLmNsaWNrJykubGVuZ3RoID09IDApIHtcclxuXHRcdFx0XHRcdCQoJy5CdXR0b25DbGljay5jbGljaycpLnJlbW92ZUNsYXNzKCdjbGljaycpO1xyXG5cdFx0XHRcdFx0JCh0aGlzKS5hZGRDbGFzcygnY2xpY2snKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0U2FwcGhpcmVXaWRnZXRzLkJ1dHRvbkxpbmsgPSB7IGNyZWF0ZSB9O1xyXG59KShqUXVlcnksIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKTtcclxuIiwiLyogQ29tcG9uZW50IENhcmRDaGFydHMgKi9cclxuU2FwcGhpcmVXaWRnZXRzLkNhcmRDaGFydHNQb3B1cCA9ICgpID0+IHtcclxuXHQkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHRcdHdpbmRvd1snQ2FyZENoYXJ0c1Njcm9sbCddID0ge307XHJcblx0XHRjb25zdCBpc0luc2lkZUlmcmFtZSA9IHdpbmRvdy5mcmFtZUVsZW1lbnQgIT0gdW5kZWZpbmVkIHx8IGZhbHNlO1xyXG5cclxuXHRcdGxldCAkY29tcG9uZW50ID0gJCgnLkNhcmRDaGFydHMnKTtcclxuXHRcdGxldCAkaGVhZGVyID0gJGNvbXBvbmVudC5maW5kKCcuQ2FyZENoYXJ0c19fSGVhZGVyJyk7XHJcblx0XHRsZXQgJGNvbnRlbnQgPSAkY29tcG9uZW50LmZpbmQoJy5DYXJkQ2hhcnRzX19Db250ZW50Jyk7XHJcblx0XHRsZXQgJHByb3BlcnRpZXMgPSAkY29tcG9uZW50LmZpbmQoJy5DYXJkQ2hhcnRzX19Qcm9wZXJ0aWVzJyk7XHJcblx0XHRsZXQgJGhlYWRlckRpdiA9ICRjb21wb25lbnQuZmluZCgnLkNhcmRDaGFydHNfX0hlYWRlckNoYXJ0ID4gZGl2Jyk7XHJcblx0XHRsZXQgJGZha2VDb2x1bW5zID0gJCgnLkZha2VDb2x1bW5zJyk7XHJcblx0XHRsZXQgJGJvZHlDb250ZW50ID0gJCgnLkxheW91dFBvcHVwX19ib2R5Jyk7XHJcblxyXG5cdFx0aWYgKGlzSW5zaWRlSWZyYW1lICYmICEkZmFrZUNvbHVtbnMubGVuZ3RoKSB7XHJcblx0XHRcdCRoZWFkZXJEaXYuYXBwZW5kKGA8ZGl2IGNsYXNzPSdGYWtlQ29sdW1ucyc+PC9kaXY+YCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGlzSW5zaWRlSWZyYW1lKSB7XHJcblx0XHRcdCRmYWtlQ29sdW1ucyA9ICQoJy5GYWtlQ29sdW1ucycpO1xyXG5cclxuXHRcdFx0JGNvbnRlbnQub24oJ3Njcm9sbCcsICgpID0+IHtcclxuXHRcdFx0XHRjbGVhclRpbWVvdXQod2luZG93WydDYXJkQ2hhcnRzU2Nyb2xsJ10uc2Nyb2xsRmluaXNoZWQpO1xyXG5cdFx0XHRcdHdpbmRvd1snQ2FyZENoYXJ0c1Njcm9sbCddLnNjcm9sbEZpbmlzaGVkID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGlmICgkY29udGVudC5zY3JvbGxUb3AoKSA+IDApICRoZWFkZXIuYWRkQ2xhc3MoJ1NoYWRvd01lZGl1bScpO1xyXG5cdFx0XHRcdFx0ZWxzZSAkaGVhZGVyLnJlbW92ZUNsYXNzKCdTaGFkb3dNZWRpdW0nKTtcclxuXHRcdFx0XHR9LCA1MCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdCQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XHJcblx0XHRcdCRjb21wb25lbnQgPSAkKCcuQ2FyZENoYXJ0cycpO1xyXG5cdFx0XHQkaGVhZGVyID0gJGNvbXBvbmVudC5maW5kKCcuQ2FyZENoYXJ0c19fSGVhZGVyJyk7XHJcblx0XHRcdCRjb250ZW50ID0gJGNvbXBvbmVudC5maW5kKCcuQ2FyZENoYXJ0c19fQ29udGVudCcpO1xyXG5cdFx0XHQkcHJvcGVydGllcyA9ICRjb21wb25lbnQuZmluZCgnLkNhcmRDaGFydHNfX1Byb3BlcnRpZXMnKTtcclxuXHRcdFx0JGZha2VDb2x1bW5zID0gJCgnLkZha2VDb2x1bW5zJyk7XHJcblx0XHRcdCRib2R5Q29udGVudCA9ICQoJy5MYXlvdXRQb3B1cF9fYm9keScpO1xyXG5cclxuXHRcdFx0bGV0IGhlYWRlclRpdGxlSGVpZ2h0ID0gNjM7XHJcblx0XHRcdGNvbnN0IGhlYWRlclByb3BlcnRpZXNIZWlnaHQgPSA1NjtcclxuXHJcblx0XHRcdGNvbnN0ICRjaGFydHMgPSAkY29udGVudC5maW5kKCcuQ2FyZENoYXJ0c19fQ2hhcnRzIC5PU0NoYXJ0Jyk7XHJcblxyXG5cdFx0XHQkY2hhcnRzLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0Y29uc3QgJGNoYXJ0ID0gJCh0aGlzKTtcclxuXHJcblx0XHRcdFx0Y29uc3QgbmV3V2lkdGggPSAkY29udGVudC53aWR0aCgpIC0gJHByb3BlcnRpZXMud2lkdGgoKSArIDQwO1xyXG5cdFx0XHRcdCRjaGFydC5oaWdoY2hhcnRzKCkuc2V0U2l6ZShuZXdXaWR0aCwgJGNoYXJ0LmhlaWdodCgpKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRpZiAoaXNJbnNpZGVJZnJhbWUpIHtcclxuXHRcdFx0XHRjb25zdCB0aW1lb3V0SGVpZ2h0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRjb25zdCAkaGVhZGVyVGl0bGUgPSAkY29tcG9uZW50LmZpbmQoJy5DYXJkQ2hhcnRzX19IZWFkZXJUaXRsZScpO1xyXG5cclxuXHRcdFx0XHRcdGhlYWRlclRpdGxlSGVpZ2h0ID0gJGhlYWRlclRpdGxlLmxlbmd0aCA/ICRoZWFkZXJUaXRsZS5vdXRlckhlaWdodCgpIDogaGVhZGVyVGl0bGVIZWlnaHQgLSA2O1xyXG5cclxuXHRcdFx0XHRcdGNvbnN0IG5ld0hlaWdodCA9ICQod2luZG93LmZyYW1lRWxlbWVudCkuaGVpZ2h0KCkgLSBoZWFkZXJUaXRsZUhlaWdodDtcclxuXHJcblx0XHRcdFx0XHQkZmFrZUNvbHVtbnMuY3NzKCdoZWlnaHQnLCBgJHtuZXdIZWlnaHQgKyBoZWFkZXJQcm9wZXJ0aWVzSGVpZ2h0fXB4YCk7XHJcblx0XHRcdFx0XHQkY29udGVudC5jc3MoJ2hlaWdodCcsIGAke25ld0hlaWdodCAtIGhlYWRlclByb3BlcnRpZXNIZWlnaHR9cHhgKTtcclxuXHJcblx0XHRcdFx0XHRjbGVhclRpbWVvdXQodGltZW91dEhlaWdodCk7XHJcblx0XHRcdFx0fSwgNTAwKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8gU2VlIE11dGF0aW9uT2JzZXJ2ZXIgKExheW91dFBvcHVwKVxyXG5cdFx0U2FwcGhpcmVXaWRnZXRzLlBvcHVwc1RvQXZvaWRNdXRhdGlvbnMgPSBbJ0NoYXJ0c1BvcHVwJ107XHJcblx0fSk7XHJcbn07XHJcbiIsIi8qIENvbXBvbmVudCBDb2xsYXBzaWJsZVNpZGVQYW5lbCAqL1xyXG4oZnVuY3Rpb24oJCwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpIHtcclxuXHRjbGFzcyBDb2xsYXBzaWJsZVNpZGVQYW5lbCB7XHJcblx0XHRjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuXHRcdFx0dGhpcy5vcHRpb25zID0ge1xyXG5cdFx0XHRcdC4uLmNvbmZpZyxcclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHRoaXMub25Db21wb25lbnRJbml0KCk7XHJcblx0XHR9XHJcblxyXG5cdFx0b3BlbkNsb3NlU2lkZVBhbmVsKHRvT3Blbikge1xyXG5cdFx0XHRpZiAodG9PcGVuKSB7XHJcblx0XHRcdFx0dGhpcy4kY29udGVudC5jc3MoJ2Rpc3BsYXknLCAnZ3JpZCcpO1xyXG5cclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuJGNvbXBvbmVudC5hZGRDbGFzcygnQ29sbGFwc2libGVTaWRlUGFuZWwtLW9wZW4nKTtcclxuXHRcdFx0XHR9LCA1MCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy4kY29tcG9uZW50LnJlbW92ZUNsYXNzKCdDb2xsYXBzaWJsZVNpZGVQYW5lbC0tb3BlbicpO1xyXG5cclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdCQoJy5Db2xsYXBzaWJsZVNpZGVQYW5lbF9fQ29udGVudCcpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcblx0XHRcdFx0fSwgMzUwKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdG9uQ29tcG9uZW50SW5pdCgpIHtcclxuXHRcdFx0dGhpcy4kY29tcG9uZW50ID0gJChgIyR7dGhpcy5vcHRpb25zLndpZGdldElkfWApO1xyXG5cdFx0XHR0aGlzLiRoZWFkZXIgPSB0aGlzLiRjb21wb25lbnQuZmluZCgnLkNvbGxhcHNpYmxlU2lkZVBhbmVsX19IZWFkZXInKTtcclxuXHRcdFx0dGhpcy4kY29udGVudCA9IHRoaXMuJGNvbXBvbmVudC5maW5kKCcuQ29sbGFwc2libGVTaWRlUGFuZWxfX0NvbnRlbnQnKTtcclxuXHRcdFx0dGhpcy4kY291bnRlcjEgPSB0aGlzLiRjb21wb25lbnQuZmluZCgnLkNvbGxhcHNpYmxlU2lkZVBhbmVsX19UaXRsZSBzcGFuLkNvdW50ZXInKTtcclxuXHRcdFx0dGhpcy4kY291bnRlcjIgPSB0aGlzLiRjb21wb25lbnQuZmluZCgnLkNvbGxhcHNpYmxlU2lkZVBhbmVsX19QYW5lbFRpdGxlIHNwYW4uQ291bnRlcicpO1xyXG5cdFx0XHR0aGlzLiRwYW5lbENvbnRlbnQgPSB0aGlzLiRjb21wb25lbnQuZmluZCgnLkNvbGxhcHNpYmxlU2lkZVBhbmVsX19QYW5lbENvbnRlbnQnKTtcclxuXHRcdFx0dGhpcy4kY2xvc2UgPSB0aGlzLiRjb21wb25lbnQuZmluZCgnLkNvbGxhcHNpYmxlU2lkZVBhbmVsX19QYW5lbEhlYWRlciAuaWNvbicpO1xyXG5cdFx0XHR0aGlzLiRjbG9zZUV2ZW50TGluayA9IHRoaXMuJGNvbXBvbmVudC5maW5kKCcuQ29sbGFwc2libGVTaWRlUGFuZWxfX1BhbmVsSGVhZGVyIC5QYW5lbENsb3NlQnV0dG9uJyk7XHJcblxyXG5cdFx0XHR0aGlzLiRoZWFkZXIub24oJ2NsaWNrJywgKCkgPT4gdGhpcy5vcGVuQ2xvc2VTaWRlUGFuZWwodHJ1ZSkpO1xyXG5cdFx0XHR0aGlzLiRjbG9zZS5vbignY2xpY2snLCAoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5vcGVuQ2xvc2VTaWRlUGFuZWwoZmFsc2UpO1xyXG5cclxuXHRcdFx0XHR0aGlzLiRjbG9zZUV2ZW50TGluay5jbGljaygpO1xyXG5cclxuXHRcdFx0XHRpZiAoJCgnLlBhbmVsQ29udGVudEVtcHR5JykubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRTYXBwaGlyZVdpZGdldHMuQ29sbGFwc2libGVTaWRlUGFuZWwuY2xvc2UodGhpcy5vcHRpb25zLndpZGdldElkLCB0cnVlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0aWYgKHRoaXMub3B0aW9ucy5pc0F1dG9Db3VudGVyKSB7XHJcblx0XHRcdFx0Y2FsY3VsYXRlQ291bnRlcih0aGlzLiRwYW5lbENvbnRlbnQsIHRoaXMuJGNvdW50ZXIxLCB0aGlzLiRjb3VudGVyMik7XHJcblxyXG5cdFx0XHRcdHRoaXMuJGNvdW50ZXIxLnJlbW92ZUNsYXNzKCdIaWRkZW4nKTtcclxuXHRcdFx0XHR0aGlzLiRjb3VudGVyMi5yZW1vdmVDbGFzcygnSGlkZGVuJyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGNvbnN0IGhhc0VtcHR5TWVzc2FnZSA9IHRoaXMuJHBhbmVsQ29udGVudC5maW5kKCcuQ29sbGFwc2libGVFbXB0eU1lc3NhZ2UnKTtcclxuXHRcdFx0Y29uc3QgY29udGVudFRvVmVyaWZ5ID0gaGFzRW1wdHlNZXNzYWdlLmxlbmd0aCA/IHRoaXMuJHBhbmVsQ29udGVudC5maW5kKCc+OmZpcnN0LWNoaWxkJykgOiB0aGlzLiRwYW5lbENvbnRlbnQ7XHJcblxyXG5cdFx0XHRpZiAodGhpcy5vcHRpb25zLmhpZGVXaGVuRW1wdHkgJiYgIWNvbnRlbnRUb1ZlcmlmeS50ZXh0KCkpIHtcclxuXHRcdFx0XHR0aGlzLiRjb21wb25lbnQuaGlkZSgpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvL0Rpb2dvIFJpYmVpcm8gLSBpdCBzZWVtcyB3ZSBvbmx5IG5lZWQgbWFyZ2lucyB3aGVuIHdlIHNob3cgdGhlIGhlYWRlclxyXG5cdFx0XHRpZighdGhpcy5vcHRpb25zLmhpZGVIZWFkZXIpIHtcclxuXHRcdFx0XHQkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdCQoJy5Db2xsYXBzaWJsZVNpZGVQYW5lbDp2aXNpYmxlJykuYWRkQ2xhc3MoJ011bHRpTWFyZ2luVG9wU21hbGwnKTtcclxuXHRcdFx0XHRcdCQoJy5Db2xsYXBzaWJsZVNpZGVQYW5lbDp2aXNpYmxlOmZpcnN0JykuYWRkQ2xhc3MoJ011bHRpTWFyZ2luVG9wTGFyZ2UnKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNvbnN0IGNhbGN1bGF0ZUNvdW50ZXIgPSAocGFuZWxDb250ZW50LCBjb3VudGVyMSwgY291bnRlcjIpID0+IHtcclxuXHRcdGxldCB0b3RhbCA9IDA7XHJcblx0XHRjb25zdCBjb3VudGVycyA9IHBhbmVsQ29udGVudC5maW5kKCcuRXhhcGFuZGFibGVQbGFjZWhvbGRlci5Db3VudGVyJyk7XHJcblxyXG5cdFx0Y291bnRlcnMuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0dG90YWwgKz0gKyQodGhpcykudGV4dCgpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Y291bnRlcjEudGV4dCh0b3RhbCk7XHJcblx0XHRjb3VudGVyMi50ZXh0KHRvdGFsKTtcclxuXHJcblx0XHRpZiAodG90YWwgPT09IDApIGNvdW50ZXIyLmFkZENsYXNzKCdDb2xvckxpZ2h0R3JleUJHJyk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgdXBkYXRlQ291bnRlciA9ICh3aWRnZXRJZCwgY291bnRlcikgPT4ge1xyXG5cdFx0dGhpcy4kY29tcG9uZW50ID0gJChgIyR7d2lkZ2V0SWR9YCk7XHJcblx0XHR0aGlzLmNvdW50ZXIxID0gdGhpcy4kY29tcG9uZW50LmZpbmQoJy5Db2xsYXBzaWJsZVNpZGVQYW5lbF9fVGl0bGUgc3Bhbi5Db3VudGVyJyk7XHJcblx0XHR0aGlzLmNvdW50ZXIyID0gdGhpcy4kY29tcG9uZW50LmZpbmQoJy5Db2xsYXBzaWJsZVNpZGVQYW5lbF9fUGFuZWxUaXRsZSBzcGFuLkNvdW50ZXInKTtcclxuXHJcblx0XHR0aGlzLmNvdW50ZXIxLnRleHQoY291bnRlcik7XHJcblx0XHR0aGlzLmNvdW50ZXIyLnRleHQoY291bnRlcik7XHJcblxyXG5cdFx0aWYgKCtjb3VudGVyID09PSAwKSB0aGlzLmNvdW50ZXIyLmFkZENsYXNzKCdDb2xvckxpZ2h0R3JleUJHJyk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgY2xvc2UgPSAod2lkZ2V0SWQsIGhpZGVIZWFkZXIsIHVwZGF0ZUNvdW50ZXIpID0+IHtcclxuXHRcdHRoaXMuJGNvbXBvbmVudCA9ICQoYCMke3dpZGdldElkfWApO1xyXG5cclxuXHRcdGlmICghdGhpcy4kY29tcG9uZW50Lmhhc0NsYXNzKCdDb2xsYXBzaWJsZVNpZGVQYW5lbCcpKSB7XHJcblx0XHRcdHRoaXMuJGNvbXBvbmVudCA9ICQoYCMke3dpZGdldElkfWApLmZpbmQoJy5Db2xsYXBzaWJsZVNpZGVQYW5lbCcpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChoaWRlSGVhZGVyKSB7XHJcblx0XHRcdHRoaXMuJGNvbXBvbmVudC5hZGRDbGFzcygnQ29sbGFwc2libGVTaWRlUGFuZWwtLWhlYWRlckhpZGRlbicpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuJGNvbXBvbmVudC5yZW1vdmVDbGFzcygnQ29sbGFwc2libGVTaWRlUGFuZWwtLW9wZW4nKTtcclxuXHJcblx0XHQkKCcuQ29sbGFwc2libGVTaWRlUGFuZWw6dmlzaWJsZScpLnJlbW92ZUNsYXNzKCdNdWx0aU1hcmdpblRvcFNtYWxsJyk7XHJcblx0XHQkKCcuQ29sbGFwc2libGVTaWRlUGFuZWw6dmlzaWJsZTpmaXJzdCcpLnJlbW92ZUNsYXNzKCdNdWx0aU1hcmdpblRvcExhcmdlJyk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgY2hlY2tFbXB0eSA9IHdpZGdldElkID0+IHtcclxuXHRcdHRoaXMuJGNvbXBvbmVudCA9ICQoYCMke3dpZGdldElkfWApLmZpbmQoJy5Db2xsYXBzaWJsZVNpZGVQYW5lbCcpO1xyXG5cdFx0dGhpcy4kcGFuZWxDb250ZW50ID0gdGhpcy4kY29tcG9uZW50LmZpbmQoJy5Db2xsYXBzaWJsZVNpZGVQYW5lbF9fUGFuZWxDb250ZW50Jyk7XHJcblx0XHR0aGlzLiRjb3VudGVyMSA9IHRoaXMuJGNvbXBvbmVudC5maW5kKCcuQ29sbGFwc2libGVTaWRlUGFuZWxfX1RpdGxlIHNwYW4uQ291bnRlcicpO1xyXG5cdFx0dGhpcy4kY291bnRlcjIgPSB0aGlzLiRjb21wb25lbnQuZmluZCgnLkNvbGxhcHNpYmxlU2lkZVBhbmVsX19QYW5lbFRpdGxlIHNwYW4uQ291bnRlcicpO1xyXG5cdFx0dGhpcy4kZW1wdHlNZXNzYWdlID0gdGhpcy4kY29tcG9uZW50LmZpbmQoJy5Db2xsYXBzaWJsZUVtcHR5TWVzc2FnZScpO1xyXG5cclxuXHRcdHRoaXMuJGVtcHR5TWVzc2FnZS5zaG93KCk7XHJcblxyXG5cdFx0Y2FsY3VsYXRlQ291bnRlcih0aGlzLiRwYW5lbENvbnRlbnQsIHRoaXMuJGNvdW50ZXIxLCB0aGlzLiRjb3VudGVyMik7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgY3JlYXRlID0gY29uZmlnID0+ICh3aW5kb3dbY29uZmlnLndpZGdldElkXSA9IG5ldyBDb2xsYXBzaWJsZVNpZGVQYW5lbChjb25maWcpKTtcclxuXHJcblx0U2FwcGhpcmVXaWRnZXRzLkNvbGxhcHNpYmxlU2lkZVBhbmVsID0geyBjcmVhdGUsIGNsb3NlLCB1cGRhdGVDb3VudGVyLCBjaGVja0VtcHR5IH07XHJcbn0pKGpRdWVyeSwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpO1xyXG4iLCIvKiBDb21wb25lbnQgQ29tcExpbmUgKi9cclxuKGZ1bmN0aW9uKCQsIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKSB7XHJcblx0ZnVuY3Rpb24gU2VjdGlvbkNvbXBsaW5lKCkge1xyXG5cdFx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cclxuXHRcdC8vIE9iamVjdCB0byBzYXZlIHN0YXRzXHJcblx0XHR2YXIgcHJldmlld3N0YXQgPSBbXTtcclxuXHJcblx0XHQvLyBzZXQgY2xpY2sgZXZlbnRzXHJcblx0XHRmdW5jdGlvbiBjbGlja0V2ZW50cyhvYikge1xyXG5cdFx0XHQvLyBzdG9yZSBxdWVyeXMgaW4gYSBzaW5nbGUgdmFyXHJcblx0XHRcdHZhciBob2xkZXIgPSAkKG9iKS5jbG9zZXN0KCcuQ29tcExpbmUnKTtcclxuXHRcdFx0dmFyIFNlY3Rpb24gPSAkKG9iKS5jbG9zZXN0KCcuQ29tcExpbmVFeHBhbmRhYmxlJyk7XHJcblx0XHRcdHZhciBTZWN0aW9uQ29udGVudCA9IFNlY3Rpb24uY2hpbGRyZW4oJy5Db21wTGluZV9FeHBhbmQnKTtcclxuXHJcblx0XHRcdC8vIGdldCBpZFxyXG5cdFx0XHR2YXIgaWQgPSBob2xkZXIuYXR0cignaWQnKTtcclxuXHJcblx0XHRcdHZhciB0ZW1wSGVpZ2h0ID0gMDtcclxuXHJcblx0XHRcdC8vIGhhcyBjbGFzcyBleHBhbmRlZFxyXG5cdFx0XHRpZiAoU2VjdGlvbi5oYXNDbGFzcygnZXhwYW5kZWQnKSkge1xyXG5cdFx0XHRcdC8vIENhbGMgYW5kIHNldCBhIGZpeGVkIGhlaWdodCwgZHVyaW5nIHRoaXMgcHJvY2VzcywgdHJhbnNpdGlvbnMgYXJlIGRpc2FibGVkXHJcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnQuYWRkQ2xhc3MoJ25vVHJhbnNpdGlvbicpO1xyXG5cdFx0XHRcdFNlY3Rpb25Db250ZW50LmhlaWdodChTZWN0aW9uQ29udGVudC5oZWlnaHQoKSk7XHJcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnRbMF0ub2Zmc2V0SGVpZ2h0OyAvLyBoYWNrIHRvIGZvcmNlIGEgcmVwYWludFxyXG5cdFx0XHRcdFNlY3Rpb25Db250ZW50LnJlbW92ZUNsYXNzKCdub1RyYW5zaXRpb24nKTtcclxuXHJcblx0XHRcdFx0Ly8gQ29sbGFwc2UgY29udGVudFxyXG5cdFx0XHRcdFNlY3Rpb25Db250ZW50LmhlaWdodCgwKTtcclxuXHRcdFx0XHRTZWN0aW9uLnJlbW92ZUNsYXNzKCdleHBhbmRlZCcpO1xyXG5cdFx0XHRcdFNlY3Rpb25Db250ZW50LmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XHJcblxyXG5cdFx0XHRcdC8vIFJlbW92ZSBjbGFzcywgc2V0IGhlaWdodCBhbmQgc2F2ZSBzdGF0ZVxyXG5cdFx0XHRcdHByZXZpZXdzdGF0W2lkXVsnY2xpZW50J10gPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0aWYgKGhvbGRlci5oYXNDbGFzcygnbm90UmVuZGVySW50ZXJhY3Rpb25zJykpIHtcclxuXHRcdFx0XHRcdGhvbGRlci5maW5kKCcuQ29tcExpbmUtdG9nZ2xlLWludGVyYWN0aW9ucycpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdC8vIENhbGMgYW5kIHNldCBhIGZpeGVkIGhlaWdodFxyXG5cdFx0XHRcdFNlY3Rpb25Db250ZW50LmhlaWdodCgnYXV0bycpO1xyXG5cdFx0XHRcdHRlbXBIZWlnaHQgPSBTZWN0aW9uQ29udGVudC5oZWlnaHQoKTtcclxuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5oZWlnaHQoMCk7XHJcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnQuaGVpZ2h0KHRlbXBIZWlnaHQpO1xyXG5cdFx0XHRcdFNlY3Rpb25Db250ZW50LmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XHJcblxyXG5cdFx0XHRcdC8vIHJlbW92ZSBjbGFzcywgc2V0IGhlaWdodCBhbmQgc2F2ZSBzdGF0ZVxyXG5cdFx0XHRcdFNlY3Rpb24uYWRkQ2xhc3MoJ2V4cGFuZGVkJyk7XHJcblx0XHRcdFx0cHJldmlld3N0YXRbaWRdWydjbGllbnQnXSA9IHRydWU7XHJcblxyXG5cdFx0XHRcdGlmICgkKCcuUGFnZScpLmhhc0NsYXNzKCdpZTgnKSB8fCAkKCcuUGFnZScpLmhhc0NsYXNzKCdpZTknKSkge1xyXG5cdFx0XHRcdFx0U2VjdGlvbkNvbnRlbnQuaGVpZ2h0KCdhdXRvJyk7XHJcblx0XHRcdFx0XHRTZWN0aW9uQ29udGVudC5jc3MoJ292ZXJmbG93JywgJ3Zpc2libGUnKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmIChob2xkZXIuaGFzQ2xhc3MoJ25vdFJlbmRlckludGVyYWN0aW9ucycpKSB7XHJcblx0XHRcdFx0XHRob2xkZXIuZmluZCgnLkNvbXBMaW5lLXRvZ2dsZS1pbnRlcmFjdGlvbnMnKS50cmlnZ2VyKCdjbGljaycpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGFqYXggcmVmcmVzIGZ1bmN0aW9uXHJcblx0XHR0aGF0LmFqYXhSZWZyZXNoID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdC8vIHJlbW92ZSBjbGljayBldmVudHNcclxuXHRcdFx0JCgnLkNvbXBMaW5lX2hlYWRMaW5lJykub2ZmKCk7XHJcblxyXG5cdFx0XHQvLyBhZGQgc3RvcCBwcmVwYWdhdGlvblxyXG5cdFx0XHQkKCcuQ29tcExpbmVfaGVhZExpbmUgaW5wdXQsIC5Db21wTGluZV9oZWFkTGluZSBzZWxlY3QsIC5Db21wTGluZV9oZWFkTGluZSBhJykuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHQvLyBhZGQgbmV3IGNsaWNrIGV2ZW50c1xyXG5cdFx0XHQkKCcuQ29tcExpbmVfX2V4cGFuZEljb24nKS51bmJpbmQoJ2NsaWNrJyk7XHJcblx0XHRcdCQoJy5Db21wTGluZV9fZXhwYW5kSWNvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGNsaWNrRXZlbnRzKHRoaXMucGFyZW50RWxlbWVudCk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Ly8gZWFjaCBhbGwgc2VjdGlvbnNcclxuXHRcdFx0JCgnLkNvbXBMaW5lRXhwYW5kYWJsZScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0Ly8gaWYgbmV3IFNlY3Rpb25FeHBhbmRhYmxlIHRoZW4gYWRkIHRvIHByZXZpZXdzdGF0IGFycmF5XHJcblx0XHRcdFx0aWYgKFxyXG5cdFx0XHRcdFx0cHJldmlld3N0YXRbXHJcblx0XHRcdFx0XHRcdCQodGhpcylcclxuXHRcdFx0XHRcdFx0XHQuY2xvc2VzdCgnLkNvbXBMaW5lJylcclxuXHRcdFx0XHRcdFx0XHQuYXR0cignaWQnKVxyXG5cdFx0XHRcdFx0XSA9PSBudWxsXHJcblx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHQvLyBhZGQgc3RhdCBvbiBhcnJheVxyXG5cdFx0XHRcdFx0dmFyIHN0YXQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdC8vIGlmIG9wZW5cclxuXHRcdFx0XHRcdGlmICgkKHRoaXMpLmhhc0NsYXNzKCdleHBhbmRlZCcpKSB7XHJcblx0XHRcdFx0XHRcdHN0YXQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Ly8gYWRkIHJvd1xyXG5cdFx0XHRcdFx0cHJldmlld3N0YXRbXHJcblx0XHRcdFx0XHRcdCQodGhpcylcclxuXHRcdFx0XHRcdFx0XHQuY2xvc2VzdCgnLkNvbXBMaW5lJylcclxuXHRcdFx0XHRcdFx0XHQuYXR0cignaWQnKVxyXG5cdFx0XHRcdFx0XSA9IHtcclxuXHRcdFx0XHRcdFx0Y2xpZW50OiBzdGF0LFxyXG5cdFx0XHRcdFx0XHRzZXJ2ZXI6IHN0YXQsXHJcblx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gY3VyZW50IHN0YXRlIChhamF4IHN0YXRlIHggaW5pdGlhbCBzdGF0ZSlcclxuXHRcdFx0XHR2YXIgY3VyU3RhdGUgPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0Ly8gY2hlY2sgaWYgc3RhcnQgZXhwYW5kYWJsZVxyXG5cdFx0XHRcdGlmICgkKHRoaXMpLmhhc0NsYXNzKCdleHBhbmRlZCcpKSB7XHJcblx0XHRcdFx0XHRjdXJTdGF0ZSA9IHRydWU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyBjaGVjayBpZiBhamF4ICE9IGluaXRpYWwgc2VydmVyXHJcblx0XHRcdFx0aWYgKFxyXG5cdFx0XHRcdFx0Y3VyU3RhdGUgIT1cclxuXHRcdFx0XHRcdHByZXZpZXdzdGF0W1xyXG5cdFx0XHRcdFx0XHQkKHRoaXMpXHJcblx0XHRcdFx0XHRcdFx0LmNsb3Nlc3QoJy5Db21wTGluZScpXHJcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2lkJylcclxuXHRcdFx0XHRcdF1bJ3NlcnZlciddXHJcblx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHQvLyBjdXJzdGF0ZVxyXG5cdFx0XHRcdFx0cHJldmlld3N0YXRbXHJcblx0XHRcdFx0XHRcdCQodGhpcylcclxuXHRcdFx0XHRcdFx0XHQuY2xvc2VzdCgnLkNvbXBMaW5lJylcclxuXHRcdFx0XHRcdFx0XHQuYXR0cignaWQnKVxyXG5cdFx0XHRcdFx0XVsnY2xpZW50J10gPSBjdXJTdGF0ZTtcclxuXHRcdFx0XHRcdHByZXZpZXdzdGF0W1xyXG5cdFx0XHRcdFx0XHQkKHRoaXMpXHJcblx0XHRcdFx0XHRcdFx0LmNsb3Nlc3QoJy5Db21wTGluZScpXHJcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2lkJylcclxuXHRcdFx0XHRcdF1bJ3NlcnZlciddID0gY3VyU3RhdGU7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdC8vIGhhcyBjbGFzcyBleHBhbmRlZFxyXG5cdFx0XHRcdFx0aWYgKFxyXG5cdFx0XHRcdFx0XHRwcmV2aWV3c3RhdFtcclxuXHRcdFx0XHRcdFx0XHQkKHRoaXMpXHJcblx0XHRcdFx0XHRcdFx0XHQuY2xvc2VzdCgnLkNvbXBMaW5lJylcclxuXHRcdFx0XHRcdFx0XHRcdC5hdHRyKCdpZCcpXHJcblx0XHRcdFx0XHRcdF1bJ2NsaWVudCddID09IGZhbHNlICYmXHJcblx0XHRcdFx0XHRcdCQodGhpcykuaGFzQ2xhc3MoJ2V4cGFuZGVkJylcclxuXHRcdFx0XHRcdCkge1xyXG5cdFx0XHRcdFx0XHQkKHRoaXMpLnJlbW92ZUNsYXNzKCdleHBhbmRlZCcpO1xyXG5cdFx0XHRcdFx0XHQkKHRoaXMpXHJcblx0XHRcdFx0XHRcdFx0LmNoaWxkcmVuKCcuQ29tcExpbmVfRXhwYW5kJylcclxuXHRcdFx0XHRcdFx0XHQuaGVpZ2h0KDApO1xyXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChcclxuXHRcdFx0XHRcdFx0cHJldmlld3N0YXRbXHJcblx0XHRcdFx0XHRcdFx0JCh0aGlzKVxyXG5cdFx0XHRcdFx0XHRcdFx0LmNsb3Nlc3QoJy5Db21wTGluZScpXHJcblx0XHRcdFx0XHRcdFx0XHQuYXR0cignaWQnKVxyXG5cdFx0XHRcdFx0XHRdWydjbGllbnQnXSA9PSB0cnVlICYmXHJcblx0XHRcdFx0XHRcdCEkKHRoaXMpLmhhc0NsYXNzKCdleHBhbmRlZCcpXHJcblx0XHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdFx0JCh0aGlzKS5hZGRDbGFzcygnZXhwYW5kZWQnKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvLyBzZXQgZXZlbnRzXHJcblx0XHR0aGF0LmluaXQgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0Ly8gZWFjaCBhbGwgc2VjdGlvbnMgdG8gY3JlYXRlIGFycmF5IHN0YXRcclxuXHRcdFx0JCgnLkNvbXBMaW5lRXhwYW5kYWJsZScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0Ly8gYWRkIHN0YXQgb24gYXJyYXlcclxuXHRcdFx0XHR2YXIgc3RhdCA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHQvLyBpZiBvcGVuXHJcblx0XHRcdFx0aWYgKCQodGhpcykuaGFzQ2xhc3MoJ2V4cGFuZGVkJykpIHtcclxuXHRcdFx0XHRcdHN0YXQgPSB0cnVlO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gYWRkIHJvd1xyXG5cdFx0XHRcdHByZXZpZXdzdGF0W1xyXG5cdFx0XHRcdFx0JCh0aGlzKVxyXG5cdFx0XHRcdFx0XHQuY2xvc2VzdCgnLkNvbXBMaW5lJylcclxuXHRcdFx0XHRcdFx0LmF0dHIoJ2lkJylcclxuXHRcdFx0XHRdID0ge1xyXG5cdFx0XHRcdFx0Y2xpZW50OiBzdGF0LFxyXG5cdFx0XHRcdFx0c2VydmVyOiBzdGF0LFxyXG5cdFx0XHRcdH07XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Ly8gYWRkIGNsaWNrIGV2ZW50c1xyXG5cdFx0XHQkKCcuQ29tcExpbmVfX2V4cGFuZEljb24nKS51bmJpbmQoJ2NsaWNrJyk7XHJcblx0XHRcdCQoJy5Db21wTGluZV9fZXhwYW5kSWNvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGNsaWNrRXZlbnRzKHRoaXMucGFyZW50RWxlbWVudCk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Ly8gYWRkIHN0b3AgcHJlcGFnYXRpb25cclxuXHRcdFx0JCgnLkNvbXBMaW5lX2hlYWRMaW5lIGlucHV0LCAuQ29tcExpbmVfaGVhZExpbmUgc2VsZWN0LCAuQ29tcExpbmVfaGVhZExpbmUgYScpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Ly8gcmVtb3ZlIHVuZWNlc3NhcnkgYmVoYXZpb3JzXHJcblxyXG5cdFx0XHQvLyBldmVudCBhamF4XHJcblx0XHRcdG9zQWpheEJhY2tlbmQuQmluZEFmdGVyQWpheFJlcXVlc3QodGhhdC5hamF4UmVmcmVzaCk7XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0Y29uc3QgY3JlYXRlID0gKCkgPT4ge1xyXG5cdFx0Y29uc3QgZXhwYW5kYWJsZSA9IG5ldyBTZWN0aW9uQ29tcGxpbmUoKTtcclxuXHJcblx0XHRleHBhbmRhYmxlLmluaXQoKTtcclxuXHR9O1xyXG5cclxuXHRTYXBwaGlyZVdpZGdldHMuQ29tcExpbmUgPSB7IGNyZWF0ZSB9O1xyXG59KShqUXVlcnksIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKTtcclxuIiwiLyogQ29tcG9uZW50IENvdW50cnlQaG9uZSAqL1xyXG4oZnVuY3Rpb24oJCwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpIHtcclxuXHRjb25zdCBjcmVhdGUgPSBjb25maWcgPT4ge1xyXG5cdFx0Y29uc3QgJGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtjb25maWcud2lkZ2V0SWR9YCk7XHJcblx0XHRjb25zdCBhZGRpdGlvbmFsVmFsaWRhdGlvbnMgPSBjb25maWcuYWRkaXRpb25hbFZhbGlkYXRpb25zO1xyXG5cclxuXHRcdGNvbnN0IGNvdW50cnlQaG9uZUlucHV0ID0gd2luZG93LmludGxUZWxJbnB1dCgkZWxlbWVudCwge1xyXG5cdFx0XHRpbml0aWFsQ291bnRyeTogY29uZmlnLmluaXRpYWxDb3VudHJ5LFxyXG5cdFx0XHRwcmVmZXJyZWRDb3VudHJpZXM6IGNvbmZpZy5wcmVmZXJyZWRDb3VudHJpZXMsXHJcblx0XHRcdHNlcGFyYXRlRGlhbENvZGU6IGNvbmZpZy5zZXBhcmF0ZURpYWxDb2RlLFxyXG5cdFx0XHRuYXRpb25hbE1vZGU6IGNvbmZpZy5uYXRpb25hbE1vZGUsXHJcblx0XHRcdGF1dG9QbGFjZWhvbGRlcjogY29uZmlnLmF1dG9QbGFjZWhvbGRlciA/ICdwb2xpdGUnIDogZmFsc2UsXHJcblx0XHRcdGZvcm1hdE9uRGlzcGxheTogZmFsc2UsXHJcblx0XHRcdHV0aWxzU2NyaXB0OiAnL1YzX1BhdC9qcy91dGlscy5qcycsXHJcblx0XHR9KTtcclxuXHJcblx0XHRjb25zdCAkaW5wdXQgPSAkKGAjJHtjb25maWcud2lkZ2V0SWR9YCk7XHJcblxyXG5cdFx0JGlucHV0Lm9uKCdrZXl1cCcsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0aWYgKCRpbnB1dC52YWwoKSA9PT0gJysnIHx8ICRpbnB1dC52YWwoKSA9PT0gJycpIHtcclxuXHRcdFx0XHRjb3VudHJ5UGhvbmVJbnB1dC5zZXRDb3VudHJ5KGNvbmZpZy5pbml0aWFsQ291bnRyeSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdCRpbnB1dC5vbigna2V5cHJlc3MnLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdGNvbnN0IHNlbGVjdGVkQ291bnRyeSA9IGNvdW50cnlQaG9uZUlucHV0LmdldFNlbGVjdGVkQ291bnRyeURhdGEoKTtcclxuXHRcdFx0Y29uc3QgZmlsdGVyID0gYWRkaXRpb25hbFZhbGlkYXRpb25zLmZpbmQoaSA9PiBpLkNvdW50cnlQaG9uZVZhbGlkYXRpb25zLkNvdW50cnlDb2RlID09PSBzZWxlY3RlZENvdW50cnkuaXNvMik7XHJcblx0XHRcdGNvbnN0IHZhbHVlID0gJGlucHV0LnZhbCgpLnRyaW0oKTtcclxuXHJcblx0XHRcdGxldCBpc1ZhbGlkID0gdHJ1ZTtcclxuXHJcblx0XHRcdGlmIChmaWx0ZXIpIHtcclxuXHRcdFx0XHRjb25zdCB3aXRob3VDb2RlID0gdmFsdWUucmVwbGFjZShgKyR7c2VsZWN0ZWRDb3VudHJ5LmRpYWxDb2RlfWAsICcnKTtcclxuXHJcblx0XHRcdFx0aXNWYWxpZCA9IHdpdGhvdUNvZGUudHJpbSgpLmxlbmd0aCArIDEgPD0gZmlsdGVyLkNvdW50cnlQaG9uZVZhbGlkYXRpb25zLlBob25lTGVuZ3RoO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAodmFsdWUgPT09IGArJHtzZWxlY3RlZENvdW50cnkuZGlhbENvZGV9YCkge1xyXG5cdFx0XHRcdCRpbnB1dC52YWwoYCske3NlbGVjdGVkQ291bnRyeS5kaWFsQ29kZX0gYCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0aXNWYWxpZCAmJlxyXG5cdFx0XHRcdChlLm1ldGFLZXkgfHwgLy8gY21kL2N0cmxcclxuXHRcdFx0XHRlLndoaWNoIDw9IDAgfHwgLy8gYXJyb3cga2V5c1xyXG5cdFx0XHRcdGUud2hpY2ggPT0gOCB8fCAvLyBkZWxldGUga2V5XHJcblx0XHRcdFx0XHQoIXZhbHVlLmxlbmd0aCAmJiBlLmtleSA9PT0gJysnKSB8fFxyXG5cdFx0XHRcdFx0L1swLTldLy50ZXN0KFN0cmluZy5mcm9tQ2hhckNvZGUoZS53aGljaCkpKVxyXG5cdFx0XHQpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0JGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY291bnRyeWNoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRvbkNoYW5nZUNvdW50cnkoKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGNvbnN0IG9uQ2hhbmdlQ291bnRyeSA9ICgpID0+IHtcclxuXHRcdFx0Y29uc3QgJHNlbGVjdGVkQ291bnRyeUlucHV0ID0gJChgIyR7Y29uZmlnLnNlbGVjdGVkQ291bnRyeUlucHV0fWApO1xyXG5cdFx0XHRjb25zdCBzZWxlY3RlZENvdW50cnkgPSBjb3VudHJ5UGhvbmVJbnB1dC5nZXRTZWxlY3RlZENvdW50cnlEYXRhKCk7XHJcblxyXG5cdFx0XHQkc2VsZWN0ZWRDb3VudHJ5SW5wdXQudmFsKHNlbGVjdGVkQ291bnRyeS5pc28yKTtcclxuXHRcdFx0JHNlbGVjdGVkQ291bnRyeUlucHV0LnRyaWdnZXIoJ2NoYW5nZScpO1xyXG5cdFx0fTtcclxuXHJcblx0XHQkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHRcdFx0b25DaGFuZ2VDb3VudHJ5KCk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRTYXBwaGlyZVdpZGdldHMuQ291bnRyeVBob25lID0ge1xyXG5cdFx0Y3JlYXRlLFxyXG5cdH07XHJcbn0pKGpRdWVyeSwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpO1xyXG4iLCIoZnVuY3Rpb24oKSB7XHJcblx0Y2xhc3MgRGF0YVRhYmxlcyB7XHJcblx0XHRjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuXHRcdFx0dGhpcy5jb25maWcgPSBjb25maWc7XHJcblx0XHRcdHRoaXMuJHdpZGdldCA9ICQoYCMke2NvbmZpZy53aWRnZXRJZH1gKTtcclxuXHRcdFx0dGhpcy4kdGFibGUgPSB0aGlzLiR3aWRnZXQuZmluZCgndGFibGUnKTtcclxuXHRcdFx0dGhpcy4kdGFibGUuYWRkQ2xhc3MoJ2NlbGwtYm9yZGVyIGNvbXBhY3QnKTtcclxuXHRcdFx0dGhpcy5vbkluaXQoKTtcclxuXHRcdH1cclxuXHJcblx0XHRvbkluaXQoKSB7XHJcblx0XHRcdHRoaXMub3B0aW9ucyA9IHtcclxuXHRcdFx0XHQuLi50aGlzLmNvbmZpZyxcclxuXHRcdFx0XHRmaXhlZENvbHVtbnM6IHRydWUsXHJcblx0XHRcdFx0aW5mbzogZmFsc2UsXHJcblx0XHRcdFx0b3JkZXJpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdHBhZ2luZzogZmFsc2UsXHJcblx0XHRcdFx0c2Nyb2xsQ29sbGFwc2U6IHRydWUsXHJcblx0XHRcdFx0c2Nyb2xsWDogdHJ1ZSxcclxuXHRcdFx0XHRzZWFyY2hpbmc6IGZhbHNlLFxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0JCgoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy4kdGFibGUuRGF0YVRhYmxlKHRoaXMub3B0aW9ucyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y29uc3QgY3JlYXRlID0gY29uZmlnID0+ICh3aW5kb3dbY29uZmlnLndpZGdldElkXSA9IG5ldyBEYXRhVGFibGVzKGNvbmZpZykpO1xyXG5cclxuXHRTYXBwaGlyZVdpZGdldHMuRGF0YVRhYmxlcyA9IHtcclxuXHRcdGNyZWF0ZSxcclxuXHR9O1xyXG59KSgpO1xyXG4iLCIvKiBDb21wb25lbnQgRGF0ZVRpbWVSYW5nZVBpY2tlciAqL1xyXG4oZnVuY3Rpb24oJCwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKSB7XHJcblx0dmFyIGFsbERhdGVUaW1lUmFuZ2VQaWNrZXJzID0gW107XHJcblxyXG5cdHZhciBjcmVhdGUgPSBmdW5jdGlvbihjb25maWcpIHtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYWxsRGF0ZVRpbWVSYW5nZVBpY2tlcnMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0aWYgKGFsbERhdGVUaW1lUmFuZ2VQaWNrZXJzW2ldLmNvbmZpZy53aWRnZXRJZCA9PT0gY29uZmlnLndpZGdldElkKSB7XHJcblx0XHRcdFx0YWxsRGF0ZVRpbWVSYW5nZVBpY2tlcnMuc3BsaWNlKGksIDEpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHR3aW5kb3dbY29uZmlnLndpZGdldElkXSA9IG5ldyBEYXRlVGltZVJhbmdlUGlja2VyKGNvbmZpZyk7XHJcblx0XHRhbGxEYXRlVGltZVJhbmdlUGlja2Vycy5wdXNoKHdpbmRvd1tjb25maWcud2lkZ2V0SWRdKTtcclxuXHR9O1xyXG5cclxuXHR2YXIgRGF0ZVRpbWVSYW5nZVBpY2tlciA9IGZ1bmN0aW9uKGNvbmZpZykge1xyXG5cdFx0dGhpcy5jb25maWcgPSBjb25maWc7XHJcblx0XHR0aGlzLmN1cnJlbnRMb2NhbGUgPSBjb25maWcuY3VycmVudExvY2FsZTtcclxuXHJcblx0XHR0aGlzLiR3aWRnZXQgPSAkKCcjJyArIGNvbmZpZy53aWRnZXRJZCk7XHJcblx0XHR0aGlzLiR3aWRnZXQuYWRkQ2xhc3MoJ0RhdGVUaW1lUmFuZ2VQaWNrZXInKTtcclxuXHRcdHRoaXMuJGNsZWFyID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5EYXRlVGltZVJhbmdlUGlja2VyLWNsZWFyJyk7XHJcblx0XHR0aGlzLiRsYWJlbCA9IHRoaXMuJHdpZGdldC5maW5kKCcuRGF0ZVRpbWVSYW5nZVBpY2tlci1sYWJlbCcpO1xyXG5cclxuXHRcdHRoaXMuaXNFbXB0eUhvdXIgPSBmYWxzZTtcclxuXHJcblx0XHRpZiAodGhpcy5jb25maWcuYXR0YWNoVG9JbnB1dCkge1xyXG5cdFx0XHR0aGlzLiR3aWRnZXQuYWRkQ2xhc3MoJ2F0dGFjaGVkSW5wdXQnKTtcclxuXHRcdFx0dGhpcy4kbW9kZWwgPSB0aGlzLiR3aWRnZXQuZmluZCgnLkRhdGVUaW1lUmFuZ2VQaWNrZXItcGxhY2Vob2xkZXIgaW5wdXRbdHlwZT1cInRleHRcIl0nKTtcclxuXHRcdFx0dGhpcy4kbW9kZWwuYXR0cigndGFiSW5kZXgnLCAtMSk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy4kaW5wdXQgPSAkKCcjJyArIGNvbmZpZy5pbnB1dElkKTtcclxuXHJcblx0XHRpZiAoIXRoaXMuY29uZmlnLmFsbG93c1R5cGluZykge1xyXG5cdFx0XHR0aGlzLiRpbnB1dC5wcm9wKCdyZWFkb25seScsIHRydWUpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLmN1cnJlbnRMb2NhbGUgPT09ICdBUicpIHtcclxuXHRcdFx0bW9tZW50LmxvY2FsZSgnYXIta3cnKTtcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgb3B0aW9ucyA9IHt9O1xyXG5cdFx0b3B0aW9ucy5zdGFydERhdGUgPSBjb25maWcuc3RhcnREYXRlO1xyXG5cdFx0b3B0aW9ucy5zaW5nbGVEYXRlUGlja2VyID0gY29uZmlnLnNpbmdsZURhdGVQaWNrZXI7XHJcblx0XHRvcHRpb25zLmF1dG9BcHBseSA9IGNvbmZpZy5hdXRvQXBwbHk7XHJcblx0XHRvcHRpb25zLmF1dG9VcGRhdGVJbnB1dCA9IGNvbmZpZy5hdXRvVXBkYXRlSW5wdXQ7XHJcblx0XHRvcHRpb25zLnRpbWVQaWNrZXIgPSBjb25maWcudGltZVBpY2tlcjtcclxuXHRcdG9wdGlvbnMudGltZVBpY2tlcjI0SG91ciA9IGNvbmZpZy50aW1lUGlja2VyMjRIb3VyO1xyXG5cdFx0b3B0aW9ucy50aW1lUGlja2VySW5jcmVtZW50ID0gY29uZmlnLnRpbWVQaWNrZXJJbmNyZW1lbnQ7XHJcblx0XHRvcHRpb25zLnNob3dEcm9wZG93bnMgPSBjb25maWcuaGFzRHJvcGRvd25zOyAvLyBNb250aC9ZZWFyIFBpY2tlclxyXG5cdFx0b3B0aW9ucy5kcm9wcyA9IGNvbmZpZy5kcm9wcztcclxuXHRcdG9wdGlvbnMub3BlbnMgPSBjb25maWcuY3VycmVudExvY2FsZSA9PT0gJ0FSJyAmJiBjb25maWcub3BlbnMgIT0gJ2NlbnRlcicgPyAnbGVmdCcgOiBjb25maWcub3BlbnM7XHJcblxyXG5cdFx0dmFyIHN0cmluZ0Nvbm5lY3Rpb24gPSAnWywgYXRdJztcclxuXHJcblx0XHRpZiAoY29uZmlnLnRpbWVQaWNrZXIpIHtcclxuXHRcdFx0aWYgKCF0aGlzLmNvbmZpZy5hdHRhY2hUb0lucHV0KSB0aGlzLiRpbnB1dC5wcm9wKCdwbGFjZWhvbGRlcicsICdERC1NTS1ZWVlZIEhIOk1NJyk7XHJcblxyXG5cdFx0XHRpZiAob3B0aW9ucy50aW1lUGlja2VyMjRIb3VyKSB7XHJcblx0XHRcdFx0dGhpcy5jb25maWcuZm9ybWF0SW5wdXQgPSBgJHt0aGlzLmNvbmZpZy5zeXN0ZW1EYXRlRm9ybWF0fSBISDptbWA7XHJcblx0XHRcdFx0dGhpcy5jb25maWcuZm9ybWF0TGFiZWwgPSB0aGlzLmNvbmZpZy5oYXNZZWFyV2hlblRleHRcclxuXHRcdFx0XHRcdD8gJ0QgTU1NIFlZWVknICsgc3RyaW5nQ29ubmVjdGlvbiArICcgSEg6bW0nXHJcblx0XHRcdFx0XHQ6ICdEIE1NTScgKyBzdHJpbmdDb25uZWN0aW9uICsgJyBISDptbSc7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5jb25maWcuZm9ybWF0SW5wdXQgPSBgJHt0aGlzLmNvbmZpZy5zeXN0ZW1EYXRlRm9ybWF0fSBoaDptbSBBYDtcclxuXHRcdFx0XHR0aGlzLmNvbmZpZy5mb3JtYXRMYWJlbCA9IHRoaXMuY29uZmlnLmhhc1llYXJXaGVuVGV4dFxyXG5cdFx0XHRcdFx0PyAnRCBNTU0gWVlZWScgKyBzdHJpbmdDb25uZWN0aW9uICsgJyBoaDptbSBBJ1xyXG5cdFx0XHRcdFx0OiAnRCBNTU0nICsgc3RyaW5nQ29ubmVjdGlvbiArICcgaGg6bW0gQSc7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuJHdpZGdldC5hZGRDbGFzcygnb25seURhdGUnKTtcclxuXHJcblx0XHRcdGlmICghdGhpcy5jb25maWcuYXR0YWNoVG9JbnB1dCkgdGhpcy4kaW5wdXQucHJvcCgncGxhY2Vob2xkZXInLCAnREQtTU0tWVlZWScpO1xyXG5cclxuXHRcdFx0dGhpcy5jb25maWcuZm9ybWF0SW5wdXQgPSB0aGlzLmNvbmZpZy5zeXN0ZW1EYXRlRm9ybWF0O1xyXG5cdFx0XHR0aGlzLmNvbmZpZy5mb3JtYXRMYWJlbCA9IHRoaXMuY29uZmlnLmhhc1llYXJXaGVuVGV4dCA/ICdEIE1NTSBZWVlZJyA6ICdEIE1NTSc7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCFjb25maWcuc2luZ2xlRGF0ZVBpY2tlcikge1xyXG5cdFx0XHR0aGlzLiR3aWRnZXQuYWRkQ2xhc3MoJ3JhbmdlRGF0ZXMnKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmNvbmZpZy5mb3JtYXRMYWJlbCA9IHRoaXMuY29uZmlnLmhhc1dlZWtEYXlOYW1lV2hlblRleHRcclxuXHRcdFx0PyAnZGRkWywgXScgKyB0aGlzLmNvbmZpZy5mb3JtYXRMYWJlbFxyXG5cdFx0XHQ6IHRoaXMuY29uZmlnLmZvcm1hdExhYmVsO1xyXG5cclxuXHRcdG9wdGlvbnMubG9jYWxlID0ge1xyXG5cdFx0XHRkaXJlY3Rpb246IGNvbmZpZy5jdXJyZW50TG9jYWxlID09PSAnQVInID8gJ3J0bCcgOiAnbHRyJyxcclxuXHRcdFx0Zm9ybWF0OiB0aGlzLmNvbmZpZy5mb3JtYXRJbnB1dCxcclxuXHRcdFx0Y2FuY2VsTGFiZWw6ICdDYW5jZWwnLFxyXG5cdFx0XHRhcHBseUxhYmVsOiAnQXBwbHknLFxyXG5cdFx0fTtcclxuXHJcblx0XHRpZiAoY29uZmlnLmhhc1RleHRUcmlnZ2VyKSB7XHJcblx0XHRcdHRoaXMuJHdpZGdldC5hZGRDbGFzcygndGV4dFRyaWdnZXInKTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBudWxsZERhdGVzID0gWycwMS0wMS0xOTAwIDAwOjAwOjAwJywgJzE5MDAtMDEtMDEgMDA6MDA6MDAnXTtcclxuXHJcblx0XHRpZiAoY29uZmlnLmVuZERhdGUgJiYgIW51bGxkRGF0ZXMuc29tZShpID0+IGkgPT09IGNvbmZpZy5lbmREYXRlKSkge1xyXG5cdFx0XHRvcHRpb25zLmVuZERhdGUgPSBjb25maWcuZW5kRGF0ZTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoY29uZmlnLm1heERhdGUgJiYgIW51bGxkRGF0ZXMuc29tZShpID0+IGkgPT09IGNvbmZpZy5tYXhEYXRlKSkge1xyXG5cdFx0XHRvcHRpb25zLm1heERhdGUgPSBjb25maWcubWF4RGF0ZTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoY29uZmlnLm1pbkRhdGUgJiYgIW51bGxkRGF0ZXMuc29tZShpID0+IGkgPT09IGNvbmZpZy5taW5EYXRlKSkge1xyXG5cdFx0XHRvcHRpb25zLm1pbkRhdGUgPSBjb25maWcubWluRGF0ZTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoY29uZmlnLkRpc2FibGVkV2Vla0RheXMpIHtcclxuXHRcdFx0dmFyIGRpc2FibGVkV2Vla0RheXMgPSBjb25maWcuRGlzYWJsZWRXZWVrRGF5cy5zcGxpdCgnLCcpO1xyXG5cdFx0XHRvcHRpb25zLmlzSW52YWxpZERhdGUgPSBmdW5jdGlvbihkYXRlKSB7XHJcblx0XHRcdFx0cmV0dXJuIGRpc2FibGVkV2Vla0RheXMuaW5jbHVkZXMoXHJcblx0XHRcdFx0XHRtb21lbnQoZGF0ZSlcclxuXHRcdFx0XHRcdFx0LmRheSgpXHJcblx0XHRcdFx0XHRcdC50b1N0cmluZygpXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgX3RoaXMgPSB0aGlzO1xyXG5cclxuXHRcdHRoaXMuJGlucHV0LmRhdGVyYW5nZXBpY2tlcihvcHRpb25zLCBmdW5jdGlvbihzdGFydERhdGUsIGVuZERhdGUsIGxhYmVsKSB7XHJcblx0XHRcdC8vIGFmdGVyIGEgc2VsZWN0aW9uIGlzIG1hZGVcclxuXHRcdFx0aWYgKF90aGlzLmNvbmZpZy5hdHRhY2hUb0lucHV0KSB7XHJcblx0XHRcdFx0bGV0IGZvcm1hdCA9ICcnO1xyXG5cclxuXHRcdFx0XHRpZiAoX3RoaXMuY29uZmlnLnRpbWVQaWNrZXIpIHtcclxuXHRcdFx0XHRcdGZvcm1hdCA9IGAke190aGlzLmNvbmZpZy5zeXN0ZW1EYXRlRm9ybWF0fSBISDptbWA7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoX3RoaXMuY29uZmlnLnNpbmdsZURhdGVQaWNrZXIpIHtcclxuXHRcdFx0XHRcdGlmIChfdGhpcy5jb25maWcudGltZVBpY2tlcikgX3RoaXMuJG1vZGVsLnZhbChzdGFydERhdGUuZm9ybWF0KGZvcm1hdCkpO1xyXG5cdFx0XHRcdFx0ZWxzZSBfdGhpcy4kbW9kZWwudmFsKHN0YXJ0RGF0ZS5mb3JtYXQoX3RoaXMuY29uZmlnLnN5c3RlbURhdGVGb3JtYXQpKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0bGV0IHN0YXJ0LCBlbmQ7XHJcblxyXG5cdFx0XHRcdFx0aWYgKF90aGlzLmNvbmZpZy50aW1lUGlja2VyKSB7XHJcblx0XHRcdFx0XHRcdHN0YXJ0ID0gc3RhcnREYXRlLmZvcm1hdChmb3JtYXQpO1xyXG5cdFx0XHRcdFx0XHRlbmQgPSBlbmREYXRlLmZvcm1hdChmb3JtYXQpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0c3RhcnQgPSBzdGFydERhdGUuZm9ybWF0KF90aGlzLmNvbmZpZy5zeXN0ZW1EYXRlRm9ybWF0KTtcclxuXHRcdFx0XHRcdFx0ZW5kID0gZW5kRGF0ZS5mb3JtYXQoX3RoaXMuY29uZmlnLnN5c3RlbURhdGVGb3JtYXQpO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdF90aGlzLiRtb2RlbC52YWwoYCR7c3RhcnR9ICDCtyAgJHtlbmR9YCk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRfdGhpcy4kbW9kZWwudHJpZ2dlcignY2hhbmdlJyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGNvbnN0IGluaXRpYWxWYWx1ZSA9IF90aGlzLiRpbnB1dC52YWwoKTtcclxuXHRcdFx0Y29uc3QgYWxsb3dzTU1ZWSA9IF90aGlzLmNvbmZpZy5hbGxvd3NUeXBpbmcgJiYgX3RoaXMuY29uZmlnLmFsbG93c1R5cGVNTVlZICYmIF90aGlzLmNvbmZpZy5zaW5nbGVEYXRlUGlja2VyO1xyXG5cclxuXHRcdFx0aWYgKGFsbG93c01NWVkgJiYgaW5pdGlhbFZhbHVlLmxlbmd0aCA9PT0gNCkge1xyXG5cdFx0XHRcdF90aGlzLnBpY2tlci5zZXRTdGFydERhdGUobW9tZW50KGAwMSR7aW5pdGlhbFZhbHVlfWAsICdERE1NWVknKSk7XHJcblxyXG5cdFx0XHRcdGlmIChfdGhpcy5jb25maWcuYXR0YWNoVG9JbnB1dCkge1xyXG5cdFx0XHRcdFx0bGV0IGZvcm1hdCA9ICcnO1xyXG5cclxuXHRcdFx0XHRcdGlmIChfdGhpcy5jb25maWcudGltZVBpY2tlcikgZm9ybWF0ID0gYCR7X3RoaXMuY29uZmlnLnN5c3RlbURhdGVGb3JtYXR9IEhIOm1tYDtcclxuXHRcdFx0XHRcdGVsc2UgZm9ybWF0ID0gX3RoaXMuY29uZmlnLnN5c3RlbURhdGVGb3JtYXQ7XHJcblxyXG5cdFx0XHRcdFx0X3RoaXMuJG1vZGVsLnZhbChfdGhpcy5waWNrZXIuc3RhcnREYXRlLmZvcm1hdChmb3JtYXQpKTtcclxuXHRcdFx0XHRcdF90aGlzLiRtb2RlbC50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vIG5vdyB3ZSBoYXZlIGEgcHJvcGVyIGluc3RhbmNlXHJcblx0XHR0aGlzLnBpY2tlciA9IHRoaXMuJGlucHV0LmRhdGEoJ2RhdGVyYW5nZXBpY2tlcicpO1xyXG5cclxuXHRcdHRoaXMuJGNhbGVuZGFyID0gJCh0aGlzLnBpY2tlci5jb250YWluZXIpO1xyXG5cclxuXHRcdGlmICghIXRoaXMuY29uZmlnLmNzc0NsYXNzKSB7XHJcblx0XHRcdHRoaXMuJGNhbGVuZGFyLmFkZENsYXNzKHRoaXMuY29uZmlnLmNzc0NsYXNzKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLiR0aW1lSG9sZGVyID0gdGhpcy4kY2FsZW5kYXIuZmluZCgnLmNhbGVuZGFyLXRpbWUnKTtcclxuXHRcdHRoaXMuJGJ1dHRvbnNIb2xkZXIgPSB0aGlzLiRjYWxlbmRhci5maW5kKCcuZHJwLWJ1dHRvbnMnKTtcclxuXHJcblx0XHRpZiAodGhpcy5jb25maWcuYXV0b0FwcGx5KSB7XHJcblx0XHRcdHRoaXMuJGJ1dHRvbnNIb2xkZXIuaGlkZSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChjb25maWcuaXNFbXB0eVN0YXJ0RGF0ZSkge1xyXG5cdFx0XHR0aGlzLmNsZWFyKGZhbHNlKTtcclxuXHRcdH0gZWxzZSBpZiAoY29uZmlnLmlzRW1wdHlTdGFydEhvdXIpIHtcclxuXHRcdFx0dGhpcy5pc0VtcHR5SG91ciA9IHRydWU7XHJcblx0XHRcdHRoaXMudXBkYXRlTGFiZWxpbmcoKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMudXBkYXRlTGFiZWxpbmcoKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoY29uZmlnLmVuYWJsZWQpIHtcclxuXHRcdFx0dGhpcy5uYXRpdmVFdmVudHMoKTtcclxuXHRcdFx0dGhpcy5jdXN0b21FdmVudHMoKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuJGNsZWFyLmhpZGUoKTtcclxuXHRcdFx0dGhpcy4kaW5wdXQub2ZmKCdjbGljayBmb2N1cyBrZXlkb3duIGtleXVwJyk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHRoaXMuY29uZmlnLmF0dGFjaFRvSW5wdXQpIHtcclxuXHRcdFx0dGhpcy5oYW5kbGVDdXN0b21WYWxpZGF0aW9uKCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0RGF0ZVRpbWVSYW5nZVBpY2tlci5wcm90b3R5cGUuaGFuZGxlQ3VzdG9tVmFsaWRhdGlvbiA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0Ly8gVE8gRE9cclxuXHR9O1xyXG5cclxuXHREYXRlVGltZVJhbmdlUGlja2VyLnByb3RvdHlwZS5uYXRpdmVFdmVudHMgPSBmdW5jdGlvbigpIHtcclxuXHRcdGNvbnN0IF90aGlzID0gdGhpcztcclxuXHJcblx0XHR0aGlzLiRpbnB1dC5vbignc2hvd0NhbGVuZGFyLmRhdGVyYW5nZXBpY2tlcicsIGZ1bmN0aW9uKGV2ZW50LCBwaWNrZXIpIHtcclxuXHRcdFx0aWYgKF90aGlzLmNvbmZpZy5oYXNHb1RvZGF5KSB7XHJcblx0XHRcdFx0X3RoaXMuJGNhbGVuZGFyXHJcblx0XHRcdFx0XHQuZmluZCgnLmNhbGVuZGFyLXRhYmxlIHRoZWFkIHRyJylcclxuXHRcdFx0XHRcdC5lcSgwKVxyXG5cdFx0XHRcdFx0LmFmdGVyKFxyXG5cdFx0XHRcdFx0XHQnPHRyPjx0ZCBjb2xzcGFuPVwiN1wiIGNsYXNzPVwiRGF0ZVRpbWVSYW5nZVBpY2tlci1jYWxlbmRhci1nb3RvZGF5XCI+JyArXHJcblx0XHRcdFx0XHRcdFx0X3RoaXMuY29uZmlnLmdvVG9kYXlMYWJlbCArXHJcblx0XHRcdFx0XHRcdFx0JzwvdGQ+PC90cj4nXHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdGlmIChfdGhpcy5jb25maWcuZHJvcHMgPT09ICd1cCcpIHtcclxuXHRcdFx0XHRcdF90aGlzLiRjYWxlbmRhci5jc3MoJ3RvcCcsIF90aGlzLiRjYWxlbmRhci5vZmZzZXQoKS50b3AgLSAyNCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdF90aGlzLmhhbmRsZVZpZXdwb3J0UG9zaXRpb24oKTtcclxuXHJcblx0XHRcdGlmICghX3RoaXMuY29uZmlnLnNpbmdsZURhdGVQaWNrZXIpIHtcclxuXHRcdFx0XHQkKCcuZHJwLXNlbGVjdGVkJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGxldCB0ZXh0ID0gJCh0aGlzKS50ZXh0KCk7XHJcblx0XHRcdFx0XHR0ZXh0ID0gdGV4dC5yZXBsYWNlKC8tL2dpLCAnwrcnKTtcclxuXHJcblx0XHRcdFx0XHQkKHRoaXMpLnRleHQodGV4dCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuJGlucHV0Lm9uKCdzaG93LmRhdGVyYW5nZXBpY2tlcicsIGZ1bmN0aW9uKGV2ZW50LCBwaWNrZXIpIHtcclxuXHRcdFx0aWYgKF90aGlzLmNvbmZpZy50aW1lUGlja2VyICYmIF90aGlzLmNvbmZpZy5oYXNDbGVhckhvdXIpIHtcclxuXHRcdFx0XHRfdGhpcy4kY2FsZW5kYXIuZmluZCgnLmNhbGVuZGFyLXRpbWUnKS5hcHBlbmQoJzxzcGFuIGNsYXNzPVwiRGF0ZVRpbWVSYW5nZVBpY2tlci1jYWxlbmRhci1jbGVhclwiPjwvc3Bhbj4nKTtcclxuXHRcdFx0XHRpZiAoX3RoaXMuaXNFbXB0eUhvdXIpIHtcclxuXHRcdFx0XHRcdF90aGlzLiR0aW1lSG9sZGVyLmNzcygnb3BhY2l0eScsIDAuNSk7XHJcblx0XHRcdFx0XHRfdGhpcy4kY2FsZW5kYXIuZmluZCgnLkRhdGVUaW1lUmFuZ2VQaWNrZXItY2FsZW5kYXItY2xlYXInKS5hZGRDbGFzcygnZGlzYWJsZWQnKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0X3RoaXMuJHRpbWVIb2xkZXIuY3NzKCdvcGFjaXR5JywgMSk7XHJcblx0XHRcdFx0XHRfdGhpcy4kY2FsZW5kYXIuZmluZCgnLkRhdGVUaW1lUmFuZ2VQaWNrZXItY2FsZW5kYXItY2xlYXInKS5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0X3RoaXMuaGFuZGxlVmlld3BvcnRQb3NpdGlvbigpO1xyXG5cdFx0XHRTYXBwaGlyZVdpZGdldHMuRGF0ZVRpbWVSYW5nZVBpY2tlci5vcGVuZWRXaWRnZXRJZCA9IF90aGlzLmNvbmZpZy53aWRnZXRJZDtcclxuXHJcblx0XHRcdGlmIChfdGhpcy5jb25maWcuY3NzQ2xhc3MgPT09ICdDYWxlbmRhclBvcHVwJyAmJiB3aW5kb3cuZnJhbWVFbGVtZW50KSB7XHJcblx0XHRcdFx0Y29uc3Qgb2xkQm9keUhlaWdodCA9ICQoJ2JvZHknKVswXS5zY3JvbGxIZWlnaHQgKyA4O1xyXG5cdFx0XHRcdGNvbnN0IGNhbGVuZGFyU2FmZUhlaWdodCA9IF90aGlzLiRjYWxlbmRhci5vdXRlckhlaWdodCgpICsgMzI7XHJcblxyXG5cdFx0XHRcdGNvbnN0IG5ld0hlaWdodCA9IG9sZEJvZHlIZWlnaHQgPiBjYWxlbmRhclNhZmVIZWlnaHQgPyBvbGRCb2R5SGVpZ2h0IDogY2FsZW5kYXJTYWZlSGVpZ2h0O1xyXG5cclxuXHRcdFx0XHQkKCc8ZGl2IGNsYXNzPVwiQ2FsZW5kYXJQb3B1cF9fT3ZlcmxheVwiPjwvZGl2PicpLmluc2VydEFmdGVyKF90aGlzLiRjYWxlbmRhcik7XHJcblxyXG5cdFx0XHRcdCQod2luZG93LmZyYW1lRWxlbWVudCkuYW5pbWF0ZSh7IG1pbkhlaWdodDogbmV3SGVpZ2h0IH0pO1xyXG5cdFx0XHRcdCQoJ2JvZHknKS5hbmltYXRlKHsgbWluSGVpZ2h0OiBuZXdIZWlnaHQgfSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuJGlucHV0Lm9uKCdoaWRlLmRhdGVyYW5nZXBpY2tlcicsIGZ1bmN0aW9uKGV2ZW50LCBwaWNrZXIpIHtcclxuXHRcdFx0X3RoaXMuJGNhbGVuZGFyLmZpbmQoJy5EYXRlVGltZVJhbmdlUGlja2VyLWNhbGVuZGFyLWNsZWFyJykucmVtb3ZlKCk7XHJcblx0XHRcdF90aGlzLnVwZGF0ZVBhcmVudElmcmFtZSgpO1xyXG5cclxuXHRcdFx0aWYgKF90aGlzLmNvbmZpZy5jc3NDbGFzcyA9PT0gJ0NhbGVuZGFyUG9wdXAnICYmIHdpbmRvdy5mcmFtZUVsZW1lbnQpIHtcclxuXHRcdFx0XHQkKHdpbmRvdy5mcmFtZUVsZW1lbnQpLmNzcyh7IG1pbkhlaWdodDogJ3Vuc2V0JyB9KTtcclxuXHRcdFx0XHQkKCdib2R5JykuY3NzKHsgbWluSGVpZ2h0OiAndW5zZXQnIH0pO1xyXG5cclxuXHRcdFx0XHQkKCcuQ2FsZW5kYXJQb3B1cF9fT3ZlcmxheScpLnJlbW92ZSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLiRpbnB1dC5vbignY2FuY2VsLmRhdGVyYW5nZXBpY2tlcicsIGZ1bmN0aW9uKGV2ZW50LCBwaWNrZXIpIHt9KTtcclxuXHJcblx0XHR0aGlzLiRpbnB1dC5vbignb3V0c2lkZUNsaWNrLmRhdGVyYW5nZXBpY2tlcicsIGZ1bmN0aW9uKGV2ZW50LCBwaWNrZXIpIHt9KTtcclxuXHJcblx0XHR0aGlzLiRpbnB1dC5vbigndGltZWNoYW5nZWQuZGF0ZXJhbmdlcGlja2VyJywgZnVuY3Rpb24oZXZlbnQsIHBpY2tlcikge1xyXG5cdFx0XHRfdGhpcy5pc0VtcHR5SG91ciA9IGZhbHNlO1xyXG5cdFx0XHRfdGhpcy4kdGltZUhvbGRlci5jc3MoJ29wYWNpdHknLCAxKTtcclxuXHRcdFx0aWYgKF90aGlzLmNvbmZpZy5oYXNDbGVhckhvdXIpIHtcclxuXHRcdFx0XHRfdGhpcy4kY2FsZW5kYXIuZmluZCgnLmNhbGVuZGFyLXRpbWUnKS5hcHBlbmQoJzxzcGFuIGNsYXNzPVwiRGF0ZVRpbWVSYW5nZVBpY2tlci1jYWxlbmRhci1jbGVhclwiPjwvc3Bhbj4nKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoX3RoaXMuY29uZmlnLmF1dG9BcHBseSkge1xyXG5cdFx0XHRcdF90aGlzLiRjbGVhci5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKTtcclxuXHRcdFx0XHRfdGhpcy51cGRhdGVMYWJlbGluZygpO1xyXG5cdFx0XHRcdF90aGlzLnNlbmROb3RpZmljYXRpb24oKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy4kaW5wdXQub24oJ2NsaWNrRGF0ZS5kYXRlcmFuZ2VwaWNrZXInLCBmdW5jdGlvbihldmVudCwgcGlja2VyKSB7XHJcblx0XHRcdGlmIChfdGhpcy5jb25maWcuYXV0b0FwcGx5KSB7XHJcblx0XHRcdFx0X3RoaXMuJGNsZWFyLnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpO1xyXG5cdFx0XHRcdF90aGlzLnVwZGF0ZUxhYmVsaW5nKCk7XHJcblx0XHRcdFx0X3RoaXMuc2VuZE5vdGlmaWNhdGlvbigpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLiRpbnB1dC5vbignYXBwbHkuZGF0ZXJhbmdlcGlja2VyJywgZnVuY3Rpb24oZXZlbnQsIHBpY2tlcikge1xyXG5cdFx0XHRcclxuXHRcdFx0aWYoX3RoaXMuY29uZmlnLmF1dG9BcHBseSAmJiBfdGhpcy5jb25maWcuYXR0YWNoVG9JbnB1dCl7XHJcblx0XHRcdFx0X3RoaXMuJG1vZGVsLnRyaWdnZXIoJ2NoYW5nZScpOy8vc2FtZSBmaXggYXMgYmVsb3cgZm9yIHdoZW4gdGhlIGRhdGUgaXMgdGhlIHNhbWUvdG9kYXksIHdoZW4gaW5wdXQgaXMgYXR0YWNoZWQgaXQgc2VlbXMgd2UgYWxzbyBuZWVkIHRoaXMgZXh0cmEgc3RlcFxyXG5cdFx0XHR9XHJcblx0XHRcdF90aGlzLiRpbnB1dC50cmlnZ2VyKCdjaGFuZ2UnKTsgLy8gRml4IHRvIGNhbGwgdGhlIGNoYW5nZSB3aGVuIHRoZSBkYXRlIGlzIHRoZSBzYW1lL3RvZGF5XHJcblx0XHRcdF90aGlzLiRjbGVhci5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKTtcclxuXHRcdFx0X3RoaXMudXBkYXRlTGFiZWxpbmcoKTtcclxuXHRcdFx0X3RoaXMuc2VuZE5vdGlmaWNhdGlvbigpO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0RGF0ZVRpbWVSYW5nZVBpY2tlci5wcm90b3R5cGUuY3VzdG9tRXZlbnRzID0gZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgX3RoaXMgPSB0aGlzO1xyXG5cdFx0dGhpcy4kbGFiZWwub2ZmKCdjbGljaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdF90aGlzLnBpY2tlci50b2dnbGUoKTtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy4kY2xlYXIub2ZmKCdjbGljaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdF90aGlzLmNsZWFyKCk7XHJcblx0XHRcdF90aGlzLnBpY2tlci5oaWRlKCk7XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuJGNhbGVuZGFyLm9uKCdjbGljaycsICcuRGF0ZVRpbWVSYW5nZVBpY2tlci1jYWxlbmRhci1jbGVhcicsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpZiAoX3RoaXMuY29uZmlnLnRpbWVQaWNrZXIyNEhvdXIpIHtcclxuXHRcdFx0XHRfdGhpcy4kY2FsZW5kYXJcclxuXHRcdFx0XHRcdC5maW5kKCcuaG91cnNlbGVjdCcpXHJcblx0XHRcdFx0XHQudmFsKCcwJylcclxuXHRcdFx0XHRcdC50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRfdGhpcy4kY2FsZW5kYXJcclxuXHRcdFx0XHRcdC5maW5kKCcuaG91cnNlbGVjdCcpXHJcblx0XHRcdFx0XHQudmFsKCcxMicpXHJcblx0XHRcdFx0XHQudHJpZ2dlcignY2hhbmdlJyk7XHJcblx0XHRcdH1cclxuXHRcdFx0X3RoaXMuJGNhbGVuZGFyXHJcblx0XHRcdFx0LmZpbmQoJy5taW51dGVzZWxlY3QnKVxyXG5cdFx0XHRcdC52YWwoJzAnKVxyXG5cdFx0XHRcdC50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuXHRcdFx0X3RoaXMuJGNhbGVuZGFyXHJcblx0XHRcdFx0LmZpbmQoJy5hbXBtc2VsZWN0JylcclxuXHRcdFx0XHQudmFsKCdBTScpXHJcblx0XHRcdFx0LnRyaWdnZXIoJ2NoYW5nZScpO1xyXG5cdFx0XHRfdGhpcy5pc0VtcHR5SG91ciA9IHRydWU7XHJcblx0XHRcdF90aGlzLiR0aW1lSG9sZGVyLmNzcygnb3BhY2l0eScsIDAuNSk7XHJcblx0XHRcdF90aGlzLiRjYWxlbmRhci5maW5kKCcuRGF0ZVRpbWVSYW5nZVBpY2tlci1jYWxlbmRhci1jbGVhcicpLmFkZENsYXNzKCdkaXNhYmxlZCcpO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLiRjYWxlbmRhci5vbignY2xpY2snLCAnLkRhdGVUaW1lUmFuZ2VQaWNrZXItY2FsZW5kYXItZ290b2RheScsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRfdGhpcy5waWNrZXIuc2V0U3RhcnREYXRlKG1vbWVudCgpKTtcclxuXHRcdFx0X3RoaXMucGlja2VyLnNldEVuZERhdGUobW9tZW50KCkpO1xyXG5cclxuXHRcdFx0X3RoaXMucGlja2VyLmhpZGUoKTtcclxuXHJcblx0XHRcdGlmICghX3RoaXMuY29uZmlnLmF1dG9VcGRhdGVJbnB1dCB8fCBfdGhpcy5jb25maWcuaGFzVGV4dFRyaWdnZXIgfHwgX3RoaXMuY29uZmlnLmF0dGFjaFRvSW5wdXQpIHtcclxuXHRcdFx0XHRfdGhpcy51cGRhdGVMYWJlbGluZygpO1xyXG5cdFx0XHRcdF90aGlzLiRtb2RlbCAmJiBfdGhpcy4kbW9kZWwudHJpZ2dlcignY2hhbmdlJyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdF90aGlzLnNlbmROb3RpZmljYXRpb24oKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGlmICh0aGlzLmNvbmZpZy5hdHRhY2hUb0lucHV0KSB7XHJcblx0XHRcdC8vIE5vdGhpbmdcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuJGlucHV0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0X3RoaXMudXBkYXRlUGFyZW50SWZyYW1lKCk7XHJcblx0XHRcdFx0fSwgNTApO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLiRpbnB1dC5vbignYmx1cicsIGZ1bmN0aW9uKGV2dCkge1xyXG5cdFx0XHRfdGhpcy5zZW5kTm90aWZpY2F0aW9uKCk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHREYXRlVGltZVJhbmdlUGlja2VyLnByb3RvdHlwZS51cGRhdGVMYWJlbGluZyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIGxhYmVsTWFzayA9IHRoaXMuY29uZmlnLmZvcm1hdExhYmVsO1xyXG5cdFx0dmFyIGlucHV0TWFzayA9IHRoaXMuY29uZmlnLmZvcm1hdElucHV0O1xyXG5cclxuXHRcdGlmIChtb21lbnQodGhpcy5waWNrZXIuc3RhcnREYXRlKS5pc1NhbWUobW9tZW50KCksICdkYXknKSkge1xyXG5cdFx0XHRpZiAobGFiZWxNYXNrLmluY2x1ZGVzKCdEIE1NTSBZWVlZJykpIHtcclxuXHRcdFx0XHRsYWJlbE1hc2sgPSBsYWJlbE1hc2sucmVwbGFjZSgnRCBNTU0gWVlZWScsICdbVG9kYXksXSBEIE1NTSBZWVlZJyk7XHJcblx0XHRcdH0gZWxzZSBpZiAobGFiZWxNYXNrLmluY2x1ZGVzKCdEIE1NTScpKSB7XHJcblx0XHRcdFx0bGFiZWxNYXNrID0gbGFiZWxNYXNrLnJlcGxhY2UoJ0QgTU1NJywgJ1tUb2RheV0nKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuaXNFbXB0eUhvdXIpIHtcclxuXHRcdFx0bGFiZWxNYXNrID0gbGFiZWxNYXNrLnJlcGxhY2UoJ2hoOm1tIEEnLCAnWy0tOi0tXScpLnJlcGxhY2UoJ0hIOm1tJywgJ1stLTotLV0nKTtcclxuXHRcdFx0aW5wdXRNYXNrID0gaW5wdXRNYXNrLnJlcGxhY2UoJ2hoOm1tIEEnLCAnWy0tOi0tXScpLnJlcGxhY2UoJ0hIOm1tJywgJ1stLTotLV0nKTtcclxuXHJcblx0XHRcdGlmICh0aGlzLmNvbmZpZy5oYXNUZXh0VHJpZ2dlcikge1xyXG5cdFx0XHRcdHRoaXMuJGxhYmVsLmh0bWwodGhpcy5jb25maWcucHJlZml4VGV4dFRyaWdnZXIgKyB0aGlzLnBpY2tlci5zdGFydERhdGUuZm9ybWF0KGxhYmVsTWFzaykpO1xyXG5cclxuXHRcdFx0XHRpZiAodGhpcy5jb25maWcudGltZVBpY2tlcikge1xyXG5cdFx0XHRcdFx0dGhpcy4kaW5wdXQudmFsKHRoaXMucGlja2VyLnN0YXJ0RGF0ZS5mb3JtYXQoYCR7dGhpcy5jb25maWcuc3lzdGVtRGF0ZUZvcm1hdH0gWzAwOjAwOjAwXWApKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy4kaW5wdXQudmFsKHRoaXMucGlja2VyLnN0YXJ0RGF0ZS5mb3JtYXQodGhpcy5jb25maWcuc3lzdGVtRGF0ZUZvcm1hdCkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLiRpbnB1dC52YWwodGhpcy5waWNrZXIuc3RhcnREYXRlLmZvcm1hdChgJHt0aGlzLmNvbmZpZy5zeXN0ZW1EYXRlRm9ybWF0fSBbMDA6MDA6MDBdYCkpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAodGhpcy5jb25maWcuaGFzVGV4dFRyaWdnZXIpIHtcclxuXHRcdFx0XHR0aGlzLiRsYWJlbC5odG1sKHRoaXMuY29uZmlnLnByZWZpeFRleHRUcmlnZ2VyICsgdGhpcy5waWNrZXIuc3RhcnREYXRlLmZvcm1hdChsYWJlbE1hc2spKTtcclxuXHRcdFx0XHR0aGlzLiRpbnB1dC52YWwodGhpcy5waWNrZXIuc3RhcnREYXRlLmZvcm1hdChpbnB1dE1hc2spKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpZiAodGhpcy5jb25maWcuYXR0YWNoVG9JbnB1dCkge1xyXG5cdFx0XHRcdFx0aWYgKHRoaXMuY29uZmlnLnNpbmdsZURhdGVQaWNrZXIpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy4kaW5wdXQudmFsKHRoaXMucGlja2VyLnN0YXJ0RGF0ZS5mb3JtYXQoaW5wdXRNYXNrKSk7XHJcblx0XHRcdFx0XHRcdGlmICh0aGlzLmNvbmZpZy50aW1lUGlja2VyKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy4kbW9kZWwgJiYgdGhpcy4kbW9kZWwudmFsKHRoaXMucGlja2VyLnN0YXJ0RGF0ZS5mb3JtYXQoYCR7dGhpcy5jb25maWcuc3lzdGVtRGF0ZUZvcm1hdH0gSEg6bW06c3NgKSk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy4kbW9kZWwgJiYgdGhpcy4kbW9kZWwudmFsKHRoaXMucGlja2VyLnN0YXJ0RGF0ZS5mb3JtYXQodGhpcy5jb25maWcuc3lzdGVtRGF0ZUZvcm1hdCkpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRjb25zdCBzdGFydERhdGUgPSB0aGlzLnBpY2tlci5zdGFydERhdGUuZm9ybWF0KGlucHV0TWFzayk7XHJcblx0XHRcdFx0XHRcdGNvbnN0IGVuZERhdGUgPSB0aGlzLnBpY2tlci5lbmREYXRlLmZvcm1hdChpbnB1dE1hc2spO1xyXG5cclxuXHRcdFx0XHRcdFx0dGhpcy4kaW5wdXQudmFsKGAke3N0YXJ0RGF0ZX0gIMK3ICAke2VuZERhdGV9YCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGlmICh0aGlzLmNvbmZpZy5zaW5nbGVEYXRlUGlja2VyKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuJGlucHV0LnZhbCh0aGlzLnBpY2tlci5zdGFydERhdGUuZm9ybWF0KHRoaXMuY29uZmlnLmZvcm1hdElucHV0KSk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRsZXQgc3RhcnREYXRlID0gdGhpcy5waWNrZXIuc3RhcnREYXRlLmZvcm1hdCh0aGlzLmNvbmZpZy5mb3JtYXRJbnB1dCk7XHJcblx0XHRcdFx0XHRcdGxldCBlbmREYXRlID0gdGhpcy5waWNrZXIuZW5kRGF0ZS5mb3JtYXQodGhpcy5jb25maWcuZm9ybWF0SW5wdXQpO1xyXG5cclxuXHRcdFx0XHRcdFx0dGhpcy4kaW5wdXQudmFsKGAke3N0YXJ0RGF0ZX0gIMK3ICAke2VuZERhdGV9YCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0RGF0ZVRpbWVSYW5nZVBpY2tlci5wcm90b3R5cGUuaGFuZGxlVmlld3BvcnRQb3NpdGlvbiA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKFxyXG5cdFx0XHR3aW5kb3cuZnJhbWVFbGVtZW50ICYmXHJcblx0XHRcdCgkKHdpbmRvdy5mcmFtZUVsZW1lbnQucGFyZW50RWxlbWVudCkuaGFzQ2xhc3MoJ3Rvb2x0aXBzdGVyLWNvbnRlbnQnKSB8fFxyXG5cdFx0XHRcdCQod2luZG93LmZyYW1lRWxlbWVudC5wYXJlbnRFbGVtZW50KS5oYXNDbGFzcygnb3MtaW50ZXJuYWwtdWktZGlhbG9nLWNvbnRlbnQnKSlcclxuXHRcdCkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCF0aGlzLmlzSW5WaWV3cG9ydCgpKSB7XHJcblx0XHRcdHZhciBjb29yZHMgPSB0aGlzLiRjYWxlbmRhclswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdFx0aWYgKHRoaXMuJGNhbGVuZGFyLmhhc0NsYXNzKCdkcm9wLXVwJykgJiYgdGhpcy4kY2FsZW5kYXJbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIDwgMCkge1xyXG5cdFx0XHRcdHZhciBwb2ludCA9IHdpbmRvdy5zY3JvbGxZICsgY29vcmRzLmJvdHRvbSArIHRoaXMuJGlucHV0LmhlaWdodCgpICsgNztcclxuXHRcdFx0XHR0aGlzLiRjYWxlbmRhclxyXG5cdFx0XHRcdFx0LnJlbW92ZUNsYXNzKCdkcm9wLXVwJylcclxuXHRcdFx0XHRcdC5hZGRDbGFzcygnZHJvcC1kb3duJylcclxuXHRcdFx0XHRcdC5jc3MoJ3RvcCcsIHBvaW50KTtcclxuXHRcdFx0fSBlbHNlIGlmIChcclxuXHRcdFx0XHQhdGhpcy4kY2FsZW5kYXIuaGFzQ2xhc3MoJ2Ryb3AtdXAnKSAmJlxyXG5cdFx0XHRcdHRoaXMuJGNhbGVuZGFyWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSA+ICh3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodClcclxuXHRcdFx0KSB7XHJcblx0XHRcdFx0dmFyIHBvaW50ID0gd2luZG93LnNjcm9sbFkgKyBjb29yZHMudG9wIC0gY29vcmRzLmhlaWdodCAtIHRoaXMuJGlucHV0LmhlaWdodCgpIC0gNztcclxuXHRcdFx0XHR0aGlzLiRjYWxlbmRhci5hZGRDbGFzcygnZHJvcC11cCcpLmNzcygndG9wJywgcG9pbnQpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0RGF0ZVRpbWVSYW5nZVBpY2tlci5wcm90b3R5cGUuaXNJblZpZXdwb3J0ID0gZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgYm91bmRpbmcgPSB0aGlzLiRjYWxlbmRhclswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdGJvdW5kaW5nLnRvcCA+PSAwICYmIGJvdW5kaW5nLmJvdHRvbSA8PSAod2luZG93LmlubmVySGVpZ2h0ICsgNSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ICsgNSlcclxuXHRcdCk7XHJcblx0fTtcclxuXHJcblx0RGF0ZVRpbWVSYW5nZVBpY2tlci5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbihzZW5kTm90aWZpY2F0aW9uKSB7XHJcblx0XHR0aGlzLnBpY2tlci5zZXRTdGFydERhdGUobW9tZW50KCkpO1xyXG5cdFx0dGhpcy5waWNrZXIuc2V0RW5kRGF0ZShtb21lbnQoKSk7XHJcblx0XHR0aGlzLmlzRW1wdHlIb3VyID0gZmFsc2U7XHJcblx0XHR0aGlzLiRjbGVhci5hZGRDbGFzcygnZGlzYWJsZWQnKTtcclxuXHRcdGlmICh0aGlzLmNvbmZpZy5oYXNUZXh0VHJpZ2dlcikge1xyXG5cdFx0XHR0aGlzLiRsYWJlbC5odG1sKCctLSAtLSAtLScpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy4kaW5wdXQudmFsKCcnKTtcclxuXHRcdH1cclxuXHRcdGlmIChzZW5kTm90aWZpY2F0aW9uIHx8IHNlbmROb3RpZmljYXRpb24gPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdHRoaXMuc2VuZE5vdGlmaWNhdGlvbihmYWxzZSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0RGF0ZVRpbWVSYW5nZVBpY2tlci5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0dGhpcy5waWNrZXIuc2hvdygpO1xyXG5cdH07XHJcblxyXG5cdERhdGVUaW1lUmFuZ2VQaWNrZXIucHJvdG90eXBlLmhpZGUgPSBmdW5jdGlvbigpIHtcclxuXHRcdHRoaXMucGlja2VyLmhpZGUoKTtcclxuXHR9O1xyXG5cclxuXHREYXRlVGltZVJhbmdlUGlja2VyLnByb3RvdHlwZS5jYW5jZWwgPSBmdW5jdGlvbigpIHtcclxuXHRcdHRoaXMucGlja2VyLmNsaWNrQ2FuY2VsKCk7XHJcblx0fTtcclxuXHJcblx0RGF0ZVRpbWVSYW5nZVBpY2tlci5wcm90b3R5cGUuc2VuZE5vdGlmaWNhdGlvbiA9IGZ1bmN0aW9uKHNlbmREYXRlKSB7XHJcblx0XHRpZiAodGhpcy4kd2lkZ2V0Lmhhc0NsYXNzKCdhdHRhY2hlZElucHV0JykpIHtcclxuXHRcdFx0dGhpcy4kaW5wdXQudHJpZ2dlcignY2hhbmdlJyk7XHJcblxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHNlbmREYXRlIHx8IHNlbmREYXRlID09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRpZiAodGhpcy5pc0VtcHR5SG91cikge1xyXG5cdFx0XHRcdE9zTm90aWZ5V2lkZ2V0KFxyXG5cdFx0XHRcdFx0dGhpcy5jb25maWcuZGF0ZVRpbWVSYW5nZVBpY2tlckZha2VOb3RpZnlJZCxcclxuXHRcdFx0XHRcdHRoaXMucGlja2VyLnN0YXJ0RGF0ZS5mb3JtYXQoYCR7dGhpcy5jb25maWcuc3lzdGVtRGF0ZUZvcm1hdH0gWzAwOjAwOjAwXWApICsgJ3wnICsgdGhpcy5pc0VtcHR5SG91clxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuY29uZmlnLnRpbWVQaWNrZXIpIHtcclxuXHRcdFx0XHRcdE9zTm90aWZ5V2lkZ2V0KFxyXG5cdFx0XHRcdFx0XHR0aGlzLmNvbmZpZy5kYXRlVGltZVJhbmdlUGlja2VyRmFrZU5vdGlmeUlkLFxyXG5cdFx0XHRcdFx0XHR0aGlzLnBpY2tlci5zdGFydERhdGUuZm9ybWF0KGAke3RoaXMuY29uZmlnLnN5c3RlbURhdGVGb3JtYXR9IEhIOm1tOnNzYCkgKyAnfCcgKyB0aGlzLmlzRW1wdHlIb3VyXHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRPc05vdGlmeVdpZGdldChcclxuXHRcdFx0XHRcdFx0dGhpcy5jb25maWcuZGF0ZVRpbWVSYW5nZVBpY2tlckZha2VOb3RpZnlJZCxcclxuXHRcdFx0XHRcdFx0dGhpcy5waWNrZXIuc3RhcnREYXRlLmZvcm1hdCh0aGlzLmNvbmZpZy5zeXN0ZW1EYXRlRm9ybWF0KSArICd8JyArIHRoaXMuaXNFbXB0eUhvdXJcclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRPc05vdGlmeVdpZGdldCh0aGlzLmNvbmZpZy5kYXRlVGltZVJhbmdlUGlja2VyRmFrZU5vdGlmeUlkLCAnbnVsbHx0cnVlJyk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0RGF0ZVRpbWVSYW5nZVBpY2tlci5wcm90b3R5cGUudXBkYXRlUGFyZW50SWZyYW1lID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAodHlwZW9mIFNhcHBoaXJlV2lkZ2V0cy5SZXNpemVQYXJlbnRJZnJhbWUgPT09ICdvYmplY3QnKSB7XHJcblx0XHRcdFNhcHBoaXJlV2lkZ2V0cy5SZXNpemVQYXJlbnRJZnJhbWUucmVzaXplKCk7XHJcblx0XHR9XHJcblx0XHRpZiAoJCgnLlBhZ2UuTGF5b3V0UG9wdXAnKS5sZW5ndGggPT09IDEpIHtcclxuXHRcdFx0U2FwcGhpcmVXaWRnZXRzLkxheW91dFBvcHVwLnJlZHJhd0RpYWxvZ1dpbmRvdygpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdFNhcHBoaXJlV2lkZ2V0cy5EYXRlVGltZVJhbmdlUGlja2VyID0ge1xyXG5cdFx0Y3JlYXRlOiBjcmVhdGUsXHJcblx0XHRhbGw6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZXR1cm4gYWxsRGF0ZVRpbWVSYW5nZVBpY2tlcnM7XHJcblx0XHR9LFxyXG5cdH07XHJcbn0pKGpRdWVyeSwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKTtcclxuIiwiLyogQ29tcG9uZW50IERyYWdEcm9wQXJlYSAqL1xyXG4oZnVuY3Rpb24oJCwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKSB7XHJcblx0dmFyIGRyYWdEcm9wQXJlYVdpZGdldDtcclxuXHJcblx0dmFyIGNyZWF0ZSA9IGZ1bmN0aW9uKGNvbmZpZykge1xyXG5cdFx0d2luZG93W2NvbmZpZy5kcmFnRHJvcEFyZWFJZF0gPSBuZXcgRHJhZ0Ryb3BBcmVhKGNvbmZpZyk7XHJcblx0XHRkcmFnRHJvcEFyZWFXaWRnZXQgPSB3aW5kb3dbY29uZmlnLmRyYWdEcm9wQXJlYUlkXTtcclxuXHJcblx0XHQkKHdpbmRvdykubG9hZChmdW5jdGlvbigpIHtcclxuXHRcdFx0b3NBamF4QmFja2VuZC5CaW5kQWZ0ZXJBamF4UmVxdWVzdChTYXBwaGlyZVdpZGdldHMuRHJhZ0Ryb3BBcmVhLnJlZnJlc2hEcmFnRHJvcCk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHR2YXIgcmVmcmVzaERyYWdEcm9wID0gZnVuY3Rpb24oKSB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRkcmFnRHJvcEFyZWFXaWRnZXQuc2V0dXBEcmFnZ2FibGUoKTtcclxuXHRcdFx0ZHJhZ0Ryb3BBcmVhV2lkZ2V0LnNldHVwRHJvcHBhYmxlKCk7XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHR2YXIgRHJhZ0Ryb3BBcmVhID0gZnVuY3Rpb24oY29uZmlnKSB7XHJcblx0XHR2YXIgX3RoaXMgPSB0aGlzO1xyXG5cdFx0dGhpcy5jb25maWcgPSBjb25maWc7XHJcblx0XHR0aGlzLiRhcmVhID0gJCgnIycgKyBjb25maWcuZHJhZ0Ryb3BBcmVhSWQpO1xyXG5cdFx0dGhpcy4kYXJlYS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcclxuXHRcdHRoaXMuc2tpbiA9IGNvbmZpZy5za2luO1xyXG5cdFx0dGhpcy5mYWtlTm90aWZ5V2lkZ2V0SWQgPSBjb25maWcuZmFrZU5vdGlmeVdpZGdldElkO1xyXG5cdFx0dGhpcy5zZXR1cERyb3BwYWJsZSgpO1xyXG5cdFx0aWYgKGNvbmZpZy5zb3J0YWJsZSkge1xyXG5cdFx0XHR0aGlzLnNldHVwU29ydGFibGUoKTtcclxuXHRcdH1cclxuXHRcdHRoaXMuc2V0dXBEcmFnZ2FibGUoKTtcclxuXHRcdHRoaXMuYXR0YWNoRXZlbnRzKCk7XHJcblx0XHR0aGlzLiRhcmVhLmZpbmQoJy5EcmFnRHJvcC1kcm9wcGFibGUnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRfdGhpcy5oYW5kbGVEcm9wcGFibGUoJCh0aGlzKSk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHREcmFnRHJvcEFyZWEucHJvdG90eXBlLnNldHVwRHJhZ2dhYmxlID0gZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgX3RoaXMgPSB0aGlzO1xyXG5cclxuXHRcdHRoaXMuJGFyZWEuZmluZCgnLkRyYWdEcm9wLWRyYWdnYWJsZScpLmRyYWdnYWJsZSh7XHJcblx0XHRcdGRpc2FibGVkOiB0aGlzLmNvbmZpZy5kaXNhYmxlZCxcclxuXHRcdFx0Y29udGFpbm1lbnQ6IHRoaXMuJGFyZWEsXHJcblx0XHRcdHNjb3BlOiB0aGlzLmNvbmZpZy5kcmFnRHJvcEFyZWFJZCxcclxuXHRcdFx0ZGVsYXk6IDAsXHJcblx0XHRcdHNjcm9sbDogdHJ1ZSxcclxuXHRcdFx0cmV2ZXJ0OiAnaW52YWxpZCcsXHJcblx0XHRcdHJldmVydER1cmF0aW9uOiAwLFxyXG5cdFx0XHRjb25uZWN0VG9Tb3J0YWJsZTogJy5EcmFnRHJvcC1kcm9wcGFibGUnLFxyXG5cdFx0XHRzdG9wOiBmdW5jdGlvbihldmVudCwgdWkpIHtcclxuXHRcdFx0XHRpZiAodWkuaGVscGVyLmhhc0NsYXNzKCd1aS1kcmFnZ2FibGUtZHJhZ2dpbmcnKSkge1xyXG5cdFx0XHRcdFx0Y29uc3QgJHRhcmdldCA9IF90aGlzLiRhcmVhLmZpbmQoJy51aS1kcm9wcGFibGUudWktc29ydGFibGUnKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoX3RoaXMuc2tpbiA9PT0gJ1RlYW1zJykge1xyXG5cdFx0XHRcdFx0XHQvLyQodWkuaGVscGVyKS5oaWRlKCk7XHJcblx0XHRcdFx0XHRcdE9zTm90aWZ5V2lkZ2V0KCR0YXJnZXQuZGF0YSgnZmFrZW5vdGlmeScpLCB1aS5oZWxwZXIuZGF0YSgnaXRlbXR5cGUnKSArICd8JyArIHVpLmhlbHBlci5kYXRhKCdpdGVtaWQnKSk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRPc05vdGlmeVdpZGdldChcclxuXHRcdFx0XHRcdFx0XHQkdGFyZ2V0LmRhdGEoJ2Zha2Vub3RpZnknKSxcclxuXHRcdFx0XHRcdFx0XHRfdGhpcy4kYXJlYS5maW5kKCcuRHJhZ0Ryb3AtZHJhZ2dhYmxlLXBsYWNlaG9sZGVyJykuaW5kZXgoKSArICd8JyArIHVpLmhlbHBlci5kYXRhKCdpdGVtaWQnKVxyXG5cdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdERyYWdEcm9wQXJlYS5wcm90b3R5cGUuc2V0dXBEcm9wcGFibGUgPSBmdW5jdGlvbigpIHtcclxuXHRcdHZhciBfdGhpcyA9IHRoaXM7XHJcblx0XHR0aGlzLiRhcmVhLmZpbmQoJy5EcmFnRHJvcC1kcm9wcGFibGUnKS5kcm9wcGFibGUoe1xyXG5cdFx0XHRob3ZlckNsYXNzOiAnaG92ZXJlZCcsXHJcblx0XHRcdGFkZENsYXNzZXM6IHRydWUsXHJcblx0XHRcdGRpc2FibGVkOiB0aGlzLmNvbmZpZy5kaXNhYmxlZCxcclxuXHRcdFx0c2NvcGU6IHRoaXMuY29uZmlnLmRyYWdEcm9wQXJlYUlkLFxyXG5cdFx0XHR0b2xlcmFuY2U6ICdwb2ludGVyJyxcclxuXHRcdFx0ZHJvcDogZnVuY3Rpb24oZXZlbnQsIHVpKSB7XHJcblx0XHRcdFx0aWYgKF90aGlzLnNraW4gPT09ICdUZWFtcycpIHtcclxuXHRcdFx0XHRcdCQodWkuZHJhZ2dhYmxlKS5oaWRlKCk7XHJcblx0XHRcdFx0XHRPc05vdGlmeVdpZGdldChcclxuXHRcdFx0XHRcdFx0JChldmVudC50YXJnZXQpLmRhdGEoJ2Zha2Vub3RpZnknKSxcclxuXHRcdFx0XHRcdFx0dWkuZHJhZ2dhYmxlLmRhdGEoJ2l0ZW10eXBlJykgKyAnfCcgKyB1aS5kcmFnZ2FibGUuZGF0YSgnaXRlbWlkJylcclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdE9zTm90aWZ5V2lkZ2V0KFxyXG5cdFx0XHRcdFx0XHQkKGV2ZW50LnRhcmdldCkuZGF0YSgnZmFrZW5vdGlmeScpLFxyXG5cdFx0XHRcdFx0XHRfdGhpcy4kYXJlYS5maW5kKCcuRHJhZ0Ryb3AtZHJhZ2dhYmxlLXBsYWNlaG9sZGVyJykuaW5kZXgoKSArICd8JyArIHVpLmRyYWdnYWJsZS5kYXRhKCdpdGVtaWQnKVxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHREcmFnRHJvcEFyZWEucHJvdG90eXBlLnNldHVwU29ydGFibGUgPSBmdW5jdGlvbigpIHtcclxuXHRcdHRoaXMuJGFyZWEuZmluZCgnLkRyYWdEcm9wLWRyb3BwYWJsZScpLnNvcnRhYmxlKHtcclxuXHRcdFx0ZGlzYWJsZWQ6IHRoaXMuY29uZmlnLmRpc2FibGVkLFxyXG5cdFx0XHRmb3JjZVBsYWNlaG9sZGVyU2l6ZTogdHJ1ZSxcclxuXHRcdFx0Y29udGFpbm1lbnQ6IHRoaXMuJGFyZWEsXHJcblx0XHRcdHRvbGVyYW5jZTogJ3BvaW50ZXInLFxyXG5cdFx0XHRyZXZlcnQ6IDIwMCxcclxuXHRcdFx0aXRlbXM6ICcuRHJhZ0Ryb3AtZHJvcHBhYmxlLWl0ZW1zIC5EcmFnRHJvcC1kcmFnZ2FibGUnLFxyXG5cdFx0XHRwbGFjZWhvbGRlcjogJ0RyYWdEcm9wLWRyYWdnYWJsZS1wbGFjZWhvbGRlcicsXHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHREcmFnRHJvcEFyZWEucHJvdG90eXBlLmF0dGFjaEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIF90aGlzID0gdGhpcztcclxuXHRcdHRoaXMuJGFyZWEub24oJ2NsaWNrJywgJy5EcmFnRHJvcC1kcmFnZ2FibGUgaW5wdXQnLCBmdW5jdGlvbihldnQpIHtcclxuXHRcdFx0ZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuXHRcdFx0Y29uc3QgJGNoZWNrYm94ID0gJChldnQuY3VycmVudFRhcmdldCk7XHJcblx0XHRcdGNvbnN0ICRkcm9wcGFibGUgPSAkY2hlY2tib3guY2xvc2VzdCgnLkRyYWdEcm9wLWRyb3BwYWJsZScpO1xyXG5cdFx0XHRjb25zdCAkZHJhZ2dhYmxlID0gJGNoZWNrYm94LmNsb3Nlc3QoJy5EcmFnRHJvcC1kcmFnZ2FibGUnKTtcclxuXHRcdFx0Y29uc3QgJGFjdGlvbiA9ICRkcmFnZ2FibGUuZmluZCgnLkRyYWdEcm9wLWRyYWdnYWJsZS1zZWxlY3QtYWN0aW9uIGEnKTtcclxuXHJcblx0XHRcdCRhY3Rpb24udHJpZ2dlcignY2xpY2snKTtcclxuXHJcblx0XHRcdGlmICgkZHJvcHBhYmxlLmhhc0NsYXNzKCdhbGxvd011bHRpcGxlJykpIHtcclxuXHRcdFx0XHRpZiAoJGNoZWNrYm94LnByb3AoJ2NoZWNrZWQnKSkge1xyXG5cdFx0XHRcdFx0Ly8kY2hlY2tib3gucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuXHRcdFx0XHRcdCRkcmFnZ2FibGUuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdC8vJGNoZWNrYm94LnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcclxuXHRcdFx0XHRcdCRkcmFnZ2FibGUucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvL190aGlzLmhhbmRsZURyb3BwYWJsZSgkZHJvcHBhYmxlKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy4kYXJlYS5vbignY2xpY2snLCAnLkRyYWdEcm9wLWRyYWdnYWJsZS1zZWxlY3QtYWN0aW9uIGEnLCBmdW5jdGlvbihldnQpIHtcclxuXHRcdFx0ZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0RHJhZ0Ryb3BBcmVhLnByb3RvdHlwZS5oYW5kbGVEcm9wcGFibGUgPSBmdW5jdGlvbigkZHJvcHBhYmxlKSB7XHJcblx0XHRpZiAoJGRyb3BwYWJsZS5oYXNDbGFzcygnYWxsb3dNdWx0aXBsZScpKSB7XHJcblx0XHRcdHZhciAkYWN0aW9ucyA9ICRkcm9wcGFibGUuZmluZCgnLkRyYWdEcm9wLWRyb3BwYWJsZS1pbnRybycpO1xyXG5cdFx0XHR2YXIgY2hrU2VsZWN0ZWQgPSAkZHJvcHBhYmxlLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkJykubGVuZ3RoO1xyXG5cdFx0XHRpZiAoY2hrU2VsZWN0ZWQgPiAwKSB7XHJcblx0XHRcdFx0JGFjdGlvbnMuZmluZCgnYSwgYnV0dG9uJykuYXR0cignZGlzYWJsZWQnLCBmYWxzZSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0JGFjdGlvbnMuZmluZCgnYSwgYnV0dG9uJykuYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0JGRyb3BwYWJsZS5maW5kKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKS5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdFNhcHBoaXJlV2lkZ2V0cy5EcmFnRHJvcEFyZWEgPSB7XHJcblx0XHRjcmVhdGU6IGNyZWF0ZSxcclxuXHRcdHJlZnJlc2hEcmFnRHJvcDogcmVmcmVzaERyYWdEcm9wLFxyXG5cdH07XHJcbn0pKGpRdWVyeSwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKTtcclxuIiwiLyogQ29tcG9uZW50IERyb3Bkb3duQ2F0ZWdvcmllcyAqL1xyXG4oZnVuY3Rpb24gKCQsIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKSB7XHJcblx0ZnVuY3Rpb24gb3B0R3JvdXBTZXRWYWx1ZShzZWxlY3RJZCwgaW5wdXRCb3hJZCwgYnV0dG9uSWQpIHtcclxuXHRcdHZhciB2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0SWQpLnZhbHVlO1xyXG5cdFx0JCgnIycgKyBpbnB1dEJveElkKS52YWwodik7XHJcblx0XHQkKCcjJyArIHNlbGVjdElkICsgJyBvcHRpb25bc2VsZWN0ZWRdJykucmVtb3ZlQXR0cignc2VsZWN0ZWQnKTtcclxuXHJcblx0XHRpZiAodiAhPSAtMSkge1xyXG5cdFx0XHQkKCcjJyArIHNlbGVjdElkICsgJyBvcHRpb25bdmFsdWU9XCInICsgdiArICdcIl0nKS5hdHRyKCdzZWxlY3RlZCcsICdzZWxlY3RlZCcpO1xyXG5cdFx0fVxyXG5cclxuXHRcdCQoJyMnICsgYnV0dG9uSWQpLmNsaWNrKCk7XHJcblx0XHQkKCcjczJpZF8nICsgc2VsZWN0SWQpLnJlbW92ZUNsYXNzKCdzZWxlY3QyLWNvbnRhaW5lci1hY3RpdmUnKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIE9zQ3VzdG9tVmFsaWRhdG9yT3B0R3JvdXAoYSwgYikge1xyXG5cdFx0dmFyIF9lID0gJCgnIycgKyBhLmNvbnRyb2x0b3ZhbGlkYXRlKTtcclxuXHRcdHZhciBpc1ZhbGlkID0gX2UuZmluZCgnb3B0aW9uW3NlbGVjdGVkXScpLmxlbmd0aDtcclxuXHRcdHZhciBoYXNTaWJsaW5nX01hbmRhdG9yeVNlbGVjdDIgPSBfZS5wcmV2KCdkaXYuc2VsZWN0Mi1jb250YWluZXIuTWFuZGF0b3J5JykubGVuZ3RoO1xyXG5cclxuXHRcdGlmIChoYXNTaWJsaW5nX01hbmRhdG9yeVNlbGVjdDIpIHtcclxuXHRcdFx0aWYgKGlzVmFsaWQpIHtcclxuXHRcdFx0XHRfZS5wcmV2KCdkaXYuc2VsZWN0Mi1jb250YWluZXIuTWFuZGF0b3J5JykucmVtb3ZlQ2xhc3MoJ05vdF9WYWxpZCcpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdF9lLnByZXYoJ2Rpdi5zZWxlY3QyLWNvbnRhaW5lci5NYW5kYXRvcnknKS5hZGRDbGFzcygnTm90X1ZhbGlkJyk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gaXNWYWxpZDtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGFkZE9wdEdyb3VwVmFsaWRhdG9yKG9wdEdyb3VwRWxlbWVudElkKSB7XHJcblx0XHRPc1BhZ2VfVmFsaWRhdG9ycy5wdXNoKHtcclxuXHRcdFx0Y29udHJvbHRvdmFsaWRhdGU6IG9wdEdyb3VwRWxlbWVudElkLFxyXG5cdFx0XHRlbmFibGVkOiB0cnVlLFxyXG5cdFx0XHRlcnJvcm1lc3NhZ2U6ICdSZXF1aXJlZCBmaWVsZCEnLFxyXG5cdFx0XHRldmFsdWF0aW9uZnVuY3Rpb246ICdTYXBwaGlyZVdpZGdldHMuRHJvcGRvd25DYXRlZ29yaWVzLk9zQ3VzdG9tVmFsaWRhdG9yT3B0R3JvdXAnLFxyXG5cdFx0XHRpbml0aWFsdmFsdWU6ICcnLFxyXG5cdFx0XHRpc3ZhbGlkOiB0cnVlLFxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRTYXBwaGlyZVdpZGdldHMuRHJvcGRvd25DYXRlZ29yaWVzID0ge1xyXG5cdFx0b3B0R3JvdXBTZXRWYWx1ZSxcclxuXHRcdE9zQ3VzdG9tVmFsaWRhdG9yT3B0R3JvdXAsXHJcblx0XHRhZGRPcHRHcm91cFZhbGlkYXRvcixcclxuXHR9O1xyXG59KShqUXVlcnksIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKTsiLCIvKiBDb21wb25lbnQgRHJvcHpvbmUgKi9cclxuKGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cykge1xyXG5cdGNvbnN0IGNyZWF0ZSA9IGZ1bmN0aW9uKGNvbmZpZykge1xyXG5cdFx0d2luZG93LkRyb3B6b25lLmF1dG9EaXNjb3ZlciA9IGZhbHNlO1xyXG5cclxuXHRcdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRiaW5kRXZlbnRzKGNvbmZpZyk7XHJcblxyXG5cdFx0XHRjb25zdCBteURyb3B6b25lID0gbmV3IHdpbmRvdy5Ecm9wem9uZShjb25maWcuaGlkZGVuSW5wdXRDb250YWluZXIsIHtcclxuXHRcdFx0XHQuLi5jb25maWcsXHJcblx0XHRcdFx0aW5pdDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRsZXQgcHJldkZpbGU7XHJcblxyXG5cdFx0XHRcdFx0Y29uc3QgZmlsZXNMaXN0ID0gY29uZmlnLmZpbGVzTGlzdCA/IGNvbmZpZy5maWxlc0xpc3Quc3BsaXQoJywnKSA6IFtdO1xyXG5cclxuXHRcdFx0XHRcdGZvciAoY29uc3QgaXRlbSBvZiBmaWxlc0xpc3QpIHtcclxuXHRcdFx0XHRcdFx0Y29uc3QgbW9ja0ZpbGUgPSB7IG5hbWU6IGl0ZW0sIHNpemU6IDEyMzQ1Njc4IH07XHJcblxyXG5cdFx0XHRcdFx0XHR0aGlzLmVtaXQoJ2FkZGVkZmlsZScsIG1vY2tGaWxlKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5lbWl0KCdjb21wbGV0ZScsIG1vY2tGaWxlKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5maWxlcy5wdXNoKG1vY2tGaWxlKTtcclxuXHJcblx0XHRcdFx0XHRcdCQoYCR7Y29uZmlnLmhpZGRlbklucHV0Q29udGFpbmVyfSAuZHotZmlsZW5hbWVgKS5hdHRyKCd0aXRsZScsIGl0ZW0pO1xyXG5cclxuXHRcdFx0XHRcdFx0cHJldkZpbGUgPSBtb2NrRmlsZTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRpZiAoK2NvbmZpZy5tYXhGaWxlcyA9PT0gMSAmJiBjb25maWcuaXNSZXBsYWNlUHJldmlvdXMpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5vbignYWRkZWRmaWxlJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHByZXZGaWxlICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMucmVtb3ZlRmlsZShwcmV2RmlsZSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRjb25zdCAkbm90aWZ5SW5wdXQgPSAkKGAjJHtjb25maWcubm90aWZ5SW5wdXRJZH1gKTtcclxuXHJcblx0XHRcdFx0XHR0aGlzLm9uKCdzdWNjZXNzJywgZnVuY3Rpb24oZmlsZSwgcmVzcG9uc2VUZXh0KSB7XHJcblx0XHRcdFx0XHRcdHByZXZGaWxlID0gZmlsZTtcclxuXHJcblx0XHRcdFx0XHRcdCQoYCMke2NvbmZpZy5ub3RpZnlJbnB1dElkfSAuZHotZmlsZW5hbWVgKS5hdHRyKCd0aXRsZScsIGZpbGUubmFtZSk7XHJcblx0XHRcdFx0XHRcdCRub3RpZnlJbnB1dC52YWwocmVzcG9uc2VUZXh0KTtcclxuXHRcdFx0XHRcdFx0JG5vdGlmeUlucHV0LmNoYW5nZSgpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0dGhpcy5vbignZXJyb3InLCBmdW5jdGlvbihmaWxlLCByZXNwb25zZVRleHQpIHtcclxuXHRcdFx0XHRcdFx0cHJldkZpbGUgPSBmaWxlO1xyXG5cclxuXHRcdFx0XHRcdFx0JG5vdGlmeUlucHV0LnZhbChyZXNwb25zZVRleHQpO1xyXG5cdFx0XHRcdFx0XHQkbm90aWZ5SW5wdXQuY2hhbmdlKCk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGJpbmRFdmVudHMgPSBmdW5jdGlvbihjb25maWcpIHtcclxuXHRcdCQoYCMke2NvbmZpZy53aWRnZXRJZH0gLlVwbG9hZE1lc3NhZ2VDbGFzc2ApLm9uKCdjbGljaycsICgpID0+IHtcclxuXHRcdFx0JChgIyR7Y29uZmlnLndpZGdldElkfSAuZHotY2xpY2thYmxlYCkuY2xpY2soKTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdFNhcHBoaXJlV2lkZ2V0cy5Ecm9wem9uZSA9IHsgY3JlYXRlIH07XHJcbn0pKGpRdWVyeSwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKTtcclxuIiwiLyogQ29tcG9uZW50IEV4cGFuZGFibGVMaW5rICovXHJcbihmdW5jdGlvbigkLCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cykge1xyXG5cdGNvbnN0IGNyZWF0ZSA9IHdpZGdldElEID0+IHtcclxuXHRcdGNvbnN0ICRlbGVtZW50V3JhcHBlciA9ICQoYCMke3dpZGdldElEfWApO1xyXG5cclxuXHRcdGlmICgkZWxlbWVudFdyYXBwZXIucGFyZW50KCcuRXhwYW5kYWJsZUxpc3QnKS5oYXNDbGFzcygnSGlkZVdoZW5FbXB0eScpKSB7XHJcblx0XHRcdGNvbnN0IHRleHQgPSAkZWxlbWVudFdyYXBwZXIuZmluZCgnLkV4cGFuZGFibGVMaW5rX19Db250ZW50JykudGV4dCgpO1xyXG5cclxuXHRcdFx0aWYgKHRleHQubGVuZ3RoID09PSAwKSAkZWxlbWVudFdyYXBwZXIucGFyZW50KCcuRXhwYW5kYWJsZUxpc3QnKS5oaWRlKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0YmluZEV2ZW50cyh3aWRnZXRJRCk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgYmluZEV2ZW50cyA9IHdpZGdldElEID0+IHtcclxuXHRcdCQoYCMke3dpZGdldElEfSAuRXhwYW5kYWJsZUxpbmtfX0hlYWRlcmApLmNsaWNrKCgpID0+IG9wZW5DbG9zZShgIyR7d2lkZ2V0SUR9YCkpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IG9wZW5DbG9zZSA9IGVsZW1lbnRJRCA9PiB7XHJcblx0XHQvLyBXaGVuIHRoZSBleHBhbmRhYmxlcyBhcmUgaW5zaWRlIGEgY29udGFpbmVyIHdpdGggY2xhc3MgRXhwYW5kYWJsZUxpbmtHcm91cCwgd2lsbCBhY3QgbGlrZSBhIGV4cGFuZGFibGUgZ3JvdXBcclxuXHRcdGNvbnN0ICRsaW5rR3JvdXAgPSAkKGVsZW1lbnRJRCkuY2xvc2VzdCgnLkV4cGFuZGFibGVMaW5rR3JvdXAnKTtcclxuXHJcblx0XHRpZiAoJGxpbmtHcm91cC5sZW5ndGgpIHtcclxuXHRcdFx0Y29uc3QgJGV4cGFuZGFibGVzID0gJGxpbmtHcm91cC5maW5kKCcuRXhwYW5kYWJsZUxpbmstLWV4cGFuZGVkJykubm90KGVsZW1lbnRJRCk7XHJcblxyXG5cdFx0XHQkZXhwYW5kYWJsZXMucmVtb3ZlQ2xhc3MoJ0V4cGFuZGFibGVMaW5rLS1leHBhbmRlZCcpO1xyXG5cdFx0fVxyXG5cclxuXHRcdCQoZWxlbWVudElEKS50b2dnbGVDbGFzcygnRXhwYW5kYWJsZUxpbmstLWV4cGFuZGVkJyk7XHJcblxyXG5cdFx0aWYgKFNhcHBoaXJlV2lkZ2V0cy5SZXNpemVQYXJlbnRJZnJhbWUpIHtcclxuXHRcdFx0U2FwcGhpcmVXaWRnZXRzLlJlc2l6ZVBhcmVudElmcmFtZS5yZXNpemUoKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRTYXBwaGlyZVdpZGdldHMuRXhwYW5kYWJsZUxpbmsgPSB7IGNyZWF0ZSB9O1xyXG59KShqUXVlcnksIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKTtcclxuIiwiLyogQ29tcG9uZW50IEZ1bGxTY3JlZW5UYWJzV3JhcHBlciAqL1xyXG5TYXBwaGlyZVdpZGdldHMuRnVsbFNjcmVlblRhYnNXcmFwcGVyID0gKCkgPT4ge1xyXG5cdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cdFx0JCgnLlRhYldyYXBwZXInKS5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdFx0Y29uc3QgJHdyYXBwZXIgPSAkKHRoaXMpLmNsb3Nlc3QoJy5GdWxsU2NyZWVuVGFic1dyYXBwZXJfX1RhYnMnKTtcclxuXHRcdFx0JHdyYXBwZXIuZmluZCgnKicpLnJlbW92ZUNsYXNzKCdBY3RpdmUnKTtcclxuXHJcblx0XHRcdCQodGhpcykuYWRkQ2xhc3MoJ0FjdGl2ZScpO1xyXG5cdFx0fSk7XHJcblx0fSk7XHJcbn07XHJcbiIsIi8qIENvbXBvbmVudCBQZXJzb25DYXJkICovXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cdHZhciBQZXJzb25DYXJkRXZlbnQgPSBmdW5jdGlvbigpIHtcclxuXHRcdCQoJy5Jc0V4cGFuZGFibGUgLlBlcnNvbkNhcmRfX2hlYWRlckxlZnRJbmZvLCAuSXNFeHBhbmRhYmxlIC5QZXJzb25DYXJkX19jb250ZW50JylcclxuXHRcdFx0Lm9mZignY2xpY2snKVxyXG5cdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0Y29uc3QgJGhlYWRlciA9ICQodGhpcykuY2xvc2VzdCgnLlBlcnNvbkNhcmRfaGVhZGVyJyk7XHJcblx0XHRcdFx0Y29uc3QgJG9uQ2FyZE9wZW5MaW5rID0gJGhlYWRlci5maW5kKCcuUGVyc29uQ2FyZF9fT25DYXJkT3BlbkxpbmsnKTtcclxuXHRcdFx0XHRjb25zdCAkb25DYXJkQ2xvc2VMaW5rID0gJGhlYWRlci5maW5kKCcuUGVyc29uQ2FyZF9fT25DYXJkQ2xvc2VDbGljaycpO1xyXG5cdFx0XHRcdGNvbnN0ICRjb250ZW50ID0gJGhlYWRlci5uZXh0KCk7XHJcblxyXG5cdFx0XHRcdGNvbnN0ICRjYXJkID0gJCh0aGlzKS5jbG9zZXN0KCcuUGVyc29uQ2FyZCcpO1xyXG5cclxuXHRcdFx0XHQkY29udGVudC5yZW1vdmVDbGFzcygnSXNFeHBhbmRlZCcpO1xyXG5cclxuXHRcdFx0XHRpZiAoJGNhcmQuaGFzQ2xhc3MoJ0lzT3BlbicpKSB7XHJcblx0XHRcdFx0XHQkb25DYXJkQ2xvc2VMaW5rLnRyaWdnZXJIYW5kbGVyKCdjbGljaycpO1xyXG5cdFx0XHRcdFx0JGNhcmQucmVtb3ZlQ2xhc3MoJ0lzT3BlbicpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQkb25DYXJkT3BlbkxpbmsudHJpZ2dlckhhbmRsZXIoJ2NsaWNrJyk7XHJcblxyXG5cdFx0XHRcdFx0JGNvbnRlbnQuYWRkQ2xhc3MoJ0lzRXhwYW5kZWQnKTtcclxuXHJcblx0XHRcdFx0XHQkY2FyZC5hZGRDbGFzcygnSXNPcGVuJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHQkKCcuU3RvcFByb3BhZ2F0aW9uJykuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdH0pO1xyXG5cclxuXHRQZXJzb25DYXJkRXZlbnQoKTtcclxuXHJcblx0b3NBamF4QmFja2VuZC5CaW5kQWZ0ZXJBamF4UmVxdWVzdChQZXJzb25DYXJkRXZlbnQpO1xyXG59KTtcclxuIiwiLyogQ29tcG9uZW50IEdlbmVyaWNHYWxsZXJ5ICovXHJcbihmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpIHtcclxuXHR2YXIgY3JlYXRlID0gZnVuY3Rpb24oY29uZmlnKSB7XHJcblx0XHR3aW5kb3dbY29uZmlnLndpZGdldElkXSA9IG5ldyBHZW5lcmljR2FsbGVyeShjb25maWcpO1xyXG5cdH07XHJcblxyXG5cdHZhciBHZW5lcmljR2FsbGVyeSA9IGZ1bmN0aW9uKGNvbmZpZykge1xyXG5cdFx0dGhpcy5jb25maWcgPSBjb25maWc7XHJcblx0XHR0aGlzLiR3aWRnZXQgPSAkKCcjJyArIHRoaXMuY29uZmlnLndpZGdldElkKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcclxuXHRcdHRoaXMuZXF1YWxIZWlnaHQgPSB0aGlzLmNvbmZpZy5lcXVhbEhlaWdodDtcclxuXHRcdGlmIChcclxuXHRcdFx0dGhpcy4kd2lkZ2V0LmZpbmQoJz4gLkdlbmVyaWNHYWxsZXJ5LWNvbnRlbnQgPiBzcGFuJykubGVuZ3RoID09PSAxICYmXHJcblx0XHRcdHRoaXMuJHdpZGdldC5maW5kKCcuR2VuZXJpY0dhbGxlcnktY29udGVudCA+IHNwYW4nKS5oYXNDbGFzcygnTGlzdFJlY29yZHMnKVxyXG5cdFx0KSB7XHJcblx0XHRcdHRoaXMuJGdhbGxlcnkgPSB0aGlzLiR3aWRnZXQuZmluZCgnPiAuR2VuZXJpY0dhbGxlcnktY29udGVudCA+IHNwYW4uTGlzdFJlY29yZHMnKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuJGdhbGxlcnkgPSB0aGlzLiR3aWRnZXQuZmluZCgnPiAuR2VuZXJpY0dhbGxlcnktY29udGVudCcpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxldCB0ZW1wbGF0ZUNvbHVtbiA9ICdyZXBlYXQoJyArIHRoaXMuY29uZmlnLmNvbHVtblNpemluZyArICcsIG1pbm1heCgnICsgdGhpcy5jb25maWcuY29sdW1uTWluV2lkdGggKyAnLCAxZnIpKSc7XHJcblxyXG5cdFx0aWYgKHRoaXMuY29uZmlnLm1heEl0ZW1zUm93ID4gMCkge1xyXG5cdFx0XHR0ZW1wbGF0ZUNvbHVtbiA9IGByZXBlYXQoJHt0aGlzLmNvbmZpZy5jb2x1bW5TaXppbmd9LCBtaW5tYXgobWF4KCR7dGhpcy5jb25maWcuY29sdW1uTWluV2lkdGh9LCAoMTAwJSAtICgke3RoaXMuY29uZmlnLm1heEl0ZW1zUm93fSAtIDEpICogJHt0aGlzLmNvbmZpZy5nYXBDb2x1bW59cHgpIC8gJHt0aGlzLmNvbmZpZy5tYXhJdGVtc1Jvd30pLCAxZnIpKWA7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy4kZ2FsbGVyeS5jc3Moe1xyXG5cdFx0XHRkaXNwbGF5OiAnZ3JpZCcsXHJcblx0XHRcdGdyaWRUZW1wbGF0ZUNvbHVtbnM6IHRlbXBsYXRlQ29sdW1uLFxyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy4kZ2FsbGVyeUl0ZW1zID0gdGhpcy4kZ2FsbGVyeS5jaGlsZHJlbigpO1xyXG5cdFx0dGhpcy4kZ2FsbGVyeUl0ZW1zLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdGlmICghJCh0aGlzKS5oYXNDbGFzcygnR2VuZXJpY0dhbGxlcnktaXRlbScpKSB7XHJcblx0XHRcdFx0JCh0aGlzKS53cmFwKCc8ZGl2IGNsYXNzPVwiR2VuZXJpY0dhbGxlcnktaXRlbVwiPjwvZGl2PicpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRTYXBwaGlyZVdpZGdldHMuR2VuZXJpY0dhbGxlcnkgPSB7XHJcblx0XHRjcmVhdGU6IGNyZWF0ZSxcclxuXHR9O1xyXG59KShqUXVlcnksIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cyk7XHJcbiIsIi8qIENvbXBvbmVudCBHZW5lcmljR3JpZCAqL1xyXG4oZnVuY3Rpb24gKCQsIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cykge1xyXG5cdHZhciBhbGxHZW5lcmljR3JpZHMgPSBbXTtcclxuXHJcblx0dmFyIGNyZWF0ZSA9IGZ1bmN0aW9uIChjb25maWcpIHtcclxuXHRcdHdpbmRvd1tjb25maWcud2lkZ2V0SWRdID0gbmV3IEdlbmVyaWNHcmlkKGNvbmZpZyk7XHJcblx0XHRhbGxHZW5lcmljR3JpZHMucHVzaCh3aW5kb3dbY29uZmlnLndpZGdldElkXSk7XHJcblx0fTtcclxuXHJcblx0dmFyIEdlbmVyaWNHcmlkID0gZnVuY3Rpb24gKGNvbmZpZykge1xyXG5cdFx0dmFyIF90aGlzID0gdGhpcztcclxuXHRcdHRoaXMuY29uZmlnID0gY29uZmlnO1xyXG5cdFx0Y29uc29sZS5sb2codGhpcy5jb25maWcpO1xyXG5cdH07XHJcblxyXG5cdFNhcHBoaXJlV2lkZ2V0cy5HZW5lcmljR3JpZCA9IHtcclxuXHRcdGNyZWF0ZTogY3JlYXRlLFxyXG5cdH07XHJcblxyXG59KShqUXVlcnksIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cyk7IiwiLyogQ29tcG9uZW50IEhvcml6b250YWxUb29sYmFyICovXHJcbihmdW5jdGlvbigkLCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cykge1xyXG5cdGNvbnN0IGNyZWF0ZSA9IGNvbmZpZyA9PiB7XHJcblx0XHRjb25zdCAkd2lkZ2V0ID0gJCgnIycgKyBjb25maWcud2lkZ2V0SWQpO1xyXG5cclxuXHRcdCQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IGluaXQoJHdpZGdldCwgY29uZmlnKSk7XHJcblxyXG5cdFx0aWYgKGNvbmZpZy5pc0Fycm93TmF2aWdhdGlvbikge1xyXG5cdFx0XHQkKHdpbmRvdykubG9hZCgoKSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgJGl0ZW1XcmFwcGVyID0gJHdpZGdldC5maW5kKCcuTWVudUl0ZW1XcmFwcGVyLkFjdGl2ZScpO1xyXG5cdFx0XHRcdGlmICgkaXRlbVdyYXBwZXIubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHQkaXRlbVdyYXBwZXJbMF0uc2Nyb2xsSW50b1ZpZXcoe1xyXG5cdFx0XHRcdFx0XHRiZWhhdmlvcjogJ2F1dG8nLFxyXG5cdFx0XHRcdFx0XHRibG9jazogJ2VuZCcsXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGNvbnN0IGluaXQgPSAoJHdpZGdldCwgY29uZmlnKSA9PiB7XHJcblx0XHRpZiAoY29uZmlnLmlzQXJyb3dOYXZpZ2F0aW9uKSB7XHJcblx0XHRcdGhhbmRsZUFycm93cygkd2lkZ2V0KTtcclxuXHJcblx0XHRcdGNvbnN0ICR0b29sYmFySXRlbXMgPSAkd2lkZ2V0LmZpbmQoJy5Ub29sYmFyX19JdGVtcycpO1xyXG5cdFx0XHRjb25zdCAkbGlzdEl0ZW1zID0gJHdpZGdldC5maW5kKCcuVG9vbGJhcl9fSXRlbXMgLkxpc3RSZWNvcmRzJyk7XHJcblx0XHRcdGNvbnN0ICRidG5SaWdodCA9ICR3aWRnZXQuZmluZCgnLlRvb2xiYXJfX3JpZ2h0QnRuJyk7XHJcblx0XHRcdGNvbnN0ICRidG5MZWZ0ID0gJHdpZGdldC5maW5kKCcuVG9vbGJhcl9fbGVmdEJ0bicpO1xyXG5cclxuXHRcdFx0JHRvb2xiYXJJdGVtcy5zY3JvbGwoKCkgPT4gaGFuZGxlQXJyb3dzKCR3aWRnZXQpKTtcclxuXHJcblx0XHRcdCRidG5SaWdodC5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR2YXIgY3VycmVudFNjcm9sbCA9ICR0b29sYmFySXRlbXMuc2Nyb2xsTGVmdCgpO1xyXG5cdFx0XHRcdHZhciBtYXhTY3JvbGxsID0gJGxpc3RJdGVtcy53aWR0aCgpIC0gJHRvb2xiYXJJdGVtcy53aWR0aCgpO1xyXG5cdFx0XHRcdHZhciBzaWRlV2lkdGggPSBtYXhTY3JvbGxsIC0gNTA7XHJcblx0XHRcdFx0JHRvb2xiYXJJdGVtcy5zY3JvbGxMZWZ0KGN1cnJlbnRTY3JvbGwgKyA1MCk7XHJcblxyXG5cdFx0XHRcdGlmIChjdXJyZW50U2Nyb2xsID09IHNpZGVXaWR0aCkgJGJ0blJpZ2h0LmFkZENsYXNzKCdEaXNhYmxlZCcpO1xyXG5cdFx0XHRcdGlmIChjdXJyZW50U2Nyb2xsICE9IDUwKSAkYnRuTGVmdC5yZW1vdmVDbGFzcygnRGlzYWJsZWQnKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHQkYnRuTGVmdC5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR2YXIgY3VycmVudFNjcm9sbCA9ICR0b29sYmFySXRlbXMuc2Nyb2xsTGVmdCgpO1xyXG5cdFx0XHRcdHZhciBtYXhTY3JvbGxsID0gJGxpc3RJdGVtcy53aWR0aCgpIC0gJHRvb2xiYXJJdGVtcy53aWR0aCgpO1xyXG5cdFx0XHRcdHZhciBzaWRlV2lkdGggPSBtYXhTY3JvbGxsIC0gNTA7XHJcblx0XHRcdFx0JHRvb2xiYXJJdGVtcy5zY3JvbGxMZWZ0KGN1cnJlbnRTY3JvbGwgLSA1MCk7XHJcblxyXG5cdFx0XHRcdGlmIChjdXJyZW50U2Nyb2xsICE9IHNpZGVXaWR0aCkgJGJ0blJpZ2h0LnJlbW92ZUNsYXNzKCdEaXNhYmxlZCcpO1xyXG5cdFx0XHRcdGlmIChjdXJyZW50U2Nyb2xsID09IDUwKSAkYnRuTGVmdC5hZGRDbGFzcygnRGlzYWJsZWQnKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHQkKHdpbmRvdykub24oJ3Jlc2l6ZS50b29sYmFyJywgKCkgPT4gaGFuZGxlQXJyb3dzKCR3aWRnZXQpKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGhhbmRsZVJlc2l6ZSgkd2lkZ2V0KTtcclxuXHRcdFx0YmluZEV2ZW50c0NsaWNrKCR3aWRnZXQpO1xyXG5cclxuXHRcdFx0JCh3aW5kb3cpLm9uKCdyZXNpemUudG9vbGJhcicsICgpID0+IGhhbmRsZVJlc2l6ZSgkd2lkZ2V0KSk7XHJcblxyXG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignVG9vbGJhckZpeGVkJywgKCkgPT4gaGFuZGxlUmVzaXplKCR3aWRnZXQpLCBmYWxzZSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0aGFuZGxlQXJyb3dzID0gJHdpZGdldCA9PiB7XHJcblx0XHRjb25zdCAkdG9vbGJhckl0ZW1zID0gJHdpZGdldC5maW5kKCcuVG9vbGJhcl9fSXRlbXMnKTtcclxuXHRcdGNvbnN0ICRsaXN0SXRlbXMgPSAkd2lkZ2V0LmZpbmQoJy5Ub29sYmFyX19JdGVtcyAuTGlzdFJlY29yZHMnKTtcclxuXHRcdGNvbnN0ICRidG5SaWdodCA9ICR3aWRnZXQuZmluZCgnLlRvb2xiYXJfX3JpZ2h0QnRuJyk7XHJcblx0XHRjb25zdCAkYnRuTGVmdCA9ICR3aWRnZXQuZmluZCgnLlRvb2xiYXJfX2xlZnRCdG4nKTtcclxuXHJcblx0XHRsZXQgY3VycmVudFNjcm9sbCA9ICR0b29sYmFySXRlbXMuc2Nyb2xsTGVmdCgpO1xyXG5cdFx0bGV0IG1lbnVXaWR0aCA9ICRsaXN0SXRlbXMud2lkdGgoKTtcclxuXHRcdGxldCBleHRlcm5hbFdpZHRoID0gJHRvb2xiYXJJdGVtcy53aWR0aCgpO1xyXG5cdFx0dmFyIG1heFNjcm9sbGwgPSBtZW51V2lkdGggLSBleHRlcm5hbFdpZHRoO1xyXG5cclxuXHRcdGlmIChleHRlcm5hbFdpZHRoID4gbWVudVdpZHRoKSB7XHJcblx0XHRcdCRidG5MZWZ0LmhpZGUoKTtcclxuXHRcdFx0JGJ0blJpZ2h0LmhpZGUoKTtcclxuXHJcblx0XHRcdCR3aWRnZXQuZmluZCgnLlRvb2xiYXJfY29udGFpbmVyJykuYWRkQ2xhc3MoJ1Rvb2xiYXJfY29udGFpbmVyLS1ub2Fycm93cycpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0JGJ0bkxlZnQuc2hvdygpO1xyXG5cdFx0XHQkYnRuUmlnaHQuc2hvdygpO1xyXG5cclxuXHRcdFx0JHdpZGdldC5maW5kKCcuVG9vbGJhcl9jb250YWluZXInKS5yZW1vdmVDbGFzcygnVG9vbGJhcl9jb250YWluZXItLW5vYXJyb3dzJyk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGN1cnJlbnRTY3JvbGwgPT09IDApICRidG5MZWZ0LmFkZENsYXNzKCdEaXNhYmxlZCcpO1xyXG5cdFx0ZWxzZSAkYnRuTGVmdC5yZW1vdmVDbGFzcygnRGlzYWJsZWQnKTtcclxuXHJcblx0XHRpZiAoY3VycmVudFNjcm9sbCA+PSBtYXhTY3JvbGxsKSAkYnRuUmlnaHQuYWRkQ2xhc3MoJ0Rpc2FibGVkJyk7XHJcblx0XHRlbHNlICRidG5SaWdodC5yZW1vdmVDbGFzcygnRGlzYWJsZWQnKTtcclxuXHR9O1xyXG5cclxuXHRoYW5kbGVSZXNpemUgPSAkd2lkZ2V0ID0+IHtcclxuXHRcdGxldCBpdGVtc1RvdGFsID0gMDtcclxuXHRcdGxldCBoYXNJdGVtc0hpZGRlbiA9IGZhbHNlO1xyXG5cclxuXHRcdGNvbnN0ICRsaXN0SXRlbXMgPSAkd2lkZ2V0LmZpbmQoJy5Ub29sYmFyX19JdGVtcyAuTGlzdFJlY29yZHMnKTtcclxuXHRcdCRsaXN0SXRlbXMuZmluZCgnPiBhW3VpXScpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcblxyXG5cdFx0Y29uc3QgbWVudVdpZHRoID0gJHdpZGdldC5maW5kKCcuVG9vbGJhcl9fSXRlbXMnKS5vdXRlcldpZHRoKHRydWUpO1xyXG5cclxuXHRcdCRsaXN0SXRlbXMuZmluZCgnYVt1aV0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpdGVtc1RvdGFsICs9IHBhcnNlSW50KCQodGhpcykub3V0ZXJXaWR0aCh0cnVlKSwgMTApO1xyXG5cclxuXHRcdFx0aWYgKGl0ZW1zVG90YWwgKyA5MCA8IG1lbnVXaWR0aCkge1xyXG5cdFx0XHRcdCQodGhpcykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0aGFzSXRlbXNIaWRkZW4gPSB0cnVlO1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdGlmIChoYXNJdGVtc0hpZGRlbiAmJiAhJGxpc3RJdGVtcy5maW5kKCcuVG9vbGJhcl9fTW9yZU9wdGlvbnMnKS5sZW5ndGgpIHtcclxuXHRcdFx0JHdpZGdldFxyXG5cdFx0XHRcdC5maW5kKCcuVG9vbGJhcl9fTW9yZU9wdGlvbnMnKVxyXG5cdFx0XHRcdC5jbG9uZSgpXHJcblx0XHRcdFx0LmNzcygnZGlzcGxheScsICdibG9jaycpXHJcblx0XHRcdFx0LmFwcGVuZFRvKCRsaXN0SXRlbXMpO1xyXG5cclxuXHRcdFx0aGFzSXRlbXNIaWRkZW4gPSBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCAkb3B0aW9uc0xpc3QgPSAkd2lkZ2V0LmZpbmQoJy5Ub29sYmFyX19JdGVtcyAuVG9vbGJhcl9fTW9yZU9wdGlvbnNMaXN0Jyk7XHJcblxyXG5cdFx0JGxpc3RJdGVtcy5maW5kKCcuVG9vbGJhcl9fTW9yZU9wdGlvbnMnKS5jc3MoJ2Rpc3BsYXknLCAkb3B0aW9uc0xpc3QubGVuZ3RoID8gJ2Jsb2NrJyA6ICdub25lJyk7XHJcblxyXG5cdFx0Y29uc3QgJGhpZGRlbkl0ZW1zID0gJGxpc3RJdGVtcy5maW5kKCc+IGFbdWldJykuZmlsdGVyKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZXR1cm4gJCh0aGlzKS5jc3MoJ2Rpc3BsYXknKSA9PSAnbm9uZSc7XHJcblx0XHR9KTtcclxuXHJcblx0XHQkb3B0aW9uc0xpc3QuZW1wdHkoKTtcclxuXHJcblx0XHRjb25zdCBoYXNOb3RpZmljYXRpb25IaWRkZW4gPSAkaGlkZGVuSXRlbXMuZmluZCgnLk1lbnVJdGVtV3JhcHBlcl9CYWRnZTpub3QoOmVtcHR5KScpLmxlbmd0aCAhPT0gMDtcclxuXHRcdGNvbnN0ICR0cmlnZ2VyID0gJHdpZGdldC5maW5kKCcuVG9vbGJhcl9fSXRlbXMgLlRvb2xiYXJfX01vcmVPcHRpb25zSWNvbicpO1xyXG5cclxuXHRcdGlmIChoYXNOb3RpZmljYXRpb25IaWRkZW4pICR0cmlnZ2VyLmFkZENsYXNzKCdUb29sYmFyX19Nb3JlT3B0aW9uc0ljb24tLW5vdGlmaWNhdGlvbicpO1xyXG5cdFx0ZWxzZSAkdHJpZ2dlci5yZW1vdmVDbGFzcygnVG9vbGJhcl9fTW9yZU9wdGlvbnNJY29uLS1ub3RpZmljYXRpb24nKTtcclxuXHJcblx0XHQkaGlkZGVuSXRlbXNcclxuXHRcdFx0LmNsb25lKClcclxuXHRcdFx0LmNzcygnZGlzcGxheScsICdibG9jaycpXHJcblx0XHRcdC5hcHBlbmRUbygkb3B0aW9uc0xpc3QpO1xyXG5cdH07XHJcblxyXG5cdGJpbmRFdmVudHNDbGljayA9ICR3aWRnZXQgPT4ge1xyXG5cdFx0Y29uc3QgJG1vcmVPcHRpb25zID0gJHdpZGdldC5maW5kKCcuVG9vbGJhcl9fSXRlbXMgLlRvb2xiYXJfX01vcmVPcHRpb25zJyk7XHJcblx0XHRjb25zdCAkdHJpZ2dlciA9ICR3aWRnZXQuZmluZCgnLlRvb2xiYXJfX0l0ZW1zIC5Ub29sYmFyX19Nb3JlT3B0aW9uc0ljb24nKTtcclxuXHRcdGNvbnN0ICRvcHRpb25zTGlzdCA9ICR3aWRnZXQuZmluZCgnLlRvb2xiYXJfX01vcmVPcHRpb25zTGlzdCcpO1xyXG5cclxuXHRcdCR0cmlnZ2VyLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcclxuXHRcdFx0JG1vcmVPcHRpb25zLnRvZ2dsZUNsYXNzKCdUb29sYmFyX19Nb3JlT3B0aW9ucy0tb3BlbicpO1xyXG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdCRvcHRpb25zTGlzdC5vbignbW91c2V3aGVlbCcsIGV2ZW50ID0+IHtcclxuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHQkKCdib2R5Jykub24oJ21vdXNldXAnLCBldmVudCA9PiB7XHJcblx0XHRcdGNvbnN0ICR0YXJnZXQgPSAkKGV2ZW50LnRhcmdldCkucGFyZW50cygpO1xyXG5cclxuXHRcdFx0aWYgKCEkdGFyZ2V0LmFuZFNlbGYoKS5pcygkbW9yZU9wdGlvbnMpKSB7XHJcblx0XHRcdFx0JG1vcmVPcHRpb25zLnJlbW92ZUNsYXNzKCdUb29sYmFyX19Nb3JlT3B0aW9ucy0tb3BlbicpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRTYXBwaGlyZVdpZGdldHMuSG9yaXpvbnRhbFRvb2xiYXIgPSB7XHJcblx0XHRjcmVhdGUsXHJcblx0fTtcclxufSkoalF1ZXJ5LCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cyk7XHJcbiIsIi8qIENvbXBvbmVudCBIb3VyUGlja2VyICovXHJcbihmdW5jdGlvbigkLCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cykge1xyXG5cdGNsYXNzIEhvdXJQaWNrZXIge1xyXG5cdFx0Y29uc3RydWN0b3IoY29uZmlnKSB7XHJcblx0XHRcdC8vIE9wdGlvbnMgdXNlZCBieSBqUXVlcnkgVGltZXJwaWNrZXIgKEV4dGVybmFsIExpYilcclxuXHRcdFx0dGhpcy5vcHRpb25zID0ge1xyXG5cdFx0XHRcdC4uLmNvbmZpZyxcclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdFNhcHBoaXJlV2lkZ2V0cy5Ib3VyUGlja2VyLmFsbEludGFuY2VzLnB1c2goY29uZmlnLndpZGdldElkKTtcclxuXHJcblx0XHRcdHRoaXMub25Db21wb25lbnRJbml0KCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aXNDb21wb25lbnRWYWxpZCgpIHtcclxuXHRcdFx0bGV0IHZhbGlkID0gdHJ1ZTtcclxuXHRcdFx0bGV0IG1lc3NhZ2UgPSBgQ29tcG9uZW50IEhvdXJQaWNrZXIgKCR7dGhpcy5vcHRpb25zLndpZGdldElkfSk6YDtcclxuXHRcdFx0bGV0IGVycm9ycyA9ICcnO1xyXG5cclxuXHRcdFx0aWYgKHRoaXMuJG1vZGVsLmxlbmd0aCAmJiB0aGlzLiRtb2RlbC5sZW5ndGggPiAxKSB7XHJcblx0XHRcdFx0ZXJyb3JzID0gYCR7ZXJyb3JzfSAtIE5lZWRzIG9uZSAtIGFuZCBqdXN0IG9uZSAtIElucHV0IGVsZW1lbnQuYDtcclxuXHRcdFx0XHR2YWxpZCA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoIXRoaXMuJG1vZGVsLmxlbmd0aCAmJiB0aGlzLiRjb21wb25lbnQuZmluZCgnLkhvdXJQaWNrZXJfX1BsYWNlaG9sZGVyIGlucHV0JykubGVuZ3RoKSB7XHJcblx0XHRcdFx0ZXJyb3JzID0gYCR7ZXJyb3JzfVxcbiAtIFRoZSBJbnB1dCBlbGVtZW50IG11c3QgYmUgb2YgdHlwZSBUZXh0LmA7XHJcblx0XHRcdFx0dmFsaWQgPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCF2YWxpZCkgY29uc29sZS5lcnJvcihgJHttZXNzYWdlfSAke2Vycm9yc31gKTtcclxuXHJcblx0XHRcdHJldHVybiB2YWxpZDtcclxuXHRcdH1cclxuXHJcblx0XHRzZXRDb21wb25lbnRQb3NpdGlvbigpIHtcclxuXHRcdFx0Y29uc3QgJHdpZGdldCA9ICQoJy51aS10aW1lcGlja2VyLWNvbnRhaW5lcicpO1xyXG5cdFx0XHRjb25zdCBsYWJlbExlZnQgPSB0aGlzLiRsYWJlbC5vZmZzZXQoKS5sZWZ0O1xyXG5cdFx0XHRjb25zdCBsYWJlbFdpZHRoID0gdGhpcy4kbGFiZWwud2lkdGgoKTtcclxuXHRcdFx0Y29uc3QgbGFiZWxPdXRlcldpZHRoID0gdGhpcy4kbGFiZWwub3V0ZXJXaWR0aCgpO1xyXG5cdFx0XHRjb25zdCB3aWRnZXRPdXRlcldpZHRoID0gJHdpZGdldC5vdXRlcldpZHRoKCk7XHJcblx0XHRcdGNvbnN0IHdpZGdldE1pbldpZHRoID0gKyR3aWRnZXQuY3NzKCdtaW4td2lkdGgnKS5yZXBsYWNlKCdweCcsICcnKTtcclxuXHRcdFx0Y29uc3QgaXNPdXRzaWRlV2luZG93ID1cclxuXHRcdFx0XHRsYWJlbExlZnQgKyBsYWJlbE91dGVyV2lkdGggPiAkKHdpbmRvdykuc2Nyb2xsTGVmdCgpICsgJCh3aW5kb3cpLndpZHRoKCkgLSB3aWRnZXRPdXRlcldpZHRoO1xyXG5cclxuXHRcdFx0JHdpZGdldC5jc3Moe1xyXG5cdFx0XHRcdGxlZnQ6ICgpID0+IHtcclxuXHRcdFx0XHRcdGxldCB2YWx1ZSA9IGxhYmVsTGVmdCAtICh3aWRnZXRNaW5XaWR0aCAtIGxhYmVsV2lkdGgpIC8gMjtcclxuXHJcblx0XHRcdFx0XHRpZiAoaXNPdXRzaWRlV2luZG93KSB2YWx1ZSA9IGxhYmVsTGVmdCArIGxhYmVsV2lkdGggLSB3aWRnZXRPdXRlcldpZHRoO1xyXG5cdFx0XHRcdFx0ZWxzZSBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IGxhYmVsTGVmdDtcclxuXHJcblx0XHRcdFx0XHRyZXR1cm4gdmFsdWU7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0c2V0RWxlbWVudENsYXNzKHNlbGVjdG9yLCBjbGFzc05hbWUpIHtcclxuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZSA/ICQoc2VsZWN0b3IpLmFkZENsYXNzKGNsYXNzTmFtZSkgOiBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHRkZWZpbmVUaW1lRm9ybWF0KCkge1xyXG5cdFx0XHRsZXQgZm9ybWF0ID0gW107XHJcblx0XHRcdGxldCBhbVBtID0gJyc7XHJcblxyXG5cdFx0XHRmb3JtYXQucHVzaCh0aGlzLm9wdGlvbnMuaXMyNGhGb3JtYXQgPyAnSEgnIDogJ2hoJyk7XHJcblx0XHRcdGlmICh0aGlzLm9wdGlvbnMuc2hvd01pbnV0ZXMpIGZvcm1hdC5wdXNoKCdtbScpO1xyXG5cdFx0XHRpZiAodGhpcy5vcHRpb25zLnNob3dTZWNvbmRzKSBmb3JtYXQucHVzaCgnc3MnKTtcclxuXHRcdFx0aWYgKCF0aGlzLm9wdGlvbnMuaXMyNGhGb3JtYXQpIGFtUG0gPSAnIHAnO1xyXG5cclxuXHRcdFx0cmV0dXJuIGAke2Zvcm1hdC5qb2luKCc6Jyl9JHthbVBtfWA7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29udmVydFRpbWUxMnRvMjQodmFsdWUpIHtcclxuXHRcdFx0Y29uc3QgW3RpbWUsIG1vZGlmaWVyXSA9IHZhbHVlLnNwbGl0KCcgJyk7XHJcblx0XHRcdGxldCBbaG91cnMsIG1pbnV0ZXMgPSAnMDAnLCBzZWNvbmRzID0gJzAwJ10gPSB0aW1lLnNwbGl0KCc6Jyk7XHJcblxyXG5cdFx0XHRpZiAoaG91cnMgPT09ICcxMicpIGhvdXJzID0gJzAwJztcclxuXHRcdFx0aWYgKG1vZGlmaWVyID09PSAnUE0nKSBob3VycyA9IHBhcnNlSW50KGhvdXJzLCAxMCkgKyAxMjtcclxuXHJcblx0XHRcdHJldHVybiBgJHtob3Vyc306JHttaW51dGVzfToke3NlY29uZHN9YDtcclxuXHRcdH1cclxuXHJcblx0XHRjb252ZXJ0VGltZUZvcm1hdFRvTWFzayh2YWx1ZSA9ICcnKSB7XHJcblx0XHRcdHJldHVybiB2YWx1ZS5yZXBsYWNlKC9bYS16QS1aXSsvZywgJy0tJyk7XHJcblx0XHR9XHJcblxyXG5cdFx0b25DaGFuZ2VFdmVudCh2YWx1ZSA9ICcnKSB7XHJcblx0XHRcdGxldCBtb2RlbCA9ICcwMS0wMS0xOTAwIDAwOjAwOjAwJzsgLy9pLmUuIG51bGxcclxuXHRcdFx0bGV0IGxhYmVsID0gdGhpcy5jb252ZXJ0VGltZUZvcm1hdFRvTWFzayh0aGlzLm9wdGlvbnMudGltZUZvcm1hdCk7XHJcblxyXG5cdFx0XHRpZiAodmFsdWUgJiYgISF2YWx1ZS50cmltKCkpIHtcclxuXHRcdFx0XHQvLyBUaGlzIGNvbmRpdGlvbiBpcyBjb3JyZWN0LCBtb2RlbCBhbHdheXMgdXNlcyB0aGUgMjRoIGZvcm1hdFxyXG5cdFx0XHRcdG1vZGVsID0gdGhpcy5vcHRpb25zLmlzMjRoRm9ybWF0ID8gdmFsdWUgOiB0aGlzLmNvbnZlcnRUaW1lMTJ0bzI0KHZhbHVlKTtcclxuXHRcdFx0XHRsYWJlbCA9IHZhbHVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAodGhpcy5vcHRpb25zLmlzTm90aWZ5RW5hYmxlZCkgT3NOb3RpZnlXaWRnZXQodGhpcy5vcHRpb25zLmhvdXJQaWNrZXJGYWtlTm90aWZ5SWQsIG1vZGVsKTtcclxuXHRcdFx0aWYgKHRoaXMub3B0aW9ucy5pc1RleHRUcmlnZ2VyYWJsZSkgdGhpcy4kbGFiZWwudGV4dChsYWJlbCk7XHJcblxyXG5cdFx0XHR0aGlzLiRtb2RlbC52YWwobW9kZWwpO1xyXG5cdFx0XHR0aGlzLiRtb2RlbC5jaGFuZ2UoKTtcclxuXHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRvbkNvbXBvbmVudEluaXQoKSB7XHJcblx0XHRcdHRoaXMuJGNvbXBvbmVudCA9ICQoYCMke3RoaXMub3B0aW9ucy53aWRnZXRJZH1gKTtcclxuXHRcdFx0dGhpcy4kbW9kZWwgPSB0aGlzLiRjb21wb25lbnQuZmluZCgnLkhvdXJQaWNrZXJfX1BsYWNlaG9sZGVyIGlucHV0W3R5cGU9XCJ0ZXh0XCJdJyk7XHJcblx0XHRcdHRoaXMuJGlucHV0ID0gdGhpcy4kY29tcG9uZW50LmZpbmQoJy5Ib3VyUGlja2VyX19EaXNwbGF5ZWQgLkhvdXJQaWNrZXJfX0lucHV0VmFsdWUnKTtcclxuXHRcdFx0dGhpcy4kZWxlbWVudCA9IHRoaXMuJGlucHV0O1xyXG5cclxuXHRcdFx0dGhpcy5vcHRpb25zLnRpbWVGb3JtYXQgPSB0aGlzLmRlZmluZVRpbWVGb3JtYXQoKTtcclxuXHJcblx0XHRcdGlmICghdGhpcy5pc0NvbXBvbmVudFZhbGlkKCkpIHJldHVybjtcclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0Y29uc3QgJGNvbnRhaW5lciA9IHRoaXMuJGNvbXBvbmVudDtcclxuXHJcblx0XHRcdFx0aWYgKHRoaXMub3B0aW9ucy5pc1RleHRUcmlnZ2VyYWJsZSkge1xyXG5cdFx0XHRcdFx0JGNvbnRhaW5lci5hZGRDbGFzcygnSG91clBpY2tlci0tdGV4dFRyaWdnZXInKTtcclxuXHJcblx0XHRcdFx0XHR0aGlzLiRsYWJlbCA9ICRjb250YWluZXIuZmluZCgnLkhvdXJQaWNrZXJfX0Rpc3BsYXllZCAuSG91clBpY2tlcl9fTGFiZWxWYWx1ZScpO1xyXG5cdFx0XHRcdFx0dGhpcy4kZWxlbWVudCA9IHRoaXMuJGxhYmVsO1xyXG5cclxuXHRcdFx0XHRcdHRoaXMuJGxhYmVsLnRleHQodGhpcy5jb252ZXJ0VGltZUZvcm1hdFRvTWFzayh0aGlzLm9wdGlvbnMudGltZUZvcm1hdCkpO1xyXG5cclxuXHRcdFx0XHRcdHRoaXMuJGxhYmVsLm9uKCdjbGljaycsICgpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy4kbGFiZWwudGltZXBpY2tlcigpLm9wZW4oKTtcclxuXHJcblx0XHRcdFx0XHRcdHRoaXMuc2V0Q29tcG9uZW50UG9zaXRpb24oKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKHRoaXMub3B0aW9ucy5pc0NsZWFyYWJsZSkge1xyXG5cdFx0XHRcdFx0dGhpcy4kYnV0dG9uQ2xlYXIgPSAkY29udGFpbmVyLmZpbmQoJy5Ib3VyUGlja2VyX19EaXNwbGF5ZWQgLkhvdXJQaWNrZXJfX0J1dHRvbkNsZWFyJyk7XHJcblxyXG5cdFx0XHRcdFx0dGhpcy4kYnV0dG9uQ2xlYXIub24oJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLiRpbnB1dC52YWwoJycpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLm9uQ2hhbmdlRXZlbnQoKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0dGhpcy4kZWxlbWVudC50aW1lcGlja2VyKHtcclxuXHRcdFx0XHRcdC4uLnRoaXMub3B0aW9ucyxcclxuXHRcdFx0XHRcdGNoYW5nZTogdGltZSA9PiB0aGlzLm9uQ2hhbmdlRXZlbnQodGltZSA/ICQoKS50aW1lcGlja2VyLmZvcm1hdFRpbWUodGhpcy5vcHRpb25zLnRpbWVGb3JtYXQsIHRpbWUpIDogbnVsbCksXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdHRoaXMuc2V0RWxlbWVudENsYXNzKCcudWktdGltZXBpY2tlci1jb250YWluZXInLCB0aGlzLm9wdGlvbnMuY3VycmVudExvY2FsZSA9PT0gJ0FSJyA/ICdydGwnIDogJ2x0cicpO1xyXG5cclxuXHRcdFx0XHR0aGlzLiRpbnB1dC5wcm9wKCdyZWFkb25seScsICF0aGlzLm9wdGlvbnMuaXNUeXBlRW5hYmxlZCk7XHJcblx0XHRcdFx0dGhpcy4kaW5wdXQucHJvcCgncGxhY2Vob2xkZXInLCB0aGlzLm9wdGlvbnMudGltZUZvcm1hdCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNvbnN0IGNyZWF0ZSA9IGNvbmZpZyA9PiB7XHJcblx0XHR3aW5kb3dbY29uZmlnLndpZGdldElkXSA9IG5ldyBIb3VyUGlja2VyKGNvbmZpZyk7XHJcblx0fTtcclxuXHJcblx0U2FwcGhpcmVXaWRnZXRzLkhvdXJQaWNrZXIgPSB7XHJcblx0XHRjcmVhdGUsXHJcblx0XHRhbGxJbnRhbmNlczogW10sXHJcblx0fTtcclxufSkoalF1ZXJ5LCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cyk7XHJcbiIsIi8qIENvbXBvbmVudCBJbnB1dExBU0EgKi9cclxuKGZ1bmN0aW9uKCkge1xyXG5cdHZhciBzZXR1cElucHV0ID0gZnVuY3Rpb24oY29uZmlnKSB7XHJcblx0XHQkKCdib2R5Jykub2ZmKCdjbGljaycsICcjJyArIGNvbmZpZy5sYWJlbElkKTtcclxuXHRcdCQoJ2JvZHknKS5vZmYoJ2JsdXIgY2hhbmdlIGlucHV0JywgJyMnICsgY29uZmlnLmlucHV0SWQpO1xyXG5cclxuXHRcdCQoJyMnICsgY29uZmlnLmlucHV0SWQpLmNzcygnd2lkdGgnLCAnMTAwJScpO1xyXG5cdFx0JCgnIycgKyBjb25maWcubGFiZWxJZCkuY3NzKCd3aWR0aCcsICcxMDAlJyk7XHJcblxyXG5cdFx0JCgnIycgKyBjb25maWcuaW5wdXRJZCkuaGlkZSgpO1xyXG5cdFx0JCgnIycgKyBjb25maWcubGFiZWxJZCkuc2hvdygpO1xyXG5cclxuXHRcdFNhcHBoaXJlV2lkZ2V0cy5NYXJrV29yZHNGcm9tTGlzdC5oYW5kbGVQcm9tcHQoY29uZmlnKTtcclxuXHJcblx0XHQkKCdib2R5Jykub24oJ2NsaWNrJywgJyMnICsgY29uZmlnLmxhYmVsSWQsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKCcjJyArIGNvbmZpZy5sYWJlbElkKS5oaWRlKCk7XHJcblx0XHRcdCQoJyMnICsgY29uZmlnLmlucHV0SWQpLnNob3coKTtcclxuXHRcdFx0JCgnIycgKyBjb25maWcuaW5wdXRJZCkuZm9jdXMoKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdCQoJ2JvZHknKS5vbignYmx1cicsICcjJyArIGNvbmZpZy5pbnB1dElkLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0U2FwcGhpcmVXaWRnZXRzLk1hcmtXb3Jkc0Zyb21MaXN0LmhhbmRsZVByb21wdChjb25maWcpO1xyXG5cdFx0XHQkKCcjJyArIGNvbmZpZy5pbnB1dElkKS5oaWRlKCk7XHJcblx0XHRcdCQoJyMnICsgY29uZmlnLmxhYmVsSWQpLnNob3coKTtcclxuXHRcdFx0d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0U2FwcGhpcmVXaWRnZXRzLk1hcmtXb3Jkc0Zyb21MaXN0LmhhbmRsZVByb21wdChjb25maWcpO1xyXG5cdFx0XHRcdFNhcHBoaXJlV2lkZ2V0cy5NYXJrV29yZHNGcm9tTGlzdC5hcHBseU1hcmtpbmcoeyB0YXJnZXQ6IGNvbmZpZy5sYWJlbElkIH0pO1xyXG5cdFx0XHR9LCAyNTApO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0JCgnYm9keScpLm9uKCdjaGFuZ2UgaW5wdXQnLCAnIycgKyBjb25maWcuaW5wdXRJZCwgZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQoJyMnICsgY29uZmlnLmxhYmVsSWQpLnRleHQoJCgnIycgKyBjb25maWcuaW5wdXRJZCkudmFsKCkpO1xyXG5cdFx0XHR3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRTYXBwaGlyZVdpZGdldHMuTWFya1dvcmRzRnJvbUxpc3QuYXBwbHlNYXJraW5nKHsgdGFyZ2V0OiAncGFnZScgfSk7XHJcblx0XHRcdH0sIDI1MCk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHR2YXIgaGFuZGxlUHJvbXB0ID0gZnVuY3Rpb24oY29uZmlnKSB7XHJcblx0XHRpZiAoISQoJyMnICsgY29uZmlnLmlucHV0SWQpLnZhbCgpLmxlbmd0aCkge1xyXG5cdFx0XHQkKCcjJyArIGNvbmZpZy5sYWJlbElkKVxyXG5cdFx0XHRcdC50ZXh0KCQoJyMnICsgY29uZmlnLmlucHV0SWQpLnByb3AoJ3BsYWNlaG9sZGVyJykpXHJcblx0XHRcdFx0LmNzcygnY29sb3InLCAnIzk5OScpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0JCgnIycgKyBjb25maWcubGFiZWxJZClcclxuXHRcdFx0XHQudGV4dCgkKCcjJyArIGNvbmZpZy5pbnB1dElkKS52YWwoKSlcclxuXHRcdFx0XHQuY3NzKCdjb2xvcicsICcnKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRTYXBwaGlyZVdpZGdldHMuTWFya1dvcmRzRnJvbUxpc3QgPSBTYXBwaGlyZVdpZGdldHMuTWFya1dvcmRzRnJvbUxpc3QgPSBTYXBwaGlyZVdpZGdldHMuTWFya1dvcmRzRnJvbUxpc3QgfHwge307XHJcblx0U2FwcGhpcmVXaWRnZXRzLk1hcmtXb3Jkc0Zyb21MaXN0LnNldHVwSW5wdXQgPSBzZXR1cElucHV0O1xyXG5cdFNhcHBoaXJlV2lkZ2V0cy5NYXJrV29yZHNGcm9tTGlzdC5oYW5kbGVQcm9tcHQgPSBoYW5kbGVQcm9tcHQ7XHJcbn0pKCk7XHJcbiIsIihmdW5jdGlvbigpIHtcclxuXHRjbGFzcyBJbnB1dFdpdGhDbGVhciB7XHJcblx0XHRjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuXHRcdFx0dGhpcy5jb25maWcgPSBjb25maWc7XHJcblx0XHRcdHRoaXMuJHdpZGdldCA9ICQoYCMke2NvbmZpZy53aWRnZXRJZH1gKTtcclxuXHRcdFx0dGhpcy4kaW5wdXQgPSB0aGlzLiR3aWRnZXQuZmluZCgnaW5wdXRbdHlwZV0nKTtcclxuXHRcdFx0dGhpcy4kY2xlYXIgPSB0aGlzLiR3aWRnZXQuZmluZCgnLklucHV0V2l0aENsZWFyLWNsZWFyJyk7XHJcblx0XHRcdHRoaXMuJG5vdGlmeUxpbmsgPSB0aGlzLiR3aWRnZXQuZmluZCgnLklucHV0V2l0aENsZWFyLW5vdGlmeS1saW5rJyk7XHJcblx0XHRcdHRoaXMuJHdpZGdldFNoaWVsZCA9IHRoaXMuJHdpZGdldC5maW5kKCcuSW5wdXRXaXRoQ2xlYXItLXNoaWVsZCcpO1xyXG5cdFx0XHR0aGlzLm9uSW5pdCgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdG9uSW5pdCgpIHtcclxuXHRcdFx0dGhpcy4kaW5wdXQub24oJ2tleXVwJywgZSA9PiB7XHJcblx0XHRcdFx0aWYgKHRoaXMuJGlucHV0LnZhbCgpICE9PSAnJykgdGhpcy4kY2xlYXIuc2hvdygpO1xyXG5cdFx0XHRcdGVsc2UgdGhpcy4kY2xlYXIuc2hvdygpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHRoaXMuJGlucHV0Lm9uKCdibHVyJywgKCkgPT4ge1xyXG5cdFx0XHRcdGlmICh0aGlzLiRpbnB1dC52YWwoKSA9PT0gJycpIHtcclxuXHRcdFx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKCQoJy5kYXRlcmFuZ2VwaWNrZXI6dmlzaWJsZScpLmxlbmd0aCA9PT0gMSkge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR0aGlzLiRjbGVhci5oaWRlKCk7XHJcblx0XHRcdFx0XHRcdHRoaXMuJG5vdGlmeUxpbmsudHJpZ2dlcignY2xpY2snKTtcclxuXHRcdFx0XHRcdH0sIDEwMCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0dGhpcy4kY2xlYXIub24oJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuJGlucHV0LnZhbCgnJyk7XHJcblx0XHRcdFx0dGhpcy4kY2xlYXIuaGlkZSgpO1xyXG5cdFx0XHRcdHRoaXMuJG5vdGlmeUxpbmsudHJpZ2dlcignY2xpY2snKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdGlmICh0aGlzLmNvbmZpZy5oYXNTaGllbGQpIHtcclxuXHRcdFx0XHR3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLiR3aWRnZXRTaGllbGQuaGlkZSgpO1xyXG5cdFx0XHRcdH0sIHRoaXMuY29uZmlnLnNoaWVsZFRpbWVvdXQpO1xyXG5cdFx0XHRcdGlmICh0aGlzLmNvbmZpZy5zaGllbGRUaW1lb3V0ID4gMCkge1xyXG5cdFx0XHRcdFx0dGhpcy4kd2lkZ2V0U2hpZWxkLm9uKCdjbGljaycsICgpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy4kY2xlYXIuaGlkZSgpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb25zdCBjcmVhdGUgPSBjb25maWcgPT4gKHdpbmRvd1tjb25maWcud2lkZ2V0SWRdID0gbmV3IElucHV0V2l0aENsZWFyKGNvbmZpZykpO1xyXG5cclxuXHRTYXBwaGlyZVdpZGdldHMuSW5wdXRXaXRoQ2xlYXIgPSB7XHJcblx0XHRjcmVhdGUsXHJcblx0fTtcclxufSkoKTtcclxuIiwiKGZ1bmN0aW9uKCkge1xyXG5cdGNsYXNzIElucHV0V2l0aExpc3Qge1xyXG5cdFx0Y29uc3RydWN0b3IoY29uZmlnKSB7XHJcblx0XHRcdHRoaXMuY29uZmlnID0gY29uZmlnO1xyXG5cdFx0XHR0aGlzLiR3aWRnZXQgPSAkKGAjJHtjb25maWcud2lkZ2V0SWR9YCk7XHJcblx0XHRcdHRoaXMuJGlucHV0ID0gdGhpcy4kd2lkZ2V0LmZpbmQoJ2lucHV0W3R5cGVdJyk7XHJcblx0XHRcdHRoaXMuJGxpc3QgPSB0aGlzLiR3aWRnZXQuZmluZCgnLklucHV0V2l0aExpc3RfX0xpc3QnKTtcclxuXHJcblx0XHRcdHRoaXMuJGlucHV0LnZhbCgnJyk7XHJcblxyXG5cdFx0XHR0aGlzLm9uSW5pdCgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdG9uSW5pdCgpIHtcclxuXHRcdFx0dGhpcy4kaW5wdXQub24oJ2tleXVwJywgZSA9PiB7XHJcblx0XHRcdFx0Ly8gR2V0dGluZyBlbGVtZW50cyBhZ2FpbiBpbiBvcmRlciB0byB3b3JrIHdoZW4gdGhpcyBjb21wb25lbnQgaXMgY2xvbmVkIChlLmcuIHdoZW4gdXNpbmcgaW5zaWRlIEFjdGlvbnNNZW51KVxyXG5cdFx0XHRcdHRoaXMuJHdpZGdldCA9ICQoYCMke3RoaXMuY29uZmlnLndpZGdldElkfWApO1xyXG5cdFx0XHRcdGNvbnN0ICRpbnB1dCA9IHRoaXMuJHdpZGdldC5maW5kKCdpbnB1dFt0eXBlXScpO1xyXG5cdFx0XHRcdGNvbnN0ICRsaXN0ID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5JbnB1dFdpdGhMaXN0X19MaXN0Jyk7XHJcblx0XHRcdFx0dGhpcy4kaGlkZGVuSW5wdXQgPSB0aGlzLiR3aWRnZXQuZmluZCgnLklucHV0V2l0aExpc3RfX0hpZGRlbklucHV0IGlucHV0Jyk7XHJcblxyXG5cdFx0XHRcdGlmICgkaW5wdXQudmFsKCkudHJpbSgpICE9PSAnJykge1xyXG5cdFx0XHRcdFx0JGxpc3QuZW1wdHkoKTtcclxuXHJcblx0XHRcdFx0XHQkbGlzdC5hcHBlbmQoYDxkaXY+PGI+Q3JlYXRlOjwvYj4gJHskaW5wdXQudmFsKCl9PC9kaXY+YCk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCEkbGlzdC5pcygnOnZpc2libGUnKSkgJGxpc3Quc2hvdygpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQkbGlzdC5oaWRlKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHRoaXMuJGxpc3Qub24oJ2NsaWNrJywgZSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgJGxpbmtOb3RpZnkgPSB0aGlzLiR3aWRnZXQuZmluZCgnLklucHV0V2l0aExpc3Qtbm90aWZ5LWxpbmsnKTtcclxuXHRcdFx0XHRjb25zdCAkbGlzdCA9IHRoaXMuJHdpZGdldC5maW5kKCcuSW5wdXRXaXRoTGlzdF9fTGlzdCcpO1xyXG5cdFx0XHRcdGNvbnN0ICRpbnB1dCA9IHRoaXMuJHdpZGdldC5maW5kKCdpbnB1dFt0eXBlXScpO1xyXG5cclxuXHRcdFx0XHR0aGlzLiRoaWRkZW5JbnB1dC52YWwoJGlucHV0LnZhbCgpKTtcclxuXHRcdFx0XHR0aGlzLiRoaWRkZW5JbnB1dC5jaGFuZ2UoKTtcclxuXHJcblx0XHRcdFx0JGxpbmtOb3RpZnkuY2xpY2soKTtcclxuXHRcdFx0XHQkbGlzdC5oaWRlKCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y29uc3QgY3JlYXRlID0gY29uZmlnID0+ICh3aW5kb3dbY29uZmlnLndpZGdldElkXSA9IG5ldyBJbnB1dFdpdGhMaXN0KGNvbmZpZykpO1xyXG5cclxuXHRTYXBwaGlyZVdpZGdldHMuSW5wdXRXaXRoTGlzdCA9IHtcclxuXHRcdGNyZWF0ZSxcclxuXHR9O1xyXG59KSgpO1xyXG4iLCIvKiBDb21wb25lbnQgTGluZUFkZCAqL1xyXG4oZnVuY3Rpb24oJCwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpIHtcclxuXHRjb25zdCBjcmVhdGUgPSBmdW5jdGlvbihjb25maWcpIHtcclxuXHRcdCQod2luZG93KS5sb2FkKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRzZXRXaWR0aChjb25maWcud2lkZ2V0SWQpO1xyXG5cdFx0XHRTYXBwaGlyZVdpZGdldHMuTGluZUFkZC53aWRnZXRJZCA9IGNvbmZpZy53aWRnZXRJZDtcclxuXHJcblx0XHRcdG9zQWpheEJhY2tlbmQuQmluZEFmdGVyQWpheFJlcXVlc3QoKCkgPT4gc2V0V2lkdGgoY29uZmlnLndpZGdldElkKSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHQkKHdpbmRvdykub24oJ3Jlc2l6ZS5MaW5lQWRkJywgKCkgPT4gc2V0V2lkdGgoY29uZmlnLndpZGdldElkKSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3Qgc2V0V2lkdGggPSBmdW5jdGlvbih3aWRnZXRJZCkge1xyXG5cdFx0d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdGNvbnN0ICR3aWRnZXQgPSAkKGAjJHt3aWRnZXRJZCB8fCBTYXBwaGlyZVdpZGdldHMuTGluZUFkZC53aWRnZXRJZH1gKTtcclxuXHRcdFx0Y29uc3Qgd2lkdGhzID0gW107XHJcblxyXG5cdFx0XHRmb3IgKGkgPSAxOyBpIDwgODsgaSsrKSB7XHJcblx0XHRcdFx0bGV0IG1heFdpZHRoQ29udGVudCA9IE1hdGgubWF4LmFwcGx5KFxyXG5cdFx0XHRcdFx0bnVsbCxcclxuXHRcdFx0XHRcdCR3aWRnZXRcclxuXHRcdFx0XHRcdFx0LmZpbmQoJy5sYWNvbCcgKyBpKVxyXG5cdFx0XHRcdFx0XHQubWFwKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybiAkKHRoaXMpLndpZHRoKCk7XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdC5nZXQoKVxyXG5cdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdHdpZHRocy5wdXNoKG1heFdpZHRoQ29udGVudCk7XHJcblx0XHRcdFx0JHdpZGdldC5maW5kKCcubGFjb2wnICsgaSkud2lkdGgobWF4V2lkdGhDb250ZW50KTtcclxuXHRcdFx0fVxyXG5cdFx0fSwgMTAwKTtcclxuXHR9O1xyXG5cclxuXHRTYXBwaGlyZVdpZGdldHMuTGluZUFkZCA9IHsgY3JlYXRlLCBzZXRXaWR0aCB9O1xyXG59KShqUXVlcnksIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKTtcclxuIiwiLyogQ29tcG9uZW50IExpbmVEZXRhaWxzRXhwYW5kQm94ICovXHJcbihmdW5jdGlvbigkLCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cykge1xyXG5cdGNvbnN0IGluaXQgPSBjb25maWcgPT4ge1xyXG5cdFx0JChgIyR7Y29uZmlnLndpZGdldElkfSArIC5MaW5lRGV0YWlsc0V4cGFuZEJveF9hY3Rpb25gKS5jbGljayhldmVudCA9PiB7XHJcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgY3JlYXRlID0gY29uZmlnID0+ICQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IGluaXQoY29uZmlnKSk7XHJcblxyXG5cdFNhcHBoaXJlV2lkZ2V0cy5MaW5lRGV0YWlsc0V4cGFuZEJveCA9IHsgY3JlYXRlIH07XHJcbn0pKGpRdWVyeSwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpO1xyXG4iLCIvKiBDb21wb25lbnQgTG9jYXRpb25Cb3ggKi9cclxuU2FwcGhpcmVXaWRnZXRzLkxvY2F0aW9uQm94ID0gZnVuY3Rpb24od2lkZ2V0SWQpIHtcclxuXHRjb25zdCAkY29tcG9uZW50ID0gJChgIyR7d2lkZ2V0SWR9YCk7XHJcblxyXG5cdGlmICgkY29tcG9uZW50Lmhhc0NsYXNzKCdPbicpKSB7XHJcblx0XHQkKCcuRGlzYWJsZVJvb20nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKHRoaXMpXHJcblx0XHRcdFx0LnJlbW92ZUNsYXNzKCdPZmYnKVxyXG5cdFx0XHRcdC5yZW1vdmVDbGFzcygnT24nKTtcclxuXHRcdFx0JCh0aGlzKVxyXG5cdFx0XHRcdC5wYXJlbnQoJy5Sb29tQm94JylcclxuXHRcdFx0XHQuY3NzKHtcclxuXHRcdFx0XHRcdG9wYWNpdHk6ICcxJyxcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC5yZW1vdmVDbGFzcygnU2VsZWN0ZWQnKTtcclxuXHRcdH0pO1xyXG5cdH0gZWxzZSB7XHJcblx0XHQkY29tcG9uZW50XHJcblx0XHRcdC5hZGRDbGFzcygnT24nKVxyXG5cdFx0XHQucmVtb3ZlQ2xhc3MoJ09mZicpXHJcblx0XHRcdC5wYXJlbnQoJy5Sb29tQm94JylcclxuXHRcdFx0LmNzcyh7XHJcblx0XHRcdFx0b3BhY2l0eTogJzEnLFxyXG5cdFx0XHR9KVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ1NlbGVjdGVkJyk7XHJcblxyXG5cdFx0JCgnLkRpc2FibGVSb29tOm5vdCgjJyArIHdpZGdldElkICsgJyknKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKHRoaXMpLmFkZENsYXNzKCdPZmYnKTtcclxuXHRcdFx0JCh0aGlzKS5yZW1vdmVDbGFzcygnT24nKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdCQoJy5EaXNhYmxlUm9vbS5PZmYnKVxyXG5cdFx0XHQucGFyZW50KCcuUm9vbUJveCcpXHJcblx0XHRcdC5jc3Moe1xyXG5cdFx0XHRcdG9wYWNpdHk6ICcwLjUwJyxcclxuXHRcdFx0fSlcclxuXHRcdFx0LnJlbW92ZUNsYXNzKCdTZWxlY3RlZCcpO1xyXG5cdH1cclxufTtcclxuIiwiLyogQ29tcG9uZW50IE1haW5JbnRlcmFjdGl2ZUNhcmQgKi9cbihmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpIHtcblx0dmFyIGFsbE1haW5JbnRlcmFjdGl2ZUNhcmRzID0gW107XG5cdHZhciBkZWZhdWx0RHVyYXRpb24gPSAzMDA7XG5cblx0dmFyIGNyZWF0ZSA9IGZ1bmN0aW9uKGNvbmZpZykge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYWxsTWFpbkludGVyYWN0aXZlQ2FyZHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChhbGxNYWluSW50ZXJhY3RpdmVDYXJkc1tpXS5jb25maWcud2lkZ2V0SWQgPT09IGNvbmZpZy53aWRnZXRJZCkge1xuXHRcdFx0XHRhbGxNYWluSW50ZXJhY3RpdmVDYXJkcy5zcGxpY2UoaSwgMSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHdpbmRvd1tjb25maWcud2lkZ2V0SWRdID0gbmV3IE1haW5JbnRlcmFjdGl2ZUNhcmQoY29uZmlnKTtcblx0XHRhbGxNYWluSW50ZXJhY3RpdmVDYXJkcy5wdXNoKHdpbmRvd1tjb25maWcud2lkZ2V0SWRdKTtcblxuXHRcdGlmICghISFTYXBwaGlyZVdpZGdldHMuTWFpbkludGVyYWN0aXZlQ2FyZC5hZnRlckFqYXhSZXF1ZXN0QmluZGVkICYmICEhb3NBamF4QmFja2VuZCkge1xuXHRcdFx0b3NBamF4QmFja2VuZC5CaW5kQWZ0ZXJBamF4UmVxdWVzdChmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIGFsbE1haW5JbnRlcmFjdGl2ZUNhcmRzID0gU2FwcGhpcmVXaWRnZXRzLk1haW5JbnRlcmFjdGl2ZUNhcmQuYWxsKCk7XG5cdFx0XHRcdGFsbE1haW5JbnRlcmFjdGl2ZUNhcmRzLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xuXHRcdFx0XHRcdGVsZW1lbnQuaGFuZGxlSGVhZGVyV2l0aEFic29sdXRlQnV0dG9ucygpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdFx0U2FwcGhpcmVXaWRnZXRzLk1haW5JbnRlcmFjdGl2ZUNhcmQuYWZ0ZXJBamF4UmVxdWVzdEJpbmRlZCA9IHRydWU7XG5cdFx0fVxuXHR9O1xuXG5cdHZhciBNYWluSW50ZXJhY3RpdmVDYXJkID0gZnVuY3Rpb24oY29uZmlnKSB7XG5cdFx0dmFyIF90aGlzID0gdGhpcztcblx0XHR0aGlzLmNvbmZpZyA9IGNvbmZpZztcblx0XHR0aGlzLmlzTG9ja2VkT25DbG9zZSA9IGZhbHNlO1xuXHRcdHRoaXMuaXNPcGVuID0gY29uZmlnLmlzT3Blbjtcblx0XHR0aGlzLmlzRW5hYmxlZCA9IGNvbmZpZy5pc0VuYWJsZWQ7XG5cdFx0dGhpcy5pc1NlbGVjdGFibGUgPSBjb25maWcuaXNTZWxlY3RhYmxlO1xuXHRcdHRoaXMuYWxsb3dPcGVuaW5nID0gY29uZmlnLmFsbG93T3BlbmluZztcblx0XHR0aGlzLmFsbG93TXVsdGlwbGVPcGVuID0gY29uZmlnLmFsbG93TXVsdGlwbGVPcGVuO1xuXHRcdHRoaXMuZW1pdE5vdGlmeU9uT3BlbiA9IGNvbmZpZy5lbWl0Tm90aWZ5T25PcGVuO1xuXHRcdHRoaXMuaGlkZUFjdGlvbnNPbk9wZW4gPSBjb25maWcuaGlkZUFjdGlvbnNPbk9wZW47XG5cdFx0dGhpcy5oaWRlQ2FwdGlvbk9uT3BlbiA9IGNvbmZpZy5oaWRlQ2FwdGlvbk9uT3Blbjtcblx0XHR0aGlzLmhpZGVUaXRsZU9uT3BlbiA9IGNvbmZpZy5oaWRlVGl0bGVPbk9wZW47XG5cdFx0dGhpcy5oaWRlU3ViVGl0bGVPbk9wZW4gPSBjb25maWcuaGlkZVN1YlRpdGxlT25PcGVuO1xuXHRcdHRoaXMuaGVhZGVySGVpZ2h0V2hlbk9wZW4gPSBjb25maWcuaGVhZGVySGVpZ2h0V2hlbk9wZW47XG5cdFx0dGhpcy5NYWluSW50ZXJhY3RpdmVDYXJkRmFrZU5vdGlmeUlkID0gY29uZmlnLm1haW5JbnRlcmFjdGl2ZUNhcmRGYWtlTm90aWZ5SWQ7XG5cblx0XHR0aGlzLiR3aWRnZXQgPSAkKCcjJyArIGNvbmZpZy53aWRnZXRJZCk7XG5cdFx0dGhpcy4kd2lkZ2V0LmNzcygnZGlzcGxheScsICdibG9jaycpO1xuXHRcdHRoaXMuJGNhcmQgPSB0aGlzLiR3aWRnZXQuZmluZCgnPiAuTWFpbkludGVyYWN0aXZlQ2FyZCcpO1xuXHRcdHRoaXMuJGhlYWRlciA9IHRoaXMuJHdpZGdldC5maW5kKCc+IC5NYWluSW50ZXJhY3RpdmVDYXJkID4gLk1haW5JbnRlcmFjdGl2ZUNhcmQtaGVhZGVyJyk7XG5cdFx0dGhpcy4kaGVhZGVyVGV4dCA9IHRoaXMuJGhlYWRlci5maW5kKCcuTWFpbkludGVyYWN0aXZlQ2FyZC1oZWFkZXItdGV4dCcpO1xuXHRcdHRoaXMuJGV4cGFuZEljb24gPSB0aGlzLiRoZWFkZXIuZmluZCgnLk1haW5JbnRlcmFjdGl2ZUNhcmQtZXhwYW5kLWljb24nKTtcblx0XHR0aGlzLiRib2R5ID0gdGhpcy4kd2lkZ2V0LmZpbmQoJz4gLk1haW5JbnRlcmFjdGl2ZUNhcmQgPiBkaXYgPiAuTWFpbkludGVyYWN0aXZlQ2FyZC1ib2R5Jyk7XG5cdFx0dGhpcy4kYWN0aW9ucyA9IHRoaXMuJHdpZGdldC5maW5kKFxuXHRcdFx0Jz4gLk1haW5JbnRlcmFjdGl2ZUNhcmQgPiAuTWFpbkludGVyYWN0aXZlQ2FyZC1oZWFkZXIgLk1haW5JbnRlcmFjdGl2ZUNhcmQtaGVhZGVyLWFjdGlvbnMnXG5cdFx0KTtcblx0XHR0aGlzLiRjYXB0aW9uID0gdGhpcy4kd2lkZ2V0LmZpbmQoXG5cdFx0XHQnPiAuTWFpbkludGVyYWN0aXZlQ2FyZCA+IC5NYWluSW50ZXJhY3RpdmVDYXJkLWhlYWRlciAuTWFpbkludGVyYWN0aXZlQ2FyZC1oZWFkZXItdGV4dC1jYXB0aW9uJ1xuXHRcdCk7XG5cdFx0dGhpcy4kdGl0bGUgPSB0aGlzLiR3aWRnZXQuZmluZChcblx0XHRcdCc+IC5NYWluSW50ZXJhY3RpdmVDYXJkID4gLk1haW5JbnRlcmFjdGl2ZUNhcmQtaGVhZGVyIC5NYWluSW50ZXJhY3RpdmVDYXJkLWhlYWRlci10ZXh0LXRpdGxlJ1xuXHRcdCk7XG5cdFx0dGhpcy4kc3ViVGl0bGUgPSB0aGlzLiR3aWRnZXQuZmluZChcblx0XHRcdCc+IC5NYWluSW50ZXJhY3RpdmVDYXJkID4gLk1haW5JbnRlcmFjdGl2ZUNhcmQtaGVhZGVyIC5NYWluSW50ZXJhY3RpdmVDYXJkLWhlYWRlci10ZXh0LXN1YnRpdGxlJ1xuXHRcdCk7XG5cdFx0dGhpcy4kc2VsZWN0VHJpZ2dlciA9IHRoaXMuJHdpZGdldC5maW5kKFxuXHRcdFx0Jz4gLk1haW5JbnRlcmFjdGl2ZUNhcmQgPiAuTWFpbkludGVyYWN0aXZlQ2FyZC1oZWFkZXIgPiAuTWFpbkludGVyYWN0aXZlQ2FyZC1oZWFkZXItc2VsZWN0YWJsZSA+IC5NYWluSW50ZXJhY3RpdmVDYXJkLWhlYWRlci1zZWxlY3RhYmxlLXRyaWdnZXInXG5cdFx0KTtcblx0XHR0aGlzLiRzZWxlY3RQbGFjZWhvbGRlciA9IHRoaXMuJHdpZGdldC5maW5kKFxuXHRcdFx0Jz4gLk1haW5JbnRlcmFjdGl2ZUNhcmQgPiAuTWFpbkludGVyYWN0aXZlQ2FyZC1oZWFkZXIgLk1haW5JbnRlcmFjdGl2ZUNhcmQtaGVhZGVyLXNlbGVjdGFibGUtcGxhY2Vob2xkZXInXG5cdFx0KTtcblx0XHR0aGlzLiR0cmlnZ2VyUGxhY2Vob2xkZXIgPSB0aGlzLiR3aWRnZXQuZmluZChcblx0XHRcdCc+IC5NYWluSW50ZXJhY3RpdmVDYXJkID4gLk1haW5JbnRlcmFjdGl2ZUNhcmQtaGVhZGVyLXRyaWdnZXJBY3Rpb24tcGxhY2Vob2xkZXInXG5cdFx0KTtcblxuXHRcdGlmICh0aGlzLiR0cmlnZ2VyUGxhY2Vob2xkZXIuZmluZCgnYScpLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0dGhpcy4kdHJpZ2dlciA9IHRoaXMuJHRyaWdnZXJQbGFjZWhvbGRlci5maW5kKCdhJyk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuaXNPcGVuKSB7XG5cdFx0XHR0aGlzLm9wZW4oZmFsc2UsIC0xKTtcblx0XHRcdHRoaXMuJGNhcmQuYWRkQ2xhc3MoJ2ZvcmNlT3BlbicpO1xuXHRcdH1cblxuXHRcdHRoaXMuJGNhcmQuYWRkQ2xhc3ModGhpcy5oZWFkZXJIZWlnaHRXaGVuT3BlbiArICdIZWFkZXInKTtcblxuXHRcdGlmICh0aGlzLmFsbG93T3BlbmluZykge1xuXHRcdFx0dGhpcy4kY2FyZC5hZGRDbGFzcygnYWxsb3dPcGVuaW5nJyk7XG5cdFx0fVxuXG5cdFx0dGhpcy5hdHRhY2hFdmVudHMoKTtcblxuXHRcdHZhciBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uKG11dGF0aW9ucykge1xuXHRcdFx0bXV0YXRpb25zLmZvckVhY2goZnVuY3Rpb24obXV0YXRpb24sIGluZGV4KSB7XG5cdFx0XHRcdF90aGlzLmhhbmRsZUhlYWRlcldpdGhBYnNvbHV0ZUJ1dHRvbnMoKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdFx0b2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb25maWcud2lkZ2V0SWQpLCB7XG5cdFx0XHRjaGlsZExpc3Q6IHRydWUsXG5cdFx0XHRzdWJ0cmVlOiB0cnVlLFxuXHRcdFx0YXR0cmlidXRlczogZmFsc2UsXG5cdFx0fSk7XG5cdH07XG5cblx0TWFpbkludGVyYWN0aXZlQ2FyZC5wcm90b3R5cGUuaGFuZGxlSGVhZGVyV2l0aEFic29sdXRlQnV0dG9ucyA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBfdGhpcyA9IHRoaXM7XG5cdFx0aWYgKCEhdGhpcy4kYm9keS5maW5kKCc+IGRpdiAuTWFpbkludGVyYWN0aXZlQ2FyZC1hYnNvbHV0ZS1hY3Rpb25zJykubGVuZ3RoICYmIHRoaXMuaXNPcGVuKSB7XG5cdFx0XHR2YXIgYWJzb2x1dGVBY3Rpb25zV2lkdGggPSBNYXRoLm1heC5hcHBseShcblx0XHRcdFx0TWF0aCxcblx0XHRcdFx0dGhpcy4kYm9keVxuXHRcdFx0XHRcdC5maW5kKCc+IGRpdiAuTWFpbkludGVyYWN0aXZlQ2FyZC1hYnNvbHV0ZS1hY3Rpb25zJylcblx0XHRcdFx0XHQubWFwKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuICQodGhpcykub3V0ZXJXaWR0aCh0cnVlKTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5nZXQoKVxuXHRcdFx0KTtcblx0XHRcdHZhciBoZWFkZXJNYXhXaWR0aCA9IHRoaXMuJGhlYWRlci53aWR0aCgpIC0gYWJzb2x1dGVBY3Rpb25zV2lkdGg7XG5cdFx0XHRpZiAoaGVhZGVyTWF4V2lkdGggPiAxMCkge1xuXHRcdFx0XHR0aGlzLiRoZWFkZXJUZXh0LmNzcyh7XG5cdFx0XHRcdFx0bWF4V2lkdGg6IGhlYWRlck1heFdpZHRoICsgJ3B4Jyxcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLiRib2R5XG5cdFx0XHRcdC5maW5kKCc+IGRpdiAuTWFpbkludGVyYWN0aXZlQ2FyZC1hYnNvbHV0ZS1hY3Rpb25zIC5NYWluSW50ZXJhY3RpdmVDYXJkLS1jbG9zZScpXG5cdFx0XHRcdC5vZmYoJ2NsaWNrJylcblx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0X3RoaXMuY2xvc2UoKTtcblx0XHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xuXG5cdE1haW5JbnRlcmFjdGl2ZUNhcmQucHJvdG90eXBlLmF0dGFjaEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBfdGhpcyA9IHRoaXM7XG5cdFx0dGhpcy4kaGVhZGVyXG5cdFx0XHQuZmluZCgnLk1haW5JbnRlcmFjdGl2ZUNhcmQtLW9wZW46bm90KFtkaXNhYmxlZF0pJylcblx0XHRcdC5vZmYoJ2NsaWNrJylcblx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0X3RoaXMub3Blbih0cnVlKTtcblx0XHRcdH0pO1xuXHRcdHRoaXMuJGhlYWRlclxuXHRcdFx0LmZpbmQoJy5NYWluSW50ZXJhY3RpdmVDYXJkLS1jbG9zZScpXG5cdFx0XHQub2ZmKCdjbGljaycpXG5cdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdF90aGlzLmNsb3NlKCk7XG5cdFx0XHR9KTtcblx0XHRpZiAodGhpcy5hbGxvd09wZW5pbmcpIHtcblx0XHRcdGNvbnN0IGNsaWNrQWN0aW9uID0gZnVuY3Rpb24oZXZ0KSB7XG5cdFx0XHRcdGlmICgkKGV2dC50YXJnZXQpLmhhc0NsYXNzKCdCdXR0b24nKSkge1xuXHRcdFx0XHRcdC8vIHRoZSB1c2VyIGNsaWNrZWQgb24gYSBCdXR0b24gaW5zaWRlIHRoZSBoZWFkZXIsIG5vdGhpbmcgdG8gZG8gaGVyZVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGlmIChfdGhpcy5pc09wZW4pIHtcblx0XHRcdFx0XHRcdGlmIChcblx0XHRcdFx0XHRcdFx0X3RoaXMuJHdpZGdldC5maW5kKCdpZnJhbWUnKS5sZW5ndGggPT09IDEgJiZcblx0XHRcdFx0XHRcdFx0IV90aGlzLiR3aWRnZXQuZmluZCgnaWZyYW1lJykuaGFzQ2xhc3MoJ2NrZV93eXNpd3lnX2ZyYW1lJylcblx0XHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0XHQvLyBkbyBub3QgY2xvc2Ugd2hlbiBhbmQgaWZyYW1lIGV4aXN0c1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChcblx0XHRcdFx0XHRcdFx0X3RoaXMuJGFjdGlvbnMuZmluZCgnYScpLmxlbmd0aCA+IDAgJiZcblx0XHRcdFx0XHRcdFx0X3RoaXMuJGFjdGlvbnMuZmluZCgnLk1haW5JbnRlcmFjdGl2ZUNhcmQtLWNsb3NlJykubGVuZ3RoID4gMFxuXHRcdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHRcdC8vIGRvIG5vdCBjbG9zZSB3aGVuIHRoZSBjYXJkIGhhcyBhY3Rpb25zXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRfdGhpcy5jbG9zZSgpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRfdGhpcy5vcGVuKHRydWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0dGhpcy4kaGVhZGVyVGV4dC5vZmYoJ2NsaWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRjbGlja0FjdGlvbihlKTtcblx0XHRcdH0pO1xuXHRcdFx0dGhpcy4kZXhwYW5kSWNvbi5vZmYoJ2NsaWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRjbGlja0FjdGlvbihlKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRpZiAodGhpcy5pc1NlbGVjdGFibGUpIHtcblx0XHRcdHRoaXMuJHNlbGVjdFRyaWdnZXIub2ZmKCdjbGljaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKF90aGlzLiRzZWxlY3RQbGFjZWhvbGRlci5maW5kKCdhJykubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRcdFx0X3RoaXMuJHNlbGVjdFBsYWNlaG9sZGVyLmZpbmQoJ2EnKS5jbGljaygpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNvbnNvbGUud2FybignWW91IG5lZWQgMSBsaW5rIGluIHRoaXMgcGxhY2Vob2xkZXIuJyk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0fTtcblxuXHRNYWluSW50ZXJhY3RpdmVDYXJkLnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24oc2VuZE5vdGlmeSwgZHVyYXRpb24pIHtcblx0XHR2YXIgZHVyYXRpb24gPSBkdXJhdGlvbiB8fCBkZWZhdWx0RHVyYXRpb247XG5cdFx0dGhpcy5pc09wZW4gPSB0cnVlO1xuXHRcdHRoaXMuJGNhcmQuYWRkQ2xhc3MoJ2lzT3BlbicpO1xuXHRcdGlmICh0aGlzLmhpZGVBY3Rpb25zT25PcGVuKSB7XG5cdFx0XHR0aGlzLiRhY3Rpb25zLmNzcygnZGlzcGxheScsICdub25lJyk7XG5cdFx0fVxuXHRcdGlmICh0aGlzLmhpZGVUaXRsZU9uT3Blbikge1xuXHRcdFx0dGhpcy4kdGl0bGUuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcblx0XHR9XG5cdFx0aWYgKHRoaXMuaGlkZVN1YlRpdGxlT25PcGVuKSB7XG5cdFx0XHR0aGlzLiRzdWJUaXRsZS5maW5kKCdhJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcblx0XHR9XG5cdFx0aWYgKHRoaXMuaGlkZUNhcHRpb25Pbk9wZW4pIHtcblx0XHRcdHRoaXMuJGNhcHRpb24uY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcblx0XHR9XG5cdFx0aWYgKHRoaXMuZW1pdE5vdGlmeU9uT3Blbikge1xuXHRcdFx0aWYgKHNlbmROb3RpZnkpIHtcblx0XHRcdFx0T3NOb3RpZnlXaWRnZXQodGhpcy5NYWluSW50ZXJhY3RpdmVDYXJkRmFrZU5vdGlmeUlkLCAnb3BlbicpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy4kYm9keS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcblx0XHR9IGVsc2UgaWYgKHRoaXMuJHRyaWdnZXIpIHtcblx0XHRcdHRoaXMuJHRyaWdnZXIuY2xpY2soKTtcblx0XHRcdHRoaXMuJGJvZHkuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmIChkdXJhdGlvbiA+IDApIHtcblx0XHRcdFx0dGhpcy4kYm9keS5zbGlkZURvd24oZHVyYXRpb24pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy4kYm9keS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKHRoaXMuJHdpZGdldC5maW5kKCdpZnJhbWUnKS5sZW5ndGggPT09IDEgJiYgIXRoaXMuJHdpZGdldC5maW5kKCdpZnJhbWUnKS5oYXNDbGFzcygnY2tlX3d5c2l3eWdfZnJhbWUnKSkge1xuXHRcdFx0dmFyIGlmcmFtZUNvbnRlbnRzID0gdGhpcy4kd2lkZ2V0LmZpbmQoJ2lmcmFtZScpLmNvbnRlbnRzKCk7XG5cdFx0XHRpZnJhbWVDb250ZW50cy5maW5kKCcuTWFpbkludGVyYWN0aXZlQ2FyZC1pZnJhbWUtYWN0aW9ucycpLmNzcygndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuaGFuZGxlSGVhZGVyV2l0aEFic29sdXRlQnV0dG9ucygpO1xuXHRcdH1cblx0XHRpZiAoIXRoaXMuYWxsb3dNdWx0aXBsZU9wZW4pIHtcblx0XHRcdGFsbE1haW5JbnRlcmFjdGl2ZUNhcmRzLmZvckVhY2goaXRlbSA9PiAoaXRlbSAhPT0gdGhpcyAmJiBpdGVtLmFsbG93T3BlbmluZyA/IGl0ZW0uY2xvc2UoZHVyYXRpb24pIDogbnVsbCkpO1xuXHRcdH1cblx0fTtcblxuXHRNYWluSW50ZXJhY3RpdmVDYXJkLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uKGR1cmF0aW9uKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdHZhciBkdXJhdGlvbiA9IGR1cmF0aW9uIHx8IGRlZmF1bHREdXJhdGlvbjtcblx0XHR0aGlzLmlzT3BlbiA9IGZhbHNlO1xuXHRcdHRoaXMuJGNhcmQucmVtb3ZlQ2xhc3MoJ2lzT3BlbicpO1xuXHRcdGlmICh0aGlzLiR3aWRnZXQuZmluZCgnaWZyYW1lJykubGVuZ3RoID09PSAxICYmICF0aGlzLiR3aWRnZXQuZmluZCgnaWZyYW1lJykuaGFzQ2xhc3MoJ2NrZV93eXNpd3lnX2ZyYW1lJykpIHtcblx0XHRcdHRoaXMuJHdpZGdldFxuXHRcdFx0XHQuZmluZCgnaWZyYW1lJylcblx0XHRcdFx0LmZpbmQoJy5NYWluSW50ZXJhY3RpdmVDYXJkLWlmcmFtZS1hY3Rpb25zJylcblx0XHRcdFx0LmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcblx0XHR9XG5cdFx0dGhpcy4kYm9keS5zbGlkZVVwKGR1cmF0aW9uLCBmdW5jdGlvbigpIHtcblx0XHRcdGlmIChzZWxmLiRjYXJkLmhhc0NsYXNzKCdmb3JjZU9wZW4nKSkge1xuXHRcdFx0XHRzZWxmLiRjYXJkLnJlbW92ZUNsYXNzKCdmb3JjZU9wZW4nKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRpZiAodGhpcy5oaWRlQWN0aW9uc09uT3Blbikge1xuXHRcdFx0dGhpcy4kYWN0aW9ucy5zaG93KCk7XG5cdFx0fVxuXHRcdGlmICh0aGlzLmhpZGVUaXRsZU9uT3Blbikge1xuXHRcdFx0dGhpcy4kdGl0bGUuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG5cdFx0fVxuXHRcdGlmICh0aGlzLmhpZGVTdWJUaXRsZU9uT3Blbikge1xuXHRcdFx0dGhpcy4kc3ViVGl0bGUuZmluZCgnYScpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xuXHRcdH1cblx0XHRpZiAodGhpcy5oaWRlQ2FwdGlvbk9uT3Blbikge1xuXHRcdFx0dGhpcy4kY2FwdGlvbi5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy4kaGVhZGVyLndpZHRoKCkgLSB0aGlzLiRhY3Rpb25zLndpZHRoKCkgPiAxMCkge1xuXHRcdFx0dGhpcy4kaGVhZGVyVGV4dC5jc3Moe1xuXHRcdFx0XHRtYXhXaWR0aDogdGhpcy4kaGVhZGVyLndpZHRoKCkgLSB0aGlzLiRhY3Rpb25zLndpZHRoKCkgKyAncHgnLFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xuXG5cdE1haW5JbnRlcmFjdGl2ZUNhcmQucHJvdG90eXBlLmlzT3BlbiA9IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLmlzT3Blbjtcblx0fTtcblxuXHRTYXBwaGlyZVdpZGdldHMuTWFpbkludGVyYWN0aXZlQ2FyZCA9IHtcblx0XHRjcmVhdGU6IGNyZWF0ZSxcblx0XHRhbGw6IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIGFsbE1haW5JbnRlcmFjdGl2ZUNhcmRzO1xuXHRcdH0sXG5cdH07XG59KShqUXVlcnksIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cyk7XG5cbiQod2luZG93KS5sb2FkKGZ1bmN0aW9uKCkge1xuXHRpZiAoISEkKCcuTWFpbkludGVyYWN0aXZlQ2FyZCcpLmxlbmd0aCkge1xuXHRcdGlmICghISFTYXBwaGlyZVdpZGdldHMuTWFpbkludGVyYWN0aXZlQ2FyZC5hZnRlckFqYXhSZXF1ZXN0QmluZGVkKSB7XG5cdFx0XHRvc0FqYXhCYWNrZW5kLkJpbmRBZnRlckFqYXhSZXF1ZXN0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgYWxsTWFpbkludGVyYWN0aXZlQ2FyZHMgPSBTYXBwaGlyZVdpZGdldHMuTWFpbkludGVyYWN0aXZlQ2FyZC5hbGwoKTtcblx0XHRcdFx0YWxsTWFpbkludGVyYWN0aXZlQ2FyZHMuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XG5cdFx0XHRcdFx0ZWxlbWVudC5oYW5kbGVIZWFkZXJXaXRoQWJzb2x1dGVCdXR0b25zKCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0XHRTYXBwaGlyZVdpZGdldHMuTWFpbkludGVyYWN0aXZlQ2FyZC5hZnRlckFqYXhSZXF1ZXN0QmluZGVkID0gdHJ1ZTtcblx0XHR9XG5cdH1cblxuXHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdHZhciBhbGxNYWluSW50ZXJhY3RpdmVDYXJkcyA9IFNhcHBoaXJlV2lkZ2V0cy5NYWluSW50ZXJhY3RpdmVDYXJkLmFsbCgpO1xuXHRcdGFsbE1haW5JbnRlcmFjdGl2ZUNhcmRzLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xuXHRcdFx0ZWxlbWVudC5oYW5kbGVIZWFkZXJXaXRoQWJzb2x1dGVCdXR0b25zKCk7XG5cdFx0fSk7XG5cdH0sIDEwMDApO1xufSk7XG4iLCIvKiBDb21wb25lbnQgTWVudUJhciAqL1xyXG5TYXBwaGlyZVdpZGdldHMuTWVudUJhciA9IGZ1bmN0aW9uKGNvbmZpZykge1xyXG5cdCQoZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgJG1lbnVXaWRnZXQgPSAkKCcjJyArIGNvbmZpZy5tZW51V2lkZ2V0KTtcclxuXHJcblx0XHR2YXIgbWVudVJlc2lkZXIgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIG5hdldpZHRoID0gMDtcclxuXHRcdFx0dmFyIGF2YWlsYWJlRXNwYWNlID0gJG1lbnVXaWRnZXQuZmluZCgnLk1lbnViYXJfaXRlbScpLndpZHRoKCk7XHJcblxyXG5cdFx0XHQkbWVudVdpZGdldC5maW5kKCcuTWVudWJhcl9pdGVtIC5NZW51SXRlbScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0bmF2V2lkdGggKz0gJCh0aGlzKS5vdXRlcldpZHRoKHRydWUpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGlmIChuYXZXaWR0aCA+IGF2YWlsYWJlRXNwYWNlKSB7XHJcblx0XHRcdFx0dmFyIGxhc3RJdGVtID0gJG1lbnVXaWRnZXQuZmluZCgnLk1lbnViYXJfaXRlbSAuTWVudUl0ZW0nKS5sYXN0KCk7XHJcblx0XHRcdFx0bGFzdEl0ZW0uYXR0cignZGF0YS13aWR0aCcsIGxhc3RJdGVtLm91dGVyV2lkdGgodHJ1ZSkpO1xyXG5cdFx0XHRcdGxhc3RJdGVtLnByZXBlbmRUbygkbWVudVdpZGdldC5maW5kKCcuTWVudWJhcl9fZXh0cmFDb250YWluZXInKSk7XHJcblx0XHRcdFx0bWVudVJlc2lkZXIoKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR2YXIgZmlyc3RNb3JlRWxlbWVudCA9ICRtZW51V2lkZ2V0LmZpbmQoJy5NZW51YmFyX19leHRyYUNvbnRhaW5lciAuTWVudUl0ZW0nKS5maXJzdCgpO1xyXG5cdFx0XHRcdGlmIChuYXZXaWR0aCArIGZpcnN0TW9yZUVsZW1lbnQuZGF0YSgnd2lkdGgnKSA8IGF2YWlsYWJlRXNwYWNlKSB7XHJcblx0XHRcdFx0XHRmaXJzdE1vcmVFbGVtZW50Lmluc2VydEFmdGVyKCRtZW51V2lkZ2V0LmZpbmQoJy5NZW51YmFyX2l0ZW0gLk1lbnVJdGVtJykubGFzdCgpKTtcclxuXHRcdFx0XHRcdG1lbnVSZXNpZGVyKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoISRtZW51V2lkZ2V0LmZpbmQoJy5NZW51YmFyX19leHRyYUNvbnRhaW5lcicpLmlzKCc6ZW1wdHknKSkge1xyXG5cdFx0XHRcdCRtZW51V2lkZ2V0LmZpbmQoJy5NZW51YmFyX2V4dHJhSXRlbScpLmFkZENsYXNzKCdzaG93Jyk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0JG1lbnVXaWRnZXQuZmluZCgnLk1lbnViYXJfZXh0cmFJdGVtJykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHQkbWVudVdpZGdldC5maW5kKCcuTWVudUl0ZW0nKS5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdFx0aWYgKFxyXG5cdFx0XHRcdCEkKHRoaXMpXHJcblx0XHRcdFx0XHQucGFyZW50KClcclxuXHRcdFx0XHRcdC5oYXNDbGFzcygnTWVudWJhcl9fZXh0cmFDb250YWluZXInKVxyXG5cdFx0XHQpIHtcclxuXHRcdFx0XHRpZiAoISQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpICYmICEkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmVJbmRpY2F0b3InKSkge1xyXG5cdFx0XHRcdFx0JCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdFx0XHQkbWVudVdpZGdldC5maW5kKCcuYWN0aXZlSW5kaWNhdG9yJykuYWRkQ2xhc3MoJ3NoYWRvdycpO1xyXG5cdFx0XHRcdFx0JCh0aGlzKVxyXG5cdFx0XHRcdFx0XHQuZmluZCgnLk1lbnVJdGVtX3N1Ykl0ZW1zJylcclxuXHRcdFx0XHRcdFx0LnRvZ2dsZUNsYXNzKCdzaG93Jyk7XHJcblx0XHRcdFx0fSBlbHNlIGlmICghJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykgJiYgJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlSW5kaWNhdG9yJykpIHtcclxuXHRcdFx0XHRcdCQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdFx0JCh0aGlzKVxyXG5cdFx0XHRcdFx0XHQuZmluZCgnLk1lbnVJdGVtX3N1Ykl0ZW1zJylcclxuXHRcdFx0XHRcdFx0LnRvZ2dsZUNsYXNzKCdzaG93Jyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdCQodGhpcylcclxuXHRcdFx0XHRcdC5maW5kKCcuTWVudUl0ZW1fc3ViSXRlbXMnKVxyXG5cdFx0XHRcdFx0LnRvZ2dsZUNsYXNzKCdzaG93Jyk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdCRtZW51V2lkZ2V0LmZpbmQoJy5NZW51YmFyX2V4dHJhSXRlbSAuaWNvbicpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkbWVudVdpZGdldC5maW5kKCcuTWVudWJhcl9fZXh0cmFDb250YWluZXIgJykudG9nZ2xlQ2xhc3MoJ3Nob3cnKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdCQoZG9jdW1lbnQpLm1vdXNldXAoZSA9PiB7XHJcblx0XHRcdHZhciAkbWVudSA9ICRtZW51V2lkZ2V0LmZpbmQoJy5NZW51SXRlbS5hY3RpdmUnKTtcclxuXHRcdFx0dmFyICRtb3JlT3B0aW9ucyA9ICRtZW51V2lkZ2V0LmZpbmQoJy5NZW51YmFyX2V4dHJhSXRlbScpO1xyXG5cclxuXHRcdFx0Ly8gaWYgdGhlIHRhcmdldCBvZiB0aGUgY2xpY2sgaXNuJ3QgdGhlIG1lbnUgb3IgYSBkZXNjZW5kYW50IG9mIHRoZSBtZW51XHJcblx0XHRcdGlmICgkbWVudS5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0aWYgKCEkbWVudS5pcyhlLnRhcmdldCkgJiYgJG1lbnUuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDApIHtcclxuXHRcdFx0XHRcdCRtZW51LmZpbmQoJy5NZW51SXRlbV9zdWJJdGVtcycpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XHJcblx0XHRcdFx0XHQkKCcuYWN0aXZlSW5kaWNhdG9yJykucmVtb3ZlQ2xhc3MoJ3NoYWRvdycpO1xyXG5cdFx0XHRcdFx0JG1lbnVXaWRnZXQuZmluZCgnLk1lbnVJdGVtLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICghJG1vcmVPcHRpb25zLmlzKGUudGFyZ2V0KSAmJiAkbW9yZU9wdGlvbnMuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDApIHtcclxuXHRcdFx0XHQkbW9yZU9wdGlvbnMuZmluZCgnLk1lbnViYXJfX2V4dHJhQ29udGFpbmVyJykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcclxuXHRcdFx0XHQkKCcuYWN0aXZlSW5kaWNhdG9yJykucmVtb3ZlQ2xhc3MoJ3NoYWRvdycpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHQkKHdpbmRvdykub24oJ3Jlc2l6ZSBsb2FkJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdG1lbnVSZXNpZGVyKCk7XHJcblx0XHR9KTtcclxuXHR9KTtcclxufTtcclxuIiwiLyogQ29tcG9uZW50IE11bHRpcGxlU2VsZWN0aW9uQnV0dG9uICovXHJcblNhcHBoaXJlV2lkZ2V0cy5NdWx0aXBsZVNlbGVjdGlvbkJ1dHRvbiA9IGZ1bmN0aW9uKFdyYXBwZXJJZCkge1xyXG5cdGNvbnN0ICR3aWRnZXQgPSAkKFdyYXBwZXJJZCk7XHJcblx0Y29uc3QgJGNvbnRyb2wgPSAkd2lkZ2V0LmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpO1xyXG5cclxuXHRpZiAoJChXcmFwcGVySWQgKyAnIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXScpLmlzKCc6ZGlzYWJsZWQnKSkge1xyXG5cdFx0JHdpZGdldC5hZGRDbGFzcygnZGlzYWJsZWQnKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0JHdpZGdldC5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKTtcclxuXHR9XHJcblxyXG5cdGlmICgkKFdyYXBwZXJJZCArICcgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykuaXMoJzpjaGVja2VkJykpIHtcclxuXHRcdCR3aWRnZXQuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHQkd2lkZ2V0LnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHR9XHJcblxyXG5cdCR3aWRnZXQuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykuY2hhbmdlKGZ1bmN0aW9uKCkge1xyXG5cdFx0Y29uc3QgJHBhcmVudCA9ICQodGhpcykucGFyZW50KCk7XHJcblxyXG5cdFx0aWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpICRwYXJlbnQucGFyZW50KCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0ZWxzZSAkcGFyZW50LnBhcmVudCgpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHR9KTtcclxuXHJcblx0JHdpZGdldC5maW5kKCcuTXVsdGlwbGVTZWxlY3Rpb25CdXR0b24tbGFiZWwnKS5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdCRjb250cm9sWzBdLmNsaWNrKCk7XHJcblxyXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0aWYgKCRjb250cm9sLmlzKCc6Y2hlY2tlZCcpKSAkd2lkZ2V0LmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0ZWxzZSAkd2lkZ2V0LnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdH0sIDEwKTtcclxuXHR9KTtcclxufTtcclxuIiwiLyogQ29tcG9uZW50IENvbmZpcm1hdGlvblBhbmVsM09wdGlvbnMgQ29uZmlybWF0aW9uUGFuZWwgc2FtZSBqYXZhc2NyaXB0IGNvZGUqL1xyXG5cclxuU2FwcGhpcmVXaWRnZXRzLkNvbmZpcm1hdGlvblBhbmVsID0ge1xyXG5cdGlzQW55UGFuZWxPcGVuZWQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoJ2JvZHknKS5oYXNDbGFzcygnUGFuZWxPcGVuZWQnKSAmJiAkKCcuUGFuZWxDb250YWluZXI6dmlzaWJsZScpLmxlbmd0aDtcclxuXHR9LFxyXG5cclxuXHR0b2dnbGVQYW5lbDogZnVuY3Rpb24oUGFuZWxJZCkge1xyXG5cdFx0aWYgKCFPc1ZhbGlkYXRvck9uU3VibWl0KCkpIHJldHVybjtcclxuXHJcblx0XHRpZiAoIVNhcHBoaXJlV2lkZ2V0cy5Db25maXJtYXRpb25QYW5lbC5pc0FueVBhbmVsT3BlbmVkKCkpIHtcclxuXHRcdFx0JCgnYm9keScpLmFkZENsYXNzKCdQYW5lbE9wZW5lZCcpO1xyXG5cdFx0XHQkKCcjJyArIFBhbmVsSWQpLmZhZGVJbigxNDApO1xyXG5cclxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHQkKCcjJyArIFBhbmVsSWQpXHJcblx0XHRcdFx0XHQuZmluZCgnLlBhbmVsQ29udGFpbmVyJylcclxuXHRcdFx0XHRcdC5zbGlkZVRvZ2dsZSgxNTApO1xyXG5cdFx0XHR9LCAxMDApO1xyXG5cclxuXHRcdFx0aWYgKHdpbmRvdy5mcmFtZUVsZW1lbnQpIHtcclxuXHRcdFx0XHRTYXBwaGlyZVdpZGdldHMuUmVtb3RlQXBwb2ludG1lbnQuc2V0TW9kYWxNaW5pbWl6ZWQoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0sXHJcblxyXG5cdGNsb3NlUGFuZWw6IGZ1bmN0aW9uKFBhbmVsSWQpIHtcclxuXHRcdCQoJ2JvZHknKS5yZW1vdmVDbGFzcygnUGFuZWxPcGVuZWQnKTtcclxuXHRcdCQoJyMnICsgUGFuZWxJZCkuZmFkZU91dCgxNDApO1xyXG5cclxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQoJyMnICsgUGFuZWxJZClcclxuXHRcdFx0XHQuZmluZCgnLlBhbmVsQ29udGFpbmVyJylcclxuXHRcdFx0XHQuc2xpZGVVcCgxNTApO1xyXG5cdFx0fSwgMTAwKTtcclxuXHR9LFxyXG5cclxuXHRzZXRQYW5lbEJlaGF2aW9yOiBmdW5jdGlvbigpIHtcclxuXHRcdCQoJy5QYW5lbFtjb25maXJtYXRpb24tcGFuZWwtdHJpZ2dlci1lbGVtZW50aWRdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIHRoaXNfcGFuZWwgPSAkKHRoaXMpO1xyXG5cdFx0XHQkKCcjJyArIHRoaXNfcGFuZWwuYXR0cignY29uZmlybWF0aW9uLXBhbmVsLXRyaWdnZXItZWxlbWVudGlkJykgKyAnJylcclxuXHRcdFx0XHQub2ZmKCdjbGljaycpXHJcblx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0U2FwcGhpcmVXaWRnZXRzLkNvbmZpcm1hdGlvblBhbmVsLnRvZ2dsZVBhbmVsKHRoaXNfcGFuZWwuYXR0cignaWQnKSk7XHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9LFxyXG59O1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblx0U2FwcGhpcmVXaWRnZXRzLkNvbmZpcm1hdGlvblBhbmVsLnNldFBhbmVsQmVoYXZpb3IoKTtcclxuXHRpZiAob3NBamF4QmFja2VuZC5FdmVudEhhbmRsZXJzLkFmdGVyQWpheFJlcXVlc3QudG9TdHJpbmcoKS5pbmRleE9mKCdzZXRQYW5lbEJlaGF2aW9yJykgPT0gLTEpIHtcclxuXHRcdG9zQWpheEJhY2tlbmQuQmluZEFmdGVyQWpheFJlcXVlc3QoU2FwcGhpcmVXaWRnZXRzLkNvbmZpcm1hdGlvblBhbmVsLnNldFBhbmVsQmVoYXZpb3IpO1xyXG5cdH1cclxufSk7XHJcbiIsIi8qIENvbXBvbmVudCBDb25maXJtYXRpb25Qb3B1cCAqL1xyXG52YXIgX2lzSW5JZnJhbWUgPSB3aW5kb3cuZnJhbWVFbGVtZW50ICE9IHVuZGVmaW5lZCB8fCBmYWxzZTtcclxuU2FwcGhpcmVXaWRnZXRzLkNvbmZpcm1hdGlvblBvcHVwID0ge1xyXG5cdGlzQW55Q29uZmlybWF0aW9uT3BlbmVkOiBmdW5jdGlvbigpIHtcclxuXHRcdGlmIChfaXNJbklmcmFtZSkge1xyXG5cdFx0XHRyZXR1cm4gd2luZG93LnRvcC4kKCdib2R5JykuaGFzQ2xhc3MoJ2NvbmZpcm1hdGlvbi1vcGVuZWQnKSAmJiB3aW5kb3cudG9wLiQoJy5jb25maXJtLWNvbnRhaW5lcjp2aXNpYmxlJykubGVuZ3RoO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuICQoJ2JvZHknKS5oYXNDbGFzcygnY29uZmlybWF0aW9uLW9wZW5lZCcpICYmICQoJy5jb25maXJtLWNvbnRhaW5lcjp2aXNpYmxlJykubGVuZ3RoO1xyXG5cdFx0fVxyXG5cdH0sXHJcblxyXG5cdHRvZ2dsZUNvbmZpcm06IGZ1bmN0aW9uKF9pZCwgX3F1ZXN0aW9uLCBfbWVzc2FnZSwgX25vdGlmeUlkLCBfSGFzTm90aWZ5T25DYW5jZWwpIHtcclxuXHRcdGlmICghT3NWYWxpZGF0b3JPblN1Ym1pdCgpKSByZXR1cm47XHJcblxyXG5cdFx0aWYgKCF0aGlzLmlzQW55Q29uZmlybWF0aW9uT3BlbmVkKCkpIHtcclxuXHRcdFx0dmFyIF9ib2R5ID0gJCgnYm9keScpO1xyXG5cdFx0XHR2YXIgX2JvZHlKUyA9IGRvY3VtZW50LmJvZHk7XHJcblx0XHRcdGlmIChfaXNJbklmcmFtZSkge1xyXG5cdFx0XHRcdF9ib2R5ID0gd2luZG93LnRvcC4kKCdib2R5Jyk7XHJcblx0XHRcdFx0X2JvZHlKUyA9IHdpbmRvdy50b3AuZG9jdW1lbnQuYm9keTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0X2JvZHkuYWRkQ2xhc3MoJ2NvbmZpcm1hdGlvbi1vcGVuZWQnKTtcclxuXHJcblx0XHRcdHZhciBfY29uZmlybUlkID0gJ2NvbmZpcm1fJyArIF9pZDtcclxuXHJcblx0XHRcdHZhciBfY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XHJcblx0XHRcdF9jb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsIF9jb25maXJtSWQpO1xyXG5cdFx0XHRfY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY29uZmlybSBjb25maXJtLXdiJyk7XHJcblx0XHRcdF9jb250YWluZXIuc2V0QXR0cmlidXRlKCdjb25maXJtLXRyaWdnZXItZWxlbWVudGlkJywgX2lkKTtcclxuXHJcblx0XHRcdHZhciBfYmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xyXG5cdFx0XHRfYmFja2dyb3VuZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NvbmZpcm0tYmFja2dyb3VuZCBjb25maXJtLXdiJyk7XHJcblx0XHRcdF9iYWNrZ3JvdW5kLnNldEF0dHJpYnV0ZSgnaWQnLCAnYmdfJyArIF9jb25maXJtSWQpO1xyXG5cdFx0XHRfY29udGFpbmVyLmFwcGVuZENoaWxkKF9iYWNrZ3JvdW5kKTtcclxuXHJcblx0XHRcdHZhciBfY29uZmlybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xyXG5cdFx0XHRfY29uZmlybS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NvbmZpcm0tY29udGFpbmVyIGNvbmZpcm0td2InKTtcclxuXHRcdFx0X2NvbnRhaW5lci5hcHBlbmRDaGlsZChfY29uZmlybSk7XHJcblxyXG5cdFx0XHR2YXIgX2NvbmZpcm1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xyXG5cdFx0XHRfY29uZmlybVRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY29uZmlybS10aXRsZScpO1xyXG5cdFx0XHR2YXIgX3RpdGxlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoX3F1ZXN0aW9uKTtcclxuXHRcdFx0X2NvbmZpcm1UaXRsZS5hcHBlbmRDaGlsZChfdGl0bGUpO1xyXG5cdFx0XHRfY29uZmlybS5hcHBlbmRDaGlsZChfY29uZmlybVRpdGxlKTtcclxuXHJcblx0XHRcdHZhciBfY29uZmlybU1zZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xyXG5cdFx0XHRfY29uZmlybU1zZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NvbmZpcm0tbWVzc2FnZScpO1xyXG5cclxuXHRcdFx0X2NvbmZpcm1Nc2cuaW5uZXJIVE1MID0gX21lc3NhZ2U7IC8qIFNldCBIVE1MIHRvIHJlbmRlciB0aGUgbWVzc2FnZSBIVE1MIHRhZ3MsIHNpbWlsYXIgdG8gdGhlIEVzY2FwZSBDb250ZW50IHNldCBhcyBOby4gKi9cclxuXHRcdFx0X2NvbmZpcm0uYXBwZW5kQ2hpbGQoX2NvbmZpcm1Nc2cpO1xyXG5cclxuXHRcdFx0dmFyIF9jb25maXJtQWN0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xyXG5cdFx0XHRfY29uZmlybUFjdGlvbnMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb25maXJtLWFjdGlvbnMnKTtcclxuXHRcdFx0X2NvbmZpcm0uYXBwZW5kQ2hpbGQoX2NvbmZpcm1BY3Rpb25zKTtcclxuXHJcblx0XHRcdHZhciBfbm9CdG5MbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdBJyk7XHJcblx0XHRcdF9ub0J0bkxuay5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ0J1dHRvbiBUaGlyZCBNdWx0aU1hcmdpblJpZ2h0MTAnKTtcclxuXHRcdFx0X25vQnRuTG5rLnNldEF0dHJpYnV0ZSgnY2FuY2VsLWJ1dHRvbicsICdjYW5jZWwtYnV0dG9uJyk7XHJcblx0XHRcdF9ub0J0bkxuay5zZXRBdHRyaWJ1dGUoJ3VpJywgJ0NvbmZpcm1ObzEnKTtcclxuXHRcdFx0aWYgKF9IYXNOb3RpZnlPbkNhbmNlbCA9PSAnVHJ1ZScpIHtcclxuXHRcdFx0XHRpZiAoX2lzSW5JZnJhbWUpIHtcclxuXHRcdFx0XHRcdF9ub0J0bkxuay5zZXRBdHRyaWJ1dGUoXHJcblx0XHRcdFx0XHRcdCdvbmNsaWNrJyxcclxuXHRcdFx0XHRcdFx0J2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiJyArXHJcblx0XHRcdFx0XHRcdFx0J2lmcmFtZV8nICtcclxuXHRcdFx0XHRcdFx0XHRfaWQgK1xyXG5cdFx0XHRcdFx0XHRcdCdcIikuY29udGVudFdpbmRvdy5Pc05vdGlmeVdpZGdldChcIicgK1xyXG5cdFx0XHRcdFx0XHRcdF9ub3RpZnlJZCArXHJcblx0XHRcdFx0XHRcdFx0J1wiLFwiQ0FOQ0VMXCIpOyBTYXBwaGlyZVdpZGdldHMuQ29uZmlybWF0aW9uUG9wdXAuY2xvc2VDb25maXJtUG9wdXAoXCInICtcclxuXHRcdFx0XHRcdFx0XHRfY29uZmlybUlkICtcclxuXHRcdFx0XHRcdFx0XHQnXCIpOydcclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdF9ub0J0bkxuay5zZXRBdHRyaWJ1dGUoXHJcblx0XHRcdFx0XHRcdCdvbmNsaWNrJyxcclxuXHRcdFx0XHRcdFx0J09zTm90aWZ5V2lkZ2V0KFwiJyArXHJcblx0XHRcdFx0XHRcdFx0X25vdGlmeUlkICtcclxuXHRcdFx0XHRcdFx0XHQnXCIsXCJDQU5DRUxcIik7IFNhcHBoaXJlV2lkZ2V0cy5Db25maXJtYXRpb25Qb3B1cC5jbG9zZUNvbmZpcm1Qb3B1cChcIicgK1xyXG5cdFx0XHRcdFx0XHRcdF9jb25maXJtSWQgK1xyXG5cdFx0XHRcdFx0XHRcdCdcIik7J1xyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0aWYgKF9pc0luSWZyYW1lKSB7XHJcblx0XHRcdFx0XHRfbm9CdG5Mbmsuc2V0QXR0cmlidXRlKFxyXG5cdFx0XHRcdFx0XHQnb25jbGljaycsXHJcblx0XHRcdFx0XHRcdCdTYXBwaGlyZVdpZGdldHMuQ29uZmlybWF0aW9uUG9wdXAuY2xvc2VDb25maXJtUG9wdXAoXCInICsgX2NvbmZpcm1JZCArICdcIik7J1xyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0X25vQnRuTG5rLnNldEF0dHJpYnV0ZShcclxuXHRcdFx0XHRcdFx0J29uY2xpY2snLFxyXG5cdFx0XHRcdFx0XHQnU2FwcGhpcmVXaWRnZXRzLkNvbmZpcm1hdGlvblBvcHVwLmNsb3NlQ29uZmlybVBvcHVwKFwiJyArIF9jb25maXJtSWQgKyAnXCIpOydcclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR2YXIgX25vQnRuID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ05vJyk7XHJcblx0XHRcdF9ub0J0bkxuay5hcHBlbmRDaGlsZChfbm9CdG4pO1xyXG5cdFx0XHRfY29uZmlybUFjdGlvbnMuYXBwZW5kQ2hpbGQoX25vQnRuTG5rKTtcclxuXHJcblx0XHRcdHZhciBfeWVzQnRuTG5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnQScpO1xyXG5cdFx0XHRfeWVzQnRuTG5rLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnQnV0dG9uIFNldEFzVmFsaWQgSXNfRGVmYXVsdCcpO1xyXG5cdFx0XHRfeWVzQnRuTG5rLnNldEF0dHJpYnV0ZSgnY2FuY2VsLWJ1dHRvbicsICcnKTtcclxuXHRcdFx0X3llc0J0bkxuay5zZXRBdHRyaWJ1dGUoJ3VpJywgJ0NvbmZpcm1ZZXMxJyk7XHJcblxyXG5cdFx0XHRpZiAoX2lzSW5JZnJhbWUpIHtcclxuXHRcdFx0XHRfeWVzQnRuTG5rLnNldEF0dHJpYnV0ZShcclxuXHRcdFx0XHRcdCdvbmNsaWNrJyxcclxuXHRcdFx0XHRcdCdkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIicgK1xyXG5cdFx0XHRcdFx0XHQnaWZyYW1lXycgK1xyXG5cdFx0XHRcdFx0XHRfaWQgK1xyXG5cdFx0XHRcdFx0XHQnXCIpLmNvbnRlbnRXaW5kb3cuT3NOb3RpZnlXaWRnZXQoXCInICtcclxuXHRcdFx0XHRcdFx0X25vdGlmeUlkICtcclxuXHRcdFx0XHRcdFx0J1wiLFwiT0tcIik7IFNhcHBoaXJlV2lkZ2V0cy5Db25maXJtYXRpb25Qb3B1cC5jbG9zZUNvbmZpcm1Qb3B1cChcIicgK1xyXG5cdFx0XHRcdFx0XHRfY29uZmlybUlkICtcclxuXHRcdFx0XHRcdFx0J1wiKTsnXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRfeWVzQnRuTG5rLnNldEF0dHJpYnV0ZShcclxuXHRcdFx0XHRcdCdvbmNsaWNrJyxcclxuXHRcdFx0XHRcdCdPc05vdGlmeVdpZGdldChcIicgK1xyXG5cdFx0XHRcdFx0XHRfbm90aWZ5SWQgK1xyXG5cdFx0XHRcdFx0XHQnXCIsXCJPS1wiKTsgU2FwcGhpcmVXaWRnZXRzLkNvbmZpcm1hdGlvblBvcHVwLmNsb3NlQ29uZmlybVBvcHVwKFwiJyArXHJcblx0XHRcdFx0XHRcdF9jb25maXJtSWQgK1xyXG5cdFx0XHRcdFx0XHQnXCIpOydcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHZhciBfeWVzQnRuID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ1llcycpO1xyXG5cdFx0XHRfeWVzQnRuTG5rLmFwcGVuZENoaWxkKF95ZXNCdG4pO1xyXG5cdFx0XHRfY29uZmlybUFjdGlvbnMuYXBwZW5kQ2hpbGQoX3llc0J0bkxuayk7XHJcblxyXG5cdFx0XHRfY29uZmlybS5hcHBlbmRDaGlsZChfY29uZmlybUFjdGlvbnMpO1xyXG5cclxuXHRcdFx0X2NvbnRhaW5lci5hcHBlbmRDaGlsZChfY29uZmlybSk7XHJcblxyXG5cdFx0XHRfYm9keUpTLmFwcGVuZENoaWxkKF9jb250YWluZXIpO1xyXG5cclxuXHRcdFx0aWYgKF9pc0luSWZyYW1lKSB7XHJcblx0XHRcdFx0d2luZG93LnRvcC4kKCcjYmdfJyArIF9jb25maXJtSWQpLmZhZGVJbigxNDApO1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHR3aW5kb3cudG9wXHJcblx0XHRcdFx0XHRcdC4kKCcjJyArIF9jb25maXJtSWQpXHJcblx0XHRcdFx0XHRcdC5maW5kKCcuY29uZmlybS1jb250YWluZXInKVxyXG5cdFx0XHRcdFx0XHQuc2xpZGVUb2dnbGUoMTUwKTtcclxuXHRcdFx0XHRcdHdpbmRvdy50b3AuJCgnIycgKyBfY29uZmlybUlkICsgJyBbY2FuY2VsLWJ1dHRvbl0nKS5mb2N1cygpO1xyXG5cdFx0XHRcdH0sIDEwMCk7XHJcblxyXG5cdFx0XHRcdFNhcHBoaXJlV2lkZ2V0cy5SZW1vdGVBcHBvaW50bWVudC5zZXRNb2RhbE1pbmltaXplZCgpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdCQoJyNiZ18nICsgX2NvbmZpcm1JZCkuZmFkZUluKDE0MCk7XHJcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdCQoJyMnICsgX2NvbmZpcm1JZClcclxuXHRcdFx0XHRcdFx0LmZpbmQoJy5jb25maXJtLWNvbnRhaW5lcicpXHJcblx0XHRcdFx0XHRcdC5zbGlkZVRvZ2dsZSgxNTApO1xyXG5cdFx0XHRcdFx0JCgnIycgKyBfY29uZmlybUlkICsgJyBbY2FuY2VsLWJ1dHRvbl0nKS5mb2N1cygpO1xyXG5cdFx0XHRcdH0sIDEwMCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9LFxyXG5cclxuXHRjbG9zZUNvbmZpcm1Qb3B1cDogZnVuY3Rpb24oX2NvbmZpcm1JZCkge1xyXG5cdFx0JCgnYm9keScpLnJlbW92ZUNsYXNzKCdjb25maXJtYXRpb24tb3BlbmVkJyk7XHJcblx0XHQkKCdib2R5JykuY3NzKCdvdmVyZmxvdy15JywgJ3Njcm9sbCcpO1xyXG5cdFx0JCgnI2JnXycgKyBfY29uZmlybUlkKS5mYWRlT3V0KDE0MCk7XHJcblxyXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0JCgnIycgKyBfY29uZmlybUlkKVxyXG5cdFx0XHRcdC5maW5kKCcuY29uZmlybS1jb250YWluZXInKVxyXG5cdFx0XHRcdC5zbGlkZVVwKDE1MCk7XHJcblx0XHRcdCQoJyMnICsgX2NvbmZpcm1JZCkucmVtb3ZlKCk7XHJcblx0XHR9LCAxMDApO1xyXG5cdH0sXHJcblxyXG5cdGNyZWF0ZTogZnVuY3Rpb24oX2lkLCBfcXVlc3Rpb24sIF9tZXNzYWdlLCBfbm90aWZ5SWQsIF9IYXNOb3RpZnlPbkNhbmNlbCkge1xyXG5cdFx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQoJyMnICsgX2lkKVxyXG5cdFx0XHRcdC5vZmYoJ2NsaWNrJylcclxuXHRcdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRTYXBwaGlyZVdpZGdldHMuQ29uZmlybWF0aW9uUG9wdXAudG9nZ2xlQ29uZmlybShfaWQsIF9xdWVzdGlvbiwgX21lc3NhZ2UsIF9ub3RpZnlJZCwgX0hhc05vdGlmeU9uQ2FuY2VsKTtcclxuXHRcdFx0XHRcdGlmIChfaXNJbklmcmFtZSkge1xyXG5cdFx0XHRcdFx0XHR3aW5kb3cuZnJhbWVFbGVtZW50LnNldEF0dHJpYnV0ZSgnbWVudS1pZCcsIF9pZCk7XHJcblx0XHRcdFx0XHRcdHdpbmRvdy5mcmFtZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsICdpZnJhbWVfJyArIF9pZCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9LFxyXG59O1xyXG4iLCIvKiBDb21wb25lbnQgTW9kYWxQb3B1cCAqL1xyXG5cclxudmFyIF9pc0luSWZyYW1lID0gd2luZG93LmZyYW1lRWxlbWVudCAhPSB1bmRlZmluZWQgfHwgZmFsc2U7XHJcblxyXG5TYXBwaGlyZVdpZGdldHMuTW9kYWxQb3B1cCA9IHtcclxuXHRjcmVhdGU6IGZ1bmN0aW9uKHdpZGdldElkKSB7XHJcblx0XHQkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHRcdFx0Ly8gVXNlIHRoaXMgY29kZSB0byBhcHBlbmQgdGhlIGNvbXBvbmVudCB0byB0aGUgcm9vdCBib2R5XHJcblx0XHRcdC8vIHdpbmRvdy5mcmFtZUVsZW1lbnQgJiYgJCh3aW5kb3cuZnJhbWVFbGVtZW50KS5jbG9zZXN0KCcuTWFpbkludGVyYWN0aXZlQ2FyZC1ib2R5JykubGVuZ3RoID4gMFxyXG5cdFx0XHRpZiAoZmFsc2UpIHtcclxuXHRcdFx0XHRjb25zdCAkcGFyZW50Qm9keSA9IHBhcmVudC4kKCdib2R5Jyk7XHJcblx0XHRcdFx0bGV0ICR3aWRnZXQgPSAkKGAjJHt3aWRnZXRJZH1gKTtcclxuXHJcblx0XHRcdFx0aWYgKCRwYXJlbnRCb2R5LmZpbmQoJHdpZGdldCkubGVuZ3RoID09PSAwKSB7XHJcblx0XHRcdFx0XHQkcGFyZW50Qm9keS5hcHBlbmQoXHJcblx0XHRcdFx0XHRcdCR3aWRnZXRcclxuXHRcdFx0XHRcdFx0XHQud3JhcCgnPGRpdi8+JylcclxuXHRcdFx0XHRcdFx0XHQucGFyZW50KClcclxuXHRcdFx0XHRcdFx0XHQuZGV0YWNoKClcclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQkd2lkZ2V0ID0gcGFyZW50LiQoYCMke3dpZGdldElkfWApO1xyXG5cdFx0XHRcdGNvbnN0ICRidG5DbG9zZSA9ICR3aWRnZXQuZmluZCgnLm1vZGFsUG9wdXBfY2xvc2UnKTtcclxuXHJcblx0XHRcdFx0JGJ0bkNsb3NlLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0JHdpZGdldC5yZW1vdmVDbGFzcygnT3BlbicpO1xyXG5cdFx0XHRcdFx0JHdpZGdldC5yZW1vdmVDbGFzcygnc2hvd2Nsb3NlJyk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Y29uc3QgJHdpZGdldCA9ICQoYCMke3dpZGdldElkfWApO1xyXG5cdFx0XHRcdGNvbnN0ICRidG5DbG9zZSA9ICR3aWRnZXQuZmluZCgnLm1vZGFsUG9wdXBfY2xvc2UnKTtcclxuXHJcblx0XHRcdFx0aWYgKHdpbmRvdy5mcmFtZUVsZW1lbnQpIHtcclxuXHRcdFx0XHRcdGNvbnN0ICRtb2RhbFJlbW90ZUFwcHQgPSB3aW5kb3cudG9wLiQoJy5SZW1vdGVBcHBvaW50bWVudCcpO1xyXG5cclxuXHRcdFx0XHRcdGlmICgkbW9kYWxSZW1vdGVBcHB0Lmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0XHRjb25zdCAkbWluaW1pemVNb2RhbCA9ICRtb2RhbFJlbW90ZUFwcHQuZmluZCgnLk1pbmltaXplJyk7XHJcblx0XHRcdFx0XHRcdCRtaW5pbWl6ZU1vZGFsLmNsaWNrKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQkYnRuQ2xvc2UuY2xpY2soZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHQkd2lkZ2V0LnJlbW92ZUNsYXNzKCdPcGVuJyk7XHJcblx0XHRcdFx0XHQkd2lkZ2V0LnJlbW92ZUNsYXNzKCdzaG93Y2xvc2UnKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fSxcclxufTtcclxuIiwiLyogQ29tcG9uZW50IFBhbmVsQnlJRE5vdGlmeSAqL1xyXG52YXIgcGFuZWxOb3RpZnlXaWRnZXQ7XHJcblNhcHBoaXJlV2lkZ2V0cy5QYW5lbEJ5SWROb3RpZnkgPSB7XHJcblx0aXNBbnlQYW5lbE9wZW5lZERlcHJlY2F0ZWQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoJ2JvZHknKS5oYXNDbGFzcygnUGFuZWxPcGVuZWQnKTtcclxuXHR9LFxyXG5cdHRvZ2dsZVBhbmVsQnlOb3RpZnk6IGZ1bmN0aW9uKElkKSB7XHJcblx0XHRpZiAoIWlzQW55UGFuZWxPcGVuZWREZXByZWNhdGVkKCkpIHtcclxuXHRcdFx0JCgnYm9keScpLmFkZENsYXNzKCdQYW5lbE9wZW5lZCcpO1xyXG5cdFx0XHQkKCcjJyArIElkKVxyXG5cdFx0XHRcdC5wYXJlbnRzKCcuVG9nZ2xlQnV0dG9uJylcclxuXHRcdFx0XHQucGFyZW50KClcclxuXHRcdFx0XHQuY2hpbGRyZW4oJy5QYW5lbCcpXHJcblx0XHRcdFx0LmZhZGVJbigxNDApO1xyXG5cclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRpZiAoanVzdERyYWdnZWQgPT0gZmFsc2UpIHtcclxuXHRcdFx0XHRcdCQoJy5QYW5lbENvbnRhaW5lcicpXHJcblx0XHRcdFx0XHRcdC5jc3MoJ21hcmdpbi1sZWZ0JywgcGFuZWxNYXJnaW5MZWZ0KVxyXG5cdFx0XHRcdFx0XHQuY3NzKCdsZWZ0JywgcGFuZWxMZWZ0KVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MocGFuZWxBcnJvd0NsYXNzKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gY2F0Y2ggKGUpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHQkKCcjJyArIElkKVxyXG5cdFx0XHRcdFx0LnBhcmVudHMoJy5Ub2dnbGVCdXR0b24nKVxyXG5cdFx0XHRcdFx0LnBhcmVudCgpXHJcblx0XHRcdFx0XHQuY2hpbGRyZW4oJy5QYW5lbCcpXHJcblx0XHRcdFx0XHQuY2hpbGRyZW4oJy5QYW5lbENvbnRhaW5lcicpXHJcblx0XHRcdFx0XHQuc2xpZGVEb3duKDE1MCk7XHJcblx0XHRcdH0sIDEwMCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ1BhbmVsT3BlbmVkJyk7XHJcblx0XHRcdCQoJyMnICsgSWQpXHJcblx0XHRcdFx0LnBhcmVudHMoJy5Ub2dnbGVCdXR0b24nKVxyXG5cdFx0XHRcdC5wYXJlbnQoKVxyXG5cdFx0XHRcdC5jaGlsZHJlbignLlBhbmVsJylcclxuXHRcdFx0XHQuZmFkZU91dCgxNDApO1xyXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdCQoJyMnICsgSWQpXHJcblx0XHRcdFx0XHQucGFyZW50cygnLlRvZ2dsZUJ1dHRvbicpXHJcblx0XHRcdFx0XHQucGFyZW50KClcclxuXHRcdFx0XHRcdC5jaGlsZHJlbignLlBhbmVsJylcclxuXHRcdFx0XHRcdC5jaGlsZHJlbignLlBhbmVsQ29udGFpbmVyJylcclxuXHRcdFx0XHRcdC5zbGlkZVVwKDE1MCk7XHJcblx0XHRcdH0sIDEwMCk7XHJcblx0XHR9XHJcblx0fSxcclxuXHR0b2dnbGVQYW5lbE5vdGlmeUJ5SWQ6IGZ1bmN0aW9uKElkKSB7XHJcblx0XHQkKCdib2R5JykudG9nZ2xlQ2xhc3MoJ1BhbmVsT3BlbmVkJyk7XHJcblx0XHQkKCcjJyArIElkKVxyXG5cdFx0XHQucGFyZW50cygnLlRvZ2dsZUJ1dHRvbicpXHJcblx0XHRcdC5wYXJlbnQoKVxyXG5cdFx0XHQuY2hpbGRyZW4oJy5QYW5lbCcpXHJcblx0XHRcdC5mYWRlVG9nZ2xlKDE0MCk7XHJcblxyXG5cdFx0cGFuZWxOb3RpZnlXaWRnZXQgPSAkKCcjJyArIElkKVxyXG5cdFx0XHQucGFyZW50cygnLlRvZ2dsZUJ1dHRvbicpXHJcblx0XHRcdC5hdHRyKCdOb3RpZnlJZCcpO1xyXG5cclxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQoJyMnICsgSWQpXHJcblx0XHRcdFx0LnBhcmVudHMoJy5Ub2dnbGVCdXR0b24nKVxyXG5cdFx0XHRcdC5wYXJlbnQoKVxyXG5cdFx0XHRcdC5jaGlsZHJlbignLlBhbmVsJylcclxuXHRcdFx0XHQuY2hpbGRyZW4oJy5QYW5lbENvbnRhaW5lcicpXHJcblx0XHRcdFx0LnNsaWRlVG9nZ2xlKDE1MCk7XHJcblx0XHR9LCAxMDApO1xyXG5cdH0sXHJcbn07XHJcbiIsIi8qIENvbXBvbmVudCBQYW5lbEJ5SUQgKi9cclxuU2FwcGhpcmVXaWRnZXRzLlBhbmVsQnlJZCA9IHtcclxuXHRpc0FueVBhbmVsT3BlbmVkRGVwcmVjYXRlZDogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gJCgnYm9keScpLmhhc0NsYXNzKCdQYW5lbE9wZW5lZCcpO1xyXG5cdH0sXHJcblxyXG5cdHRvZ2dsZUJ1dHRvbjogZnVuY3Rpb24oaWQpIHtcclxuXHRcdGNvbnN0ICR0b2dnbGVCdXR0b24gPSAkKGAjJHtpZH1gKS5wYXJlbnRzKCcuVG9nZ2xlQnV0dG9uJykubGVuZ3RoXHJcblx0XHRcdD8gJChgIyR7aWR9YCkucGFyZW50cygnLlRvZ2dsZUJ1dHRvbicpXHJcblx0XHRcdDogJChgIyR7aWR9YCk7XHJcblxyXG5cdFx0JHRvZ2dsZUJ1dHRvbi5jbGljaygpO1xyXG5cdH0sXHJcblxyXG5cdHRvZ2dsZVBhbmVsQnlJZDogZnVuY3Rpb24oSWQpIHtcclxuXHRcdGNvbnN0ICR0b2dnbGVCdXR0b24gPSAkKGAjJHtJZH1gKS5wYXJlbnRzKCcuVG9nZ2xlQnV0dG9uJyk7XHJcblx0XHRjb25zdCAkcGFuZWwgPSAkdG9nZ2xlQnV0dG9uLnBhcmVudCgpLmNoaWxkcmVuKCcuUGFuZWwnKTtcclxuXHRcdGNvbnN0ICRwYW5lbENvbnRhaW5lciA9ICRwYW5lbC5jaGlsZHJlbignLlBhbmVsQ29udGFpbmVyJyk7XHJcblx0XHRjb25zdCAkcGFuZWxCYWNrZ3JvdW5kID0gJHBhbmVsLmNoaWxkcmVuKCcuUGFuZWxCYWNrZ3JvdW5kJyk7XHJcblxyXG5cdFx0aWYgKCF0aGlzLmlzQW55UGFuZWxPcGVuZWREZXByZWNhdGVkKCkpIHtcclxuXHRcdFx0JCgnYm9keScpLmFkZENsYXNzKCdQYW5lbE9wZW5lZCcpO1xyXG5cdFx0XHQkKCdib2R5JykuY3NzKCdvdmVyZmxvdy15JywgJ2hpZGRlbicpO1xyXG5cclxuXHRcdFx0JHBhbmVsLnNob3coKTtcclxuXHRcdFx0JHBhbmVsQ29udGFpbmVyLnNsaWRlRG93bigyMDApO1xyXG5cclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRpZiAodHlwZW9mIGp1c3REcmFnZ2VkICE9PSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHRcdFx0aWYgKGp1c3REcmFnZ2VkID09IGZhbHNlKSB7XHJcblx0XHRcdFx0XHRcdCQoJy5QYW5lbEJ5SWROZXdfUGFuZWxDb250YWluZXInKVxyXG5cdFx0XHRcdFx0XHRcdC5jc3MoJ21hcmdpbi1sZWZ0JywgcGFuZWxNYXJnaW5MZWZ0KVxyXG5cdFx0XHRcdFx0XHRcdC5jc3MoJ2xlZnQnLCBwYW5lbExlZnQpXHJcblx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKHBhbmVsQXJyb3dDbGFzcyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0JHBhbmVsQmFja2dyb3VuZC5mYWRlSW4oODApO1xyXG5cclxuXHRcdFx0XHQkdG9nZ2xlQnV0dG9uLmNsaWNrKCk7XHJcblx0XHRcdH0sIDUwKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdCRwYW5lbENvbnRhaW5lci5zbGlkZVVwKDIwMCk7XHJcblxyXG5cdFx0XHQkcGFuZWxCYWNrZ3JvdW5kLmZhZGVPdXQoODAsICgpID0+IHtcclxuXHRcdFx0XHQkdG9nZ2xlQnV0dG9uLmNsaWNrKCk7XHJcblxyXG5cdFx0XHRcdCQoJ2JvZHknKS5jc3MoJ292ZXJmbG93LXknLCAnc2Nyb2xsJyk7XHJcblx0XHRcdFx0JCgnYm9keScpLnJlbW92ZUNsYXNzKCdQYW5lbE9wZW5lZCcpO1xyXG5cclxuXHRcdFx0XHQkcGFuZWwuaGlkZSgpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9LFxyXG59O1xyXG4iLCIvKiBDb21wb25lbnQgUG9wVXBNZW51ICovXHJcblNhcHBoaXJlV2lkZ2V0cy5Qb3BVcE1lbnUgPSB7XHJcblx0bWVudVBvc2l0aW9uOiBmdW5jdGlvbihpZCwgQ29udGV4dCwgTG9jYWxlKSB7XHJcblx0XHQvKiBIaWRlIGFueSBvdGhlciBtZW51cyBvbiBwYWdlIGFuZCBzZXQgYnV0dG9uIGFzIGNvbGxhcHNlZC4gKi9cclxuXHRcdCQoJy5wb3B1cC1tZW51OnZpc2libGUnKS5oaWRlKCk7XHJcblxyXG5cdFx0Ly92YXIgX3RoaXMgPSAkKHRoaXMpO1xyXG5cdFx0dmFyIF90aGlzID0gJCgnIycgKyBpZCk7XHJcblx0XHR2YXIgWHggPSAwO1xyXG5cdFx0dmFyIFl5ID0gMDtcclxuXHRcdHZhciBXdyA9IDA7XHJcblx0XHR2YXIgSGggPSAwO1xyXG5cclxuXHRcdC8vX3RoaXMuY2hpbGRyZW4oJy5idXR0b24tZXhwYW5kOnZpc2libGUnKS5oaWRlKCk7XHJcblxyXG5cdFx0LyogR2V0IHRoZSBtZW51IGVsZW1lbnQuICovXHJcblx0XHR2YXIgX2VsID0gX3RoaXMubmV4dCgnLnBvcHVwLW1lbnUnKTtcclxuXHJcblx0XHQvKiBEaXNwbGF5IHRoZSBtZW51LiAqL1xyXG5cdFx0X2VsLnNob3coKTtcclxuXHJcblx0XHQvKiBTZXQgYnV0dG9uIGNvbGxhcHNlLiAqL1xyXG5cdFx0X3RoaXMuY2hpbGRyZW4oJy5idXR0b24tY29sbGFwc2UnKS5zaG93KCk7XHJcblxyXG5cdFx0LyogR2V0IHRoZSBkaW1lbnNpb25zIG9mIHRoZSBidXR0b24uICovXHJcblx0XHRidXR0b25IaCA9IF90aGlzLm91dGVySGVpZ2h0KCk7XHJcblx0XHRidXR0b25XdyA9IF90aGlzLm91dGVyV2lkdGgoKTtcclxuXHJcblx0XHR2YXIgYnV0dG9uWSA9IF90aGlzLnBvc2l0aW9uKCkudG9wICsgYnV0dG9uSGggKyAxMDtcclxuXHRcdHZhciBidXR0b25YID0gX3RoaXMub2Zmc2V0KCkubGVmdDtcclxuXHRcdC8vdmFyIGJ1dHRvblggPSBfdGhpcy5wb3NpdGlvbigpLmxlZnQ7XHJcblxyXG5cdFx0LyogR2V0IHRoZSBkaXN0YW5jZSBvZiBtZW51IGJ1dHRvbiBhbmQgdGhlIHBhcmVudCBlbGVtZW50ICovXHJcblx0XHR2YXIgcG9wdXBQYXJlbnRYeCA9IF90aGlzLm9mZnNldCgpLmxlZnQgLSBfdGhpcy5wb3NpdGlvbigpLmxlZnQ7XHJcblxyXG5cdFx0dmFyIHBvcHVwWHggPSBfZWwub2Zmc2V0KCkubGVmdDtcclxuXHRcdHZhciBwb3B1cFd3ID0gX2VsLm91dGVyV2lkdGgoKTtcclxuXHJcblx0XHRYeCA9IE1hdGguYWJzKGJ1dHRvblggLSAkKCdib2R5Jykuc2Nyb2xsTGVmdCgpIC0gcG9wdXBQYXJlbnRYeCk7XHJcblx0XHRZeSA9IE1hdGguYWJzKGJ1dHRvbkhoIC0gYnV0dG9uWSAtICQoJ2JvZHknKS5zY3JvbGxUb3AoKSk7XHJcblxyXG5cdFx0aWYgKExvY2FsZSAhPSAnQVInKSB7XHJcblx0XHRcdC8qIENoZWNrIGlmIGNsaWNrZWQgcG9zaXRpb24gcGx1cyB0aGUgcG9wdXAgd2lkdGggZXhjZWVkIHRoZSB3aW5kb3cgd2lkdGguICovXHJcblx0XHRcdGlmIChidXR0b25YICsgcG9wdXBXdyAtICQoJ2JvZHknKS5zY3JvbGxMZWZ0KCkgPiAkKENvbnRleHQpLndpZHRoKCkpIHtcclxuXHRcdFx0XHRYeCA9IGJ1dHRvblggLSBwb3B1cFd3IC0gJCgnYm9keScpLnNjcm9sbExlZnQoKSAtIHBvcHVwUGFyZW50WHggKyBidXR0b25XdztcclxuXHRcdFx0XHQvL1h4ID0gKCQod2luZG93KS53aWR0aCgpIC0gcG9wdXBXdykgLSAkKCdib2R5Jykuc2Nyb2xsTGVmdCgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0LyogU2V0IG1lbnUgcG9zaXRpb24uICovXHJcblx0XHRfZWwuY3NzKHtcclxuXHRcdFx0bGVmdDogWHggKyAncHgnLFxyXG5cdFx0XHR0b3A6IGJ1dHRvblkgKyAncHgnLFxyXG5cdFx0fSk7XHJcblxyXG5cdFx0LyogUmVmcmVzaCB2YWx1ZSAqL1xyXG5cdFx0cG9wdXBYeCA9IF9lbC5vZmZzZXQoKS5sZWZ0O1xyXG5cclxuXHRcdHZhciBfYmFsbG9vbkVsID0gX2VsLmNoaWxkcmVuKCcucG9wdXAtbWVudS1iYWxsb29uJyk7XHJcblxyXG5cdFx0dmFyIF9iYWxsb29uWHggPSBfYmFsbG9vbkVsLm9mZnNldCgpLmxlZnQ7XHJcblx0XHR2YXIgX2JhbGxvb25XdyA9IF9iYWxsb29uRWwub3V0ZXJXaWR0aCgpO1xyXG5cdFx0dmFyIF9iYWxsb29uUG9zWHggPSBNYXRoLmFicyhidXR0b25YIC0gWHggLSBwb3B1cFBhcmVudFh4KTtcclxuXHJcblx0XHQvKiBJcyB0aGUgYmFsbG9vbiBpY29uIHBvc2l0aW9uZWQgb3V0IG9mIHRoZSBwb3B1cCBtZW51PyAqL1xyXG5cdFx0aWYgKF9iYWxsb29uUG9zWHggKyBYeCArIF9iYWxsb29uV3cgPiBYeCArIHBvcHVwV3cpIHtcclxuXHRcdFx0X2JhbGxvb25Qb3NYeCA9IF9iYWxsb29uUG9zWHggLSBfYmFsbG9vbld3O1xyXG5cdFx0fVxyXG5cclxuXHRcdC8qIFNldCBwb3NpdGlvbiBvZiB0aGUgYmFsbG9vbiBlZmZlY3QuICovXHJcblx0XHRfYmFsbG9vbkVsLmNzcygnbGVmdCcsIF9iYWxsb29uUG9zWHggKyAncHgnKTtcclxuXHR9LFxyXG5cdG1lbnVFdmVudHM6IGZ1bmN0aW9uKENvbnRleHQsIExvY2FsZSkge1xyXG5cdFx0JCgnLnBvcHVwLWJ1dHRvbicpXHJcblx0XHRcdC5vZmYoJ2NsaWNrJylcclxuXHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHR2YXIgaWQgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XHJcblx0XHRcdFx0U2FwcGhpcmVXaWRnZXRzLlBvcFVwTWVudS5tZW51UG9zaXRpb24oaWQsIENvbnRleHQsIExvY2FsZSk7XHJcblxyXG5cdFx0XHRcdC8qZS5zdG9wUHJvcGFnYXRpb24oKTsqL1xyXG5cclxuXHRcdFx0XHQvKiBQcmV2ZW50IGxpbmsgc3VibWlzc2lvbiAqL1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0LyogdiAqKiogSGlkZSBwb3B1cCB3aGVuIGNsaWNrIG91dHNpZGUgKioqIHYgKi9cclxuXHRcdGZ1bmN0aW9uIFBNQ2xpY2tPdXRzaWRlKGV2ZW50KSB7XHJcblx0XHRcdGlmIChldmVudC5oYXNPd25Qcm9wZXJ0eSgndGFyZ2V0JykpIHtcclxuXHRcdFx0XHR2YXIgdGFyZ2V0ID0gJChldmVudC50YXJnZXQpO1xyXG5cdFx0XHRcdC8qaWYgKCh0YXJnZXQucGFyZW50cygpLmluZGV4KCQoJ2Fbc2FwcGhpcmVob3NwaXRhbF0sIC5Ib3NwaXRhbFBvcFVwJykpID09IC0xKSkge30qL1xyXG5cdFx0XHRcdGlmIChcclxuXHRcdFx0XHRcdCEkKGV2ZW50LnRhcmdldCkuY2xvc2VzdChcclxuXHRcdFx0XHRcdFx0Jy5wb3B1cC1idXR0b24sIC5wb3B1cC1tZW51LCAub3MtaW50ZXJuYWwtdWktYXV0b2NvbXBsZXRlLCAub3MtaW50ZXJuYWwtdWktbWVudS1pdGVtLCAub3MtaW50ZXJuYWwtdWktY29ybmVyLWFsbCwgdWktYXV0b2NvbXBsZXRlLWl0ZW0nXHJcblx0XHRcdFx0XHQpLmxlbmd0aFxyXG5cdFx0XHRcdCkge1xyXG5cdFx0XHRcdFx0JCgnLnBvcHVwLW1lbnU6dmlzaWJsZScpLmhpZGUoKTtcclxuXHRcdFx0XHRcdCQoJy5idXR0b24tY29sbGFwc2U6dmlzaWJsZScpLmhpZGUoKTtcclxuXHRcdFx0XHRcdC8vJCgnLmJ1dHRvbi1leHBhbmQnKS5zaG93KCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIF9QTUlzRHJhZyA9IGZhbHNlO1xyXG5cdFx0dmFyIF9QTUlzQ2xpY2sgPSBmYWxzZTtcclxuXHRcdCQoZG9jdW1lbnQpLm9uKCd0b3VjaHN0YXJ0JywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdFx0X1BNSXNEcmFnID0gZmFsc2U7XHJcblx0XHRcdF9QTUlzQ2xpY2sgPSB0cnVlO1xyXG5cdFx0fSk7XHJcblx0XHQkKGRvY3VtZW50KS5vbigndG91Y2htb3ZlJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdFx0X1BNSXNEcmFnID0gdHJ1ZTtcclxuXHRcdH0pO1xyXG5cdFx0JChkb2N1bWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdFx0UE1DbGlja091dHNpZGUoZXZlbnQpO1xyXG5cdFx0XHRfUE1Jc0RyYWcgPSBmYWxzZTtcclxuXHRcdFx0X1BNSXNDbGljayA9IGZhbHNlO1xyXG5cdFx0fSk7XHJcblx0XHQkKGRvY3VtZW50KS5vbigndG91Y2hlbmQnLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHRpZiAoIV9QTUlzRHJhZyAmJiBfUE1Jc0NsaWNrKSB7XHJcblx0XHRcdFx0UE1DbGlja091dHNpZGUoZXZlbnQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdF9QTUlzRHJhZyA9IGZhbHNlO1xyXG5cdFx0XHRfUE1Jc0NsaWNrID0gZmFsc2U7XHJcblx0XHR9KTtcclxuXHJcblx0XHQkKCcuYnV0dG9uLWNvbGxhcHNlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdFx0JCgnYm9keScpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH0pO1xyXG5cdFx0LyogXiAqKiogSGlkZSBwb3B1cCB3aGVuIGNsaWNrIG91dHNpZGUgKioqIF4gKi9cclxuXHR9LFxyXG59O1xyXG4iLCIvKiBDb21wb25lbnQgU2FwcGhpcmVQYW5lbCAqL1xyXG5TYXBwaGlyZVdpZGdldHMuU2FwcGhpcmVQYW5lbCA9IHtcclxuXHRjaGVja09wZW5QYW5lbDogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gJCgnYm9keScpLmhhc0NsYXNzKCdTYXBwaGlyZVBhbmVsT3BlbicpICYmICQoJy5TYXBwaGlyZVBhbmVsX0NvbnRhaW5lcjp2aXNpYmxlJykubGVuZ3RoO1xyXG5cdH0sXHJcblxyXG5cdHRvZ2dsZVNhcHBoaXJlUGFuZWw6IGZ1bmN0aW9uKFBhbmVsSWQpIHtcclxuXHRcdGlmICghT3NWYWxpZGF0b3JPblN1Ym1pdCgpKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIVNhcHBoaXJlV2lkZ2V0cy5TYXBwaGlyZVBhbmVsLmNoZWNrT3BlblBhbmVsKCkpIHtcclxuXHRcdFx0JCgnYm9keScpLmFkZENsYXNzKCdTYXBwaGlyZVBhbmVsT3BlbicpO1xyXG5cdFx0XHQkKCcjJyArIFBhbmVsSWQpLmZhZGVJbigxNDApO1xyXG5cclxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHQkKCcjJyArIFBhbmVsSWQpXHJcblx0XHRcdFx0XHQuZmluZCgnLlNhcHBoaXJlUGFuZWxfQ29udGFpbmVyJylcclxuXHRcdFx0XHRcdC5zbGlkZVRvZ2dsZSgxNTApO1xyXG5cdFx0XHR9LCAxMDApO1xyXG5cdFx0fVxyXG5cdH0sXHJcblxyXG5cdGNsb3NlU2FwcGhpcmVQYW5lbDogZnVuY3Rpb24oUGFuZWxJZCkge1xyXG5cdFx0JCgnYm9keScpLnJlbW92ZUNsYXNzKCdTYXBwaGlyZVBhbmVsT3BlbicpO1xyXG5cdFx0JCgnIycgKyBQYW5lbElkKS5mYWRlT3V0KDE0MCk7XHJcblxyXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0JCgnIycgKyBQYW5lbElkKVxyXG5cdFx0XHRcdC5maW5kKCcuU2FwcGhpcmVQYW5lbF9Db250YWluZXInKVxyXG5cdFx0XHRcdC5zbGlkZVVwKDE1MCk7XHJcblx0XHR9LCAxMDApO1xyXG5cdH0sXHJcblxyXG5cdHNldFBhbmVsQmVoYXZpb3I6IGZ1bmN0aW9uKCkge1xyXG5cdFx0JCgnLlBhbmVsW3BhbmVsLXRyaWdnZXItZWxlbWVudGlkXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciB0aGlzX3BhbmVsID0gJCh0aGlzKTtcclxuXHRcdFx0JCgnIycgKyB0aGlzX3BhbmVsLmF0dHIoJ3BhbmVsLXRyaWdnZXItZWxlbWVudGlkJykgKyAnJylcclxuXHRcdFx0XHQub2ZmKCdjbGljaycpXHJcblx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0U2FwcGhpcmVXaWRnZXRzLlNhcHBoaXJlUGFuZWwudG9nZ2xlU2FwcGhpcmVQYW5lbCh0aGlzX3BhbmVsLmF0dHIoJ2lkJykpO1xyXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fSxcclxufTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cdFNhcHBoaXJlV2lkZ2V0cy5TYXBwaGlyZVBhbmVsLnNldFBhbmVsQmVoYXZpb3IoKTtcclxuXHJcblx0aWYgKG9zQWpheEJhY2tlbmQuRXZlbnRIYW5kbGVycy5BZnRlckFqYXhSZXF1ZXN0LnRvU3RyaW5nKCkuaW5kZXhPZignc2V0UGFuZWxCZWhhdmlvcicpID09IC0xKSB7XHJcblx0XHRvc0FqYXhCYWNrZW5kLkJpbmRBZnRlckFqYXhSZXF1ZXN0KFNhcHBoaXJlV2lkZ2V0cy5TYXBwaGlyZVBhbmVsLnNldFBhbmVsQmVoYXZpb3IpO1xyXG5cdH1cclxufSk7XHJcbiIsInJlcXVpcmUoJy4vY29uZmlybWF0aW9uLXBhbmVsJyk7XHJcbnJlcXVpcmUoJy4vbW9kYWwtcG9wdXAnKTtcclxucmVxdWlyZSgnLi9wYW5lbC1ieS1pZCcpO1xyXG5yZXF1aXJlKCcuL3BvcHVwLW1lbnUnKTtcclxucmVxdWlyZSgnLi9zYXBwaGlyZS1wYW5lbCcpO1xyXG4iLCIvKiBDb21wb25lbnQgUGF0aWVudENhbGxDYW5jZWxTdHJ1Y3R1cmUgKi9cclxuKGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cykge1xyXG5cdGNvbnN0IGNyZWF0ZSA9IGZ1bmN0aW9uKGNvbmZpZykge1xyXG5cdFx0Y29uc3QgJHdpZGdldCA9ICQoJyMnICsgY29uZmlnLndpZGdldElkKS5maW5kKCcuUGF0aWVudENhbGxDYW5jZWxTdHJ1Y3R1cmUnKTtcclxuXHRcdGNvbnN0ICRsaXN0UXVldWVXcmFwcGVyID0gJHdpZGdldC5maW5kKCcuUGF0aWVudENhbGxDYW5jZWxTdHJ1Y3R1cmVfX0xpc3RRdWV1ZXMnKTtcclxuXHRcdGNvbnN0ICRkcm9wZG93biA9ICRsaXN0UXVldWVXcmFwcGVyLmZpbmQoJy5JbmxpbmVEcm9wZG93bl9sYWJlbCcpO1xyXG5cclxuXHRcdCRsaXN0UXVldWVXcmFwcGVyLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcclxuXHRcdFx0aWYgKCEkZHJvcGRvd24ubGVuZ3RoKSByZXR1cm47XHJcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuXHRcdFx0JHdpZGdldC50b2dnbGVDbGFzcygnUGF0aWVudENhbGxDYW5jZWxTdHJ1Y3R1cmUtLWFjdGl2ZScpO1xyXG5cclxuXHRcdFx0JChkb2N1bWVudCkub24oJ2NsaWNrLlBhdGllbnRDYWxsQ2FuY2VsU3RydWN0dXJlJywgKCkgPT4ge1xyXG5cdFx0XHRcdCR3aWRnZXQucmVtb3ZlQ2xhc3MoJ1BhdGllbnRDYWxsQ2FuY2VsU3RydWN0dXJlLS1hY3RpdmUnKTtcclxuXHRcdFx0XHQkKGRvY3VtZW50KS5vZmYoJ2NsaWNrLlBhdGllbnRDYWxsQ2FuY2VsU3RydWN0dXJlJyk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0JGRyb3Bkb3duLnRyaWdnZXIoJ2NsaWNrJyk7XHJcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRTYXBwaGlyZVdpZGdldHMuUGF0aWVudENhbGxDYW5jZWxTdHJ1Y3R1cmUgPSB7IGNyZWF0ZSB9O1xyXG59KShqUXVlcnksIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cyk7XHJcbiIsIi8qIENvbXBvbmVudCBQYXRpZW50Q2FsbENhbmNlbCAqL1xyXG4oZnVuY3Rpb24oJCwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKSB7XHJcblx0Y29uc3QgY3JlYXRlID0gZnVuY3Rpb24oY29uZmlnKSB7XHJcblx0XHRjb25zdCAkd2lkZ2V0ID0gJCgnIycgKyBjb25maWcud2lkZ2V0SWQpO1xyXG5cdFx0Y29uc3QgJGNvdW50ZG93biA9ICR3aWRnZXQuZmluZCgnW3VpPWRhdGEtY291bnRlcl0nKTtcclxuXHRcdGxldCAkY2FsbEJ1dHRvbiA9ICR3aWRnZXQuZmluZCgnW3VpPWRhdGEtYnV0dG9uLWNhbGxdJyk7XHJcblx0XHRsZXQgJGNhbmNlbEJ1dHRvbiA9ICR3aWRnZXQuZmluZCgnW3VpPWRhdGEtYnV0dG9uLWNhbmNlbF0nKTtcclxuXHRcdGNvbnN0ICRvdGhlckNvbnRlbnQgPSAkd2lkZ2V0LmZpbmQoJy5QYXRpZW50Q2FsbENhbmNlbF9fT3RoZXInKTtcclxuXHJcblx0XHRsZXQgaW50ZXJ2YWw7XHJcblx0XHRsZXQgdGltZUNvdW50ZXI7XHJcblxyXG5cdFx0Y29uc3QgY2FsbFBhdGllbnQgPSBmdW5jdGlvbigkd2lkZ2V0KSB7XHJcblx0XHRcdHRvZ2dsZUNhbGxpbmdTdGF0ZSgpO1xyXG5cclxuXHRcdFx0aWYgKGNvbmZpZy5zaG93Q291bnRkb3duKSAkY291bnRkb3duLnRleHQoY29uZmlnLnR4dENhbGxpbmdJbiArICcgJyArIGNvbmZpZy50aW1lVG9DYW5jZWwpO1xyXG5cdFx0XHRlbHNlICRjb3VudGRvd24udGV4dChjb25maWcudHh0Q2FsbGluZ0luKTtcclxuXHJcblx0XHRcdHN0YXJ0Q291bnRlcigpO1xyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCB0b2dnbGVDYWxsaW5nU3RhdGUgPSAoKSA9PiB7XHJcblx0XHRcdCR3aWRnZXQudG9nZ2xlQ2xhc3MoJ0NhbGxpbmdQYXRpZW50Jyk7XHJcblx0XHRcdCRjb3VudGRvd24udGV4dChjb25maWcudHh0Q2FsbFBhdGllbnQpO1xyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBzZXRJbml0aWFsU3RhdGUgPSAoKSA9PiB7XHJcblx0XHRcdCR3aWRnZXQucmVtb3ZlQ2xhc3MoJ0NhbGxpbmdQYXRpZW50Jyk7XHJcblx0XHRcdCRjYWxsQnV0dG9uLnNob3coKTtcclxuXHRcdFx0JG90aGVyQ29udGVudC5zaG93KCk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IHN0YXJ0Q291bnRlciA9ICgpID0+IHtcclxuXHRcdFx0dGltZUNvdW50ZXIgPSBjb25maWcudGltZVRvQ2FuY2VsO1xyXG5cdFx0XHRpbnRlcnZhbCA9IHdpbmRvdy5zZXRJbnRlcnZhbCh1cGRhdGVDb3VudGVyLCAxMDAwKTtcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgdXBkYXRlQ291bnRlciA9ICgpID0+IHtcclxuXHRcdFx0dGltZUNvdW50ZXItLTtcclxuXHJcblx0XHRcdGlmICh0aW1lQ291bnRlciA9PT0gMCkge1xyXG5cdFx0XHRcdGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG5cdFx0XHRcdE9zTm90aWZ5V2lkZ2V0KGNvbmZpZy5wYXRpZW50Q2FsbEZha2VOb3RpZnlJZCwgJycpO1xyXG5cclxuXHRcdFx0XHRzZXRJbml0aWFsU3RhdGUoKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGNvbmZpZy5zaG93Q291bnRkb3duKSAkY291bnRkb3duLnRleHQoY29uZmlnLnR4dENhbGxpbmdJbiArICcgJyArIHRpbWVDb3VudGVyKTtcclxuXHRcdFx0ZWxzZSAkY291bnRkb3duLnRleHQoY29uZmlnLnR4dENhbGxpbmdJbik7XHJcblx0XHR9O1xyXG5cclxuXHRcdGlmIChjb25maWcuc3RhcnRDb3VudGluZykgY2FsbFBhdGllbnQoJHdpZGdldCk7XHJcblxyXG5cdFx0JGNhbGxCdXR0b24ub24oJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRpZiAoJHdpZGdldC5oYXNDbGFzcygnQ2FsbGluZ1BhdGllbnQnKSkgcmV0dXJuO1xyXG5cclxuXHRcdFx0Y2FsbFBhdGllbnQoJHdpZGdldCk7XHJcblxyXG5cdFx0XHQkY2FsbEJ1dHRvbi5oaWRlKCk7XHJcblx0XHRcdCRvdGhlckNvbnRlbnQuaGlkZSgpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0JGNhbmNlbEJ1dHRvbi5vbignY2xpY2snLCBldmVudCA9PiB7XHJcblx0XHRcdHRpbWVDb3VudGVyID0gY29uZmlnLnRpbWVUb0NhbmNlbDtcclxuXHRcdFx0JGNvdW50ZG93bi50ZXh0KHRpbWVDb3VudGVyKTtcclxuXHRcdFx0Y2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcblxyXG5cdFx0XHR0b2dnbGVDYWxsaW5nU3RhdGUoKTtcclxuXHJcblx0XHRcdCRjYWxsQnV0dG9uLnNob3coKTtcclxuXHRcdFx0JG90aGVyQ29udGVudC5zaG93KCk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRTYXBwaGlyZVdpZGdldHMuUGF0aWVudENhbGxDYW5jZWwgPSB7IGNyZWF0ZSB9O1xyXG59KShqUXVlcnksIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cyk7XHJcbiIsIi8qIENvbXBvbmVudCBQcmVzY3JpcHRpb25DYXJkICovXHJcbihmdW5jdGlvbigkLCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cykge1xyXG5cdGNvbnN0IGNyZWF0ZSA9IGNvbmZpZyA9PiB7XHJcblx0XHRjb25zdCAkY29tcG9uZW50ID0gJChgIyR7Y29uZmlnLndpZGdldElkfSAuUHJlc2NyaXB0aW9uQ2FyZGApO1xyXG5cclxuXHRcdGlmIChjb25maWcuaXNFeHBhbmRhYmxlKSB7XHJcblx0XHRcdGNvbnN0ICRleHBhbmRMaW5rID0gJGNvbXBvbmVudC5maW5kKCcuUHJlc2NyaXB0aW9uQ2FyZF9fRXhwYW5kSWNvbicpO1xyXG5cclxuXHRcdFx0JGV4cGFuZExpbmsuY2xpY2soKCkgPT4ge1xyXG5cdFx0XHRcdCRjb21wb25lbnQudG9nZ2xlQ2xhc3MoJ1ByZXNjcmlwdGlvbkNhcmQtLWV4cGFuZGVkJyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdFNhcHBoaXJlV2lkZ2V0cy5QcmVzY3JpcHRpb25DYXJkID0geyBjcmVhdGUgfTtcclxufSkoalF1ZXJ5LCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cyk7XHJcbiIsIi8qIENvbXBvbmVudCBQcmVzY3JpcHRpb25FeHBhbmRhYmxlICovXHJcbihmdW5jdGlvbigkLCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cykge1xyXG5cdGNvbnN0IFByZXNjcmlwdGlvbkV4cGFuZGFibGUgPSBmdW5jdGlvbihjb25maWcpIHtcclxuXHRcdGNvbnN0IHdpZGdldElkID0gY29uZmlnLndpZGdldElkO1xyXG5cdFx0Y29uc3QgcHJldmlld3N0YXQgPSBbXTtcclxuXHJcblx0XHRjb25zdCAkZWxlbWVudFdyYXBwZXIgPSAkKGAjJHtjb25maWcud2lkZ2V0SWR9YCk7XHJcblxyXG5cdFx0Y29uc3QgY2xpY2tFdmVudHMgPSBvYiA9PiB7XHJcblx0XHRcdGlmICgkKG9iKS5oYXNDbGFzcygnUHJlc2NyaXB0aW9uRXhwYW5kYWJsZV9oZWFkZXJfX0xpbmtzRGl2JykpIHtcclxuXHRcdFx0XHR2YXIgU2VjdGlvbiA9ICQob2IpXHJcblx0XHRcdFx0XHQucGFyZW50KClcclxuXHRcdFx0XHRcdC5wYXJlbnQoKVxyXG5cdFx0XHRcdFx0LnBhcmVudCgpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHZhciBTZWN0aW9uID0gJChvYikucGFyZW50KCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHZhciBTZWN0aW9uQ29udGVudCA9IFNlY3Rpb24uY2hpbGRyZW4oJy5QcmVzY3JpcHRpb25FeHBhbmRhYmxlX2NvbnRlbnQnKTtcclxuXHJcblx0XHRcdC8vIGdldCBpZFxyXG5cdFx0XHR2YXIgaWQgPSBTZWN0aW9uLmF0dHIoJ2lkJyk7XHJcblxyXG5cdFx0XHR2YXIgdGVtcEhlaWdodCA9IDA7XHJcblxyXG5cdFx0XHQvLyBoYXMgY2xhc3MgZXhwYW5kZWRcclxuXHRcdFx0aWYgKFNlY3Rpb24uaGFzQ2xhc3MoJ2V4cGFuZGVkJykpIHtcclxuXHRcdFx0XHQvLyBDYWxjIGFuZCBzZXQgYSBmaXhlZCBoZWlnaHQsIGR1cmluZyB0aGlzIHByb2Nlc3MsIHRyYW5zaXRpb25zIGFyZSBkaXNhYmxlZFxyXG5cdFx0XHRcdFNlY3Rpb25Db250ZW50LmFkZENsYXNzKCdub1RyYW5zaXRpb24nKTtcclxuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5oZWlnaHQoU2VjdGlvbkNvbnRlbnQuaGVpZ2h0KCkpO1xyXG5cdFx0XHRcdFNlY3Rpb25Db250ZW50WzBdLm9mZnNldEhlaWdodDsgLy8gaGFjayB0byBmb3JjZSBhIHJlcGFpbnRcclxuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5yZW1vdmVDbGFzcygnbm9UcmFuc2l0aW9uJyk7XHJcblxyXG5cdFx0XHRcdC8vIENvbGxhcHNlIGNvbnRlbnRcclxuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5oZWlnaHQoMCk7XHJcblx0XHRcdFx0U2VjdGlvbi5yZW1vdmVDbGFzcygnZXhwYW5kZWQnKTtcclxuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5jc3MoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xyXG5cclxuXHRcdFx0XHQvLyBSZW1vdmUgY2xhc3MsIHNldCBoZWlnaHQgYW5kIHNhdmUgc3RhdGVcclxuXHRcdFx0XHRwcmV2aWV3c3RhdFtpZF1bJ2NsaWVudCddID0gZmFsc2U7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Ly8gQ2FsYyBhbmQgc2V0IGEgZml4ZWQgaGVpZ2h0XHJcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnQuaGVpZ2h0KCdhdXRvJyk7XHJcblx0XHRcdFx0dGVtcEhlaWdodCA9IFNlY3Rpb25Db250ZW50LmhlaWdodCgpO1xyXG5cdFx0XHRcdFNlY3Rpb25Db250ZW50LmhlaWdodCgwKTtcclxuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5oZWlnaHQodGVtcEhlaWdodCk7XHJcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnQuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcclxuXHJcblx0XHRcdFx0Ly8gcmVtb3ZlIGNsYXNzLCBzZXQgaGVpZ2h0IGFuZCBzYXZlIHN0YXRlXHJcblx0XHRcdFx0U2VjdGlvbi5hZGRDbGFzcygnZXhwYW5kZWQnKTtcclxuXHRcdFx0XHRwcmV2aWV3c3RhdFtpZF1bJ2NsaWVudCddID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHR0aGlzLmluaXQgPSAoKSA9PiB7XHJcblx0XHRcdGNvbnN0ICRoZWFkZXIgPSAkZWxlbWVudFdyYXBwZXIuZmluZCgnLlByZXNjcmlwdGlvbkV4cGFuZGFibGVfaGVhZGVyJyk7XHJcblx0XHRcdGNvbnN0ICRsaW5rcyA9ICRoZWFkZXIuZmluZCgnLlByZXNjcmlwdGlvbkV4cGFuZGFibGVfaGVhZGVyX19MaW5rc0RpdicpO1xyXG5cclxuXHRcdFx0Ly8gQ3JlYXRlIGFycmF5IHN0YXRcclxuXHRcdFx0JCgnLlNlY3Rpb25QcmVzY3JpcHRpb25FeHBhbmRhYmxlQXJlYScpLmVhY2goKCkgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IHN0YXQgPSAkaGVhZGVyLmhhc0NsYXNzKCdleHBhbmRlZCcpID8gdHJ1ZSA6IGZhbHNlO1xyXG5cdFx0XHRcdHByZXZpZXdzdGF0W3dpZGdldElkXSA9IHsgY2xpZW50OiBzdGF0LCBzZXJ2ZXI6IHN0YXQgfTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRpZiAoJGhlYWRlci5oYXNDbGFzcygnTm90RXhwYW5kYWJsZScpKSB7XHJcblx0XHRcdFx0JGhlYWRlci5vbignY2xpY2snLCBlID0+IGUucHJldmVudERlZmF1bHQoKSk7XHJcblx0XHRcdH0gZWxzZSBpZiAoJGhlYWRlci5oYXNDbGFzcygnaXNMaW5rRXBhbmRhYmxlQ2xpY2snKSkge1xyXG5cdFx0XHRcdCRsaW5rcy5vbignY2xpY2snLCBlID0+IGNsaWNrRXZlbnRzKCRsaW5rcykpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdCRoZWFkZXIub24oJ2NsaWNrJywgZSA9PiBjbGlja0V2ZW50cygkaGVhZGVyKSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGNvbnN0IGVsZW1lbnRzID1cclxuXHRcdFx0XHQnLlByZXNjcmlwdGlvbkV4cGFuZGFibGVfaGVhZGVyIGlucHV0LCAuUHJlc2NyaXB0aW9uRXhwYW5kYWJsZV9oZWFkZXIgc2VsZWN0LCAuUHJlc2NyaXB0aW9uRXhwYW5kYWJsZV9oZWFkZXIgYSc7XHJcblx0XHRcdCQoZWxlbWVudHMpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0b3NBamF4QmFja2VuZCAmJiBvc0FqYXhCYWNrZW5kLkJpbmRBZnRlckFqYXhSZXF1ZXN0KGFqYXhSZWZyZXNoKTtcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgYWpheFJlZnJlc2ggPSBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHQvLyByZW1vdmUgY2xpY2sgZXZlbnRzXHJcblx0XHRcdC8vJCgnLlByZXNjcmlwdGlvbkV4cGFuZGFibGVfaGVhZGVyJykub2ZmKCk7XHJcblxyXG5cdFx0XHQvLyBhZGQgc3RvcCBwcmVwYWdhdGlvblxyXG5cdFx0XHQkKFxyXG5cdFx0XHRcdCcuUHJlc2NyaXB0aW9uRXhwYW5kYWJsZV9oZWFkZXIgaW5wdXQsIC5QcmVzY3JpcHRpb25FeHBhbmRhYmxlX2hlYWRlciBzZWxlY3QsIC5QcmVzY3JpcHRpb25FeHBhbmRhYmxlX2hlYWRlciBhJ1xyXG5cdFx0XHQpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Ly8gZWFjaCBhbGwgc2VjdGlvbnNcclxuXHRcdFx0JCgnLlNlY3Rpb25QcmVzY3JpcHRpb25FeHBhbmRhYmxlQXJlYScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0Ly8gaWYgbmV3IFNlY3Rpb25FeHBhbmRhYmxlIHRoZW4gYWRkIHRvIHByZXZpZXdzdGF0IGFycmF5XHJcblx0XHRcdFx0aWYgKHByZXZpZXdzdGF0WyQodGhpcykuYXR0cignaWQnKV0gPT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0Ly8gYWRkIHN0YXQgb24gYXJyYXlcclxuXHRcdFx0XHRcdHZhciBzdGF0ID0gZmFsc2U7XHJcblx0XHRcdFx0XHQvLyBpZiBvcGVuXHJcblx0XHRcdFx0XHRpZiAoJCh0aGlzKS5oYXNDbGFzcygnZXhwYW5kZWQnKSkge1xyXG5cdFx0XHRcdFx0XHRzdGF0ID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC8vIGFkZCByb3dcclxuXHRcdFx0XHRcdHByZXZpZXdzdGF0WyQodGhpcykuYXR0cignaWQnKV0gPSB7IGNsaWVudDogc3RhdCwgc2VydmVyOiBzdGF0IH07XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyBjdXJlbnQgc3RhdGUgKGFqYXggc3RhdGUgeCBpbml0aWFsIHN0YXRlKVxyXG5cdFx0XHRcdHZhciBjdXJTdGF0ZSA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHQvLyBjaGVjayBpZiBzdGFydCBleHBhbmRhYmxlXHJcblx0XHRcdFx0aWYgKCQodGhpcykuaGFzQ2xhc3MoJ2V4cGFuZGVkJykpIHtcclxuXHRcdFx0XHRcdGN1clN0YXRlID0gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIGNoZWNrIGlmIGFqYXggIT0gaW5pdGlhbCBzZXJ2ZXJcclxuXHRcdFx0XHRpZiAoY3VyU3RhdGUgIT0gcHJldmlld3N0YXRbJCh0aGlzKS5hdHRyKCdpZCcpXVsnc2VydmVyJ10pIHtcclxuXHRcdFx0XHRcdC8vIGN1cnN0YXRlXHJcblx0XHRcdFx0XHRwcmV2aWV3c3RhdFskKHRoaXMpLmF0dHIoJ2lkJyldWydjbGllbnQnXSA9IGN1clN0YXRlO1xyXG5cdFx0XHRcdFx0cHJldmlld3N0YXRbJCh0aGlzKS5hdHRyKCdpZCcpXVsnc2VydmVyJ10gPSBjdXJTdGF0ZTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Ly8gaGFzIGNsYXNzIGV4cGFuZGVkXHJcblx0XHRcdFx0XHRpZiAocHJldmlld3N0YXRbJCh0aGlzKS5hdHRyKCdpZCcpXVsnY2xpZW50J10gPT0gZmFsc2UgJiYgJCh0aGlzKS5oYXNDbGFzcygnZXhwYW5kZWQnKSkge1xyXG5cdFx0XHRcdFx0XHQkKHRoaXMpLnJlbW92ZUNsYXNzKCdleHBhbmRlZCcpO1xyXG5cdFx0XHRcdFx0XHQkKHRoaXMpXHJcblx0XHRcdFx0XHRcdFx0LmNoaWxkcmVuKCcuUHJlc2NyaXB0aW9uRXhwYW5kYWJsZV9jb250ZW50JylcclxuXHRcdFx0XHRcdFx0XHQuaGVpZ2h0KDApO1xyXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChwcmV2aWV3c3RhdFskKHRoaXMpLmF0dHIoJ2lkJyldWydjbGllbnQnXSA9PSB0cnVlICYmICEkKHRoaXMpLmhhc0NsYXNzKCdleHBhbmRlZCcpKSB7XHJcblx0XHRcdFx0XHRcdCQodGhpcykuYWRkQ2xhc3MoJ2V4cGFuZGVkJyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH07XHJcblx0fTtcclxuXHJcblx0Y29uc3QgY3JlYXRlID0gY29uZmlnID0+IHtcclxuXHRcdGNvbnN0IGV4cGFuZGFibGUgPSBuZXcgUHJlc2NyaXB0aW9uRXhwYW5kYWJsZShjb25maWcpO1xyXG5cclxuXHRcdGV4cGFuZGFibGUuaW5pdCgpO1xyXG5cdH07XHJcblxyXG5cdFNhcHBoaXJlV2lkZ2V0cy5QcmVzY3JpcHRpb25FeHBhbmRhYmxlID0geyBjcmVhdGUgfTtcclxufSkoalF1ZXJ5LCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cyk7XHJcbiIsIi8qIENvbXBvbmVudCBTYXBwaGlyZUhlYWRlciAqL1xyXG4oZnVuY3Rpb24oJCwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKSB7XHJcblx0dmFyIGNyZWF0ZSA9IGZ1bmN0aW9uKGNvbmZpZykge1xyXG5cdFx0d2luZG93W2NvbmZpZy53aWRnZXRJZF0gPSBuZXcgU2FwcGhpcmVIZWFkZXIoY29uZmlnKTtcclxuXHRcdFNhcHBoaXJlV2lkZ2V0cy5TYXBwaGlyZUhlYWRlci53aWRnZXRJZCA9IGNvbmZpZy53aWRnZXRJZDtcclxuXHR9O1xyXG5cclxuXHR2YXIgaGFuZGxlRGVtb2dyYXBoaWNzID0gZnVuY3Rpb24oKSB7XHJcblx0XHR3aW5kb3dbU2FwcGhpcmVXaWRnZXRzLlNhcHBoaXJlSGVhZGVyLndpZGdldElkXS5oYW5kbGVEZW1vZ3JhcGhpY3MoKTtcclxuXHR9O1xyXG5cclxuXHR2YXIgU2FwcGhpcmVIZWFkZXIgPSBmdW5jdGlvbihjb25maWcpIHtcclxuXHRcdHZhciBfdGhpcyA9IHRoaXM7XHJcblx0XHR0aGlzLmNvbmZpZyA9IGNvbmZpZztcclxuXHRcdHRoaXMuaXNDb25maWRlbnRpYWwgPSBjb25maWcuaXNDb25maWRlbnRpYWw7XHJcblx0XHR0aGlzLiR3aWRnZXQgPSAkKCcjJyArIGNvbmZpZy53aWRnZXRJZCk7XHJcblx0XHR0aGlzLiR3aWRnZXQuY3NzKHtcclxuXHRcdFx0ZGlzcGxheTogJ2Jsb2NrJyxcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy4kaGVhZGVyID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5TYXBwaGlyZUhlYWRlcicpO1xyXG5cdFx0dGhpcy4kbmF2aWdhdGlvbiA9IHRoaXMuJHdpZGdldC5maW5kKCcuU2FwcGhpcmVIZWFkZXItbmF2aWdhdGlvbicpO1xyXG5cdFx0dGhpcy4kaWRlbnRpZmljYXRpb24gPSB0aGlzLiR3aWRnZXQuZmluZCgnLlNhcHBoaXJlSGVhZGVyLWlkZW50aWZpY2F0aW9uJyk7XHJcblx0XHR0aGlzLiRkZW1vZ3JhcGhpYyA9IHRoaXMuJHdpZGdldC5maW5kKCcuU2FwcGhpcmVIZWFkZXItZGVtb2dyYXBoaWNzJyk7XHJcblx0XHR0aGlzLiRpbmZvcm1hdGlvbiA9IHRoaXMuJHdpZGdldC5maW5kKCcuU2FwcGhpcmVIZWFkZXItaW5mb3JtYXRpb24nKTtcclxuXHRcdHRoaXMuJGFjdGlvbnMgPSB0aGlzLiR3aWRnZXQuZmluZCgnLlNhcHBoaXJlSGVhZGVyLWFjdGlvbnMnKTtcclxuXHRcdHRoaXMuJGFkZGl0aW9uYWxUcmlnZ2VyID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5TYXBwaGlyZUhlYWRlci1hZGRpdGlvbmFsLXRyaWdnZXInKTtcclxuXHRcdHRoaXMuJGFkZGl0aW9uYWxDb250ZW50ID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5TYXBwaGlyZUhlYWRlci1hZGRpdGlvbmFsLWNvbnRlbnQnKTtcclxuXHJcblx0XHR0aGlzLmhhbmRsZVJlc2l6ZSgpO1xyXG5cdFx0dGhpcy5hdHRhY2hFdmVudHMoKTtcclxuXHJcblx0XHRpZiAodGhpcy4kaW5mb3JtYXRpb24udGV4dCgpID09PSAnJykge1xyXG5cdFx0XHR0aGlzLiRpbmZvcm1hdGlvbi5oaWRlKCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0U2FwcGhpcmVIZWFkZXIucHJvdG90eXBlLmdldENvbmZpZyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uZmlnO1xyXG5cdH07XHJcblxyXG5cdFNhcHBoaXJlSGVhZGVyLnByb3RvdHlwZS5oYW5kbGVSZXNpemUgPSBmdW5jdGlvbigpIHtcclxuXHRcdHZhciBfdGhpcyA9IHRoaXM7XHJcblx0XHQkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRfdGhpcy5oYW5kbGVEZW1vZ3JhcGhpY3MoKTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdFNhcHBoaXJlSGVhZGVyLnByb3RvdHlwZS5hdHRhY2hFdmVudHMgPSBmdW5jdGlvbigpIHtcclxuXHRcdHZhciBfdGhpcyA9IHRoaXM7XHJcblx0XHR0aGlzLiRhZGRpdGlvbmFsVHJpZ2dlci5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0aWYgKF90aGlzLiRoZWFkZXIuaGFzQ2xhc3MoJ2lzT3BlbicpKSB7XHJcblx0XHRcdFx0X3RoaXMuJGhlYWRlci5yZW1vdmVDbGFzcygnaXNPcGVuJyk7XHJcblx0XHRcdFx0Ly8kKCcuTGF5b3V0QmFzZS1oZWFkZXInKS5jc3MoJ3otaW5kZXgnLCAyKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRfdGhpcy4kaGVhZGVyLmFkZENsYXNzKCdpc09wZW4nKTtcclxuXHRcdFx0XHQvLyQoJy5MYXlvdXRCYXNlLWhlYWRlcicpLmNzcygnei1pbmRleCcsIDMpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRTYXBwaGlyZUhlYWRlci5wcm90b3R5cGUuaGFuZGxlRGVtb2dyYXBoaWNzID0gZnVuY3Rpb24oKSB7XHJcblx0XHRjb25zdCBfdGhpcyA9IHRoaXM7XHJcblx0XHR0aGlzLiRkZW1vZ3JhcGhpYy5maW5kKCcuRGVtb2dyYXBoaWMtaXRlbScpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcblxyXG5cdFx0dGhpcy4kYWRkaXRpb25hbFRyaWdnZXIuaGlkZSgpO1xyXG5cdFx0dGhpcy4kYWRkaXRpb25hbENvbnRlbnQuZW1wdHkoKTtcclxuXHJcblx0XHRjb25zdCBkZW1vZ3JhcGhpY1dpZHRoID0gdGhpcy4kZGVtb2dyYXBoaWMub3V0ZXJXaWR0aCh0cnVlKTtcclxuXHRcdGxldCBpdGVtc1RvdGFsID0gMDtcclxuXHJcblx0XHRjb25zdCBjb21wb25lbnRXaWR0aCA9IHRoaXMuJHdpZGdldC5vdXRlcldpZHRoKHRydWUpO1xyXG5cdFx0Y29uc3QgbmF2aWdhdGlvbldpZHRoID0gdGhpcy4kbmF2aWdhdGlvbi53aWR0aCgpO1xyXG5cdFx0Y29uc3QgaWRlbnRpZmljYXRpb25XaWR0aCA9IHRoaXMuJGlkZW50aWZpY2F0aW9uLndpZHRoKCk7XHJcblx0XHRjb25zdCBkZW1vZ3JhcGhpY3NXaWR0aCA9IHRoaXMuJGRlbW9ncmFwaGljLndpZHRoKCk7XHJcblx0XHRjb25zdCBpbmZvcm1hdGlvbldpZHRoID0gdGhpcy4kaW5mb3JtYXRpb24ud2lkdGgoKTtcclxuXHRcdGNvbnN0IGFjdGlvbnNXaWR0aCA9IHRoaXMuJGFjdGlvbnMud2lkdGgoKTtcclxuXHJcblx0XHR0aGlzLiRkZW1vZ3JhcGhpYy5maW5kKCcuRGVtb2dyYXBoaWMtaXRlbScpLmVhY2goZnVuY3Rpb24oaW5kZXgpIHtcclxuXHRcdFx0aXRlbXNUb3RhbCArPSBwYXJzZUludCgkKHRoaXMpLm91dGVyV2lkdGgodHJ1ZSksIDEwKTtcclxuXHJcblx0XHRcdC8vIDY0IC0+IG1hcmdpbnMgYW5kIDk5IC0+IE1vcmUgSW5mbyBidXR0b25cclxuXHRcdFx0aWYgKGl0ZW1zVG90YWwgKyA2NCArIDExMCA8IGRlbW9ncmFwaGljV2lkdGgpIHtcclxuXHRcdFx0XHQkKHRoaXMpLmNzcygnZGlzcGxheScsICdpbmxpbmUtYmxvY2snKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQkKHRoaXMpXHJcblx0XHRcdFx0XHQuY2xvbmUoKVxyXG5cdFx0XHRcdFx0LmNzcygnZGlzcGxheScsICdpbmxpbmUtYmxvY2snKVxyXG5cdFx0XHRcdFx0LmFwcGVuZFRvKF90aGlzLiRhZGRpdGlvbmFsQ29udGVudCk7XHJcblx0XHRcdFx0X3RoaXMuJGFkZGl0aW9uYWxUcmlnZ2VyLnNob3coKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0aWYgKHRoaXMuJGFkZGl0aW9uYWxDb250ZW50LmZpbmQoJy5EZW1vZ3JhcGhpYy1pdGVtJykubGVuZ3RoID09PSAwKSB7XHJcblx0XHRcdHRoaXMuJGhlYWRlci5yZW1vdmVDbGFzcygnaXNPcGVuJyk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0U2FwcGhpcmVIZWFkZXIucHJvdG90eXBlLnNob3dBZGRpdGlvbmFsID0gZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy4kaGVhZGVyLmFkZENsYXNzKCdpc09wZW4nKTtcclxuXHR9O1xyXG5cclxuXHRTYXBwaGlyZUhlYWRlci5wcm90b3R5cGUuaGlkZUFkZGl0aW9uYWwgPSBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB0aGlzLiRoZWFkZXIucmVtb3ZlQ2xhc3MoJ2lzT3BlbicpO1xyXG5cdH07XHJcblxyXG5cdFNhcHBoaXJlV2lkZ2V0cy5TYXBwaGlyZUhlYWRlciA9IHtcclxuXHRcdGNyZWF0ZTogY3JlYXRlLFxyXG5cdFx0aGFuZGxlRGVtb2dyYXBoaWNzOiBoYW5kbGVEZW1vZ3JhcGhpY3MsXHJcblx0fTtcclxufSkoalF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpO1xyXG5cclxuJCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24oKSB7XHJcblx0aWYgKCEhU2FwcGhpcmVXaWRnZXRzLlNhcHBoaXJlSGVhZGVyLndpZGdldElkKSB7XHJcblx0XHR3aW5kb3dbU2FwcGhpcmVXaWRnZXRzLlNhcHBoaXJlSGVhZGVyLndpZGdldElkXS5oYW5kbGVEZW1vZ3JhcGhpY3MoKTtcclxuXHR9XHJcblx0aWYgKCEhJCgnLlNhcHBoaXJlSGVhZGVyLWRlbW9ncmFwaGljcycpLmxlbmd0aCkge1xyXG5cdFx0b3NBamF4QmFja2VuZCAmJlxyXG5cdFx0XHRvc0FqYXhCYWNrZW5kLkJpbmRBZnRlckFqYXhSZXF1ZXN0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHdpbmRvd1tTYXBwaGlyZVdpZGdldHMuU2FwcGhpcmVIZWFkZXIud2lkZ2V0SWRdLmhhbmRsZURlbW9ncmFwaGljcygpO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcbn0pO1xyXG4iLCIvKiBDb21wb25lbnQgU2FwcGhpcmVQb3B1cCAqL1xudmFyIFJpY2hXaWRnZXRzX1BvcHVwX0VkaXRvcl9ub3RpZnlXaWRnZXQ7XG5cbihmdW5jdGlvbigkLCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cykge1xuXHQvLyBDaGVjayBpZiB0aGUgd2lkZ2V0IGlzIGxvYWRlZCBpbnNpZGUgYW4gaUZyYW1lXG5cdGxldCBpc0luc2lkZUlmcmFtZSA9IHdpbmRvdy5mcmFtZUVsZW1lbnQgIT0gdW5kZWZpbmVkIHx8IGZhbHNlO1xuXG5cdC8vIENvbnN0YW50c1xuXHRjb25zdCBQT1BVUF9JTklUSUFMX1dJRFRIID0gMzAwO1xuXHRjb25zdCBQT1BVUF9JTklUSUFMX0hFSUdIVCA9IDEwMDtcblx0Y29uc3QgUE9QVVBfV0lORE9XX0lOREVYID0gNDAxMDtcblx0Y29uc3QgUE9QVVBfQ0xPU0lOR19UQUcgPSAnY2xvc2luZyc7XG5cdGNvbnN0IFBPUFVQX0NMT1NJTkdfVkFMVUUgPSAndHJ1ZSc7XG5cblx0bGV0IFBPUFVQX05PVElGWV9XSURHRVQ7XG5cdGxldCBQT1BVUF9QQVJFTlRfVVJMO1xuXG5cdGNvbnN0IGNyZWF0ZSA9IGNvbmZpZyA9PiB7XG5cdFx0aWYgKGNvbmZpZy5pZ25vcmVJZnJhbWUpIGlzSW5zaWRlSWZyYW1lID0gZmFsc2U7XG5cblx0XHQkKCkucmVhZHkoZnVuY3Rpb24oJCkge1xuXHRcdFx0Y29uc3QgX2lkID0gY29uZmlnLmxpbmtJZDtcblx0XHRcdGNvbnN0IGxpbmtRdWVyeSA9IGAjJHtjb25maWcubGlua0lkfWA7XG5cdFx0XHRsZXQgbGlua1dpZGdldDtcblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0bGlua1dpZGdldCA9ICQobGlua1F1ZXJ5KS5nZXQoMCk7XG5cdFx0XHR9IGNhdGNoIChlKSB7fVxuXG5cdFx0XHRpZiAodHlwZW9mIGxpbmtXaWRnZXQgPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0Ly9DYXNlIHRoZSB3aWRnZXQgaXMgaW5leGlzdGVudCBvciBpbnZpc2libGUsIGl0IHdpbGwgc2hvdyBubyBlcnJvcnMuXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0UE9QVVBfUEFSRU5UX1VSTCA9IGNvbmZpZy5wYXJlbnRVcmw7XG5cblx0XHRcdGNvbnN0IGxpbmtSZXN1bHQgPSBnZXRMaW5rSFJFRihsaW5rV2lkZ2V0KTtcblx0XHRcdGNvbnN0IGxpbmtIcmVmID0gbGlua1Jlc3VsdFswXTtcblx0XHRcdGNvbnN0IGlzQUJ1dHRvbiA9IGxpbmtSZXN1bHRbMV07XG5cblx0XHRcdGlmICh0eXBlb2YgbGlua0hyZWYgPT0gJ3VuZGVmaW5lZCcgfHwgbGlua0hyZWYgPT0gJycgfHwgbGlua0hyZWYgPT0gJyMnIHx8IGxpbmtIcmVmLmluZGV4T2YoJ2phdmFzY3JpcHQ6JykgPT0gMCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHdpbmRvdy5Pc0hhbmRsZUV4Y2VwdGlvbihcblx0XHRcdFx0XHRcdG5ldyBFcnJvcignUG9wdXAgbGluayBpZCBtdXN0IGJlIHRoZSBpZCBvZiBhIExpbmsgb3IgQnV0dG9uIFdpZGdldCB3aXRoIE1ldGhvZCBOYXZpZ2F0ZS4nKSxcblx0XHRcdFx0XHRcdG91dHN5c3RlbXMub3NFcnJvckNvZGVzLlN5c3RlbUphdmFzY3JpcHRFcnJvcixcblx0XHRcdFx0XHRcdCdQb3B1cF9FZGl0b3InXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSBjYXRjaCAoZSkge31cblxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIFJlbW92ZSB0aGUgZXhpc3Rpbmcgb24tY2xpY2sgZXZlbnRcblx0XHRcdGlmIChpc0FCdXR0b24pIHtcblx0XHRcdFx0bGlua1dpZGdldC5zZXRBdHRyaWJ1dGUoXG5cdFx0XHRcdFx0J29uY2xpY2snLFxuXHRcdFx0XHRcdGxpbmtXaWRnZXRcblx0XHRcdFx0XHRcdC5nZXRBdHRyaWJ1dGUoJ29uY2xpY2snKVxuXHRcdFx0XHRcdFx0LnRvU3RyaW5nKClcblx0XHRcdFx0XHRcdC5yZXBsYWNlKCd3aW5kb3cubG9jYXRpb24uaHJlZj0nLCAncmV0dXJuIGZhbHNlO3dpbmRvdy5sb2NhdGlvbi5ocmVmPScpXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgYSBjb25maXJtYXRpb24gbWVzc2FnZSwgc3RvcmUgaW4gYW4gYXR0cmlidXRlIHRoZSByZXN1bHRcblx0XHRcdGlmIChsaW5rV2lkZ2V0LmdldEF0dHJpYnV0ZSgnb25jbGljaycpICE9IG51bGwpIHtcblx0XHRcdFx0bGlua1dpZGdldC5zZXRBdHRyaWJ1dGUoXG5cdFx0XHRcdFx0J29uY2xpY2snLFxuXHRcdFx0XHRcdGxpbmtXaWRnZXRcblx0XHRcdFx0XHRcdC5nZXRBdHRyaWJ1dGUoJ29uY2xpY2snKVxuXHRcdFx0XHRcdFx0LnRvU3RyaW5nKClcblx0XHRcdFx0XHRcdC5yZXBsYWNlKFxuXHRcdFx0XHRcdFx0XHQnaWYoIHJldCAhPSB0cnVlICknLFxuXHRcdFx0XHRcdFx0XHRcIiQoJ1wiICsgbGlua1F1ZXJ5ICsgXCInKS5nZXQoMCkuc2V0QXR0cmlidXRlKCdjb25maXJtZWQnLCByZXQpOyBpZiggcmV0ICE9IHRydWUgKVwiXG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGNsaWNrSGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHRcdC8vIFRoZSBjbGlja0hhbmRsZXIgZXZlbnQgaXMgcmVnaXN0ZXJlZCBpbiBvc2pzIGFuZCAkIGZvciBjb21wYXRpYmlsbGl0eSByZWFzb25zLCB0aGV5IG11c3Qgbm90IHJ1biBib3RoIGZvciB0aGUgc2FtZSBjbGljay5cblx0XHRcdFx0Ly8gVmFyaWFibGUgaXMgc2V0IHRvIGZhbHNlIGluIHJlc2l6ZSBmdW5jdGlvbi5cblx0XHRcdFx0aWYgKCQuZGF0YShldmVudC50YXJnZXQsICdvcy1pbnRlcm5hbC1wcm9jZXNzaW5nJykgPT0gdHJ1ZSkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkLmRhdGEoZXZlbnQudGFyZ2V0LCAnb3MtaW50ZXJuYWwtcHJvY2Vzc2luZycsIHRydWUpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gQ2hlY2sgaWYgdGhlIGNsaWNrZWQgbGluayBpcyBkaXNhYmxlZFxuXHRcdFx0XHRpZiAobGlua1dpZGdldC5nZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJykgIT0gbnVsbCkge1xuXHRcdFx0XHRcdHZhciBsaW5rRGlzYWJsZWQgPSBsaW5rV2lkZ2V0XG5cdFx0XHRcdFx0XHQuZ2V0QXR0cmlidXRlKCdkaXNhYmxlZCcpXG5cdFx0XHRcdFx0XHQudG9TdHJpbmcoKVxuXHRcdFx0XHRcdFx0LnRvTG93ZXJDYXNlKCk7XG5cblx0XHRcdFx0XHRpZiAobGlua0Rpc2FibGVkID09ICdkaXNhYmxlZCcgfHwgbGlua0Rpc2FibGVkLmluZGV4T2YoJ3RydWUnKSAhPSAtMSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChsaW5rV2lkZ2V0LmdldEF0dHJpYnV0ZSgnY29uZmlybWVkJykgPT0gJ2ZhbHNlJykgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZiAoT3NJc0lFKCkpIG9zRm9jdXNCYWNrZW5kLkNsZWFyRm9jdXNlZEVsZW1lbnQoKTtcblxuXHRcdFx0XHRsZXQgcG9wdXBEaXY7XG5cdFx0XHRcdGxldCBwbGVhc2VXYWl0RGl2O1xuXG5cdFx0XHRcdGNvbnN0IHdhaXRUZXh0ID0gYDxkaXYgc3R5bGU9XCJtYXJnaW4tdG9wOiAzNnB4O1wiPiR7Y29uZmlnLmxvYWRpbmdNZXNzYWdlfTwvZGl2PmA7XG5cdFx0XHRcdGNvbnN0IGltZ0hUTUwgPSAnPGRpdiBjbGFzcz1cImxkcy1yaW5nXCI+PGRpdj48L2Rpdj48L2Rpdj4nO1xuXHRcdFx0XHRjb25zdCBsb2FkaW5nRWxlbWVudCA9IGA8ZGl2IGNsYXNzPVwiTGF5b3V0UG9wdXAtbG9hZGluZ1wiPiR7aW1nSFRNTH0gJHt3YWl0VGV4dH08L2Rpdj5gO1xuXHRcdFx0XHRjb25zdCBpRnJhbWVFbGVtZW50ID0gYDxpZnJhbWUgaWQ9XCJpZnJhbWVfJHtfaWR9XCIgd2lkdGg9XCIxMDAlXCIgc2Nyb2xsaW5nPVwibm9cIiBoZWlnaHQ9XCIxMDAlXCIgZnJhbWVib3JkZXI9XCIwXCIgc3JjPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiLz5gO1xuXG5cdFx0XHRcdGlmIChpc0luc2lkZUlmcmFtZSkge1xuXHRcdFx0XHRcdGxldCBfZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG5cdFx0XHRcdFx0X2Rpdi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3RleHQtYWxpZ246IGNlbnRlcjsgZGlzcGxheTogbm9uZTsnKTtcblx0XHRcdFx0XHRfZGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnd2luZG93XycgKyBfaWQpO1xuXHRcdFx0XHRcdHdpbmRvdy50b3AuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChfZGl2KTtcblxuXHRcdFx0XHRcdHBvcHVwRGl2ID0gd2luZG93LnRvcC4kKCcjd2luZG93XycgKyBfaWQpO1xuXHRcdFx0XHRcdHBvcHVwRGl2LmFwcGVuZChpRnJhbWVFbGVtZW50KTtcblxuXHRcdFx0XHRcdHBsZWFzZVdhaXREaXYgPSBwb3B1cERpdi5wcmVwZW5kKGxvYWRpbmdFbGVtZW50KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRwb3B1cERpdiA9ICQoXCI8ZGl2IHN0eWxlPSd0ZXh0LWFsaWduOiBjZW50ZXI7IGRpc3BsYXk6IG5vbmU7Jz48L2Rpdj5cIikuYXBwZW5kVG8oJ2JvZHknKTtcblx0XHRcdFx0XHRwb3B1cERpdi5hcHBlbmQoaUZyYW1lRWxlbWVudCk7XG5cblx0XHRcdFx0XHRwbGVhc2VXYWl0RGl2ID0gcG9wdXBEaXYucHJlcGVuZChsb2FkaW5nRWxlbWVudCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zdCBsb2FkVGFyZ2V0UGFnZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmIChpc0luc2lkZUlmcmFtZSkge1xuXHRcdFx0XHRcdFx0d2luZG93LnRvcC5QT1BVUF9OT1RJRllfV0lER0VUID0gY29uZmlnLm5vdGlmeUlkO1xuXHRcdFx0XHRcdFx0Ly8gQ3JlYXRlIGEgcmVmZXJlbmNlIHRvIHRoZSBpZnJhbWUgb2JqZWN0IG9uIHRoZSBkb2N1bWVudCBwYXJlbnRcblx0XHRcdFx0XHRcdHdpbmRvdy50b3AuX2lmcmFtZVBvcHVwID0gd2luZG93LmZyYW1lRWxlbWVudC5jb250ZW50V2luZG93O1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR3aW5kb3cudG9wLl9pZnJhbWVQb3B1cCA9IHdpbmRvdztcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRQT1BVUF9OT1RJRllfV0lER0VUID0gY29uZmlnLm5vdGlmeUlkO1xuXHRcdFx0XHRcdFJpY2hXaWRnZXRzX1BvcHVwX0VkaXRvcl9ub3RpZnlXaWRnZXQgPSBjb25maWcubm90aWZ5SWQ7XG5cdFx0XHRcdFx0d2luZG93LnRvcC5faWZyYW1lUG9wdXAuUmljaFdpZGdldHNfUG9wdXBfRWRpdG9yX25vdGlmeVdpZGdldCA9IGNvbmZpZy5ub3RpZnlJZDtcblxuXHRcdFx0XHRcdC8vIExvYWQgdGFyZ2V0IHBhZ2Vcblx0XHRcdFx0XHRjb25zdCBvaHJlZiA9IGdldExpbmtIUkVGKGxpbmtXaWRnZXQpWzBdO1xuXHRcdFx0XHRcdGNvbnN0IHJocmVmID0gb2hyZWYucmVwbGFjZSgvKFxcP3wmKV89Lio/KCZ8JCkvLCAnJDFfPScgKyArbmV3IERhdGUoKS5ub3cgKyAnJDInKTtcblx0XHRcdFx0XHRjb25zdCB4aHJlZiA9IHJocmVmICsgKHJocmVmID09IG9ocmVmID8gKHJocmVmLmluZGV4T2YoJz8nKSA+PSAwID8gJyYnIDogJz8nKSArICdfPScgKyArbmV3IERhdGUoKSA6ICcnKTtcblxuXHRcdFx0XHRcdHBvcHVwRGl2LmZpbmQoJ2lmcmFtZScpLmF0dHIoJ3NyYycsIHhocmVmKTtcblxuXHRcdFx0XHRcdChmdW5jdGlvbihwb3B1cERpdikge1xuXHRcdFx0XHRcdFx0cG9wdXBEaXYuZmluZCgnaWZyYW1lJykubG9hZChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0Ly8gQWZ0ZXIgbG9hZGluZyB0cnkgdG8gcmVzaXplXG5cdFx0XHRcdFx0XHRcdHJlc2l6ZShwb3B1cERpdiwgX2lkLCBjb25maWcuc2V0V2lkdGgsIGNvbmZpZy5zZXRIZWlnaHQsIHRydWUsIGV2ZW50KTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0pKHBvcHVwRGl2KTtcblxuXHRcdFx0XHRcdHBvcHVwRGl2ID0gbnVsbDtcblx0XHRcdFx0XHRwbGVhc2VXYWl0RGl2ID0gbnVsbDtcblx0XHRcdFx0fTtcblxuXHRcdFx0XHRvcGVuUG9wdXAocG9wdXBEaXYsIHBsZWFzZVdhaXREaXYsIGxvYWRUYXJnZXRQYWdlLCBldmVudCwgY29uZmlnKTtcblxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9O1xuXG5cdFx0XHQkKGxpbmtRdWVyeSkuY2xpY2soY2xpY2tIYW5kbGVyKTtcblxuXHRcdFx0U2FwcGhpcmVXaWRnZXRzLlNhcHBoaXJlUG9wdXAucG9wdXBXaWR0aCA9IGNvbmZpZy5zZXRXaWR0aCB8fCBQT1BVUF9JTklUSUFMX1dJRFRIO1xuXHRcdH0pO1xuXHR9O1xuXG5cdGNvbnN0IHJlc2l6ZSA9IChkaXZUb1BvcHVwLCBfaWQsIHNldFdpZHRoLCBzZXRIZWlnaHQsIHJlY2VudGVyLCBldmVudCkgPT4ge1xuXHRcdC8vIENvZGUgdG8gc3VwcG9ydCBvbGQgcmVzaXplIG1ldGhvZCBQb3B1cF9XaW5kb3dfcmVzaXplKHNldFdpZHRoLCBzZXRIZWlnaHQsIHJlY2VudGVyKVxuXHRcdGlmICh0eXBlb2YgcmVjZW50ZXIgPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHJlY2VudGVyID0gc2V0SGVpZ2h0O1xuXHRcdFx0c2V0SGVpZ2h0ID0gc2V0V2lkdGg7XG5cdFx0XHRzZXRXaWR0aCA9IGRpdlRvUG9wdXA7XG5cblx0XHRcdGlmIChpc0luc2lkZUlmcmFtZSkge1xuXHRcdFx0XHRkaXZUb1BvcHVwID0gd2luZG93LnRvcC4kKCcub3MtaW50ZXJuYWwtdWktZGlhbG9nLWNvbnRlbnQnKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGRpdlRvUG9wdXAgPSAkKCcub3MtaW50ZXJuYWwtdWktZGlhbG9nLWNvbnRlbnQnKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBSZXNpemUgbXVzdCBiYWlsIG91dCBpbW1lZGlhdGVseSBpZiB0aGUgcG9wdXAgaXMgbWFya2VkIGFzIGNsb3NpbmcsIGFuZCBub3Qgc3RhcnQgdGhlIGFuaW1hdGlvbi5cblx0XHRpZiAoJC5kYXRhKGRpdlRvUG9wdXAuZ2V0KDApLCBQT1BVUF9DTE9TSU5HX1RBRykgPT0gUE9QVVBfQ0xPU0lOR19WQUxVRSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGxldCBkb2N1bWVudFNlcnZlcjtcblx0XHRsZXQgZnJhbWVPYmogPSBkaXZUb1BvcHVwLmZpbmQoJ2lmcmFtZScpWzBdO1xuXG5cdFx0aWYgKHR5cGVvZiBmcmFtZU9iaiA9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0ZnJhbWVPYmogPSB3aW5kb3cudG9wLiQoJyNpZnJhbWVfJyArIF9pZClbMF07XG5cdFx0fVxuXG5cdFx0aWYgKGlzSW5zaWRlSWZyYW1lKSB7XG5cdFx0XHRkb2N1bWVudFNlcnZlciA9IHdpbmRvdy50b3AuZG9jdW1lbnQubG9jYXRpb24uaHJlZi5yZXBsYWNlKC8oaHR0cHM/OlxcL1xcL1teXFwvXSopLiovLCAnJDEnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZG9jdW1lbnRTZXJ2ZXIgPSBkb2N1bWVudC5sb2NhdGlvbi5ocmVmLnJlcGxhY2UoLyhodHRwcz86XFwvXFwvW15cXC9dKikuKi8sICckMScpO1xuXHRcdH1cblxuXHRcdGlmICh0eXBlb2YgZnJhbWVPYmogIT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdGNvbnN0IGZyYW1lU2VydmVyID0gZnJhbWVPYmouc3JjLnJlcGxhY2UoLyhodHRwcz86XFwvXFwvW15cXC9dKikuKi8sICckMScpO1xuXHRcdFx0Y29uc3Qgc2FtZU9yaWdpbiA9IGZyYW1lU2VydmVyLnRvTG93ZXJDYXNlKCkgPT0gZG9jdW1lbnRTZXJ2ZXIudG9Mb3dlckNhc2UoKSB8fCBmcmFtZVNlcnZlci5pbmRleE9mKCdodHRwJykgIT0gMDtcblxuXHRcdFx0aWYgKCFzYW1lT3JpZ2luICYmIChzZXRXaWR0aCA9PSAtMSB8fCBzZXRIZWlnaHQgPT0gLTEpKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignQSBQb3B1cCB3aXRoIGEgc2NyZWVuIGZyb20gYSBkaWZmZXJlbnQgc2VydmVyIChvciBodHRwcykgbmVlZHMgZXhwbGljaWN0IHdpZHRoLCBoZWlnaHQgc2V0LicpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoc2FtZU9yaWdpbikge1xuXHRcdFx0XHRpZiAoZnJhbWVPYmouY29udGVudERvY3VtZW50ICE9PSBudWxsIHx8IGZyYW1lT2JqLmNvbnRlbnRXaW5kb3cgIT09IG51bGwpIHtcblx0XHRcdFx0XHR2YXIgaW5uZXJEb2MgPSBmcmFtZU9iai5jb250ZW50RG9jdW1lbnQgPyBmcmFtZU9iai5jb250ZW50RG9jdW1lbnQgOiBmcmFtZU9iai5jb250ZW50V2luZG93LmRvY3VtZW50O1xuXHRcdFx0XHRcdGlmIChpbm5lckRvYy5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0ID09IDApXG5cdFx0XHRcdFx0XHQvLyBTdHJhbmdlbHkgdGhpcyBldmVudCBpcyBhbHNvIHRyaWdnZXJlZCBvbiBjbG9zZVxuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGxldCBvbGRIZWlnaHQ7XG5cdFx0XHRpZiAoaXNJbnNpZGVJZnJhbWUpIHtcblx0XHRcdFx0b2xkSGVpZ2h0ID0gd2luZG93LnRvcFxuXHRcdFx0XHRcdC4kKGRpdlRvUG9wdXApXG5cdFx0XHRcdFx0LnBhcmVudHMoJy5vcy1pbnRlcm5hbC1Qb3B1cCcpXG5cdFx0XHRcdFx0Lm91dGVySGVpZ2h0KCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRvbGRIZWlnaHQgPSAkKGRpdlRvUG9wdXApXG5cdFx0XHRcdFx0LnBhcmVudHMoJy5vcy1pbnRlcm5hbC1Qb3B1cCcpXG5cdFx0XHRcdFx0Lm91dGVySGVpZ2h0KCk7XG5cdFx0XHR9XG5cblx0XHRcdGxldCB3aWR0aCA9IHNldFdpZHRoID09IC0xID8gJChpbm5lckRvYykud2lkdGgoKSA6IHNldFdpZHRoO1xuXHRcdFx0bGV0IGhlaWdodCA9IHNldEhlaWdodCA9PSAtMSA/ICQoaW5uZXJEb2MpLmhlaWdodCgpIDogc2V0SGVpZ2h0O1xuXG5cdFx0XHR2YXIgdGl0bGVIZWlnaHQ7XG5cdFx0XHRpZiAoaXNJbnNpZGVJZnJhbWUpIHtcblx0XHRcdFx0dGl0bGVIZWlnaHQgPSB3aW5kb3cudG9wLiQoJy5vcy1pbnRlcm5hbC11aS1kaWFsb2ctdGl0bGViYXInKS5oZWlnaHQoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRpdGxlSGVpZ2h0ID0gJCgnLm9zLWludGVybmFsLXVpLWRpYWxvZy10aXRsZWJhcicpLmhlaWdodCgpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBWZXJpZnkgaWYgdGhlIHBhcmVudCB3aW5kb3cgd2lkdGggaXMgbGVzcyB0aGFuIHRoZSBwb3AtdXAgd2luZG93LCBpZiBzbyBzZXQgdGhlIHJlc3BvbnNpdmUgY2xhc3Mgb24gdGhlIGlmcmFtZSBib2R5IChmb3IgcmVzcG9uc2l2ZSB0aGVtZXMpXG5cdFx0XHRpZiAod2luZG93LmlubmVyV2lkdGggPCB3aWR0aCkge1xuXHRcdFx0XHQvLyBvbmx5IHNldCB0aGUgY2xhc3MgaWYgdGhlIG9yaWdpbiBpcyB0aGUgc2FtZVxuXHRcdFx0XHRpZiAoc2FtZU9yaWdpbikge1xuXHRcdFx0XHRcdCQoaW5uZXJEb2MpXG5cdFx0XHRcdFx0XHQuZmluZCgnYm9keScpXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ1Jlc3BvbnNpdmUnKTtcblx0XHRcdFx0XHR3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gMjA7IC8vIDEwcHggXCJwYWRkaW5nXCIgZWZmZWN0LCB0byBrZWVwIHRoZSBwb3B1cCBsb29rIGFuZCBmZWVsIG9uIHRvcCBvZiBjb250ZW50XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gRml4IGlzc3VlcyB3aXRoIHNjcm9sbGJhcnNcblx0XHRcdGlmIChzZXRIZWlnaHQgPT0gLTEpIHtcblx0XHRcdFx0Ly8gSUU3IG5lZWRzIGEgbGl0dGxlIG1vcmUgc3BhY2UgdG8gcmVtb3ZlIHRoZSBzY3JvbGxiYXJzXG5cdFx0XHRcdGlmICgkLmJyb3dzZXIubXNpZSkgaGVpZ2h0ID0gaGVpZ2h0ICsgMTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vd2hlbiBleHBsaWNpdGx5IHNldHRpbmcgdGhlIGhlaWdodFxuXHRcdFx0XHRpZiAoc2FtZU9yaWdpbil7XG5cdFx0XHRcdFx0aWYoaW5uZXJEb2MgIT0gdW5kZWZpbmVkKXtcblx0XHRcdFx0XHRcdGlubmVyRG9jLmJvZHkuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xuXHRcdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJUaGUgaW5uZXJEb2MuYm9keSBpcyB1bmRlZmluZWRcIik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmIChpc0luc2lkZUlmcmFtZSkge1xuXHRcdFx0XHR3aW5kb3cudG9wLiQoZGl2VG9Qb3B1cCkuaGVpZ2h0KGhlaWdodCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkKGRpdlRvUG9wdXApLmhlaWdodChoZWlnaHQpO1xuXHRcdFx0fVxuXG5cdFx0XHQvL0hpZGUgRUNUXG5cdFx0XHRpZiAoaXNJbnNpZGVJZnJhbWUpIHtcblx0XHRcdFx0d2luZG93LnRvcFxuXHRcdFx0XHRcdC4kKGlubmVyRG9jKVxuXHRcdFx0XHRcdC5maW5kKCcuRUNUX0ZlZWRiYWNrQ29udGFpbmVyJylcblx0XHRcdFx0XHQuaGlkZSgpO1xuXHRcdFx0XHR2YXIgZGl2UG9wdXBPdXRlcldpbmRvdyA9IHdpbmRvdy50b3AuJChkaXZUb1BvcHVwKS5wYXJlbnRzKCcub3MtaW50ZXJuYWwtUG9wdXAnKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCQoaW5uZXJEb2MpXG5cdFx0XHRcdFx0LmZpbmQoJy5FQ1RfRmVlZGJhY2tDb250YWluZXInKVxuXHRcdFx0XHRcdC5oaWRlKCk7XG5cdFx0XHRcdHZhciBkaXZQb3B1cE91dGVyV2luZG93ID0gJChkaXZUb1BvcHVwKS5wYXJlbnRzKCcub3MtaW50ZXJuYWwtUG9wdXAnKTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGFuaW1hdGVGaW5hbCA9IHt9O1xuXG5cdFx0XHRpZiAoc2V0SGVpZ2h0ID09IC0xKSB7XG5cdFx0XHRcdHZhciBvbGRUb3AgPSBwYXJzZUludChkaXZQb3B1cE91dGVyV2luZG93LmNzcygndG9wJykpO1xuXHRcdFx0XHRpZiAocmVjZW50ZXIpIGFuaW1hdGVGaW5hbC50b3AgPSBNYXRoLm1heCgyMCwgb2xkVG9wICsgKG9sZEhlaWdodCAtIChoZWlnaHQgKyB0aXRsZUhlaWdodCkpIC8gMik7XG5cdFx0XHRcdGFuaW1hdGVGaW5hbC5oZWlnaHQgPSBoZWlnaHQgKyB0aXRsZUhlaWdodDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHNldFdpZHRoID09IC0xKSB7XG5cdFx0XHRcdHZhciBvbGRMZWZ0ID0gcGFyc2VJbnQoZGl2UG9wdXBPdXRlcldpbmRvdy5jc3MoJ2xlZnQnKSk7XG5cdFx0XHRcdGlmIChyZWNlbnRlcikgYW5pbWF0ZUZpbmFsLmxlZnQgPSBvbGRMZWZ0ICsgKGRpdlBvcHVwT3V0ZXJXaW5kb3cud2lkdGgoKSAtIHdpZHRoKSAvIDI7XG5cdFx0XHRcdGFuaW1hdGVGaW5hbC53aWR0aCA9IHdpZHRoO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoXG5cdFx0XHRcdGRpdlBvcHVwT3V0ZXJXaW5kb3cud2lkdGgoKSA9PSBhbmltYXRlRmluYWwud2lkdGggJiZcblx0XHRcdFx0ZGl2UG9wdXBPdXRlcldpbmRvdy5oZWlnaHQoKSA9PSBhbmltYXRlRmluYWwuaGVpZ2h0IC0gKCQuYnJvd3Nlci5tc2llID8gMSA6IDApXG5cdFx0XHQpIHtcblx0XHRcdFx0JCgnLm9zLWludGVybmFsLXVpLWRpYWxvZy1jb250ZW50Pi5MYXlvdXRQb3B1cC1sb2FkaW5nJykuaGlkZSgpO1xuXHRcdFx0XHQkKGRpdlRvUG9wdXApLmhlaWdodChoZWlnaHQgLSAoJC5icm93c2VyLm1zaWUgPyAxIDogMCkpOyAvLyByZXN0b3JlIHNpemVcblx0XHRcdFx0cmV0dXJuIHRydWU7IC8vIG5vdGhpbmcgdG8gZG8uLi5cblx0XHRcdH1cblxuXHRcdFx0Ly8gaGlkZSBjb250ZW50IGluIGZpcnN0IHJlc2l6ZSAtIHJlYWRqdXN0bWVudHMgd2lsbCBub3QgZmxpY2tyXG5cdFx0XHRpZiAoZGl2UG9wdXBPdXRlcldpbmRvdy53aWR0aCgpID09IFBPUFVQX0lOSVRJQUxfV0lEVEggJiYgZGl2UG9wdXBPdXRlcldpbmRvdy5oZWlnaHQoKSA9PSBQT1BVUF9JTklUSUFMX0hFSUdIVCkge1xuXHRcdFx0XHQkKGZyYW1lT2JqKS5oZWlnaHQoMCk7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBvbkFuaW1hdGlvbkNvbXBsZXRlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aWYgKGlzSW5zaWRlSWZyYW1lKSB7XG5cdFx0XHRcdFx0XHR3aW5kb3cudG9wLiQoJy5vcy1pbnRlcm5hbC11aS1kaWFsb2ctdGl0bGViYXItY2xvc2Utbm8tdGl0bGUnKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcblx0XHRcdFx0XHRcdHdpbmRvdy50b3Bcblx0XHRcdFx0XHRcdFx0LiQoZGl2VG9Qb3B1cClcblx0XHRcdFx0XHRcdFx0LmZpbmQoJ2lmcmFtZScpXG5cdFx0XHRcdFx0XHRcdC5oZWlnaHQoJzEwMCUnKVxuXHRcdFx0XHRcdFx0XHQud2lkdGgoYW5pbWF0ZUZpbmFsLndpZHRoKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0JCgnLm9zLWludGVybmFsLXVpLWRpYWxvZy10aXRsZWJhci1jbG9zZS1uby10aXRsZScpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xuXHRcdFx0XHRcdFx0JChkaXZUb1BvcHVwKVxuXHRcdFx0XHRcdFx0XHQuZmluZCgnaWZyYW1lJylcblx0XHRcdFx0XHRcdFx0LmhlaWdodCgnMTAwJScpXG5cdFx0XHRcdFx0XHRcdC53aWR0aChhbmltYXRlRmluYWwud2lkdGgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSwgMTMpO1xuXHRcdFx0fTtcblxuXHRcdFx0dmFyIGRpdlBsZWFzZVdhaXQ7XG5cdFx0XHRpZiAoaXNJbnNpZGVJZnJhbWUpIHtcblx0XHRcdFx0ZGl2UGxlYXNlV2FpdCA9IHdpbmRvdy50b3AuJCgnLm9zLWludGVybmFsLXVpLWRpYWxvZy1jb250ZW50Pi5MYXlvdXRQb3B1cC1sb2FkaW5nJyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkaXZQbGVhc2VXYWl0ID0gJCgnLm9zLWludGVybmFsLXVpLWRpYWxvZy1jb250ZW50Pi5MYXlvdXRQb3B1cC1sb2FkaW5nJyk7XG5cdFx0XHR9XG5cblx0XHRcdGRpdlBsZWFzZVdhaXQuaGlkZSgpO1xuXG5cdFx0XHRpZiAoc2V0SGVpZ2h0ID09IC0xIHx8IHNldFdpZHRoID09IC0xKSB7XG5cdFx0XHRcdGRpdlBvcHVwT3V0ZXJXaW5kb3cuYW5pbWF0ZShhbmltYXRlRmluYWwsIHtcblx0XHRcdFx0XHRkdXJhdGlvbjogMjAwLFxuXHRcdFx0XHRcdGNvbXBsZXRlOiBvbkFuaW1hdGlvbkNvbXBsZXRlLFxuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG9uQW5pbWF0aW9uQ29tcGxldGUoKTtcblx0XHRcdH1cblx0XHRcdGlubmVyRG9jID0gbnVsbDtcblx0XHRcdGRpdlBvcHVwT3V0ZXJXaW5kb3cgPSBudWxsO1xuXHRcdFx0aWYgKGlzSW5zaWRlSWZyYW1lKSB7XG5cdFx0XHRcdHdpbmRvdy50b3AuJC5kYXRhKGV2ZW50LnRhcmdldCwgJ29zLWludGVybmFsLXByb2Nlc3NpbmcnLCBmYWxzZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkLmRhdGEoZXZlbnQudGFyZ2V0LCAnb3MtaW50ZXJuYWwtcHJvY2Vzc2luZycsIGZhbHNlKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCBjbG9zZSA9ICgpID0+IHtcblx0XHRsZXQgcG9wdXBUb0Nsb3NlO1xuXHRcdGxldCBwb3B1cENvbnRhaW5lcjtcblxuXHRcdGlmIChpc0luc2lkZUlmcmFtZSkge1xuXHRcdFx0cG9wdXBUb0Nsb3NlID0gd2luZG93LnRvcC4kKCcub3MtaW50ZXJuYWwtdWktZGlhbG9nLWNvbnRlbnQnKTtcblx0XHRcdHBvcHVwQ29udGFpbmVyID0gd2luZG93LnRvcC4kKCcuU2FwcGhpcmVQb3B1cCcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRwb3B1cFRvQ2xvc2UgPSAkKCcub3MtaW50ZXJuYWwtdWktZGlhbG9nLWNvbnRlbnQnKTtcblx0XHRcdHBvcHVwQ29udGFpbmVyID0gJCgnLlNhcHBoaXJlUG9wdXAnKTtcblx0XHR9XG5cblx0XHRwb3B1cFRvQ2xvc2UuZGF0YShQT1BVUF9DTE9TSU5HX1RBRywgUE9QVVBfQ0xPU0lOR19WQUxVRSk7XG5cblx0XHQvL3NldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0aWYgKHBvcHVwVG9DbG9zZS5sZW5ndGgpIHBvcHVwVG9DbG9zZS5kaWFsb2coJ2Nsb3NlJyk7XG5cblx0XHRwb3B1cFRvQ2xvc2UucmVtb3ZlKCk7XG5cdFx0cG9wdXBDb250YWluZXIucmVtb3ZlKCk7XG5cdFx0Ly99LCAwKTtcblx0fTtcblxuXHRjb25zdCBnZXRMaW5rSFJFRiA9IHdpZGdldCA9PiB7XG5cdFx0bGV0IGxpbmtIcmVmO1xuXHRcdGxldCBpc0FCdXR0b24gPSBmYWxzZTtcblxuXHRcdHRyeSB7XG5cdFx0XHQvL0NoZWNrcyBpZiB0aGUgaWQgaXMgZnJvbSBhIGxpbmsgb3Igbm90XG5cdFx0XHRsaW5rSHJlZiA9ICQod2lkZ2V0KS5hdHRyKCdocmVmJyk7XG5cblx0XHRcdC8vVGVzdHMgZm9yIHZpc2liaWxpdHkvZXhpc3RlbmNlXG5cdFx0XHRpZiAodHlwZW9mIGxpbmtIcmVmID09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdGNvbnN0IG9uQ2xpY2sgPSB3aWRnZXQuZ2V0QXR0cmlidXRlKCdvbmNsaWNrJyk7XG5cblx0XHRcdFx0aWYgKHR5cGVvZiBvbkNsaWNrICE9ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdFx0aXNBQnV0dG9uID0gdHJ1ZTtcblxuXHRcdFx0XHRcdGlmIChvbkNsaWNrICE9IG51bGwpIHtcblx0XHRcdFx0XHRcdGxldCBocmVmTWF0Y2g7XG5cblx0XHRcdFx0XHRcdGlmICgoaHJlZk1hdGNoID0gb25DbGljay50b1N0cmluZygpLm1hdGNoKC9ocmVmPScoW14nXSopJy8pKSAhPSBudWxsKSB7XG5cdFx0XHRcdFx0XHRcdGxpbmtIcmVmID0gaHJlZk1hdGNoWzFdO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGUpIHt9XG5cblx0XHRyZXR1cm4gW2xpbmtIcmVmLCBpc0FCdXR0b25dO1xuXHR9O1xuXG5cdGNvbnN0IG9wZW5Qb3B1cCA9IChkaXZUb1BvcHVwLCBkaXZQbGVhc2VXYWl0LCBsb2FkVGFyZ2V0UGFnZSwgZXZlbnQsIGNvbmZpZykgPT4ge1xuXHRcdC8vIERlc3Ryb3kgYW55IHByZXZpb3VzIGRpYWxvZ1xuXHRcdGNsb3NlKG51bGwpO1xuXG5cdFx0aWYgKGlzSW5zaWRlSWZyYW1lKSB7XG5cdFx0XHRjb25zdCAkalBhcmVudCA9IHdpbmRvdy50b3AuJDtcblx0XHRcdCRqUGFyZW50KCcub3MtaW50ZXJuYWwtUG9wdXAnKS5yZW1vdmUoKTtcblx0XHR9XG5cblx0XHQvLyBJZiBhbnkgY2xvc2UgaXMgcGVuZGluZywgc2NoZWR1bGUgdG8gZXhlY3V0ZSBpdHNlbGYgYXN5bmNocm9ub3VzbHkgZXhpdFxuXHRcdC8vIElmIG5vIGNsb3NlIGlzIHBlbmRpbmcsIGNvbnRpbnVlIHdpdGggb3BlbiBvcGVyYXRpb25cblx0XHRsZXQgY2xvc2luZ1BvcHVwcztcblxuXHRcdGlmIChpc0luc2lkZUlmcmFtZSkgY2xvc2luZ1BvcHVwcyA9IHdpbmRvdy50b3AuJCgnLm9zLWludGVybmFsLXVpLWRpYWxvZy1jb250ZW50Jyk7XG5cdFx0ZWxzZSBjbG9zaW5nUG9wdXBzID0gJCgnLm9zLWludGVybmFsLXVpLWRpYWxvZy1jb250ZW50Jyk7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNsb3NpbmdQb3B1cHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmICgkLmRhdGEoY2xvc2luZ1BvcHVwcy5nZXQoaSksIFBPUFVQX0NMT1NJTkdfVEFHKSA9PSBQT1BVUF9DTE9TSU5HX1ZBTFVFKSB7XG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0b3BlblBvcHVwKGRpdlRvUG9wdXAsIGRpdlBsZWFzZVdhaXQsIGxvYWRUYXJnZXRQYWdlLCBldmVudCwgY29uZmlnKTtcblx0XHRcdFx0fSwgMTMpO1xuXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRsZXQgX2RpYWxvZztcblxuXHRcdGlmIChpc0luc2lkZUlmcmFtZSkge1xuXHRcdFx0Y29uc3QgcG9wdXBDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcblx0XHRcdHBvcHVwQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnU2FwcGhpcmVQb3B1cCcpO1xuXG5cdFx0XHR3aW5kb3cudG9wLmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocG9wdXBDb250YWluZXIpO1xuXG5cdFx0XHRfZGlhbG9nID0gd2luZG93LnRvcC4kKGRpdlRvUG9wdXApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkKCc8ZGl2IGNsYXNzPVwiU2FwcGhpcmVQb3B1cFwiPjwvZGl2PicpLmFwcGVuZFRvKCdib2R5Jyk7XG5cblx0XHRcdF9kaWFsb2cgPSAkKGRpdlRvUG9wdXApO1xuXHRcdH1cblxuXHRcdCQoZGl2UGxlYXNlV2FpdCkuc2hvdygpO1xuXG5cdFx0aWYgKCQoJy5JU2lkZWJhcicpLmxlbmd0aCkgd2luZG93LnBhcmVudC5TYXBwaGlyZVdpZGdldHMuTGF5b3V0QmFzZS5vcGVuU2lkZWJhcklmcmFtZSgwKTtcblxuXHRcdF9kaWFsb2cuc2hvdygpLmRpYWxvZyh7XG5cdFx0XHRhcHBlbmRUbzogJy5TYXBwaGlyZVBvcHVwJyxcblx0XHRcdGRpYWxvZ0NsYXNzOiAnb3MtaW50ZXJuYWwtUG9wdXAnLFxuXHRcdFx0cmVzaXphYmxlOiBmYWxzZSxcblx0XHRcdGF1dG9SZXNpemU6IGZhbHNlLFxuXHRcdFx0Y2xvc2VPbkVzY2FwZTogIWNvbmZpZy5oaWRlQ2xvc2VCdXR0b24sXG5cdFx0XHRiZ2lmcmFtZTogdHJ1ZSxcblx0XHRcdGRyYWdnYWJsZTogZmFsc2UsXG5cdFx0XHRhdXRvT3BlbjogdHJ1ZSxcblx0XHRcdHRpdGxlOiBjb25maWcuc2V0VGl0bGUsXG5cdFx0XHRtb2RhbDogIShjb25maWcudXNlTW9kYWwgPT09IGZhbHNlKSxcblx0XHRcdGhlaWdodDogY29uZmlnLnNldEhlaWdodCA9PSAtMSA/IFBPUFVQX0lOSVRJQUxfSEVJR0hUIDogY29uZmlnLnNldEhlaWdodCxcblx0XHRcdHBvc2l0aW9uOiAnY2VudGVyJyxcblx0XHRcdHdpZHRoOiBjb25maWcuc2V0V2lkdGggPT0gLTEgPyBQT1BVUF9JTklUSUFMX1dJRFRIIDogY29uZmlnLnNldFdpZHRoLFxuXHRcdFx0ekluZGV4OiBQT1BVUF9XSU5ET1dfSU5ERVgsXG5cdFx0XHRjbG9zZTogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdC8vIElmIHRoZSBwb3B1cCBpcyBjbG9zZWQgYmVmb3JlIGl0IGlzIHJlc2l6ZWQgKEVTQykgd2UgbmVlZCB0byBzZXQgdGhlIHByb2Nlc3NpbmcgZXZlbnQgdG8gZmFsc2UuXG5cdFx0XHRcdCQuZGF0YShldmVudC50YXJnZXQsICdvcy1pbnRlcm5hbC1wcm9jZXNzaW5nJywgZmFsc2UpO1xuXG5cdFx0XHRcdF9kaWFsb2cuZmluZCgnaWZyYW1lJykudW5iaW5kKCdsb2FkJyk7XG5cdFx0XHRcdF9kaWFsb2cuZmluZCgnaWZyYW1lJykuYXR0cignc3JjJywgJ2Fib3V0OmJsYW5rJyk7XG5cblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRfZGlhbG9nLmZpbmQoJ2lmcmFtZScpLmVtcHR5KCk7XG5cdFx0XHRcdFx0X2RpYWxvZy5lbXB0eSgpO1xuXHRcdFx0XHR9LCAxMyk7XG5cdFx0XHR9LFxuXHRcdH0pO1xuXG5cdFx0X2RpYWxvZy5maW5kKCdpZnJhbWUnKS5oZWlnaHQoMCk7XG5cdFx0X2RpYWxvZy5wYXJlbnRzKCcub3MtaW50ZXJuYWwtdWktZGlhbG9nJykuZHJvcFNoYWRvdygpO1xuXG5cdFx0aWYgKGNvbmZpZy5Dc3NDbGFzc2VzICE9PSAnICcpIHtcblx0XHRcdGlmIChpc0luc2lkZUlmcmFtZSkgd2luZG93LnRvcC4kKCcub3MtaW50ZXJuYWwtdWktZGlhbG9nJykuYWRkQ2xhc3MoY29uZmlnLkNzc0NsYXNzZXMpO1xuXHRcdFx0ZWxzZSAkKCcub3MtaW50ZXJuYWwtdWktZGlhbG9nJykuYWRkQ2xhc3MoY29uZmlnLkNzc0NsYXNzZXMpO1xuXHRcdH1cblxuXHRcdGxvYWRUYXJnZXRQYWdlKCk7XG5cdH07XG5cblx0U2FwcGhpcmVXaWRnZXRzLlNhcHBoaXJlUG9wdXAgPSB7IGNyZWF0ZSwgY2xvc2UsIHJlc2l6ZSB9O1xufSkoalF1ZXJ5LCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cyk7XG4iLCIvKiBDb21wb25lbnQgU2FwcGhpcmVSYWRpb0J1dHRvbiAqL1xyXG5TYXBwaGlyZVdpZGdldHMuU2FwcGhpcmVSYWRpb0J1dHRvbiA9IHdpZGdldElkID0+IHtcclxuXHRjb25zdCAkd2lkZ2V0ID0gJChgIyR7d2lkZ2V0SWR9YCk7XHJcblx0Y29uc3QgJGlucHV0ID0gJHdpZGdldC5maW5kKCdpbnB1dFt0eXBlPVwicmFkaW9cIl0nKTtcclxuXHRjb25zdCAkbGFiZWwgPSAkd2lkZ2V0LmZpbmQoJy5CdXR0b25SYWRpb0lucF9yYWRpb1RleHQnKTtcclxuXHRjb25zdCBuYW1lID0gJGlucHV0LnByb3AoJ25hbWUnKTtcclxuXHJcblx0Y29uc3QgYWRkUmVtb3ZlQ2xhc3MgPSAoJGVsLCB0b0FkZCkgPT4ge1xyXG5cdFx0aWYgKHRvQWRkKSAkZWwuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0ZWxzZSAkZWwucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGlzQ2hlY2tlZCA9ICRlbCA9PiB7XHJcblx0XHRpZiAoJGVsLmlzKCc6Y2hlY2tlZCcpKSBhZGRSZW1vdmVDbGFzcygkd2lkZ2V0LCB0cnVlKTtcclxuXHRcdGVsc2UgYWRkUmVtb3ZlQ2xhc3MoJHdpZGdldCwgZmFsc2UpO1xyXG5cdH07XHJcblxyXG5cdCRpbnB1dC5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdCR3aWRnZXQucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuXHRcdCQoYGlucHV0W3R5cGU9XCJyYWRpb1wiXVtuYW1lPVwiJHtuYW1lfVwiXWApLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdGFkZFJlbW92ZUNsYXNzKCQodGhpcykuY2xvc2VzdCgnLkJ1dHRvblJhZGlvSW5wJyksICQodGhpcykuaXMoJzpjaGVja2VkJykpO1xyXG5cdFx0fSk7XHJcblx0fSk7XHJcblxyXG5cdCRpbnB1dC5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcblx0XHRpc0NoZWNrZWQoJCh0aGlzKSk7XHJcblx0fSk7XHJcblxyXG5cdCRsYWJlbC5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdGNvbnN0ICRjbG9zZXN0RWxlbWVudCA9ICQodGhpcykuY2xvc2VzdCgnLkJ1dHRvblJhZGlvSW5wJyk7XHJcblxyXG5cdFx0aWYgKCRjbG9zZXN0RWxlbWVudC5oYXNDbGFzcygnZGlzYWJsZWQnKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuXHRcdCRpbnB1dFswXS5jbGljaygpO1xyXG5cdFx0Ly9pc0NoZWNrZWQoJGlucHV0KTtcclxuXHR9KTtcclxuXHJcblx0aXNDaGVja2VkKCRpbnB1dCk7XHJcbn07XHJcbiIsIi8qIENvbXBvbmVudCBTY2FsZU1haW5TdHJ1Y3R1cmUgKi9cclxuKGZ1bmN0aW9uKCQsIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKSB7XHJcblx0Y29uc3QgY3JlYXRlID0gY29uZmlnID0+IHtcclxuXHRcdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRzZXR1cFNjYWxlKCk7XHJcblx0XHRcdGJpbmRDbGlja3MoKTtcclxuXHJcblx0XHRcdG9zQWpheEJhY2tlbmQgJiZcclxuXHRcdFx0XHRvc0FqYXhCYWNrZW5kLkJpbmRBZnRlckFqYXhSZXF1ZXN0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0YmluZENsaWNrcygpO1xyXG5cdFx0XHRcdFx0fSwgMTAwMCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRTY2FsZUNvdW50ID0gY29uZiA9PiB7XHJcblx0XHQkKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgQ2FyZFNjYWxlID0gY29uZi5Jc0NhcmRTY2FsZTtcclxuXHRcdFx0dmFyIFJ1bGVyU2NhbGUgPSBjb25mLklzUnVsZXJTY2FsZTtcclxuXHRcdFx0dmFyIE11bHRpcGxlU2NhbGUgPSBjb25mLklzTXVsdGlwbGVTY2FsZTtcclxuXHRcdFx0dmFyICR0b3RhbFBsYWNlID0gJCgnLlNjYWxlTWFpblN0cnVjdHVyZV9mb290ZXJSZXN1bHQnKTtcclxuXHRcdFx0dmFyIHRvdGFsQ2FyZFNjYWxlID0gMDtcclxuXHRcdFx0dmFyIHRvdGFsTXVsdGlwbGVTY2FsZSA9IDA7XHJcblx0XHRcdHZhciB0b3RhbFJ1bGVyU2NhbGUgPSAwO1xyXG5cclxuXHRcdFx0dmFyIFNjYWxlVHlwZUNhcmQgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR2YXIgdG90YWxTZWxlY3RlZCA9ICQoJy5TY2FsZUxpc3QuQ2FyZFNjYWxlJykuZmluZCgnLlNjYWxlQ2FyZC5hY3RpdmUnKS5sZW5ndGg7XHJcblx0XHRcdFx0dmFyIHRvdGFsTnVtYmVyID0gMDtcclxuXHRcdFx0XHQkKFwiLlNjYWxlTGlzdC5DYXJkU2NhbGU6bm90KCcuaXNUaXRsZScpXCIpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRpZiAoJCh0aGlzKS5maW5kKCcuU2NhbGVDYXJkJykubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdFx0XHR0b3RhbE51bWJlciArPSAxO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRpZiAodG90YWxOdW1iZXIgPT09IHRvdGFsU2VsZWN0ZWQpIHtcclxuXHRcdFx0XHRcdHZhciB0b3RhbCA9IFtdO1xyXG5cdFx0XHRcdFx0dmFyIGlucHV0VmFsdWUgPSAnJztcclxuXHRcdFx0XHRcdHZhciAkc2NhbGVSb3cgPSAkKCcuU2NhbGVMaXN0LkNhcmRTY2FsZTpub3QoLmlzVGl0bGUpJyk7XHJcblx0XHRcdFx0XHQkc2NhbGVSb3cuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0aW5wdXRWYWx1ZSA9ICQodGhpcylcclxuXHRcdFx0XHRcdFx0XHQuZmluZCgnLlNjYWxlQ2FyZC5hY3RpdmUnKVxyXG5cdFx0XHRcdFx0XHRcdC5kYXRhKCd2YWx1ZScpO1xyXG5cdFx0XHRcdFx0XHQkKHRoaXMpXHJcblx0XHRcdFx0XHRcdFx0LmZpbmQoJy5TY2FsZUxpc3RfaW5wdXRWYWx1ZSBpbnB1dCcpXHJcblx0XHRcdFx0XHRcdFx0LnZhbChpbnB1dFZhbHVlKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdCQoJy5TY2FsZUxpc3QuQ2FyZFNjYWxlIC5TY2FsZUNhcmQuYWN0aXZlJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0dG90YWwucHVzaCgkKHRoaXMpLmRhdGEoJ3ZhbHVlJykpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR2YXIgZmluYWxUb3RhbCA9IGV2YWwodG90YWwuam9pbignKycpKTtcclxuXHRcdFx0XHRcdHJldHVybiBmaW5hbFRvdGFsO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHZhciBTY2FsZVR5cGVSdWxlciA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHZhciBhY3RpdmVSdWxlclZhbHVlID0gJyc7XHJcblx0XHRcdFx0dmFyICRhY3RpdmVSdWxlciA9ICQoJy5SdWxlclNjYWxlX251bWJlci5hY3RpdmUnKTtcclxuXHRcdFx0XHRpZiAoJGFjdGl2ZVJ1bGVyLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRcdHZhciBhY3RpdmVSdWxlclZhbHVlID0gJCgnLlJ1bGVyU2NhbGVfbnVtYmVyLmFjdGl2ZScpXHJcblx0XHRcdFx0XHRcdC5jbG9zZXN0KCcuUnVsZXJTY2FsZScpXHJcblx0XHRcdFx0XHRcdC5kYXRhKCkudmFsdWU7XHJcblx0XHRcdFx0XHQkKCcuU2NhbGVMaXN0LlJ1bGVyJylcclxuXHRcdFx0XHRcdFx0LmZpbmQoJy5TY2FsZUxpc3RfaW5wdXRWYWx1ZSBpbnB1dCcpXHJcblx0XHRcdFx0XHRcdC52YWwoYWN0aXZlUnVsZXJWYWx1ZSk7XHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuIGFjdGl2ZVJ1bGVyVmFsdWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiBhY3RpdmVSdWxlclZhbHVlO1xyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0dmFyIFNjYWxlVHlwZU11bHRpcGxlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dmFyIG51bWJlcm9mQ29scyA9ICQoJy5TY2FsZUxpc3QuTXVsdGlwbGVTY2FsZScpXHJcblx0XHRcdFx0XHQuZmlyc3QoKVxyXG5cdFx0XHRcdFx0LmZpbmQoJy5CdXR0b25Hcm91cFNjYWxlJykubGVuZ3RoO1xyXG5cdFx0XHRcdHZhciBudW1iZXJvZlJvd3MgPSAkKCcuQnV0dG9uR3JvdXBTY2FsZScpLmNsb3Nlc3QoJy5TY2FsZUxpc3QuTXVsdGlwbGVTY2FsZTpub3QoLmlzVGl0bGUpOm5vdCguaXNTdWJ0b3RhbCknKVxyXG5cdFx0XHRcdFx0Lmxlbmd0aDtcclxuXHRcdFx0XHR2YXIgdG90YWwgPSBbXTtcclxuXHRcdFx0XHR2YXIgaSA9IDA7XHJcblx0XHRcdFx0dmFyIGogPSAwO1xyXG5cdFx0XHRcdHZhciBjb3VudEFjdGl2ZSA9IDA7XHJcblx0XHRcdFx0dmFyIGNvdW50YWxsQWN0aXZlQ29scyA9IDA7XHJcblx0XHRcdFx0dmFyIHRvdGFsT2ZJdGVtcyA9IG51bWJlcm9mQ29scyAqIG51bWJlcm9mUm93cztcclxuXHRcdFx0XHR2YXIgdG90YWxTY29yZSA9IFtdO1xyXG5cclxuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgbnVtYmVyb2ZDb2xzOyBpKyspIHtcclxuXHRcdFx0XHRcdGZvciAoaiA9IDA7IGogPCBudW1iZXJvZlJvd3M7IGorKykge1xyXG5cdFx0XHRcdFx0XHR2YXIgU2NhbGVMaXN0U2VsZWN0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG5cdFx0XHRcdFx0XHRcdCcuU2NhbGVMaXN0Lk11bHRpcGxlU2NhbGU6bm90KC5pc1RpdGxlKTpub3QoLmlzU3VidG90YWwpJ1xyXG5cdFx0XHRcdFx0XHQpW2pdO1xyXG5cdFx0XHRcdFx0XHR2YXIgQnV0dG9uU2NhbGVTZWxlY3RlZCA9IFNjYWxlTGlzdFNlbGVjdGVkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5CdXR0b25Hcm91cFNjYWxlJylbaV07XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoQnV0dG9uU2NhbGVTZWxlY3RlZC5xdWVyeVNlbGVjdG9yQWxsKCcuQnV0dG9uR3JvdXBfYnV0dG9uLmFjdGl2ZScpLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRcdFx0XHR2YXIgU2NhbGVWYWx1ZSA9IEJ1dHRvblNjYWxlU2VsZWN0ZWQucXVlcnlTZWxlY3RvckFsbCgnLkJ1dHRvbkdyb3VwX2J1dHRvbi5hY3RpdmUnKVswXS5pbm5lclRleHQ7XHJcblx0XHRcdFx0XHRcdFx0dG90YWwucHVzaChwYXJzZUludChTY2FsZVZhbHVlKSk7XHJcblx0XHRcdFx0XHRcdFx0dG90YWxTY29yZS5wdXNoKHBhcnNlSW50KFNjYWxlVmFsdWUpKTtcclxuXHRcdFx0XHRcdFx0XHRjb3VudEFjdGl2ZSA9IGNvdW50QWN0aXZlICsgMTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKCQoJy5TY2FsZUxpc3QuTXVsdGlwbGVTY2FsZS5pc1N1YnRvdGFsJykubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdFx0XHRpZiAoY291bnRBY3RpdmUgPT09IG51bWJlcm9mUm93cykge1xyXG5cdFx0XHRcdFx0XHRcdHZhciBzdWJUb3RhbCA9IGV2YWwodG90YWwuam9pbignKycpKTtcclxuXHRcdFx0XHRcdFx0XHR2YXIgc3VidG90YWxTY2FsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5TY2FsZUxpc3QuTXVsdGlwbGVTY2FsZS5pc1N1YnRvdGFsIC5CdXR0b25Hcm91cFNjYWxlJylbaV07XHJcblx0XHRcdFx0XHRcdFx0c3VidG90YWxTY2FsZS5pbm5lclRleHQgPSBzdWJUb3RhbDtcclxuXHRcdFx0XHRcdFx0XHRjb3VudGFsbEFjdGl2ZUNvbHMgPSBjb3VudGFsbEFjdGl2ZUNvbHMgKyAxO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRjb3VudEFjdGl2ZSA9IDA7XHJcblx0XHRcdFx0XHR0b3RhbCA9IFtdO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5CdXR0b25Hcm91cF9idXR0b24uYWN0aXZlJykubGVuZ3RoID09PSB0b3RhbE9mSXRlbXMpIHtcclxuXHRcdFx0XHRcdHZhciBpID0gMDtcclxuXHRcdFx0XHRcdHZhciBqID0gMDtcclxuXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBudW1iZXJvZlJvd3M7IGkrKykge1xyXG5cdFx0XHRcdFx0XHR2YXIgU2NhbGVMaXN0Um93ID0gJCgnLlNjYWxlTGlzdC5NdWx0aXBsZVNjYWxlOm5vdCguaXNUaXRsZSk6bm90KC5pc1N1YnR0b3RhbCknKVtpXTtcclxuXHRcdFx0XHRcdFx0dmFyICRTY2FsZUxpc3RJbnB1dCA9ICQoU2NhbGVMaXN0Um93KS5maW5kKCcuU2NhbGVMaXN0X2lucHV0VmFsdWUgaW5wdXQnKTtcclxuXHRcdFx0XHRcdFx0dmFyIHZhbHVlc1NlbGVjdGVkID0gJyc7XHJcblx0XHRcdFx0XHRcdGZvciAoaiA9IDA7IGogPCBudW1iZXJvZkNvbHM7IGorKykge1xyXG5cdFx0XHRcdFx0XHRcdHZhciBBY3RpdmVCdXR0b24gPSAkKFNjYWxlTGlzdFJvdykuZmluZCgnLkJ1dHRvbkdyb3VwX2J1dHRvbi5hY3RpdmUnKVtqXTtcclxuXHRcdFx0XHRcdFx0XHR2YXIgQWN0aXZlVmFsdWUgPSBBY3RpdmVCdXR0b24uaW5uZXJUZXh0O1xyXG5cdFx0XHRcdFx0XHRcdC8vdmFsdWVzU2VsZWN0ZWQ9dmFsdWVzU2VsZWN0ZWQrJywnK0FjdGl2ZVZhbHVlO1xyXG5cdFx0XHRcdFx0XHRcdGlmIChqID09PSBudW1iZXJvZkNvbHMgLSAxKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZXNTZWxlY3RlZCArPSBBY3RpdmVWYWx1ZTtcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWVzU2VsZWN0ZWQgKz0gQWN0aXZlVmFsdWUgKyAnLCc7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdCRTY2FsZUxpc3RJbnB1dC52YWwodmFsdWVzU2VsZWN0ZWQpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dmFyIGdldFRvdGFsID0gZXZhbCh0b3RhbFNjb3JlLmpvaW4oJysnKSk7XHJcblx0XHRcdFx0XHRyZXR1cm4gZ2V0VG90YWw7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0Y29uc3QgVG90YWxDYWxjID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0bGV0IGlzRW1wdHkgPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0aWYgKENhcmRTY2FsZSA9PT0gdHJ1ZSkge1xyXG5cdFx0XHRcdFx0dG90YWxDYXJkU2NhbGUgPSBTY2FsZVR5cGVDYXJkKCk7XHJcblx0XHRcdFx0XHRpc0VtcHR5ID0gdG90YWxDYXJkU2NhbGUgPT09ICcnO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKFJ1bGVyU2NhbGUgPT09IHRydWUpIHtcclxuXHRcdFx0XHRcdHRvdGFsUnVsZXJTY2FsZSA9IFNjYWxlVHlwZVJ1bGVyKCk7XHJcblx0XHRcdFx0XHRpc0VtcHR5ID0gdG90YWxSdWxlclNjYWxlID09PSAnJztcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmIChNdWx0aXBsZVNjYWxlID09PSB0cnVlKSB7XHJcblx0XHRcdFx0XHR0b3RhbE11bHRpcGxlU2NhbGUgPSBTY2FsZVR5cGVNdWx0aXBsZSgpO1xyXG5cdFx0XHRcdFx0aXNFbXB0eSA9IHRvdGFsTXVsdGlwbGVTY2FsZSA9PT0gJyc7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRjb25zdCAkZm9vdGVyUmVzdWx0ID0gJCgnLlNjYWxlTWFpblN0cnVjdHVyZV9mb290ZXJSZXN1bHQnKTtcclxuXHRcdFx0XHRjb25zdCAkdG90YWxTY29yZSA9ICQoJy5TY2FsZU1haW5TdHJ1Y3R1cmVfdG90YWxTY29yZScpO1xyXG5cdFx0XHRcdGNvbnN0ICRzY29yZUxhYmVsID0gJCgnLlNjYWxlTWFpblN0cnVjdHVyZV9mb290ZXJSZXN1bHQgLlRvdGFsTGFiZWwnKTtcclxuXHJcblx0XHRcdFx0aWYgKGlzRW1wdHkpIHtcclxuXHRcdFx0XHRcdCR0b3RhbFNjb3JlLnRleHQoJy0tLScpO1xyXG5cdFx0XHRcdFx0JHNjb3JlTGFiZWwudGV4dCgnLScpO1xyXG5cclxuXHRcdFx0XHRcdCRmb290ZXJSZXN1bHQucmVtb3ZlQ2xhc3MoJ0NvbG9yWmV0YUJHJyk7XHJcblx0XHRcdFx0fSBlbHNlIGlmICghaXNOYU4odG90YWxNdWx0aXBsZVNjYWxlKSAmJiAhaXNOYU4odG90YWxDYXJkU2NhbGUpICYmICFpc05hTih0b3RhbFJ1bGVyU2NhbGUpKSB7XHJcblx0XHRcdFx0XHRjb25zdCB0b3RhbEFic29sdXRlU2NvcmUgPSB0b3RhbENhcmRTY2FsZSArIHRvdGFsTXVsdGlwbGVTY2FsZSArIHRvdGFsUnVsZXJTY2FsZTtcclxuXHRcdFx0XHRcdGNvbnN0IHRvdGFsQWJzb2x1dGVMYWJlbCA9IHRvdGFsQWJzb2x1dGVTY29yZSA+IDExID8gJ0hpZ2gnIDogJ0xvdyc7XHJcblxyXG5cdFx0XHRcdFx0JHRvdGFsU2NvcmUudGV4dCh0b3RhbEFic29sdXRlTGFiZWwpO1xyXG5cdFx0XHRcdFx0JHNjb3JlTGFiZWwudGV4dCh0b3RhbEFic29sdXRlU2NvcmUpO1xyXG5cclxuXHRcdFx0XHRcdCRmb290ZXJSZXN1bHQuYWRkQ2xhc3MoJ0NvbG9yWmV0YUJHJyk7XHJcblxyXG5cdFx0XHRcdFx0Y29uc3QgJGhpZGRlbkxpbmsgPSAkKCcuU2NhbGVNYWluU3RydWN0dXJlX2hpZGRpbmdMaW5rIGEnKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoJGhpZGRlbkxpbmsubGVuZ3RoID4gMCkgJGhpZGRlbkxpbmsuY2xpY2soKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRpZiAoQ2FyZFNjYWxlID09PSB0cnVlKSB7XHJcblx0XHRcdFx0JCgnLlNjYWxlQ2FyZCcpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0aWYgKCEkKHRoaXMpLmhhc0NsYXNzKCdkaXNhYmxlZCcpKSB7XHJcblx0XHRcdFx0XHRcdCRwYXJlbnRTY2FsZUNhcmQgPSAkKHRoaXMpLmNsb3Nlc3QoJy5TY2FsZUxpc3QuQ2FyZFNjYWxlJyk7XHJcblx0XHRcdFx0XHRcdCRwYXJlbnRTY2FsZUNhcmQuZmluZCgnLlNjYWxlQ2FyZCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0XHRcdFx0JCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdFx0XHRcdFRvdGFsQ2FsYygpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFRvdGFsQ2FsYygpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoUnVsZXJTY2FsZSA9PT0gdHJ1ZSkge1xyXG5cdFx0XHRcdCQoJy5SdWxlclNjYWxlJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRpZiAoJCh0aGlzKS5maW5kKCcudmlld21vZGUnKS5sZW5ndGggPT09IDApIHtcclxuXHRcdFx0XHRcdFx0dmFyICRydWxlclNjYWxlTGlzdCA9ICQodGhpcykuY2xvc2VzdCgnLlNjYWxlTGlzdC5SdWxlcicpO1xyXG5cdFx0XHRcdFx0XHQkcnVsZXJTY2FsZUxpc3QuZmluZCgnLlJ1bGVyU2NhbGVfbnVtYmVyJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdFx0XHQkKHRoaXMpXHJcblx0XHRcdFx0XHRcdFx0LmZpbmQoJy5SdWxlclNjYWxlX251bWJlcicpXHJcblx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0XHRcdFx0VG90YWxDYWxjKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0VG90YWxDYWxjKCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChNdWx0aXBsZVNjYWxlID09PSB0cnVlKSB7XHJcblx0XHRcdFx0dmFyIGNvdW50ZXI7XHJcblx0XHRcdFx0dmFyIFNjYWxlTGlzdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLlNjYWxlTGlzdC5NdWx0aXBsZVNjYWxlLmlzVGl0bGUnKTtcclxuXHRcdFx0XHR2YXIgU2NhbGVMaXN0U3ViVG90YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuU2NhbGVMaXN0Lk11bHRpcGxlU2NhbGUuaXNTdWJ0b3RhbCcpO1xyXG5cdFx0XHRcdHZhciBTY2FsZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuU2NhbGVMaXN0Lk11bHRpcGxlU2NhbGU6bm90KC5pc1RpdGxlKTpub3QoLmlzU3VidG90YWwpJyk7XHJcblxyXG5cdFx0XHRcdCQoJy5CdXR0b25Hcm91cFNjYWxlJylcclxuXHRcdFx0XHRcdC5jbG9zZXN0KCcuU2NhbGVMaXN0Lk11bHRpcGxlU2NhbGU6bnRoLWNoaWxkKDJuKScpXHJcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ0V2ZW5MaW5lJyk7XHJcblx0XHRcdFx0dmFyIG51bWJlck9mR3JvdXBTY2FsZSA9IFNjYWxlTGlzdC5xdWVyeVNlbGVjdG9yQWxsKCcuQnV0dG9uR3JvdXBTY2FsZScpLmxlbmd0aDtcclxuXHJcblx0XHRcdFx0JCgnLlNjYWxlTGlzdC5NdWx0aXBsZVNjYWxlLmlzU3VidG90YWwgLkJ1dHRvbkdyb3VwU2NhbGUnKS50ZXh0KDApO1xyXG5cdFx0XHRcdC8vIENoZWNrIGlmIE11bHRpcGxlIFNjYWxlIFRpdGxlIGV4aXN0cyB0aGVuIGFkanVzdCB0aXRsZSB3aWR0aFxyXG5cdFx0XHRcdGlmICgkKCcuU2NhbGVMaXN0Lk11bHRpcGxlU2NhbGUuaXNUaXRsZScpLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRcdGZvciAoY291bnRlciA9IDA7IGNvdW50ZXIgPCBudW1iZXJPZkdyb3VwU2NhbGU7IGNvdW50ZXIrKykge1xyXG5cdFx0XHRcdFx0XHR2YXIgU2NhbGVMaXN0V2lkdGggPSBTY2FsZUxpc3QucXVlcnlTZWxlY3RvckFsbCgnLkJ1dHRvbkdyb3VwU2NhbGUnKVtjb3VudGVyXS5vZmZzZXRXaWR0aDtcclxuXHRcdFx0XHRcdFx0U2NhbGVMaXN0VGl0bGUucXVlcnlTZWxlY3RvckFsbCgnLkJ1dHRvbkdyb3VwU2NhbGUnKVtjb3VudGVyXS5zdHlsZS53aWR0aCA9IFNjYWxlTGlzdFdpZHRoICsgJ3B4JztcclxuXHRcdFx0XHRcdFx0U2NhbGVMaXN0U3ViVG90YWwucXVlcnlTZWxlY3RvckFsbCgnLkJ1dHRvbkdyb3VwU2NhbGUnKVtjb3VudGVyXS5zdHlsZS53aWR0aCA9IFNjYWxlTGlzdFdpZHRoICsgJ3B4JztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdCQoJy5CdXR0b25Hcm91cF9idXR0b24nKS5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFRvdGFsQ2FsYygpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFRvdGFsQ2FsYygpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRzZXR1cFNjYWxlID0gKCkgPT4ge1xyXG5cdFx0dmFyIElzQ2FyZFNjYWxlO1xyXG5cdFx0dmFyIElzUnVsZXJTY2FsZTtcclxuXHRcdHZhciBJc011bHRpcGxlU2NhbGU7XHJcblxyXG5cdFx0JCgnLlNjYWxlQ2FyZCcpLmxlbmd0aCA+IDAgPyAoSXNDYXJkU2NhbGUgPSB0cnVlKSA6IChJc0NhcmRTY2FsZSA9IGZhbHNlKTtcclxuXHRcdCQoJy5CdXR0b25Hcm91cFNjYWxlJykubGVuZ3RoID4gMCA/IChJc011bHRpcGxlU2NhbGUgPSB0cnVlKSA6IChJc011bHRpcGxlU2NhbGUgPSBmYWxzZSk7XHJcblx0XHQkKCcuUnVsZXJTY2FsZScpLmxlbmd0aCA+IDAgPyAoSXNSdWxlclNjYWxlID0gdHJ1ZSkgOiAoSXNSdWxlclNjYWxlID0gZmFsc2UpO1xyXG5cclxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFNjYWxlQ291bnQoe1xyXG5cdFx0XHRcdElzQ2FyZFNjYWxlOiBJc0NhcmRTY2FsZSxcclxuXHRcdFx0XHRJc1J1bGVyU2NhbGU6IElzUnVsZXJTY2FsZSxcclxuXHRcdFx0XHRJc011bHRpcGxlU2NhbGU6IElzTXVsdGlwbGVTY2FsZSxcclxuXHRcdFx0fSk7XHJcblx0XHR9LCA1MDApO1xyXG5cclxuXHRcdGlmICgkKCcuU2NhbGVNYWluU3RydWN0dXJlX29wdGlvbnMgLlRvZ2dsZUl0ZW1Db250cm9sJykubGVuZ3RoID4gMCkge1xyXG5cdFx0XHQkKCcuU2NhbGVNYWluU3RydWN0dXJlX29wdGlvbnMgLlRvZ2dsZUl0ZW1Db250cm9sJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0JCgnLlNjYWxlTWFpblN0cnVjdHVyZV90b3RhbFNjb3JlJykudGV4dCgnLS0tJyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHJlc2V0U2NhbGVzID0gKCkgPT4ge1xyXG5cdFx0JCgnLlNjYWxlTWFpblN0cnVjdHVyZV9jb250ZW50JykuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xyXG5cdFx0JCgnLlNjYWxlTWFpblN0cnVjdHVyZV9vcHRpb25zIC5Ub2dnbGVJdGVtQ29udHJvbCcpLmFkZENsYXNzKCdkaXNhYmxlZCcpO1xyXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0JCgnLlNjYWxlTWFpblN0cnVjdHVyZV90b3RhbFNjb3JlJykudGV4dCgnLS0tJyk7XHJcblx0XHRcdHNldHVwU2NhbGUoKTtcclxuXHRcdH0sIDYwMCk7XHJcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKCcuU2NhbGVNYWluU3RydWN0dXJlX2NvbnRlbnQnKS5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xyXG5cdFx0XHQkKCcuU2NhbGVNYWluU3RydWN0dXJlX29wdGlvbnMgLlRvZ2dsZUl0ZW1Db250cm9sJykucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XHJcblx0XHR9LCAxMDAwKTtcclxuXHR9O1xyXG5cclxuXHRiaW5kQ2xpY2tzID0gKCkgPT4ge1xyXG5cdFx0aWYgKCQoJy5TY2FsZU1haW5TdHJ1Y3R1cmVfb3B0aW9ucyAuVG9nZ2xlSXRlbUNvbnRyb2wgJykubGVuZ3RoID4gMCkge1xyXG5cdFx0XHQkKCcuU2NhbGVNYWluU3RydWN0dXJlJylcclxuXHRcdFx0XHQub2ZmKCdjbGljaycpXHJcblx0XHRcdFx0Lm9uKCdjbGljaycsICcuVG9nZ2xlSXRlbUNvbnRyb2wnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdHJlc2V0U2NhbGVzKCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCQoJy5OYXZpZ2F0aW9uX2NvbnRyb2wnKS5sZW5ndGggPiAwKSB7XHJcblx0XHRcdCQoJy5OYXZpZ2F0aW9uX3JpZ2h0JykuY2xpY2soZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0aWYgKFxyXG5cdFx0XHRcdFx0ISQodGhpcylcclxuXHRcdFx0XHRcdFx0LmZpbmQoJ2EnKVswXVxyXG5cdFx0XHRcdFx0XHQuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpXHJcblx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHRyZXNldFNjYWxlcygpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHQkKCcuTmF2aWdhdGlvbl9sZWZ0JykuY2xpY2soZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0aWYgKFxyXG5cdFx0XHRcdFx0ISQodGhpcylcclxuXHRcdFx0XHRcdFx0LmZpbmQoJ2EnKVswXVxyXG5cdFx0XHRcdFx0XHQuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpXHJcblx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHRyZXNldFNjYWxlcygpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0U2FwcGhpcmVXaWRnZXRzLlNjYWxlTWFpblN0cnVjdHVyZSA9IHsgY3JlYXRlIH07XHJcbn0pKGpRdWVyeSwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpO1xyXG4iLCIvKiBDb21wb25lbnQgVG9nZ2xlSXRlbUNvbnRyb2wgKi9cclxuU2FwcGhpcmVXaWRnZXRzLlRvZ2dsZUl0ZW1Db250cm9sID0gKCkgPT4ge1xyXG5cdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cdFx0JCgnLlRvZ2dsZUl0ZW1Db250cm9sIGlucHV0W3R5cGU9XCJyYWRpb1wiXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XHJcblx0XHRcdFx0JCh0aGlzKVxyXG5cdFx0XHRcdFx0LnBhcmVudCgpXHJcblx0XHRcdFx0XHQucGFyZW50KClcclxuXHRcdFx0XHRcdC5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdCQoJy5Ub2dnbGVJdGVtQ29udHJvbCcpXHJcblx0XHRcdC5vZmYoJ2NsaWNrJylcclxuXHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdCQoJy5Ub2dnbGVJdGVtQ29udHJvbCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0XHQkKHRoaXMpXHJcblx0XHRcdFx0XHQuZmluZCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdJylcclxuXHRcdFx0XHRcdC5ub3QoJzpjaGVja2VkJylcclxuXHRcdFx0XHRcdC5wcm9wKCdjaGVja2VkJywgdHJ1ZSlcclxuXHRcdFx0XHRcdC5jbGljaygpO1xyXG5cdFx0XHRcdGlmIChcclxuXHRcdFx0XHRcdCQodGhpcylcclxuXHRcdFx0XHRcdFx0LmZpbmQoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpXHJcblx0XHRcdFx0XHRcdC5pcygnOmNoZWNrZWQnKVxyXG5cdFx0XHRcdCkge1xyXG5cdFx0XHRcdFx0JCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdCQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0b3NBamF4QmFja2VuZCAmJlxyXG5cdFx0XHRvc0FqYXhCYWNrZW5kLkJpbmRBZnRlckFqYXhSZXF1ZXN0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdCQoJy5Ub2dnbGVJdGVtQ29udHJvbCBpbnB1dFt0eXBlPVwicmFkaW9cIl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0aWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcclxuXHRcdFx0XHRcdFx0JCh0aGlzKVxyXG5cdFx0XHRcdFx0XHRcdC5wYXJlbnQoKVxyXG5cdFx0XHRcdFx0XHRcdC5wYXJlbnQoKVxyXG5cdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdCQoJy5Ub2dnbGVJdGVtQ29udHJvbCcpXHJcblx0XHRcdFx0XHQub2ZmKCdjbGljaycpXHJcblx0XHRcdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdCQoJy5Ub2dnbGVJdGVtQ29udHJvbCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHJcblx0XHRcdFx0XHRcdGlmIChcclxuXHRcdFx0XHRcdFx0XHQkKHRoaXMpXHJcblx0XHRcdFx0XHRcdFx0XHQuZmluZCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdJylcclxuXHRcdFx0XHRcdFx0XHRcdC5pcygnOmNoZWNrZWQnKVxyXG5cdFx0XHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdFx0XHQkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHQkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cdH0pO1xyXG59O1xyXG4iLCJ2YXIgU2VhcmNoU2VsZWN0RGVmaW5lID0gKHdpbmRvdy5TZWFyY2hTZWxlY3REZWZpbmUgPSB3aW5kb3cuU2VhcmNoU2VsZWN0RGVmaW5lIHx8IHt9KTtcclxuXHJcblNhcHBoaXJlV2lkZ2V0cy5TZWxlY3RTU0QgPSBmdW5jdGlvbiBTU0RTZWxlY3RTZXR1cChjb25maWcpIHtcclxuXHQkKGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyICRTU0RzZWxlY3RJZCA9ICQoJyMnICsgY29uZmlnLlNTRFNlbGVjdElkKTtcclxuXHRcdHZhciBpc011bHRpcGxlID0gY29uZmlnLmlzTXVsdGlwbGU7XHJcblxyXG5cdFx0dmFyICRDb21wb25lbnRTU0QgPSAkU1NEc2VsZWN0SWQuY2xvc2VzdCgnLlNlYXJjaFNEJyk7XHJcblx0XHR2YXIgJENvbXBvbmVudFNTRGlucHV0ID0gJENvbXBvbmVudFNTRC5maW5kKCcuU2VhcmNoU0RfX19pbnB1dCBpbnB1dCcpO1xyXG5cdFx0dmFyIENvbXBvbmVudGlucHV0bGVuZ3RoID0gJENvbXBvbmVudFNTRGlucHV0LnZhbCgpLmxlbmd0aDtcclxuXHJcblx0XHRpZiAoQ29tcG9uZW50aW5wdXRsZW5ndGggPiAwKSB7XHJcblx0XHRcdCRTU0RzZWxlY3RJZC5maW5kKCcuU2VsZWN0U0RfX2NvbnRlbnRUaXRsZScpLmhpZ2hsaWdodCgkQ29tcG9uZW50U1NEaW5wdXQudmFsKCksIHtcclxuXHRcdFx0XHRjbGFzc05hbWU6ICdTZWxlY3RTRC1zZWFyY2hlZC10ZXJtJyxcclxuXHRcdFx0XHRjYXNlU2Vuc2l0aXZlOiBmYWxzZSxcclxuXHRcdFx0XHR3b3Jkc09ubHk6IGZhbHNlLFxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgJGZhdm9yaXRlc1NlYXJjaElucHV0ID0gJENvbXBvbmVudFNTRC5maW5kKCcuU2VhcmNoU0RfZmlsdGVyZmF2b3JpdGVzIGlucHV0Jyk7XHJcblxyXG5cdFx0aWYgKCRmYXZvcml0ZXNTZWFyY2hJbnB1dC5sZW5ndGgpIHtcclxuXHRcdFx0dmFyIGZhdm9yaXRlc1NlYXJjaExlbmd0aCA9ICRmYXZvcml0ZXNTZWFyY2hJbnB1dC52YWwoKS5sZW5ndGg7XHJcblxyXG5cdFx0XHRpZiAoY29uZmlnLkhhc0Zhdm9yaXRlID09PSAnVHJ1ZScgJiYgZmF2b3JpdGVzU2VhcmNoTGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdCRTU0RzZWxlY3RJZC5maW5kKCcuU2VsZWN0U0RfX2NvbnRlbnRUaXRsZScpLmhpZ2hsaWdodCgkZmF2b3JpdGVzU2VhcmNoSW5wdXQudmFsKCksIHtcclxuXHRcdFx0XHRcdGNsYXNzTmFtZTogJ1NlbGVjdFNELXNlYXJjaGVkLXRlcm0nLFxyXG5cdFx0XHRcdFx0Y2FzZVNlbnNpdGl2ZTogZmFsc2UsXHJcblx0XHRcdFx0XHR3b3Jkc09ubHk6IGZhbHNlLFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIE9wZW5Db25maXJtUG9wdXAgPSBmdW5jdGlvbigkU1NEc2VsZWN0SWQpIHtcclxuXHRcdFx0JENvbXBvbmVudFNTRCA9ICRTU0RzZWxlY3RJZC5jbG9zZXN0KCcuU2VhcmNoU0QnKTtcclxuXHRcdFx0JFBvcHVwSUQgPSAkQ29tcG9uZW50U1NELnNpYmxpbmdzKCcuU1NEUG9wdXBXcmFwcGVyJyk7XHJcblxyXG5cdFx0XHQkUG9wdXBJRC5mYWRlSW4oJ2Zhc3QnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHQkQ29tcG9uZW50U1NELmFkZENsYXNzKCdEb250X0Nsb3NlJyk7XHJcblx0XHRcdFx0JFBvcHVwSURcclxuXHRcdFx0XHRcdC5maW5kKCcuU1NEcG9wdXBPaycpXHJcblx0XHRcdFx0XHQub2ZmKCdjbGljaycpXHJcblx0XHRcdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdCRQb3B1cElELmZhZGVPdXQoJ2Zhc3QnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHQkU1NEc2VsZWN0SWQuZmluZCgnLlNlbGVjdFNEX19zdGFyVHJpZ2dlciA+IGEnKS5jbGljaygpO1xyXG5cdFx0XHRcdFx0XHRcdHNldFRpbWVvdXQoJENvbXBvbmVudFNTRC5yZW1vdmVDbGFzcygnRG9udF9DbG9zZScpLCA1MDApO1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHQkUG9wdXBJRFxyXG5cdFx0XHRcdFx0LmZpbmQoJy5TU0Rwb3B1cENhbmNlbCcpXHJcblx0XHRcdFx0XHQub2ZmKCdjbGljaycpXHJcblx0XHRcdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdCRQb3B1cElELmZhZGVPdXQoJ2Zhc3QnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCRDb21wb25lbnRTU0QucmVtb3ZlQ2xhc3MoJ0RvbnRfQ2xvc2UnKSwgNTAwKTtcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblx0XHR9O1xyXG5cclxuXHRcdHZhciBTU0RDaGVja0JveFNlbGVjdCA9IGZ1bmN0aW9uKCR3aWRnZXRJZCkge1xyXG5cdFx0XHR2YXIgY2hlY2tCb3hDb3VudCA9IDA7XHJcblx0XHRcdGlmIChpc011bHRpcGxlID09PSAnVHJ1ZScpIHtcclxuXHRcdFx0XHRjaGVja0JveENvdW50ID0gJHdpZGdldElkXHJcblx0XHRcdFx0XHQuY2xvc2VzdCgnLlNlYXJjaFNELnNob3dGYXZvcml0ZScpXHJcblx0XHRcdFx0XHQuZmluZCgnLlNlbGVjdFNEX19tdWx0aXBsZSA+IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkJykubGVuZ3RoO1xyXG5cclxuXHRcdFx0XHQkYWxsTGlzdGNhcmQgPSAkd2lkZ2V0SWQuY2xvc2VzdCgnLlNlYXJjaFNEX2NvbnRlbnQnKTtcclxuXHJcblx0XHRcdFx0aWYgKGNoZWNrQm94Q291bnQgPiAwKSB7XHJcblx0XHRcdFx0XHQkd2lkZ2V0SWQuY2xvc2VzdCgnLlNlYXJjaFNELnNob3dGYXZvcml0ZScpLmFkZENsYXNzKCdNdWx0aVNlbGVjdEFjdGl2ZScpO1xyXG5cdFx0XHRcdFx0JHdpZGdldElkLmNsb3Nlc3QoJy5TZWFyY2hTRF9jb250ZW50IC5TZWxlY3RTRCcpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdCQodGhpcylcclxuXHRcdFx0XHRcdFx0XHQuZmluZCgnLlNlbGVjdFNEX2NvbnRlbnRXcmFwcGVyJylcclxuXHRcdFx0XHRcdFx0XHQub2ZmKCdjbGljaycpO1xyXG5cdFx0XHRcdFx0XHQkKHRoaXMpXHJcblx0XHRcdFx0XHRcdFx0LmZpbmQoJy5TZWxlY3RTRF9hY3Rpb25MaW5rJylcclxuXHRcdFx0XHRcdFx0XHQub2ZmKCdjbGljaycpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdCR3aWRnZXRJZC5jbG9zZXN0KCcuU2VhcmNoU0Quc2hvd0Zhdm9yaXRlJykucmVtb3ZlQ2xhc3MoJ011bHRpU2VsZWN0QWN0aXZlJyk7XHJcblx0XHRcdFx0XHQkd2lkZ2V0SWQuY2xvc2VzdCgnLlNlYXJjaFNEX2NvbnRlbnQgLlNlbGVjdFNEICcpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdCQodGhpcylcclxuXHRcdFx0XHRcdFx0XHQuZmluZCgnLlNlbGVjdFNEX2NvbnRlbnRXcmFwcGVyJylcclxuXHRcdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0JCh0aGlzKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQuZmluZCgnLkxpbmVBY3Rpb25MSU5LID4gYScpXHJcblx0XHRcdFx0XHRcdFx0XHRcdC5jbGljaygpO1xyXG5cdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHQkKHRoaXMpXHJcblx0XHRcdFx0XHRcdFx0LmZpbmQoJy5TZWxlY3RTRF9hY3Rpb25MaW5rJylcclxuXHRcdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0JCh0aGlzKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQuZmluZCgnLkxpbmVBY3Rpb25MSU5LID4gYScpXHJcblx0XHRcdFx0XHRcdFx0XHRcdC5jbGljaygpO1xyXG5cdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGlmIChpc011bHRpcGxlID09PSAnVHJ1ZScpIHtcclxuXHRcdFx0JFNTRHNlbGVjdElkLmZpbmQoJy5TZWxlY3RTRF9fbXVsdGlwbGUgPiBpbnB1dCcpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFNTRENoZWNrQm94U2VsZWN0KCRTU0RzZWxlY3RJZCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdCRTU0RzZWxlY3RJZC5maW5kKCcuU2VsZWN0U0RfX3N0YXJMaW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRpZiAoISRTU0RzZWxlY3RJZC5maW5kKCcuU2VsZWN0U0QgLlNlbGVjdFNEX19zdGFyV3JhcHBlcicpLmhhc0NsYXNzKCdzdGFyRGlzYWJsZWQnKSkge1xyXG5cdFx0XHRcdGlmICgkU1NEc2VsZWN0SWQuZmluZCgnLlNlbGVjdFNEIC5TZWxlY3RTRF9fc3RhcldyYXBwZXInKS5oYXNDbGFzcygnc3RhclNlbGVjdGVkJykpIHtcclxuXHRcdFx0XHRcdE9wZW5Db25maXJtUG9wdXAoJFNTRHNlbGVjdElkKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0JFNTRHNlbGVjdElkLmZpbmQoJy5TZWxlY3RTRF9fc3RhclRyaWdnZXIgPiBhJykuY2xpY2soKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdCRTU0RzZWxlY3RJZC5maW5kKCcuU2VsZWN0U0RfY29udGVudFdyYXBwZXInKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdCRDb21wb25lbnRTU0QgPSAkU1NEc2VsZWN0SWQuY2xvc2VzdCgnLlNlYXJjaFNEJyk7XHJcblx0XHRcdCRTU0RzZWxlY3RJZC5maW5kKCcuTGluZUFjdGlvbkxJTksgPiBhJykuY2xpY2soKTtcclxuXHRcdFx0aWYgKCEkQ29tcG9uZW50U1NELmhhc0NsYXNzKCdNdWx0aVNlbGVjdEFjdGl2ZScpKSB7XHJcblx0XHRcdFx0U2VhcmNoU2VsZWN0RGVmaW5lLlNTRFNlYXJjaC5yZXR1cm5Ub1NlYXJjaCgkU1NEc2VsZWN0SWQuY2xvc2VzdCgnLlNlYXJjaFNEJykpO1xyXG5cdFx0XHRcdFNlYXJjaFNlbGVjdERlZmluZS5TU0RTZWFyY2guY2xvc2VTU0QoJFNTRHNlbGVjdElkLmNsb3Nlc3QoJy5TZWFyY2hTRCcpKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0JENvbXBvbmVudFNTRGlucHV0LnZhbCgnJyk7XHJcblx0XHR9KTtcclxuXHJcblx0XHQkU1NEc2VsZWN0SWQuZmluZCgnLlNlbGVjdFNEX2FjdGlvbkxpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdCRDb21wb25lbnRTU0QgPSAkU1NEc2VsZWN0SWQuY2xvc2VzdCgnLlNlYXJjaFNEJyk7XHJcblx0XHRcdCRTU0RzZWxlY3RJZC5maW5kKCcuTGluZUFjdGlvbkxJTksgPiBhJykuY2xpY2soKTtcclxuXHRcdFx0aWYgKCEkQ29tcG9uZW50U1NELmhhc0NsYXNzKCdNdWx0aVNlbGVjdEFjdGl2ZScpKSB7XHJcblx0XHRcdFx0U2VhcmNoU2VsZWN0RGVmaW5lLlNTRFNlYXJjaC5yZXR1cm5Ub1NlYXJjaCgkU1NEc2VsZWN0SWQuY2xvc2VzdCgnLlNlYXJjaFNEJykpO1xyXG5cdFx0XHRcdFNlYXJjaFNlbGVjdERlZmluZS5TU0RTZWFyY2guY2xvc2VTU0QoJFNTRHNlbGVjdElkLmNsb3Nlc3QoJy5TZWFyY2hTRCcpKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fSk7XHJcbn07XHJcbiIsInZhciBTZWFyY2hTZWxlY3REZWZpbmUgPSAod2luZG93LlNlYXJjaFNlbGVjdERlZmluZSA9IHdpbmRvdy5TZWFyY2hTZWxlY3REZWZpbmUgfHwge30pO1xyXG5cclxuU2FwcGhpcmVXaWRnZXRzLlNTRFNlYXJjaCA9IGZ1bmN0aW9uIFNTRHNlYXJjaFNldHVwKGNvbmZpZykge1xyXG5cdCQoZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgJFNTRHdpZGdldCA9ICQoJyMnICsgY29uZmlnLlNTRFdpZGdldElkKTsgLy8gU1NEQ29tcG9uZW50IG1hcCBub3QgdXNlZCBhZ2FpblxyXG5cdFx0dmFyICRTU0RDb21wb25lbnQgPSAkU1NEd2lkZ2V0LmZpbmQoJy5TZWFyY2hTRCcpOyAvLyBTU0RTZWFyY2ggQ29tcG9uZW50IGlkIGZvciB1c2UgaW4gdGhlIGZ1bmN0aW9uIGFuZCBtYW5pcHVsYXRlIGNsYXNzZXNcclxuXHRcdHZhciAkU1NEQ29tcG9uZW50Q29udGVudCA9ICRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX2NvbnRlbnQnKTsgLy8gU1NEY29tcG9uZW50IGNvbnRlbnRcclxuXHRcdHZhciBoYXNDbG9uZSA9IGNvbmZpZy5IYXNDbG9uZTsgLy8gSGFzQ2xvbmUgdmFyaWFibGUgaW5wdXQgcGFyYW1ldGVyIHZhbHVlXHJcblx0XHR2YXIgaGFzRmF2b3JpdGUgPSBjb25maWcuSGFzRmF2b3JpdGU7IC8vIEhhc0Zhdm9yaXRlIHZhcmlhYmxlIGlucHV0IHBhcmFtZXRlciB2YWx1ZVxyXG5cdFx0dmFyIHNob3dDbG9uZXMgPSBjb25maWcuU2hvd0Nsb25lczsgLy8gU2hvd0Nsb25lcyB2YXJpYWJsZSBpbnB1dCBwYXJhbWV0ZXIgdmFsdWVcclxuXHRcdHZhciBsZXR0ZXJMaW1pdCA9IGNvbmZpZy5MaW1pdExldHRlcjsgLy8gTnVtYmVyIG9mIGxldHRlciB0byBlbnRlciBiZWZvcmUgdHJpZ2dlciB0aGUgc2VhcmNoIGFjdGlvblxyXG5cdFx0dmFyIGhhc1NoaWVsZCA9IGNvbmZpZy5IYXNTaGllbGQ7XHJcblx0XHR2YXIgc2hpZWxkVGltZW91dCA9IGNvbmZpZy5TaGllbGRUaW1lb3V0O1xyXG5cdFx0dmFyIGlucHV0TGVuZ3RoID0gY29uZmlnLlNlYXJjaElucHV0TGVuZ3RoO1xyXG5cdFx0dmFyICR3aWRnZXRTaGllbGQgPSAkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRC0tc2hpZWxkJyk7XHJcblx0XHR2YXIgc2VhcmNoVHJpZ2dlclRpbWVyO1xyXG5cdFx0Y29uc3QgJFNTRENsZWFyQnV0dG9uID0gJFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfX19yZW1vdmUnKTtcclxuXHRcdGNvbnN0ICRTU0RJbnB1dEVsZW1lbnQgPSAkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9fX2lucHV0IGlucHV0Jyk7XHJcblxyXG5cdFx0JFNTRElucHV0RWxlbWVudC5hdHRyKCdtYXhMZW5ndGgnLCBpbnB1dExlbmd0aCk7XHJcblxyXG5cdFx0dmFyIGV4ZWN1dGVTZWFyY2ggPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0Y2xlYXJUaW1lb3V0KHNlYXJjaFRyaWdnZXJUaW1lcik7XHJcblx0XHRcdHNlYXJjaFRyaWdnZXJUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0VHJpZ2dlclNlYXJjaCgkU1NEQ29tcG9uZW50KTtcclxuXHRcdFx0fSwgNzAwKTtcclxuXHRcdH07XHJcblxyXG5cdFx0aWYgKGhhc1NoaWVsZCkge1xyXG5cdFx0XHR3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHQkd2lkZ2V0U2hpZWxkLmhpZGUoKTtcclxuXHRcdFx0fSwgc2hpZWxkVGltZW91dCk7XHJcblx0XHR9XHJcblxyXG5cdFx0LyogIFJldHVybnMgYSBmdW5jdGlvbiwgdGhhdCwgYXMgbG9uZyBhcyBpdCBjb250aW51ZXMgdG8gYmUgaW52b2tlZCwgd2lsbCBub3RcclxuXHRcdCAqICAgYmUgdHJpZ2dlcmVkLiBUaGUgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgYWZ0ZXIgaXQgc3RvcHMgYmVpbmcgY2FsbGVkIGZvclxyXG5cdFx0ICogICBOIG1pbGxpc2Vjb25kcy4gSWYgYGltbWVkaWF0ZWAgaXMgcGFzc2VkLCB0cmlnZ2VyIHRoZSBmdW5jdGlvbiBvbiB0aGVcclxuXHRcdCAqICAgbGVhZGluZyBlZGdlLCBpbnN0ZWFkIG9mIHRoZSB0cmFpbGluZy5cclxuXHRcdCAqL1xyXG5cdFx0dmFyIGRlYm91bmNlID0gZnVuY3Rpb24oZnVuYywgd2FpdCwgaW1tZWRpYXRlKSB7XHJcblx0XHRcdHZhciB0aW1lb3V0O1xyXG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24gZXhlY3V0ZWRGdW5jdGlvbigpIHtcclxuXHRcdFx0XHR2YXIgY29udGV4dCA9IHRoaXM7XHJcblx0XHRcdFx0dmFyIGFyZ3MgPSBhcmd1bWVudHM7XHJcblxyXG5cdFx0XHRcdHZhciBsYXRlciA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0dGltZW91dCA9IG51bGw7XHJcblx0XHRcdFx0XHRpZiAoIWltbWVkaWF0ZSkgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcclxuXHRcdFx0XHR9O1xyXG5cclxuXHRcdFx0XHR2YXIgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcclxuXHRcdFx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XHJcblx0XHRcdFx0dGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xyXG5cdFx0XHRcdGlmIChjYWxsTm93KSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xyXG5cdFx0XHR9O1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKioqKlxyXG5cdFx0ICogICBSZXNldCBTZWFyY2ggVUkgdG8gdGhlIGluaXRpYWwgc3RhdGVcclxuXHRcdCAqL1xyXG5cdFx0dmFyIHJlc2V0VUkgPSBmdW5jdGlvbigkU1NEQ29tcG9uZW50KSB7XHJcblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19pbnB1dFdyYXBwZXInKS5zaG93KCk7XHJcblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX3NlYXJjaF9mYXZvcml0ZUxpbmsnKS5oaWRlKCk7XHJcblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19fZ29Ub0Zhdm9yaXRlJykuaGlkZSgpO1xyXG5cdFx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9fRmF2b3JpdGVBY3Rpb25zJykuaGlkZSgpO1xyXG5cdFx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9fRmF2b3JpdGVSZW1vdmUnKS5oaWRlKCk7XHJcblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19jbG9uZVdyYXBwZXInKS5oaWRlKCk7XHJcblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19pbnB1dFdyYXBwZXIgLlNlYXJjaFNEX19yZXR1cm4nKS5oaWRlKCk7XHJcblxyXG5cdFx0XHRpZiAoJFNTRElucHV0RWxlbWVudC52YWwoKS50cmltKCkgPT09ICcnKSB7XHJcblx0XHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfX19yZW1vdmUnKS5oaWRlKCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdCRTU0RDb21wb25lbnQucmVtb3ZlQ2xhc3MoJ3Nob3dGYXZvcml0ZScpO1xyXG5cdFx0XHQkU1NEQ29tcG9uZW50LnJlbW92ZUNsYXNzKCdzaG93Q2xvbmUnKTtcclxuXHRcdH07XHJcblxyXG5cdFx0LypcclxuXHRcdCAqXHJcblx0XHQgKiAgR28gdG8gRmF2b3JpdGVzIFVJXHJcblx0XHQgKiAgLS0gIHJlc3QgU1NEY29tcG9uZW50XHJcblx0XHQgKiAgLS0gIHNob3cgRmF2b3JpdGUgZmVhdHVyZXNcclxuXHRcdCAqICAtLSAgcmVtb3ZlIGNsYXNzIHNob3dDbG9uZSBpZiBjb21wb25lbnQgaGF2ZSB0aGF0IGNsYXNzXHJcblx0XHQgKiAgLS0gIGFkZCBjbGFzcyBzaG93RmF2b3JpdGUgdG8gaGF2ZSBjb21wb25lbnQgY29udHJvbFxyXG5cdFx0ICogIC0tICBhZGRDbGFzcyBPcGVuIHdpdGggc2xpZGVcclxuXHRcdCAqL1xyXG5cdFx0dmFyIGdvVG9GYXZvcml0ZXMgPSBmdW5jdGlvbigkU1NEQ29tcG9uZW50KSB7XHJcblx0XHRcdHJlc2V0VUkoJFNTRENvbXBvbmVudCk7XHJcblxyXG5cdFx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9fX2lucHV0IGlucHV0JykudmFsKCcnKTtcclxuXHRcdFx0JFNTRENvbXBvbmVudC5yZW1vdmVDbGFzcygnT3BlbicpO1xyXG5cdFx0XHQkU1NEQ29tcG9uZW50LnJlbW92ZUNsYXNzKCdNdWx0aVNlbGVjdEFjdGl2ZScpO1xyXG5cdFx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9fcmV0dXJuJykuaGlkZSgpO1xyXG5cdFx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9faW5wdXRXcmFwcGVyJykuaGlkZSgpO1xyXG5cclxuXHRcdFx0aWYgKCRTU0RDb21wb25lbnQuaGFzQ2xhc3MoJ3Nob3dDbG9uZScpKSB7XHJcblx0XHRcdFx0JFNTRENvbXBvbmVudC5yZW1vdmVDbGFzcygnc2hvd0Nsb25lJyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX3NlYXJjaF9mYXZvcml0ZUxpbmsgJykuc2hvdygpO1xyXG5cdFx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9fRmF2b3JpdGVSZW1vdmUgJykuc2hvdygpO1xyXG5cdFx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9fRmF2b3JpdGVBY3Rpb25zJykuc2hvdygpO1xyXG5cdFx0XHQkU1NEQ29tcG9uZW50LmFkZENsYXNzKCdzaG93RmF2b3JpdGUnKTtcclxuXHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VsZWN0U0QuaGFzRmF2b3JpdGUgPiBhJykuZm9jdXMoKTtcclxuXHRcdFx0JFNTRENvbXBvbmVudC5hZGRDbGFzcygnT3BlbicpO1xyXG5cclxuXHRcdFx0Ly8gbG9hZGluZyBzaG93IGhpZGUgbGlzdFxyXG5cdFx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9jb250ZW50TGlzdCcpLmhpZGUoKTtcclxuXHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfX2xvYWRpbmcnKS5zaG93KCk7XHJcblx0XHRcdGlmICgkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9zaG93TW9yZSBhJykubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX3Nob3dNb3JlJykuaGlkZSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKioqKioqKioqKioqKlxyXG5cdFx0ICpcclxuXHRcdCAqICBHbyB0byBDbG9uZSBVSVxyXG5cdFx0ICogIC0tICByZW1vdmUgY2xhc3MgT3BlblxyXG5cdFx0ICogIC0tIEFkZCBTaG93Q2xvbmUgY2xhc3NcclxuXHRcdCAqICAtLSBTbGlkZURvd24gZWZmZWN0IGFuZCBhZGQgT3BlbiBDbGFzc1xyXG5cdFx0ICovXHJcblx0XHR2YXIgZ29Ub0Nsb25lID0gZnVuY3Rpb24oJFNTRENvbXBvbmVudCkge1xyXG5cdFx0XHQvLyBsb2FkaW5nIHNob3cgaGlkZSBsaXN0XHJcblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX2NvbnRlbnRMaXN0JykuaGlkZSgpO1xyXG5cdFx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9fbG9hZGluZycpLnNob3coKTtcclxuXHRcdFx0aWYgKCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX3Nob3dNb3JlIGEnKS5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0Rfc2hvd01vcmUnKS5oaWRlKCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19faW5wdXQgaW5wdXQnKS52YWwoJycpO1xyXG5cdFx0XHQkU1NEQ29tcG9uZW50LnJlbW92ZUNsYXNzKCdPcGVuJyk7XHJcblxyXG5cdFx0XHRpZiAoISRTU0RDb21wb25lbnQuaGFzQ2xhc3MoJ3Nob3dDbG9uZScpKSB7XHJcblx0XHRcdFx0JFNTRENvbXBvbmVudC5hZGRDbGFzcygnc2hvd0Nsb25lJyk7XHJcblx0XHRcdH1cclxuXHRcdFx0JFNTRENvbXBvbmVudC5hZGRDbGFzcygnT3BlbicpO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKlxyXG5cdFx0ICogUmV0dXJuIHRvIHNlYXJjaCBmcm9tIGZhdm9yaXRlIG9yIGNsb25lXHJcblx0XHQgKi9cclxuXHRcdHZhciByZXR1cm5Ub1NlYXJjaCA9IGZ1bmN0aW9uKCRTU0RDb21wb25lbnQpIHtcclxuXHRcdFx0Ly8gbG9hZGluZyBzaG93IGhpZGUgbGlzdFxyXG5cdFx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9jb250ZW50TGlzdCcpLmhpZGUoKTtcclxuXHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfX2xvYWRpbmcnKS5zaG93KCk7XHJcblx0XHRcdGlmICgkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9zaG93TW9yZSBhJykubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX3Nob3dNb3JlJykuaGlkZSgpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXNldFVJKCRTU0RDb21wb25lbnQpO1xyXG5cdFx0XHQkU1NEQ29tcG9uZW50LnJlbW92ZUNsYXNzKCdzaG93Q2xvbmUnKTtcclxuXHRcdFx0JFNTRENvbXBvbmVudC5yZW1vdmVDbGFzcygnc2hvd0Zhdm9yaXRlJyk7XHJcblx0XHRcdCRTU0RDb21wb25lbnQucmVtb3ZlQ2xhc3MoJ09wZW4nKTtcclxuXHRcdFx0JFNTRENvbXBvbmVudC5yZW1vdmVDbGFzcygnTXVsdGlTZWxlY3RBY3RpdmUnKTtcclxuXHJcblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19pbnB1dFdyYXBwZXIgLlNlYXJjaFNEX19yZXR1cm4nKS5oaWRlKCk7XHJcblxyXG5cdFx0XHRpZiAoJFNTRENvbXBvbmVudC5oYXNDbGFzcygnaGFzQ2xvbmUnKSkge1xyXG5cdFx0XHRcdCRTU0RDb21wb25lbnQuYWRkQ2xhc3MoJ2hhc0Nsb25lJyk7XHJcblx0XHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfX2Nsb25lV3JhcHBlcicpLmNzcygnZGlzcGxheScsICdmbGV4Jyk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKCRTU0RDb21wb25lbnQuaGFzQ2xhc3MoJ2hhc0Zhdm9yaXRlJykpIHtcclxuXHRcdFx0XHQkU1NEQ29tcG9uZW50LmFkZENsYXNzKCdoYXNGYXZvcml0ZScpO1xyXG5cdFx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX3NlYXJjaF9mYXZvcml0ZUxpbmsnKS5zaG93KCk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0LypcclxuXHRcdCAqICAgU1NEQ2xlYXIgY2xvc2VzIFNTRFNlYXJjaCBjb250YWluZXJcclxuXHRcdCAqICAgYW5kIGNsZWFyIHNzZCBmaWx0ZXIgaW5wdXRcclxuXHRcdCAqL1xyXG5cdFx0dmFyIHNzZENsZWFyID0gZnVuY3Rpb24oJFNTRENvbXBvbmVudCkge1xyXG5cdFx0XHQkU1NEQ29tcG9uZW50LnJlbW92ZUNsYXNzKCdPcGVuJyk7XHJcblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19faW5wdXQgaW5wdXQnKS52YWwoJycpO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKlxyXG5cdFx0ICogICBDbG9zZVNTRCBjbG9zZXMgU1NEU2VhcmNoIGNvbnRhaW5lclxyXG5cdFx0ICogICBtdXN0IHJlbW92ZSBoaWdodGxpZ2h0U2VsZWN0aW9uIGRvbmUgYnkga2V5Ym9hcmQgbmF2aWdhdGlvblxyXG5cdFx0ICovXHJcblx0XHR2YXIgY2xvc2VTU0QgPSBmdW5jdGlvbigkU1NEQ29tcG9uZW50KSB7XHJcblx0XHRcdCRTU0RDb21wb25lbnQucmVtb3ZlQ2xhc3MoJ09wZW4nKTtcclxuXHRcdFx0JFNTRENvbXBvbmVudENvbnRlbnQuc2xpZGVVcCgnMjUwJyk7XHJcblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLnNlbGVjdGVkJykucmVtb3ZlQ2xhc3MoJy5zZWxlY3RlZCcpO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKlxyXG5cdFx0ICogICBBZGQgT3BlbiBjbGFzcyB0byBTU0RDb21wb25lbnRcclxuXHRcdCAqICAgaWYgU1NEQ29tcG9uZW50IGhhcyBjbGFzcyBPcGVuIHRoZW4gZm9jdXNcclxuXHRcdCAqICAgbWFrZXMgb3BlbiBlZmZlY3QsIGNoZWNrIHRoZSBjaGFyYWN0ZXJzIGluc2lkZSB0aGUgaW5wdXQgdG8gZmlsdGVyXHJcblx0XHQgKi9cclxuXHRcdHZhciBzc2RGb2N1cyA9IGZ1bmN0aW9uKCRTU0RDb21wb25lbnQpIHtcclxuXHRcdFx0aWYgKCEkU1NEQ29tcG9uZW50Lmhhc0NsYXNzKCdPcGVuJykpIHtcclxuXHRcdFx0XHQvLyBsb2FkaW5nIHNob3cgaGlkZSBsaXN0XHJcblx0XHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfY29udGVudExpc3QnKS5oaWRlKCk7XHJcblx0XHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfX2xvYWRpbmcnKS5zaG93KCk7XHJcblx0XHRcdFx0aWYgKCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX3Nob3dNb3JlIGEnKS5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9zaG93TW9yZScpLmhpZGUoKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdCRTU0RDb21wb25lbnQucmVtb3ZlQ2xhc3MoJ09wZW4nKTtcclxuXHRcdFx0XHQkU1NEQ29tcG9uZW50LnJlbW92ZUNsYXNzKCcuc2hvd0Nsb25lJyk7XHJcblx0XHRcdFx0JFNTRENvbXBvbmVudC5yZW1vdmVDbGFzcygnLnNob3dGYXZvcml0ZScpO1xyXG5cclxuXHRcdFx0XHRpZiAoISRTU0RDb21wb25lbnQuaGFzQ2xhc3MoJ09wZW4nKSkge1xyXG5cdFx0XHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoTGlua0lucHV0IGEnKS5jbGljaygpO1xyXG5cdFx0XHRcdFx0JFNTRENvbXBvbmVudC5hZGRDbGFzcygnT3BlbicpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHQvKlxyXG5cdFx0ICogICBXaGVuIGNsaWNraW5nIGNsaWNraW5nIG91dHNpZGUgdGhlIGNvbXBvbmVudFxyXG5cdFx0ICogICB0aGUgU1NEIG11c3QgY2xvc2UgYW5kIHJldHVybiB0byBpbml0aWFsIHN0YXRlXHJcblx0XHQgKi9cclxuXHRcdHZhciBDbGlja091dCA9IGZ1bmN0aW9uKGUsICRTU0RDb21wb25lbnQpIHtcclxuXHRcdFx0aWYgKCEkU1NEQ29tcG9uZW50LmlzKGUudGFyZ2V0KSAmJiAkU1NEQ29tcG9uZW50LmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwKSB7XHJcblx0XHRcdFx0cmV0dXJuVG9TZWFyY2goJFNTRENvbXBvbmVudCk7XHJcblx0XHRcdFx0JFNTRENvbXBvbmVudC5yZW1vdmVDbGFzcygnTXVsdGlTZWxlY3RBY3RpdmUnKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHQvKlxyXG5cdFx0ICogICBUcmlnZ2VycyB0aGUgbGluayB0byBpbml0aWFsaXplXHJcblx0XHQgKiAgIHRoZSBkYXRhYmFzZSBzZWFyY2ggYmFzZWQgb24gY3VycmVudCBsZW5ndGggb2YgdGhlIHN0cmluZyBpbnNlcnRlZCBvbiB0aGUgaW5wdXRcclxuXHRcdCAqL1xyXG5cdFx0dmFyIFRyaWdnZXJTZWFyY2ggPSBmdW5jdGlvbigkU1NEQ29tcG9uZW50KSB7XHJcblx0XHRcdHZhciBjdXJyZW50V29yZCA9ICRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19faW5wdXQgaW5wdXQnKS52YWwoKTtcclxuXHRcdFx0dmFyIGN1cnJlbnRDb3VudCA9IGN1cnJlbnRXb3JkLmxlbmd0aDtcclxuXHRcdFx0aWYgKGN1cnJlbnRDb3VudCA+PSBsZXR0ZXJMaW1pdCB8fCBjdXJyZW50Q291bnQgPT09IDApIHtcclxuXHRcdFx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hMaW5rSW5wdXQgPiBhJykuY2xpY2soKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHQvKlxyXG5cdFx0ICogICBSZW1vdmVzIGFsbCBmYXZvcml0ZSBjaGVja2VkIGJveGVzXHJcblx0XHQgKiAgIGFuZCBlbmRzIE11bHRpcGxlU2VsZWN0XHJcblx0XHQgKi9cclxuXHRcdHZhciBNdWx0aVVuY2hlY2sgPSBmdW5jdGlvbigkU1NEQ29tcG9uZW50KSB7XHJcblx0XHRcdCRjaGVja0JveGVzID0gJFNTRENvbXBvbmVudC5wYXJlbnQoKS5maW5kKCcuU2VsZWN0U0RfX211bHRpcGxlID4gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJyk7XHJcblx0XHRcdCRTU0RDb21wb25lbnQucmVtb3ZlQ2xhc3MoJ011bHRpU2VsZWN0QWN0aXZlJyk7XHJcblxyXG5cdFx0XHQkU1NEQ29tcG9uZW50XHJcblx0XHRcdFx0LnBhcmVudCgpXHJcblx0XHRcdFx0LmZpbmQoJy5TZWxlY3RTRF9fbXVsdGlwbGUgPiBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKVxyXG5cdFx0XHRcdC5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0JCh0aGlzKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKlxyXG5cdFx0ICogICBLZXlCb2FyZCBldmVudHMgdXAgZG93biBhbmQgZW50ZXIgaWYgbm90IGZpbHRlclxyXG5cdFx0ICovXHJcblx0XHR2YXIga2V5Ym9hcmRFdmVudHMgPSBmdW5jdGlvbihlLCAkU1NEQ29tcG9uZW50KSB7XHJcblx0XHRcdGlmICgkU1NEQ29tcG9uZW50Lmhhc0NsYXNzKCdPcGVuJykpIHtcclxuXHRcdFx0XHR2YXIgY3VycmVudFNlbGVjdGVkID0gJFNTRENvbXBvbmVudENvbnRlbnQuZmluZCgnLkxpc3RSZWNvcmRzID4gc3Bhbi5zZWxlY3RlZCcpOyAvLyBDdXJyZW50IHNlbGVjdGFibGUgaXRlbVxyXG5cdFx0XHRcdHZhciAkZmlyc3RTZWxlY3QgPSAkU1NEQ29tcG9uZW50Q29udGVudC5maW5kKCcuTGlzdFJlY29yZHMgPiBzcGFuOmZpcnN0LWNoaWxkJyk7IC8vIEZpcnN0IHNlbGVjdGFibGUgaXRlbVxyXG5cdFx0XHRcdHZhciAkbGFzdFNlbGVjdCA9ICRTU0RDb21wb25lbnRDb250ZW50LmZpbmQoJy5MaXN0UmVjb3JkcyA+IHNwYW46bGFzdC1jaGlsZCcpOyAvLyBMYXN0IHNlbGVjdGFibGUgaXRlbVxyXG5cdFx0XHRcdHZhciBjb3VudFNlbGVjdGVkID0gY3VycmVudFNlbGVjdGVkLmxlbmd0aDsgLy8gTnVtYmVyIG9mIHNlbGVjdGVkIGl0ZW1cclxuXHJcblx0XHRcdFx0aWYgKGUud2hpY2ggPT0gMzgpIHtcclxuXHRcdFx0XHRcdC8vIGlmIGtleSBwcmVzc2VkIGlzIHVwIGFycm93XHJcblx0XHRcdFx0XHRpZiAoY291bnRTZWxlY3RlZCA9PT0gMCkge1xyXG5cdFx0XHRcdFx0XHRjdXJyZW50U2VsZWN0ZWQgPSAkbGFzdFNlbGVjdDtcclxuXHRcdFx0XHRcdFx0JGxhc3RTZWxlY3QuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRjdXJyZW50U2VsZWN0ZWQucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XHJcblx0XHRcdFx0XHRcdG5leHQgPSBjdXJyZW50U2VsZWN0ZWQucHJldigpO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKG5leHQubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRTZWxlY3RlZCA9IG5leHQuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0Y3VycmVudFNlbGVjdGVkID0gY3VycmVudFNlbGVjdGVkLmxhc3QoKS5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSBpZiAoZS53aGljaCA9PSA0MCkge1xyXG5cdFx0XHRcdFx0Ly8gaWYga2V5IHByZXNzZWQgaXMgZG93biBhcnJvd1xyXG5cdFx0XHRcdFx0aWYgKGNvdW50U2VsZWN0ZWQgPT09IDApIHtcclxuXHRcdFx0XHRcdFx0JGZpcnN0U2VsZWN0LmFkZENsYXNzKCdzZWxlY3RlZCcpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0bmV4dCA9IGN1cnJlbnRTZWxlY3RlZC5uZXh0KCk7XHJcblx0XHRcdFx0XHRcdGN1cnJlbnRTZWxlY3RlZC5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcclxuXHJcblx0XHRcdFx0XHRcdGlmIChuZXh0Lmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRcdFx0XHRjdXJyZW50U2VsZWN0ZWQgPSBuZXh0LmFkZENsYXNzKCdzZWxlY3RlZCcpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRTZWxlY3RlZCA9IGN1cnJlbnRTZWxlY3RlZC5lcSgwKS5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSBpZiAoZS53aGljaCA9PSAxMykge1xyXG5cdFx0XHRcdFx0Ly8gaWYga2V5IHByZXNzZWQgaXMgZW50ZXJcclxuXHRcdFx0XHRcdGlmIChjb3VudFNlbGVjdGVkID4gMCkge1xyXG5cdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0XHRcdGN1cnJlbnRTZWxlY3RlZC5maW5kKCcuU2VsZWN0U0QgLlNlbGVjdFNEX2FjdGlvbkxpbmsnKS5jbGljaygpO1xyXG5cdFx0XHRcdFx0XHRzc2RDbGVhcigkU1NEQ29tcG9uZW50KTtcclxuXHJcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHRcdFx0fSBlbHNlIGlmICgkU1NEQ29tcG9uZW50LmZpbmQoJ1NlYXJjaFNEX19faW5wdXQgaW5wdXQnKS5pcygnOmFjdGl2ZScpICYmIGNvdW50U2VsZWN0ZWQgPT09IDApIHtcclxuXHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0ZXhlY3V0ZVNlYXJjaCgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHQvKlxyXG5cdFx0ICogICBUaGUgZmlyc3Qgc3RlcCBpcyB0byByZXNldCB0aGUgc2VldGluZ3MgdG8gZGVmYXVsdFxyXG5cdFx0ICovXHJcblx0XHRyZXNldFVJKCRTU0RDb21wb25lbnQpO1xyXG5cclxuXHRcdC8qXHJcblx0XHQgKiAgUmVtb3ZlIGF1dG9Db21wbGV0ZSBmcm9tIHNlYXJjaCBpbnB1dFxyXG5cdFx0ICovXHJcblx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9fX2lucHV0IGlucHV0JykuYXR0cignYXV0b2NvbXBsZXRlJywgJ29mZicpO1xyXG5cclxuXHRcdC8qXHJcblx0XHQgKiAgIElmIFNTRCBoYXMgQ2xvbmUgYW5kIHRoZSBjbG9uZSBsaXN0IGlzIHZpc2libGVcclxuXHRcdCAqICAgb25jbGljayBcIkNsb25lIHByZXZpb3VzIG1lZGljYXRpb25cIiB0aGVuXHJcblx0XHQgKiAgIHJlbW92ZSBPcGVuIGFuZCBzaG93IGl0ZW1zIHRvIGNsb25lIGxpc3RcclxuXHRcdCAqL1xyXG5cdFx0aWYgKGhhc0Nsb25lID09PSAnVHJ1ZScpIHtcclxuXHRcdFx0JFNTRENvbXBvbmVudC5hZGRDbGFzcygnaGFzQ2xvbmUnKTtcclxuXHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfX2Nsb25lV3JhcHBlcicpLmNzcygnZGlzcGxheScsICdmbGV4Jyk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGhhc0Zhdm9yaXRlID09PSAnVHJ1ZScpIHtcclxuXHRcdFx0JFNTRENvbXBvbmVudC5hZGRDbGFzcygnaGFzRmF2b3JpdGUnKTtcclxuXHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0Rfc2VhcmNoX2Zhdm9yaXRlTGluaycpLnNob3coKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoKGhhc0Nsb25lID09PSAnVHJ1ZScpICYgKHNob3dDbG9uZXMgPT09ICdUcnVlJykpIHtcclxuXHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfY2xvbmVXcmFwcGVyJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0JFNTRENvbXBvbmVudC5hZGRDbGFzcygnT3BlbicpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9fRmF2b3JpdGVSZW1vdmUnKS5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdFx0c3NkQ2xlYXIoJFNTRENvbXBvbmVudCk7XHJcblx0XHRcdHJldHVyblRvU2VhcmNoKCRTU0RDb21wb25lbnQpO1xyXG5cdFx0XHRkZWJvdW5jZShUcmlnZ2VyU2VhcmNoKCRTU0RDb21wb25lbnQpLCA1NTApO1xyXG5cdFx0XHRkZWJvdW5jZSgkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9fX2lucHV0IGlucHV0JykuZm9jdXMoKSwgNTYwKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19jbG9uZVdyYXBwZXInKS5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdFx0Z29Ub0Nsb25lKCRTU0RDb21wb25lbnQpO1xyXG5cdFx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9fX2dvVG9DbG9uZSA+IGEnKS5jbGljaygpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfX2lucHV0V3JhcHBlcicpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpZiAoJFNTRENvbXBvbmVudC5oYXNDbGFzcygnc2hvd0Nsb25lJykpIHtcclxuXHRcdFx0XHRyZXR1cm5Ub1NlYXJjaCgkU1NEQ29tcG9uZW50KTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfX0Zhdm9yaXRlQWN0aW9uc0NhbmNlbCcpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRNdWx0aVVuY2hlY2soJFNTRENvbXBvbmVudCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9fX2lucHV0IGlucHV0JykuZm9jdXMoZnVuY3Rpb24oKSB7XHJcblx0XHRcdGRlYm91bmNlKHNzZEZvY3VzKCRTU0RDb21wb25lbnQpLCA2MDApO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0JCgnYm9keScpLm1vdXNldXAoZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRDbGlja091dChlLCAkU1NEQ29tcG9uZW50KTtcclxuXHRcdH0pO1xyXG5cdFx0LypcclxuXHRcdCAqICAgS2V5Qm9hcmQgZXZlbnRzIG9uIGtleSBwcmVzc1xyXG5cdFx0ICovXHJcblx0XHQkU1NEQ29tcG9uZW50XHJcblx0XHRcdC5maW5kKCcuU2VhcmNoU0RfX19pbnB1dCBpbnB1dCcpXHJcblx0XHRcdC5hZGQoJFNTRENvbXBvbmVudC5maW5kKCcuU2VsZWN0U0RfYWN0aW9uTGluaycpKVxyXG5cdFx0XHQub24oJ2tleXVwJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdGlmICghZS53aGljaCAhPSAxMykge1xyXG5cdFx0XHRcdFx0a2V5Ym9hcmRFdmVudHMoZSwgJFNTRENvbXBvbmVudCk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoJFNTRElucHV0RWxlbWVudC52YWwoKS50cmltKCkgPT09ICcnKSB7XHJcblx0XHRcdFx0XHQkU1NEQ2xlYXJCdXR0b24uYW5pbWF0ZSh7IG9wYWNpdHk6ICdoaWRlJyB9LCAzMDApO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQkU1NEQ2xlYXJCdXR0b24uYW5pbWF0ZSh7IG9wYWNpdHk6ICdzaG93JyB9LCAzMDApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0LypcclxuXHRcdCAqICAgUHJldmVudCBmb3JtIHN1Ym1pc3Npb24gb24gZW50ZXIsXHJcblx0XHQgKiAgIGluc3RlYWQgZ28gdG8ga2V5Ym9hcmQgZXZlbnRzIHRvIHRyaWdnZXJcclxuXHRcdCAqICAgdGhlIHNlbGVjdGlvblxyXG5cdFx0ICovXHJcblx0XHQkKCRTU0RDb21wb25lbnQpLm9uKCdrZXlkb3duJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRpZiAoZS53aGljaCA9PSAxMykge1xyXG5cdFx0XHRcdGtleWJvYXJkRXZlbnRzKGUsICRTU0RDb21wb25lbnQpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9fX3JlbW92ZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRzc2RDbGVhcigkU1NEQ29tcG9uZW50KTtcclxuXHRcdFx0ZGVib3VuY2UocmV0dXJuVG9TZWFyY2goJFNTRENvbXBvbmVudCksIDYwMCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9zZWFyY2hfZmF2b3JpdGVMaW5rJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcblx0XHRcdHNzZENsZWFyKCRTU0RDb21wb25lbnQpO1xyXG5cdFx0XHRnb1RvRmF2b3JpdGVzKCRTU0RDb21wb25lbnQpO1xyXG5cdFx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9fX2dvVG9GYXZvcml0ZSA+IGEnKS5jbGljaygpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfX0Zhdm9yaXRlQWN0aW9uc0FkZCA+IGEnKS5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdFx0ZGVib3VuY2UoVHJpZ2dlclNlYXJjaCgkU1NEQ29tcG9uZW50KSwgMjAwKTtcclxuXHRcdFx0ZGVib3VuY2UocmV0dXJuVG9TZWFyY2goJFNTRENvbXBvbmVudCksIDM1MCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHQvKlxyXG5cdFx0ICogICBPbiBBamF4IFJlcXVlc3QgaGlkZSBsb2FkaW5nIGRpdiBpZiB0aGUgU1NEIGlzIG9wZW4gdGhlbiBzaG93IHRoZVxyXG5cdFx0ICogICBMaXN0UmVjb3Jkc1xyXG5cdFx0ICovXHJcblx0XHRvc0FqYXhCYWNrZW5kICYmXHJcblx0XHRcdG9zQWpheEJhY2tlbmQuQmluZEFmdGVyQWpheFJlcXVlc3QoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0aWYgKCRTU0RDb21wb25lbnQuaGFzQ2xhc3MoJ09wZW4nKSkge1xyXG5cdFx0XHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfX2xvYWRpbmcnKS5oaWRlKCk7XHJcblx0XHRcdFx0XHQkU1NEQ29tcG9uZW50Q29udGVudC5zbGlkZURvd24oJzEwMDAnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfY29udGVudExpc3QnKS5zaG93KCk7XHJcblx0XHRcdFx0XHRcdGlmICgkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9zaG93TW9yZSBhJykubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdFx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX3Nob3dNb3JlJykuc2hvdygpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdCQoJ2Zvcm0nKS5hcHBlbmQoJzxpbnB1dCB0eXBlPVwic3VibWl0XCIgbmFtZT1cInNzZElucHV0XCIgb25jbGljaz1cInJldHVybiBmYWxzZTtcIiAgc3R5bGU9XCJkaXNwbGF5Om5vbmU7XCIgLz4nKTtcclxuXHJcblx0XHR3aW5kb3cuU2VhcmNoU2VsZWN0RGVmaW5lLlNTRFNlYXJjaCA9IHtcclxuXHRcdFx0cmV0dXJuVG9TZWFyY2g6IHJldHVyblRvU2VhcmNoLFxyXG5cdFx0XHRyZXNldFVJOiByZXNldFVJLFxyXG5cdFx0XHRjbG9zZVNTRDogY2xvc2VTU0QsXHJcblx0XHRcdHNzZEZvY3VzOiBzc2RGb2N1cyxcclxuXHRcdFx0VHJpZ2dlclNlYXJjaDogVHJpZ2dlclNlYXJjaCxcclxuXHRcdFx0c3NkQ2xlYXI6IHNzZENsZWFyLFxyXG5cdFx0fTtcclxuXHR9KTtcclxufTtcclxuLy8gQWRkZWQgdG8gY2xvc2UgdGhlIHNlbGVjdCBsaXN0IGlmIHdlIGNsaWNrIHRoZSBwcmVzY3JpcHRpb24gSWZyYW1lO1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGV2ZW50ID0+IHtcclxuXHR2YXIgcm9vdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcblx0cm9vdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuXHRcdCdjbGljaycsXHJcblx0XHRmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaWZyYW1lW3NyYyo9J1ByZXNjcmlwdGlvbnNfQ1cnXVwiKSAmJlxyXG5cdFx0XHRcdGRvY3VtZW50XHJcblx0XHRcdFx0XHQucXVlcnlTZWxlY3RvcihcImlmcmFtZVtzcmMqPSdQcmVzY3JpcHRpb25zX0NXJ11cIilcclxuXHRcdFx0XHRcdC5jb250ZW50V2luZG93LmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcblx0XHRcdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRcdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5TZWFyY2hTRCcpLmNsYXNzTGlzdC5yZW1vdmUoJ09wZW4nKTtcclxuXHRcdFx0XHRcdFx0dmFyIGFsbElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLlNlYXJjaFNEX19faW5wdXQnKS5jaGlsZHJlbjtcclxuXHRcdFx0XHRcdFx0Zm9yIChjb25zdCBlbGVtZW50IGluIGFsbElucHV0KSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGFsbElucHV0W2VsZW1lbnRdLnZhbHVlICE9IHVuZGVmaW5lZCA/IChhbGxJbnB1dFtlbGVtZW50XS52YWx1ZSA9ICcnKSA6IG51bGw7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHRcdHRydWVcclxuXHQpO1xyXG59KTtcclxuIiwiLyogQ29tcG9uZW50IFNlYXJjaENsaWVudFNpZGUgKi9cclxuKGZ1bmN0aW9uKCQsIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKSB7XHJcblx0Y2xhc3MgU2VhcmNoQ2xpZW50U2lkZSB7XHJcblx0XHRjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuXHRcdFx0dGhpcy5vcHRpb25zID0ge1xyXG5cdFx0XHRcdC4uLmNvbmZpZyxcclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHRoaXMub25Db21wb25lbnRJbml0KCk7XHJcblxyXG5cdFx0XHQkKHdpbmRvdykubG9hZCgoKSA9PiB7XHJcblx0XHRcdFx0b3NBamF4QmFja2VuZCAmJlxyXG5cdFx0XHRcdFx0b3NBamF4QmFja2VuZC5CaW5kQWZ0ZXJBamF4UmVxdWVzdCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdCQoJyMnICsgdGhpcy5vcHRpb25zLmlucHV0SWQpLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG5cdFx0XHRcdFx0XHR9LCAyMDApO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdG9uQ29tcG9uZW50SW5pdCgpIHtcclxuXHRcdFx0JCgnIycgKyB0aGlzLm9wdGlvbnMuaW5wdXRJZCkub24oJ2NoYW5nZSBrZXlkb3duIHBhc3RlIGlucHV0JywgZSA9PiB7XHJcblx0XHRcdFx0aWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcclxuXHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5zZWFyY2hDbGllbnRTaWRlKFxyXG5cdFx0XHRcdFx0XHR0aGlzLm9wdGlvbnMuaW5wdXRJZCxcclxuXHRcdFx0XHRcdFx0dGhpcy5vcHRpb25zLnNlYXJjaGFibGVFbGVtZW50U2VsZWN0b3IsXHJcblx0XHRcdFx0XHRcdHRoaXMub3B0aW9ucy5zZWFyY2hhYmxlQ2hpbGRTZWxlY3RvclxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdHNlYXJjaENsaWVudFNpZGUoaW5wdXRJZCwgc2VsZWN0b3IsIGNoaWxkU2VsZWN0b3IpIHtcclxuXHRcdFx0aWYgKCQoJyMnICsgaW5wdXRJZCkuaXMoJzp2aXNpYmxlJykpIHtcclxuXHRcdFx0XHR2YXIgc2VhcmNoVGV4dCA9IG9zanMoJyMnICsgaW5wdXRJZClcclxuXHRcdFx0XHRcdC52YWwoKVxyXG5cdFx0XHRcdFx0LnRvTG93ZXJDYXNlKCk7XHJcblx0XHRcdFx0dmFyIHNlYXJjaENvdW50ZXIgPSAwO1xyXG5cdFx0XHRcdHZhciBzZWxlY2lvbiA9IG9zanMoc2VsZWN0b3IpO1xyXG5cclxuXHRcdFx0XHRzZWxlY2lvbi5yZW1vdmVDbGFzcygnc2VhcmNoTm90Rm91bmQnKTtcclxuXHRcdFx0XHRzZWxlY2lvbi5yZW1vdmVDbGFzcygnc2VhcmNoRm91bmQnKTtcclxuXHRcdFx0XHRzZWxlY2lvbi51bmhpZ2hsaWdodCgpO1xyXG5cclxuXHRcdFx0XHRpZiAoY2hpbGRTZWxlY3Rvcikge1xyXG5cdFx0XHRcdFx0Y29uc3QgZWxlbWVudFRvU2VhcmNoID0gb3NqcyhjaGlsZFNlbGVjdG9yKTtcclxuXHRcdFx0XHRcdGVsZW1lbnRUb1NlYXJjaC51bmhpZ2hsaWdodCgpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKHNlYXJjaFRleHQubGVuZ3RoID4gMSkge1xyXG5cdFx0XHRcdFx0c2VsZWNpb24uZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0Y29uc3QgdGV4dFRvQ29tcGFyZSA9IGNoaWxkU2VsZWN0b3JcclxuXHRcdFx0XHRcdFx0XHQ/ICQodGhpcylcclxuXHRcdFx0XHRcdFx0XHRcdFx0LmZpbmQoY2hpbGRTZWxlY3RvcilcclxuXHRcdFx0XHRcdFx0XHRcdFx0LnRleHQoKVxyXG5cdFx0XHRcdFx0XHRcdDogdGhpcy5pbm5lclRleHQ7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoXHJcblx0XHRcdFx0XHRcdFx0dGV4dFRvQ29tcGFyZVxyXG5cdFx0XHRcdFx0XHRcdFx0LnRyaW0oKVxyXG5cdFx0XHRcdFx0XHRcdFx0LnRvTG93ZXJDYXNlKClcclxuXHRcdFx0XHRcdFx0XHRcdC5pbmRleE9mKHNlYXJjaFRleHQpID4gLTFcclxuXHRcdFx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHRcdFx0b3Nqcyh0aGlzKS5hZGRDbGFzcygnc2VhcmNoRm91bmQnKTtcclxuXHRcdFx0XHRcdFx0XHRzZWFyY2hDb3VudGVyKys7XHJcblx0XHRcdFx0XHRcdFx0b3Nqcyh0aGlzKS5oaWdobGlnaHQoc2VhcmNoVGV4dCk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0b3Nqcyh0aGlzKS5hZGRDbGFzcygnc2VhcmNoTm90Rm91bmQnKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb25zdCBjcmVhdGUgPSBjb25maWcgPT4gKHdpbmRvd1tjb25maWcud2lkZ2V0SWRdID0gbmV3IFNlYXJjaENsaWVudFNpZGUoY29uZmlnKSk7XHJcblxyXG5cdFNhcHBoaXJlV2lkZ2V0cy5TZWFyY2hDbGllbnRTaWRlID0ge1xyXG5cdFx0Y3JlYXRlLFxyXG5cdH07XHJcbn0pKGpRdWVyeSwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpO1xyXG4iLCIvKiBDb21wb25lbnQgU2VjdGlvbkV4cGFuZGFibGUgKi9cclxuKGZ1bmN0aW9uKCQsIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKSB7XHJcblx0ZnVuY3Rpb24gU2VjdGlvbkV4cGFuZGFibGVDdXN0b20oKSB7XHJcblx0XHR2YXIgdGhhdCA9IHRoaXM7XHJcblxyXG5cdFx0Ly8gT2JqZWN0IHRvIHNhdmUgc3RhdHNcclxuXHRcdHZhciBwcmV2aWV3c3RhdCA9IFtdO1xyXG5cclxuXHRcdC8vIHNldCBjbGljayBldmVudHNcclxuXHRcdGZ1bmN0aW9uIGNsaWNrRXZlbnRzKG9iKSB7XHJcblx0XHRcdC8vIHN0b3JlIHF1ZXJ5cyBpbiBhIHNpbmdsZSB2YXJcclxuXHRcdFx0dmFyIFNlY3Rpb24gPSAkKG9iKS5wYXJlbnQoKTtcclxuXHRcdFx0dmFyIFNlY3Rpb25Db250ZW50ID0gU2VjdGlvbi5jaGlsZHJlbignLlNlY3Rpb25FeHBhbmRhYmxlQ3VzdG9tX2NvbnRlbnQnKTtcclxuXHJcblx0XHRcdC8vIGdldCBpZFxyXG5cdFx0XHR2YXIgaWQgPSBTZWN0aW9uLmF0dHIoJ2lkJyk7XHJcblxyXG5cdFx0XHR2YXIgdGVtcEhlaWdodCA9IDA7XHJcblxyXG5cdFx0XHQvLyBoYXMgY2xhc3MgZXhwYW5kZWRcclxuXHRcdFx0aWYgKFNlY3Rpb24uaGFzQ2xhc3MoJ2V4cGFuZGVkJykpIHtcclxuXHRcdFx0XHQvLyBDYWxjIGFuZCBzZXQgYSBmaXhlZCBoZWlnaHQsIGR1cmluZyB0aGlzIHByb2Nlc3MsIHRyYW5zaXRpb25zIGFyZSBkaXNhYmxlZFxyXG5cdFx0XHRcdFNlY3Rpb25Db250ZW50LmFkZENsYXNzKCdub1RyYW5zaXRpb24nKTtcclxuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5oZWlnaHQoU2VjdGlvbkNvbnRlbnQuaGVpZ2h0KCkpO1xyXG5cdFx0XHRcdFNlY3Rpb25Db250ZW50WzBdLm9mZnNldEhlaWdodDsgLy8gaGFjayB0byBmb3JjZSBhIHJlcGFpbnRcclxuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5yZW1vdmVDbGFzcygnbm9UcmFuc2l0aW9uJyk7XHJcblxyXG5cdFx0XHRcdC8vIENvbGxhcHNlIGNvbnRlbnRcclxuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5oZWlnaHQoMCk7XHJcblx0XHRcdFx0U2VjdGlvbi5yZW1vdmVDbGFzcygnZXhwYW5kZWQnKTtcclxuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5jc3MoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xyXG5cclxuXHRcdFx0XHQvLyBSZW1vdmUgY2xhc3MsIHNldCBoZWlnaHQgYW5kIHNhdmUgc3RhdGVcclxuXHRcdFx0XHRwcmV2aWV3c3RhdFtpZF1bJ2NsaWVudCddID0gZmFsc2U7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Ly8gQ2FsYyBhbmQgc2V0IGEgZml4ZWQgaGVpZ2h0XHJcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnQuaGVpZ2h0KCdhdXRvJyk7XHJcblx0XHRcdFx0dGVtcEhlaWdodCA9IFNlY3Rpb25Db250ZW50LmhlaWdodCgpO1xyXG5cdFx0XHRcdFNlY3Rpb25Db250ZW50LmhlaWdodCgwKTtcclxuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5oZWlnaHQodGVtcEhlaWdodCk7XHJcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnQuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcclxuXHJcblx0XHRcdFx0Ly8gcmVtb3ZlIGNsYXNzLCBzZXQgaGVpZ2h0IGFuZCBzYXZlIHN0YXRlXHJcblx0XHRcdFx0U2VjdGlvbi5hZGRDbGFzcygnZXhwYW5kZWQnKTtcclxuXHRcdFx0XHRwcmV2aWV3c3RhdFtpZF1bJ2NsaWVudCddID0gdHJ1ZTtcclxuXHJcblx0XHRcdFx0aWYgKCQoJy5QYWdlJykuaGFzQ2xhc3MoJ2llOCcpIHx8ICQoJy5QYWdlJykuaGFzQ2xhc3MoJ2llOScpKSB7XHJcblx0XHRcdFx0XHRTZWN0aW9uQ29udGVudC5oZWlnaHQoJ2F1dG8nKTtcclxuXHRcdFx0XHRcdFNlY3Rpb25Db250ZW50LmNzcygnb3ZlcmZsb3cnLCAndmlzaWJsZScpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGFqYXggcmVmcmVzIGZ1bmN0aW9uXHJcblx0XHR0aGF0LmFqYXhSZWZyZXNoID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdC8vIHJlbW92ZSBjbGljayBldmVudHNcclxuXHRcdFx0JCgnLlNlY3Rpb25FeHBhbmRhYmxlX2hlYWRlckN1c3RvbScpLm9mZigpO1xyXG5cclxuXHRcdFx0Ly8gYWRkIHN0b3AgcHJlcGFnYXRpb25cclxuXHRcdFx0JChcclxuXHRcdFx0XHQnLlNlY3Rpb25FeHBhbmRhYmxlX2hlYWRlckN1c3RvbSBpbnB1dCwgLlNlY3Rpb25FeHBhbmRhYmxlX2hlYWRlckN1c3RvbSBzZWxlY3QsIC5TZWN0aW9uRXhwYW5kYWJsZV9oZWFkZXJDdXN0b20gYSdcclxuXHRcdFx0KS5jbGljayhmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdC8vIGFkZCBuZXcgY2xpY2sgZXZlbnRzXHJcblx0XHRcdCQoJy5TZWN0aW9uRXhwYW5kYWJsZV9oZWFkZXJDdXN0b20nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRjbGlja0V2ZW50cyh0aGlzKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHQvLyBlYWNoIGFsbCBzZWN0aW9uc1xyXG5cdFx0XHQkKCcuU2VjdGlvbkV4cGFuZGFibGVDdXN0b20nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdC8vIGlmIG5ldyBTZWN0aW9uRXhwYW5kYWJsZSB0aGVuIGFkZCB0byBwcmV2aWV3c3RhdCBhcnJheVxyXG5cdFx0XHRcdGlmIChwcmV2aWV3c3RhdFskKHRoaXMpLmF0dHIoJ2lkJyldID09IG51bGwpIHtcclxuXHRcdFx0XHRcdC8vIGFkZCBzdGF0IG9uIGFycmF5XHJcblx0XHRcdFx0XHR2YXIgc3RhdCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0Ly8gaWYgb3BlblxyXG5cdFx0XHRcdFx0aWYgKCQodGhpcykuaGFzQ2xhc3MoJ2V4cGFuZGVkJykpIHtcclxuXHRcdFx0XHRcdFx0c3RhdCA9IHRydWU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQvLyBhZGQgcm93XHJcblx0XHRcdFx0XHRwcmV2aWV3c3RhdFskKHRoaXMpLmF0dHIoJ2lkJyldID0ge1xyXG5cdFx0XHRcdFx0XHRjbGllbnQ6IHN0YXQsXHJcblx0XHRcdFx0XHRcdHNlcnZlcjogc3RhdCxcclxuXHRcdFx0XHRcdH07XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyBjdXJlbnQgc3RhdGUgKGFqYXggc3RhdGUgeCBpbml0aWFsIHN0YXRlKVxyXG5cdFx0XHRcdHZhciBjdXJTdGF0ZSA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHQvLyBjaGVjayBpZiBzdGFydCBleHBhbmRhYmxlXHJcblx0XHRcdFx0aWYgKCQodGhpcykuaGFzQ2xhc3MoJ2V4cGFuZGVkJykpIHtcclxuXHRcdFx0XHRcdGN1clN0YXRlID0gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIGNoZWNrIGlmIGFqYXggIT0gaW5pdGlhbCBzZXJ2ZXJcclxuXHRcdFx0XHRpZiAoY3VyU3RhdGUgIT0gcHJldmlld3N0YXRbJCh0aGlzKS5hdHRyKCdpZCcpXVsnc2VydmVyJ10pIHtcclxuXHRcdFx0XHRcdC8vIGN1cnN0YXRlXHJcblx0XHRcdFx0XHRwcmV2aWV3c3RhdFskKHRoaXMpLmF0dHIoJ2lkJyldWydjbGllbnQnXSA9IGN1clN0YXRlO1xyXG5cdFx0XHRcdFx0cHJldmlld3N0YXRbJCh0aGlzKS5hdHRyKCdpZCcpXVsnc2VydmVyJ10gPSBjdXJTdGF0ZTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Ly8gaGFzIGNsYXNzIGV4cGFuZGVkXHJcblx0XHRcdFx0XHRpZiAocHJldmlld3N0YXRbJCh0aGlzKS5hdHRyKCdpZCcpXVsnY2xpZW50J10gPT0gZmFsc2UgJiYgJCh0aGlzKS5oYXNDbGFzcygnZXhwYW5kZWQnKSkge1xyXG5cdFx0XHRcdFx0XHQkKHRoaXMpLnJlbW92ZUNsYXNzKCdleHBhbmRlZCcpO1xyXG5cdFx0XHRcdFx0XHQkKHRoaXMpXHJcblx0XHRcdFx0XHRcdFx0LmNoaWxkcmVuKCcuU2VjdGlvbkV4cGFuZGFibGVDdXN0b21fY29udGVudCcpXHJcblx0XHRcdFx0XHRcdFx0LmhlaWdodCgwKTtcclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAocHJldmlld3N0YXRbJCh0aGlzKS5hdHRyKCdpZCcpXVsnY2xpZW50J10gPT0gdHJ1ZSAmJiAhJCh0aGlzKS5oYXNDbGFzcygnZXhwYW5kZWQnKSkge1xyXG5cdFx0XHRcdFx0XHQkKHRoaXMpLmFkZENsYXNzKCdleHBhbmRlZCcpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8vIHNldCBldmVudHNcclxuXHRcdHRoYXQuaW5pdCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQvLyBlYWNoIGFsbCBzZWN0aW9ucyB0byBjcmVhdGUgYXJyYXkgc3RhdFxyXG5cdFx0XHQkKCcuU2VjdGlvbkV4cGFuZGFibGVDdXN0b20nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdC8vIGFkZCBzdGF0IG9uIGFycmF5XHJcblx0XHRcdFx0dmFyIHN0YXQgPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0Ly8gaWYgb3BlblxyXG5cdFx0XHRcdGlmICgkKHRoaXMpLmhhc0NsYXNzKCdleHBhbmRlZCcpKSB7XHJcblx0XHRcdFx0XHRzdGF0ID0gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIGFkZCByb3dcclxuXHRcdFx0XHRwcmV2aWV3c3RhdFskKHRoaXMpLmF0dHIoJ2lkJyldID0ge1xyXG5cdFx0XHRcdFx0Y2xpZW50OiBzdGF0LFxyXG5cdFx0XHRcdFx0c2VydmVyOiBzdGF0LFxyXG5cdFx0XHRcdH07XHJcblxyXG5cdFx0XHRcdGlmIChcclxuXHRcdFx0XHRcdCQodGhpcykuaGFzQ2xhc3MoJ0hpZGVXaGVuRW1wdHknKSAmJlxyXG5cdFx0XHRcdFx0JCh0aGlzKVxyXG5cdFx0XHRcdFx0XHQuZmluZCgnLlNlY3Rpb25FeHBhbmRhYmxlQ3VzdG9tX2NvbnRlbnQnKVxyXG5cdFx0XHRcdFx0XHQudGV4dCgpLmxlbmd0aCA9PT0gMFxyXG5cdFx0XHRcdCkge1xyXG5cdFx0XHRcdFx0JCh0aGlzKS5oaWRlKCk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyBoYWNrIHRvIGRpc3BsYXkgYSBtZXNzYWdlIHdoZW4gU2VjdGlvbkV4cGFuZGFibGVDdXN0b20gaGFzIG5vIGNoaWxkIGl0ZW1zXHJcblx0XHRcdFx0dmFyIGlzRW1wdHkgPSB0cnVlO1xyXG5cdFx0XHRcdCQodGhpcylcclxuXHRcdFx0XHRcdC5maW5kKCcuU2VjdGlvbkV4cGFuZGFibGVDdXN0b21fY29udGVudCBkaXYsIC5TZWN0aW9uRXhwYW5kYWJsZUN1c3RvbV9jb250ZW50IHNwYW4nKVxyXG5cdFx0XHRcdFx0Lm5vdCgnLlNlY3Rpb25FeHBhbmRhYmxlQ3VzdG9tX2NvbnRlbnQtLWVtcHR5JylcclxuXHRcdFx0XHRcdC5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRpZiAoJCh0aGlzKS50ZXh0KCkubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdFx0XHRcdGlzRW1wdHkgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdGlmICghaXNFbXB0eSkge1xyXG5cdFx0XHRcdFx0JCh0aGlzKVxyXG5cdFx0XHRcdFx0XHQuZmluZCgnLlNlY3Rpb25FeHBhbmRhYmxlQ3VzdG9tX2NvbnRlbnQtLWVtcHR5JylcclxuXHRcdFx0XHRcdFx0LmNzcyh7XHJcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogJ25vbmUnLFxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHZhciAkZXhwYW5kYWJsZUluc3RhbmNlID0gJCh0aGlzKTtcclxuXHRcdFx0XHR2YXIgJHRvZ2dsZXIgPSAkKHRoaXMpLmZpbmQoJz4gLlNlY3Rpb25FeHBhbmRhYmxlLXRvZ2dsZXInKTtcclxuXHRcdFx0XHRpZiAoJHRvZ2dsZXIubGVuZ3RoID09PSAxKSB7XHJcblx0XHRcdFx0XHR2YXIgJHRvZ2dsZXJTdGF0ZSA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0JHRvZ2dsZXIuZmluZCgnW2RhdGEtbGFiZWx2YWx1ZV0nKS50ZXh0KCR0b2dnbGVyLmZpbmQoJ1tkYXRhLWxhYmVsc2hvd10nKS5kYXRhKCdsYWJlbHNob3cnKSk7XHJcblx0XHRcdFx0XHQkdG9nZ2xlci5vZmYoJ2NsaWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZ0KSB7XHJcblx0XHRcdFx0XHRcdGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdFx0XHRcdFx0JHRvZ2dsZXJTdGF0ZSA9ICEkdG9nZ2xlclN0YXRlO1xyXG5cdFx0XHRcdFx0XHRpZiAoJHRvZ2dsZXJTdGF0ZSkge1xyXG5cdFx0XHRcdFx0XHRcdCRleHBhbmRhYmxlSW5zdGFuY2UuZmluZCgnLlNlY3Rpb25FeHBhbmRhYmxlLXRvZ2dsZWQnKS5zaG93KCk7XHJcblx0XHRcdFx0XHRcdFx0JHRvZ2dsZXIuZmluZCgnW2RhdGEtbGFiZWx2YWx1ZV0nKS50ZXh0KCR0b2dnbGVyLmZpbmQoJ1tkYXRhLWxhYmVsaGlkZV0nKS5kYXRhKCdsYWJlbGhpZGUnKSk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0JGV4cGFuZGFibGVJbnN0YW5jZS5maW5kKCcuU2VjdGlvbkV4cGFuZGFibGUtdG9nZ2xlZCcpLmhpZGUoKTtcclxuXHRcdFx0XHRcdFx0XHQkdG9nZ2xlci5maW5kKCdbZGF0YS1sYWJlbHZhbHVlXScpLnRleHQoJHRvZ2dsZXIuZmluZCgnW2RhdGEtbGFiZWxzaG93XScpLmRhdGEoJ2xhYmVsc2hvdycpKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdC8vIGFkZCBjbGljayBldmVudHNcclxuXHRcdFx0JCgnLlNlY3Rpb25FeHBhbmRhYmxlX2hlYWRlckN1c3RvbScpXHJcblx0XHRcdFx0Lm9mZignY2xpY2snKVxyXG5cdFx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGNsaWNrRXZlbnRzKHRoaXMpO1xyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Ly8gYWRkIHN0b3AgcHJlcGFnYXRpb25cclxuXHRcdFx0JChcclxuXHRcdFx0XHQnLlNlY3Rpb25FeHBhbmRhYmxlX2hlYWRlckN1c3RvbSBpbnB1dCwgLlNlY3Rpb25FeHBhbmRhYmxlX2hlYWRlckN1c3RvbSBzZWxlY3QsIC5TZWN0aW9uRXhwYW5kYWJsZV9oZWFkZXJDdXN0b20gYSdcclxuXHRcdFx0KS5jbGljayhmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdC8vIGV2ZW50IGFqYXhcclxuXHRcdFx0b3NBamF4QmFja2VuZCAmJiBvc0FqYXhCYWNrZW5kLkJpbmRBZnRlckFqYXhSZXF1ZXN0KHRoYXQuYWpheFJlZnJlc2gpO1xyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGNyZWF0ZSA9ICgpID0+IHtcclxuXHRcdGNvbnN0IGV4cGFuZGFibGUgPSBuZXcgU2VjdGlvbkV4cGFuZGFibGVDdXN0b20oKTtcclxuXHJcblx0XHRleHBhbmRhYmxlLmluaXQoKTtcclxuXHR9O1xyXG5cclxuXHRTYXBwaGlyZVdpZGdldHMuU2VjdGlvbkV4cGFuZGFibGUgPSB7XHJcblx0XHRjcmVhdGUsXHJcblx0fTtcclxufSkoalF1ZXJ5LCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cyk7XHJcbiIsIi8qIENvbXBvbmVudCBTZWN0aW9uRXhwYW5kYWJsZUluc2lkZSAqL1xyXG4oZnVuY3Rpb24oJCwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpIHtcclxuXHRmdW5jdGlvbiBTZWN0aW9uRXhwYW5kYWJsZUluc2lkZSgpIHtcclxuXHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHJcblx0XHQvLyBPYmplY3QgdG8gc2F2ZSBzdGF0c1xyXG5cdFx0dmFyIHByZXZpZXdzdGF0ID0gW107XHJcblxyXG5cdFx0Ly8gc2V0IGNsaWNrIGV2ZW50c1xyXG5cdFx0ZnVuY3Rpb24gY2xpY2tFdmVudHMob2IpIHtcclxuXHRcdFx0Ly8gc3RvcmUgcXVlcnlzIGluIGEgc2luZ2xlIHZhclxyXG5cdFx0XHR2YXIgU2VjdGlvbiA9ICQob2IpLnBhcmVudCgpO1xyXG5cdFx0XHR2YXIgU2VjdGlvbkNvbnRlbnQgPSBTZWN0aW9uLmNoaWxkcmVuKCcuU2VjdGlvbkV4cGFuZGFibGVJbnNpZGVfY29udGVudCcpO1xyXG5cclxuXHRcdFx0Ly8gZ2V0IGlkXHJcblx0XHRcdHZhciBpZCA9IFNlY3Rpb24uYXR0cignaWQnKTtcclxuXHJcblx0XHRcdHZhciB0ZW1wSGVpZ2h0ID0gMDtcclxuXHJcblx0XHRcdC8vIGhhcyBjbGFzcyBleHBhbmRlZFxyXG5cdFx0XHRpZiAoU2VjdGlvbi5oYXNDbGFzcygnZXhwYW5kZWQnKSkge1xyXG5cdFx0XHRcdC8vIENhbGMgYW5kIHNldCBhIGZpeGVkIGhlaWdodCwgZHVyaW5nIHRoaXMgcHJvY2VzcywgdHJhbnNpdGlvbnMgYXJlIGRpc2FibGVkXHJcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnQuYWRkQ2xhc3MoJ25vVHJhbnNpdGlvbicpO1xyXG5cdFx0XHRcdFNlY3Rpb25Db250ZW50LmhlaWdodChTZWN0aW9uQ29udGVudC5oZWlnaHQoKSk7XHJcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnRbMF0ub2Zmc2V0SGVpZ2h0OyAvLyBoYWNrIHRvIGZvcmNlIGEgcmVwYWludFxyXG5cdFx0XHRcdFNlY3Rpb25Db250ZW50LnJlbW92ZUNsYXNzKCdub1RyYW5zaXRpb24nKTtcclxuXHJcblx0XHRcdFx0Ly8gQ29sbGFwc2UgY29udGVudFxyXG5cdFx0XHRcdFNlY3Rpb25Db250ZW50LmhlaWdodCgwKTtcclxuXHRcdFx0XHRTZWN0aW9uLnJlbW92ZUNsYXNzKCdleHBhbmRlZCcpO1xyXG5cdFx0XHRcdFNlY3Rpb25Db250ZW50LmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XHJcblxyXG5cdFx0XHRcdC8vIFJlbW92ZSBjbGFzcywgc2V0IGhlaWdodCBhbmQgc2F2ZSBzdGF0ZVxyXG5cdFx0XHRcdHByZXZpZXdzdGF0W2lkXVsnY2xpZW50J10gPSBmYWxzZTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQvLyBDYWxjIGFuZCBzZXQgYSBmaXhlZCBoZWlnaHRcclxuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5oZWlnaHQoJ2F1dG8nKTtcclxuXHRcdFx0XHQvLyB0ZW1wSGVpZ2h0ID0gU2VjdGlvbkNvbnRlbnQuaGVpZ2h0KCk7XHJcblx0XHRcdFx0Ly8gU2VjdGlvbkNvbnRlbnQuaGVpZ2h0KDApO1xyXG5cdFx0XHRcdC8vIFNlY3Rpb25Db250ZW50LmhlaWdodCh0ZW1wSGVpZ2h0KTtcclxuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5jc3MoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xyXG5cclxuXHRcdFx0XHQvLyByZW1vdmUgY2xhc3MsIHNldCBoZWlnaHQgYW5kIHNhdmUgc3RhdGVcclxuXHRcdFx0XHRTZWN0aW9uLmFkZENsYXNzKCdleHBhbmRlZCcpO1xyXG5cdFx0XHRcdHByZXZpZXdzdGF0W2lkXVsnY2xpZW50J10gPSB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gYWpheCByZWZyZXMgZnVuY3Rpb25cclxuXHRcdHRoYXQuYWpheFJlZnJlc2ggPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0Ly8gcmVtb3ZlIGNsaWNrIGV2ZW50c1xyXG5cdFx0XHQkKCcuU2VjdGlvbkV4cGFuZGFibGVJbnNpZGUgLlNlY3Rpb25FeHBhbmRhYmxlSW5zaWRlX2hlYWRlcicpLm9mZigpO1xyXG5cclxuXHRcdFx0Ly8gYWRkIHN0b3AgcHJlcGFnYXRpb25cclxuXHRcdFx0JChcclxuXHRcdFx0XHQnLlNlY3Rpb25FeHBhbmRhYmxlSW5zaWRlIC5TZWN0aW9uRXhwYW5kYWJsZUluc2lkZV9oZWFkZXIgaW5wdXQsIC5TZWN0aW9uRXhwYW5kYWJsZUluc2lkZSAuU2VjdGlvbkV4cGFuZGFibGVJbnNpZGVfaGVhZGVyIHNlbGVjdCwgLlNlY3Rpb25FeHBhbmRhYmxlSW5zaWRlIC5TZWN0aW9uRXhwYW5kYWJsZUluc2lkZV9oZWFkZXIgYSdcclxuXHRcdFx0KS5jbGljayhmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdC8vIGFkZCBuZXcgY2xpY2sgZXZlbnRzXHJcblx0XHRcdCQoJy5TZWN0aW9uRXhwYW5kYWJsZUluc2lkZSAuU2VjdGlvbkV4cGFuZGFibGVJbnNpZGVfaGVhZGVyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0Y2xpY2tFdmVudHModGhpcyk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Ly8gZWFjaCBhbGwgc2VjdGlvbnNcclxuXHRcdFx0JCgnLlNlY3Rpb25FeHBhbmRhYmxlSW5zaWRlJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHQvLyBpZiBuZXcgU2VjdGlvbkV4cGFuZGFibGUgdGhlbiBhZGQgdG8gcHJldmlld3N0YXQgYXJyYXlcclxuXHRcdFx0XHRpZiAocHJldmlld3N0YXRbJCh0aGlzKS5hdHRyKCdpZCcpXSA9PSBudWxsKSB7XHJcblx0XHRcdFx0XHQvLyBhZGQgc3RhdCBvbiBhcnJheVxyXG5cdFx0XHRcdFx0dmFyIHN0YXQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdC8vIGlmIG9wZW5cclxuXHRcdFx0XHRcdGlmICgkKHRoaXMpLmhhc0NsYXNzKCdleHBhbmRlZCcpKSB7XHJcblx0XHRcdFx0XHRcdHN0YXQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Ly8gYWRkIHJvd1xyXG5cdFx0XHRcdFx0cHJldmlld3N0YXRbJCh0aGlzKS5hdHRyKCdpZCcpXSA9IHsgY2xpZW50OiBzdGF0LCBzZXJ2ZXI6IHN0YXQgfTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIGN1cmVudCBzdGF0ZSAoYWpheCBzdGF0ZSB4IGluaXRpYWwgc3RhdGUpXHJcblx0XHRcdFx0dmFyIGN1clN0YXRlID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdC8vIGNoZWNrIGlmIHN0YXJ0IGV4cGFuZGFibGVcclxuXHRcdFx0XHRpZiAoJCh0aGlzKS5oYXNDbGFzcygnZXhwYW5kZWQnKSkge1xyXG5cdFx0XHRcdFx0Y3VyU3RhdGUgPSB0cnVlO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gY2hlY2sgaWYgYWpheCAhPSBpbml0aWFsIHNlcnZlclxyXG5cdFx0XHRcdGlmIChjdXJTdGF0ZSAhPSBwcmV2aWV3c3RhdFskKHRoaXMpLmF0dHIoJ2lkJyldWydzZXJ2ZXInXSkge1xyXG5cdFx0XHRcdFx0Ly8gY3Vyc3RhdGVcclxuXHRcdFx0XHRcdHByZXZpZXdzdGF0WyQodGhpcykuYXR0cignaWQnKV1bJ2NsaWVudCddID0gY3VyU3RhdGU7XHJcblx0XHRcdFx0XHRwcmV2aWV3c3RhdFskKHRoaXMpLmF0dHIoJ2lkJyldWydzZXJ2ZXInXSA9IGN1clN0YXRlO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQvLyBoYXMgY2xhc3MgZXhwYW5kZWRcclxuXHRcdFx0XHRcdGlmIChwcmV2aWV3c3RhdFskKHRoaXMpLmF0dHIoJ2lkJyldWydjbGllbnQnXSA9PSBmYWxzZSAmJiAkKHRoaXMpLmhhc0NsYXNzKCdleHBhbmRlZCcpKSB7XHJcblx0XHRcdFx0XHRcdCQodGhpcykucmVtb3ZlQ2xhc3MoJ2V4cGFuZGVkJyk7XHJcblx0XHRcdFx0XHRcdCQodGhpcylcclxuXHRcdFx0XHRcdFx0XHQuY2hpbGRyZW4oJy5TZWN0aW9uRXhwYW5kYWJsZUluc2lkZV9jb250ZW50JylcclxuXHRcdFx0XHRcdFx0XHQuaGVpZ2h0KDApO1xyXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChwcmV2aWV3c3RhdFskKHRoaXMpLmF0dHIoJ2lkJyldWydjbGllbnQnXSA9PSB0cnVlICYmICEkKHRoaXMpLmhhc0NsYXNzKCdleHBhbmRlZCcpKSB7XHJcblx0XHRcdFx0XHRcdCQodGhpcykuYWRkQ2xhc3MoJ2V4cGFuZGVkJyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH07XHJcblxyXG5cdFx0Ly8gc2V0IGV2ZW50c1xyXG5cdFx0dGhhdC5pbml0ID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdC8vIGVhY2ggYWxsIHNlY3Rpb25zIHRvIGNyZWF0ZSBhcnJheSBzdGF0XHJcblx0XHRcdCQoJy5TZWN0aW9uRXhwYW5kYWJsZUluc2lkZScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0Ly8gYWRkIHN0YXQgb24gYXJyYXlcclxuXHRcdFx0XHR2YXIgc3RhdCA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHQvLyBpZiBvcGVuXHJcblx0XHRcdFx0aWYgKCQodGhpcykuaGFzQ2xhc3MoJ2V4cGFuZGVkJykpIHtcclxuXHRcdFx0XHRcdHN0YXQgPSB0cnVlO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gYWRkIHJvd1xyXG5cdFx0XHRcdHByZXZpZXdzdGF0WyQodGhpcykuYXR0cignaWQnKV0gPSB7IGNsaWVudDogc3RhdCwgc2VydmVyOiBzdGF0IH07XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Ly8gYWRkIGNsaWNrIGV2ZW50c1xyXG5cdFx0XHQkKCcuU2VjdGlvbkV4cGFuZGFibGVJbnNpZGUgLlNlY3Rpb25FeHBhbmRhYmxlSW5zaWRlX2hlYWRlcicpXHJcblx0XHRcdFx0Lm9mZignY2xpY2snKVxyXG5cdFx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGNsaWNrRXZlbnRzKHRoaXMpO1xyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Ly8gYWRkIHN0b3AgcHJlcGFnYXRpb25cclxuXHRcdFx0JChcclxuXHRcdFx0XHQnLlNlY3Rpb25FeHBhbmRhYmxlSW5zaWRlIC5TZWN0aW9uRXhwYW5kYWJsZUluc2lkZV9oZWFkZXIgaW5wdXQsIC5TZWN0aW9uRXhwYW5kYWJsZUluc2lkZSAuU2VjdGlvbkV4cGFuZGFibGVJbnNpZGVfaGVhZGVyIHNlbGVjdCwgLlNlY3Rpb25FeHBhbmRhYmxlSW5zaWRlIC5TZWN0aW9uRXhwYW5kYWJsZUluc2lkZV9oZWFkZXIgYSdcclxuXHRcdFx0KS5jbGljayhmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdC8vIGV2ZW50IGFqYXhcclxuXHRcdFx0b3NBamF4QmFja2VuZCAmJiBvc0FqYXhCYWNrZW5kLkJpbmRBZnRlckFqYXhSZXF1ZXN0KHRoYXQuYWpheFJlZnJlc2gpO1xyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IHNldE9wZW5DbG9zZUNsYXNzID0gaWQgPT4ge1xyXG5cdFx0aWQuY2xpY2soZnVuY3Rpb24oKSB7XHJcblx0XHRcdGlmIChpZC5wYXJlbnQoKS5oYXNDbGFzcygnZXhwYW5kZWQnKSkge1xyXG5cdFx0XHRcdCQodGhpcylcclxuXHRcdFx0XHRcdC5maW5kKCcuSGVhZGVySWNvbicpXHJcblx0XHRcdFx0XHQucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcclxuXHRcdFx0XHQkKHRoaXMpXHJcblx0XHRcdFx0XHQuZmluZCgnLkhlYWRlckljb24nKVxyXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdjbG9zZWQnKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQkKHRoaXMpXHJcblx0XHRcdFx0XHQuZmluZCgnLkhlYWRlckljb24nKVxyXG5cdFx0XHRcdFx0LnJlbW92ZUNsYXNzKCdjbG9zZWQnKTtcclxuXHRcdFx0XHQkKHRoaXMpXHJcblx0XHRcdFx0XHQuZmluZCgnLkhlYWRlckljb24nKVxyXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdvcGVuJyk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGNyZWF0ZSA9ICgpID0+IHtcclxuXHRcdGNvbnN0IGV4cGFuZGFibGUgPSBuZXcgU2VjdGlvbkV4cGFuZGFibGVJbnNpZGUoKTtcclxuXHJcblx0XHRleHBhbmRhYmxlLmluaXQoKTtcclxuXHR9O1xyXG5cclxuXHRTYXBwaGlyZVdpZGdldHMuU2VjdGlvbkV4cGFuZGFibGVJbnNpZGUgPSB7XHJcblx0XHRjcmVhdGUsXHJcblx0XHRzZXRPcGVuQ2xvc2VDbGFzcyxcclxuXHR9O1xyXG59KShqUXVlcnksIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKTtcclxuIiwiLyogQ29tcG9uZW50IFNlbGVjdFN5c3RlbSAqL1xuU2FwcGhpcmVXaWRnZXRzLlNlbGVjdFN5c3RlbSA9IGNvbmZpZyA9PiB7XG5cdCQoZnVuY3Rpb24oKSB7XG5cdFx0dmFyIFdpZGdldElkID0gY29uZmlnLldpZGdldElkOyAvL0NvbWJvIEJveCBJZCB0byBiZSB1c2VkLlxuXHRcdHZhciBDbGFzcyA9IGNvbmZpZy5DbGFzczsgLy9BbGwgQ29tYm8gYm94ZXMgd2l0aCB0aGlzIGNsYXNzIHdpbGwgYmUgYmUgdHJhbnNmb3JtZWQuXG5cdFx0dmFyIE5vUmVzdWx0c1RleHQgPSBjb25maWcuTm9SZXN1bHRzVGV4dDsgLy9UZXh0IHRvIGRpc3BsYXkgd2hlbiB0aGVyZSBhcmUgbm8gcmVzdWx0cy5cblx0XHR2YXIgaW5wdXRUeXBlID0gY29uZmlnLklucHVUeXBlOyAvL09wdGlvbnM6IEZJbHRlcnMsIERyb3Bkb3duLCBTZWxlY3QyXG5cdFx0dmFyIFByb21wdCA9IGNvbmZpZy5Qcm9tcHQ7IC8vUHJvbXB0IGluIHNlYXJjaFxuXHRcdHZhciBTZWxlY3QyVHlwZSA9IGNvbmZpZy5TZWxlY3RUeXBlOyAvLyBUeXBlIG9mIHNlbGVjdDIgY29uZmlndXJhdGlvblxuXHRcdHZhciBIYXNTZWFyY2ggPSBjb25maWcuSGFzU2VhcmNoOyAvLyBoYXMgc2VhcmNoXG5cdFx0dmFyIE9uU2VsZWN0aW5nSlMgPSBjb25maWcuT25TZWxlY3RpbmdKUztcblx0XHR2YXIgT25VblNlbGVjdGluZ0pTID0gY29uZmlnLk9uVW5TZWxlY3RpbmdKUztcblx0XHR2YXIgTWF4aW11bUxlbmd0aCA9IGNvbmZpZy5NYXhpbXVtTGVuZ3RoO1xuXHRcdHZhciBTZWxlY3RlZFZhbHVlID0gY29uZmlnLlNlbGVjdGVkVmFsdWU7XG5cdFx0dmFyIGFsbG93Q2xlYXIgPSBjb25maWcuYWxsb3dDbGVhcjtcblx0XHQvLyAgU2VsZWN0MiBBamF4IENvbmZpZ3VyYXRpb25cblx0XHR2YXIgQWpheFVSTCA9IGNvbmZpZy5BamF4VVJMO1xuXHRcdHZhciBBamF4RGVsYXkgPSBjb25maWcuQWpheERlbGF5O1xuXHRcdHZhciBQYWdpbmF0aW9uU2l6ZSA9IGNvbmZpZy5QYWdpbmF0aW9uU2l6ZTtcblx0XHR2YXIgTWluaW11bUlucHV0TGVuZ2h0ID0gY29uZmlnLk1pbmltdW1JbnB1dExlbmdodDtcblx0XHR2YXIgU2VhcmNoVGVybSA9IGNvbmZpZy5TZWFyY2hUZXJtO1xuXHRcdHZhciBTZWFyY2hFeHRyYVBhcmFtMSA9IGNvbmZpZy5TZWFyY2hFeHRyYVBhcmFtMTtcblx0XHR2YXIgUGFnZVRlcm0gPSBjb25maWcuUGFnZVRlcm07XG5cdFx0dmFyIEFtb3VudFBhZ2UgPSBjb25maWcuUGFnZUFtb3VudDtcblx0XHR2YXIgaXNNdWx0aXBsZSA9IGNvbmZpZy5pc011bHRpcGxlO1xuXHRcdHZhciBTZWxlY3QyT3B0aW9ucyA9IHt9O1xuXHRcdHZhciAkV2lkZ2V0SWRlbnRpZmllcjtcblxuXHRcdGlmIChjb25maWcubG9jYWxlID09PSAnQVInIHx8IGNvbmZpZy5sb2NhbGUgPT09ICdGQScpIHtcblx0XHRcdFNlbGVjdDJPcHRpb25zLmRpciA9ICdydGwnO1xuXHRcdH1cblx0XHRcblx0XHRTZWxlY3QyT3B0aW9ucy50aGVtZSA9ICdkZWZhdWx0IFNlbGVjdFN5c3RlbSc7XG5cblx0XHRjb25zb2xlLmxvZyhcIi0tLSBcIiArIFNlbGVjdDJUeXBlICsgXCIgLS0tXCIpO1xuXHRcdC8qICBcbiAgICAgICAgICBDaGFuZ2Ugc2VsZWN0MiBzZWFyY2ggZGlzcGxheSBcbiAgICAgICAgICAgICAgLU11bHRpcGxlIFNlbGVjdDIgc2VhcmNoIFVJIGxpa2UgU2luZ2xlIFNlbGVjdDJcbiAgICAgICovXG5cdFx0JC5mbi5zZWxlY3QyLmFtZC5kZWZpbmUoXG5cdFx0XHQnU2VhcmNoTGlrZVNpbmdsZScsXG5cdFx0XHRbXG5cdFx0XHRcdCdzZWxlY3QyL3V0aWxzJyxcblx0XHRcdFx0J3NlbGVjdDIvZHJvcGRvd24nLFxuXHRcdFx0XHQnc2VsZWN0Mi9kcm9wZG93bi9hdHRhY2hCb2R5Jyxcblx0XHRcdFx0J3NlbGVjdDIvZHJvcGRvd24vYXR0YWNoQ29udGFpbmVyJyxcblx0XHRcdFx0J3NlbGVjdDIvZHJvcGRvd24vc2VhcmNoJyxcblx0XHRcdFx0J3NlbGVjdDIvZHJvcGRvd24vbWluaW11bVJlc3VsdHNGb3JTZWFyY2gnLFxuXHRcdFx0XSxcblx0XHRcdGZ1bmN0aW9uKFV0aWxzLCBEcm9wZG93biwgQXR0YWNoQm9keSwgQXR0YWNoQ29udGFpbmVyLCBTZWFyY2gsIG1pbmltdW1SZXN1bHRzRm9yU2VhcmNoKSB7XG5cdFx0XHRcdGxldCBkcm9wZG93blNlYXJjaCA9IFV0aWxzLkRlY29yYXRlKERyb3Bkb3duLCBTZWFyY2gpO1xuXHRcdFx0XHRkcm9wZG93blNlYXJjaC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0dmFyICRyZW5kZXJlZCA9IERyb3Bkb3duLnByb3RvdHlwZS5yZW5kZXIuY2FsbCh0aGlzKTtcblx0XHRcdFx0XHQvLyBBZGQgYWJpbGl0eSBmb3IgYSBwbGFjZWhvbGRlciBpbiB0aGUgc2VhcmNoIGJveFxuXHRcdFx0XHRcdGxldCBwbGFjZWhvbGRlciA9IHRoaXMub3B0aW9ucy5nZXQoJ3BsYWNlaG9sZGVyRm9yU2VhcmNoJykgfHwgJyc7XG5cdFx0XHRcdFx0dmFyICRzZWFyY2ggPSAkKFxuXHRcdFx0XHRcdFx0JzxzcGFuIGNsYXNzPVwic2VsZWN0Mi1zZWFyY2ggc2VsZWN0Mi1zZWFyY2gtLWRyb3Bkb3duXCI+JyArXG5cdFx0XHRcdFx0XHRcdCc8aW5wdXQgY2xhc3M9XCJzZWxlY3QyLXNlYXJjaF9fZmllbGRcIiBwbGFjZWhvbGRlcj1cIicgK1xuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlciArXG5cdFx0XHRcdFx0XHRcdCdcIiB0eXBlPVwic2VhcmNoXCInICtcblx0XHRcdFx0XHRcdFx0JyB0YWJpbmRleD1cIi0xXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgYXV0b2NvcnJlY3Q9XCJvZmZcIiBhdXRvY2FwaXRhbGl6ZT1cIm9mZlwiJyArXG5cdFx0XHRcdFx0XHRcdCcgc3BlbGxjaGVjaz1cImZhbHNlXCIgcm9sZT1cInRleHRib3hcIiAvPicgK1xuXHRcdFx0XHRcdFx0XHQnPC9zcGFuPidcblx0XHRcdFx0XHQpO1xuXG5cdFx0XHRcdFx0dGhpcy4kc2VhcmNoQ29udGFpbmVyID0gJHNlYXJjaDtcblx0XHRcdFx0XHR0aGlzLiRzZWFyY2ggPSAkc2VhcmNoLmZpbmQoJ2lucHV0Jyk7XG5cdFx0XHRcdFx0JHNlYXJjaC5hZGRDbGFzcygnTXVsdGlwbGVTZWxlY3QnKTtcblxuXHRcdFx0XHRcdCRyZW5kZXJlZC5wcmVwZW5kKCRzZWFyY2gpO1xuXHRcdFx0XHRcdCRzZWFyY2gucGFyZW50KCkuYWRkQ2xhc3MoJ011bHRpcGxlU2VsZWN0Jyk7XG5cdFx0XHRcdFx0cmV0dXJuICRyZW5kZXJlZDtcblx0XHRcdFx0fTtcblxuXHRcdFx0XHQvLyBEZWNvcmF0ZSB0aGUgZHJvcGRvd24rc2VhcmNoIHdpdGggdGhlIGNvbnRhaW5lcnNcblx0XHRcdFx0bGV0IGFkYXB0ZXIgPSBVdGlscy5EZWNvcmF0ZShkcm9wZG93blNlYXJjaCwgQXR0YWNoQ29udGFpbmVyKTtcblx0XHRcdFx0YWRhcHRlciA9IFV0aWxzLkRlY29yYXRlKGFkYXB0ZXIsIEF0dGFjaEJvZHkpO1xuXG5cdFx0XHRcdHJldHVybiBhZGFwdGVyO1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHQvKipcblx0XHQgKiBEZWZhdWx0IENvbmZpZ3VyYXRpb24gbmVlZGVkIHRvIGFzc29jaWF0ZSB0aGUgd2lkZ2V0IHRvIHRoZSBzZWxlY3QyIHBsdWdpblxuXHRcdCAqL1xuXHRcdGlmIChXaWRnZXRJZCA9PT0gJycgJiYgQ2xhc3MgIT0gJycpIHtcblx0XHRcdCRXaWRnZXRJZGVudGlmaWVyID0gJCgnLicgKyBDbGFzcyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRXaWRnZXRJZGVudGlmaWVyID0gJCgnIycgKyBXaWRnZXRJZCk7XG5cdFx0fVxuXHRcdFNlbGVjdDJPcHRpb25zLmNvbnRhaW5lckNzc0NsYXNzID0gJ3NlbGVjdC1oaWRlICcgKyBpbnB1dFR5cGU7XG5cblx0XHQvLyAgU2VsZWN0Mk9wdGlvbnMuZHJvcGRvd25QYXJlbnQ9ICQoJyMnK1BhcmVudERpdik7XG5cblx0XHR2YXIgZm9ybWF0UmVzdWx0ID0gZnVuY3Rpb24ocmVzdWx0KSB7XG5cdFx0XHR2YXIgJHNlbGVjdGVkT3B0aW9uc1ZhbHVlID0gJFdpZGdldElkZW50aWZpZXIuZmluZCgnOnNlbGVjdGVkJyk7XG5cdFx0XHR2YXIgc2VsZWN0ZWRPcHRpb25zID0gJHNlbGVjdGVkT3B0aW9uc1ZhbHVlLmxlbmd0aDtcblx0XHRcdHZhciB0b3RhbE9wdGlvbnMgPSAkV2lkZ2V0SWRlbnRpZmllci5maW5kKCdvcHRpb24nKS5sZW5ndGg7XG5cdFx0XHR2YXIgc2VsZWN0QWxsT3B0ID0gJFdpZGdldElkZW50aWZpZXIuZmluZCgnb3B0aW9uOmZpcnN0LWNoaWxkOnNlbGVjdGVkJykubGVuZ3RoO1xuXHRcdFx0dmFyIGFjdGl2ZVZhbHVlcyA9ICcnO1xuXHRcdFx0dmFyIGFsbE9wdEV4Y2VwdEFsbCA9ICRXaWRnZXRJZGVudGlmaWVyLmZpbmQoJzpzZWxlY3RlZDpub3QoXCIuU2VsZWN0ZWRBbGxcIiknKS5sZW5ndGg7XG5cdFx0XHR2YXIgJGFsbE9wdEV4Y2VwdEFsbE9iaiA9ICRXaWRnZXRJZGVudGlmaWVyLmZpbmQoJzpzZWxlY3RlZDpub3QoXCIuU2VsZWN0ZWRBbGxcIiknKTtcblxuXHRcdFx0aWYgKHNlbGVjdGVkT3B0aW9ucyA9PT0gdG90YWxPcHRpb25zKSB7XG5cdFx0XHRcdGlmICh0b3RhbE9wdGlvbnMgLSAxID4gMykge1xuXHRcdFx0XHRcdHJldHVybiAnQWxsIFNlbGVjdGVkJztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkYWxsT3B0RXhjZXB0QWxsT2JqLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRhY3RpdmVWYWx1ZXMgPSBhY3RpdmVWYWx1ZXMgKyAnICcgKyAkKHRoaXMpWzBdLmlubmVyVGV4dDtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRhY3RpdmVWYWx1ZXMgPSBhY3RpdmVWYWx1ZXMucmVwbGFjZSgvLFxccyokLywgJycpO1xuXHRcdFx0XHRcdHJldHVybiBhY3RpdmVWYWx1ZXM7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciB0b3RhbG9wdCA9IHRvdGFsT3B0aW9ucyAtIDE7XG5cdFx0XHRcdGlmIChzZWxlY3RlZE9wdGlvbnMgPiAzKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHNlbGVjdGVkT3B0aW9ucyArICcgb2YgJyArIHRvdGFsb3B0ICsgJyBzZWxlY3RlZCc7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aWYgKHNlbGVjdGVkT3B0aW9ucyA+IDApIHtcblx0XHRcdFx0XHRcdCRzZWxlY3RlZE9wdGlvbnNWYWx1ZS5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHRhY3RpdmVWYWx1ZXMgPSBhY3RpdmVWYWx1ZXMgKyAnICcgKyAkKHRoaXMpWzBdLmlubmVyVGV4dCArICcsICc7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdGFjdGl2ZVZhbHVlcyA9IGFjdGl2ZVZhbHVlcy5yZXBsYWNlKC8sXFxzKiQvLCAnJyk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gYWN0aXZlVmFsdWVzO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gJ1NlbGVjdCBhbiBvcHRpb24nO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRpZiAoTm9SZXN1bHRzVGV4dCAhPSAnJykge1xuXHRcdFx0U2VsZWN0Mk9wdGlvbnMuZm9ybWF0Tm9NYXRjaGVzID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBOb1Jlc3VsdHNUZXh0O1xuXHRcdFx0fTtcblx0XHR9XG5cblx0XHRpZiAoaW5wdXRUeXBlICE9ICcnKSB7XG5cdFx0XHRTZWxlY3QyT3B0aW9ucy5kcm9wZG93bkNzc0NsYXNzID0gaW5wdXRUeXBlO1xuXHRcdH1cblxuXHRcdGlmIChhbGxvd0NsZWFyID09PSAnVHJ1ZScpIHtcblx0XHRcdFNlbGVjdDJPcHRpb25zLmFsbG93Q2xlYXIgPSB0cnVlO1xuXHRcdH1cblxuXHRcdGlmIChNYXhpbXVtTGVuZ3RoICE9ICcnKSB7XG5cdFx0XHRTZWxlY3QyT3B0aW9ucy5tYXhpbXVtSW5wdXRMZW5ndGggPSBNYXhpbXVtTGVuZ3RoO1xuXHRcdH1cblxuXHRcdGlmIChQcm9tcHQgIT0gJycpIHtcblx0XHRcdFNlbGVjdDJPcHRpb25zLnBsYWNlaG9sZGVyID0gUHJvbXB0O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRTZWxlY3QyT3B0aW9ucy5wbGFjZWhvbGRlciA9IHtcblx0XHRcdFx0aWQ6ICctMScsIC8vIHRoZSB2YWx1ZSBvZiB0aGUgb3B0aW9uXG5cdFx0XHRcdHRleHQ6ICdTZWxlY3QgYW4gb3B0aW9uJyxcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0aWYgKFNlbGVjdDJUeXBlID09PSAnMycpIHtcblx0XHRcdC8vIFNlbGVjdDIgQWpheFxuXHRcdFx0U2VsZWN0Mk9wdGlvbnMgPSB7fTtcblxuXHRcdFx0aWYgKGNvbmZpZy5sb2NhbGUgPT09ICdBUicgfHwgY29uZmlnLmxvY2FsZSA9PT0gJ0ZBJykge1xuXHRcdFx0XHRTZWxlY3QyT3B0aW9ucy5kaXIgPSAncnRsJztcblx0XHRcdH1cblxuXHRcdFx0U2VsZWN0Mk9wdGlvbnMuYWxsb3dDbGVhciA9IGZhbHNlO1xuXG5cdFx0XHRTZWxlY3QyT3B0aW9ucy50ZW1wbGF0ZVNlbGVjdGlvbiA9IGZ1bmN0aW9uKHJlcG8pIHtcblx0XHRcdFx0aWYgKCFyZXBvLmVsZW1lbnQpIHtcblx0XHRcdFx0XHRyZXR1cm4gUHJvbXB0O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIHJlcG8uZnVsbF9uYW1lIHx8IHJlcG8udGV4dDtcblx0XHRcdH07XG5cblx0XHRcdFNlbGVjdDJPcHRpb25zLnRlbXBsYXRlUmVzdWx0ID0gZnVuY3Rpb24ocmVwbykge1xuXHRcdFx0XHRpZiAocmVwby5sb2FkaW5nKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlcG8udGV4dDtcblx0XHRcdFx0fVxuXHRcdFx0XHR2YXIgbWFya3VwID0gJzxkaXYgY2xhc3M9XCJcIkNsZWFyZml4XCJcIj4nICsgJzxkaXYgY2xhc3M9XCJcIlRoZW1lR3JpZF9XaWR0aDEyXCJcIj4nICsgcmVwby50ZXh0ICsgJzwvZGl2Pic7XG5cdFx0XHRcdGlmIChyZXBvLmRlc2NyaXB0aW9uKSB7XG5cdFx0XHRcdFx0bWFya3VwICs9ICc8ZGl2IGNsYXNzPVwiXCJPU0F1dG9NYXJnaW5Ub3BcIlwiPicgKyByZXBvLmRlc2NyaXB0aW9uICsgJzwvZGl2Pic7XG5cdFx0XHRcdH1cblx0XHRcdFx0bWFya3VwICs9ICc8L2Rpdj4nO1xuXHRcdFx0XHRyZXR1cm4gbWFya3VwO1xuXHRcdFx0fTtcblxuXHRcdFx0KFNlbGVjdDJPcHRpb25zLmFqYXggPSB7XG5cdFx0XHRcdHVybDogQWpheFVSTCxcblx0XHRcdFx0ZGF0YVR5cGU6ICdqc29uJyxcblx0XHRcdFx0ZGVsYXk6IEFqYXhEZWxheSxcblx0XHRcdFx0ZGF0YTogZnVuY3Rpb24ocGFyYW1zKSB7XG5cdFx0XHRcdFx0dmFyIFNlbGVjdDJBamF4T3B0ID0ge307XG5cdFx0XHRcdFx0dmFyIFNwbGl0UGFyYW1ldGVyID0gU2VhcmNoRXh0cmFQYXJhbTEuc3BsaXQoJywnKTtcblx0XHRcdFx0XHRTZWxlY3QyQWpheE9wdC5TZWFyY2hQYXJhbWV0ZXIgPSBwYXJhbXMudGVybTtcblx0XHRcdFx0XHRTZWxlY3QyQWpheE9wdC5QYWdlID0gcGFyYW1zLnBhZ2UgfHwgMTtcblx0XHRcdFx0XHRTZWxlY3QyQWpheE9wdC5QYWdlQW1vdW50ID0gQW1vdW50UGFnZTtcblxuXHRcdFx0XHRcdFNwbGl0UGFyYW1ldGVyLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcblx0XHRcdFx0XHRcdHZhciBzcGxpdFRleHQgPSBlbC5zcGxpdCgnOicpO1xuXHRcdFx0XHRcdFx0U2VsZWN0MkFqYXhPcHRbc3BsaXRUZXh0WzBdXSA9IHNwbGl0VGV4dFsxXTtcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdHJldHVybiBTZWxlY3QyQWpheE9wdDtcblx0XHRcdFx0fSxcblx0XHRcdFx0cHJvY2Vzc1Jlc3VsdHM6IGZ1bmN0aW9uKGRhdGEsIHBhcmFtcykge1xuXHRcdFx0XHRcdHBhcmFtcy5wYWdlID0gcGFyYW1zLnBhZ2UgfHwgMTtcblxuXHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHRyZXN1bHRzOiBkYXRhLml0ZW1zLFxuXHRcdFx0XHRcdFx0cGFnaW5hdGlvbjoge1xuXHRcdFx0XHRcdFx0XHRtb3JlOiBwYXJhbXMucGFnZSAqIFBhZ2luYXRpb25TaXplIDwgZGF0YS50b3RhbF9jb3VudCxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fSxcblx0XHRcdFx0Y2FjaGU6IHRydWUsXG5cdFx0XHR9KSxcblx0XHRcdFx0KFNlbGVjdDJPcHRpb25zLm1pbmltdW1JbnB1dExlbmd0aCA9IE1pbmltdW1JbnB1dExlbmdodCk7XG5cblx0XHRcdFNlbGVjdDJPcHRpb25zLmVzY2FwZU1hcmt1cCA9IGZ1bmN0aW9uKG1hcmt1cCkge1xuXHRcdFx0XHRyZXR1cm4gbWFya3VwO1xuXHRcdFx0fTtcblxuXHRcdFx0aWYgKGNvbmZpZy5pc011bHRpcGxlKSB7XG5cdFx0XHRcdFNlbGVjdDJPcHRpb25zLm11bHRpcGxlID0gdHJ1ZTtcblx0XHRcdFx0U2VsZWN0Mk9wdGlvbnMuY29udGFpbmVyQ3NzQ2xhc3MgPSAnU2VsZWN0MkFqYXggTXVsdGlwbGUnO1xuXHRcdFx0XHRTZWxlY3QyT3B0aW9ucy5kcm9wZG93bkNzc0NsYXNzID0gJ1NlbGVjdDJBamF4IE11bHRpcGxlJztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFNlbGVjdDJPcHRpb25zLm11bHRpcGxlID0gZmFsc2U7XG5cdFx0XHRcdFNlbGVjdDJPcHRpb25zLmNvbnRhaW5lckNzc0NsYXNzID0gJ1NlbGVjdDJBamF4Jztcblx0XHRcdFx0U2VsZWN0Mk9wdGlvbnMuZHJvcGRvd25Dc3NDbGFzcyA9ICdTZWxlY3QyQWpheCc7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChTZWxlY3RlZFZhbHVlICE9PSAnJykge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKFNlbGVjdGVkVmFsdWUpO1xuXHRcdFx0XHRcdGNvbnN0IG9wdGlvbiA9IG5ldyBPcHRpb24oZGF0YS5WYWx1ZSwgZGF0YS5JZCwgdHJ1ZSwgdHJ1ZSk7XG5cblx0XHRcdFx0XHQkV2lkZ2V0SWRlbnRpZmllci5hcHBlbmQob3B0aW9uKS50cmlnZ2VyKCdjaGFuZ2UnKTtcblx0XHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBDb21wb25lbnQgU2VsZWN0U3lzdGVtICgke1dpZGdldElkfSk6IFNlbGVjdGVkVmFsdWUgbXVzdCBiZSBhIHZhbGlkIEpTT04hYCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0U2VsZWN0Mk9wdGlvbnMubWluaW11bVJlc3VsdHNGb3JTZWFyY2ggPSAwO1xuXHRcdFx0U2VsZWN0Mk9wdGlvbnMudGFncyA9IGNvbmZpZy5IYXNUYWdzO1xuXHRcdFx0U2VsZWN0Mk9wdGlvbnMuY2xvc2VPbnNlbGVjdCA9IHRydWU7XG5cdFx0fVxuXG5cdFx0aWYgKFNlbGVjdDJUeXBlID09PSAnMicpIHtcblx0XHRcdC8vU2VsZWN0MiB3aXRoIENoZWNrQm94XG5cblx0XHRcdHZhciBpc0FsbFNlbGVjdGVkID0gZmFsc2U7XG5cdFx0XHRpZiAoJFdpZGdldElkZW50aWZpZXJbMF0ub3B0aW9ucy5sZW5ndGggPT09ICRXaWRnZXRJZGVudGlmaWVyWzBdLnNlbGVjdGVkT3B0aW9ucy5sZW5ndGgpIHtcblx0XHRcdFx0aXNBbGxTZWxlY3RlZCA9IHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChXaWRnZXRJZCAhPSAnJykge1xuXHRcdFx0XHRvcHRpb24gPSBuZXcgT3B0aW9uKCdTZWxlY3QgQWxsJywgJ0FsbCcsIHRydWUsIGlzQWxsU2VsZWN0ZWQpO1xuXHRcdFx0XHQkV2lkZ2V0SWRlbnRpZmllci5wcmVwZW5kKG9wdGlvbik7XG5cdFx0XHRcdCRXaWRnZXRJZGVudGlmaWVyLmZpbmQoJ29wdGlvbjpmaXJzdC1jaGlsZCcpLmFkZENsYXNzKCdTZWxlY3RlZEFsbCcpO1xuXHRcdFx0fVxuXHRcdFx0U2VsZWN0Mk9wdGlvbnMubXVsdGlwbGUgPSB0cnVlO1xuXHRcdFx0U2VsZWN0Mk9wdGlvbnMuY2xvc2VPblNlbGVjdCA9IGZhbHNlO1xuXHRcdFx0U2VsZWN0Mk9wdGlvbnMuYWxsb3dIdG1sID0gZmFsc2U7XG5cdFx0XHRTZWxlY3QyT3B0aW9ucy50YWdzID0gZmFsc2U7XG5cblx0XHRcdGlmIChIYXNTZWFyY2ggPT09ICdUcnVlJykge1xuXHRcdFx0XHRTZWxlY3QyT3B0aW9ucy5kcm9wZG93bkFkYXB0ZXIgPSAkLmZuLnNlbGVjdDIuYW1kLnJlcXVpcmUoJ1NlYXJjaExpa2VTaW5nbGUnKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFNlbGVjdDJPcHRpb25zLm1pbmltdW1SZXN1bHRzRm9yU2VhcmNoID0gLTE7XG5cdFx0XHR9XG5cblx0XHRcdFNlbGVjdDJPcHRpb25zLmNvbnRhaW5lckNzc0NsYXNzID0gJ011bHRpcGxlU2VsZWN0Jztcblx0XHRcdFNlbGVjdDJPcHRpb25zLmRyb3Bkb3duQ3NzQ2xhc3MgPSAnTXVsdGlwbGVTZWxlY3QnO1xuXHRcdFx0U2VsZWN0Mk9wdGlvbnMudGVtcGxhdGVTZWxlY3Rpb24gPSBmb3JtYXRSZXN1bHQ7XG5cdFx0fVxuXG5cdFx0aWYgKFNlbGVjdDJUeXBlID09PSAnNicpIHtcblx0XHRcdC8vIFNlbGVjdDIgSHRtbE9wdGlvbnNcblx0XHRcdFNlbGVjdDJPcHRpb25zID0ge307XG5cdFx0XHRpZiAoY29uZmlnLmxvY2FsZSA9PT0gJ0FSJyB8fCBjb25maWcubG9jYWxlID09PSAnRkEnKSB7XG5cdFx0XHRcdFNlbGVjdDJPcHRpb25zLmRpciA9ICdydGwnO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgZGF0YUh0bWxPcHRpb24gPSBbXTtcblx0XHRcdCRXaWRnZXRJZGVudGlmaWVyLmZpbmQoJ29wdGlvbicpLmVhY2goZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuXHRcdFx0XHR2YXIgb3B0aW9uT2JqZWN0ID0ge1xuXHRcdFx0XHRcdGlkOiAkKHRoaXMpLnZhbCgpLFxuXHRcdFx0XHRcdHRleHQ6ICQodGhpcykudGV4dCgpLFxuXHRcdFx0XHRcdGh0bWw6ICQodGhpcykudGV4dCgpLFxuXHRcdFx0XHR9O1xuXHRcdFx0XHRkYXRhSHRtbE9wdGlvbi5wdXNoKG9wdGlvbk9iamVjdCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0U2VsZWN0Mk9wdGlvbnMuY29udGFpbmVyQ3NzQ2xhc3MgPSAnY3VzdG9tU2VsZWN0Jztcblx0XHRcdFNlbGVjdDJPcHRpb25zLmRyb3Bkb3duQ3NzQ2xhc3MgPSAnZHJvcGRvd25DdXN0b20nO1xuXHRcdFx0U2VsZWN0Mk9wdGlvbnMuZGF0YSA9IGRhdGFIdG1sT3B0aW9uO1xuXHRcdFx0U2VsZWN0Mk9wdGlvbnMuZXNjYXBlTWFya3VwID0gZnVuY3Rpb24obWFya3VwKSB7XG5cdFx0XHRcdHJldHVybiBtYXJrdXA7XG5cdFx0XHR9O1xuXG5cdFx0XHRpZiAoU2VsZWN0ZWRWYWx1ZSAhPSAnJykge1xuXHRcdFx0XHQkV2lkZ2V0SWRlbnRpZmllci52YWwoU2VsZWN0ZWRWYWx1ZSkudHJpZ2dlcignY2hhbmdlJyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkV2lkZ2V0SWRlbnRpZmllci52YWwoJycpLnRyaWdnZXIoJ2NoYW5nZScpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChTZWxlY3QyVHlwZSA9PT0gJzEnKSB7XG5cdFx0XHQvLyBTZWxlY3QyIFRhZ0N1c3RvbVxuXHRcdFx0U2VsZWN0Mk9wdGlvbnMudGFncyA9IHRydWU7XG5cdFx0XHRTZWxlY3QyT3B0aW9ucy5jb250YWluZXJDc3NDbGFzcyA9ICd0YWdDdXN0b20nO1xuXHRcdFx0U2VsZWN0Mk9wdGlvbnMuZHJvcGRvd25Dc3NDbGFzcyA9ICd0YWdDdXN0b20nO1xuXHRcdFx0U2VsZWN0Mk9wdGlvbnMuVG9rZW5TZXBhcmF0b3MgPSBbJywnLCAnICddO1xuXHRcdFx0U2VsZWN0Mk9wdGlvbnMuY3JlYXRlU2VhcmNoQ2hvaWNlID0gZnVuY3Rpb24odGVybSwgZGF0YSkge1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0JChkYXRhKS5maWx0ZXIoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy50ZXh0LmxvY2FsZUNvbXBhcmUodGVybSkgPT09IDA7XG5cdFx0XHRcdFx0fSkubGVuZ3RoID09PSAwXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHRpZDogdGVybSxcblx0XHRcdFx0XHRcdHRleHQ6IHRlcm0sXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHR9XG5cblx0XHRpZiAoU2VsZWN0MlR5cGUgPT09ICc1Jykge1xuXHRcdFx0Ly8gU2VsZWN0MiBUYWdNdWx0aXBsZVxuXHRcdFx0U2VsZWN0Mk9wdGlvbnMudGFncyA9IHRydWU7XG5cdFx0XHRTZWxlY3QyT3B0aW9ucy5jb250YWluZXJDc3NDbGFzcyA9ICd0YWdTeXN0ZW0nO1xuXHRcdFx0U2VsZWN0Mk9wdGlvbnMuZHJvcGRvd25Dc3NDbGFzcyA9ICd0YWdTeXN0ZW0nO1xuXHRcdFx0U2VsZWN0Mk9wdGlvbnMuY3JlYXRlVGFnID0gZnVuY3Rpb24ocGFyYW1zKSB7XG5cdFx0XHRcdHZhciB0ZXJtID0gJC50cmltKHBhcmFtcy50ZXJtKTtcblx0XHRcdFx0aWYgKHRlcm0gPT09ICcnKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRpZDogJyMnICsgdGVybSxcblx0XHRcdFx0XHR0ZXh0OiB0ZXJtLFxuXHRcdFx0XHRcdG5ld1RhZzogdHJ1ZSwgLy8gYWRkIGFkZGl0aW9uYWwgcGFyYW1ldGVyc1xuXHRcdFx0XHR9O1xuXHRcdFx0fTtcblx0XHR9XG5cblx0XHRpZiAoSGFzU2VhcmNoID09PSAnRmFsc2UnKSB7XG5cdFx0XHRTZWxlY3QyT3B0aW9ucy5taW5pbXVtUmVzdWx0c0ZvclNlYXJjaCA9IC0xO1xuXHRcdH1cblxuXHRcdGlmIChPblVuU2VsZWN0aW5nSlMgIT0gJycgfHwgT25TZWxlY3RpbmdKUyAhPSAnJykge1xuXHRcdFx0JFdpZGdldElkZW50aWZpZXJcblx0XHRcdFx0LnNlbGVjdDIoU2VsZWN0Mk9wdGlvbnMpXG5cdFx0XHRcdC5vbignc2VsZWN0Mjp1bnNlbGVjdGluZycsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0XHQkKHRoaXMpLmRhdGEoJ3Vuc2VsZWN0aW5nJywgdHJ1ZSk7XG5cdFx0XHRcdFx0T25VblNlbGVjdGluZ0pTO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQub24oJ3NlbGVjdDpzZWxlY3RpbmcnLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0T25TZWxlY3RpbmdKUztcblx0XHRcdFx0fSlcblx0XHRcdFx0Lm9uKCdzZWxlY3Q6b3BlbmluZycsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0XHRpZiAoJCh0aGlzKS5kYXRhKCd1bnNlbGVjdGluZycpKSB7XG5cdFx0XHRcdFx0XHQkKHRoaXMpLnJlbW92ZURhdGEoJ3Vuc2VsZWN0aW5nJyk7XG5cdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0XHQub24oJ3NlbGVjdDpvcGVuJywgZnVuY3Rpb24oZXZ0KSB7XG5cdFx0XHRcdFx0ZXZ0LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5vbignc2VsZWN0MjpjbG9zZScsIGZ1bmN0aW9uKGV2dCkge1xuXHRcdFx0XHRcdGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKFNlbGVjdDJUeXBlID09PSAnMicpIHtcblx0XHRcdFx0JFdpZGdldElkZW50aWZpZXIuc2VsZWN0MihTZWxlY3QyT3B0aW9ucyk7XG5cdFx0XHRcdHZhciBpZHdpZGdldCA9ICcjJyArIFdpZGdldElkO1xuXG5cdFx0XHRcdCRXaWRnZXRJZGVudGlmaWVyLm9uKCdzZWxlY3QyOnNlbGVjdCcsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0XHRVbnNlbGVjdGVkSWQgPSBlLnBhcmFtcy5kYXRhLmlkO1xuXHRcdFx0XHRcdGlmIChVbnNlbGVjdGVkSWQgPT09ICdBbGwnKSB7XG5cdFx0XHRcdFx0XHR2YXIgc2VsZWN0ZWRJdGVtcyA9IFtdO1xuXHRcdFx0XHRcdFx0dmFyIGFsbE9wdGlvbnMgPSAkKGlkd2lkZ2V0ICsgJyBvcHRpb24nKTtcblx0XHRcdFx0XHRcdGFsbE9wdGlvbnMuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0c2VsZWN0ZWRJdGVtcy5wdXNoKCQodGhpcykudmFsKCkpO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHQkV2lkZ2V0SWRlbnRpZmllci5zZWxlY3QyKCdkZXN0cm95Jyk7XG5cdFx0XHRcdFx0XHQkV2lkZ2V0SWRlbnRpZmllci52YWwoc2VsZWN0ZWRJdGVtcykudHJpZ2dlcignY2hhbmdlJyk7XG5cdFx0XHRcdFx0XHQkV2lkZ2V0SWRlbnRpZmllci5zZWxlY3QyKFNlbGVjdDJPcHRpb25zKTtcblx0XHRcdFx0XHRcdCRXaWRnZXRJZGVudGlmaWVyLnNlbGVjdDIoJ29wZW4nKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dmFyIHNlbGVjdGVkT3B0aW9ucyA9ICRXaWRnZXRJZGVudGlmaWVyLmZpbmQoJ29wdGlvbjpzZWxlY3RlZCcpLmxlbmd0aDtcblx0XHRcdFx0XHRcdHZhciB0b3RhbE9wdGlvbnMgPSAkV2lkZ2V0SWRlbnRpZmllci5maW5kKCdvcHRpb24nKS5sZW5ndGg7XG5cdFx0XHRcdFx0XHRpZiAoc2VsZWN0ZWRPcHRpb25zID09PSB0b3RhbE9wdGlvbnMgLSAxICYmICQoaWR3aWRnZXQgKyAnID4gIG9wdGlvbjpzZWxlY3RlZDpmaXJzdC1jaGlsZCcpLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdFx0XHR2YXIgc2VsZWN0ZWRJdGVtcyA9IFtdO1xuXHRcdFx0XHRcdFx0XHR2YXIgYWxsT3B0aW9ucyA9ICQoaWR3aWRnZXQgKyAnIG9wdGlvbicpO1xuXHRcdFx0XHRcdFx0XHRhbGxPcHRpb25zLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdFx0c2VsZWN0ZWRJdGVtcy5wdXNoKCQodGhpcykudmFsKCkpO1xuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0JFdpZGdldElkZW50aWZpZXIuc2VsZWN0MignZGVzdHJveScpO1xuXHRcdFx0XHRcdFx0XHQkV2lkZ2V0SWRlbnRpZmllci52YWwoc2VsZWN0ZWRJdGVtcykudHJpZ2dlcignY2hhbmdlJyk7XG5cdFx0XHRcdFx0XHRcdCRXaWRnZXRJZGVudGlmaWVyLnNlbGVjdDIoU2VsZWN0Mk9wdGlvbnMpO1xuXHRcdFx0XHRcdFx0XHQkV2lkZ2V0SWRlbnRpZmllci5zZWxlY3QyKCdvcGVuJyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHQkV2lkZ2V0SWRlbnRpZmllci5vbignc2VsZWN0Mjp1bnNlbGVjdCcsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0XHRVbnNlbGVjdGVkSWQgPSBlLnBhcmFtcy5kYXRhLmlkO1xuXHRcdFx0XHRcdGlmIChVbnNlbGVjdGVkSWQgPT09ICdBbGwnKSB7XG5cdFx0XHRcdFx0XHQkKGlkd2lkZ2V0ICsgJyA+IG9wdGlvbicpLnJlbW92ZUF0dHIoJ3NlbGVjdGVkJyk7XG5cdFx0XHRcdFx0XHQkV2lkZ2V0SWRlbnRpZmllci5zZWxlY3QyKCdkZXN0cm95Jyk7XG5cdFx0XHRcdFx0XHQkV2lkZ2V0SWRlbnRpZmllci5zZWxlY3QyKFNlbGVjdDJPcHRpb25zKTtcblx0XHRcdFx0XHRcdCRXaWRnZXRJZGVudGlmaWVyLnNlbGVjdDIoJ29wZW4nKTtcblx0XHRcdFx0XHRcdCQoaWR3aWRnZXQpXG5cdFx0XHRcdFx0XHRcdC52YWwoJycpXG5cdFx0XHRcdFx0XHRcdC50cmlnZ2VyKCdjaGFuZ2UnKTtcblx0XHRcdFx0XHRcdC8vJChpZHdpZGdldCArJyA+IG9wdGlvbicpLmF0dHIoJ3NlbGVjdGVkJywgXCJzZWxlY3RlZFwiKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0JChpZHdpZGdldCArICcgPiBvcHRpb246Zmlyc3QtY2hpbGQnKS5yZW1vdmVBdHRyKCdzZWxlY3RlZCcpO1xuXHRcdFx0XHRcdFx0JFdpZGdldElkZW50aWZpZXIuc2VsZWN0MihTZWxlY3QyT3B0aW9ucyk7XG5cdFx0XHRcdFx0XHQkV2lkZ2V0SWRlbnRpZmllci5zZWxlY3QyKCdvcGVuJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCRXaWRnZXRJZGVudGlmaWVyLnNlbGVjdDIoU2VsZWN0Mk9wdGlvbnMpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChTZWxlY3QyVHlwZSA9PT0gJzQnKSB7XG5cdFx0XHQkV2lkZ2V0SWRlbnRpZmllci5zZWxlY3QyKFNlbGVjdDJPcHRpb25zKTtcblx0XHRcdHZhciBpZHdpZGdldCA9ICcjJyArIFdpZGdldElkO1xuXG5cdFx0XHQkV2lkZ2V0SWRlbnRpZmllci5vbignc2VsZWN0MjpzZWxlY3QnLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmKGUudGFyZ2V0LnNlbGVjdGVkSW5kZXggIT09IDApe1xuXHRcdFx0XHRcdCRXaWRnZXRJZGVudGlmaWVyLnBhcmVudCgpLmFkZENsYXNzKCdTZWxlY3RTeXN0ZW1GaWx0ZXItU2VsZWN0ZWQnKTtcblx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0JFdpZGdldElkZW50aWZpZXIucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ1NlbGVjdFN5c3RlbUZpbHRlci1TZWxlY3RlZCcpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdH1cblx0fSk7XG59O1xuIiwiLyogQ29tcG9uZW50IFNoaWZ0Q29udGFpbmVyICovXHJcbihmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpIHtcclxuXHRsZXQgc2hpZnRUaW1lbGluZVJlc2l6ZVRpbWVyO1xyXG5cdGxldCAkc2hpZnRDb250YWluZXJJZCA9ICQoKTtcclxuXHJcblx0Y29uc3QgY3JlYXRlID0gc2hpZnRDb250YWluZXJJZCA9PiB7XHJcblx0XHQvLyAkKCcuU2hpZnRDYXJkX3RpbWVMaW5lJykuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xyXG5cclxuXHRcdCQoJy5TaGlmdEV4cGFuZGFibGVfY29udGFpbmVyIC5BY3Rpb25zTWVudSAnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG5cclxuXHRcdCRzaGlmdENvbnRhaW5lcklkID0gJChzaGlmdENvbnRhaW5lcklkKTtcclxuXHJcblx0XHRoYXNTY3JvbGxCYXIoKTtcclxuXHRcdGhhbmRsZVNoaWZ0VGFibGUoKTtcclxuXHJcblx0XHQvLyBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuXHRcdC8vIFx0JCgnLlNoaWZ0Q2FyZF90aW1lTGluZScpLmNzcygndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XHJcblx0XHQvLyBcdCQoJy5TaGlmdEV4cGFuZGFibGVfY29udGFpbmVyIC5BY3Rpb25zTWVudSAnKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcclxuXHRcdC8vIH0sIDE1MDApO1xyXG5cclxuXHRcdCQoJy5TaGlmdEV4cGFuZGFibGVfX2Fycm93JylcclxuXHRcdFx0Lm9mZignbW91c2Vkb3duJylcclxuXHRcdFx0Lm9uKCdtb3VzZWRvd24nLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0cmVkcmF3U2hpZnRUaW1lbGluZSgpO1xyXG5cdFx0XHRcdH0sIDE1MDApO1xyXG5cdFx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVTaGlmdFRhYmxlID0gKCkgPT4ge1xyXG5cdFx0JCgnLlNoaWZ0RXhwYW5kYWJsZScpLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsKSB7XHJcblx0XHRcdHZhciAkZWxGbGFnID0gJCh0aGlzKVxyXG5cdFx0XHRcdC5wYXJlbnQoKVxyXG5cdFx0XHRcdC5maW5kKCcuRmxhZ0xpbmUnKTtcclxuXHRcdFx0dmFyICRlbEZsYWdUaW1lID0gJCh0aGlzKVxyXG5cdFx0XHRcdC5wYXJlbnQoKVxyXG5cdFx0XHRcdC5maW5kKCcuRmxhZ0xpbmVfdGltZScpO1xyXG5cdFx0XHR2YXIgJGNvbHVtbkZsYWcgPSAkZWxGbGFnLmRhdGEoJ2NvbHVtbicpO1xyXG5cdFx0XHR2YXIgJG1pbnV0ZXNGbGFnID0gJGVsRmxhZy5kYXRhKCdtaW51dGVzJyk7XHJcblx0XHRcdHZhciAkc2xvdHMgPSAkKHRoaXMpXHJcblx0XHRcdFx0LmNsb3Nlc3QoJy5TaGlmdENvbnRhaW5lcicpXHJcblx0XHRcdFx0LmZpbmQoJy5TaGlmdENvbnRhaW5lcl9oZWFkZXInKVxyXG5cdFx0XHRcdC5maW5kKCcuU2hpZnRDZWxsQ29udGVudCcpO1xyXG5cdFx0XHR2YXIgJHNsb3RXaWR0aCA9IE1hdGgucm91bmQoJHNsb3RzLmVxKDApLndpZHRoKCkpO1xyXG5cdFx0XHR2YXIgbWludXRlc1Bvc2l0aW9uID0gKCRtaW51dGVzRmxhZyAqICRzbG90V2lkdGgpIC8gNjA7XHJcblxyXG5cdFx0XHQvLyBoYW5kbGUgY3VycmVudCB0aW1lIGZsb2cgaG9yaXpvbnRhbCBwb3NpdGlvbmluZ1xyXG5cdFx0XHR2YXIgc2xvdHNQb3NpdGlvbiA9IFtdO1xyXG5cdFx0XHQkc2xvdHMuZWFjaChmdW5jdGlvbihpbmRleCwgZWwpIHtcclxuXHRcdFx0XHRzbG90c1Bvc2l0aW9uLnB1c2goJCh0aGlzKS5wb3NpdGlvbigpLmxlZnQpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0JGVsRmxhZy5jc3MoJ2xlZnQnLCBzbG90c1Bvc2l0aW9uWyRjb2x1bW5GbGFnIC0gMV0gKyBtaW51dGVzUG9zaXRpb24pO1xyXG5cdFx0XHQkZWxGbGFnLmNzcygnZGlzcGxheScsICdibG9jaycpO1xyXG5cdFx0XHRpZiAoJGNvbHVtbkZsYWcgPT09ICRzbG90cy5sZW5ndGgpIHtcclxuXHRcdFx0XHQkZWxGbGFnVGltZS5jc3Moe1xyXG5cdFx0XHRcdFx0cmlnaHQ6ICcxcHgnLFxyXG5cdFx0XHRcdFx0bGVmdDogJ2F1dG8nLFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBoYW5kbGUgY2VsbHMgdGhhdCBtaWdodCBzcGFuIG92ZXIgc2V2ZXJhbCBzbG90c1xyXG5cdFx0XHQkKHRoaXMpXHJcblx0XHRcdFx0LmZpbmQoJy5TaGlmdENhcmQnKVxyXG5cdFx0XHRcdC5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbFJvdykge1xyXG5cdFx0XHRcdFx0dmFyIHJvd0hhc1NwYW5uZWRDZWxsID0gZmFsc2U7XHJcblx0XHRcdFx0XHQkKGVsUm93KVxyXG5cdFx0XHRcdFx0XHQuZmluZCgnLlNoaWZ0Q2VsbENvbnRlbnQnKVxyXG5cdFx0XHRcdFx0XHQuZWFjaChmdW5jdGlvbihpbmRleCwgZWxDZWxsKSB7XHJcblx0XHRcdFx0XHRcdFx0dmFyIGNvbHNwYW4gPSAkKGVsQ2VsbCkuZGF0YSgnY29sc3BhbicpO1xyXG5cdFx0XHRcdFx0XHRcdGlmIChjb2xzcGFuID09PSBzbG90c1Bvc2l0aW9uLmxlbmd0aCB8fCByb3dIYXNTcGFubmVkQ2VsbCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0JChlbENlbGwpLmNzcyh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRmbGV4OiAnMSAxIGF1dG8nLFxyXG5cdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChjb2xzcGFuID4gMSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0cm93SGFzU3Bhbm5lZENlbGwgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdFx0JChlbENlbGwpLmNzcyh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRmbGV4OiAnbm9uZScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiArKHNsb3RzUG9zaXRpb25bY29sc3Bhbl0gLSBzbG90c1Bvc2l0aW9uWzBdKSArICdweCcsXHJcblx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Ly8gaGFuZGxlIGhvcml6b250YWwgc2Nyb2xsIGJlaGF2aW9yXHJcblx0XHRcdGlmIChlbC5zY3JvbGxXaWR0aCA+IGVsLmNsaWVudFdpZHRoKSB7XHJcblx0XHRcdFx0JChlbCkud2lkdGgoZWwuc2Nyb2xsV2lkdGgpO1xyXG5cdFx0XHRcdCQodGhpcylcclxuXHRcdFx0XHRcdC5jbG9zZXN0KCcuU2hpZnRDb250YWluZXInKVxyXG5cdFx0XHRcdFx0LmZpbmQoJy5TaGlmdENvbnRhaW5lcl9oZWFkZXInKVxyXG5cdFx0XHRcdFx0LndpZHRoKGVsLnNjcm9sbFdpZHRoKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQkKGVsKS53aWR0aCgnYXV0bycpO1xyXG5cdFx0XHRcdCQodGhpcylcclxuXHRcdFx0XHRcdC5jbG9zZXN0KCcuU2hpZnRDb250YWluZXInKVxyXG5cdFx0XHRcdFx0LmZpbmQoJy5TaGlmdENvbnRhaW5lcl9oZWFkZXInKVxyXG5cdFx0XHRcdFx0LndpZHRoKCdhdXRvJyk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhc1Njcm9sbEJhciA9ICgpID0+IHtcclxuXHRcdHZhciAkU2Nyb2xsYWJsZURpdiA9ICRzaGlmdENvbnRhaW5lcklkLmZpbmQoJy5TaGlmdEV4cGFuZGFibGVfY29udGFpbmVyJyk7XHJcblx0XHRpZiAoJHNoaWZ0Q29udGFpbmVySWQuZmluZCgnLlNoaWZ0RXhwYW5kYWJsZV9jb250YWluZXInKS5sZW5ndGggPiAwKSB7XHJcblx0XHRcdGlmICgkU2Nyb2xsYWJsZURpdi5nZXQoMCkuc2Nyb2xsSGVpZ2h0ID4gJFNjcm9sbGFibGVEaXYuaGVpZ2h0KCkpIHtcclxuXHRcdFx0XHR2YXIgJGxhc3RDZWxsID0gJHNoaWZ0Q29udGFpbmVySWQuZmluZCgnLklzVGltZXI6bGFzdC1jaGlsZCcpO1xyXG5cdFx0XHRcdCRsYXN0Q2VsbC5jc3MoJ3BhZGRpbmctcmlnaHQnLCAnN3B4Jyk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRjb25zdCByZWRyYXdTaGlmdFRpbWVsaW5lID0gKCkgPT4ge1xyXG5cdFx0Y2xlYXJUaW1lb3V0KHNoaWZ0VGltZWxpbmVSZXNpemVUaW1lcik7XHJcblx0XHRzaGlmdFRpbWVsaW5lUmVzaXplVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRoYXNTY3JvbGxCYXIoKTtcclxuXHRcdFx0aGFuZGxlU2hpZnRUYWJsZSgpO1xyXG5cdFx0fSwgNDAwKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBjaGVja1Njcm9sbCA9ICgpID0+IHtcclxuXHRcdHZhciBoQ29udGVudCA9ICQoJy5Db250ZW50JykuaGVpZ2h0KCk7XHJcblx0XHR2YXIgaFdpbmRvdyA9ICQod2luZG93KS5oZWlnaHQoKTtcclxuXHJcblx0XHRpZiAoaENvbnRlbnQgPiBoV2luZG93KSByZWRyYXdTaGlmdFRpbWVsaW5lKCk7XHJcblx0fTtcclxuXHJcblx0U2FwcGhpcmVXaWRnZXRzLlNoaWZ0Q29udGFpbmVyID0ge1xyXG5cdFx0Y3JlYXRlLFxyXG5cdFx0Y2hlY2tTY3JvbGwsXHJcblx0XHRyZWRyYXdTaGlmdFRpbWVsaW5lLFxyXG5cdH07XHJcbn0pKGpRdWVyeSwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKTtcclxuXHJcbiQod2luZG93KVxyXG5cdC5vZmYoJ3Jlc2l6ZS5HZW5lcmljR2FsbGVyeScpXHJcblx0Lm9uKCdyZXNpemUuR2VuZXJpY0dhbGxlcnknLCBmdW5jdGlvbigpIHtcclxuXHRcdCQoJy5TaGlmdENhcmRfdGltZUxpbmUnKS5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XHJcblx0XHQkKCcuU2hpZnRFeHBhbmRhYmxlX2NvbnRhaW5lciAuQWN0aW9uc01lbnUnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG5cclxuXHRcdFNhcHBoaXJlV2lkZ2V0cy5TaGlmdENvbnRhaW5lci5yZWRyYXdTaGlmdFRpbWVsaW5lKCk7XHJcblxyXG5cdFx0b3NBamF4QmFja2VuZCAmJiBvc0FqYXhCYWNrZW5kLkJpbmRBZnRlckFqYXhSZXF1ZXN0KFNhcHBoaXJlV2lkZ2V0cy5TaGlmdENvbnRhaW5lci5yZWRyYXdTaGlmdFRpbWVsaW5lKTtcclxuXHJcblx0XHRzZXRUaW1lb3V0KFNhcHBoaXJlV2lkZ2V0cy5TaGlmdENvbnRhaW5lci5jaGVja1Njcm9sbCwgMTAwMCk7XHJcblxyXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0JCgnLlNoaWZ0Q2FyZF90aW1lTGluZScpLmNzcygndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XHJcblx0XHRcdCQoJy5TaGlmdEV4cGFuZGFibGVfY29udGFpbmVyIC5BY3Rpb25zTWVudScpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xyXG5cdFx0fSwgMTUwMCk7XHJcblx0fSk7XHJcblxyXG4kKHdpbmRvdykubG9hZChmdW5jdGlvbigpIHtcclxuXHRpZiAoISEkKCcuU2hpZnRDb250YWluZXInKS5sZW5ndGgpIHtcclxuXHRcdCQoJy5TaGlmdENhcmRfdGltZUxpbmUnKS5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XHJcblx0XHQkKCcuU2hpZnRFeHBhbmRhYmxlX2NvbnRhaW5lciAuQWN0aW9uc01lbnUnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG5cclxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFNhcHBoaXJlV2lkZ2V0cy5TaGlmdENvbnRhaW5lci5yZWRyYXdTaGlmdFRpbWVsaW5lKCk7XHJcblx0XHR9LCA0MDApO1xyXG5cclxuXHRcdHNldFRpbWVvdXQoU2FwcGhpcmVXaWRnZXRzLlNoaWZ0Q29udGFpbmVyLmNoZWNrU2Nyb2xsLCA1MDApO1xyXG5cclxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQoJy5TaGlmdENhcmRfdGltZUxpbmUnKS5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xyXG5cdFx0XHQkKCcuU2hpZnRFeHBhbmRhYmxlX2NvbnRhaW5lciAuQWN0aW9uc01lbnUnKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcclxuXHRcdH0sIDYwMCk7XHJcblxyXG5cdFx0JCgnLm5hdmlnYXRpb24tY29udHJvbC1pdGVtJylcclxuXHRcdFx0Lm9mZignY2xpY2snKVxyXG5cdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0JCgnLlNoaWZ0Q2FyZF90aW1lTGluZScpLmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcclxuXHRcdFx0XHQkKCcuU2hpZnRFeHBhbmRhYmxlX2NvbnRhaW5lciAuQWN0aW9uc01lbnUnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHQvL1ZlcmlmeSB0aGUgc2Nyb2xsIGlmIHRvb2x0aXAgb3BlbmVkXHJcblx0XHQkKCcuU2hpZnRFeHBhbmRhYmxlX2NvbnRhaW5lcicpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0aWYgKCQoJy50b29sdGlwc3Rlci1iYXNlJykuaXMoJzp2aXNpYmxlJykpIHtcclxuXHRcdFx0XHQkKCcudG9vbHRpcHN0ZXItYmFzZScpLmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0b3NBamF4QmFja2VuZC5CaW5kQWZ0ZXJBamF4UmVxdWVzdChmdW5jdGlvbigpIHtcclxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRTYXBwaGlyZVdpZGdldHMuU2hpZnRDb250YWluZXIucmVkcmF3U2hpZnRUaW1lbGluZSgpO1xyXG5cdFx0XHR9LCA0MDApO1xyXG5cclxuXHRcdFx0c2V0VGltZW91dChTYXBwaGlyZVdpZGdldHMuU2hpZnRDb250YWluZXIuY2hlY2tTY3JvbGwsIDUwMCk7XHJcblxyXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdCQoJy5TaGlmdENhcmRfdGltZUxpbmUnKS5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xyXG5cdFx0XHRcdCQoJy5TaGlmdEV4cGFuZGFibGVfY29udGFpbmVyIC5BY3Rpb25zTWVudScpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xyXG5cdFx0XHR9LCA2MDApO1xyXG5cclxuXHRcdFx0Ly8gU2FwcGhpcmVXaWRnZXRzLlNoaWZ0Q29udGFpbmVyLnJlZHJhd1NoaWZ0VGltZWxpbmU7XHJcblx0XHR9KTtcclxuXHR9XHJcbn0pO1xyXG4iLCIvKiBDb21wb25lbnQgU2hpZnRUYWJsZSAqL1xyXG5TYXBwaGlyZVdpZGdldHMuU2hpZnRUYWJsZSA9IHdpZGdldElkID0+IHtcclxuXHQkKGRvY3VtZW50KS5yZWFkeSgoKSA9PiB7XHJcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0Y29uc3QgJHNoaWZ0VGFibGUgPSAkKGAjJHt3aWRnZXRJZH1gKTtcclxuXHRcdFx0Y29uc3QgJGhlYWRlckNlbGxMaXN0ID0gJHNoaWZ0VGFibGUuZmluZCgnLlNoaWZ0VGFibGVfX0hlYWRlckxhYmVscyAuU2hpZnRUYWJsZUNlbGwnKTtcclxuXHRcdFx0Y29uc3QgJGhvdXJMaW5lID0gJHNoaWZ0VGFibGUuZmluZCgnLkhvdXJMaW5lJyk7XHJcblxyXG5cdFx0XHRjb25zdCBjb2x1bW5MaW5lID0gJGhvdXJMaW5lLmRhdGEoJ2NvbHVtbicpO1xyXG5cdFx0XHRjb25zdCBtaW51dGVzTGluZSA9ICRob3VyTGluZS5kYXRhKCdtaW51dGVzJyk7XHJcblxyXG5cdFx0XHRjb25zdCBjZWxsV2lkdGggPSAkaGVhZGVyQ2VsbExpc3QuZXEoMCkud2lkdGgoKTtcclxuXHRcdFx0Y29uc3QgbWludXRlc1Bvc2l0aW9uID0gKGNlbGxXaWR0aCAvIDYwKSAqIG1pbnV0ZXNMaW5lO1xyXG5cclxuXHRcdFx0Ly8gSGFuZGxlIGN1cnJlbnQgaG91ciBsaW5lIGhvcml6b250YWwgcG9zaXRpb25pbmdcclxuXHRcdFx0Y29uc3QgY2VsbFBvc2l0aW9uID0gW107XHJcblxyXG5cdFx0XHQkaGVhZGVyQ2VsbExpc3QuZWFjaChmdW5jdGlvbihpbmRleCwgZWwpIHtcclxuXHRcdFx0XHRjZWxsUG9zaXRpb24ucHVzaCgkKHRoaXMpLnBvc2l0aW9uKCkubGVmdCk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0JGhvdXJMaW5lLmNzcygnbGVmdCcsIGNlbGxQb3NpdGlvbltjb2x1bW5MaW5lIC0gMV0gKyBtaW51dGVzUG9zaXRpb24pO1xyXG5cdFx0XHQkaG91ckxpbmUuY3NzKCdkaXNwbGF5JywgJ2ZsZXgnKTtcclxuXHRcdH0sIDUwMCk7XHJcblx0fSk7XHJcbn07XHJcbiIsIi8qIENvbXBvbmVudCBTaGlmdFRhYmxlQ2FyZCAqL1xyXG5TYXBwaGlyZVdpZGdldHMuU2hpZnRUYWJsZUNhcmQgPSB3aWRnZXRJZCA9PiB7XHJcblx0Y29uc3QgJGNvbXBvbmVudCA9ICQoYCMke3dpZGdldElkfWApO1xyXG5cdGNvbnN0ICRhY3Rpb25zID0gJGNvbXBvbmVudC5maW5kKCcuTW9yZUFjdGlvbnMnKTtcclxuXHRjb25zdCBoYXNBY3Rpb25zID0gJGFjdGlvbnMubGVuZ3RoID4gMDtcclxuXHJcblx0aWYgKGhhc0FjdGlvbnMpIHtcclxuXHRcdCRhY3Rpb25zLm9uKCdjbGljaycsIGUgPT4ge1xyXG5cdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuXHRcdFx0JCgnLlNoaWZ0VGFibGVDYXJkJykucmVtb3ZlQ2xhc3MoJ1NoaWZ0VGFibGVDYXJkLS1zZWxlY3RlZCcpO1xyXG5cdFx0XHQkY29tcG9uZW50LmFkZENsYXNzKCdTaGlmdFRhYmxlQ2FyZC0tc2VsZWN0ZWQnKTtcclxuXHJcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQ2xpY2tPdXRzaWRlKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGNvbnN0IG9uQ2xpY2tPdXRzaWRlID0gZSA9PiB7XHJcblx0XHRcdGNvbnN0ICR0YXJnZXQgPSAkKGUudGFyZ2V0KTtcclxuXHJcblx0XHRcdGlmICghZS50YXJnZXQuY2xhc3NOYW1lLmluY2x1ZGVzKCRjb21wb25lbnQpICYmICEkdGFyZ2V0LnBhcmVudHMoJGNvbXBvbmVudCkuaXMoJGNvbXBvbmVudCkpIHtcclxuXHRcdFx0XHQkY29tcG9uZW50LnJlbW92ZUNsYXNzKCdTaGlmdFRhYmxlQ2FyZC0tc2VsZWN0ZWQnKTtcclxuXHJcblx0XHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25DbGlja091dHNpZGUpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdH1cclxufTtcclxuIiwiU2FwcGhpcmVXaWRnZXRzLlNoaWZ0VGFibGVDYXJkUHJvZ3Jlc3MgPSBjb25maWcgPT4ge1xuXHRjb25zdCBERUZBVUxUX1BBRERJTkcgPSAwO1xuXHRjb25zdCBERUZBVUxUX0NBUkRfSEVJR0hUID0gNTY7XG5cblx0Y29uc3Qgc2V0VGFibGVDYXJkUHJvZ3Jlc3MgPSAoKSA9PiB7XG5cdFx0Y29uc3QgY2FyZFByb2dyZXNJRCA9IGNvbmZpZy53aWRnZXRJZDtcblx0XHRjb25zdCBzdGFydENvbHVtbiA9IGNvbmZpZy5zdGFydENvbHVtbjtcblx0XHRjb25zdCBlbmRDb2x1bW4gPSBjb25maWcuZW5kQ29sdW1uO1xuXHRcdGNvbnN0IGluaXRpYWxNaW51dGVzID0gY29uZmlnLmluaXRpYWxNaW51dGVzO1xuXHRcdGNvbnN0IGJlZ2luc0luY29tcGxldGUgPSBjb25maWcuYmVnaW5zSW5jb21wbGV0ZTtcblx0XHRjb25zdCBlbmRzSW5jb21wbGV0ZSA9IGNvbmZpZy5lbmRzSW5jb21wbGV0ZTtcblxuXHRcdGNvbnN0ICRjYXJkUHJvZ3Jlc3MgPSAkKCcjJyArIGNhcmRQcm9ncmVzSUQpO1xuXHRcdGNvbnN0ICRzaGlmdFRhYmxlID0gJGNhcmRQcm9ncmVzcy5jbG9zZXN0KCcuU2hpZnRUYWJsZScpO1xuXHRcdGNvbnN0ICR0YWJsZUNlbGxMaXN0ID0gJHNoaWZ0VGFibGUuZmluZCgnLlNoaWZ0VGFibGVfX0NvbnRlbnQgLlNoaWZ0VGFibGVDZWxsJyk7XG5cdFx0Y29uc3QgJHRhYmxlUm93Q29udGVudCA9ICRjYXJkUHJvZ3Jlc3MuY2xvc2VzdCgnLlNoaWZ0VGFibGVSb3dfX0NvbnRlbnQnKTtcblx0XHRjb25zdCAkdGFibGVDYXJkID0gJHRhYmxlUm93Q29udGVudC5maW5kKCcuU2hpZnRUYWJsZUNhcmQnKTtcblx0XHRjb25zdCAkY2FyZFByb2dyZXNzTGlzdCA9ICR0YWJsZVJvd0NvbnRlbnQuZmluZCgnLlNoaWZ0VGFibGVDYXJkUHJvZ3Jlc3MnKTtcblx0XHRjb25zdCAkcHJvZ3Jlc3NCYXJMaXN0ID0gJGNhcmRQcm9ncmVzcy5maW5kKCcuUHJvZ3Jlc3NCYXJXcmFwJyk7XG5cdFx0Y29uc3QgJGFjdGlvbnMgPSAkY2FyZFByb2dyZXNzLmZpbmQoJy5Nb3JlQWN0aW9ucycpO1xuXG5cdFx0Y29uc3QgY2FyZHNUb3RhbCA9ICR0YWJsZUNhcmQubGVuZ3RoO1xuXHRcdGNvbnN0IHRpbWVTbG90V2lkdGggPSAkdGFibGVDZWxsTGlzdFsxXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcblx0XHRjb25zdCBjb2xGaWxsID0gcGFyc2VJbnQoZW5kQ29sdW1uKSAtIHBhcnNlSW50KHN0YXJ0Q29sdW1uKSArIDE7XG5cdFx0Y29uc3QgbWludXRlVmFsdWVXaWR0aCA9IHRpbWVTbG90V2lkdGggLyA2MDtcblx0XHRjb25zdCBoYXNBY3Rpb25zID0gJGFjdGlvbnMubGVuZ3RoID4gMDtcblxuXHRcdGxldCB0b3RhbExlZnQgPSBiZWdpbnNJbmNvbXBsZXRlID8gMCA6IChpbml0aWFsTWludXRlcyAqIG1pbnV0ZVZhbHVlV2lkdGgpO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDE7IGkgPCBwYXJzZUludChzdGFydENvbHVtbik7IGkrKykge1xuXHRcdFx0dG90YWxMZWZ0ICs9ICR0YWJsZUNlbGxMaXN0W2ldLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuXHRcdH1cblxuXHRcdGxldCByb3VuZFdpZHRoID0gTWF0aC5yb3VuZCgodGltZVNsb3RXaWR0aCArIE51bWJlci5FUFNJTE9OKSAqIDEwMCkgLyAxMDA7XG5cdFx0Y29uc3QgcGFkZGluZ09mZnNldCA9IERFRkFVTFRfUEFERElORyAqIDI7XG5cdFx0Y29uc3QgbmV3V2lkdGggPSBwYXJzZUZsb2F0KChjb2xGaWxsICogcm91bmRXaWR0aCAtIHBhZGRpbmdPZmZzZXQpIC0gKGJlZ2luc0luY29tcGxldGUgPyAwIDogKGVuZHNJbmNvbXBsZXRlID8gKGluaXRpYWxNaW51dGVzICogbWludXRlVmFsdWVXaWR0aCkgOiAwKSkpO1xuXHRcdGNvbnN0IGRpcmVjdGlvbiA9ICQoJy5QYWdlJykuaGFzQ2xhc3MoJ0FSJykgfHwgJCgnLlBhZ2UnKS5oYXNDbGFzcygnRkEnKSA/ICdyaWdodCcgOiAnbGVmdCc7XG5cblx0XHQkY2FyZFByb2dyZXNzLmNzcygnd2lkdGgnLCBgJHtuZXdXaWR0aH1weGApO1xuXHRcdCRjYXJkUHJvZ3Jlc3MuY3NzKCdtYXgtd2lkdGgnLCAndW5zZXQnKTtcblx0XHQkY2FyZFByb2dyZXNzLmNzcyhkaXJlY3Rpb24sIGAkeyh0b3RhbExlZnQgKz0gREVGQVVMVF9QQURESU5HKX1weGApO1xuXG5cdFx0aWYgKGNhcmRzVG90YWwgPiAwKSB7XG5cdFx0XHRsZXQgY291bnQgPSAwO1xuXG5cdFx0XHQkdGFibGVDYXJkLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGNvbnN0ICR0aGlzID0gJCh0aGlzKTtcblx0XHRcdFx0Y29uc3QgaXNPdmVybGFwZWQgPSBjaGVja0Zvck92ZXJsYXAoJGNhcmRQcm9ncmVzc1swXSwgJHRoaXNbMF0pO1xuXG5cdFx0XHRcdGlmIChpc092ZXJsYXBlZCA9PT0gdHJ1ZSAmJiBjb3VudCA8ICRjYXJkUHJvZ3Jlc3NMaXN0Lmxlbmd0aCkge1xuXHRcdFx0XHRcdCRjYXJkUHJvZ3Jlc3MuY3NzKCd0b3AnLCAkdGhpc1swXS5vZmZzZXRUb3AgKyAkY2FyZFByb2dyZXNzLmhlaWdodCgpKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvdW50ID0gY291bnQrKztcblx0XHRcdH0pO1xuXG5cdFx0XHQkY2FyZFByb2dyZXNzTGlzdC5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRjb25zdCAkdGhpcyA9ICQodGhpcyk7XG5cblx0XHRcdFx0Y29uc3QgaGVscGVyID0gaGVscGVyT2JqKCR0aGlzLCAkY2FyZFByb2dyZXNzLCAkY2FyZFByb2dyZXNzTGlzdCk7XG5cblx0XHRcdFx0aWYgKGhlbHBlci5pc092ZXJsYXBlZCkge1xuXHRcdFx0XHRcdCRjYXJkUHJvZ3Jlc3MuY3NzKCd0b3AnLCAkdGhpc1swXS5vZmZzZXRUb3AgKyAxMzApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCRjYXJkUHJvZ3Jlc3MuY3NzKCd0b3AnLCAkdGFibGVSb3dDb250ZW50LmhlaWdodCgpIC0gREVGQVVMVF9QQURESU5HKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdGNvbnN0IG9mZnNldCA9IDQgKyBERUZBVUxUX0NBUkRfSEVJR0hUICsgREVGQVVMVF9QQURESU5HICogMjtcblxuXHRcdFx0JHRhYmxlUm93Q29udGVudC5oZWlnaHQoJGNhcmRQcm9ncmVzc0xpc3QubGFzdCgpLnBvc2l0aW9uKCkudG9wICsgb2Zmc2V0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JGNhcmRQcm9ncmVzc0xpc3QuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdFx0Y29uc3QgJHRoaXMgPSAkKHRoaXMpO1xuXG5cdFx0XHRcdGNvbnN0IGhlbHBlciA9IGhlbHBlck9iaigkdGhpcywgJGNhcmRQcm9ncmVzcywgJGNhcmRQcm9ncmVzc0xpc3QpO1xuXG5cdFx0XHRcdGlmIChoZWxwZXIuaXNPdmVybGFwZWQpIHtcblx0XHRcdFx0XHRjb25zdCBvZmZzZXQgPSBERUZBVUxUX0NBUkRfSEVJR0hUICsgREVGQVVMVF9QQURESU5HICogMjtcblxuXHRcdFx0XHRcdCRjYXJkUHJvZ3Jlc3MuY3NzKCd0b3AnLCAkY2FyZFByb2dyZXNzWzBdLm9mZnNldFRvcCArIG9mZnNldCArICdweCcpO1xuXHRcdFx0XHRcdGhlbHBlci4kc2hpZnRDYXJkLmhlaWdodChoZWxwZXIuJHNoaWZ0Q2FyZC5oZWlnaHQoKSArICR0aGlzWzBdLm9mZnNldEhlaWdodCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0aWYgKHRpbWVTbG90V2lkdGggIT09ICR0YWJsZUNlbGxMaXN0WzFdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoKSB7XG5cdFx0XHRcdHNldFRhYmxlQ2FyZFByb2dyZXNzKGNvbmZpZyk7XG5cdFx0XHR9XG5cdFx0fSwgNTAwKTtcblxuXHRcdGlmIChoYXNBY3Rpb25zKSB7XG5cdFx0XHQkYWN0aW9ucy5vbignY2xpY2snLCBlID0+IHtcblx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdFx0XHQkY2FyZFByb2dyZXNzLmFkZENsYXNzKCdTaGlmdFRhYmxlQ2FyZFByb2dyZXNzLS1zZWxlY3RlZCcpO1xuXG5cdFx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQ2xpY2tPdXRzaWRlKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRjb25zdCBvbkNsaWNrT3V0c2lkZSA9IGUgPT4ge1xuXHRcdFx0XHRjb25zdCAkdGFyZ2V0ID0gJChlLnRhcmdldCk7XG5cblx0XHRcdFx0aWYgKCFlLnRhcmdldC5jbGFzc05hbWUuaW5jbHVkZXMoJGNhcmRQcm9ncmVzcykgJiYgISR0YXJnZXQucGFyZW50cygkY2FyZFByb2dyZXNzKS5pcygkY2FyZFByb2dyZXNzKSkge1xuXHRcdFx0XHRcdCRjYXJkUHJvZ3Jlc3MucmVtb3ZlQ2xhc3MoJ1NoaWZ0VGFibGVDYXJkUHJvZ3Jlc3MtLXNlbGVjdGVkJyk7XG5cblx0XHRcdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkNsaWNrT3V0c2lkZSk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0LyokcHJvZ3Jlc3NCYXJMaXN0LmVhY2goZnVuY3Rpb24oaW5kZXgpIHtcblx0XHRcdGNvbnN0IGJlZ2luc2xvdCA9ICQodGhpcykuZGF0YSgnYmVnaW5zbG90Jyk7XG5cdFx0XHRjb25zdCBiZWdpbm1pbnV0ZSA9ICQodGhpcykuZGF0YSgnYmVnaW5taW51dGUnKTtcblx0XHRcdGNvbnN0IGVuZHNsb3QgPSAkKHRoaXMpLmRhdGEoJ2VuZHNsb3QnKTtcblx0XHRcdGNvbnN0IGVuZG1pbnV0ZSA9ICQodGhpcykuZGF0YSgnZW5kbWludXRlJyk7XG5cdFx0XHRjb25zdCBhY3Rpb25zV2lkdGggPSA1NjtcblxuXHRcdFx0Y29uc3QgcHJvZ3Jlc3NCYXJNaW51dGVzID0gKGVuZHNsb3QgLSBiZWdpbnNsb3QpICogNjAgKyBlbmRtaW51dGUgLSBiZWdpbm1pbnV0ZTtcblx0XHRcdGNvbnN0IHByb2dyZXNzZW5kV2l0aFBlciA9IHByb2dyZXNzQmFyTWludXRlcyAqIG1pbnV0ZVZhbHVlV2lkdGg7XG5cblx0XHRcdGNvbnN0ICRwcm9ncmVzc1RvdGFsID0gJCh0aGlzKS5maW5kKCcuUHJvZ3Jlc3NCYXJfX2FuaW1hdGlvbicpO1xuXG5cdFx0XHQvLyQodGhpcykuY3NzKCdsZWZ0JywgKChiZWdpbnNsb3QgLSAxKSAqIDYwICsgYmVnaW5taW51dGUpICogbWludXRlVmFsdWVXaWR0aCArICdweCcpO1xuXHRcdFx0JHByb2dyZXNzVG90YWwuY3NzKCd3aWR0aCcsIHByb2dyZXNzZW5kV2l0aFBlciAtIGFjdGlvbnNXaWR0aCArICdweCcpO1xuXHRcdH0pOyovXG5cdH07XG5cblx0Y29uc3QgY2hlY2tGb3JPdmVybGFwID0gKGVsMSwgZWwyKSA9PiB7XG5cdFx0Y29uc3QgYm91bmRzMSA9IGVsMS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRjb25zdCBib3VuZHMyID0gZWwyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG5cdFx0Y29uc3QgZmlyc3RJc3RMZWZ0bW9zdCA9IGJvdW5kczEubGVmdCA8PSBib3VuZHMyLmxlZnQ7XG5cdFx0Y29uc3QgbGVmdGVzdCA9IGZpcnN0SXN0TGVmdG1vc3QgPyBib3VuZHMxIDogYm91bmRzMjtcblx0XHRjb25zdCByaWdodGVzdCA9IGZpcnN0SXN0TGVmdG1vc3QgPyBib3VuZHMyIDogYm91bmRzMTtcblxuXHRcdC8vIFJlcGxhY2UgPiB0byB0byA+PSBpZiBib3JkZXIgb3ZlcmxhcCBzaG91bGQgY291bnRcblx0XHRpZiAobGVmdGVzdC5yaWdodCA+IHJpZ2h0ZXN0LmxlZnQpIHtcblx0XHRcdGNvbnN0IGZpcnN0SXNUb3Btb3N0ID0gYm91bmRzMS50b3AgPD0gYm91bmRzMi50b3A7XG5cdFx0XHRjb25zdCB0b3Blc3QgPSBmaXJzdElzVG9wbW9zdCA/IGJvdW5kczEgOiBib3VuZHMyO1xuXHRcdFx0Y29uc3QgYm90dG9tZXN0ID0gZmlyc3RJc1RvcG1vc3QgPyBib3VuZHMyIDogYm91bmRzMTtcblxuXHRcdFx0Ly8gUmVwbGFjZSA+IHRvID49IGlmIGJvcmRlciBzaG91bGQgY291bnRcblx0XHRcdHJldHVybiB0b3Blc3QuYm90dG9tID4gYm90dG9tZXN0LnRvcDtcblx0XHR9IGVsc2UgcmV0dXJuIGZhbHNlO1xuXHR9O1xuXG5cdGNvbnN0IGhlbHBlck9iaiA9ICgkdGhpcywgJGNhcmRQcm9ncmVzcywgJGNhcmRQcm9ncmVzc0xpc3QpID0+IHtcblx0XHRjb25zdCAkc2hpZnRDYXJkID0gJHRoaXMuY2xvc2VzdCgnLlNoaWZ0VGFibGVSb3dfX0NvbnRlbnQnKTtcblx0XHRsZXQgaXNPdmVybGFwZWQgPSBjaGVja0Zvck92ZXJsYXAoJGNhcmRQcm9ncmVzc1swXSwgJHRoaXNbMF0pO1xuXHRcdGNvbnN0IGNyZWF0ZWRJZCA9ICRjYXJkUHJvZ3Jlc3MuYXR0cignaWQnKTtcblx0XHRjb25zdCBsb29wZWRJZCA9ICR0aGlzLmF0dHIoJ2lkJyk7XG5cdFx0Y29uc3QgJGZpcnN0U2xvdENyZWF0ZWQgPSAkY2FyZFByb2dyZXNzTGlzdFswXTtcblxuXHRcdGlzT3ZlcmxhcGVkID0gaXNPdmVybGFwZWQgPT09IHRydWUgJiYgY3JlYXRlZElkICE9IGxvb3BlZElkICYmIGNyZWF0ZWRJZCAhPSAkZmlyc3RTbG90Q3JlYXRlZC5pZDtcblxuXHRcdHJldHVybiB7ICRzaGlmdENhcmQsIGNyZWF0ZWRJZCwgbG9vcGVkSWQsICRmaXJzdFNsb3RDcmVhdGVkLCBpc092ZXJsYXBlZCB9O1xuXHR9O1xuXG5cdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXHRcdHNldFRhYmxlQ2FyZFByb2dyZXNzKGNvbmZpZyk7XG5cdH0pO1xuXG5cdCQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XG5cdFx0aWYgKHdpbmRvd1tjb25maWcud2lkZ2V0SWRdKSB7XG5cdFx0XHRjbGVhclRpbWVvdXQod2luZG93W2NvbmZpZy53aWRnZXRJZF0ucmVzaXplZEZpbmlzaGVkKTtcblx0XHRcdHdpbmRvd1tjb25maWcud2lkZ2V0SWRdLnJlc2l6ZWRGaW5pc2hlZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHNldFRhYmxlQ2FyZFByb2dyZXNzKGNvbmZpZyk7XG5cdFx0XHR9LCAyNTApO1xuXHRcdH1cblx0fSk7XG59O1xuIiwiLyogQ29tcG9uZW50IFNoaWZ0VGFibGVDYXJkSG92ZXIgKi9cclxuU2FwcGhpcmVXaWRnZXRzLlNoaWZ0VGFibGVDYXJkSG92ZXIgPSB3aWRnZXRJZCA9PiB7XHJcblx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblx0XHRjb25zdCAkY2FyZCA9ICQoYCMke3dpZGdldElkfWApO1xyXG5cdFx0Y29uc3QgJGNhcmRDb250ZW50ID0gJGNhcmQuZmluZCgnLlNoaWZ0VGFibGVDYXJkSG92ZXJfX0NvbnRlbnQnKTtcclxuXHJcblx0XHQkY2FyZENvbnRlbnQub24oJ2NsaWNrJywgZSA9PiB7XHJcblx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG5cdFx0XHQkY2FyZC5hZGRDbGFzcygnU2hpZnRUYWJsZUNhcmRIb3Zlci0tc2VsZWN0ZWQnKTtcclxuXHJcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQ2xpY2tPdXRzaWRlKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGNvbnN0IG9uQ2xpY2tPdXRzaWRlID0gZSA9PiB7XHJcblx0XHRcdGNvbnN0ICR0YXJnZXQgPSAkKGUudGFyZ2V0KTtcclxuXHJcblx0XHRcdGlmICghZS50YXJnZXQuY2xhc3NOYW1lLmluY2x1ZGVzKCRjYXJkKSAmJiAhJHRhcmdldC5wYXJlbnRzKCRjYXJkKS5pcygkY2FyZCkpIHtcclxuXHRcdFx0XHQkY2FyZC5yZW1vdmVDbGFzcygnU2hpZnRUYWJsZUNhcmRIb3Zlci0tc2VsZWN0ZWQnKTtcclxuXHJcblx0XHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25DbGlja091dHNpZGUpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdH0pO1xyXG59O1xyXG4iLCIvKiBDb21wb25lbnQgU2lkZU1lbnVTdHJ1Y3R1cmUgKi9cclxuKGZ1bmN0aW9uKCQsIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKSB7XHJcblx0Y2xhc3MgU2lkZU1lbnUge1xyXG5cdFx0Y29uc3RydWN0b3IoY29uZmlnKSB7XHJcblx0XHRcdHRoaXMub3B0aW9ucyA9IHtcclxuXHRcdFx0XHQuLi5jb25maWcsXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHR0aGlzLm9uQ29tcG9uZW50SW5pdCgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHNldE1haW5NZW51V2lkdGgoKSB7XHJcblx0XHRcdCQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHtcclxuXHRcdFx0XHRjb25zdCAkc2lkZUJhcklmcmFtZSA9ICQoJy5MYXlvdXRCYXNlLWlmcmFtZXNpZGViYXIubm90RXhwYW5kYWJsZScpO1xyXG5cclxuXHRcdFx0XHRpZiAoJHNpZGVCYXJJZnJhbWUubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRjb25zdCAkbWFpbk1lbnUgPSAkKCcuTGF5b3V0QmFzZS1NYWluTWVudScpO1xyXG5cdFx0XHRcdFx0JG1haW5NZW51LmNzcyh7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiAnY2FsYygxMDAlIC0gMjYycHgpJyxcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0b3BlbkNsb3NlTWVudSh0b09wZW4pIHtcclxuXHRcdFx0aWYgKHRvT3Blbikge1xyXG5cdFx0XHRcdHRoaXMuJGNvbXBvbmVudC5hZGRDbGFzcygnU2lkZU1lbnUtLW9wZW4nKTtcclxuXHJcblx0XHRcdFx0JCgnLkxheW91dEJhc2UtaWZyYW1lc2lkZWJhcicpLmNzcyh7XHJcblx0XHRcdFx0XHR6SW5kZXg6IDAsXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy4kY29tcG9uZW50LnJlbW92ZUNsYXNzKCdTaWRlTWVudS0tb3BlbicpO1xyXG5cclxuXHRcdFx0XHQkKCcuTGF5b3V0QmFzZS1pZnJhbWVzaWRlYmFyJykuY3NzKHtcclxuXHRcdFx0XHRcdHpJbmRleDogNzAsXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHR3aW5kb3dDbGljaygkY29tcG9uZW50KSB7XHJcblx0XHRcdCQod2luZG93KVxyXG5cdFx0XHRcdC5vZmYoJ2NsaWNrLlNpZGVNZW51U3RydWN0dXJlJylcclxuXHRcdFx0XHQub24oJ2NsaWNrLlNpZGVNZW51U3RydWN0dXJlJywgZXZlbnQgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc3QgaXNNZW51SXRlbSA9IGV2ZW50LnRhcmdldC5vZmZzZXRQYXJlbnQgJiYgJChldmVudC50YXJnZXQub2Zmc2V0UGFyZW50KS5oYXNDbGFzcygnTWVudUl0ZW0nKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoIWlzTWVudUl0ZW0pIHtcclxuXHRcdFx0XHRcdFx0JGNvbXBvbmVudC5maW5kKCcuU2lkZU1lbnVfX01lbnVJdGVtcyAuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdFx0XHQkY29tcG9uZW50LmZpbmQoJy5TaWRlTWVudV9fTWVudUl0ZW1zIC5zaG93JykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcclxuXHJcblx0XHRcdFx0XHRcdCQod2luZG93KS5vZmYoJ2NsaWNrLlNpZGVNZW51U3RydWN0dXJlJyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0b25Db21wb25lbnRJbml0KCkge1xyXG5cdFx0XHR0aGlzLnNldE1haW5NZW51V2lkdGgoKTtcclxuXHJcblx0XHRcdHRoaXMuJGNvbXBvbmVudCA9ICQoYCMke3RoaXMub3B0aW9ucy53aWRnZXRJZH1gKTtcclxuXHRcdFx0dGhpcy4kdHJpZ2dlciA9IHRoaXMuJGNvbXBvbmVudC5maW5kKCcuU2lkZU1lbnVfX1RyaWdnZXInKTtcclxuXHRcdFx0dGhpcy4kc2hpZWxkID0gdGhpcy4kY29tcG9uZW50LmZpbmQoJy5TaWRlTWVudV9fU2hpZWxkJyk7XHJcblx0XHRcdHRoaXMuJGNsb3NlQnV0dG9uID0gdGhpcy4kY29tcG9uZW50LmZpbmQoJy5TaWRlTWVudV9fTWVudUNsb3NlJyk7XHJcblx0XHRcdHRoaXMuJHRhYkl0ZW0gPSB0aGlzLiRjb21wb25lbnQuZmluZCgnLlNpZGVNZW51X19UYWJJdGVtcyAuTWVudUl0ZW0nKTtcclxuXHRcdFx0dGhpcy4kbWVudUl0ZW0gPSB0aGlzLiRjb21wb25lbnQuZmluZCgnLlNpZGVNZW51X19NZW51SXRlbXMgLk1lbnVJdGVtX19JdGVtVGl0bGUnKTtcclxuXHRcdFx0dGhpcy4kc3ViSXRlbSA9IHRoaXMuJGNvbXBvbmVudC5maW5kKCcuU2lkZU1lbnVfX01lbnVJdGVtcyAuTWVudUl0ZW1fc3ViSXRlbXMnKTtcclxuXHRcdFx0dGhpcy4kZGVwYXJ0bWVudCA9IHRoaXMuJGNvbXBvbmVudC5maW5kKCcuU2lkZU1lbnVfX1RhYnMgLkRlcGFydG1lbnROYW1lJyk7XHJcblxyXG5cdFx0XHQvL3RoaXMuJHRyaWdnZXIuaGlkZSgpO1xyXG5cdFx0XHR0aGlzLiRkZXBhcnRtZW50LmhpZGUoKTtcclxuXHJcblx0XHRcdHRoaXMuJGlmcmFtZUNvbnRhaW5lciA9IHRoaXMuJGNvbXBvbmVudC5maW5kKCcuaWZyYW1lQ29udGFpbmVyJyk7XHJcblx0XHRcdHRoaXMuJGlmcmFtZUNvbnRhaW5lci5hcHBlbmQoJzxkaXYgY2xhc3M9XCJsZHMtcmluZyBPSVwiPjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PC9kaXY+Jyk7XHJcblx0XHRcdHRoaXMuJGlmcmFtZUNvbnRhaW5lci5maW5kKCdpZnJhbWUnKS5sb2FkKCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLiRpZnJhbWVDb250YWluZXIuZmluZCgnLmxkcy1yaW5nJykuZmFkZU91dCgpO1xyXG5cclxuXHRcdFx0XHRpZiAoIXRoaXMuJGNvbXBvbmVudC5oYXNDbGFzcygnU2lkZU1lbnUtLXRhYnNUaGVtZScpKSB7XHJcblx0XHRcdFx0XHQvL3RoaXMuJHRyaWdnZXIuc2hvdygpO1xyXG5cdFx0XHRcdFx0dGhpcy4kZGVwYXJ0bWVudC5zaG93KCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHRoaXMuJHRyaWdnZXIub24oJ2NsaWNrJywgKCkgPT4gdGhpcy5vcGVuQ2xvc2VNZW51KHRydWUpKTtcclxuXHRcdFx0dGhpcy4kc2hpZWxkLm9uKCdjbGljaycsICgpID0+IHRoaXMub3BlbkNsb3NlTWVudShmYWxzZSkpO1xyXG5cdFx0XHR0aGlzLiRjbG9zZUJ1dHRvbi5vbignY2xpY2snLCAoKSA9PiB0aGlzLm9wZW5DbG9zZU1lbnUoZmFsc2UpKTtcclxuXHJcblx0XHRcdHRoaXMuJHRhYkl0ZW0ub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG5cdFx0XHRcdGNvbnN0ICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG5cdFx0XHRcdGNvbnN0ICRsaW5rID0gJHRhcmdldC5maW5kKCcuTWVudUl0ZW1fbGFiZWwgYScpO1xyXG5cclxuXHRcdFx0XHRpZiAoJGxpbmsubGVuZ3RoKSAkbGluay5nZXQoMCkuY2xpY2soKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHR0aGlzLiRtZW51SXRlbS5vbignY2xpY2snLCBldmVudCA9PiB7XHJcblx0XHRcdFx0Y29uc3QgaXNJY29uID0gZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2ljb24gaWNvbi1jaGFuZ2Vkb3duJztcclxuXHRcdFx0XHRpZiAoZXZlbnQudGFyZ2V0ICE9PSBldmVudC5jdXJyZW50VGFyZ2V0ICYmICFpc0ljb24pIHJldHVybjtcclxuXHJcblx0XHRcdFx0Y29uc3QgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkucGFyZW50KCk7XHJcblx0XHRcdFx0Y29uc3QgJHN1Ykl0ZW1zID0gJHRhcmdldC5maW5kKCcuTWVudUl0ZW1fc3ViSXRlbXMnKTtcclxuXHRcdFx0XHRjb25zdCAkbGluayA9ICR0YXJnZXQuZmluZCgnLk1lbnVJdGVtX2xhYmVsIGEnKTtcclxuXHJcblx0XHRcdFx0aWYgKCRsaW5rLmxlbmd0aCkgJGxpbmsuZ2V0KDApLmNsaWNrKCk7XHJcblxyXG5cdFx0XHRcdGlmICgkdGFyZ2V0Lmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG5cdFx0XHRcdFx0JHRhcmdldC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdFx0XHQkc3ViSXRlbXMucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy4kY29tcG9uZW50XHJcblx0XHRcdFx0XHRcdC5maW5kKCcuU2lkZU1lbnVfX01lbnVJdGVtcyAuYWN0aXZlJylcclxuXHRcdFx0XHRcdFx0Lm5vdCgkdGFyZ2V0KVxyXG5cdFx0XHRcdFx0XHQucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuXHRcdFx0XHRcdHRoaXMuJGNvbXBvbmVudFxyXG5cdFx0XHRcdFx0XHQuZmluZCgnLlNpZGVNZW51X19NZW51SXRlbXMgLnNob3cnKVxyXG5cdFx0XHRcdFx0XHQubm90KCR0YXJnZXQpXHJcblx0XHRcdFx0XHRcdC5yZW1vdmVDbGFzcygnc2hvdycpO1xyXG5cclxuXHRcdFx0XHRcdCR0YXJnZXQudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdFx0JHN1Ykl0ZW1zLnRvZ2dsZUNsYXNzKCdzaG93Jyk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKHRoaXMuJGNvbXBvbmVudC5oYXNDbGFzcygnU2lkZU1lbnUtLXRhYnNUaGVtZScpKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMud2luZG93Q2xpY2sodGhpcy4kY29tcG9uZW50KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0dGhpcy4kc3ViSXRlbS5vbignY2xpY2snLCBldmVudCA9PiBldmVudC5zdG9wUHJvcGFnYXRpb24oKSk7XHJcblxyXG5cdFx0XHR0aGlzLiRjb21wb25lbnRcclxuXHRcdFx0XHQuZmluZCgnLlNpZGVNZW51X19UYWJJdGVtcyA+IGRpdjplbXB0eScpXHJcblx0XHRcdFx0LnBhcmVudCgpXHJcblx0XHRcdFx0LmhpZGUoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNvbnN0IHJlc2l6ZVRhYnMgPSAoJGNvbXBvbmVudCwgJG1lbnVUYWJzLCBpc1JlY3Vyc2l2ZSkgPT4ge1xyXG5cdFx0Y29uc3QgJG1lbnVUcmlnZ2VyID0gJGNvbXBvbmVudC5maW5kKCcuU2lkZU1lbnVfX1RyaWdnZXInKTtcclxuXHRcdGNvbnN0IGhlYWRlcldpZHRoID0gJGNvbXBvbmVudC5maW5kKCcuU2lkZU1lbnVfX0hlYWRlcicpLm91dGVyV2lkdGgoKTtcclxuXHRcdGNvbnN0ICRtZW51SXRlbXMgPSAkbWVudVRhYnMuZmluZCgnLlNpZGVNZW51X19NZW51SXRlbXMnKTtcclxuXHRcdGNvbnN0IHRhYnNXaWR0aCA9ICRtZW51SXRlbXMubGVuZ3RoID8gJG1lbnVJdGVtcy5vdXRlcldpZHRoKCkgOiAkbWVudVRhYnMub3V0ZXJXaWR0aCgpO1xyXG5cclxuXHRcdGNvbnN0IGZpeGVkVmFsdWUgPSAkKHdpbmRvdy5wYXJlbnQpLndpZHRoKCkgPCAxMDI0ID8gMTgwIDogMTk2O1xyXG5cdFx0bGV0IGhhc0l0ZW1Ub1JlbW92ZSA9IHRydWU7XHJcblxyXG5cdFx0aWYgKHRhYnNXaWR0aCA+IDAgJiYgdGFic1dpZHRoICsgZml4ZWRWYWx1ZSA+IGhlYWRlcldpZHRoICYmIGhhc0l0ZW1Ub1JlbW92ZSkge1xyXG5cdFx0XHRjb25zdCAkbW9yZU9wdGlvbnMgPSAkY29tcG9uZW50LmZpbmQoJy5TaWRlTWVudV9fQ29udGVudCcpO1xyXG5cdFx0XHRjb25zdCAkbGFzdEl0ZW0gPSAkbWVudVRhYnNcclxuXHRcdFx0XHQuZmluZCgnLlNpZGVNZW51X19NZW51SXRlbXMgLk1lbnVJdGVtJylcclxuXHRcdFx0XHQubGFzdCgpXHJcblx0XHRcdFx0LmRldGFjaCgpO1xyXG5cclxuXHRcdFx0aWYgKCEkbW9yZU9wdGlvbnMuZmluZCgnLlNpZGVNZW51X19NZW51SXRlbXMnKS5sZW5ndGgpIHtcclxuXHRcdFx0XHQkKCc8ZGl2IGNsYXNzPVwiU2lkZU1lbnVfX01lbnVJdGVtc1wiPjwvZGl2PicpLmFwcGVuZFRvKCRtb3JlT3B0aW9ucyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGNvbnN0ICRtZW51SXRlbXMgPSAkbW9yZU9wdGlvbnMuZmluZCgnLlNpZGVNZW51X19NZW51SXRlbXMnKTtcclxuXHRcdFx0JGxhc3RJdGVtLnByZXBlbmRUbygkbWVudUl0ZW1zKTtcclxuXHJcblx0XHRcdCRtZW51VHJpZ2dlci5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xyXG5cclxuXHRcdFx0aGFzSXRlbVRvUmVtb3ZlID0gISEkbGFzdEl0ZW0ubGVuZ3RoO1xyXG5cclxuXHRcdFx0cmVzaXplVGFicygkY29tcG9uZW50LCAkbWVudVRhYnMsICEhJGxhc3RJdGVtLmxlbmd0aCk7XHJcblx0XHR9IGVsc2UgaWYgKCFpc1JlY3Vyc2l2ZSkge1xyXG5cdFx0XHRjb25zdCAkbWVudUl0ZW1zID0gJG1lbnVUYWJzLmZpbmQoJy5TaWRlTWVudV9fTWVudUl0ZW1zJyk7XHJcblx0XHRcdGxldCAkZmlyc3RJdGVtID0gJGNvbXBvbmVudC5maW5kKCcuU2lkZU1lbnVfX0NvbnRlbnQgLlNpZGVNZW51X19NZW51SXRlbXMgLk1lbnVJdGVtJykuZmlyc3QoKTtcclxuXHJcblx0XHRcdGNvbnN0IG5ld0xpbmtXaWR0aCA9IDE0MCAqIDEuMTYgKyAxNjsgLy8gRm9udC1zaXplICsgcGFkZGluZyBiZXR3ZWVuIGl0ZW1zIChnYXApXHJcblx0XHRcdGNvbnN0IG5ld0l0ZW1zV2lkdGggPSBuZXdMaW5rV2lkdGggKyAkbWVudUl0ZW1zLm91dGVyV2lkdGgoKTtcclxuXHJcblx0XHRcdGlmIChuZXdJdGVtc1dpZHRoICsgZml4ZWRWYWx1ZSA8IGhlYWRlcldpZHRoKSB7XHJcblx0XHRcdFx0JGZpcnN0SXRlbSA9ICRmaXJzdEl0ZW0uZGV0YWNoKCk7XHJcblx0XHRcdFx0JGZpcnN0SXRlbS5hcHBlbmRUbygkbWVudVRhYnMuZmluZCgnLlNpZGVNZW51X19NZW51SXRlbXMnKSk7XHJcblxyXG5cdFx0XHRcdGlmICgkY29tcG9uZW50LmZpbmQoJy5TaWRlTWVudV9fQ29udGVudCAuU2lkZU1lbnVfX01lbnVJdGVtcyAuTWVudUl0ZW0nKS5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdHJlc2l6ZVRhYnMoJGNvbXBvbmVudCwgJG1lbnVUYWJzKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0JG1lbnVUcmlnZ2VyLmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRjb25zdCBzZXRUYWJzVGhlbWUgPSAoKSA9PiB7XHJcblx0XHQkKHRvcC5kb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQoJy5TaWRlTWVudScsIHdpbmRvdy5wYXJlbnQuZG9jdW1lbnQpLmFkZENsYXNzKCdTaWRlTWVudS0tdGFic1RoZW1lJyk7XHJcblxyXG5cdFx0XHRjb25zdCAkY29tcG9uZW50ID0gJCgnLlNpZGVNZW51Jywgd2luZG93LnBhcmVudC5kb2N1bWVudCk7XHJcblx0XHRcdGNvbnN0ICRtZW51VGFicyA9ICRjb21wb25lbnQuZmluZCgnLlNpZGVNZW51X19UYWJzJyk7XHJcblxyXG5cdFx0XHQkbWVudVRhYnMuZmluZCgnPiBkaXY6ZW1wdHknKS5oaWRlKCk7XHJcblxyXG5cdFx0XHRjb25zdCAkaXRlbXMgPSAkY29tcG9uZW50LmZpbmQoJy5TaWRlTWVudV9fTWVudUl0ZW1zJykuZGV0YWNoKCk7XHJcblx0XHRcdCRpdGVtcy5hcHBlbmRUbygkbWVudVRhYnMpO1xyXG5cclxuXHRcdFx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmVzaXplVGFicygkY29tcG9uZW50LCAkbWVudVRhYnMsIHRydWUpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdCQod2luZG93LnBhcmVudCkucmVzaXplKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGNsZWFyVGltZW91dCh3aW5kb3cucmVzaXplZEZpbmlzaGVkKTtcclxuXHRcdFx0XHR3aW5kb3cucmVzaXplZEZpbmlzaGVkID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdHJlc2l6ZVRhYnMoJGNvbXBvbmVudCwgJG1lbnVUYWJzKTtcclxuXHRcdFx0XHR9LCAyNTApO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGNyZWF0ZSA9IGNvbmZpZyA9PiAod2luZG93W2NvbmZpZy53aWRnZXRJZF0gPSBuZXcgU2lkZU1lbnUoY29uZmlnKSk7XHJcblxyXG5cdFNhcHBoaXJlV2lkZ2V0cy5TaWRlTWVudSA9IHsgY3JlYXRlLCBzZXRUYWJzVGhlbWUgfTtcclxufSkoalF1ZXJ5LCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cyk7XHJcbiIsIi8qIENvbXBvbmVudCBJU2lkZWJhciAqL1xuKGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cykge1xuXHR2YXIgY3JlYXRlID0gZnVuY3Rpb24oY29uZmlnKSB7XG5cdFx0d2luZG93W2NvbmZpZy53aWRnZXRJZF0gPSBuZXcgU2lkZWJhcihjb25maWcpO1xuXHRcdFNhcHBoaXJlV2lkZ2V0cy5TaWRlYmFyLndpZGdldElkID0gY29uZmlnLndpZGdldElkO1xuXHR9O1xuXG5cdHZhciBjbG9zZSA9IGZ1bmN0aW9uKCkge1xuXHRcdHdpbmRvd1tTYXBwaGlyZVdpZGdldHMuU2lkZWJhci53aWRnZXRJZF0uY2xvc2UoKTtcblx0fTtcblxuXHR2YXIgU2lkZWJhciA9IGZ1bmN0aW9uKGNvbmZpZykge1xuXHRcdHZhciBfdGhpcyA9IHRoaXM7XG5cdFx0dGhpcy5pc0V4cGFuZGFibGUgPSBjb25maWcuaXNFeHBhbmRhYmxlO1xuXHRcdHRoaXMuJHdpZGdldCA9ICQoJyMnICsgY29uZmlnLndpZGdldElkKTtcblx0XHR0aGlzLiRzaWRlYmFyID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5JU2lkZWJhcicpO1xuXHRcdHRoaXMuJHNpZGViYXJNZW51ID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5JU2lkZWJhci1tZW51Jyk7XG5cdFx0dGhpcy4kc2lkZWJhck1lbnVJdGVtID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5TaWRlYmFyTWVudUl0ZW0nKTtcblx0XHR0aGlzLiRzaWRlYmFyU2hpZWxkID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5JU2lkZWJhci1zaGllbGQnKTtcblx0XHR0aGlzLiRzaWRlYmFyQ29udGVudCA9IHRoaXMuJHdpZGdldC5maW5kKCcuSVNpZGViYXItY29udGVudCcpO1xuXHRcdHRoaXMuc2hvd0xhc3RWaWV3ZWQgPSBmYWxzZTtcblxuXHRcdHRoaXMuJHNpZGViYXJDb250ZW50LmZpbmQoJz4gZGl2JykuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdGlmICgkKHRoaXMpLmhhc0NsYXNzKCdQSCcpICYmICQodGhpcykudGV4dCgpID09PSAnJykge1xuXHRcdFx0XHQkKHRoaXMpLnJlbW92ZSgpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdHRoaXMuYXR0YWNoRXZlbnRzKCk7XG5cdFx0aWYgKCF0aGlzLmlzRXhwYW5kYWJsZSkge1xuXHRcdFx0dGhpcy5vcGVuTWVudUl0ZW0oMCk7XG5cdFx0fVxuXHRcdCQoZnVuY3Rpb24oKSB7XG5cdFx0XHRjb25zb2xlLmxvZyh0aGlzLiRzaG93TGFzdFZpZXdlZCk7XG5cblx0XHRcdGlmICghY29uZmlnLmlzRXhwYW5kYWJsZSkge1xuXHRcdFx0XHQkKGAuJHtjb25maWcuc2VsZWN0ZWRUYWJ9YCkuY2xpY2soKTtcblx0XHRcdH1cblxuXHRcdFx0d2luZG93LnBhcmVudC4kKCcuTGF5b3V0QmFzZS1pZnJhbWVzaWRlYmFyIC5sZHMtcmluZycpLmZhZGVPdXQoKTtcblxuXHRcdFx0aWYgKCF0aGlzLmlzRXhwYW5kYWJsZSkge1xuXHRcdFx0XHQkKCdpbnB1dFt0eXBlPVwidGV4dFwiXTp2aXNpYmxlJylcblx0XHRcdFx0XHQuZXEoMClcblx0XHRcdFx0XHQuZm9jdXMoKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdCQod2luZG93KS51bmxvYWQoZnVuY3Rpb24oKSB7XG5cdFx0XHR3aW5kb3cucGFyZW50LiQoJy5MYXlvdXRCYXNlLWlmcmFtZXNpZGViYXIgLmxkcy1yaW5nJykuZmFkZU91dCgpO1xuXHRcdH0pO1xuXHR9O1xuXG5cdFNpZGViYXIucHJvdG90eXBlLmF0dGFjaEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBfdGhpcyA9IHRoaXM7XG5cdFx0dGhpcy4kc2lkZWJhck1lbnUub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZ0KSB7XG5cdFx0XHRjb25zb2xlLmxvZyhldnQpO1xuXG5cdFx0XHRldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRpZiAoIV90aGlzLiRzaWRlYmFyLmhhc0NsYXNzKCdvcGVuJykpIHtcblx0XHRcdFx0X3RoaXMub3Blbk1lbnVJdGVtKDApO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdHRoaXMuJHNpZGViYXJNZW51SXRlbS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBzZWxlY3RlZFBvc2l0aW9uID0gJCh0aGlzKS5pbmRleCgpO1xuXHRcdFx0X3RoaXMub3Blbk1lbnVJdGVtKHNlbGVjdGVkUG9zaXRpb24pO1xuXHRcdH0pO1xuXHRcdHRoaXMuJHNpZGViYXJTaGllbGQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRfdGhpcy5jbG9zZSgpO1xuXHRcdH0pO1xuXHRcdHRoaXMuJHNpZGViYXIub24oJ2NsaWNrJywgJy5TZWFyY2hTaWRlQmFyRmllbGRzIC5CdXR0b25Hcm91cF9idXR0b246Zmlyc3QtY2hpbGQnLCBmdW5jdGlvbigpIHtcblx0XHRcdF90aGlzLiRzaWRlYmFyXG5cdFx0XHRcdC5maW5kKCcuRmllbGRzU2xpZGVyJylcblx0XHRcdFx0LmFkZENsYXNzKCdUYWIxJylcblx0XHRcdFx0LnJlbW92ZUNsYXNzKCdUYWIyJyk7XG5cdFx0XHRfdGhpcy5zZXRGaWVsZEZvY3VzKF90aGlzLiRzaWRlYmFyQ29udGVudC5maW5kKCcuVGV4dElucHV0OnZpc2libGUnKS5lcSgwKSk7XG5cdFx0fSk7XG5cdFx0dGhpcy4kc2lkZWJhci5vbignY2xpY2snLCAnLlNlYXJjaFNpZGVCYXJGaWVsZHMgLkJ1dHRvbkdyb3VwX2J1dHRvbjpsYXN0LWNoaWxkJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRfdGhpcy4kc2lkZWJhclxuXHRcdFx0XHQuZmluZCgnLkZpZWxkc1NsaWRlcicpXG5cdFx0XHRcdC5hZGRDbGFzcygnVGFiMicpXG5cdFx0XHRcdC5yZW1vdmVDbGFzcygnVGFiMScpO1xuXHRcdFx0X3RoaXMuc2V0RmllbGRGb2N1cyhfdGhpcy4kc2lkZWJhckNvbnRlbnQuZmluZCgnLlRleHRJbnB1dDp2aXNpYmxlJykuZXEoMCkpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy4kc2lkZWJhci5vbignY2xpY2snLCAnLnNob3ctbGFzdC12aWV3ZWQnLCBmdW5jdGlvbigpIHtcblx0XHRcdF90aGlzLnNob3dMYXN0Vmlld2VkID0gIV90aGlzLnNob3dMYXN0Vmlld2VkO1xuXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuSVNpZGViYXInKS5kYXRhc2V0LnNob3dsYXN0dmlld2VkID0gX3RoaXMuc2hvd0xhc3RWaWV3ZWQ7XG5cblx0XHRcdHdpbmRvdy5wYXJlbnQuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLkxheW91dEJhc2UtaWZyYW1lc2lkZWJhci5ub3RFeHBhbmRhYmxlJykuZGF0YXNldC5zaG93bGFzdHZpZXdlZCA9XG5cdFx0XHRcdF90aGlzLnNob3dMYXN0Vmlld2VkO1xuXG5cdFx0XHRpZiAoX3RoaXMuc2hvd0xhc3RWaWV3ZWQpIHtcblx0XHRcdFx0d2luZG93LnBhcmVudC5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuTGF5b3V0QmFzZS1pZnJhbWVzaWRlYmFyLm5vdEV4cGFuZGFibGUnKS5zdHlsZS53aWR0aCA9ICcxMDAlJztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdF90aGlzLmNsb3NlKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH07XG5cblx0U2lkZWJhci5wcm90b3R5cGUub3Blbk1lbnVJdGVtID0gZnVuY3Rpb24oc2VsZWN0ZWRQb3NpdGlvbikge1xuXHRcdHZhciBfdGhpcyA9IHRoaXM7XG5cblx0XHR0aGlzLiRzaWRlYmFyXG5cdFx0XHQuZmluZCgnLlNpZGViYXJNZW51SXRlbScpXG5cdFx0XHQucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG5cdFx0XHQuZXEoc2VsZWN0ZWRQb3NpdGlvbilcblx0XHRcdC5hZGRDbGFzcygnYWN0aXZlJyk7XG5cblx0XHR0aGlzLiRzaWRlYmFyXG5cdFx0XHQuZmluZCgnLklTaWRlYmFyLWNvbnRlbnQgPiAuSVNpZGViYXItY29udGVudC1wYW5lbCcpXG5cdFx0XHQuaGlkZSgpXG5cdFx0XHQuZXEoc2VsZWN0ZWRQb3NpdGlvbilcblx0XHRcdC5zaG93KCk7XG5cblx0XHR0aGlzLiRzaWRlYmFyLmFkZENsYXNzKCdvcGVuJyk7XG5cblx0XHQvLyBjb25zb2xlLmxvZyh0aGlzLiRzaWRlYmFyKTtcblxuXHRcdGlmICh3aW5kb3cucGFyZW50Lmxlbmd0aCAmJiB0aGlzLmlzRXhwYW5kYWJsZSkge1xuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLklTaWRlYmFyJykuZGF0YXNldC5zaG93bGFzdHZpZXdlZCA9ICd0cnVlJztcblx0XHRcdHdpbmRvdy5wYXJlbnQuU2FwcGhpcmVXaWRnZXRzLkxheW91dEJhc2Uub3BlblNpZGViYXJJZnJhbWUoMCk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuJHNpZGViYXJDb250ZW50LmZpbmQoJy5UZXh0SW5wdXQ6dmlzaWJsZScpLmxlbmd0aCA+IDApIHtcblx0XHRcdHRoaXMuc2V0RmllbGRGb2N1cyh0aGlzLiRzaWRlYmFyQ29udGVudC5maW5kKCcuVGV4dElucHV0OnZpc2libGUnKS5lcSgwKSk7XG5cdFx0fVxuXG5cdFx0aWYgKHdpbmRvdy5wYXJlbnQuJCgnLnNlbGVjdDItY29udGFpbmVyLS1vcGVuJykubGVuZ3RoKSB7XG5cdFx0XHR3aW5kb3cucGFyZW50LiQoJy5zZWxlY3QyLWhpZGRlbi1hY2Nlc3NpYmxlJykuc2VsZWN0MignY2xvc2UnKTtcblx0XHR9XG5cdH07XG5cblx0U2lkZWJhci5wcm90b3R5cGUuc2V0RmllbGRGb2N1cyA9IGZ1bmN0aW9uKCRpbnB1dCkge1xuXHRcdHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0JGlucHV0LmNsaWNrKCkuc2VsZWN0KCk7XG5cdFx0fSwgMjUwKTtcblx0fTtcblxuXHRTaWRlYmFyLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBfdGhpcyA9IHRoaXM7XG5cblx0XHRjb25zb2xlLmxvZygnc2lkZWJhciBjbG9zZScpO1xuXG5cdFx0aWYgKHdpbmRvdy5wYXJlbnQubGVuZ3RoKSB7XG5cdFx0XHR3aW5kb3cucGFyZW50LlNhcHBoaXJlV2lkZ2V0cy5MYXlvdXRCYXNlLmNsb3NlU2lkZWJhcklmcmFtZSgwKTtcblx0XHRcdF90aGlzLnNob3dMYXN0Vmlld2VkID0gZmFsc2U7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuSVNpZGViYXInKS5kYXRhc2V0LnNob3dsYXN0dmlld2VkID0gX3RoaXMuc2hvd0xhc3RWaWV3ZWQ7XG5cdFx0XHR3aW5kb3cucGFyZW50LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5MYXlvdXRCYXNlLWlmcmFtZXNpZGViYXInKS5kYXRhc2V0LnNob3dsYXN0dmlld2VkID0gX3RoaXMuc2hvd0xhc3RWaWV3ZWQ7XG5cdFx0fVxuXHRcdGlmICh0aGlzLmlzRXhwYW5kYWJsZSkge1xuXHRcdFx0dGhpcy4kc2lkZWJhci5yZW1vdmVDbGFzcygnb3BlbicpO1xuXHRcdFx0dGhpcy4kc2lkZWJhci5maW5kKCcuU2lkZWJhck1lbnVJdGVtJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0dGhpcy4kc2lkZWJhci5maW5kKCcuSVNpZGViYXItY29udGVudCA+IC5JU2lkZWJhci1jb250ZW50LXBhbmVsJykuaGlkZSgpO1xuXHRcdH1cblx0fTtcblxuXHRTYXBwaGlyZVdpZGdldHMuU2lkZWJhciA9IHtcblx0XHRjcmVhdGU6IGNyZWF0ZSxcblx0XHRjbG9zZTogY2xvc2UsXG5cdH07XG59KShqUXVlcnksIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cyk7XG4iLCJTYXBwaGlyZVdpZGdldHMuU21hbGxCb3hTZWxlY3RhYmxlID0gZnVuY3Rpb24oY29uZmlnKSB7XHJcblx0Y29uc3QgJGNvbXBvbmVudCA9ICQoYCMke2NvbmZpZy53aWRnZXRJZH1gKTtcclxuXHJcblx0aWYgKGNvbmZpZy5zZWxlY3RPbkNsaWNrKSB7XHJcblx0XHQkY29tcG9uZW50LmNsaWNrKCgpID0+IHtcclxuXHRcdFx0Y29uc3QgJGxpc3QgPSAkKCcuU21hbGxCb3hMaXN0IC5TbWFsbEJveFNlbGVjdGFibGUnKS5ub3QoJGNvbXBvbmVudCk7XHJcblxyXG5cdFx0XHQkbGlzdC5yZW1vdmVDbGFzcygnU21hbGxCb3hTZWxlY3RhYmxlLS1zZWxlY3RlZCcpO1xyXG5cdFx0XHQkY29tcG9uZW50LnRvZ2dsZUNsYXNzKCdTbWFsbEJveFNlbGVjdGFibGUtLXNlbGVjdGVkJyk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn07XHJcbiIsIi8qIENvbXBvbmVudCBTcGlubmVySG9yaXpvbnRhbCAqL1xyXG5TYXBwaGlyZVdpZGdldHMuU3Bpbm5lckhvcml6b250YWwgPSB7XHJcblx0Y3JlYXRlOiBjb25maWcgPT4ge1xyXG5cdFx0Y29uc3QgJGlucHV0ID0gJChgIyR7Y29uZmlnLndpZGdldElkfSBpbnB1dGApO1xyXG5cdFx0Y29uc3QgJHBsdXMgPSAkKGAjJHtjb25maWcud2lkZ2V0SWR9IGEuUGx1c2ApO1xyXG5cdFx0Y29uc3QgJG1pbnVzID0gJChgIyR7Y29uZmlnLndpZGdldElkfSBhLk1pbnVzYCk7XHJcblxyXG5cdFx0bGV0IHZhbCA9ICRpbnB1dC52YWwoKTtcclxuXHJcblx0XHRpZiAodmFsIDw9ICtjb25maWcubWluVmFsdWUpIHtcclxuXHRcdFx0JG1pbnVzLmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcblx0XHR9IGVsc2UgaWYgKHZhbCA+PSArY29uZmlnLm1heFZhbHVlKSB7XHJcblx0XHRcdCRwbHVzLmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcblx0XHR9XHJcblxyXG5cdFx0JGlucHV0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFsID0gTWF0aC5hYnMocGFyc2VJbnQodGhpcy52YWx1ZSwgMTApIHx8ICtjb25maWcubWluVmFsdWUpO1xyXG5cdFx0XHR0aGlzLnZhbHVlID0gdmFsID4gK2NvbmZpZy5tYXhWYWx1ZSA/ICtjb25maWcubWF4VmFsdWUgOiB2YWwgPCArY29uZmlnLm1pblZhbHVlID8gK2NvbmZpZy5taW5WYWx1ZSA6IHZhbDtcclxuXHJcblx0XHRcdGlmICh2YWwgPD0gK2NvbmZpZy5taW5WYWx1ZSkgJG1pbnVzLmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcblx0XHRcdGVsc2UgJG1pbnVzLnJlbW92ZUF0dHIoJ2Rpc2FibGVkJyk7XHJcblxyXG5cdFx0XHRpZiAodmFsID49ICtjb25maWcubWF4VmFsdWUpICRwbHVzLmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcblx0XHRcdGVsc2UgJHBsdXMucmVtb3ZlQXR0cignZGlzYWJsZWQnKTtcclxuXHRcdH0pO1xyXG5cdH0sXHJcblx0aW5jcmVtZW50OiBmdW5jdGlvbihlbGVtZW50SWQsIG1pblZhbHVlLCBtYXhWYWx1ZSwgdHJpZ2dlck9uQ2hhbmdlKSB7XHJcblx0XHR2YXIgX2VsZW1lbnQgPSAkKGVsZW1lbnRJZClcclxuXHRcdFx0LmZpbmQoJ2lucHV0W3R5cGU9XCJudW1iZXJcIl0nKVxyXG5cdFx0XHQuZmlyc3QoKTtcclxuXHRcdGlmIChfZWxlbWVudC52YWwoKSA9PSB1bmRlZmluZWQgfHwgX2VsZW1lbnQudmFsKCkgPT0gJycgfHwgaXNOYU4ocGFyc2VGbG9hdChfZWxlbWVudC52YWwoKSkpKSB7XHJcblx0XHRcdF9lbGVtZW50LnZhbChtaW5WYWx1ZSk7XHJcblx0XHRcdGlmICh0cmlnZ2VyT25DaGFuZ2UpIHtcclxuXHRcdFx0XHRfZWxlbWVudC50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHBhcnNlRmxvYXQoX2VsZW1lbnQudmFsKCkpIDwgbWF4VmFsdWUpIHtcclxuXHRcdFx0XHRfZWxlbWVudC52YWwocGFyc2VGbG9hdChfZWxlbWVudC52YWwoKSkgKyAxKTtcclxuXHRcdFx0XHRpZiAodHJpZ2dlck9uQ2hhbmdlKSB7XHJcblx0XHRcdFx0XHRfZWxlbWVudC50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0JChlbGVtZW50SWQpXHJcblx0XHRcdFx0XHQuZmluZCgnYS5NaW51cycpXHJcblx0XHRcdFx0XHQucmVtb3ZlQXR0cignZGlzYWJsZWQnKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAocGFyc2VGbG9hdChfZWxlbWVudC52YWwoKSkgPj0gbWF4VmFsdWUpIHtcclxuXHRcdFx0XHQkKGVsZW1lbnRJZClcclxuXHRcdFx0XHRcdC5maW5kKCdhLlBsdXMnKVxyXG5cdFx0XHRcdFx0LmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9LFxyXG5cdGRlY3JlbWVudDogZnVuY3Rpb24oZWxlbWVudElkLCBtaW5WYWx1ZSwgdHJpZ2dlck9uQ2hhbmdlKSB7XHJcblx0XHR2YXIgX2VsZW1lbnQgPSAkKGVsZW1lbnRJZClcclxuXHRcdFx0LmZpbmQoJ2lucHV0W3R5cGU9XCJudW1iZXJcIl0nKVxyXG5cdFx0XHQuZmlyc3QoKTtcclxuXHRcdGlmIChfZWxlbWVudC52YWwoKSA9PSB1bmRlZmluZWQgfHwgX2VsZW1lbnQudmFsKCkgPT0gJycgfHwgaXNOYU4ocGFyc2VGbG9hdChfZWxlbWVudC52YWwoKSkpKSB7XHJcblx0XHRcdF9lbGVtZW50LnZhbChtaW5WYWx1ZSk7XHJcblx0XHRcdGlmICh0cmlnZ2VyT25DaGFuZ2UpIHtcclxuXHRcdFx0XHRfZWxlbWVudC50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHBhcnNlRmxvYXQoX2VsZW1lbnQudmFsKCkpID4gbWluVmFsdWUpIHtcclxuXHRcdFx0XHRfZWxlbWVudC52YWwocGFyc2VGbG9hdChfZWxlbWVudC52YWwoKSkgLSAxKTtcclxuXHRcdFx0XHRpZiAodHJpZ2dlck9uQ2hhbmdlKSB7XHJcblx0XHRcdFx0XHRfZWxlbWVudC50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0JChlbGVtZW50SWQpXHJcblx0XHRcdFx0XHQuZmluZCgnYS5QbHVzJylcclxuXHRcdFx0XHRcdC5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChwYXJzZUZsb2F0KF9lbGVtZW50LnZhbCgpKSA8PSBtaW5WYWx1ZSkge1xyXG5cdFx0XHRcdCQoZWxlbWVudElkKVxyXG5cdFx0XHRcdFx0LmZpbmQoJ2EuTWludXMnKVxyXG5cdFx0XHRcdFx0LmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9LFxyXG59O1xyXG4iLCIvKiBDb21wb25lbnQgU3Bpbm5lclZlcnRpY2FsICovXHJcbihmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpIHtcclxuXHRjb25zdCBjcmVhdGUgPSBmdW5jdGlvbihjb25maWcpIHtcclxuXHRcdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRjb25zdCAkbWludXNWZXJ0aWNhbCA9ICQoYCMke2NvbmZpZy53aWRnZXRJZH1gKS5maW5kKCcuTWludXNWZXJ0aWNhbCcpO1xyXG5cdFx0XHRjb25zdCAkaW5wdXRTcGlubmVyID0gJChgIyR7Y29uZmlnLndpZGdldElkfSAuU3Bpbm5lcklucHV0VmVydGljYWwgaW5wdXRgKTtcclxuXHJcblx0XHRcdCRpbnB1dFNwaW5uZXIub24oJ2JsdXIga2V5dXAgaW5wdXQnLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHRcdGNvbnN0IGN1cnJlbnRJbnB1dFZhbHVlID0gJGlucHV0U3Bpbm5lci52YWwoKTtcclxuXHJcblx0XHRcdFx0aWYgKGNvbmZpZy5udW1iZXJMaXN0ICYmIGV2ZW50LnR5cGUgPT09ICdibHVyJykge1xyXG5cdFx0XHRcdFx0Y29uc3QgaW5wdXRWYWx1ZUludCA9IHBhcnNlSW50KGN1cnJlbnRJbnB1dFZhbHVlKTtcclxuXHRcdFx0XHRcdGNvbnN0IGFycmF5VG9TcGluID0gY29uZmlnLm51bWJlckxpc3Q7XHJcblx0XHRcdFx0XHRjb25zdCAkZXJyb3JNZXNzYWdlID0gJChgIyR7Y29uZmlnLndpZGdldElkfSAuU3Bpbm5lckVycm9yTWVzc2FnZWApO1xyXG5cclxuXHRcdFx0XHRcdCRlcnJvck1lc3NhZ2UuY3NzKCdkaXNwbGF5JywgYXJyYXlUb1NwaW4uaW5kZXhPZihpbnB1dFZhbHVlSW50KSA9PT0gLTEgPyAnYmxvY2snIDogJ25vbmUnKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmIChjdXJyZW50SW5wdXRWYWx1ZSA8IGNvbmZpZy5taW5WYWx1ZSkgJG1pbnVzVmVydGljYWwuYWRkQ2xhc3MoJ0Rpc2FibGVkU3BpbicpO1xyXG5cdFx0XHRcdGVsc2UgJG1pbnVzVmVydGljYWwucmVtb3ZlQ2xhc3MoJ0Rpc2FibGVkU3BpbicpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGlmICgkaW5wdXRTcGlubmVyLnZhbCgpIDw9IGNvbmZpZy5taW5WYWx1ZSkge1xyXG5cdFx0XHRcdCRtaW51c1ZlcnRpY2FsLmFkZENsYXNzKCdEaXNhYmxlZFNwaW4nKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGNvbmZpZy5udW1iZXJMaXN0ICYmICRpbnB1dFNwaW5uZXIudmFsKCkgPT09ICcnKSB7XHJcblx0XHRcdFx0bGV0IGN1cnJlbnROdW1iZXIgPSAwO1xyXG5cdFx0XHRcdGNvbnN0IGFycmF5VG9TcGluID0gY29uZmlnLm51bWJlckxpc3Quc3BsaXQoJywnKTtcclxuXHJcblx0XHRcdFx0JGlucHV0U3Bpbm5lci52YWwoYXJyYXlUb1NwaW5bY3VycmVudE51bWJlcl0pO1xyXG5cdFx0XHRcdCRtaW51c1ZlcnRpY2FsLmFkZENsYXNzKCdEaXNhYmxlZFNwaW4nKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGNvbmZpZy5pc0N1cnNvck9uRm9jdXMpIHtcclxuXHRcdFx0XHQkKCdib2R5Jykub24oJ2ZvY3VzJywgYCMke2NvbmZpZy5pbnB1dElEfSBpbnB1dGAsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cclxuXHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdHRoYXQuZm9jdXMoKTtcclxuXHRcdFx0XHRcdFx0dmFyIHZhbCA9IHRoYXQudmFsdWU7XHJcblx0XHRcdFx0XHRcdHRoYXQudmFsdWUgPSAnJztcclxuXHRcdFx0XHRcdFx0dGhhdC52YWx1ZSA9IHZhbDtcclxuXHRcdFx0XHRcdH0sIDEpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoY29uZmlnLmlzSW5wdXRFbXB0eSkge1xyXG5cdFx0XHRcdCRpbnB1dFNwaW5uZXIuYXR0cigndmFsdWUnLCAnJyk7XHJcblx0XHRcdFx0JG1pbnVzVmVydGljYWwuYWRkQ2xhc3MoJ0Rpc2FibGVkU3BpbicpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBpbmNyZW1lbnQgPSAoZWxlbWVudElkLCBtaW5WYWx1ZSwgbWF4VmFsdWUsIHRyaWdnZXJPbkNoYW5nZSwgdHJpZ2dlck9uSW5wdXQsIGxpc3RUb3NwaW4gPSBbXSkgPT4ge1xyXG5cdFx0Y29uc3QgJHNwaW5uZXIgPSAkKGVsZW1lbnRJZCk7XHJcblx0XHRsZXQgJGlucHV0ID0gJHNwaW5uZXIuZmluZCgnaW5wdXRbdHlwZT1cInRleHRcIl0sIGlucHV0W3R5cGU9XCJudW1iZXJcIl0nKS5maXJzdCgpO1xyXG5cclxuXHRcdHZhciBmb3JjZUludGVnZXIgPSAkKGVsZW1lbnRJZCkuZGF0YSgnZm9yY2VpbnRlZ2VyJykgPT09ICdUcnVlJyA/IHRydWUgOiBmYWxzZTtcclxuXHRcdHZhciBjdXJyZW50VmFsdWUgPSBwYXJzZUZsb2F0KCRpbnB1dC52YWwoKSk7XHJcblx0XHR2YXIgaW5jcmVtZW50VW5pdCA9IDE7XHJcblx0XHR2YXIgaXNEZWNpbWFscyA9IGN1cnJlbnRWYWx1ZSAlIDEgIT0gMDtcclxuXHRcdHZhciBhcnJheXRvc3BpbiA9IGxpc3RUb3NwaW47XHJcblxyXG5cdFx0Y29uc3QgJG1pbnVzVmVydGljYWwgPSAkKGVsZW1lbnRJZCkuZmluZCgnLk1pbnVzVmVydGljYWwnKTtcclxuXHRcdGNvbnN0ICRwbHVzVmVydGljYWwgPSAkKGVsZW1lbnRJZCkuZmluZCgnLlBsdXNWZXJ0aWNhbCcpO1xyXG5cclxuXHRcdCRtaW51c1ZlcnRpY2FsLnJlbW92ZUNsYXNzKCdEaXNhYmxlZFNwaW4nKTtcclxuXHJcblx0XHRpZiAoYXJyYXl0b3NwaW4ubGVuZ3RoKSB7XHJcblx0XHRcdHZhciBjdXJyZW50UG9zaXRpb24gPSBhcnJheXRvc3Bpbi5pbmRleE9mKHBhcnNlSW50KCRpbnB1dC52YWwoKSkpO1xyXG5cdFx0XHR2YXIgbWF4aW11bVRvU3BpbiA9IGFycmF5dG9zcGluLmxhc3RJbmRleE9mKGFycmF5dG9zcGluLnNsaWNlKC0xKVswXSk7XHJcblxyXG5cdFx0XHQkcGx1c1ZlcnRpY2FsLnJlbW92ZUNsYXNzKCdEaXNhYmxlZFNwaW4nKTtcclxuXHJcblx0XHRcdGlmIChtYXhpbXVtVG9TcGluIC0gMSA9PT0gY3VycmVudFBvc2l0aW9uKSB7XHJcblx0XHRcdFx0Y3VycmVudFBvc2l0aW9uID0gY3VycmVudFBvc2l0aW9uICsgMTtcclxuXHRcdFx0XHQkaW5wdXQudmFsKGFycmF5dG9zcGluW2N1cnJlbnRQb3NpdGlvbl0pO1xyXG5cclxuXHRcdFx0XHRpZiAodHJpZ2dlck9uQ2hhbmdlKSAkaW5wdXQudHJpZ2dlcignY2hhbmdlJyk7XHJcblx0XHRcdFx0aWYgKHRyaWdnZXJPbklucHV0KSAkaW5wdXQudHJpZ2dlcignaW5wdXQnKTtcclxuXHRcdFx0fSBlbHNlIGlmIChtYXhpbXVtVG9TcGluID09PSBjdXJyZW50UG9zaXRpb24pIHtcclxuXHRcdFx0XHRjdXJyZW50UG9zaXRpb24gPSBjdXJyZW50UG9zaXRpb24gJSBtYXhpbXVtVG9TcGluO1xyXG5cdFx0XHRcdCRpbnB1dC52YWwoYXJyYXl0b3NwaW5bY3VycmVudFBvc2l0aW9uXSk7XHJcblxyXG5cdFx0XHRcdHRyaWdnZXJFdmVudHMoJGlucHV0LCB0cmlnZ2VyT25DaGFuZ2UsIHRyaWdnZXJPbklucHV0KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRjdXJyZW50UG9zaXRpb24gPSAoY3VycmVudFBvc2l0aW9uICsgMSkgJSBtYXhpbXVtVG9TcGluO1xyXG5cdFx0XHRcdCRpbnB1dC52YWwoYXJyYXl0b3NwaW5bY3VycmVudFBvc2l0aW9uXSk7XHJcblxyXG5cdFx0XHRcdHRyaWdnZXJFdmVudHMoJGlucHV0LCB0cmlnZ2VyT25DaGFuZ2UsIHRyaWdnZXJPbklucHV0KTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGN1cnJlbnRQb3NpdGlvbiA9PT0gbWF4aW11bVRvU3BpbikgJHBsdXNWZXJ0aWNhbC5hZGRDbGFzcygnRGlzYWJsZWRTcGluJyk7XHJcblx0XHRcdGlmIChjdXJyZW50UG9zaXRpb24gPT09IDApICRtaW51c1ZlcnRpY2FsLmFkZENsYXNzKCdEaXNhYmxlZFNwaW4nKTtcclxuXHJcblx0XHRcdCRzcGlubmVyLmZpbmQoJy5TcGlubmVyRXJyb3JNZXNzYWdlJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmIChwYXJzZUZsb2F0KGN1cnJlbnRWYWx1ZSkgPCBtaW5WYWx1ZSkge1xyXG5cdFx0XHRcdCRtaW51c1ZlcnRpY2FsLmFkZENsYXNzKCdEaXNhYmxlZFNwaW4nKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQkbWludXNWZXJ0aWNhbC5yZW1vdmVDbGFzcygnRGlzYWJsZWRTcGluJyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICghZm9yY2VJbnRlZ2VyICYmIGlzRGVjaW1hbHMpIGluY3JlbWVudFVuaXQgPSBwYXJzZUZsb2F0KDAuMSk7XHJcblxyXG5cdFx0XHRpZiAoY3VycmVudFZhbHVlID09PSB1bmRlZmluZWQgfHwgY3VycmVudFZhbHVlID09PSAnJyB8fCBpc05hTihwYXJzZUZsb2F0KGN1cnJlbnRWYWx1ZSkpKSB7XHJcblx0XHRcdFx0JGlucHV0LnZhbChtaW5WYWx1ZSk7XHJcblxyXG5cdFx0XHRcdHRyaWdnZXJFdmVudHMoJGlucHV0LCB0cmlnZ2VyT25DaGFuZ2UsIHRyaWdnZXJPbklucHV0KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpZiAocGFyc2VGbG9hdChjdXJyZW50VmFsdWUpIDwgbWF4VmFsdWUpIHtcclxuXHRcdFx0XHRcdGlmIChjdXJyZW50VmFsdWUgPT09IDAgJiYgIWZvcmNlSW50ZWdlcikgaW5jcmVtZW50VW5pdCA9IHBhcnNlRmxvYXQoMC4xKTtcclxuXHJcblx0XHRcdFx0XHQkaW5wdXQudmFsKHBhcnNlRmxvYXQoKGN1cnJlbnRWYWx1ZSArIGluY3JlbWVudFVuaXQpLnRvRml4ZWQoMSkpKTtcclxuXHJcblx0XHRcdFx0XHR0cmlnZ2VyRXZlbnRzKCRpbnB1dCwgdHJpZ2dlck9uQ2hhbmdlLCB0cmlnZ2VyT25JbnB1dCk7XHJcblxyXG5cdFx0XHRcdFx0JG1pbnVzVmVydGljYWwucmVtb3ZlQXR0cignZGlzYWJsZWQnKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0JHBsdXNWZXJ0aWNhbC5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Y2hlY2tEaXNhYmxlZFN0YXR1cyhlbGVtZW50SWQsIHBhcnNlRmxvYXQoJGlucHV0LnZhbCgpKSwgbWluVmFsdWUsIG1heFZhbHVlKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRjb25zdCBkZWNyZW1lbnQgPSAoZWxlbWVudElkLCBtaW5WYWx1ZSwgbWF4VmFsdWUsIHRyaWdnZXJPbkNoYW5nZSwgdHJpZ2dlck9uSW5wdXQsIGxpc3RUb3NwaW4gPSBbXSkgPT4ge1xyXG5cdFx0Y29uc3QgJHNwaW5uZXIgPSAkKGVsZW1lbnRJZCk7XHJcblx0XHRjb25zdCAkaW5wdXQgPSAkc3Bpbm5lci5maW5kKCdpbnB1dFt0eXBlPVwidGV4dFwiXSwgaW5wdXRbdHlwZT1cIm51bWJlclwiXScpLmZpcnN0KCk7XHJcblxyXG5cdFx0bGV0IGZvcmNlSW50ZWdlciA9ICQoZWxlbWVudElkKS5kYXRhKCdmb3JjZWludGVnZXInKSA9PT0gJ1RydWUnID8gdHJ1ZSA6IGZhbHNlO1xyXG5cdFx0bGV0IGN1cnJlbnRWYWx1ZSA9IHBhcnNlRmxvYXQoJGlucHV0LnZhbCgpKTtcclxuXHRcdGxldCBpbmNyZW1lbnRVbml0ID0gMTtcclxuXHRcdGxldCBpc0RlY2ltYWxzID0gY3VycmVudFZhbHVlICUgMSAhPSAwO1xyXG5cdFx0bGV0IGFycmF5dG9zcGluID0gbGlzdFRvc3BpbjtcclxuXHJcblx0XHRjb25zdCAkbWludXNWZXJ0aWNhbCA9ICQoZWxlbWVudElkKS5maW5kKCcuTWludXNWZXJ0aWNhbCcpO1xyXG5cdFx0Y29uc3QgJHBsdXNWZXJ0aWNhbCA9ICQoZWxlbWVudElkKS5maW5kKCcuUGx1c1ZlcnRpY2FsJyk7XHJcblxyXG5cdFx0aWYgKGFycmF5dG9zcGluLmxlbmd0aCkge1xyXG5cdFx0XHRsZXQgY3VycmVudFBvc2l0aW9uID0gYXJyYXl0b3NwaW4uaW5kZXhPZihwYXJzZUludCgkaW5wdXQudmFsKCkpKTtcclxuXHRcdFx0bGV0IG1heGltdW1Ub1NwaW4gPSBhcnJheXRvc3Bpbi5sYXN0SW5kZXhPZihhcnJheXRvc3Bpbi5zbGljZSgtMSlbMF0pO1xyXG5cclxuXHRcdFx0aWYgKGN1cnJlbnRQb3NpdGlvbiA9PSAwKSB7XHJcblx0XHRcdFx0JGlucHV0LnZhbChhcnJheXRvc3BpblttYXhpbXVtVG9TcGluXSk7XHJcblxyXG5cdFx0XHRcdGlmICh0cmlnZ2VyT25DaGFuZ2UpICRpbnB1dC50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuXHRcdFx0XHRpZiAodHJpZ2dlck9uSW5wdXQpICRpbnB1dC50cmlnZ2VyKCdpbnB1dCcpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGN1cnJlbnRQb3NpdGlvbiA9IChjdXJyZW50UG9zaXRpb24gLSAxKSAlIG1heGltdW1Ub1NwaW47XHJcblx0XHRcdFx0JGlucHV0LnZhbChhcnJheXRvc3BpbltjdXJyZW50UG9zaXRpb25dKTtcclxuXHJcblx0XHRcdFx0dHJpZ2dlckV2ZW50cygkaW5wdXQsIHRyaWdnZXJPbkNoYW5nZSwgdHJpZ2dlck9uSW5wdXQpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQkc3Bpbm5lci5maW5kKCcuU3Bpbm5lckVycm9yTWVzc2FnZScpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAoIWZvcmNlSW50ZWdlciAmJiBpc0RlY2ltYWxzKSBpbmNyZW1lbnRVbml0ID0gcGFyc2VGbG9hdCgwLjEpO1xyXG5cclxuXHRcdFx0aWYgKGN1cnJlbnRWYWx1ZSA9PT0gdW5kZWZpbmVkIHx8IGN1cnJlbnRWYWx1ZSA9PT0gJycgfHwgaXNOYU4ocGFyc2VGbG9hdChjdXJyZW50VmFsdWUpKSkge1xyXG5cdFx0XHRcdCRpbnB1dC52YWwobWluVmFsdWUpO1xyXG5cclxuXHRcdFx0XHR0cmlnZ2VyRXZlbnRzKCRpbnB1dCwgdHJpZ2dlck9uQ2hhbmdlLCB0cmlnZ2VyT25JbnB1dCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0aWYgKHBhcnNlRmxvYXQoY3VycmVudFZhbHVlKSA+IG1pblZhbHVlKSB7XHJcblx0XHRcdFx0XHRpZiAoY3VycmVudFZhbHVlID09PSAxICYmICFmb3JjZUludGVnZXIpIGluY3JlbWVudFVuaXQgPSBwYXJzZUZsb2F0KDAuMSk7XHJcblxyXG5cdFx0XHRcdFx0JGlucHV0LnZhbChwYXJzZUZsb2F0KChjdXJyZW50VmFsdWUgLSBpbmNyZW1lbnRVbml0KS50b0ZpeGVkKDEpKSk7XHJcblxyXG5cdFx0XHRcdFx0dHJpZ2dlckV2ZW50cygkaW5wdXQsIHRyaWdnZXJPbkNoYW5nZSwgdHJpZ2dlck9uSW5wdXQpO1xyXG5cclxuXHRcdFx0XHRcdCRwbHVzVmVydGljYWwucmVtb3ZlQXR0cignZGlzYWJsZWQnKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0JG1pbnVzVmVydGljYWwuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGNoZWNrRGlzYWJsZWRTdGF0dXMoZWxlbWVudElkLCBwYXJzZUZsb2F0KCRpbnB1dC52YWwoKSksIG1pblZhbHVlLCBtYXhWYWx1ZSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Y29uc3QgdHJpZ2dlckV2ZW50cyA9IChpbnB1dCwgdHJpZ2dlck9uQ2hhbmdlLCB0cmlnZ2VyT25JbnB1dCkgPT4ge1xyXG5cdFx0aWYgKHRyaWdnZXJPbkNoYW5nZSkgaW5wdXQudHJpZ2dlcignY2hhbmdlJyk7XHJcblx0XHRpZiAodHJpZ2dlck9uSW5wdXQpIGlucHV0LnRyaWdnZXIoJ2lucHV0Jyk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgY2hlY2tEaXNhYmxlZFN0YXR1cyA9IChlbGVtZW50SWQsIHZhbHVlVG9DaGVjaywgbWluVmFsdWUsIG1heFZhbHVlKSA9PiB7XHJcblx0XHRpZiAodmFsdWVUb0NoZWNrIDw9IG1pblZhbHVlKSB7XHJcblx0XHRcdCQoZWxlbWVudElkKVxyXG5cdFx0XHRcdC5maW5kKCdhLk1pbnVzVmVydGljYWwnKVxyXG5cdFx0XHRcdC5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0JChlbGVtZW50SWQpXHJcblx0XHRcdFx0LmZpbmQoJ2EuTWludXNWZXJ0aWNhbCcpXHJcblx0XHRcdFx0LnJlbW92ZUF0dHIoJ2Rpc2FibGVkJyk7XHJcblx0XHR9XHJcblx0XHRpZiAodmFsdWVUb0NoZWNrID49IG1heFZhbHVlKSB7XHJcblx0XHRcdCQoZWxlbWVudElkKVxyXG5cdFx0XHRcdC5maW5kKCdhLlBsdXNWZXJ0aWNhbCcpXHJcblx0XHRcdFx0LmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQkKGVsZW1lbnRJZClcclxuXHRcdFx0XHQuZmluZCgnYS5QbHVzVmVydGljYWwnKVxyXG5cdFx0XHRcdC5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdFNhcHBoaXJlV2lkZ2V0cy5TcGlubmVyVmVydGljYWwgPSB7XHJcblx0XHRjcmVhdGUsXHJcblx0XHRpbmNyZW1lbnQsXHJcblx0XHRkZWNyZW1lbnQsXHJcblx0fTtcclxufSkoalF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpO1xyXG4iLCIvKiBDb21wb25lbnQgU3BsaXRCdXR0b24gKi9cclxuKGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cykge1xyXG5cdHZhciBjcmVhdGUgPSBmdW5jdGlvbihjb25maWcpIHtcclxuXHRcdHdpbmRvd1tjb25maWcud2lkZ2V0SWRdID0gbmV3IFNwbGl0QnV0dG9uKGNvbmZpZyk7XHJcblx0fTtcclxuXHJcblx0dmFyIFNwbGl0QnV0dG9uID0gZnVuY3Rpb24oY29uZmlnKSB7XHJcblx0XHR2YXIgX3RoaXMgPSB0aGlzO1xyXG5cdFx0dGhpcy5jb25maWcgPSBjb25maWc7XHJcblx0XHR0aGlzLiR3aWRnZXQgPSAkKCcjJyArIHRoaXMuY29uZmlnLndpZGdldElkKTtcclxuXHRcdHRoaXMuJGJ1dHRvbiA9IHRoaXMuJHdpZGdldC5maW5kKCcuU3BsaXRCdXR0b24tYnV0dG9uJyk7XHJcblx0XHR0aGlzLiRidXR0b25MaW5rID0gdGhpcy4kYnV0dG9uLmZpbmQoJz4gYScpO1xyXG5cdFx0dGhpcy4kdHJpZ2dlciA9IHRoaXMuJHdpZGdldC5maW5kKCcuU3BsaXRCdXR0b24tdHJpZ2dlcicpO1xyXG5cdFx0dGhpcy4kYWN0aW9ucyA9IHRoaXMuJHdpZGdldC5maW5kKCcuU3BsaXRCdXR0b24tYWN0aW9ucycpO1xyXG5cdFx0aWYgKCEhdGhpcy4kYWN0aW9ucy50ZXh0KCkpIHtcclxuXHRcdFx0dGhpcy4kd2lkZ2V0LmZpbmQoJz4gLlNwbGl0QnV0dG9uJykuYWRkQ2xhc3MoJ2hhc1RyaWdnZXInKTtcclxuXHRcdFx0dGhpcy5idWlsZEFjdGlvbnNUcmlnZ2VyKCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0U3BsaXRCdXR0b24ucHJvdG90eXBlLmJ1aWxkQWN0aW9uc1RyaWdnZXIgPSBmdW5jdGlvbigpIHtcclxuXHRcdHZhciBfdGhpcyA9IHRoaXM7XHJcblx0XHR2YXIgY2xhc3NMaXN0ID0gdGhpcy4kYnV0dG9uTGlua1swXS5jbGFzc0xpc3QudmFsdWU7XHJcblx0XHR0aGlzLiR0cmlnZ2VyLmFkZENsYXNzKGNsYXNzTGlzdCk7XHJcblx0XHQkKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQvLyBpbnNpZGUgYSBkb2N1bWVudCByZWFkeSBkdWUgdG8gc2FwcGhpcmUgcG9wdXAgYmluZGVkIGV2ZW50c1xyXG5cdFx0XHRpZiAoIV90aGlzLiR0cmlnZ2VyLmhhc0NsYXNzKCd0b29sdGlwc3RlcmVkJykpIHtcclxuXHRcdFx0XHRfdGhpcy4kdHJpZ2dlci50b29sdGlwc3Rlcih7XHJcblx0XHRcdFx0XHRhcnJvdzogdHJ1ZSxcclxuXHRcdFx0XHRcdGNvbnRlbnQ6ICQoJzxzZWN0aW9uLz4nKS5hcHBlbmQoX3RoaXMuJGFjdGlvbnMuY2xvbmUodHJ1ZSkpLFxyXG5cdFx0XHRcdFx0dHJpZ2dlcjogX3RoaXMuY29uZmlnLnRyaWdnZXJFdmVudCxcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiBfdGhpcy5jb25maWcucG9zaXRpb24sXHJcblx0XHRcdFx0XHRtYXhXaWR0aDogX3RoaXMuY29uZmlnLm1heFdpZHRoLFxyXG5cdFx0XHRcdFx0dGhlbWU6ICd0b29sdGlwc3Rlci1zcGxpdGJ1dHRvbiBQYWRkaW5nLScgKyBfdGhpcy5jb25maWcucGFkZGluZyxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRfdGhpcy4kYWN0aW9ucy5yZW1vdmUoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0U2FwcGhpcmVXaWRnZXRzLlNwbGl0QnV0dG9uID0ge1xyXG5cdFx0Y3JlYXRlOiBjcmVhdGUsXHJcblx0fTtcclxufSkoalF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpO1xyXG4iLCJ2YXIgbWlsaXNlY29uZHBhc3NlZCA9IDA7XHJcbnZhciBzdG9wdGltZXIgPSB0cnVlO1xyXG52YXIgbXlUaW1vdXQgID0gbnVsbDtcclxuXHJcbmZ1bmN0aW9uIG9uS2V5ZG93bkZ1bmN0aW9uKCkge1xyXG4gICAgbWlsaXNlY29uZHBhc3NlZCA9IDA7XHJcbiAgXHJcbiAgICBzdG9wdGltZXI9dHJ1ZTtcclxuICAgIGNsZWFySW50ZXJ2YWwobXlUaW1vdXQpO1xyXG4gICAgbXlUaW1vdXQgPSBudWxsO1xyXG4gIH07XHJcbiAgXHJcbiAgZnVuY3Rpb24gb25LZXlVcEZ1bmN0aW9uKGVsZW1lbnRUb0NsaWNrKSB7XHJcbiAgc3RvcHRpbWVyID0gZmFsc2U7XHJcbiAgXHJcbiAgaWYobWlsaXNlY29uZHBhc3NlZCA9PSAwICYmIG15VGltb3V0PT1udWxsKXtcclxuICAgICAgbXlUaW1vdXQgPSBzZXRJbnRlcnZhbChcclxuICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIG1pbGlzZWNvbmRwYXNzZWQrPTEwMDtcclxuICAgICAgICAgXHJcbiAgICAgICAgICBpZiAobWlsaXNlY29uZHBhc3NlZCA+PSA0MDAgJiYgc3RvcHRpbWVyPT1mYWxzZSkge1xyXG4gICAgICAgICAgICBtaWxpc2Vjb25kcGFzc2VkID0gMDtcclxuICAgICAgICAgICAgc3RvcHRpbWVyPXRydWU7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwobXlUaW1vdXQpO1xyXG4gICAgICAgICAgICBteVRpbW91dCA9IG51bGw7XHJcbiAgICAgICAgICAgIGVsZW1lbnRUb0NsaWNrLmNsaWNrKCk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGlmKHN0b3B0aW1lcj09dHJ1ZSl7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwobXlUaW1vdXQpO1xyXG4gICAgICAgICAgICBteVRpbW91dCA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgIGlmKHN0b3B0aW1lcj09dHJ1ZSl7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwobXlUaW1vdXQpO1xyXG4gICAgICAgICAgICBteVRpbW91dCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgICBpZihzdG9wdGltZXI9PXRydWUpe1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKG15VGltb3V0KTtcclxuICAgICAgICAgICAgbXlUaW1vdXQgPSBudWxsO1xyXG4gICAgICAgIH0gICBcclxuICAgIH1cclxufTtcclxuXHJcbmlmKHR5cGVvZihzc2RDb21wb25lbnQpID09PSAndW5kZWZpbmVkJykge1xyXG5cclxuICAgIHNzZENvbXBvbmVudCA9IHtcclxuICAgICAgICBsZW5ndGg6IDAsXHJcbiAgICAgICAgbnVtYmVyT2ZBY3RpdmU6IDAsXHJcbiAgICAgICAgaXNSVEw6IGZhbHNlLFxyXG4gICAgICAgIGlkOiAnJyxcclxuICAgICAgICB0b0Rlc3Ryb3k6IGZhbHNlLFxyXG4gICAgICAgIG9uQmx1ckRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAoc3NkQ29tcG9uZW50LmlkICE9ICcnKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgX3NzZENvbXBvbmVudCA9ICQoJyMnICsgc3NkQ29tcG9uZW50LmlkKTtcclxuICAgICAgICAgICAgICAgIHZhciBfd3JhcHBlciA9ICQoJ1tkYXRhLXNzZC1wbGFjZWhvbGRlcj0nICsgc3NkQ29tcG9uZW50LmlkICsgJ10nKTtcclxuICAgICAgICAgICAgICAgIGlmIChzc2RDb21wb25lbnQudG9EZXN0cm95KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3dyYXBwZXIuZmluZCgnLlNTRExpc3RSZWZyZXNoSGFuZGxlcicpLmZpbmQoJ2EudG8tZGVzdHJveScpLmNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgX3dyYXBwZXIucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgdmFyIF93cmFwcGVyID0gJCgnW2RhdGEtc3NkLXBsYWNlaG9sZGVyPScgKyBzc2RDb21wb25lbnQuaWQgKyAnXScpO1xyXG4gICAgICAgICAgICAgICAgICAgIF93cmFwcGVyLmZpbmQoJ2lucHV0JykudmFsKCcnKTtcclxuICAgICAgICAgICAgICAgICAgICBzc2RDb21wb25lbnQuYmx1cigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmb2N1czogZnVuY3Rpb24oc3NkQ29tcG9uZW50V2lkZ2V0KSB7XHJcbiAgICAgICAgICAgIHZhciBfc3NkQ29tcG9uZW50V2lkZ2V0ID0gJChzc2RDb21wb25lbnRXaWRnZXQpLmNoaWxkcmVuKCdkaXYuU1NELVdyYXBwZXI6bm90KC5TZWxlY3RlZCknKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKCFfc3NkQ29tcG9uZW50V2lkZ2V0Lmxlbmd0aClcclxuICAgICAgICAgICAgICAgIHJldHVybjsgLy9JZiB0aGlzIFNTRC1XcmFwcGVyIGlzIGFscmVhZHkgU2VsZWN0ZWQsIHJldHVybi5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHNzZENvbXBvbmVudC5udW1iZXJPZkFjdGl2ZSlcclxuICAgICAgICAgICAgICAgIHNzZENvbXBvbmVudC5ibHVyKCk7IC8vQmx1cnMgdGhlIG90aGVyIGZvY3VzZWQgU1NEJ3MuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzc2RDb21wb25lbnQubnVtYmVyT2ZBY3RpdmUrKztcclxuICAgICAgICAgICAgaWYoIV9zc2RDb21wb25lbnRXaWRnZXQucGFyZW50KCkuaGFzQ2xhc3MoJ1NTRFBvcHVwJykpe1xyXG4gICAgICAgICAgICAgICAgX3NzZENvbXBvbmVudFdpZGdldC5jaGlsZHJlbignLlNTRC1Db21wb25lbnQnKVxyXG4gICAgICAgICAgICAgICAgLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJzogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkKHRoaXMpLm91dGVyV2lkdGgoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICd0b3AnOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgJChkb2N1bWVudCkuc2Nyb2xsVG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAnbGVmdCc6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihzc2RDb21wb25lbnQuaXNSVEwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2F1dG8nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JpZ2h0JzogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNzZENvbXBvbmVudC5pc1JUTClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkKHdpbmRvdykud2lkdGgoKSAtICQodGhpcykub3V0ZXJXaWR0aCgpIC0gdGhpcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2F1dG8nO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2hpbGRyZW4oJy5TU0QtQmFyJykuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICAnd2lkdGgnOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQodGhpcykub3V0ZXJXaWR0aCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuc2libGluZ3MoJy5TU0QtTGlzdCcpLmF0dHIoJ2N1cnJlbnQtZm9jdXMnLCAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgX3NzZENvbXBvbmVudFdpZGdldC5jaGlsZHJlbignLlNTRC1Db21wb25lbnQnKVxyXG4gICAgICAgICAgICAgICAgLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJzogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkKHRoaXMpLm91dGVyV2lkdGgoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNoaWxkcmVuKCcuU1NELUJhcicpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJzogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkKHRoaXMpLm91dGVyV2lkdGgoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnNpYmxpbmdzKCcuU1NELUxpc3QnKS5hdHRyKCdjdXJyZW50LWZvY3VzJywgMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKCFfc3NkQ29tcG9uZW50V2lkZ2V0LnBhcmVudCgpLmhhc0NsYXNzKCdTU0RQb3B1cCcpKXtcclxuICAgICAgICAgICAgICAgIF9zc2RDb21wb25lbnRXaWRnZXQuY2xvc2VzdCgnZm9ybScpLmFwcGVuZChfc3NkQ29tcG9uZW50V2lkZ2V0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBfc3NkQ29tcG9uZW50V2lkZ2V0LmFkZENsYXNzKCdQb3NpdGlvbmVkJyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3NzZENvbXBvbmVudFdpZGdldC5hZGRDbGFzcygnU2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICwgMVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJsdXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZighc3NkQ29tcG9uZW50Lm51bWJlck9mQWN0aXZlKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIF93cmFwcGVyID0gJCgnZGl2LlNTRC1XcmFwcGVyLlBvc2l0aW9uZWQuU2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIF93cmFwcGVyLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGFyZW50ID0gJCgnIycgKyAkKHRoaXMpLmF0dHIoJ2RhdGEtc3NkLXBsYWNlaG9sZGVyJykpO1xyXG4gICAgICAgICAgICAgICAgcGFyZW50LmFwcGVuZCgkKHRoaXMpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBfd3JhcHBlci5yZW1vdmVDbGFzcygnUG9zaXRpb25lZCcpXHJcbiAgICAgICAgICAgIC5jaGlsZHJlbignLlNTRC1Db21wb25lbnQnKVxyXG4gICAgICAgICAgICAgICAgLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJzogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RvcCc6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICdsZWZ0JzogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JpZ2h0JzogJydcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ1NlYXJjaGluZyBGaXhlZCBLZXlib2FyZE5hdicpXHJcbiAgICAgICAgICAgIC5jaGlsZHJlbignLlNTRC1CYXInKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgJ3dpZHRoJzogJydcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgc2V0VGltZW91dChcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIF93cmFwcGVyLnJlbW92ZUNsYXNzKCdTZWxlY3RlZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbmQoJy5TU0QtQmFyJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3NkQ29tcG9uZW50LnRhYnNDbGVhcih0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICwgMVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNzZENvbXBvbmVudC5udW1iZXJPZkFjdGl2ZS0tO1xyXG4gICAgICAgICAgICAkKFwiLlNTRF9MaXN0UmVjb3JkcyBzcGFuLCAuU1NEX0xpc3RMaW5lLlNob3dNb3JlLCAuU1NEX0RlbGV0ZU9uQmx1clwiKS5yZW1vdmUoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlc2l6ZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmKCFzc2RDb21wb25lbnQubnVtYmVyT2ZBY3RpdmUpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47IC8vSWYgdGhlcmUncyBubyBTU0QgYWN0aXZlLCB0aGVyZSdzIG5vIG5lZWQgdG8gcmVzaXplIGl0LlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIF9zc2RXcmFwcGVyID0gJCgnZGl2LlNTRC1XcmFwcGVyLlNlbGVjdGVkJykuZmlyc3QoKTtcclxuICAgICAgICAgICAgdmFyIF9zc2RDb21wb25lbnRXaWRnZXQgPSAkKCcjJyArIF9zc2RXcmFwcGVyLmF0dHIoJ2RhdGEtc3NkLXBsYWNlaG9sZGVyJykpWzBdO1xyXG4gICAgICAgICAgICB2YXIgX3NzZENvbXBvbmVudCA9IF9zc2RXcmFwcGVyLmNoaWxkcmVuKCcuU1NELUNvbXBvbmVudCcpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBfc3NkQ29tcG9uZW50V2lkZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgX3NzZENvbXBvbmVudC5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICd3aWR0aCc6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJChfc3NkQ29tcG9uZW50V2lkZ2V0KS53aWR0aCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0vKixcclxuICAgICAgICAgICAgICAgICAgICAndG9wJzogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfc3NkQ29tcG9uZW50V2lkZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArICQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgJ2xlZnQnOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoc3NkQ29tcG9uZW50LmlzUlRMKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdhdXRvJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9zc2RDb21wb25lbnRXaWRnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICdyaWdodCc6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihzc2RDb21wb25lbnQuaXNSVEwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJCh3aW5kb3cpLndpZHRoKCkgLSAkKF9zc2RDb21wb25lbnRXaWRnZXQpLm91dGVyV2lkdGgoKSAtIF9zc2RDb21wb25lbnRXaWRnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdhdXRvJztcclxuICAgICAgICAgICAgICAgICAgICB9Ki9cclxuICAgICAgICAgICAgICAgIH0pLmNoaWxkcmVuKCcuU1NELUJhcicpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJzogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkKHRoaXMpLmNsb3Nlc3QoJy5TU0QtQ29tcG9uZW50JykuaW5uZXJXaWR0aCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB0YWJTZWxlY3Q6IGZ1bmN0aW9uKHNzZENvbXBvbmVudFdpZGdldCwgc3NkQmFyLCBzZWxlY3RlZFRhYiwgaXNJbnB1dEV2ZW50KSB7XHJcbiAgICAgICAgICAgIHZhciBfc2VsZWN0ZWRUYWIgPSAkKHNlbGVjdGVkVGFiKTtcclxuXHJcbiAgICAgICAgICAgIGlmKHNzZENvbXBvbmVudC5udW1iZXJPZkFjdGl2ZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBzc2RDb21wb25lbnQuZm9jdXMoc3NkQ29tcG9uZW50V2lkZ2V0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoIV9zZWxlY3RlZFRhYi5pcygnLlNlbGVjdGVkJykpIHtcclxuICAgICAgICAgICAgICAgIHNzZENvbXBvbmVudC50YWJzQ2xlYXIoc3NkQmFyKTtcclxuICAgICAgICAgICAgICAgIF9zZWxlY3RlZFRhYi5hZGRDbGFzcygnU2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc3NkQ29tcG9uZW50LmZvY3VzU2VsZWN0ZWRUYWIoc3NkQmFyLGlzSW5wdXRFdmVudCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmb2N1c1NlbGVjdGVkVGFiOiBmdW5jdGlvbihzc2RCYXIsaXNJbnB1dEV2ZW50KSB7XHJcbiAgICAgICAgICAgIC8vIFNlbGVjdGVkIHRhYiBpcyB0aGUgU2VhcmNoIGlucHV0P1xyXG4gICAgICAgICAgICBpZihzc2RCYXIuY2hpbGRyZW4oJy5TZWFyY2hJbnB1dC1Db250YWluZXIuU2VsZWN0ZWQnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBlbGVtZW50VG9DbGljayA9IHNzZEJhci5zaWJsaW5ncygnLlNTRExpc3RSZWZyZXNoSGFuZGxlcicpLmZpbmQoJ2E6bm90KC50by1kZXN0cm95KScpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZihpc0lucHV0RXZlbnQpe1xyXG4gICAgICAgICAgICAgICAgICAgIG9uS2V5VXBGdW5jdGlvbihlbGVtZW50VG9DbGljayk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUb0NsaWNrLmNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzc2RCYXIuZmluZCgnLklucHV0UGxhY2Vob2xkZXIgaW5wdXRbdHlwZT1cInRleHRcIl06bm90KDpmb2N1cyknKS5maXJzdCgpLnNlbGVjdCgpLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIFNlbGVjdGVkIHRhYiBpcyB0aGUgU2hvcnQgbGlzdD9cclxuICAgICAgICAgICAgaWYoc3NkQmFyLmNoaWxkcmVuKCcuU2hvcnRMaXN0U2VsZWN0b3ItQ29udGFpbmVyLlNlbGVjdGVkJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBzc2RCYXIuZmluZCgnLlNob3J0TGlzdFNlbGVjdG9yLUNvbnRhaW5lciA+IGEnKS5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvKlxyXG4gICAgICAgICAqIE1ldGhvZCBiZWluZyBjYWxsZWQgYnkgdXNlciBhY3Rpb24ganNfc3NkQ29tcG9uZW50X2ZvY3VzQ3VycmVudFJvd1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGZvY3VzQ3VycmVudFJvdzogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBfc3NkQ29tcG9uZW50ID0gJCgnZGl2LlNTRC1XcmFwcGVyLlNlbGVjdGVkIC5TU0QtQ29tcG9uZW50JykuZmlyc3QoKTtcclxuICAgICAgICAgICAgdmFyIF9zc2RMaXN0ID0gX3NzZENvbXBvbmVudC5maW5kKCcuU1NELUxpc3QnKTtcclxuICAgICAgICAgICAgdmFyIF9jdXJyZW50Rm9jdXMgPSBfc3NkTGlzdC5hdHRyKCdjdXJyZW50LWZvY3VzJyk7XHJcblxyXG4gICAgICAgICAgICBfc3NkQ29tcG9uZW50LmFkZENsYXNzKCdLZXlib2FyZE5hdicpO1xyXG4gICAgICAgICAgICBfc3NkTGlzdC5maW5kKCdzcGFuLlNTRF9MaXN0UmVjb3JkcyA+IHNwYW46bnRoLWNoaWxkKCcgKyBfY3VycmVudEZvY3VzICsgJyknKS5hZGRDbGFzcygnZm9jdXMnKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRhYnNDbGVhcjogZnVuY3Rpb24oc3NkQmFyKSB7XHJcbiAgICAgICAgICAgICQoc3NkQmFyKS5jaGlsZHJlbigpLnJlbW92ZUNsYXNzKCdTZWxlY3RlZCcpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2VhcmNoSWNvbjogZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgc3NkQ29tcG9uZW50LnRhYlNlbGVjdChldmVudC5kYXRhLnNzZENvbXBvbmVudFdpZGdldCwgZXZlbnQuZGF0YS5zc2RCYXIsICQoZXZlbnQuZGF0YS5zc2RCYXIpLmNoaWxkcmVuKCcuU2VhcmNoSW5wdXQtQ29udGFpbmVyJyksZmFsc2UpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLypcclxuICAgICAgICAgKiBAbmFtZSBpbnB1dEV2ZW50XHJcbiAgICAgICAgICogQGRlc2NyaXB0aW9uIFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGlucHV0RXZlbnQ6IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIHZhciBfaW5wdXRDb250YWluZXIgPSAkKGV2ZW50LmRhdGEuaW5wdXQpLmNsb3Nlc3QoJy5TZWFyY2hJbnB1dC1Db250YWluZXInKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNzZENvbXBvbmVudC50YWJTZWxlY3QoZXZlbnQuZGF0YS5zc2RDb21wb25lbnRXaWRnZXQsIGV2ZW50LmRhdGEuc3NkQmFyLCBfaW5wdXRDb250YWluZXIsdHJ1ZSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZigkKGV2ZW50LmRhdGEuaW5wdXQpLnZhbCgpID09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBfaW5wdXRDb250YWluZXIuY2xvc2VzdCgnLlNTRC1Db21wb25lbnQnKS5yZW1vdmVDbGFzcygnU2VhcmNoaW5nJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBfaW5wdXRDb250YWluZXIuY2xvc2VzdCgnLlNTRC1Db21wb25lbnQnKS5hZGRDbGFzcygnU2VhcmNoaW5nJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGtleWRvd25FdmVudDogZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICBvbktleWRvd25GdW5jdGlvbigpOyAgICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAga2V5Ym9hcmRIYW5kbGVyOiBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICBpZihldmVudC5rZXkgPT0gXCJTaGlmdFwiIHx8IGV2ZW50LmtleSA9PSBcIkNvbnRyb2xcIilcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHZhciBfc3NkQ29tcG9uZW50ID0gJCgnZGl2LlNTRC1XcmFwcGVyLlNlbGVjdGVkIC5TU0QtQ29tcG9uZW50JykuZmlyc3QoKTtcclxuICAgICAgICAgICAgdmFyIF9zc2RMaXN0ID0gX3NzZENvbXBvbmVudC5maW5kKCcuU1NELUxpc3QnKTtcclxuXHJcbiAgICAgICAgICAgIGlmKGV2ZW50LmtleSA9PSBcIkVudGVyXCIgJiYgX3NzZExpc3QuZmluZCgnLlNTRF9MaXN0TGluZS5TaG93TW9yZS5mb2N1cycpLmxlbmd0aClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGlmKGV2ZW50LmtleSA9PSBcIlRhYlwiKSB7XHJcbiAgICAgICAgICAgICAgICBfc3NkQ29tcG9uZW50LmFkZENsYXNzKCdLZXlib2FyZE5hdicpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihldmVudC5rZXkgPT0gXCJBcnJvd1VwXCIgfHwgZXZlbnQua2V5ID09IFwiQXJyb3dEb3duXCIpIHtcclxuICAgICAgICAgICAgICAgIHZhciBfY3VycmVudEZvY3VzID0gX3NzZExpc3QuYXR0cignY3VycmVudC1mb2N1cycpO1xyXG4gICAgICAgICAgICAgICAgdmFyIF9zZWxlY3RlZEVsZW1lbnQgPSAkKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZihfc3NkTGlzdC5maW5kKCcuU1NEX0xpc3RMaW5lLlNob3dNb3JlLmZvY3VzJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3NlbGVjdGVkRWxlbWVudCA9IF9zc2RMaXN0LmZpbmQoJy5TU0RfTGlzdExpbmUuU2hvd01vcmUuZm9jdXMnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYoX2N1cnJlbnRGb2N1cyA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBfc2VsZWN0ZWRFbGVtZW50ID0gX3NzZExpc3QuZmluZCgnc3Bhbi5TU0RfTGlzdFJlY29yZHMgPiBzcGFuOm50aC1jaGlsZCgnICsgX2N1cnJlbnRGb2N1cyArICcpJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIF9zc2RDb21wb25lbnQuYWRkQ2xhc3MoJ0tleWJvYXJkTmF2JylcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYoZXZlbnQua2V5ID09IFwiQXJyb3dVcFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoX3NlbGVjdGVkRWxlbWVudC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKF9zZWxlY3RlZEVsZW1lbnQuaXMoJy5TU0RfTGlzdExpbmUuU2hvd01vcmUuZm9jdXMnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3NlbGVjdGVkRWxlbWVudC5yZW1vdmVDbGFzcygnZm9jdXMnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9zZWxlY3RlZEVsZW1lbnQgPSBfc3NkTGlzdC5maW5kKCdzcGFuLlNTRF9MaXN0UmVjb3JkcyA+IHNwYW46bGFzdC1jaGlsZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3NlbGVjdGVkRWxlbWVudCA9IF9zZWxlY3RlZEVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2ZvY3VzJykucHJldigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfY3VycmVudEZvY3VzLS07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfY3VycmVudEZvY3VzID0gX3NzZExpc3QuZmluZCgnc3Bhbi5TU0RfTGlzdFJlY29yZHMgPiBzcGFuJykubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoX3NzZExpc3QuZmluZCgnLlNTRF9MaXN0TGluZS5TaG93TW9yZScpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3NlbGVjdGVkRWxlbWVudCA9IF9zc2RMaXN0LmZpbmQoJy5TU0RfTGlzdExpbmUuU2hvd01vcmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jdXJyZW50Rm9jdXMrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9zZWxlY3RlZEVsZW1lbnQgPSBfc3NkTGlzdC5maW5kKCdzcGFuLlNTRF9MaXN0UmVjb3JkcyA+IHNwYW46bGFzdC1jaGlsZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZihldmVudC5rZXkgPT0gXCJBcnJvd0Rvd25cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKF9zZWxlY3RlZEVsZW1lbnQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihfc2VsZWN0ZWRFbGVtZW50LmlzKCcuU1NEX0xpc3RMaW5lLlNob3dNb3JlLmZvY3VzJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9zZWxlY3RlZEVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2ZvY3VzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfc2VsZWN0ZWRFbGVtZW50ID0gJChudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9zZWxlY3RlZEVsZW1lbnQgPSBfc2VsZWN0ZWRFbGVtZW50LnJlbW92ZUNsYXNzKCdmb2N1cycpLm5leHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIV9zZWxlY3RlZEVsZW1lbnQubGVuZ3RoICYmIF9zc2RMaXN0LmZpbmQoJy5TU0RfTGlzdExpbmUuU2hvd01vcmUnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfc2VsZWN0ZWRFbGVtZW50ID0gX3NzZExpc3QuZmluZCgnLlNTRF9MaXN0TGluZS5TaG93TW9yZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfY3VycmVudEZvY3VzKys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfc2VsZWN0ZWRFbGVtZW50ID0gX3NzZExpc3QuZmluZCgnc3Bhbi5TU0RfTGlzdFJlY29yZHMgPiBzcGFuOmZpcnN0LWNoaWxkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jdXJyZW50Rm9jdXMgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgX3NlbGVjdGVkRWxlbWVudC5hZGRDbGFzcygnZm9jdXMnKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYoIV9zZWxlY3RlZEVsZW1lbnQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3NkQ29tcG9uZW50LmZvY3VzU2VsZWN0ZWRUYWIoX3NzZENvbXBvbmVudC5maW5kKCcuU1NELUJhcicpLGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBfY3VycmVudEZvY3VzID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFfc2VsZWN0ZWRFbGVtZW50LmZpbmQoJy5TU0RfTGlzdExpbmUuRGlzYWJsZWQnKS5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgICAgIF9zZWxlY3RlZEVsZW1lbnQuZmluZCgnLkV4cGFuZENvbnRyb2wgPiBhJykuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIF9zc2RMaXN0LmZpbmQoJ2EuT3RoZXJDb250cm9sTGluaycpLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIF9zc2RMaXN0LmF0dHIoJ2N1cnJlbnQtZm9jdXMnLCBfY3VycmVudEZvY3VzKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNzZENvbXBvbmVudC5jbGVhcktleWJvYXJkTmF2U3RhdHVzKF9zc2RDb21wb25lbnQpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2xlYXJLZXlib2FyZE5hdlN0YXR1czogZnVuY3Rpb24oc3NkQ29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgIHZhciBfc3NkQ29tcG9uZW50ID0gJChzc2RDb21wb25lbnQpO1xyXG4gICAgICAgICAgICB2YXIgX3NzZExpc3QgPSBfc3NkQ29tcG9uZW50LmZpbmQoJy5TU0QtTGlzdCcpO1xyXG5cclxuICAgICAgICAgICAgaWYoX3NzZExpc3QuZmluZCgnLlNTRF9MaXN0TGluZS5TaG93TW9yZS5mb2N1cycpLmxlbmd0aClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIF9zc2RDb21wb25lbnQucmVtb3ZlQ2xhc3MoJ0tleWJvYXJkTmF2Jyk7XHJcbiAgICAgICAgICAgIF9zc2RMaXN0LmF0dHIoJ2N1cnJlbnQtZm9jdXMnLCAwKVxyXG4gICAgICAgICAgICAgICAgLmZpbmQoJ3NwYW4uU1NEX0xpc3RSZWNvcmRzID4gc3Bhbi5mb2N1cycpLnJlbW92ZUNsYXNzKCdmb2N1cycpXHJcbiAgICAgICAgICAgICAgICAuZmluZCgnLkV4cGFuZENvbnRyb2wgPiBhJykuYmx1cigpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2Nyb2xsSGFuZGxlcjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBfc3NkQ29tcG9uZW50ID0gJCgnZGl2LlNTRC1XcmFwcGVyLlNlbGVjdGVkIC5TU0QtQ29tcG9uZW50JykuZmlyc3QoKTtcclxuICAgICAgICAgICAgaWYoTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLCB3aW5kb3cuaW5uZXJXaWR0aCB8fCAwKSA8PSAxMDI0KXtcclxuICAgICAgICAgICAgICAgIGlmKF9zc2RDb21wb25lbnRbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wID4gJChcIi50b29sYmFyLXdyYXBwZXIuRml4ZWRcIikub3V0ZXJIZWlnaHQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIF9zc2RDb21wb25lbnQucmVtb3ZlQ2xhc3MoJ0ZpeGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLlNTRC1XcmFwcGVyLlNlbGVjdGVkID4gLlNTRC1Db21wb25lbnQuRml4ZWQgPiAuU1NELUJhcicpLmNzcygndG9wJywgJChcIi50b29sYmFyLXdyYXBwZXIuRml4ZWRcIikub3V0ZXJIZWlnaHQoKSArICdweCcpOyBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAvKk5vdCBNb2JpbGUgYXBwbHkgZml4ZWQgYmVoYXZpb3VyKi9cclxuICAgICAgICAgICAgICAgIGlmKF9zc2RDb21wb25lbnRbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wID4gKCQoJy5Ub3BQYXRpZW50SGVhZGVyJykub3V0ZXJIZWlnaHQodHJ1ZSkgKyAkKCcuSGVhZGVyJykub3V0ZXJIZWlnaHQodHJ1ZSkgKyAkKFwiLnRvb2xiYXItd3JhcHBlclwiKS5vdXRlckhlaWdodCgpKyAkKCcuQ1RUQVNMZXZlbEFzc2Vzc21lbnRNYWluQ29udGFpbmVyJykub3V0ZXJIZWlnaHQodHJ1ZSkgKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIF9zc2RDb21wb25lbnQucmVtb3ZlQ2xhc3MoJ0ZpeGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLlNTRC1XcmFwcGVyLlNlbGVjdGVkID4gLlNTRC1Db21wb25lbnQuRml4ZWQgPiAuU1NELUJhcicpLmNzcygndG9wJywoJCgnLlRvcFBhdGllbnRIZWFkZXInKS5vdXRlckhlaWdodCh0cnVlKSArICQoJy5IZWFkZXInKS5vdXRlckhlaWdodCh0cnVlKSArICQoXCIudG9vbGJhci13cmFwcGVyXCIpLm91dGVySGVpZ2h0KCkgKyAkKCcuQ1RUQVNMZXZlbEFzc2Vzc21lbnRNYWluQ29udGFpbmVyJykub3V0ZXJIZWlnaHQodHJ1ZSkpICsgJ3B4Jyk7IFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgX3NzZENvbXBvbmVudC5hZGRDbGFzcygnRml4ZWQnKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uKF9pbnB1dElkKSB7IC8qIFVzZWQgdG8gZGVzdHJveSBhIHNwZWNpZmljIHNzZCBjb21wb25lbnQgYnkgcmVjZWl2ZSB0aGUgaW5wdXQgaWRlbnRpZmllciBhcyBwYXJhbWV0ZXIgYW5kIGRldGVybWluZSB0aGUgd3JhcHBlciB0byByZW1vdmUuICovXHJcbiAgICAgICAgICAgICQoJ1tkYXRhLXNzZC1wbGFjZWhvbGRlcj0nICsgc3NkQ29tcG9uZW50LmlkICsgJ10nKS5yZW1vdmUoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKHNzZENvbXBvbmVudFdpZGdldCxfdG9EZXN0cm95KSB7XHJcbiAgICAgICAgICAgIHNzZENvbXBvbmVudC5sZW5ndGgrKztcclxuICAgICAgICAgICAgc3NkQ29tcG9uZW50Lm51bWJlck9mQWN0aXZlID0gMDtcclxuICAgICAgICAgICAgc3NkQ29tcG9uZW50LmlzUlRMID0gJCgnaHRtbCcpLmlzKCcucnRsJyk7XHJcbiAgICAgICAgICAgIHNzZENvbXBvbmVudC50b0Rlc3Ryb3kgPSBfdG9EZXN0cm95O1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHNzZENvbXBvbmVudFdpZGdldCAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgc3NkQ29tcG9uZW50LmlkID0gJChzc2RDb21wb25lbnRXaWRnZXQpLmF0dHIoJ2lkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIF9zc2RDb21wb25lbnRXaWRnZXQgPSAkKHNzZENvbXBvbmVudFdpZGdldCk7XHJcbiAgICAgICAgICAgIHZhciBfc3NkQ29tcG9uZW50ID0gX3NzZENvbXBvbmVudFdpZGdldC5maW5kKCcuU1NELUNvbXBvbmVudCcpO1xyXG4gICAgICAgICAgICB2YXIgX3NzZEJhciA9IF9zc2RDb21wb25lbnQuY2hpbGRyZW4oJy5TU0QtQmFyJykuZmlyc3QoKTtcclxuICAgICAgICAgICAgdmFyIF9zZWFyY2hJY29uID0gX3NzZEJhci5maW5kKCcuU2VhcmNoSWNvbicpLmZpcnN0KCk7XHJcbiAgICAgICAgICAgIHZhciBfaW5wdXQgPSBfc3NkQmFyLmZpbmQoJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdJykuZmlyc3QoKTtcclxuICAgICAgICAgICAgdmFyIF9jbGVhckNvbnRyb2wgPSBfc3NkQmFyLmZpbmQoJy5DbGVhckNvbnRyb2wnKS5maXJzdCgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgX3NlYXJjaEljb24ub2ZmKCdjbGljaycpLm9uKCdjbGljaycsIHtcclxuICAgICAgICAgICAgICAgIHNzZENvbXBvbmVudFdpZGdldDogX3NzZENvbXBvbmVudFdpZGdldCxcclxuICAgICAgICAgICAgICAgIHNzZEJhcjogX3NzZEJhclxyXG4gICAgICAgICAgICB9LCBzc2RDb21wb25lbnQuc2VhcmNoSWNvbik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBfc3NkQmFyLmNoaWxkcmVuKCdkaXYnKS5vZmYoJ2NsaWNrJykub24oJ2NsaWNrJywge1xyXG4gICAgICAgICAgICAgICAgc3NkQ29tcG9uZW50V2lkZ2V0OiBfc3NkQ29tcG9uZW50V2lkZ2V0LFxyXG4gICAgICAgICAgICAgICAgc3NkQmFyOiBfc3NkQmFyXHJcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBzc2RDb21wb25lbnQudGFiU2VsZWN0KGV2ZW50LmRhdGEuc3NkQ29tcG9uZW50V2lkZ2V0LCBldmVudC5kYXRhLnNzZEJhciwgdGhpcyxmYWxzZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgX2NsZWFyQ29udHJvbC5vZmYoJ2NsaWNrJykub24oJ2NsaWNrJywgc3NkQ29tcG9uZW50Lm9uQmx1ckRlc3Ryb3kpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgX2lucHV0Lm9mZigna2V5dXAnKS5vbigna2V5dXAnLCB7XHJcbiAgICAgICAgICAgICAgICBzc2RDb21wb25lbnRXaWRnZXQ6IF9zc2RDb21wb25lbnRXaWRnZXQsXHJcbiAgICAgICAgICAgICAgICBzc2RCYXI6IF9zc2RCYXIsXHJcbiAgICAgICAgICAgICAgICBpbnB1dDogX2lucHV0XHJcbiAgICAgICAgICAgIH0sIHNzZENvbXBvbmVudC5pbnB1dEV2ZW50KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIF9pbnB1dC5vZmYoJ2tleWRvd24nKS5vbigna2V5ZG93bicsIHtcclxuICAgICAgICAgICAgICAgIHNzZENvbXBvbmVudFdpZGdldDogX3NzZENvbXBvbmVudFdpZGdldCxcclxuICAgICAgICAgICAgICAgIHNzZEJhcjogX3NzZEJhcixcclxuICAgICAgICAgICAgICAgIGlucHV0OiBfaW5wdXRcclxuICAgICAgICAgICAgfSwgc3NkQ29tcG9uZW50LmtleWRvd25FdmVudCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAkKF9zc2RDb21wb25lbnQpLm9mZignY2xpY2snKS5vbignY2xpY2snLCB7XHJcbiAgICAgICAgICAgICAgICBzc2RDb21wb25lbnQ6IF9zc2RDb21wb25lbnRcclxuICAgICAgICAgICAgfSwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIHNzZENvbXBvbmVudC5jbGVhcktleWJvYXJkTmF2U3RhdHVzKGV2ZW50LmRhdGEuc3NkQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgICQod2luZG93KS5vbigncmVzaXplJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBzc2RDb21wb25lbnQucmVzaXplKCk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBpZighJChldmVudC50YXJnZXQpLmlzKCc6dmlzaWJsZScpKSB7IC8qIENsaWNrcyBvbiBoaWRkZW4gZWxlbWVudHMgYXJlIGRpc21pc3NlZC4gKi9cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB2YXIgZSA9ICQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KCcuU1NELUNvbXBvbmVudCcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKCFlLmxlbmd0aCkgeyAvLyBVc2VyIGNsaWNrZWQgb3V0c2lkZSB0aGUgU1NELUNvbXBvbmVudD9cclxuICAgICAgICAgICAgc3NkQ29tcG9uZW50Lm9uQmx1ckRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgJChkb2N1bWVudCkub24oJ2tleWRvd24nLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIGlmKHNzZENvbXBvbmVudC5udW1iZXJPZkFjdGl2ZSA+IDApIHtcclxuICAgICAgICAgICAgaWYoZXZlbnQua2V5Q29kZSA9PSBcIjI3XCIpIHsgLy8gVXNlciBoaXQgRXNjYXBlXHJcbiAgICAgICAgICAgICAgICBzc2RDb21wb25lbnQub25CbHVyRGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGV2ZW50LmtleSA9PSBcIkFycm93VXBcIiB8fCBldmVudC5rZXkgPT0gXCJBcnJvd0Rvd25cIikge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICAkKGRvY3VtZW50KS5vbigna2V5dXAnLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIGlmKHNzZENvbXBvbmVudC5udW1iZXJPZkFjdGl2ZSA+IDApIHsgLy8gSWYgdGhlcmUncyBhbiBTU0QgY29tcG9uZW50IGFjdGl2ZSwgZ28gZm9yIEtleWJvYXJkIGhhbmRsZXJcclxuICAgICAgICAgICAgc3NkQ29tcG9uZW50LmtleWJvYXJkSGFuZGxlcihldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgICQoZG9jdW1lbnQpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZihzc2RDb21wb25lbnQubnVtYmVyT2ZBY3RpdmUgPiAwKSB7IC8vIElmIHRoZXJlJ3MgYW4gU1NEIGNvbXBvbmVudCBhY3RpdmUsIGdvIGZvciBzY3JvbGwgaGFuZGxlclxyXG4gICAgICAgICAgICBzc2RDb21wb25lbnQuc2Nyb2xsSGFuZGxlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuIiwiLyogQ29tcG9uZW50IFNTRExpc3RMaW5lICovXHJcblNhcHBoaXJlV2lkZ2V0cy5TU0RMaXN0TGluZSA9IHtcclxuXHR0b2dnbGU6IChsaW5lSWQsIGxpbmVIYW5kbGVyID0gJycpID0+IHtcclxuXHRcdHZhciBfbGluZSA9ICQobGluZUlkKS5pcygnLlNTRF9MaXN0TGluZScpXHJcblx0XHRcdD8gJChsaW5lSWQpXHJcblx0XHRcdDogJChsaW5lSWQpXHJcblx0XHRcdFx0XHQuY2hpbGRyZW4oJy5TU0RfTGlzdExpbmUnKVxyXG5cdFx0XHRcdFx0LmZpcnN0KCk7XHJcblxyXG5cdFx0aWYgKCFfbGluZS5sZW5ndGgpIHJldHVybjtcclxuXHJcblx0XHR2YXIgX2V4cGFuZENvbnRyb2wgPSAkKCcuZXhwYW5kLWNvbnRyb2wtY3VzdG9tLXdpZHRoJyk7XHJcblxyXG5cdFx0aWYgKF9leHBhbmRDb250cm9sLmxlbmd0aCAhPSAwKSB7XHJcblx0XHRcdF9leHBhbmRDb250cm9sLnJlbW92ZUNsYXNzKCdleHBhbmQtY29udHJvbC1jdXN0b20td2lkdGgnKTtcclxuXHRcdFx0X2V4cGFuZENvbnRyb2wuY3NzKCd3aWR0aCcsICcnKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIV9saW5lLmlzKCcuQWN0aXZlJykpIHtcclxuXHRcdFx0dmFyIF9saW5lSGVhZGVyID0gX2xpbmVcclxuXHRcdFx0XHQuY2xvc2VzdCgnZGl2LlNlbGVjdGFibGVMaXN0LCAuU2VsZWN0YWJsZUxpc3QtTGlzdFJlY29yZHMnKVxyXG5cdFx0XHRcdC5maW5kKCdkaXYuU2VsZWN0YWJsZUxpc3QtTGluZS5BY3RpdmUnKVxyXG5cdFx0XHRcdC5ub3QoX2xpbmUpO1xyXG5cclxuXHRcdFx0X2xpbmVIZWFkZXIuZmluZCgnYVtoaWRlLWFjdGlvbl0nKS5jbGljaygpO1xyXG5cdFx0XHRfbGluZUhlYWRlclxyXG5cdFx0XHRcdC5yZW1vdmVDbGFzcygnQWN0aXZlJylcclxuXHRcdFx0XHQuY2hpbGRyZW4oJ3NwYW4nKVxyXG5cdFx0XHRcdC5oaWRlKDIwMCk7XHJcblx0XHRcdF9saW5lLmFkZENsYXNzKCdBY3RpdmUnKTtcclxuXHJcblx0XHRcdGlmICgkKGxpbmVIYW5kbGVyKS5sZW5ndGgpIHtcclxuXHRcdFx0XHQkKGxpbmVIYW5kbGVyKS5jbGljaygpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRfbGluZS5yZW1vdmVDbGFzcygnQWN0aXZlJyk7XHJcblx0XHR9XHJcblx0fSxcclxufTtcclxuIiwiLyogQ29tcG9uZW50IFRhYmxlRm9ybSAqL1xyXG4oZnVuY3Rpb24oJCwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpIHtcclxuXHRjb25zdCBhZGRFbXB0eUxpbmUgPSBjb25maWcgPT4ge1xyXG5cdFx0Y29uc3QgJGxpc3QgPSAkKCcuVGFibGVGb3JtQ29sdW1uOm5vdCguVGFibGVGb3JtQ29sdW1uLS1lZGl0TW9kZSkgLlRhYmxlRm9ybUNvbHVtbl9fRmllbGRzID4gLkxpc3RSZWNvcmRzJyk7XHJcblxyXG5cdFx0JGxpc3QuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiVGFibGVGb3JtQ29sdW1uX19FbXB0eUl0ZW1cIj48L2Rpdj4nKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCByZW1vdmVFbXB0eUxpbmUgPSBjb25maWcgPT4ge1xyXG5cdFx0Y29uc3QgJGxpc3QgPSAkKCcuVGFibGVGb3JtQ29sdW1uOm5vdCguVGFibGVGb3JtQ29sdW1uLS1lZGl0TW9kZSkgLlRhYmxlRm9ybUNvbHVtbl9fRmllbGRzID4gLkxpc3RSZWNvcmRzJyk7XHJcblxyXG5cdFx0JGxpc3QuZWFjaChmdW5jdGlvbihpbmRleCkge1xyXG5cdFx0XHQkKHRoaXMpXHJcblx0XHRcdFx0LmZpbmQoJz4gLlRhYmxlRm9ybUNvbHVtbl9fRW1wdHlJdGVtOmZpcnN0JylcclxuXHRcdFx0XHQucmVtb3ZlKCk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBvbkNvbXBvbmVudFJlbG9hZCA9IHdpZGdldElkID0+IHtcclxuXHRcdGNvbnN0ICR0YWJsZSA9ICQoYCMke3dpZGdldElkfWApO1xyXG5cdFx0Y29uc3QgJGVkaXRpbmcgPSAkdGFibGUuZmluZCgnLlRhYmxlRm9ybUNvbHVtbi0tZWRpdE1vZGUnKTtcclxuXHJcblx0XHRpZiAoJGVkaXRpbmcubGVuZ3RoKSB7XHJcblx0XHRcdCR0YWJsZS5hZGRDbGFzcygnVGFibGVGb3JtLS1zY3JvbGxEaXNhYmxlZCcpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0JHRhYmxlLnJlbW92ZUNsYXNzKCdUYWJsZUZvcm0tLXNjcm9sbERpc2FibGVkJyk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0U2FwcGhpcmVXaWRnZXRzLlRhYmxlRm9ybSA9IHsgYWRkRW1wdHlMaW5lLCBvbkNvbXBvbmVudFJlbG9hZCwgcmVtb3ZlRW1wdHlMaW5lIH07XHJcbn0pKGpRdWVyeSwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpO1xyXG4iLCIvKiBDb21wb25lbnQgVGFic0V4dGVuZGVkICovXHJcblNhcHBoaXJlV2lkZ2V0cy5UYWJzRXh0ZW5kZWQgPSBmdW5jdGlvbihjb25maWcpIHtcclxuXHQkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHRcdGNvbnN0ICRjb21wb25lbnQgPSAkKGAjJHtjb25maWcud2lkZ2V0SWR9IC5UYWJzX0V4dGVuZGVkYCk7XHJcblx0XHRjb25zdCAkdGFiSGVhZGVyID0gJGNvbXBvbmVudC5maW5kKCcuVGFic19oZWFkZXInKTtcclxuXHRcdGNvbnN0ICR0YWJDb250YWluZXIgPSAkY29tcG9uZW50LmZpbmQoJy5UYWJzQ29udGFpbmVyJyk7XHJcblx0XHRjb25zdCAkdGFicyA9ICR0YWJIZWFkZXIuZmluZCgnPiAuVGFic19fdGFiJyk7XHJcblx0XHRjb25zdCAkdGFic0VuYWJsZWQgPSAkdGFiSGVhZGVyLmZpbmQoJz4gLlRhYnNfX3RhYjpub3QoLmRpc2FibGVkKScpO1xyXG5cdFx0Y29uc3QgJHRhYnNJbnB1dCA9ICRjb21wb25lbnQuZmluZCgnLlRhYnNfSW5wdXQgaW5wdXQnKTtcclxuXHJcblx0XHQkdGFicy5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpZiAoJCh0aGlzKS50ZXh0KCkgPT09ICcnKSB7XHJcblx0XHRcdFx0JCh0aGlzKS5yZW1vdmUoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0JHRhYnNFbmFibGVkLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkdGFiQ29udGFpbmVyLmF0dHIoJ2FjdGl2ZXRhYicsICQodGhpcykuYXR0cigndmFsdWUnKSk7XHJcblxyXG5cdFx0XHQkdGFic0lucHV0LnZhbCgkKHRoaXMpLmF0dHIoJ3ZhbHVlJykpO1xyXG5cdFx0XHQkdGFic0lucHV0LmNoYW5nZSgpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0JHRhYnNFbmFibGVkLm9mZignbW91c2Vkb3duJykub24oJ21vdXNlZG93bicsIGZ1bmN0aW9uKGV2dCkge1xyXG5cdFx0XHR2YXIgJHRhYnNFeHRlbmRlZCA9ICQoZXZ0LnRhcmdldCkuY2xvc2VzdCgnLlRhYnNfRXh0ZW5kZWQnKTtcclxuXHRcdFx0JHRhYnNFeHRlbmRlZC5yZW1vdmVDbGFzcygnaXNDbG9zZWQnKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdCQoJy5UYWJzX0V4dGVuZGVkLkhpZGVBY3RpdmVPbkNsaWNrIC5UYWJzX2hlYWRlcicpXHJcblx0XHRcdC5vZmYoJ21vdXNlZG93bicpXHJcblx0XHRcdC5vbignbW91c2Vkb3duJywgJy5UYWJzX190YWIuYWN0aXZlJywgZnVuY3Rpb24oZXZ0KSB7XHJcblx0XHRcdFx0dmFyICR0YWJzRXh0ZW5kZWQgPSAkKGV2dC50YXJnZXQpLmNsb3Nlc3QoJy5UYWJzX0V4dGVuZGVkJyk7XHJcblx0XHRcdFx0dmFyICR0YWJzQm9keSA9ICR0YWJzRXh0ZW5kZWQuZmluZCgnLlRhYnNfYm9keScpO1xyXG5cclxuXHRcdFx0XHRpZiAoJHRhYnNCb2R5Lmhhc0NsYXNzKCdUYWJzX2JvZHktLWNsb3NlZCcpKSB7XHJcblx0XHRcdFx0XHQkdGFic0JvZHkucmVtb3ZlQ2xhc3MoJ1RhYnNfYm9keS0tY2xvc2VkJyk7XHJcblx0XHRcdFx0XHQkdGFic0V4dGVuZGVkLnJlbW92ZUNsYXNzKCdpc0Nsb3NlZCcpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQkdGFic0JvZHkuYWRkQ2xhc3MoJ1RhYnNfYm9keS0tY2xvc2VkJyk7XHJcblx0XHRcdFx0XHQkdGFic0V4dGVuZGVkLmFkZENsYXNzKCdpc0Nsb3NlZCcpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0JHRhYkhlYWRlci5maW5kKCcuVGFic19FeHRlbmRlZC0tZGlzYWJsZWQnKS5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbCkge1xyXG5cdFx0XHQkKGVsKVxyXG5cdFx0XHRcdC5wYXJlbnQoKVxyXG5cdFx0XHRcdC5jc3MoJ2N1cnNvcicsICdkZWZhdWx0JylcclxuXHRcdFx0XHQub2ZmKCdjbGljaycpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0JGNvbXBvbmVudC5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbCkge1xyXG5cdFx0XHRpZiAoJChlbCkuaGFzQ2xhc3MoJ1RhYnNfRXh0ZW5kZWQtLWNsb3NlZG9uc3RhcnQnKSkge1xyXG5cdFx0XHRcdCQoZWwpXHJcblx0XHRcdFx0XHQuZmluZCgnLlRhYnNfYm9keScpXHJcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ1RhYnNfYm9keS0tY2xvc2VkJyk7XHJcblx0XHRcdFx0JChlbCkuYWRkQ2xhc3MoJ2lzQ2xvc2VkJyk7XHJcblx0XHRcdFx0JChlbCkucmVtb3ZlQ2xhc3MoJ1RhYnNfRXh0ZW5kZWQtLWNsb3NlZG9uc3RhcnQnKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0JChlbClcclxuXHRcdFx0XHQub2ZmKCdjbGljaycpXHJcblx0XHRcdFx0Lm9uKCdjbGljaycsICcuVGFic19FeHRlbmRlZC0tY2xvc2UnLCBmdW5jdGlvbihldnQpIHtcclxuXHRcdFx0XHRcdCQoZXZ0LnRhcmdldClcclxuXHRcdFx0XHRcdFx0LmNsb3Nlc3QoJy5UYWJzX2JvZHknKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ1RhYnNfYm9keS0tY2xvc2VkJyk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRpZiAoIWNvbmZpZy50YWIxRW5hYmxlZCkgJHRhYkhlYWRlci5maW5kKCc+IC5UYWJzX190YWJbdmFsdWU9MV0nKS5hZGRDbGFzcygnZGlzYWJsZWQnKTtcclxuXHRcdGlmICghY29uZmlnLnRhYjJFbmFibGVkKSAkdGFiSGVhZGVyLmZpbmQoJz4gLlRhYnNfX3RhYlt2YWx1ZT0yXScpLmFkZENsYXNzKCdkaXNhYmxlZCcpO1xyXG5cdFx0aWYgKCFjb25maWcudGFiM0VuYWJsZWQpICR0YWJIZWFkZXIuZmluZCgnPiAuVGFic19fdGFiW3ZhbHVlPTNdJykuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XHJcblx0XHRpZiAoIWNvbmZpZy50YWI0RW5hYmxlZCkgJHRhYkhlYWRlci5maW5kKCc+IC5UYWJzX190YWJbdmFsdWU9NF0nKS5hZGRDbGFzcygnZGlzYWJsZWQnKTtcclxuXHRcdGlmICghY29uZmlnLnRhYjVFbmFibGVkKSAkdGFiSGVhZGVyLmZpbmQoJz4gLlRhYnNfX3RhYlt2YWx1ZT01XScpLmFkZENsYXNzKCdkaXNhYmxlZCcpO1xyXG5cdH0pO1xyXG59O1xyXG4iLCIvKiBDb21wb25lbnQgVGFidWxhckxpc3QgKi9cclxuKGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cykge1xyXG5cdHZhciBhbGxUYWJ1bGFyTGlzdHMgPSBbXTtcclxuXHJcblx0dmFyIGNyZWF0ZSA9IGZ1bmN0aW9uKGNvbmZpZykge1xyXG5cdFx0d2luZG93W2NvbmZpZy50YWJ1bGFyTGlzdElkXSA9IG5ldyBUYWJ1bGFyTGlzdChjb25maWcpO1xyXG5cdFx0YWxsVGFidWxhckxpc3RzLnB1c2god2luZG93W2NvbmZpZy50YWJ1bGFyTGlzdElkXSk7XHJcblxyXG5cdFx0JCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciBhbGxUYWJ1bGFyTGlzdHMgPSBTYXBwaGlyZVdpZGdldHMuVGFidWxhckxpc3QuYWxsKCk7XHJcblx0XHRcdGFsbFRhYnVsYXJMaXN0cy5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQsIGkpIHtcclxuXHRcdFx0XHRlbGVtZW50LmhhbmRsZVRhYnVsYXJMaXN0Q29sdW1ucygpO1xyXG5cdFx0XHRcdGVsZW1lbnQuaGFuZGxlUmVzcG9uc2l2ZUNsYXNzZXMoMjAwKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHQkKHdpbmRvdykub24oJ3Jlc2l6ZS50YWJ1bGFybGlzdCcsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgYWxsVGFidWxhckxpc3RzID0gU2FwcGhpcmVXaWRnZXRzLlRhYnVsYXJMaXN0LmFsbCgpO1xyXG5cdFx0XHRhbGxUYWJ1bGFyTGlzdHMuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50LCBpKSB7XHJcblx0XHRcdFx0ZWxlbWVudC5oYW5kbGVSZXNwb25zaXZlQ2xhc3NlcygyMDApO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdHZhciBUYWJ1bGFyTGlzdCA9IGZ1bmN0aW9uKGNvbmZpZykge1xyXG5cdFx0dmFyIF90aGlzID0gdGhpcztcclxuXHRcdHRoaXMuY29uZmlnID0gY29uZmlnO1xyXG5cdFx0dGhpcy50YWJ1bGFyTGlzdFJlc2l6ZVRpbWVyID0gMDtcclxuXHRcdHRoaXMuJHdpZGdldCA9ICQoJyMnICsgY29uZmlnLnRhYnVsYXJMaXN0SWQpO1xyXG5cdFx0dGhpcy4kd2lkZ2V0TGlzdCA9IHRoaXMuJHdpZGdldC5maW5kKCc+IC5UYWJ1bGFyTGlzdCcpO1xyXG5cdFx0dGhpcy4kd2lkZ2V0LmZpbmQoJy5UYWJ1bGFyTGlzdFJvdycpLmVhY2goZnVuY3Rpb24oaSwgcm93KSB7XHJcblx0XHRcdF90aGlzLmNvbHVtbnNDb3VudCA9IDA7XHJcblx0XHRcdCQocm93KVxyXG5cdFx0XHRcdC5maW5kKCcuVGFidWxhckxpc3RSb3ctdmFsdWVzIC5UYWJ1bGFyTGlzdFJvdy1pdGVtJylcclxuXHRcdFx0XHQuZWFjaChmdW5jdGlvbihpLCBlbCkge1xyXG5cdFx0XHRcdFx0JChlbCkuYWRkQ2xhc3MoJ1RhYnVsYXJMaXN0Q29sdW1uJyArIChpICsgMSkpO1xyXG5cdFx0XHRcdFx0X3RoaXMuY29sdW1uc0NvdW50Kys7XHJcblx0XHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHRcdGlmICghIWNvbmZpZy5icmVha09uKSB7XHJcblx0XHRcdHRoaXMuYnJlYWtPbk9yZGVyID0gcGFyc2VJbnQoY29uZmlnLmJyZWFrT24pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5icmVha09uT3JkZXIgPSAwO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5oYW5kbGVUYWJ1bGFyTGlzdENvbHVtbnMoKTtcclxuXHR9O1xyXG5cclxuXHRUYWJ1bGFyTGlzdC5wcm90b3R5cGUuaGFuZGxlVGFidWxhckxpc3RDb2x1bW5zID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAodGhpcy5jb25maWcuY29sdW1uc1dpZHRoID09PSAnQXV0bycpIHtcclxuXHRcdFx0aWYgKHRoaXMuJHdpZGdldExpc3Qud2lkdGgoKSA+IDEpIHtcclxuXHRcdFx0XHRmb3IgKGkgPSAxOyBpIDw9IHRoaXMuY29sdW1uc0NvdW50OyBpKyspIHtcclxuXHRcdFx0XHRcdHZhciBtYXhXaWR0aENvbnRlbnQgPSBNYXRoLm1heC5hcHBseShcclxuXHRcdFx0XHRcdFx0bnVsbCxcclxuXHRcdFx0XHRcdFx0dGhpcy4kd2lkZ2V0XHJcblx0XHRcdFx0XHRcdFx0LmZpbmQoJy5UYWJ1bGFyTGlzdENvbHVtbicgKyBpKVxyXG5cdFx0XHRcdFx0XHRcdC5tYXAoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gJCh0aGlzKS5vdXRlcldpZHRoKHRydWUpO1xyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0LmdldCgpXHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0dGhpcy4kd2lkZ2V0LmZpbmQoJy5UYWJ1bGFyTGlzdENvbHVtbicgKyBpKS53aWR0aChtYXhXaWR0aENvbnRlbnQpO1xyXG5cdFx0XHRcdFx0dGhpcy4kd2lkZ2V0LmZpbmQoJy5UYWJ1bGFyTGlzdENvbHVtbicgKyBpKS5jc3MoJ29wYWNpdHknLCAxKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmICghIXRoaXMuY29uZmlnLnByb3BlcnR5TWluV2lkdGgpIHtcclxuXHRcdFx0dGhpcy4kd2lkZ2V0LmZpbmQoJy5UYWJ1bGFyTGlzdFJvdy1wcm9wZXJ0eScpLmNzcygnbWluLXdpZHRoJywgY29udmVydEluQ1NTVmFsdWUodGhpcy5jb25maWcucHJvcGVydHlNaW5XaWR0aCkpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKCEhdGhpcy5jb25maWcucHJvcGVydHlNYXhXaWR0aCkge1xyXG5cdFx0XHR0aGlzLiR3aWRnZXQuZmluZCgnLlRhYnVsYXJMaXN0Um93LXByb3BlcnR5JykuY3NzKCdtYXgtd2lkdGgnLCBjb252ZXJ0SW5DU1NWYWx1ZSh0aGlzLmNvbmZpZy5wcm9wZXJ0eU1heFdpZHRoKSk7XHJcblx0XHR9XHJcblx0XHRpZiAoISF0aGlzLmNvbmZpZy5hY3Rpb25zTWluV2lkdGgpIHtcclxuXHRcdFx0dGhpcy4kd2lkZ2V0LmZpbmQoJy5UYWJ1bGFyTGlzdFJvdy1hY3Rpb25zJykuY3NzKCdtaW4td2lkdGgnLCBjb252ZXJ0SW5DU1NWYWx1ZSh0aGlzLmNvbmZpZy5hY3Rpb25zTWluV2lkdGgpKTtcclxuXHRcdH1cclxuXHRcdGlmICghIXRoaXMuY29uZmlnLmFjdGlvbnNNYXhXaWR0aCkge1xyXG5cdFx0XHR0aGlzLiR3aWRnZXQuZmluZCgnLlRhYnVsYXJMaXN0Um93LWFjdGlvbnMnKS5jc3MoJ21heC13aWR0aCcsIGNvbnZlcnRJbkNTU1ZhbHVlKHRoaXMuY29uZmlnLmFjdGlvbnNNYXhXaWR0aCkpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdFRhYnVsYXJMaXN0LnByb3RvdHlwZS5oYW5kbGVSZXNwb25zaXZlQ2xhc3NlcyA9IGZ1bmN0aW9uKHRpbWVvdXQpIHtcclxuXHRcdHZhciBfdGhpcyA9IHRoaXM7XHJcblx0XHR3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMudGFidWxhckxpc3RSZXNpemVUaW1lcik7XHJcblx0XHR0aGlzLnRhYnVsYXJMaXN0UmVzaXplVGltZXIgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0X3RoaXMuJHdpZGdldExpc3QucmVtb3ZlQ2xhc3MoZnVuY3Rpb24oaW5kZXgsIGNsYXNzTmFtZSkge1xyXG5cdFx0XHRcdHJldHVybiAoY2xhc3NOYW1lLm1hdGNoKC8oXnxcXHMpc2NyZWVuLVxcUysvZykgfHwgW10pLmpvaW4oJyAnKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRfdGhpcy4kd2lkZ2V0TGlzdC5yZW1vdmVDbGFzcygnaXNCcmVha2luZycpO1xyXG5cclxuXHRcdFx0dmFyIHdpZGdldFdpZHRoID0gX3RoaXMuJHdpZGdldExpc3Qub3V0ZXJXaWR0aCh0cnVlKTtcclxuXHRcdFx0aWYgKHdpZGdldFdpZHRoID09PSAwKSB7XHJcblx0XHRcdFx0d2lkZ2V0V2lkdGggPSBfdGhpcy4kd2lkZ2V0TGlzdFxyXG5cdFx0XHRcdFx0LnBhcmVudHMoJzp2aXNpYmxlJylcclxuXHRcdFx0XHRcdC5lcSgwKVxyXG5cdFx0XHRcdFx0Lm91dGVyV2lkdGgodHJ1ZSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICh3aWRnZXRXaWR0aCA+PSAxOTAwKSB7XHJcblx0XHRcdFx0X3RoaXMuJHdpZGdldExpc3QuYWRkQ2xhc3MoJ3NjcmVlbi1EZXNrdG9wSEQnKTtcclxuXHRcdFx0XHRpZiAoX3RoaXMuYnJlYWtPbk9yZGVyID49IDYpIHtcclxuXHRcdFx0XHRcdF90aGlzLiR3aWRnZXRMaXN0LmFkZENsYXNzKCdpc0JyZWFraW5nJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2UgaWYgKHdpZGdldFdpZHRoID49IDE2MDApIHtcclxuXHRcdFx0XHRfdGhpcy4kd2lkZ2V0TGlzdC5hZGRDbGFzcygnc2NyZWVuLURlc2t0b3BCaWcnKTtcclxuXHRcdFx0XHRpZiAoX3RoaXMuYnJlYWtPbk9yZGVyID49IDUpIHtcclxuXHRcdFx0XHRcdF90aGlzLiR3aWRnZXRMaXN0LmFkZENsYXNzKCdpc0JyZWFraW5nJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2UgaWYgKHdpZGdldFdpZHRoID49IDEzNjYpIHtcclxuXHRcdFx0XHRfdGhpcy4kd2lkZ2V0TGlzdC5hZGRDbGFzcygnc2NyZWVuLURlc2t0b3AnKTtcclxuXHRcdFx0XHRpZiAoX3RoaXMuYnJlYWtPbk9yZGVyID49IDQpIHtcclxuXHRcdFx0XHRcdF90aGlzLiR3aWRnZXRMaXN0LmFkZENsYXNzKCdpc0JyZWFraW5nJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2UgaWYgKHdpZGdldFdpZHRoID49IDEwMjQpIHtcclxuXHRcdFx0XHRfdGhpcy4kd2lkZ2V0TGlzdC5hZGRDbGFzcygnc2NyZWVuLURlc2t0b3BTbWFsbCcpO1xyXG5cdFx0XHRcdGlmIChfdGhpcy5icmVha09uT3JkZXIgPj0gMykge1xyXG5cdFx0XHRcdFx0X3RoaXMuJHdpZGdldExpc3QuYWRkQ2xhc3MoJ2lzQnJlYWtpbmcnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSBpZiAod2lkZ2V0V2lkdGggPj0gNDIwKSB7XHJcblx0XHRcdFx0X3RoaXMuJHdpZGdldExpc3QuYWRkQ2xhc3MoJ3NjcmVlbi1UYWJsZXQnKTtcclxuXHRcdFx0XHRpZiAoX3RoaXMuYnJlYWtPbk9yZGVyID49IDIpIHtcclxuXHRcdFx0XHRcdF90aGlzLiR3aWRnZXRMaXN0LmFkZENsYXNzKCdpc0JyZWFraW5nJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdF90aGlzLiR3aWRnZXRMaXN0LmFkZENsYXNzKCdzY3JlZW4tUGhvbmUnKTtcclxuXHRcdFx0XHRpZiAoX3RoaXMuYnJlYWtPbk9yZGVyID49IDEpIHtcclxuXHRcdFx0XHRcdF90aGlzLiR3aWRnZXRMaXN0LmFkZENsYXNzKCdpc0JyZWFraW5nJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9LCB0aW1lb3V0KTtcclxuXHR9O1xyXG5cclxuXHRTYXBwaGlyZVdpZGdldHMuVGFidWxhckxpc3QgPSB7XHJcblx0XHRjcmVhdGU6IGNyZWF0ZSxcclxuXHRcdGFsbDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJldHVybiBhbGxUYWJ1bGFyTGlzdHM7XHJcblx0XHR9LFxyXG5cdH07XHJcbn0pKGpRdWVyeSwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKTtcclxuXHJcbmZ1bmN0aW9uIGNvbnZlcnRJbkNTU1ZhbHVlKHZhbHVlX2luKSB7XHJcblx0dmFyIHJldHVybmVkO1xyXG5cdGlmICh2YWx1ZV9pbi5pbmNsdWRlcygncHgnKSB8fCB2YWx1ZV9pbi5pbmNsdWRlcygnJScpKSB7XHJcblx0XHRyZXR1cm5lZCA9IHZhbHVlX2luO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRyZXR1cm5lZCA9IHZhbHVlX2luICsgJ3B4JztcclxuXHR9XHJcblx0cmV0dXJuIHJldHVybmVkO1xyXG59XHJcbiIsIi8qIENvbXBvbmVudCBUYWJ1bGFyU2Nyb2xsICovXHJcbihmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpIHtcclxuXHRjb25zdCBjcmVhdGUgPSBmdW5jdGlvbihjb25maWcpIHtcclxuXHRcdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKCcuVGFidWxhclNjcm9sbCcpLmVhY2goZnVuY3Rpb24oaSwgZWwpIHtcclxuXHRcdFx0XHRzZXR1cFRhYnVsYXJTY3JvbGwoJChlbCkpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdCQod2luZG93KS5sb2FkKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRvc0FqYXhCYWNrZW5kICYmXHJcblx0XHRcdFx0b3NBamF4QmFja2VuZC5CaW5kQWZ0ZXJBamF4UmVxdWVzdChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdCQoJy5UYWJ1bGFyU2Nyb2xsJykuZWFjaChmdW5jdGlvbihpLCBlbCkge1xyXG5cdFx0XHRcdFx0XHRzZXR1cFRhYnVsYXJTY3JvbGwoJChlbCkpO1xyXG5cdFx0XHRcdFx0XHRyZXNpemVSb3dzKCQoZWwpKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0JCh3aW5kb3cpLm9uKCdyZXNpemUudGFidWxhcnNjcm9sbCcsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKCcuVGFidWxhclNjcm9sbCcpLmVhY2goZnVuY3Rpb24oaSwgZWwpIHtcclxuXHRcdFx0XHR2YXIgJGNlbnRlclRhYmxlID0gJChlbCkuZmluZCgnLlRhYnVsYXJTY3JvbGwtY2VudGVyLXRhYmxlJyk7XHJcblx0XHRcdFx0dmFyIHRhYmxlV2lkdGggPSAkY2VudGVyVGFibGUuZmluZCgndGFibGUnKS53aWR0aCgpO1xyXG5cdFx0XHRcdCQoZWwpXHJcblx0XHRcdFx0XHQuZmluZCgnLlRhYnVsYXJTY3JvbGwtY2VudGVyIC5Ub3BTY3JvbGxEcmFnZ2VyJylcclxuXHRcdFx0XHRcdC53aWR0aCh0YWJsZVdpZHRoKTtcclxuXHRcdFx0XHRpZiAoJGNlbnRlclRhYmxlWzBdLnNjcm9sbFdpZHRoID4gJGNlbnRlclRhYmxlLndpZHRoKCkpIHtcclxuXHRcdFx0XHRcdCQoZWwpXHJcblx0XHRcdFx0XHRcdC5maW5kKCcuVG9wU2Nyb2xsV3JhcHBlcicpXHJcblx0XHRcdFx0XHRcdC5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQkKGVsKVxyXG5cdFx0XHRcdFx0XHQuZmluZCgnLlRvcFNjcm9sbFdyYXBwZXInKVxyXG5cdFx0XHRcdFx0XHQuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBzZXR1cFRhYnVsYXJTY3JvbGwgPSBmdW5jdGlvbigkdGFidWxhclNjcm9sbCkge1xyXG5cdFx0dmFyICR0b3BTY3JvbGxXcmFwcGVyID0gJHRhYnVsYXJTY3JvbGwuZmluZCgnLlRvcFNjcm9sbFdyYXBwZXInKTtcclxuXHRcdHZhciAkY2VudGVyVGFibGUgPSAkdGFidWxhclNjcm9sbC5maW5kKCcuVGFidWxhclNjcm9sbC1jZW50ZXItdGFibGUnKTtcclxuXHRcdCR0YWJ1bGFyU2Nyb2xsLmZpbmQoJy5Ub3BTY3JvbGxXcmFwcGVyJykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkY2VudGVyVGFibGUuc2Nyb2xsTGVmdCgkdG9wU2Nyb2xsV3JhcHBlci5zY3JvbGxMZWZ0KCkpO1xyXG5cdFx0fSk7XHJcblx0XHQkY2VudGVyVGFibGUuc2Nyb2xsKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkdG9wU2Nyb2xsV3JhcHBlci5zY3JvbGxMZWZ0KCRjZW50ZXJUYWJsZS5zY3JvbGxMZWZ0KCkpO1xyXG5cdFx0fSk7XHJcblx0XHQvLyBzaW1pbGFyIHRvIFJlc2l6ZVxyXG5cdFx0dmFyIHRhYmxlV2lkdGggPSAkY2VudGVyVGFibGUuZmluZCgndGFibGUnKS53aWR0aCgpO1xyXG5cdFx0JHRhYnVsYXJTY3JvbGwuZmluZCgnLlRhYnVsYXJTY3JvbGwtY2VudGVyIC5Ub3BTY3JvbGxEcmFnZ2VyJykud2lkdGgodGFibGVXaWR0aCk7XHJcblx0XHRpZiAoJGNlbnRlclRhYmxlWzBdLnNjcm9sbFdpZHRoID4gJGNlbnRlclRhYmxlLndpZHRoKCkpIHtcclxuXHRcdFx0JHRhYnVsYXJTY3JvbGwuZmluZCgnLlRvcFNjcm9sbFdyYXBwZXInKS5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0JHRhYnVsYXJTY3JvbGwuZmluZCgnLlRvcFNjcm9sbFdyYXBwZXInKS5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Y29uc3QgcmVzaXplUm93cyA9IGZ1bmN0aW9uKCR0YWJ1bGFyU2Nyb2xsKSB7XHJcblx0XHRsZXQgYXJycmF5SGVpZ2h0ID0gW107XHJcblx0XHRjb25zdCAkdGFibGVDZW50ZXIgPSAkdGFidWxhclNjcm9sbC5maW5kKCcuVGFidWxhclNjcm9sbC1jZW50ZXItdGFibGUgdGFibGUgdGJvZHknKTtcclxuXHRcdGNvbnN0ICR0YWJsZVJpZ2h0ID0gJHRhYnVsYXJTY3JvbGwuZmluZCgnLlRhYnVsYXJTY3JvbGwtcmlnaHQgLkxpc3RSZWNvcmRzJyk7XHJcblx0XHRjb25zdCAkdGFibGVMZWZ0ID0gJHRhYnVsYXJTY3JvbGwuZmluZCgnLlRhYnVsYXJTY3JvbGwtbGVmdCAuTGlzdFJlY29yZHMnKTtcclxuXHJcblx0XHRhcnJyYXlIZWlnaHQgPSAkdGFibGVDZW50ZXJcclxuXHRcdFx0LmNoaWxkcmVuKCd0cicpXHJcblx0XHRcdC5tYXAoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuICQodGhpcykuaGVpZ2h0KCk7XHJcblx0XHRcdH0pXHJcblx0XHRcdC5nZXQoKTtcclxuXHJcblx0XHQkdGFibGVSaWdodC5jaGlsZHJlbigpLmVhY2goZnVuY3Rpb24oaW5kZXgpIHtcclxuXHRcdFx0JCh0aGlzKS5jc3MoJ2hlaWdodCcsIGFycnJheUhlaWdodFtpbmRleF0gKyAncHgnKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdCR0YWJsZUxlZnQuY2hpbGRyZW4oKS5lYWNoKGZ1bmN0aW9uKGluZGV4KSB7XHJcblx0XHRcdCQodGhpcykuY3NzKCdoZWlnaHQnLCBhcnJyYXlIZWlnaHRbaW5kZXhdICsgJ3B4Jyk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRTYXBwaGlyZVdpZGdldHMuVGFidWxhclNjcm9sbCA9IHsgY3JlYXRlIH07XHJcbn0pKGpRdWVyeSwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKTtcclxuIiwiLyogVGltZWxpbmUgSGVscGVycyAqL1xyXG5TYXBwaGlyZVdpZGdldHMuVGltZWxpbmVDb3VudGVySXRlbXMgPSBmdW5jdGlvbih0aXRsZUl0ZW1JRCwgbGFiZWwpIHtcclxuXHQkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHRcdGNvbnN0ICRzZWN0aW9uID0gJChgIyR7dGl0bGVJdGVtSUR9YCkucGFyZW50cygnLlRpbWVsaW5lSXRlbVNlY3Rpb24nKTtcclxuXHRcdGNvbnN0ICR0aXRsZSA9ICRzZWN0aW9uLmZpbmQoJy5UaW1lbGluZUl0ZW1IZWFkZXIgYScpO1xyXG5cdFx0Y29uc3QgJGl0ZW1zID0gJHNlY3Rpb24uZmluZCgnLlRpbWVsaW5lSXRlbScpO1xyXG5cclxuXHRcdCR0aXRsZS5hcHBlbmQoJChgPGRpdiBjbGFzcz0nQ29sb3JHcmV5VGV4dCBUZXh0TGFyZ2UgVGV4dFJlZ3VsYXInPiAoJHskaXRlbXMubGVuZ3RofSk8L2Rpdj5gKSk7XHJcblx0fSk7XHJcbn07XHJcblxyXG5TYXBwaGlyZVdpZGdldHMuU2Nyb2xsVG9FdmVudCA9IGZ1bmN0aW9uKGVsZW1lbnRJZCkge1xyXG5cdFNhcHBoaXJlV2lkZ2V0cy5MYXlvdXRCYXNlLnNjcm9sbFRvRWxlbWVudCgkKGAjJHtlbGVtZW50SWR9OmZpcnN0YCwgd2luZG93LnRvcC5kb2N1bWVudCksIDUyKTtcclxufTtcclxuXHJcblNhcHBoaXJlV2lkZ2V0cy5MaW5lVGltZWxpbmVDb21wb25lbnQgPSBmdW5jdGlvbih3aWRnZXRJZCwgaGFzQ29udGVudCwgaXNFeHBhbmRhYmxlKSB7XHJcblx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblx0XHRjb25zdCAkY29tcG9uZW50ID0gJChgIyR7d2lkZ2V0SWR9YCk7XHJcblxyXG5cdFx0aWYgKGhhc0NvbnRlbnQgJiYgaXNFeHBhbmRhYmxlKSB7XHJcblx0XHRcdGNvbnN0ICRleHBhbmRhYmxlTGluayA9ICRjb21wb25lbnQuZmluZCgnLkxpbmVUaW1lTGluZV9fSGVhZGVyJyk7XHJcblx0XHRcdGNvbnN0ICRhY3Rpb25zID0gJGNvbXBvbmVudC5maW5kKCcuTGluZVRpbWVMaW5lX19BY3Rpb25zJyk7XHJcblxyXG5cdFx0XHQkZXhwYW5kYWJsZUxpbmsuY2xpY2soKCkgPT4ge1xyXG5cdFx0XHRcdCRjb21wb25lbnQudG9nZ2xlQ2xhc3MoJ0xpbmVUaW1lTGluZS0tZXhwYW5kZWQnKTtcclxuXHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdCRhY3Rpb25zLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9KTtcclxufTtcclxuXHJcblNhcHBoaXJlV2lkZ2V0cy5UaW1lbGluZVBhZ2VFdmVudHMgPSBmdW5jdGlvbihzaG93TW9yZVRpbWVsaW5lTGluaykge1xyXG5cdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cdFx0JCh3aW5kb3cpXHJcblx0XHRcdC5vZmYoJ3Njcm9sbC5UaW1lbGluZScpXHJcblx0XHRcdC5vbignc2Nyb2xsLlRpbWVsaW5lJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0aWYgKHdpbmRvdy5zY3JvbGxZID09PSAwKSB7XHJcblx0XHRcdFx0XHRjb25zdCAkaXRlbSA9ICQoJy5UaW1lbGluZUFuY2hvcicpLmZpcnN0KCk7XHJcblx0XHRcdFx0XHRjb25zdCAkbGlzdCA9ICQoJy5UaW1lbGluZVBhZ2VfX05hdmlnYXRpb24gLkxpc3RSZWNvcmRzJyk7XHJcblxyXG5cdFx0XHRcdFx0c2VsZWN0SXRlbSgkaXRlbS5hdHRyKCdpZCcpKTtcclxuXHRcdFx0XHRcdGNsZWFyVGltZW91dCh3aW5kb3cuc2Nyb2xsRmluaXNoZWQpO1xyXG5cclxuXHRcdFx0XHRcdCRsaXN0LnNjcm9sbFRvcCgwKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHdpbmRvdy5zY3JvbGxGaW5pc2hlZCk7XHJcblx0XHRcdFx0XHR3aW5kb3cuc2Nyb2xsRmluaXNoZWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRsZXQgaWQgPSAwO1xyXG5cclxuXHRcdFx0XHRcdFx0JCgnLlRpbWVsaW5lQW5jaG9yJykuZWFjaChmdW5jdGlvbihpbmRleCkge1xyXG5cdFx0XHRcdFx0XHRcdGlmICgkKHdpbmRvdykuc2Nyb2xsVG9wKCkgKyAxOTAgPj0gJCh0aGlzKS5vZmZzZXQoKS50b3ApIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlkID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChpbmRleCA9PSAkKCcuVGltZWxpbmVBbmNob3InKS5sZW5ndGggLSAxKSBzZWxlY3RJdGVtKGlkKTtcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0c2VsZWN0SXRlbShpZCwgdHJ1ZSk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0d2luZG93Lmxhc3RJdGVtSUQgPSBpZDtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHRcdGlmICgkKGRvY3VtZW50KS5oZWlnaHQoKSAtICQodGhpcykuaGVpZ2h0KCkgLSAxNTAgPCAkKHRoaXMpLnNjcm9sbFRvcCgpKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc3QgJGxpc3QgPSAkKCcuVGltZWxpbmVQYWdlX19OYXZpZ2F0aW9uIC5MaXN0UmVjb3JkcycpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHQkKGAjJHtzaG93TW9yZVRpbWVsaW5lTGlua31gKS5jbGljaygpO1xyXG5cdFx0XHRcdFx0XHRcdCQoJy5UaW1lbGluZVBhZ2VfX1JpZ2h0IC5UaW1lbGluZVBhZ2VfX0xvYWRpbmdNb3JlJykuY3NzKCdkaXNwbGF5JywgJ2ZsZXgnKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0d2luZG93LnNjcm9sbExpc3RQb3NpdGlvbiA9ICRsaXN0LnNjcm9sbFRvcCgpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9LCAxMDApO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Y2hlY2tFbmRPZlBhZ2UoKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0aW5maW5pdGVTY3JvbGxMaXN0KHNob3dNb3JlVGltZWxpbmVMaW5rKTtcclxuXHR9KTtcclxufTtcclxuXHJcblNhcHBoaXJlV2lkZ2V0cy5UaW1lbGluZVJlc3RvcmVFdmVudHMgPSBmdW5jdGlvbihzaG93TW9yZVRpbWVsaW5lTGluaykge1xyXG5cdCQoJy5UaW1lbGluZVBhZ2VfX05hdmlnYXRpb24gLkxpc3RSZWNvcmRzJykuc2Nyb2xsVG9wKHdpbmRvdy5zY3JvbGxMaXN0UG9zaXRpb24pO1xyXG5cdCQoJy5UaW1lbGluZVBhZ2VfX0xvYWRpbmdNb3JlJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuXHJcblx0d2luZG93LmFscmVhZHlDbGlja2VkID0gZmFsc2U7XHJcblxyXG5cdGluZmluaXRlU2Nyb2xsTGlzdChzaG93TW9yZVRpbWVsaW5lTGluayk7XHJcblxyXG5cdGlmICh3aW5kb3cubGFzdEl0ZW1JRCkgc2VsZWN0SXRlbSh3aW5kb3cubGFzdEl0ZW1JRCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBzZWxlY3RJdGVtKGlkLCBzY3JvbGxUbykge1xyXG5cdGNvbnN0ICRuYXZJdGVtID0gJChgW2RhdGEtaXRlbT1ldmVudC0ke2lkfV0gLlRpbWVsaW5lSXRlbWApO1xyXG5cclxuXHQkKCcuVGltZWxpbmVJdGVtLlRpbWVsaW5lSXRlbS0tYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ1RpbWVsaW5lSXRlbS0tYWN0aXZlJyk7XHJcblx0JG5hdkl0ZW0uYWRkQ2xhc3MoJ1RpbWVsaW5lSXRlbS0tYWN0aXZlJyk7XHJcblxyXG5cdGlmIChzY3JvbGxUbyAmJiAkbmF2SXRlbS5sZW5ndGgpIHNjcm9sbFRvVmlldygkbmF2SXRlbSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNjcm9sbFRvVmlldyhlbGVtZW50KSB7XHJcblx0Y29uc3QgJHBhcmVudERpdiA9ICQoJy5UaW1lbGluZVBhZ2VfX05hdmlnYXRpb24gLkxpc3RSZWNvcmRzJyk7XHJcblxyXG5cdCRwYXJlbnREaXYuc2Nyb2xsVG9wKFxyXG5cdFx0JHBhcmVudERpdi5zY3JvbGxUb3AoKSArIGVsZW1lbnQucG9zaXRpb24oKS50b3AgLSAkcGFyZW50RGl2LmhlaWdodCgpIC8gMiArIGVsZW1lbnQuaGVpZ2h0KCkgLyAyXHJcblx0KTtcclxuXHJcblx0cmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluZmluaXRlU2Nyb2xsTGlzdChzaG93TW9yZU5hdkxpbmssIG5hbWUpIHtcclxuXHRjb25zdCAkbGlzdCA9ICQoJy5UaW1lbGluZVBhZ2VfX05hdmlnYXRpb24gLkxpc3RSZWNvcmRzJyk7XHJcblxyXG5cdCRsaXN0Lm9mZignbW91c2V3aGVlbC5UaW1lbGluZU5hdicpLm9uKCdtb3VzZXdoZWVsLlRpbWVsaW5lTmF2JywgZnVuY3Rpb24oKSB7XHJcblx0XHRjb25zdCBsaXN0SGVpZ2h0ID0gJGxpc3QuaGVpZ2h0KCk7XHJcblx0XHRjb25zdCBzY3JvbGxUb3AgPSAkbGlzdC5zY3JvbGxUb3AoKTtcclxuXHRcdGNvbnN0IHNjcm9sbEhlaWdodCA9ICRsaXN0LnByb3AoJ3Njcm9sbEhlaWdodCcpO1xyXG5cclxuXHRcdGlmIChsaXN0SGVpZ2h0ICsgc2Nyb2xsVG9wICsgMTAwID4gc2Nyb2xsSGVpZ2h0ICYmIHNjcm9sbFRvcCA+IDAgJiYgIXdpbmRvdy5hbHJlYWR5Q2xpY2tlZCkge1xyXG5cdFx0XHRjbGVhclRpbWVvdXQod2luZG93LnNjcm9sbExpc3RGaW5pc2hlZCk7XHJcblx0XHRcdHdpbmRvdy5zY3JvbGxMaXN0RmluaXNoZWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdCQoYCMke3Nob3dNb3JlTmF2TGlua31gKS5jbGljaygpO1xyXG5cclxuXHRcdFx0XHQkKCcuVGltZWxpbmVQYWdlX19Mb2FkaW5nTW9yZScpLmNzcygnZGlzcGxheScsICdmbGV4Jyk7XHJcblxyXG5cdFx0XHRcdHdpbmRvdy5zY3JvbGxMaXN0UG9zaXRpb24gPSAkbGlzdC5zY3JvbGxUb3AoKTtcclxuXHRcdFx0XHR3aW5kb3cuYWxyZWFkeUNsaWNrZWQgPSB0cnVlO1xyXG5cdFx0XHR9LCAxMDApO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0VuZE9mUGFnZSgpIHtcclxuXHRpZiAod2luZG93LmlubmVySGVpZ2h0ICsgd2luZG93LnBhZ2VZT2Zmc2V0ID49IGRvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0KSB7XHJcblx0XHRjb25zdCAkaXRlbSA9ICQoJy5UaW1lbGluZUFuY2hvcicpLmxhc3QoKTtcclxuXHRcdHdpbmRvdy5sYXN0SXRlbUlEID0gJGl0ZW0uYXR0cignaWQnKTtcclxuXHR9XHJcbn1cclxuIiwiLyogQ29tcG9uZW50IFRyaWdnZXJJZnJhbWVUb29sdGlwICovXG4oZnVuY3Rpb24oJCwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKSB7XG5cdHZhciBjcmVhdGUgPSBmdW5jdGlvbihjb25maWcpIHtcblx0XHR2YXIgJGVsZW1lbnRJZCA9ICQoJyMnICsgY29uZmlnLmVsZW1lbnRJZCk7XG5cblx0XHRjb25maWcubWluSGVpZ2h0ID0gY29uZmlnLm1pbkhlaWdodCArIDMyO1xuXG5cdFx0JGVsZW1lbnRJZC5hZGRDbGFzcygndG9vbHRpcCcpO1xuXG5cdFx0aWYgKGNvbmZpZy50cmlnZ2VySWQgPT09ICdjbGljaycpICRlbGVtZW50SWQuYWRkQ2xhc3MoJ3Rvb2x0aXBzdGVyZWQtLXBvaW50ZXInKTtcblxuXHRcdGNvbnN0IHdpZGdldE5vdGlmeURpdiA9ICQuZmluZCgnW2RhdGEtaWZyYW1ldG9vbHRpcHRyaWdnZXJpZD1cIicgKyBjb25maWcuZWxlbWVudElkICsgJ1wiXScpO1xuXHRcdGxldCB3aWRnZXROb3RpZnlJZCA9ICcnO1xuXG5cdFx0aWYgKHdpZGdldE5vdGlmeURpdi5sZW5ndGggPT09IDEpIHtcblx0XHRcdHdpZGdldE5vdGlmeUlkID0gJCh3aWRnZXROb3RpZnlEaXYpLmRhdGEoJ2lmcmFtZXRvb2x0aXBub3RpZnlpZCcpO1xuXHRcdH1cblxuXHRcdCRlbGVtZW50SWQudG9vbHRpcHN0ZXIoe1xuXHRcdFx0Y29udGVudEFzSFRNTDogdHJ1ZSxcblx0XHRcdHRoZW1lOiBjb25maWcudGhlbWUsXG5cdFx0XHRpbnRlcmFjdGl2ZTogdHJ1ZSxcblx0XHRcdHBvc2l0aW9uOiBjb25maWcucG9zaXRpb25JZCxcblx0XHRcdHRyaWdnZXI6IGNvbmZpZy50cmlnZ2VySWQsXG5cdFx0XHRtaW5XaWR0aDogY29uZmlnLm1pbldpZHRoLFxuXHRcdFx0bWF4V2lkdGg6IGNvbmZpZy5tYXhXaWR0aCxcblx0XHRcdHppbmRleDogY29uZmlnLnppbmRleCxcblx0XHRcdG9ubHlPbmU6IHRydWUsXG5cdFx0XHRjb250ZW50OiBgPGlmcmFtZSBpZD1cInRvb2x0aXBzdGVyLWZyYW1lXCIgZGF0YS11aT1cImlmcmFtZS10b29sdGlwXCIgc3JjPVwiJHtjb25maWcuVVJMfVwiIHN0eWxlPVwiYm9yZGVyOm5vbmU7IG1pbi1oZWlnaHQ6JHtjb25maWcubWluSGVpZ2h0fXB4O1wiIGRhdGEtaWZyYW1ldG9vbHRpcHRyaWdnZXJpZD1cIiR7Y29uZmlnLmVsZW1lbnRJZH1cIiBpZnJhbWV0b29sdGlwbm90aWZ5aWQ9XCIke3dpZGdldE5vdGlmeUlkfVwiPjwvaWZyYW1lPmAsXG5cdFx0XHRmdW5jdGlvblJlYWR5OiBmdW5jdGlvbihpbnN0YW5jZSwgaGVscGVyKSB7XG5cdFx0XHRcdCQoaGVscGVyKS5jc3MoeyB2aXNpYmlsaXR5OiAnaGlkZGVuJyB9KTtcblxuXHRcdFx0XHRpZiAoY29uZmlnLm5vUGFkZGluZykgJCgnLnRvb2x0aXBzdGVyLWNvbnRlbnQnKS5hZGRDbGFzcygndG9vbHRpcHN0ZXItLW5vUGFkZGluZycpO1xuXHRcdFx0XHRpZiAoY29uZmlnLmN1c3RvbUNsYXNzKSAkKCcudG9vbHRpcHN0ZXItYmFzZScpLmFkZENsYXNzKGNvbmZpZy5jdXN0b21DbGFzcyk7XG5cblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHQkKCcudG9vbHRpcHN0ZXItYmFzZScpLmNzcyh7XG5cdFx0XHRcdFx0XHR2aXNpYmlsaXR5OiAndmlzaWJsZScsXG5cdFx0XHRcdFx0XHRtaW5IZWlnaHQ6IGNvbmZpZy5taW5IZWlnaHQgPiAwID8gY29uZmlnLm1pbkhlaWdodCA6ICdhdXRvJyxcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSwgNTAwKTtcblxuXHRcdFx0XHQkKCcudG9vbHRpcHN0ZXItY29udGVudCcpLnByZXBlbmQoJzxkaXYgY2xhc3M9XCJUb29sdGlwc3RlckxvYWRpbmdcIj48ZGl2IGNsYXNzPVwibGRzLXJpbmdcIj48ZGl2PjwvZGl2PjwvZGl2PicpO1xuXG5cdFx0XHRcdGNvbnN0IGlzTGVmdE9yUmlnaHQgPSBjb25maWcucG9zaXRpb25JZCA9PT0gJ2xlZnQnIHx8IGNvbmZpZy5wb3NpdGlvbklkID09PSAncmlnaHQnO1xuXG5cdFx0XHRcdC8vIFNldCBhIGZpeGVkIGhlaWdodCBpbiBvcmRlciB0byBrZWVwIHRoZSBhcnJvdyBpbiB0aGUgc2FtZSBwb3NpdGlvblxuXHRcdFx0XHRpZiAoaXNMZWZ0T3JSaWdodCkge1xuXHRcdFx0XHRcdHNldEZpeEhlaWdodCgpO1xuXG5cdFx0XHRcdFx0JCh3aW5kb3cpXG5cdFx0XHRcdFx0XHQub2ZmKCdzY3JvbGwuVG9vbHRpcCcpXG5cdFx0XHRcdFx0XHQub24oJ3Njcm9sbC5Ub29sdGlwJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHNldEZpeEhlaWdodCgpO1xuXHRcdFx0XHRcdFx0XHR9LCA1MDApO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRmdW5jdGlvbkFmdGVyOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0JCh3aW5kb3cpLm9mZignc2Nyb2xsLlRvb2x0aXAnKTtcblx0XHRcdH0sXG5cdFx0fSk7XG5cdH07XG5cblx0Y29uc3Qgc2V0Rml4SGVpZ2h0ID0gKCkgPT4ge1xuXHRcdGNvbnN0ICRhcnJvdyA9ICQoJy50b29sdGlwc3Rlci1hcnJvdycpO1xuXG5cdFx0JGFycm93LmhlaWdodCgkYXJyb3cuaGVpZ2h0KCkpO1xuXHR9O1xuXG5cdFNhcHBoaXJlV2lkZ2V0cy5UcmlnZ2VySWZyYW1lVG9vbHRpcCA9IHsgY3JlYXRlIH07XG59KShqUXVlcnksIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cyk7XG4iLCIvKiBDb21wb25lbnQgVHJ1bmNhdGVkQ29udGVudCAqL1xyXG4oZnVuY3Rpb24oJCwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKSB7XHJcblx0Y29uc3QgY3JlYXRlID0gZnVuY3Rpb24oY29uZmlnID0ge30pIHtcclxuXHRcdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgJGFsbFRydW5jYXRlZCA9ICQoW10pO1xyXG5cdFx0XHR2YXIgcm9vdFNlbGVjdG9yID0gYCMke2NvbmZpZy53aWRnZXRJZH1gO1xyXG5cdFx0XHR2YXIgb3BlbmVyU2VsZWN0b3IgPSAnLlRydW5jYXRlZENvbnRlbnQtLWFsbCc7XHJcblx0XHRcdHZhciBib2R5U2VsZWN0b3IgPSAnLlRydW5jYXRlZENvbnRlbnQtLWJvZHknO1xyXG5cclxuXHRcdFx0JChyb290U2VsZWN0b3IpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dmFyICRlbCA9ICQodGhpcyk7XHJcblx0XHRcdFx0JGFsbFRydW5jYXRlZCA9ICRhbGxUcnVuY2F0ZWQuYWRkKCRlbCk7XHJcblx0XHRcdFx0dmFyICRlbEJvZHkgPSAkZWwuZmluZChib2R5U2VsZWN0b3IpO1xyXG5cdFx0XHRcdHZhciBtYXhMaW5lcyA9ICRlbC5kYXRhKCdtYXhsaW5lcycpO1xyXG5cdFx0XHRcdHZhciBsaW5lSGVpZ2h0ID0gd2luZG93XHJcblx0XHRcdFx0XHQuZ2V0Q29tcHV0ZWRTdHlsZSgkZWwuZmluZCgnPiBkaXYnKVswXSlcclxuXHRcdFx0XHRcdC5nZXRQcm9wZXJ0eVZhbHVlKCdsaW5lLWhlaWdodCcpXHJcblx0XHRcdFx0XHQucmVwbGFjZSgncHgnLCAnJyk7XHJcblx0XHRcdFx0dmFyIGxpbmVDb3VudCA9IE1hdGguY2VpbCgkZWwuaGVpZ2h0KCkgLyBsaW5lSGVpZ2h0KTtcclxuXHRcdFx0XHRpZiAobGluZUNvdW50ID4gbWF4TGluZXMpIHtcclxuXHRcdFx0XHRcdCRlbEJvZHkuY3NzKHtcclxuXHRcdFx0XHRcdFx0bWF4SGVpZ2h0OiBsaW5lSGVpZ2h0ICogbWF4TGluZXMgKyAncHgnLFxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR2YXIgc2VudGVuY2UgPSAkZWwuZGF0YSgnYWRkaXRpb25hbCcpLnJlcGxhY2UoJ3tufScsIGxpbmVDb3VudCAtIG1heExpbmVzKTtcclxuXHRcdFx0XHRcdCRlbC5hcHBlbmQoJzxwIGNsYXNzPVwiJyArIG9wZW5lclNlbGVjdG9yLnJlcGxhY2UoJy4nLCAnJykgKyAnXCI+JyArIHNlbnRlbmNlICsgJzwvcD4nKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0JChyb290U2VsZWN0b3IpLm9uKCdjbGljaycsIG9wZW5lclNlbGVjdG9yLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR2YXIgZWwgPSAkKHRoaXMpLmNsb3Nlc3Qocm9vdFNlbGVjdG9yKTtcclxuXHRcdFx0XHRvcGVuVHJ1bmNhdGVkQ29udGVudChlbCk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0b3BlblRydW5jYXRlZENvbnRlbnQgPSBmdW5jdGlvbihlbCkge1xyXG5cdFx0XHRcdCQoZWwpXHJcblx0XHRcdFx0XHQuZmluZChib2R5U2VsZWN0b3IpXHJcblx0XHRcdFx0XHQuY3NzKCdtYXgtaGVpZ2h0JywgJ25vbmUnKTtcclxuXHRcdFx0XHQkKGVsKVxyXG5cdFx0XHRcdFx0LmZpbmQob3BlbmVyU2VsZWN0b3IpXHJcblx0XHRcdFx0XHQuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdGlmICh3aW5kb3cuZnJhbWVFbGVtZW50ICYmIHdpbmRvdy5mcmFtZUVsZW1lbnQuaWQgPT09ICd0b29sdGlwc3Rlci1mcmFtZScpIHtcclxuXHRcdFx0XHQkKHJvb3RTZWxlY3Rvcikub2ZmKCdjbGljaycsIG9wZW5lclNlbGVjdG9yKTtcclxuXHRcdFx0XHQkKG9wZW5lclNlbGVjdG9yKS5hZGRDbGFzcygnaW4tdG9vbHRpcCcpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRTYXBwaGlyZVdpZGdldHMuVHJ1bmNhdGVkQ29udGVudCA9IHtcclxuXHRcdGNyZWF0ZSxcclxuXHRcdG9wZW46IGZ1bmN0aW9uKGVsKSB7XHJcblx0XHRcdG9wZW5UcnVuY2F0ZWRDb250ZW50KGVsKTtcclxuXHRcdH0sXHJcblx0XHRvcGVuQWxsOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0JGFsbFRydW5jYXRlZC5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdG9wZW5UcnVuY2F0ZWRDb250ZW50KCQodGhpcykpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0fTtcclxufSkoalF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpO1xyXG4iLCJTYXBwaGlyZVdpZGdldHMuQ2xpbmljaWFuV29ya0FyZWEgPSBmdW5jdGlvbihjb250YWluZXJJRCkge1xyXG5cdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cdFx0Y29uc3QgJGNvbnRhaW5lciA9ICQoYCMke2NvbnRhaW5lcklEfWApO1xyXG5cdFx0Y29uc3QgJHRvZ2dsZXIgPSAkY29udGFpbmVyLmZpbmQoJy5TZWN0aW9uRXhwYW5kYWJsZS10b2dnbGVyJyk7XHJcblxyXG5cdFx0aWYgKCR0b2dnbGVyLmxlbmd0aCA9PT0gMSkge1xyXG5cdFx0XHRsZXQgJHRvZ2dsZXJTdGF0ZSA9IGZhbHNlO1xyXG5cclxuXHRcdFx0JHRvZ2dsZXIuZmluZCgnW2RhdGEtbGFiZWx2YWx1ZV0nKS50ZXh0KCR0b2dnbGVyLmZpbmQoJ1tkYXRhLWxhYmVsc2hvd10nKS5kYXRhKCdsYWJlbHNob3cnKSk7XHJcblxyXG5cdFx0XHQkdG9nZ2xlci5vZmYoJ2NsaWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZ0KSB7XHJcblx0XHRcdFx0ZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuXHRcdFx0XHRidXR0b25DbGljaygpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGNvbnN0IGJ1dHRvbkNsaWNrID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0JHRvZ2dsZXJTdGF0ZSA9ICEkdG9nZ2xlclN0YXRlO1xyXG5cclxuXHRcdFx0XHRpZiAoJHRvZ2dsZXJTdGF0ZSkge1xyXG5cdFx0XHRcdFx0JGNvbnRhaW5lci5maW5kKCcuU2VjdGlvbkV4cGFuZGFibGUtdG9nZ2xlZCcpLnNob3coKTtcclxuXHRcdFx0XHRcdCR0b2dnbGVyLmZpbmQoJ1tkYXRhLWxhYmVsdmFsdWVdJykudGV4dCgkdG9nZ2xlci5maW5kKCdbZGF0YS1sYWJlbGhpZGVdJykuZGF0YSgnbGFiZWxoaWRlJykpO1xyXG5cclxuXHRcdFx0XHRcdCR0b2dnbGVyLmhpZGUoKTtcclxuXHJcblx0XHRcdFx0XHRjb25zdCAkY2FuY2VsQnV0dG9uID0gJCgnLlNlY3Rpb25FeHBhbmRhYmxlLXRvZ2dsZWQgLkJ1dHRvbkNhbmNlbFNlYXJjaCcpO1xyXG5cdFx0XHRcdFx0JGNhbmNlbEJ1dHRvbi5jbGljaygoKSA9PiBidXR0b25DbGljaygpKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0JGNvbnRhaW5lci5maW5kKCcuU2VjdGlvbkV4cGFuZGFibGUtdG9nZ2xlZCcpLmhpZGUoKTtcclxuXHRcdFx0XHRcdCR0b2dnbGVyLmZpbmQoJ1tkYXRhLWxhYmVsdmFsdWVdJykudGV4dCgkdG9nZ2xlci5maW5kKCdbZGF0YS1sYWJlbHNob3ddJykuZGF0YSgnbGFiZWxzaG93JykpO1xyXG5cclxuXHRcdFx0XHRcdCR0b2dnbGVyLnNob3coKTtcclxuXHJcblx0XHRcdFx0XHRjb25zdCAkY2FuY2VsQnV0dG9uID0gJCgnLlNlY3Rpb25FeHBhbmRhYmxlLXRvZ2dsZWQgLkJ1dHRvbkNhbmNlbFNlYXJjaCcpO1xyXG5cdFx0XHRcdFx0JGNhbmNlbEJ1dHRvbi5vZmYoJ2NsaWNrJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdH0pO1xyXG59O1xyXG4iLCJTYXBwaGlyZVdpZGdldHMuUVJDb2RlU2Nhbm5lciA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuXHRIdG1sNVFyY29kZS5nZXRDYW1lcmFzKClcclxuXHRcdC50aGVuKGRldmljZXMgPT4ge1xyXG5cdFx0XHRpZiAoZGV2aWNlcyAmJiBkZXZpY2VzLmxlbmd0aCkgc3RhcnRDYW1lcmEoZGV2aWNlc1swXS5pZCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKGVyciA9PiB7XHJcblx0XHRcdC8vIEFwcCBkb2Vzbid0IGhhdmUgYWNjZXNzIHRvIHRoZSBjYW1lcmEuLi5cclxuXHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdGNvbnN0ICRjaGVja2JveCA9ICQoJy5BY2Nlc3NDb2RlT3B0aW9uJyk7XHJcblxyXG5cdFx0XHRcdCRjaGVja2JveC5hdHRyKCdjaGVja2VkJywgdHJ1ZSkudHJpZ2dlcignY2xpY2snKTtcclxuXHRcdFx0XHQkKCcuTGF5b3V0U2NhbkNvZGUnKS5hZGRDbGFzcygnTGF5b3V0U2NhbkNvZGUtLW1vZGVPbmx5Q29kZScpO1xyXG5cclxuXHRcdFx0XHQkKCcuTGF5b3V0U2NhbkNvZGVfX1NwbGFzaCcpLmZhZGVPdXQoNTAwKTtcclxuXHRcdFx0fSwgNTAwKTtcclxuXHRcdH0pO1xyXG5cclxuXHRmdW5jdGlvbiBzdGFydENhbWVyYShjYW1lcmFJRCkge1xyXG5cdFx0Y29uc3QgaHRtbDVRckNvZGUgPSBuZXcgSHRtbDVRcmNvZGUoJ3FycmVhZGVyJyk7XHJcblx0XHRjb25zdCBjb25maWcgPSB7IGZwczogNSwgcXJib3g6IDI1MCB9O1xyXG5cclxuXHRcdGNvbnN0IHN1Y2Nlc3NDYWxsYmFjayA9IHJlc3BvbnNlID0+IHtcclxuXHRcdFx0aWYgKCQoJy5Nb2RlQWNjZXNzQ29kZScpLmxlbmd0aCkgcmV0dXJuO1xyXG5cclxuXHRcdFx0JCgnLlNjYW5PdmVybGF5JykuYWRkQ2xhc3MoJ1NjYW5PdmVybGF5LS1jb3JyZWN0Q29kZScpO1xyXG5cclxuXHRcdFx0T3NOb3RpZnlXaWRnZXQob3B0aW9ucy53aWRnZXRGYWtlTm90aWZ5SWQsIHJlc3BvbnNlKTtcclxuXHJcblx0XHRcdC8vc2V0VGltZW91dCgoKSA9PiBodG1sNVFyQ29kZS5zdG9wKCksIDEwMDApO1xyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBlcnJvckNhbGxiYWNrID0gcmVzcG9uc2UgPT4ge1xyXG5cdFx0XHQvLyBjb25zb2xlLmVycm9yKHJlc3BvbnNlKTtcclxuXHRcdH07XHJcblxyXG5cdFx0aHRtbDVRckNvZGVcclxuXHRcdFx0LnN0YXJ0KHsgZmFjaW5nTW9kZTogJ2Vudmlyb25tZW50JyB9LCBjb25maWcsIHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjaylcclxuXHRcdFx0LnRoZW4oKCkgPT4ge1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4gJCgnLkxheW91dFNjYW5Db2RlX19TcGxhc2gnKS5mYWRlT3V0KDUwMCksIDUwMCk7XHJcblx0XHRcdH0pXHJcblx0XHRcdC5jYXRjaChlcnIgPT4ge1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG5cclxuXHRsZXQgaXNQb3J0cmFpdCA9IHdpbmRvdy5tYXRjaE1lZGlhKCcob3JpZW50YXRpb246IHBvcnRyYWl0KScpLm1hdGNoZXM7XHJcblx0bGV0IGlzT3JpZW50YXJpb25DaGFuZ2VkID0gZmFsc2U7XHJcblxyXG5cdCQod2luZG93KS5vbignb3JpZW50YXRpb25jaGFuZ2UnLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0aWYgKCQoJy5Nb2RlQWNjZXNzQ29kZScpLmxlbmd0aCkge1xyXG5cdFx0XHRpc09yaWVudGFyaW9uQ2hhbmdlZCA9IHdpbmRvdy5tYXRjaE1lZGlhKCcob3JpZW50YXRpb246IHBvcnRyYWl0KScpLm1hdGNoZXM7XHJcblx0XHRcdFNhcHBoaXJlV2lkZ2V0cy5Jc09yaWVudGFyaW9uQ2hhbmdlZCA9ICEoaXNQb3J0cmFpdCBeIGlzT3JpZW50YXJpb25DaGFuZ2VkKTtcclxuXHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHR3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcblx0fSk7XHJcbn07XHJcblxyXG5TYXBwaGlyZVdpZGdldHMuT25Nb2RlQ2hhbmdlID0gZnVuY3Rpb24oKSB7XHJcblx0JCgnLlNjYW5PdmVybGF5JykucmVtb3ZlQ2xhc3MoJ1NjYW5PdmVybGF5LS1jb3JyZWN0Q29kZScpO1xyXG5cdCQoJy5TY2FuT3ZlcmxheScpLnJlbW92ZUNsYXNzKCdTY2FuT3ZlcmxheS0taW5jb3JyZWN0Q29kZScpO1xyXG5cclxuXHRpZiAoU2FwcGhpcmVXaWRnZXRzLklzT3JpZW50YXJpb25DaGFuZ2VkICYmICEkKCcuTW9kZUFjY2Vzc0NvZGUnKS5sZW5ndGgpIHtcclxuXHRcdHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuXHR9XHJcbn07XHJcblxyXG5TYXBwaGlyZVdpZGdldHMuR29OZXh0SW5wdXQgPSBmdW5jdGlvbihjdXJyZW50SW5wdXQsIG5leHRJbnB1dENsYXNzKSB7XHJcblx0Y29uc3Qga2V5ID0gZXZlbnQua2V5Q29kZSB8fCBldmVudC5jaGFyQ29kZTtcclxuXHRjb25zdCBpc051bWJlciA9ICFpc05hTihldmVudC5rZXkpICYmICFpc05hTihwYXJzZUZsb2F0KGV2ZW50LmtleSkpO1xyXG5cclxuXHRjb25zdCAkY3VyciA9ICQoY3VycmVudElucHV0KTtcclxuXHRjb25zdCAkbmV4dCA9ICQoYC4ke25leHRJbnB1dENsYXNzfWApO1xyXG5cdGNvbnN0ICRwcmV2ID0gJGN1cnIucHJldkFsbCgnaW5wdXQnKS5maXJzdCgpO1xyXG5cclxuXHRpZiAoa2V5ID09PSA4IHx8IGtleSA9PT0gNDYpIHtcclxuXHRcdCRwcmV2LmZvY3VzKCk7XHJcblx0XHQkY3Vyci5yZW1vdmVDbGFzcygnQ29sb3JBbHBoYUJvcmRlcicpO1xyXG5cclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdGlmIChpc051bWJlcikge1xyXG5cdFx0JG5leHQuZm9jdXMoKTtcclxuXHRcdCRjdXJyLmFkZENsYXNzKCdDb2xvckFscGhhQm9yZGVyJyk7XHJcblx0XHQkKCcuVmFsaWRhdGVJbnB1dEJ1dHRvbicpLmNsaWNrKCk7XHJcblx0fSBlbHNlIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbn07XHJcbiIsIihmdW5jdGlvbigkLCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cykge1xyXG5cdGNvbnN0IGNyZWF0ZSA9ICgpID0+IHtcclxuXHRcdGNvbnN0ICR3aWRnZXQgPSAkKCcuUmVtb3RlQXBwb2ludG1lbnQnKTtcclxuXHRcdGNvbnN0ICRoZWFkZXIgPSAkd2lkZ2V0LmZpbmQoJy5SZW1vdGVBcHBvaW50bWVudF9fSGVhZGVyJyk7XHJcblx0XHRjb25zdCAkbWluaW1pemUgPSAkaGVhZGVyLmZpbmQoJy5NaW5pbWl6ZScpO1xyXG5cdFx0Y29uc3QgJHNtYWxsU2l6ZSA9ICRoZWFkZXIuZmluZCgnLlNtYWxsJyk7XHJcblx0XHRjb25zdCAkbWVkaXVtU2l6ZSA9ICRoZWFkZXIuZmluZCgnLk1lZGl1bScpO1xyXG5cdFx0Y29uc3QgJGZ1bGxTY3JlZW4gPSAkaGVhZGVyLmZpbmQoJy5GdWxsU2NyZWVuJyk7XHJcblx0XHRjb25zdCAkcmVzdG9yZVdpbmRvdyA9ICR3aWRnZXQuZmluZCgnLlJlbW90ZUFwcG9pbnRtZW50X19SZXN0b3JlV2luZG93Jyk7XHJcblxyXG5cdFx0bGV0IGlzUHJldmlvdXNTbWFsbCA9ICRzbWFsbFNpemUuaXMoJzp2aXNpYmxlJyk7XHJcblxyXG5cdFx0JG1pbmltaXplLmNsaWNrKCgpID0+IHtcclxuXHRcdFx0aXNQcmV2aW91c1NtYWxsID0gJG1lZGl1bVNpemUuaXMoJzp2aXNpYmxlJyk7XHJcblxyXG5cdFx0XHQvLyR3aWRnZXQuZHJhZ2dhYmxlKHsgZGlzYWJsZWQ6IHRydWUgfSk7XHJcblxyXG5cdFx0XHQkd2lkZ2V0LmFkZENsYXNzKCdSZW1vdGVBcHBvaW50bWVudC0tbWluaW1pemVkJyk7XHJcblx0XHRcdCRtaW5pbWl6ZS5oaWRlKCk7XHJcblx0XHRcdCRtZWRpdW1TaXplLnNob3coKTtcclxuXHJcblx0XHRcdCR3aWRnZXQuYW5pbWF0ZShtaW5pbWl6ZWRQb3NpdGlvbigkaGVhZGVyLmhlaWdodCgpKSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHQkc21hbGxTaXplLmNsaWNrKCgpID0+IHtcclxuXHRcdFx0JHdpZGdldC5yZW1vdmVDbGFzcygnUmVtb3RlQXBwb2ludG1lbnQtLW1pbmltaXplZCcpO1xyXG5cdFx0XHQkbWluaW1pemUuc2hvdygpO1xyXG5cdFx0XHQkc21hbGxTaXplLmhpZGUoKTtcclxuXHRcdFx0JG1lZGl1bVNpemUuc2hvdygpO1xyXG5cclxuXHRcdFx0JHdpZGdldC5hbmltYXRlKHtcclxuXHRcdFx0XHR0b3A6ICc1MCUnLFxyXG5cdFx0XHRcdHJpZ2h0OiAnNTAlJyxcclxuXHRcdFx0XHRsZWZ0OiAnNTAlJyxcclxuXHRcdFx0XHR3aWR0aDogJzI4MHB4JyxcclxuXHRcdFx0XHRoZWlnaHQ6ICczODBweCcsXHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0JG1lZGl1bVNpemUuY2xpY2soKCkgPT4ge1xyXG5cdFx0XHRjb25zdCBpc0NhbGxTdGFydGVkID0gJHdpZGdldC5oYXNDbGFzcygnUmVtb3RlQXBwb2ludG1lbnQtLWNhbGxTdGFydGVkJyk7XHJcblxyXG5cdFx0XHQvLyR3aWRnZXQuZHJhZ2dhYmxlKCdlbmFibGUnKTtcclxuXHJcblx0XHRcdCR3aWRnZXQucmVtb3ZlQ2xhc3MoJ1JlbW90ZUFwcG9pbnRtZW50LS1taW5pbWl6ZWQnKTtcclxuXHRcdFx0JG1pbmltaXplLnNob3coKTtcclxuXHRcdFx0JG1lZGl1bVNpemUuaGlkZSgpO1xyXG5cdFx0XHRpZiAoaXNDYWxsU3RhcnRlZCkgJHNtYWxsU2l6ZS5zaG93KCk7XHJcblxyXG5cdFx0XHQkd2lkZ2V0LmFuaW1hdGUoe1xyXG5cdFx0XHRcdHRvcDogJzUwJScsXHJcblx0XHRcdFx0cmlnaHQ6ICc1MCUnLFxyXG5cdFx0XHRcdGxlZnQ6ICc1MCUnLFxyXG5cdFx0XHRcdHdpZHRoOiBpc0NhbGxTdGFydGVkID8gJzQ1dncnIDogJzQ1MHB4JyxcclxuXHRcdFx0XHRoZWlnaHQ6IGlzQ2FsbFN0YXJ0ZWQgPyAnNDV2aCcgOiAnMjYwcHgnLFxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdCRmdWxsU2NyZWVuLmNsaWNrKCgpID0+IHtcclxuXHRcdFx0Y29uc3QgaWZyYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLlJlbW90ZUFwcG9pbnRtZW50IGlmcmFtZScpO1xyXG5cclxuXHRcdFx0aWYgKGlmcmFtZS5yZXF1ZXN0RnVsbHNjcmVlbikge1xyXG5cdFx0XHRcdGlmcmFtZS5yZXF1ZXN0RnVsbHNjcmVlbigpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKGlmcmFtZS53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbikge1xyXG5cdFx0XHRcdGlmcmFtZS53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbigpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHQkcmVzdG9yZVdpbmRvdy5jbGljaygoKSA9PiB7XHJcblx0XHRcdGlmIChpc1ByZXZpb3VzU21hbGwpICRzbWFsbFNpemUuY2xpY2soKTtcclxuXHRcdFx0ZWxzZSAkbWVkaXVtU2l6ZS5jbGljaygpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblx0XHRcdCR3aWRnZXQuZHJhZ2dhYmxlKHtcclxuXHRcdFx0XHRjb250YWlubWVudDogJ3dpbmRvdycsXHJcblx0XHRcdFx0aGFuZGxlOiAkaGVhZGVyLFxyXG5cdFx0XHRcdHNjcm9sbDogZmFsc2UsXHJcblx0XHRcdFx0c25hcDogdHJ1ZSxcclxuXHRcdFx0XHRpZnJhbWVGaXg6IHRydWUsXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0ZmFrZUFqYXhSZWZyZXNoKCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRjaGVja0lmcmFtZUxvYWRlZCgpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IG1pbmltaXplZFBvc2l0aW9uID0gKGhlYWRlckhlaWdodCA9IDQ4KSA9PiB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHR0b3A6ICQod2luZG93KS5oZWlnaHQoKSAtIGhlYWRlckhlaWdodCAtIDE2LFxyXG5cdFx0XHRyaWdodDogJzc2cHgnLFxyXG5cdFx0XHRsZWZ0OiAkKHdpbmRvdykud2lkdGgoKSAtIDI4MCAtIDYwIC0gMTYsXHJcblx0XHRcdHdpZHRoOiAnMjc1cHgnLFxyXG5cdFx0XHRoZWlnaHQ6ICc0OHB4JyxcclxuXHRcdH07XHJcblx0fTtcclxuXHJcblx0Y29uc3QgcmVzaXplV2hlbkpvaW4gPSAoKSA9PiB7XHJcblx0XHRjb25zdCAkd2lkZ2V0ID0gJCgnLlJlbW90ZUFwcG9pbnRtZW50Jyk7XHJcblx0XHRjb25zdCAkc21hbGxTaXplID0gJHdpZGdldC5maW5kKCcuU21hbGwnKTtcclxuXHJcblx0XHQkc21hbGxTaXplLnNob3coKTtcclxuXHRcdCR3aWRnZXQuYWRkQ2xhc3MoJ1JlbW90ZUFwcG9pbnRtZW50LS1jYWxsU3RhcnRlZCcpO1xyXG5cclxuXHRcdCR3aWRnZXQuY3NzKHtcclxuXHRcdFx0aGVpZ2h0OiAnNDV2aCcsXHJcblx0XHRcdHdpZHRoOiAnNDV2dycsXHJcblx0XHR9KTtcclxuXHJcblx0XHRjb25zdCBjZW50ZXJQeCA9ICgkKHdpbmRvdy50b3ApLndpZHRoKCkgLSAkd2lkZ2V0LndpZHRoKCkpIC8gMjtcclxuXHJcblx0XHQkd2lkZ2V0LmNzcyh7XHJcblx0XHRcdGluc2V0OiBgMjMwcHggYXV0byBhdXRvICR7Y2VudGVyUHh9cHhgLFxyXG5cdFx0fSk7XHJcblxyXG5cdFx0bGV0IHRpbWVvdXQ7XHJcblxyXG5cdFx0ZnVuY3Rpb24gd2FybmluZyhlKSB7XHJcblx0XHRcdHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdC8vIEhhY2sgdG8ga2VlcCB0aGUgY3VycmVudCB0YWIgc2VsZWN0ZWQgaWYgdXNlciBkb2Vzbid0IGdvIHRvIGFub3RoZXIgcGFnZVxyXG5cdFx0XHRcdGNvbnN0IGlmcmFtZUNvbnRlbnRzID0gd2luZG93LnRvcC4kKCcuTWFpbkNvbnRlbnQgPiBpZnJhbWUnKS5jb250ZW50cygpO1xyXG5cdFx0XHRcdGNvbnN0IHRhYkl0ZW1zID0gaWZyYW1lQ29udGVudHMuZmluZCgnLlRhYldyYXBwZXInKTtcclxuXHJcblx0XHRcdFx0dGFiSXRlbXMucmVtb3ZlQ2xhc3MoJ0FjdGl2ZScpO1xyXG5cdFx0XHRcdHRhYkl0ZW1zLmZpcnN0KCkuYWRkQ2xhc3MoJ0FjdGl2ZScpO1xyXG5cdFx0XHR9LCAxMDAwKTtcclxuXHJcblx0XHRcdHJldHVybiAoZS5yZXR1cm5WYWx1ZSA9ICdZb3UgYXJlIGxlYXZpbmcgdGhlIHBhZ2UnKTtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBub1RpbWVvdXQoKSB7XHJcblx0XHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuXHRcdH1cclxuXHJcblx0XHR3aW5kb3cudG9wLm9uYmVmb3JldW5sb2FkID0gd2FybmluZztcclxuXHRcdHdpbmRvdy50b3AudW5sb2FkID0gbm9UaW1lb3V0O1xyXG5cclxuXHRcdC8qd2luZG93LnRvcC5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmV1bmxvYWQnLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0ZS5yZXR1cm5WYWx1ZSA9ICcxMjMnO1xyXG5cdFx0fSk7Ki9cclxuXHR9O1xyXG5cclxuXHRjb25zdCBzZXRJbml0aWFsU3RhdGUgPSAoKSA9PiB7XHJcblx0XHRjb25zdCAkd2lkZ2V0ID0gJCgnLlJlbW90ZUFwcG9pbnRtZW50Jyk7XHJcblx0XHRjb25zdCAkc21hbGxTaXplID0gJHdpZGdldC5maW5kKCcuU21hbGwnKTtcclxuXHRcdGNvbnN0ICRtZWRpdW1TaXplID0gJHdpZGdldC5maW5kKCcuTWVkaXVtJyk7XHJcblxyXG5cdFx0JHNtYWxsU2l6ZS5oaWRlKCk7XHJcblx0XHQkbWVkaXVtU2l6ZS5oaWRlKCk7XHJcblx0XHQkd2lkZ2V0LnJlbW92ZUNsYXNzKCdSZW1vdGVBcHBvaW50bWVudC0tY2FsbFN0YXJ0ZWQnKTtcclxuXHJcblx0XHR3aW5kb3cudG9wLnVubG9hZCA9IG51bGw7XHJcblx0XHR3aW5kb3cudG9wLm9uYmVmb3JldW5sb2FkID0gbnVsbDtcclxuXHJcblx0XHQkKCcuUmVtb3RlQXBwb2ludG1lbnQnKS5jc3Moe1xyXG5cdFx0XHRkaXNwbGF5OiAnaW5pdGlhbCcsXHJcblx0XHRcdHJpZ2h0OiAnMjIlJyxcclxuXHRcdFx0dG9wOiAnMzAlJyxcclxuXHRcdFx0aGVpZ2h0OiAnMjYwcHgnLFxyXG5cdFx0XHR3aWR0aDogJzQ1MHB4JyxcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHNldE1vZGFsTWluaW1pemVkID0gKCkgPT4ge1xyXG5cdFx0Ly8gVG8gdXNlIG9ubHkgaW5zaWRlIFNhcHBoaXJlIGlGcmFtZSBwYWdlc1xyXG5cdFx0Y29uc3QgJG1vZGFsUmVtb3RlQXBwdCA9IHdpbmRvdy50b3AuJCgnLlJlbW90ZUFwcG9pbnRtZW50Jyk7XHJcblxyXG5cdFx0aWYgKCRtb2RhbFJlbW90ZUFwcHQubGVuZ3RoKSB7XHJcblx0XHRcdGNvbnN0ICRtaW5pbWl6ZU1vZGFsID0gJG1vZGFsUmVtb3RlQXBwdC5maW5kKCcuTWluaW1pemUnKTtcclxuXHRcdFx0JG1pbmltaXplTW9kYWwuY2xpY2soKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRjb25zdCBjaGVja0lmcmFtZUxvYWRlZCA9ICgpID0+IHtcclxuXHRcdGNvbnN0IGlmcmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ1NhcHBoaXJlRnJhbWUnKVswXTtcclxuXHRcdGNvbnN0IGlmcmFtZURvYyA9IGlmcmFtZS5jb250ZW50RG9jdW1lbnQgfHwgaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XHJcblxyXG5cdFx0aWYgKGlmcmFtZURvYy5yZWFkeVN0YXRlID09ICdjb21wbGV0ZScpIHtcclxuXHRcdFx0aWZyYW1lLmNvbnRlbnRXaW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0c2V0SW5pdGlhbFN0YXRlKCk7XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0d2luZG93LnNldFRpbWVvdXQoY2hlY2tJZnJhbWVMb2FkZWQsIDEwMCk7XHJcblx0fTtcclxuXHJcblx0Y29uc3Qgc2V0Q2FsbFN0YXJ0ZWQgPSAoKSA9PiB7fTtcclxuXHJcblx0Y29uc3QgZmFrZUFqYXhSZWZyZXNoID0gKCkgPT4ge1xyXG5cdFx0Y29uc3QgJGlmcmFtZSA9ICQoJy5TYXBwaGlyZUZyYW1lJyk7XHJcblxyXG5cdFx0JGlmcmFtZS5vbignbG9hZCcsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkaWZyYW1lWzBdLmNvbnRlbnRXaW5kb3cub25iZWZvcmV1bmxvYWQgPSBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0JCgnLkZlZWRiYWNrX0FqYXhXYWl0Jykuc2hvdygpO1xyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0JCgnLkZlZWRiYWNrX0FqYXhXYWl0JykuaGlkZSgpO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3Qgb3Blbk1vZGFsTGVhdmVDb250ZXh0ID0gdXJsID0+IHtcclxuXHRcdFNhcHBoaXJlV2lkZ2V0cy5SZW1vdGVBcHBvaW50bWVudC5sZWF2ZVVSTCA9IHVybDtcclxuXHJcblx0XHR3aW5kb3cudG9wLnVubG9hZCA9IG51bGw7XHJcblx0XHR3aW5kb3cudG9wLm9uYmVmb3JldW5sb2FkID0gbnVsbDtcclxuXHJcblx0XHQkKCcuT3Blbk1vZGFsTGVhdmVDb250ZXh0JykuY2xpY2soKTtcclxuXHR9O1xyXG5cclxuXHRTYXBwaGlyZVdpZGdldHMuUmVtb3RlQXBwb2ludG1lbnQgPSB7XHJcblx0XHRjcmVhdGUsXHJcblx0XHRyZXNpemVXaGVuSm9pbixcclxuXHRcdHNldENhbGxTdGFydGVkLFxyXG5cdFx0c2V0SW5pdGlhbFN0YXRlLFxyXG5cdFx0ZmFrZUFqYXhSZWZyZXNoLFxyXG5cdFx0c2V0TW9kYWxNaW5pbWl6ZWQsXHJcblx0XHRvcGVuTW9kYWxMZWF2ZUNvbnRleHQsXHJcblx0fTtcclxufSkoalF1ZXJ5LCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cyk7XHJcbiIsIi8vU2FwcGhpcmVXaWRnZXRzID0gd2luZG93LlNhcHBoaXJlV2lkZ2V0cyA9IHdpbmRvdy5TYXBwaGlyZVdpZGdldHMgfHwge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==