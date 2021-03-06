import { css } from 'emotion';

const button = () => css`
  cursor: pointer;
  background-color:#2d1e65;
  color: #b6b5dc;
  padding: 7px 10px;
  border-radius: 4px;  
  border: none;
  outline: none;
  
  &:hover {
    background-color: #2b1857;
  }

  &:active {
    background-color: #000;
    color: #fff;
  }
`;

export default ({
  button,
});
