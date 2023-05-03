import axios from 'axios';

function App() {
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
  return (
    <>
      <div>project start</div>
    </>
  );
}

export default App;
