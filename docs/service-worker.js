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
    "revision": "2d5ef578edc9bd3786796c77710fe1e4"
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
    "url": "assets/js/11.7924d6a6.js",
    "revision": "bababda0e46517e878bd2b6ce386244b"
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
    "url": "assets/js/app.106ed53b.js",
    "revision": "c896d6fbb6c577b10aa53a900adbac5c"
  },
  {
    "url": "assets/js/vendors~flowchart.fec0faed.js",
    "revision": "4af5661622e72e31faf479c7e2d67666"
  },
  {
    "url": "courseware/index.html",
    "revision": "37505c7263b59332b6488f25359e367c"
  },
  {
    "url": "hero.jpg",
    "revision": "f2bcf711dec82b020d02065168888a59"
  },
  {
    "url": "index.html",
    "revision": "c148c85c856297ab89595ebbfcb8acd1"
  },
  {
    "url": "note/index.html",
    "revision": "131a7e08b61cbe13352dc448201f1a48"
  },
  {
    "url": "resources/index.html",
    "revision": "8b4c9dd535a2b680c316026e05b65672"
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
