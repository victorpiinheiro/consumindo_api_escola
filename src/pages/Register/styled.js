import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  label {
    display: flex;
    flex-direction: column;
    font-size: 22px;
    margin-bottom: 20px;
  }

  input {
    height: 36px;
    border-radius: 4px;
    padding: 0 10px;
    border: 1px solid #ddd;
    font-size: 18px;

    &:focus {
      border: 1px solid ${colors.primaryColor};
    }
  }

  button {
    font-size: 20px;
    text-transform: uppercase;
  }
`;
