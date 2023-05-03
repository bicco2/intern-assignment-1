import axios from 'axios';
import { TestDiv } from './styles';

export default function Home() {
  const getAPITest = async () => {
    try {
      await axios
        .get(`/api/v1/search-conditions/?name=갑상선`)
        .then((response) => {
          console.log(response.data);
        });
    } catch (error) {
      console.error(error);
    }
  };
  getAPITest();
  return <TestDiv>homepage</TestDiv>;
}
