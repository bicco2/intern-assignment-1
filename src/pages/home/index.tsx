import axios from 'axios';
import { Wrapper, SearchFrame } from './styles';
import { SearchHistoryWindow } from '../components/searchHistoryWindow';
import searchImg2 from '../../assets/searchimg2.png';

export default function Home() {
  // const getAPITest = async () => {
  //   try {
  //     await axios
  //       .get(`/api/v1/search-conditions/?name=갑상선`)
  //       .then((response) => {
  //         console.log(response.data);
  //       });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // getAPITest();

  return (
    <Wrapper>
      <h2>
        국내 모든 임상시험 검색하고
        <br /> 온라인으로 참여하기
      </h2>
      <SearchFrame>
        <input type="text" placeholder="질환명을 입력해주세요." />
        <button>
          <img src={searchImg2} alt="searchbar" />
        </button>
      </SearchFrame>

      <SearchHistoryWindow />
    </Wrapper>
  );
}
