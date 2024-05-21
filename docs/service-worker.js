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
    "revision": "232311e215d27f777524b79cc13864d8"
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
    "url": "assets/js/10.c9b12449.js",
    "revision": "29ae04d952e23066893fb58c088f8394"
  },
  {
    "url": "assets/js/11.53e19bee.js",
    "revision": "d75d695b0fd89dbfd75f679c2c5ae7eb"
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
    "url": "assets/js/16.2561506c.js",
    "revision": "d9fe5ef2c055cfebde15b85c9d9c7267"
  },
  {
    "url": "assets/js/17.8cd15550.js",
    "revision": "90d79092fe428507c636a0bf904bcc3d"
  },
  {
    "url": "assets/js/18.4a1ff80e.js",
    "revision": "20febea70df1e90fbc138ae4674c84ee"
  },
  {
    "url": "assets/js/19.f40c463a.js",
    "revision": "ba2c59e7e69f2ac9b3ec0169cf041b0b"
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
    "url": "assets/js/7.2cd398db.js",
    "revision": "6a63920b185617e85783ea86fc06cdff"
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
    "url": "assets/js/app.c701c129.js",
    "revision": "f06537a99b53ce23b9c06a0f79c1745f"
  },
  {
    "url": "assets/js/vendors~flowchart.cb4119d8.js",
    "revision": "3cd8b91d9e06f5c89d99b605ee42fdd2"
  },
  {
    "url": "courseware/index.html",
    "revision": "799af24c23d3ee7a5a8e7b435cd80766"
  },
  {
    "url": "hero.jpg",
    "revision": "f2bcf711dec82b020d02065168888a59"
  },
  {
    "url": "index.html",
    "revision": "33857da75b9d1ec30ea9545eadc2a836"
  },
  {
    "url": "note/BitOperation.html",
    "revision": "74a7de663eed94506d7cdadbc9d5243e"
  },
  {
    "url": "note/BrowserStructure.html",
    "revision": "e48a8cfc8f970c148437c71706834832"
  },
  {
    "url": "note/EventLoop.html",
    "revision": "cb40ae2daeba0a3730648187944e473c"
  },
  {
    "url": "note/index.html",
    "revision": "0ccebe12db08b2fa08180668ded52c0b"
  },
  {
    "url": "note/Interpreter.html",
    "revision": "c0f2f8d0792664ac68506a530f6123ce"
  },
  {
    "url": "note/OOP.html",
    "revision": "217a7a74121d67d570deee11bc1e6d9b"
  },
  {
    "url": "note/TypeScript.html",
    "revision": "90bd9729f7ff2c70aa08b7910b9c8fb5"
  },
  {
    "url": "resources/index.html",
    "revision": "c33ab5c3693aa5dfe1ec348c58dffc36"
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
