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
    "revision": "41ae6485ddc11235c19d86ddbf8b19c7"
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
    "url": "assets/img/event-loop-code-flow.52fa149e.png",
    "revision": "52fa149e9fdfdb27a2589d28e9d2836a"
  },
  {
    "url": "assets/img/event-loop.5e8735ea.png",
    "revision": "5e8735ea8fa205610e9c37daa2a8239a"
  },
  {
    "url": "assets/img/JSWorkflowEngine.7be10742.png",
    "revision": "7be1074236f3660ad04a08fbb8df1a02"
  },
  {
    "url": "assets/img/node-event-loop.3b819c14.png",
    "revision": "3b819c1487baaf0c0dafd46556092b9c"
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
    "url": "assets/js/10.9bd0053b.js",
    "revision": "40a85baf8fcdef89249f38cb9d0e1172"
  },
  {
    "url": "assets/js/11.415ac5de.js",
    "revision": "1e7c0050222f11bb614c105be88c158d"
  },
  {
    "url": "assets/js/12.668b98d1.js",
    "revision": "0493580015965a6c4421b6bafc940ac6"
  },
  {
    "url": "assets/js/13.d8d4dc5d.js",
    "revision": "ff4baf08dccd24a100664bc73d443720"
  },
  {
    "url": "assets/js/14.8179fe11.js",
    "revision": "2592ba0a07cd0d65ae71cca5b265c34a"
  },
  {
    "url": "assets/js/15.7179d332.js",
    "revision": "2b2511d5a2e40c30b335c147657a0356"
  },
  {
    "url": "assets/js/16.157eb7d7.js",
    "revision": "05dfa285617d827f5c20e170465107eb"
  },
  {
    "url": "assets/js/17.3f7ade6a.js",
    "revision": "068b1b5da17778a11e9249c8bdb15174"
  },
  {
    "url": "assets/js/3.8aa8f030.js",
    "revision": "589ce2baf519f7e8117034f7693f8866"
  },
  {
    "url": "assets/js/4.cb6a11ed.js",
    "revision": "3465378695a1b102ab0ff019f796b97e"
  },
  {
    "url": "assets/js/5.0f050ebd.js",
    "revision": "a34dd154d8fd5bd200be843c75adf27d"
  },
  {
    "url": "assets/js/6.bad26671.js",
    "revision": "217043a089f8216a72f54c1166c24df4"
  },
  {
    "url": "assets/js/7.c0d3b7ce.js",
    "revision": "21b74586ac9bce2c1d3b782bc8e65e7a"
  },
  {
    "url": "assets/js/8.ce56086d.js",
    "revision": "5045e48db0f88adb4ad3a16b0491685e"
  },
  {
    "url": "assets/js/9.c84cf853.js",
    "revision": "8cf45ecbdbee5eaa535fad138d8a80f8"
  },
  {
    "url": "assets/js/app.6b7621a6.js",
    "revision": "051d544bd68339a0ab3bfbdd1f134d80"
  },
  {
    "url": "assets/js/vendors~flowchart.24e7f86f.js",
    "revision": "923cee8c6455c2b342f1b52b00594f02"
  },
  {
    "url": "courseware/index.html",
    "revision": "b05c436ee050858b8e3a5cc9dcd40d0d"
  },
  {
    "url": "hero.jpg",
    "revision": "f2bcf711dec82b020d02065168888a59"
  },
  {
    "url": "index.html",
    "revision": "455aeb62d6b06a9f0a761a43bde5b12c"
  },
  {
    "url": "note/BitOperation.html",
    "revision": "ae96b859c2eb714d87bf7203f6fb210a"
  },
  {
    "url": "note/ECMAScriptInterpreter.html",
    "revision": "b7188140c0e4c9114200bb0aa8dfb1aa"
  },
  {
    "url": "note/EventLoop.html",
    "revision": "23e35c747e9e67390cf7e3d101f87522"
  },
  {
    "url": "note/index.html",
    "revision": "0dbf248277a7c5c8077b408bdc8ab1a3"
  },
  {
    "url": "note/OOP.html",
    "revision": "416f5ac85c00681cfe86b0db4c9d31af"
  },
  {
    "url": "resources/index.html",
    "revision": "66198de32ad4e2e5e7b08d605acbbef5"
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
