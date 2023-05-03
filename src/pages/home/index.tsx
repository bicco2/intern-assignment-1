import { useState, ChangeEvent } from 'react';
import { Wrapper, SearchFrame } from './styles';
import { SearchHistoryWindow } from '../components/searchHistoryWindow';
import searchImg2 from '../../assets/searchimg2.png';

export default function Home() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
  };

  return (
    <Wrapper>
      <h2>
        국내 모든 임상시험 검색하고
        <br /> 온라인으로 참여하기
      </h2>
      <SearchFrame>
        <input
          type="text"
          value={inputValue}
          placeholder="질환명을 입력해주세요."
          onChange={handleChange}
        />
        <button>
          <img src={searchImg2} alt="searchbar" />
        </button>
      </SearchFrame>

      <SearchHistoryWindow word={inputValue ? inputValue : ''} />
    </Wrapper>
  );
}
