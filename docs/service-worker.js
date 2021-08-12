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
    "revision": "a4cd076f4339800bb92f71f9e143cef9"
  },
  {
    "url": "assets/css/0.styles.2a43ddd3.css",
    "revision": "661204374d8af9c6e5e1eeb46258a3c6"
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
    "url": "assets/js/11.261b8578.js",
    "revision": "20503d63d98a5f2414f2357648510367"
  },
  {
    "url": "assets/js/12.6bc23b16.js",
    "revision": "635bac414bdd10f107e6d8224fe182e4"
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
    "url": "assets/js/5.a48b3b09.js",
    "revision": "b212302a4ec40daa746758e456a1b99d"
  },
  {
    "url": "assets/js/6.464fa256.js",
    "revision": "893cda214ec141873e47571f2511f7cb"
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
    "url": "assets/js/app.2a4fd353.js",
    "revision": "89537414c228d8e66ab599e637b70565"
  },
  {
    "url": "assets/js/vendors~flowchart.fec0faed.js",
    "revision": "4af5661622e72e31faf479c7e2d67666"
  },
  {
    "url": "courseware/index.html",
    "revision": "b4f0d94dc35ee93588d1eceed8337523"
  },
  {
    "url": "hero.jpg",
    "revision": "f2bcf711dec82b020d02065168888a59"
  },
  {
    "url": "index.html",
    "revision": "40b19fad48ed1a2452add198e5b1527b"
  },
  {
    "url": "note/index.html",
    "revision": "edbd458ae4b9ce6a8d63de15d3914096"
  },
  {
    "url": "resources/index.html",
    "revision": "a4796f8365e7faeb52ea2bc2b5924e13"
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
