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
    "revision": "4c71dda27c8454094aecee5b857b209d"
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
    "url": "assets/js/10.656fe34f.js",
    "revision": "2aacd53a01b530aff7fedf993620dae5"
  },
  {
    "url": "assets/js/11.3fbb8e97.js",
    "revision": "9478ba7478792071233b9833a4b9d05b"
  },
  {
    "url": "assets/js/12.0d06159e.js",
    "revision": "c7fb49739c999da4dde8120cc7640f33"
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
    "url": "assets/js/app.aeadaa63.js",
    "revision": "03583a214d1c87a6d7b5d28d52afc5fc"
  },
  {
    "url": "assets/js/vendors~flowchart.fec0faed.js",
    "revision": "4af5661622e72e31faf479c7e2d67666"
  },
  {
    "url": "courseware/index.html",
    "revision": "e3015a94e7e08bb487495c2627373386"
  },
  {
    "url": "hero.jpg",
    "revision": "f2bcf711dec82b020d02065168888a59"
  },
  {
    "url": "index.html",
    "revision": "5141b338bd4e6aebc8f61ce075caaa6a"
  },
  {
    "url": "note/index.html",
    "revision": "314d1f1ae169b90fc4c26856dca0386f"
  },
  {
    "url": "resources/index.html",
    "revision": "dc3dd587baaf38178842656a51a1ad98"
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
