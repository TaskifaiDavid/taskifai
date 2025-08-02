
  46 |     /* Mobile touch optimizations */
  47 |     @media (max-width: 768px) {
> 48 |       @apply min-h-[44px] px-6 py-3 text-base;
     |       ^
  49 |       touch-action: manipulation;
  50 |       -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);
<w> [webpack.cache.PackFileCacheStrategy] Skipped not serializable cache item 'Compilation/modules|/home/david/reseller_analytics_website/node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[14].oneOf[12].use[2]!/home/david/reseller_analytics_website/node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[14].oneOf[12].use[3]!/home/david/reseller_analytics_website/src/app/globals.css': No serializer registered for PostCSSSyntaxError
<w> while serializing webpack/lib/cache/PackFileCacheStrategy.PackContentItems -> webpack/lib/NormalModule -> webpack/lib/ModuleBuildError -> PostCSSSyntaxError
 ⨯ ./src/app/globals.css:48:7
Syntax error: /home/david/reseller_analytics_website/src/app/globals.css @apply is not supported within nested at-rules like @media. You can fix this by un-nesting @media.

  46 |     /* Mobile touch optimizations */
  47 |     @media (max-width: 768px) {
> 48 |       @apply min-h-[44px] px-6 py-3 text-base;
     |       ^
  49 |       touch-action: manipulation;
  50 |       -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);
 ⨯ Error: Cannot find module 'critters'
Require stack:
- /home/david/reseller_analytics_website/node_modules/next/dist/server/post-process.js
- /home/david/reseller_analytics_website/node_modules/next/dist/server/render.js
- /home/david/reseller_analytics_website/node_modules/next/dist/server/future/route-modules/pages/module.js
- /home/david/reseller_analytics_website/node_modules/next/dist/server/future/route-modules/pages/builtin/_error.js
- /home/david/reseller_analytics_website/node_modules/next/dist/server/load-default-error-components.js
- /home/david/reseller_analytics_website/node_modules/next/dist/server/dev/next-dev-server.js
- /home/david/reseller_analytics_website/node_modules/next/dist/server/next.js
- /home/david/reseller_analytics_website/node_modules/next/dist/server/lib/start-server.js
    at Function.<anonymous> (node:internal/modules/cjs/loader:1405:15)
    at /home/david/reseller_analytics_website/node_modules/next/dist/server/require-hook.js:55:36
    at defaultResolveImpl (node:internal/modules/cjs/loader:1061:19)
    at resolveForCJSWithHooks (node:internal/modules/cjs/loader:1066:22)
    at Function._load (node:internal/modules/cjs/loader:1215:37)
    at TracingChannel.traceSync (node:diagnostics_channel:322:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
    at Module.<anonymous> (node:internal/modules/cjs/loader:1491:12)
    at mod.require (/home/david/reseller_analytics_website/node_modules/next/dist/server/require-hook.js:65:28)
    at require (node:internal/modules/helpers:135:16)
    at /home/david/reseller_analytics_website/node_modules/next/dist/server/post-process.js:147:30
    at postProcessHTML (/home/david/reseller_analytics_website/node_modules/next/dist/server/post-process.js:165:29)
    at async renderToHTMLImpl (/home/david/reseller_analytics_website/node_modules/next/dist/server/render.js:1016:27)
    at async doRender (/home/david/reseller_analytics_website/node_modules/next/dist/server/base-server.js:1414:30)
    at async cacheEntry.responseCache.get.routeKind (/home/david/reseller_analytics_website/node_modules/next/dist/server/base-server.js:1588:28)
    at async DevServer.renderToResponseWithComponentsImpl (/home/david/reseller_analytics_website/node_modules/next/dist/server/base-server.js:1496:28)
    at async DevServer.renderToResponseImpl (/home/david/reseller_analytics_website/node_modules/next/dist/server/base-server.js:2019:30)
    at async DevServer.pipeImpl (/home/david/reseller_analytics_website/node_modules/next/dist/server/base-server.js:922:25)
    at async NextNodeServer.handleCatchallRenderRequest (/home/david/reseller_analytics_website/node_modules/next/dist/server/next-server.js:272:17)
    at async DevServer.handleRequestImpl (/home/david/reseller_analytics_website/node_modules/next/dist/server/base-server.js:818:17)
    at async /home/david/reseller_analytics_website/node_modules/next/dist/server/dev/next-dev-server.js:339:20
    at async Span.traceAsyncFn (/home/david/reseller_analytics_website/node_modules/next/dist/trace/trace.js:154:20)
    at async DevServer.handleRequest (/home/david/reseller_analytics_website/node_modules/next/dist/server/dev/next-dev-server.js:336:24)
    at async invokeRender (/home/david/reseller_analytics_website/node_modules/next/dist/server/lib/router-server.js:179:21)
    at async handleRequest (/home/david/reseller_analytics_website/node_modules/next/dist/server/lib/router-server.js:359:24)
    at async requestHandlerImpl (/home/david/reseller_analytics_website/node_modules/next/dist/server/lib/router-server.js:383:13)
    at async Server.requestListener (/home/david/reseller_analytics_website/node_modules/next/dist/server/lib/start-server.js:141:13) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/david/reseller_analytics_website/node_modules/next/dist/server/post-process.js',
    '/home/david/reseller_analytics_website/node_modules/next/dist/server/render.js',
    '/home/david/reseller_analytics_website/node_modules/next/dist/server/future/route-modules/pages/module.js',
    '/home/david/reseller_analytics_website/node_modules/next/dist/server/future/route-modules/pages/builtin/_error.js',
    '/home/david/reseller_analytics_website/node_modules/next/dist/server/load-default-error-components.js',
    '/home/david/reseller_analytics_website/node_modules/next/dist/server/dev/next-dev-server.js',
    '/home/david/reseller_analytics_website/node_modules/next/dist/server/next.js',
    '/home/david/reseller_analytics_website/node_modules/next/dist/server/lib/start-server.js'
  ]
}
Error: Cannot find module 'critters'
Require stack:
- /home/david/reseller_analytics_website/node_modules/next/dist/server/post-process.js
- /home/david/reseller_analytics_website/node_modules/next/dist/server/render.js
- /home/david/reseller_analytics_website/node_modules/next/dist/server/future/route-modules/pages/module.js
- /home/david/reseller_analytics_website/node_modules/next/dist/server/future/route-modules/pages/builtin/_error.js
- /home/david/reseller_analytics_website/node_modules/next/dist/server/load-default-error-components.js
- /home/david/reseller_analytics_website/node_modules/next/dist/server/dev/next-dev-server.js
- /home/david/reseller_analytics_website/node_modules/next/dist/server/next.js
- /home/david/reseller_analytics_website/node_modules/next/dist/server/lib/start-server.js
    at Function.<anonymous> (node:internal/modules/cjs/loader:1405:15)
    at /home/david/reseller_analytics_website/node_modules/next/dist/server/require-hook.js:55:36
    at defaultResolveImpl (node:internal/modules/cjs/loader:1061:19)
    at resolveForCJSWithHooks (node:internal/modules/cjs/loader:1066:22)
    at Function._load (node:internal/modules/cjs/loader:1215:37)
    at TracingChannel.traceSync (node:diagnostics_channel:322:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
    at Module.<anonymous> (node:internal/modules/cjs/loader:1491:12)
    at mod.require (/home/david/reseller_analytics_website/node_modules/next/dist/server/require-hook.js:65:28)
    at require (node:internal/modules/helpers:135:16)
    at /home/david/reseller_analytics_website/node_modules/next/dist/server/post-process.js:147:30
    at postProcessHTML (/home/david/reseller_analytics_website/node_modules/next/dist/server/post-process.js:165:29)
    at async renderToHTMLImpl (/home/david/reseller_analytics_website/node_modules/next/dist/server/render.js:1016:27)
    at async doRender (/home/david/reseller_analytics_website/node_modules/next/dist/server/base-server.js:1414:30)
    at async cacheEntry.responseCache.get.routeKind (/home/david/reseller_analytics_website/node_modules/next/dist/server/base-server.js:1588:28)
    at async DevServer.renderToResponseWithComponentsImpl (/home/david/reseller_analytics_website/node_modules/next/dist/server/base-server.js:1496:28)
    at async DevServer.renderToResponseImpl (/home/david/reseller_analytics_website/node_modules/next/dist/server/base-server.js:2019:30)
    at async DevServer.pipeImpl (/home/david/reseller_analytics_website/node_modules/next/dist/server/base-server.js:922:25)
    at async NextNodeServer.handleCatchallRenderRequest (/home/david/reseller_analytics_website/node_modules/next/dist/server/next-server.js:272:17)
    at async DevServer.handleRequestImpl (/home/david/reseller_analytics_website/node_modules/next/dist/server/base-server.js:818:17)
    at async /home/david/reseller_analytics_website/node_modules/next/dist/server/dev/next-dev-server.js:339:20
    at async Span.traceAsyncFn (/home/david/reseller_analytics_website/node_modules/next/dist/trace/trace.js:154:20)
    at async DevServer.handleRequest (/home/david/reseller_analytics_website/node_modules/next/dist/server/dev/next-dev-server.js:336:24)
    at async invokeRender (/home/david/reseller_analytics_website/node_modules/next/dist/server/lib/router-server.js:179:21)
    at async handleRequest (/home/david/reseller_analytics_website/node_modules/next/dist/server/lib/router-server.js:359:24)
    at async requestHandlerImpl (/home/david/reseller_analytics_website/node_modules/next/dist/server/lib/router-server.js:383:13)
    at async Server.requestListener (/home/david/reseller_analytics_website/node_modules/next/dist/server/lib/start-server.js:141:13) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/david/reseller_analytics_website/node_modules/next/dist/server/post-process.js',
    '/home/david/reseller_analytics_website/node_modules/next/dist/server/render.js',
    '/home/david/reseller_analytics_website/node_modules/next/dist/server/future/route-modules/pages/module.js',
    '/home/david/reseller_analytics_website/node_modules/next/dist/server/future/route-modules/pages/builtin/_error.js',
    '/home/david/reseller_analytics_website/node_modules/next/dist/server/load-default-error-components.js',
    '/home/david/reseller_analytics_website/node_modules/next/dist/server/dev/next-dev-server.js',
    '/home/david/reseller_analytics_website/node_modules/next/dist/server/next.js',
    '/home/david/reseller_analytics_website/node_modules/next/dist/server/lib/start-server.js'
  ]
}
Error: Cannot find module 'critters'
Require stack:
- /home/david/reseller_analytics_website/node_modules/next/dist/server/post-process.js
- /home/david/reseller_analytics_website/node_modules/next/dist/server/render.js
- /home/david/reseller_analytics_website/node_modules/next/dist/server/future/route-modules/pages/module.js
- /home/david/reseller_analytics_website/node_modules/next/dist/server/future/route-modules/pages/builtin/_error.js
- /home/david/reseller_analytics_website/node_modules/next/dist/server/load-default-error-components.js
- /home/david/reseller_analytics_website/node_modules/next/dist/server/dev/next-dev-server.js
- /home/david/reseller_analytics_website/node_modules/next/dist/server/next.js
- /home/david/reseller_analytics_website/node_modules/next/dist/server/lib/start-server.js
    at Function.<anonymous> (node:internal/modules/cjs/loader:1405:15)
    at /home/david/reseller_analytics_website/node_modules/next/dist/server/require-hook.js:55:36
    at defaultResolveImpl (node:internal/modules/cjs/loader:1061:19)
    at resolveForCJSWithHooks (node:internal/modules/cjs/loader:1066:22)
    at Function._load (node:internal/modules/cjs/loader:1215:37)
    at TracingChannel.traceSync (node:diagnostics_channel:322:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
    at Module.<anonymous> (node:internal/modules/cjs/loader:1491:12)
    at mod.require (/home/david/reseller_analytics_website/node_modules/next/dist/server/require-hook.js:65:28)
    at require (node:internal/modules/helpers:135:16)
    at /home/david/reseller_analytics_website/node_modules/next/dist/server/post-process.js:147:30
    at postProcessHTML (/home/david/reseller_analytics_website/node_modules/next/dist/server/post-process.js:165:29)
    at async renderToHTMLImpl (/home/david/reseller_analytics_website/node_modules/next/dist/server/render.js:1016:27)
    at async doRender (/home/david/reseller_analytics_website/node_modules/next/dist/server/base-server.js:1414:30)
    at async cacheEntry.responseCache.get.routeKind (/home/david/reseller_analytics_website/node_modules/next/dist/server/base-server.js:1588:28)
    at async DevServer.renderToResponseWithComponentsImpl (/home/david/reseller_analytics_website/node_modules/next/dist/server/base-server.js:1496:28)
    at async pipe.req.req (/home/david/reseller_analytics_website/node_modules/next/dist/server/base-server.js:2056:30)
    at async DevServer.pipeImpl (/home/david/reseller_analytics_website/node_modules/next/dist/server/base-server.js:922:25)
    at async /home/david/reseller_analytics_website/node_modules/next/dist/server/dev/next-dev-server.js:339:20
    at async Span.traceAsyncFn (/home/david/reseller_analytics_website/node_modules/next/dist/trace/trace.js:154:20)
    at async DevServer.handleRequest (/home/david/reseller_analytics_website/node_modules/next/dist/server/dev/next-dev-server.js:336:24)
    at async invokeRender (/home/david/reseller_analytics_website/node_modules/next/dist/server/lib/router-server.js:179:21)
    at async requestHandlerImpl (/home/david/reseller_analytics_website/node_modules/next/dist/server/lib/router-server.js:395:24)
    at async Server.requestListener (/home/david/reseller_analytics_website/node_modules/next/dist/server/lib/start-server.js:141:13) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/david/reseller_analytics_website/node_modules/next/dist/server/post-process.js',
    '/home/david/reseller_analytics_website/node_modules/next/dist/server/render.js',
    '/home/david/reseller_analytics_website/node_modules/next/dist/server/future/route-modules/pages/module.js',
    '/home/david/reseller_analytics_website/node_modules/next/dist/server/future/route-modules/pages/builtin/_error.js',
    '/home/david/reseller_analytics_website/node_modules/next/dist/server/load-default-error-components.js',
    '/home/david/reseller_analytics_website/node_modules/next/dist/server/dev/next-dev-server.js',
    '/home/david/reseller_analytics_website/node_modules/next/dist/server/next.js',
    '/home/david/reseller_analytics_website/node_modules/next/dist/server/lib/start-server.js'
  ]
}
 GET / 500 in 7411ms
 GET / 500 in 9ms