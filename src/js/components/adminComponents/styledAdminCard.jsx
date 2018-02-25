import React from "react";
import styled from "styled-components";

const adminCard = styled.section`
  border-bottom: 5px solid royalblue;
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
  }
`;

export default adminCard;
