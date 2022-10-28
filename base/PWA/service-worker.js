// 首先检查浏览器是否支持 Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/base/PWA/service-worker.js')
      .then(function(registration) {
        console.log(registration);
      })
      .catch(function(err) {
        console.log(err);
      });
  }