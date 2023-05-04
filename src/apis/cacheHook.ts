export const CachePut = async (word: string) => {
  console.log(word, 'hooks word');
  const URL = `/api/v1/search-conditions/?name=${word}`;
  const cacheStorage = await caches.open('search');
  if (word != '') {
    const cacheData = await cacheStorage.match(URL);
    if (cacheData) {
      return cacheData.json();
    } else {
      const response = await fetch(URL, { method: 'GET' }).then((response) => {
        console.info('calling api');
        const responseClone = response.clone();
        cacheStorage.put(URL, responseClone as Response);
        return response.json();
      });
      return response;
    }
  } else {
    return [];
  }
};
