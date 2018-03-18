import styled from 'styled-components';

const Header = styled.header`
  background-color: #3f51b5;
  height: 70px;

  b {
    display: inline-block;
    transform: rotate(-90deg);
    margin-top: 20px;
    color: pink;
    position: absolute;
    top: 5px;
  }

  p {
    margin: 0;
    margin-left: 40px;
    text-align: center;
    display: flex;
    height: 100%;
    padding-bottom: 0;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: large;
  }
`;

export default Header;
