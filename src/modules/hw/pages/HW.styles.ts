import styled from 'styled-components/macro';
import AvatarComponent from 'components/avatar/Avatar.component';

const Avatar = styled(AvatarComponent)`
  border-color: ${({ theme }) => theme.color.success.dark};

  &__tabs {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    .inline-title();

    > div:last-child {
      margin-right: 0;
    }

    .tabs__item_selected {
      color: @tundora;
    }
  }

  &__tab {
    flex-grow: 1;
    display: flex;
  }
`;

export default { Avatar };
