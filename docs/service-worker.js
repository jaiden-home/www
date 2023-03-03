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
    "revision": "e19875a9721134e10b502610a8692d3b"
  },
  {
    "url": "assets/css/0.styles.f84bc4a7.css",
    "revision": "27f6789c80a4516bdf7f30da6d948015"
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
    "url": "assets/js/10.c9b12449.js",
    "revision": "29ae04d952e23066893fb58c088f8394"
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
    "url": "assets/js/14.da8670fd.js",
    "revision": "ab335d33933556c28b3bea571b1ae662"
  },
  {
    "url": "assets/js/15.1fa4bd3b.js",
    "revision": "df07610f466cd3d8321317921006fd7e"
  },
  {
    "url": "assets/js/16.265db342.js",
    "revision": "e572f3d6d3daa0804c70fec56f3d1d50"
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
    "url": "assets/js/4.fe52a896.js",
    "revision": "531534ebf0a79b69aff353cccd621dc3"
  },
  {
    "url": "assets/js/5.ff20dc41.js",
    "revision": "61ec0db6d286d9d084a689852cc929d2"
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
    "url": "assets/js/8.b06da69f.js",
    "revision": "c93a9a86e8d07a81bcfd3c28f024e958"
  },
  {
    "url": "assets/js/9.b1641ed6.js",
    "revision": "b8775dc2c7a00ee5d21c61f49b41c71c"
  },
  {
    "url": "assets/js/app.4e67cf19.js",
    "revision": "3ca226318b9b4e228d0dca6e33c52c98"
  },
  {
    "url": "assets/js/vendors~flowchart.cb4119d8.js",
    "revision": "3cd8b91d9e06f5c89d99b605ee42fdd2"
  },
  {
    "url": "courseware/index.html",
    "revision": "eaf40fd336782602181d81a1d4d68b67"
  },
  {
    "url": "hero.jpg",
    "revision": "f2bcf711dec82b020d02065168888a59"
  },
  {
    "url": "index.html",
    "revision": "6e36d802b9cd460a82db1f559574deb4"
  },
  {
    "url": "note/BitOperation.html",
    "revision": "f293751942926b1522e52cd4dbc0c41c"
  },
  {
    "url": "note/BrowserStructure.html",
    "revision": "05fe86c8fce3278e685e2f019df53f91"
  },
  {
    "url": "note/EventLoop.html",
    "revision": "46e3655b1c1fd95bfc041f0c5b27dad5"
  },
  {
    "url": "note/index.html",
    "revision": "6d86d04112733a2a3c602917feff799e"
  },
  {
    "url": "note/Interpreter.html",
    "revision": "9120fb4e2c50f21d8dec571934c83504"
  },
  {
    "url": "note/OOP.html",
    "revision": "d54e9fbc6e33fd59614bf7b36a32f864"
  },
  {
    "url": "resources/index.html",
    "revision": "a2a9cd3f9ba1bc0ff63f050719376a87"
  },
  {
    "url": "VideoCourse.html",
    "revision": "b90b6023e1f1781d38583b95f4544d0a"
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
