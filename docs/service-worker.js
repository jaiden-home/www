/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "8bad694b2014a8b92899b528b7c9414f"
  },
  {
    "url": "assets/css/0.styles.2032cc30.css",
    "revision": "6abdb06c06fd250944268630ce712d18"
  },
  {
    "url": "assets/img/clock-code.d0bff50a.png",
    "revision": "d0bff50a774fbbec241dd7809fbc9adf"
  },
  {
    "url": "assets/img/clock.49ab4b0b.png",
    "revision": "49ab4b0bb0ad299ecee9e998867b641e"
  },
  {
    "url": "assets/img/compilation-process.253abfaa.png",
    "revision": "253abfaa57a385c43a96edd95bcabfaf"
  },
  {
    "url": "assets/img/event-loop-made.907e7377.png",
    "revision": "907e73773923fd64fb095b40df90d726"
  },
  {
    "url": "assets/img/event-loop.ee343e84.png",
    "revision": "ee343e84785dc2c52339c24ec71e6639"
  },
  {
    "url": "assets/img/memory-model.11ffc956.png",
    "revision": "11ffc9561f3280e0a06594332738f7f0"
  },
  {
    "url": "assets/img/node-system.20c8ec0e.png",
    "revision": "20c8ec0e32db9d302955408622f7c91e"
  },
  {
    "url": "assets/img/prototype_chain.8be70047.png",
    "revision": "8be70047f371f4de33973e99614cdc5d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/stack-queue-heap.c7e000dd.png",
    "revision": "c7e000ddfd0790b4d39fbc0fa5bc022c"
  },
  {
    "url": "assets/js/10.dc61664e.js",
    "revision": "10c9d89fb01dc77f0844f963172a0035"
  },
  {
    "url": "assets/js/11.75125999.js",
    "revision": "9457f2d506d6f3dadaae4d1bf073e81d"
  },
  {
    "url": "assets/js/12.d3b0fb20.js",
    "revision": "f4701f3213e8c35d6bcbda42506c19da"
  },
  {
    "url": "assets/js/13.078d396c.js",
    "revision": "09245abe2c490585ec99e1d542bf9a2f"
  },
  {
    "url": "assets/js/14.1a301d8f.js",
    "revision": "032238786b4fc659498969ff03300a98"
  },
  {
    "url": "assets/js/15.1fa4bd3b.js",
    "revision": "df07610f466cd3d8321317921006fd7e"
  },
  {
    "url": "assets/js/16.de997484.js",
    "revision": "0f1700dff5a5a765f5d3a3b2cd306911"
  },
  {
    "url": "assets/js/17.04677418.js",
    "revision": "b6dc053366e4503614fa806233d7180c"
  },
  {
    "url": "assets/js/18.e2200278.js",
    "revision": "7e593aee214cc7542047492c08f5fb1c"
  },
  {
    "url": "assets/js/3.971ef2e2.js",
    "revision": "f845544364bb84388653c20bece1f0a0"
  },
  {
    "url": "assets/js/4.d62ca76f.js",
    "revision": "160b68fb3a68fe6ab99524220c5c2811"
  },
  {
    "url": "assets/js/5.0ee89202.js",
    "revision": "87cee1051c4f9ab8e1c3753c4d131bcb"
  },
  {
    "url": "assets/js/6.65976e91.js",
    "revision": "0e49bfe663974ddb33d38fa33273633d"
  },
  {
    "url": "assets/js/7.a1fb7961.js",
    "revision": "dd3bdc38e21503a19f2bc16a57664702"
  },
  {
    "url": "assets/js/8.ec1910ba.js",
    "revision": "8f181dd6fc38f3f4ae589a5b69d2e68e"
  },
  {
    "url": "assets/js/9.d81866fb.js",
    "revision": "1a6bf0233f3f66745a5ef198a2d44fbd"
  },
  {
    "url": "assets/js/app.0253ed26.js",
    "revision": "db50cfe10c52ba482bedf22c2c9e0b2a"
  },
  {
    "url": "assets/js/vendors~flowchart.cb4119d8.js",
    "revision": "3cd8b91d9e06f5c89d99b605ee42fdd2"
  },
  {
    "url": "courseware/index.html",
    "revision": "e7fbbcfd40ebb3fc59174f0ddfa655a7"
  },
  {
    "url": "hero.jpg",
    "revision": "f2bcf711dec82b020d02065168888a59"
  },
  {
    "url": "index.html",
    "revision": "58ead1dc9b85f8274e8def8e9ca4de89"
  },
  {
    "url": "note/BitOperation.html",
    "revision": "66570a5d4fa12eb486cec496fef61a9a"
  },
  {
    "url": "note/BrowserStructure.html",
    "revision": "483b637c7adb3f73c9f92f13d43c2c22"
  },
  {
    "url": "note/ECMAScriptInterpreter.html",
    "revision": "6edfdbab4f7ad7ac4225fd4f27a063b0"
  },
  {
    "url": "note/EventLoop.html",
    "revision": "e6ad568e724fc1811f8c07f56b0bc4ae"
  },
  {
    "url": "note/index.html",
    "revision": "2b37de32d02eb3bf6da60b749a535f1e"
  },
  {
    "url": "note/OOP.html",
    "revision": "85068594177a3bac482e3070f7ef08cf"
  },
  {
    "url": "resources/index.html",
    "revision": "b669f7000002d45ed5419a6426349327"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
