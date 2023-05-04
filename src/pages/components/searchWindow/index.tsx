import styled from 'styled-components';
import { useState, useEffect } from 'react';

import { CachePut } from '../../../apis/cacheHook';
import { useCheckExpireCache } from '../../../hooks/useCheckExpireCache';
import useDebounce from '../../../hooks/useDebounce';
import { SearchData } from '../../../types/global';

import SearchItemList from '../searchItemList';

export const SearchWindow = ({ word }: { word: string }) => {
  const [data, setData] = useState<SearchData[]>([]);
  const debounceWord = useDebounce(word);

  async function getSearchData() {
    const res = await CachePut(debounceWord);
    if (res == undefined) {
      setData([]);
    } else {
      setData(res.splice(0, 7));
    }
  }

  useCheckExpireCache();

  useEffect(() => {
    getSearchData();
    console.log(debounceWord, 'word');
  }, [debounceWord]);

  return (
    <SearchContainer>
      {word ? (
        <SearchItemList searchDataList={data} />
      ) : (
        <>
          <span>최근 검색어</span>
          <ListContainer>asdf</ListContainer>
          <RecommendContainer>추천검색어로 검색해보세요.</RecommendContainer>
        </>
      )}
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 48rem;
  box-shadow: 0px 0px 1.5px 0px grey;
  background-color: white;
  border-radius: 18px;

  & > span {
    margin: 10px;
  }
`;

const ListContainer = styled.div`
  border-bottom: 1px solid grey;
  padding: 10px;

  & > div {
    margin: 10px;
  }
`;

const RecommendContainer = styled.div`
  height: 100px;
  padding: 10px;
`;

const NotSearchWordContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  height: 300px;
`;
