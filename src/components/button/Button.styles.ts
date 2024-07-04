import styled, { css } from 'styled-components/macro';
import { IButtonProps } from './Button.types';

export const Button = styled.button<Partial<IButtonProps>>`
  border-radius: 4px;
  color: ${({ theme }) => theme.color.light};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 32px 5px 16px;
  border: 2px solid ${({ theme, isDanger }) => (isDanger ? theme.color.error.dark : theme.color.primary)};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  background: ${({ theme, isDanger }) => (isDanger ? theme.color.error.dark : theme.color.primary)};
  box-shadow: ${({ theme }) => theme.shadow.around};

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.6;
      cursor: default;
    `}

  svg {
    font-size: ${({ theme }) => theme.font.size.l};
    margin-right: 8px;
  }

  ${({ theme }) => theme.media.md} {
    padding: 10px 32px 10px 16px;
  }
`;

export default {
  Button,
};
