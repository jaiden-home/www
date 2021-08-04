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
    "revision": "a3800968a0f1c4a9c5a82d9a89fecd29"
  },
  {
    "url": "assets/css/0.styles.80b95875.css",
    "revision": "92db2ad06b7006ba85d626eed297bdf8"
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
    "url": "assets/js/11.d9c7ea68.js",
    "revision": "fb6062e9997ae0331e61dd7baff7e76a"
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
    "url": "assets/js/3.adc6c537.js",
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
    "url": "assets/js/6.05fa1820.js",
    "revision": "06667a0363944ed734f00b81a60deeb9"
  },
  {
    "url": "assets/js/7.a0f8d4e9.js",
    "revision": "7cf22933b3305d2bd4fc15306297af46"
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
    "url": "assets/js/app.c20327cd.js",
    "revision": "00d309763c5dee4d51146767bd5f974a"
  },
  {
    "url": "assets/js/vendors~flowchart.fec0faed.js",
    "revision": "4af5661622e72e31faf479c7e2d67666"
  },
  {
    "url": "courseware/index.html",
    "revision": "312e5c545b067497d3de356dcb906506"
  },
  {
    "url": "hero.jpg",
    "revision": "f2bcf711dec82b020d02065168888a59"
  },
  {
    "url": "index.html",
    "revision": "5b4152efdd463ec54a3fa3936908182d"
  },
  {
    "url": "note/index.html",
    "revision": "a17c67e1ed5e9022dcd7556a3b4907b7"
  },
  {
    "url": "resources/index.html",
    "revision": "59494992d98b6aa643cfad37b4660a86"
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
