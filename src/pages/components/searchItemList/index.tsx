import styled from 'styled-components';
import { TSearchDataList, SearchData } from '../../../types/global';
import useKeyboardNavigation from '../../../hooks/useKeyboardNavigation';
import SuggestedKeywordsList from '../suggestedKeywordsList';

export default function SearchItemList({ searchDataList }: TSearchDataList) {
  const { selectedIndex, setSelectedIndex } = useKeyboardNavigation(
    searchDataList.length,
  );
  return (
    <>
      <span>추천검색어</span>
      <ListContainer>
        {searchDataList?.map((keyword: SearchData, index: number) => (
          <SuggestedKeywordsList
            key={keyword?.id}
            keyword={keyword?.name}
            isSelected={index === selectedIndex}
            handleMouseEnter={() => setSelectedIndex(index)}
            setSelectedIndex={setSelectedIndex}
          />
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
