import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import S from './NavList.styles';
import { navList } from './NavList.utils';
import { INavListProps } from './NavList.types';

const NavList: React.FC<INavListProps> = () => {
  const navListRef = useRef<HTMLElement>(null);

  return (
    <S.NavListWrapper ref={navListRef}>
      <div>
        {navList.map(({ navElements }, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <S.ListGroup key={index}>
            {navElements.map(({ path, title }) => (
              <S.NavElement to={path} as={NavLink}>
                <span>{title}</span>
              </S.NavElement>
            ))}
          </S.ListGroup>
        ))}
      </div>
    </S.NavListWrapper>
  );
};

export default NavList;
