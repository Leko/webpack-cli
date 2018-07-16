module.exports = {
    entry: ["string", "object", "Function", "Array"],
    externals:  ["string", "object", "boolean", "Function", "RegExp", "Array"],
    module: {
        type: ["boolean", "RegExp"],
        properties: {
          exprContextCritical: ["boolean"],
          exprContextRecursive: ["boolean"],
          exprContextRegExp: ["boolean", "RegExp"],
          exprContextRequest: ["string"],
          noParse: ["RegExp", "array", "Function", "string"],
          rules: ["Array"],
          unknownContextCritical: ["boolean"],
          unknownContextRecursive: ["boolean"],
          unknownContextRegExp: ["boolean", "RegExp"],
          unknownContextRequest: ["string"],
          unsafeCache: ["boolean", "Function"],
          wrappedContextCritical: ["boolean"],
          wrappedContextRecursive: ["boolean"],
          wrappedContextRegExp: ["RegExp"],
          strictExportPresence: ["boolean"],
          strictThisContextOnImports: ["boolean", "object"]
        }
      },
      output: {
        properties: {
          auxiliaryComment: {
                type: ["string", "object"],
                properties: {
                  amd: ["string"],
                  commonjs: ["string"],
                  commonjs2: ["string"],
                  root: ["string"]
                }
          },
          chunkFilename: ["string"],
          webassemblyModuleFilename: ["string"],
          globalObject: ["string"],
          crossOriginLoading: [false, "anonymous", "use-credentials"],
          jsonpScriptType: [false, "text/javascript", "module"],
          chunkLoadTimeout: ["number"],
          devtoolFallbackModuleFilenameTemplate: ["string", "Function"],
          devtoolLineToLine: ["boolean", "object"],
          devtoolModuleFilenameTemplate: ["string", "Function"],
          devtoolNamespace: ["string"],
          filename: ["string", "Function"],
          hashDigest: ["latin1", "hex", "base64"],
          hashDigestLength: ["number"],
          hashFunction: ["string","Function"],
          hashSalt: ["string"],
          hotUpdateChunkFilename: ["string","Function"],
          hotUpdateFunction: ["string"],
          hotUpdateMainFilename: [ "string", "Function"],
          jsonpFunction: ["string"],
          chunkCallbackName: ["string"],
          library: {
            type: [ "string", "array", "object"],
            properties: {
              root: ["string"],
              amd: ["string"],
              commonjs: ["string"]
            }
          },
          libraryTarget: [
              "var",
              "assign",
              "this",
              "window",
              "self",
              "global",
              "commonjs",
              "commonjs2",
              "commonjs-module",
              "amd",
              "umd",
              "umd2",
              "jsonp"
            ],
          libraryExport: ["string"],
          path: ["string"],
          pathinfo: ["boolean"],
          publicPath: ["string", "Function"],
          sourceMapFilename: ["string"],
          sourcePrefix: ["string"],
          strictModuleExceptionHandling: ["boolean"],
          umdNamedDefine: ["boolean"]
        }
      },
      resolve: {
        properties: {
          alias: {
            type: [
              {
                additionalProperties: {
                  type: ["string"]
                },
                type: ["object"]
              },
              {
                items: {
                  properties: {
                    alias: ["string"],
                    name: ["string"],
                    onlyModule: ["boolean"]
                  },
                  type: ["object"]
                },
                type : ["array"]
              }
            ]
          },
          aliasFields: ["Array"],
          cachePredicate: ["Function"],
          cacheWithContext: ["boolean"],
          descriptionFiles: ["Array"],
          enforceExtension: ["boolean"],
          enforceModuleExtension: ["boolean"],
          extensions: ["Array"],
          fileSystem: [],
          mainFields: ["Array"],
          mainFiles: ["Array"],
          moduleExtensions: ["Array"],
          modules: ["Array"],
          plugins: ["Array"],
          resolver: [],
          symlinks: ["boolean"],
          concord: ["boolean"],
          unsafeCache: ["boolean", "object"],
          useSyncFileSystemCalls: ["boolean"]
        }
      },
    mode: [
      "development",
      "production",
      "none"
    ],
    amd: [],
    bail: ["boolean"],
    cache: ["boolean", "object"],
      context: ["string"],
      dependencies: {
        items: {
          type: ["string"]
        },
        type: ["array"]
      },
      
      devtool: ["string", false],
      entry: ["#/definitions/entry"],
      externals: [ "#/definitions/externals"],
      loader: ["object"],
      module: [ "#/definitions/module"],
      name: ["string"],
      node: {
        type: [false, "object"],
        properties: {
            object: [
                false,
                true,
                "mock",
                "empty"
              ],
            undefined: {
              Buffer: [
                  false,
                  true,
                  "mock"
                ],
              __dirname: [
                  false,
                  true,
                  "mock"
                ],
              __filename: [
                  false,
                  true,
                  "mock"
              ],
              console:  [
                  false,
                  true,
                  "mock"
                ],
              global: ["boolean"],
              process: [
                  false,
                  true,
                  "mock"
                ]
            }
          }
      },
      output: [ "#/definitions/output"],
      optimization: {
        type: ["object"],
        properties: {
          removeAvailableModules: ["boolean"],
          removeEmptyChunks: ["boolean"],
          mergeDuplicateChunks: ["boolean"],
          flagIncludedChunks: ["boolean"],
          occurrenceOrder: ["boolean"],
          sideEffects: ["boolean"],
          providedExports: ["boolean"],
          usedExports: ["boolean"],
          concatenateModules: ["boolean"],
          splitChunks: {
            type: [false],
            TODO: {
                type: ["object"],
                properties: {
                  chunks: {
                    type: [
                      {
                        type: [
                          "initial",
                          "async",
                          "all",
                          "Function"
                        ]
                      }
                    ]
                  },
                  minSize: ["number"],
                  minChunks: ["number"],
                  maxAsyncRequests: ["number"],
                  maxInitialRequests: ["number"],
                  name: [ "boolean","Function","string"],
                  filename: ["string"],
                  automaticNameDelimiter: ["string"],
                  cacheGroups: {
                    type: ["object"],
                    properties: {
                      type: [false, "Function", "string","RegExp", {
                          type: "object",
                          properties: {
                            test: [ "Function", "string", "RegExp"],
                            chunks: [
                                    "initial",
                                    "async",
                                    "all",
                                    "Function"
                            ],
                            enforce: ["boolean"],
                            priority: ["number"],
                            minSize: ["number"],
                            minChunks: ["number"],
                            maxAsyncRequests: ["number"],
                            maxInitialRequests: ["number"],
                            reuseExistingChunk: ["boolean"],
                            name: ["boolean","Function", "string"],
                            filename: ["string"]
                          }
                        }
                      ]
                    }
                  }
                }
              }
            }
          },
          runtimeChunk: ["boolean", "single","multiple",  {
              type: "object",
              properties: {
                name: [ "string", "Function"]
              }
            }],
          noEmitOnErrors: ["boolean"],
          namedModules: ["boolean"],
          namedChunks: ["boolean"],
          portableRecords:["boolean"],
          minimize: ["boolean"],
          minimizer: {
            type: ["array"],
            properties: []
          },
          nodeEnv: [false, "string"]
      },
      parallelism: ["number"],
      performance: {
        type: [false,
          {
            properties: {
              assetFilter: ["Function"],
              hints: [
                  false,
                  "warning",
                  "error"
              ],
              maxEntrypointSize: ["number"],
              maxAssetSize: ["number"]
            },
          }
        ]
      },
      plugins: {
        type: ["array"],
        properties: ["Object", "Function"]
      },
      profile: ["boolean"],
      recordsInputPath: ["string"],
      recordsOutputPath: ["string"],
      recordsPath: ["string"],
      resolve: [],
      resolveLoader: [],
      serve: ["object"],
      stats: [
          {
            type: ["object"],
            properties: {
              all: ["boolean"],
              context: ["string"],
              hash: ["boolean"],
              version: ["boolean"],
              timings: ["boolean"],
              builtAt: ["boolean"],
              performance: ["boolean"],
              depth: ["boolean"],
              assets: ["boolean"],
              env: ["boolean"],
              colors: {
                oneOf: ["boolean", {
                    type: ["object"],
                    properties: {
                      bold: ["string"],
                      red: ["string"],
                      green: ["string"],
                      cyan: ["string"],
                      magenta: ["string"],
                      yellow: ["string"]
                    }
                  }
                ]
              },
              maxModules: ["number"],
              chunks: ["boolean"],
              chunkModules: ["boolean"],
              modules: ["boolean"],
              nestedModules: ["boolean"],
              moduleAssets: ["boolean"],
              children: ["boolean"],
              cached: ["boolean"],
              cachedAssets: ["boolean"],
              reasons: ["boolean"],
              source: ["boolean"],
              warnings: ["boolean"],
              errors: ["boolean"],
              warningsFilter: [],
              excludeAssets: [],
              excludeModules: ["boolean"],
              exclude: ["boolean"],
              entrypoints: ["boolean"],
              chunkGroups: ["boolean"],
              errorDetails: ["boolean"],
              chunkOrigins: ["boolean"],
              modulesSort: ["string"],
              moduleTrace: ["boolean"],
              chunksSort: ["string"],
              assetsSort: ["string"],
              publicPath: ["boolean"],
              outputPath: ["boolean"],
              providedExports: ["boolean"],
              usedExports: ["boolean"],
              optimizationBailout: ["boolean"]
            }
          },
          {
            type: "boolean"
          },
          {
            type: [
              "none",
              "errors-only",
              "minimal",
              "normal",
              "detailed",
              "verbose"
            ]
          }
        ],
      target: [
              "web",
              "webworker",
              "node",
              "async-node",
              "node-webkit",
              "electron-main",
              "electron-renderer",
              "Function"
      ],
      watch: ["boolean"],
      watchOptions: {
        properties: {
          aggregateTimeout: ["number"],
          ignored: [],
          stdin:  ["boolean"],
          poll: ["boolean", "number"]
        }
      }
}
  