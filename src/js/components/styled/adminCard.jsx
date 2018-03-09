import styled from 'styled-components';

const adminCard = styled.section`
  padding-bottom: 10px;

  button {
    display: block;
    background: royalblue;
    color: white;
    font-size: large;
    padding: 10px;
    width: 100%;
    border: none;
    border-radius: 5px;

    :disabled {
      background: gray;
    }
  }

  .uploadcare--widget {
    width: 100%;

    button {
      &:hover {
        font-size: 18px;
      }
    }
  }
`;

export default adminCard;
