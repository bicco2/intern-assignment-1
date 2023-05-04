import styled from 'styled-components';
import { TSearchDataList } from '../../../types/global';

export default function SearchItemList({ searchDataList }: TSearchDataList) {
  return (
    <>
      <span>추천검색어</span>
      <ListContainer>
        {searchDataList?.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </ListContainer>
    </>
  );
}

const ListContainer = styled.div`
  border-bottom: 1px solid grey;
  padding: 10px;

  & > div {
    margin: 10px;
  }
`;
