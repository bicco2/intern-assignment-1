import styled from 'styled-components';

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

// list container >> 컴포넌트 분리

const ListContainer = styled.div`
  border-bottom: 1px solid grey;
  padding: 10px;
  height: 100px;
`;

// TODO:추천 검색어 >> 컴포넌트 분리
const RecommendContainer = styled.div`
  height: 100px;
  padding: 10px;
`;

export const SearchHistoryWindow = () => {
  return (
    <SearchContainer>
      <span>최근 검색어</span>
      <ListContainer>saf</ListContainer>
      <RecommendContainer>추천검색어 box</RecommendContainer>
    </SearchContainer>
  );
};
