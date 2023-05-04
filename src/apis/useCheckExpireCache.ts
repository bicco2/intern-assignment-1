export const useCheckExpireCache = async () => {
  await caches.open('search').then(function (cache) {
    cache.keys().then(function (requests) {
      requests.forEach(function (request) {
        cache.match(request).then(function (res) {
          if (res) {
            const cacheCreatedTime = res.headers.get('date');
            let expireCacheTime = new Date(cacheCreatedTime!);
            expireCacheTime = new Date(expireCacheTime.getTime() + 60 * 1000);

            if (expireCacheTime.getTime() < Date.now()) {
              cache.delete(request.url);
            }
          }
        });
      });
    });
  });
};
