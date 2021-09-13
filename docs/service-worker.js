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
    "revision": "7f59ee6524f7917689b2cfc7b2ecb66c"
  },
  {
    "url": "assets/css/0.styles.628b28f8.css",
    "revision": "a48f68054dd33f0404b5b44317280568"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.8304bad5.js",
    "revision": "a0a1c6476955fbd7359d7c9afebb10d4"
  },
  {
    "url": "assets/js/11.63aac931.js",
    "revision": "504a10934770761ffc0e962bd00926ce"
  },
  {
    "url": "assets/js/12.4635ee55.js",
    "revision": "c017df7c029eb54d9eef992c409506aa"
  },
  {
    "url": "assets/js/13.89fa6d0d.js",
    "revision": "87d141d32d2d710689b491e0b97286f6"
  },
  {
    "url": "assets/js/3.b73ef5be.js",
    "revision": "4d5fcceafef54b8c977e3059f35d5f4d"
  },
  {
    "url": "assets/js/4.fc8aa8c0.js",
    "revision": "36816d5356b6fea1dacd7fdf88e4d298"
  },
  {
    "url": "assets/js/5.7ff875d8.js",
    "revision": "f2e4d2468abe690f1358d566dc9382d5"
  },
  {
    "url": "assets/js/6.45809760.js",
    "revision": "bf42d9ee62a9e4b3f53cfae403cf8b8c"
  },
  {
    "url": "assets/js/7.f04de556.js",
    "revision": "9a7f5490003b432939766b393a2893e2"
  },
  {
    "url": "assets/js/8.0d3dee98.js",
    "revision": "719868680d7dd1ad660d20323bc8b8a5"
  },
  {
    "url": "assets/js/9.f2be106c.js",
    "revision": "d11848abbaf3a5f119c1392e6955b4ef"
  },
  {
    "url": "assets/js/app.cfb73011.js",
    "revision": "a358ff3f11a99f52a26dc0dc15eb891a"
  },
  {
    "url": "assets/js/vendors~flowchart.fec0faed.js",
    "revision": "4af5661622e72e31faf479c7e2d67666"
  },
  {
    "url": "courseware/index.html",
    "revision": "d4baaf33e5973ec802710220a013139c"
  },
  {
    "url": "hero.jpg",
    "revision": "f2bcf711dec82b020d02065168888a59"
  },
  {
    "url": "index.html",
    "revision": "168ca9bed2c5d4ca424a99c53a865bd0"
  },
  {
    "url": "note/index.html",
    "revision": "63db0f69a549509469050489400aa7c9"
  },
  {
    "url": "resources/index.html",
    "revision": "706fb7c3817cd4ed0cfb10f3d787579d"
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
