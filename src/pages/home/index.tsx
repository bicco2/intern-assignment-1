import { useState, ChangeEvent } from 'react';
import { Wrapper, SearchFrame } from './styles';
import { SearchWindow } from '../components/searchWindow';
import searchImg2 from '../../assets/searchimg2.png';

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [searchList, setSearchList] = useState<string[]>([]);

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
          placeholder="질환명을 입력해주세요."
          onInput={handleChange}
        />
        <button onClick={() => setSearchList([...searchList, inputValue])}>
          <img src={searchImg2} alt="searchbar" />
        </button>
      </SearchFrame>
      {/* {searchList.map((item) => (
        <div key={item}>{item}</div>
      ))} */}
      <SearchWindow word={inputValue ? inputValue : ''} />
    </Wrapper>
  );
}
