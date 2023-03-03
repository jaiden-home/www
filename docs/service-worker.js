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
    "revision": "70a6dc6d6222b8c6ea4bcaa7ef96dcba"
  },
  {
    "url": "assets/css/0.styles.770e0af4.css",
    "revision": "b923061e8e848ddd3e1ba814a6277300"
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
    "url": "assets/js/10.01ff674f.js",
    "revision": "3f000728bd74d92d186308d501fb4aef"
  },
  {
    "url": "assets/js/11.a266d517.js",
    "revision": "c57c679f242e3efb9414587c9b55df78"
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
    "url": "assets/js/16.19ef39e0.js",
    "revision": "cbe30c48e7958fabd3fa0d5b657882cb"
  },
  {
    "url": "assets/js/17.71fb40c6.js",
    "revision": "1e41e1c00f9b689ac3d40f09142a250b"
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
    "url": "assets/js/4.c22f471d.js",
    "revision": "08357efc11ea9cc14661b31b19527eea"
  },
  {
    "url": "assets/js/5.50a3979a.js",
    "revision": "06e5f680e566d6d2104d0ae07f5b541b"
  },
  {
    "url": "assets/js/6.65976e91.js",
    "revision": "0e49bfe663974ddb33d38fa33273633d"
  },
  {
    "url": "assets/js/7.2e10a412.js",
    "revision": "b153fc876dd6875277e09e33d9f2d454"
  },
  {
    "url": "assets/js/8.08153b9d.js",
    "revision": "5a040aae50e9baacc49c156887ecf236"
  },
  {
    "url": "assets/js/9.f8310c1e.js",
    "revision": "8bae07a18ea7b0c29c5a6d826ff505cc"
  },
  {
    "url": "assets/js/app.93f67537.js",
    "revision": "edc58d3c8c256b5f5a108103949b7f23"
  },
  {
    "url": "assets/js/vendors~flowchart.cb4119d8.js",
    "revision": "3cd8b91d9e06f5c89d99b605ee42fdd2"
  },
  {
    "url": "courseware/index.html",
    "revision": "a447c43e985d68902cde7b90a53b261f"
  },
  {
    "url": "hero.jpg",
    "revision": "f2bcf711dec82b020d02065168888a59"
  },
  {
    "url": "index.html",
    "revision": "ee702ec1a4edd1a4d7ea8e89b17ff933"
  },
  {
    "url": "note/BitOperation.html",
    "revision": "726399eda8d1008809b5091251d0d966"
  },
  {
    "url": "note/BrowserStructure.html",
    "revision": "c5bcfc0639d057fd54a5d119e5fc1db4"
  },
  {
    "url": "note/ECMAScriptInterpreter.html",
    "revision": "3e2afe4e60a734be1a7b7171efb8377d"
  },
  {
    "url": "note/EventLoop.html",
    "revision": "b67093cc8d80e019a726f94fb82c9304"
  },
  {
    "url": "note/index.html",
    "revision": "4fa8257c823f4062c48fa72b4ea1e823"
  },
  {
    "url": "note/OOP.html",
    "revision": "daf6d0e0ccfe578549b4eda1e01aa42f"
  },
  {
    "url": "resources/index.html",
    "revision": "665435ced04204b394114440bdc80c1a"
  },
  {
    "url": "video_course.html",
    "revision": "70de73526070bbd4bec0f1b9db72b184"
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
