import styled from 'styled-components';

import { colours } from '../../utils/colours';

const Button = styled.button`
  padding: 10px 15px;
  margin-right: 10px;
  line-height: 25px;
  background-color: ${colours.indigo};
  color: white;
  border: none;

  &:hover {
    filter: saturate(2);
  }

  a {
    color: currentColor;
    text-decoration: none;
  }
`;

export default Button;
