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
    "revision": "05eb313a04852f839920eace25fa5a11"
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
    "url": "assets/img/microtask.1bdb3097.png",
    "revision": "1bdb3097740589392e36ee14a5b00938"
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
    "url": "assets/js/10.f70b1781.js",
    "revision": "958e23ff9e8d3ed934c8f50f55d6d64f"
  },
  {
    "url": "assets/js/11.c1c5385e.js",
    "revision": "60e376ce505b27328c96b46560d14a0e"
  },
  {
    "url": "assets/js/12.21e1df22.js",
    "revision": "de2950215d898938d78aca7c082326e2"
  },
  {
    "url": "assets/js/13.7311ea14.js",
    "revision": "a7826ead8c09ac26014833b2a6aeeb5a"
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
    "url": "assets/js/18.fdf3406c.js",
    "revision": "c5d9bddab80bc40f1396742c47334aa1"
  },
  {
    "url": "assets/js/3.44dc1535.js",
    "revision": "978af0e768cd2b98087c45994d3badfe"
  },
  {
    "url": "assets/js/4.c7090467.js",
    "revision": "a7453cdfb9eac745e0e41ab01aeb88e2"
  },
  {
    "url": "assets/js/5.37a8bee1.js",
    "revision": "a4259b7859f448ffc7b56a5a27022826"
  },
  {
    "url": "assets/js/6.2eb5ffa6.js",
    "revision": "2eb85cc2810d61c5087849969c0e7cdd"
  },
  {
    "url": "assets/js/7.361f3e31.js",
    "revision": "7145ba4392751bcb80d334a83de50788"
  },
  {
    "url": "assets/js/8.d531215b.js",
    "revision": "2c05fc42a8b8b4f6b5c26bd0c77da436"
  },
  {
    "url": "assets/js/9.495ece32.js",
    "revision": "9c5e2327158b038546a2a4f7eada1a99"
  },
  {
    "url": "assets/js/app.121520a8.js",
    "revision": "51bd0e9cfcea4b79c31768400177503c"
  },
  {
    "url": "assets/js/vendors~flowchart.9ddb4a5a.js",
    "revision": "78a3418d8f5e04060130d7a9067fe700"
  },
  {
    "url": "courseware/index.html",
    "revision": "02dab0fbe44d707f1c2b3ab05969b5ee"
  },
  {
    "url": "hero.jpg",
    "revision": "f2bcf711dec82b020d02065168888a59"
  },
  {
    "url": "index.html",
    "revision": "eb1d306a60cceb76551d9fc8671d6f68"
  },
  {
    "url": "note/BitOperation.html",
    "revision": "434fda7459eecb37f7437a8215733dc3"
  },
  {
    "url": "note/BrowserStructure.html",
    "revision": "4579077897129aa0e1b11d68aefc42c7"
  },
  {
    "url": "note/ECMAScriptInterpreter.html",
    "revision": "84278438fc07909f0a08491d106b97a9"
  },
  {
    "url": "note/EventLoop.html",
    "revision": "6dc98fed961b1180f24aa41c92d9efe4"
  },
  {
    "url": "note/index.html",
    "revision": "3effb75d8a9ef9142cc7924d3ca3af4e"
  },
  {
    "url": "note/OOP.html",
    "revision": "d3e9e3aa1e1fcd8628577adb61bb3398"
  },
  {
    "url": "resources/index.html",
    "revision": "43c472275160a2babf8767c680379717"
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
