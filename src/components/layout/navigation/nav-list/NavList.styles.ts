import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';

const NAVBAR_WIDTH = '100px';

const NavListWrapper = styled.nav`
  transition: transform 0.2s ease;
  height: 100vh;
  min-width: ${NAVBAR_WIDTH};
  z-index: ${({ theme }) => theme.zIndex.positive3};
  background-color: ${({ theme }) => theme.color.secondary};
  display: block;
  position: static;
  transform: translate(0);
  padding: 0;

  > div {
    padding: 24px 0;
    color: ${({ theme }) => theme.color.light};
    height: 100%;
    overflow: auto;
  }
`;

const LogoDesktopWrapper = styled.div`
  display: none;

  ${({ theme }) => theme.media.xl} {
    display: block;
    position: sticky;
    top: 0;
    z-index: ${({ theme }) => theme.zIndex.positive3};
  }
`;

const ListGroup = styled.div`
  margin-bottom: 26px;

  h3 {
    font-size: ${({ theme }) => theme.font.size.xxs};
    font-weight: ${({ theme }) => theme.font.weight.medium};
    color: ${({ theme }) => theme.color.background};
    margin-bottom: 10px;
    padding: 0 24px;
    opacity: 0.75;
    width: 117px;
  }

  > svg {
    width: 20px;
    height: 20px;
  }

  :last-child {
    margin-bottom: 0;
  }
`;

const NavElement = styled(NavLink)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.light};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  text-decoration: none;
  padding: 12px 24px;
  position: relative;
  height: 42px;
  margin-bottom: 2px;
  text-align: center;

  svg {
    width: 20px;
    height: 20px;
  }

  :hover {
    background-color: ${({ theme }) => theme.color.hover};
  }
`;

export default {
  NavListWrapper,
  LogoDesktopWrapper,
  ListGroup,
  NavElement,
};
