import styled from "styled-components";

import { colours } from "../../utils/colours";

const InputHolder = styled.div`
  input {
    padding: 10px 15px;
    line-height: 25px;
    max-width: 370px;
    width: 90%;
    border: none;
    border-bottom: 2px solid black;

    &:disabled {
      background-color: gray;
    }
  }
`;

export default InputHolder;
