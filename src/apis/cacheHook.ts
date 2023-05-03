///
///
//
//

// 매개변수로 갖고 와야함 url

export const CachePut = async (word: string) => {
  const URL = `/api/v1/search-conditions/?name=${word}`;
  const cacheStorage = await caches.open('test');
  if (word != '') {
    const response = await fetch(URL, { method: 'GET' }).then((response) => {
      const responseClone = response.clone();
      cacheStorage.put(URL, responseClone as Response);

      return response.json();
    });
    return response;
  } else {
    return [];
  }
};

export const CacheMatch = async () => {
  const URL = '/api/v1/search-conditions/?name=갑상선';
  const cacheStorage = await caches.open('test');
  const cacheData = await cacheStorage.match(URL);

  console.log(
    cacheData?.json().then((data) => {
      console.log(data, 'match 후 데이터');
    }),
    'test111',
  );
};
