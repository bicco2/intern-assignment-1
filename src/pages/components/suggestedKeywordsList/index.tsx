import styled from 'styled-components';
import { TSearchListFuncProps, IsSelectedProps } from '../../../types/global';

const SuggestedKeywordsList = ({
  keyword,
  isSelected,
  handleMouseEnter,
  setSelectedIndex,
}: TSearchListFuncProps) => {
  return (
    <SuggestedKeywordsWrapper
      isSelected={isSelected}
      onMouseOver={handleMouseEnter}
      onMouseOut={() => setSelectedIndex(-1)}
      onClick={() => console.log(keyword)}
    >
      <p>{keyword}</p>
    </SuggestedKeywordsWrapper>
  );
};

export default SuggestedKeywordsList;

const SuggestedKeywordsWrapper = styled.div<IsSelectedProps>`
  display: flex;
  padding: 8px 24px;
  background-color: ${({ isSelected }) =>
    isSelected ? '#f1f3f5' : 'transparent'};
  cursor: pointer;
`;
