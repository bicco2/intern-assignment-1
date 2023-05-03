import styled from 'styled-components';
import placeholderSearchImg from '../../assets/searchimg.png';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #cae9ff;
  height: 100vh;
  width: 100vw;

  & > h2 {
    font-size: 45px;
    line-height: 1.6;
    font-weight: bold;
    margin-bottom: 50px;
    text-align: center;
    font-weight: bold;
  }
`;

export const SearchFrame = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 50px;
  /* box-shadow: 1px 1px 1px 1px #717171; */
  padding: 15px;
  width: 48rem;
  margin-bottom: 20px;

  & > input {
    border: none;
    flex-grow: 1;
    font-size: 25px;
    padding: 20px;
    outline: none;

    ::placeholder {
      background-image: url(${placeholderSearchImg});
      background-repeat: no-repeat;
      background-position: left center;
      background-size: 30px;
      padding-left: 50px;
      background-position-x: 5px;
    }
  }

  & > button {
    border: none;
    border-radius: 50%;
    color: white;
    cursor: pointer;
    background-color: #007be9;

    & > img {
      width: 30px;
      padding: 10px;
    }
  }
`;
