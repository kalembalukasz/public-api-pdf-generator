import styled from 'styled-components/macro';
import AvatarComponent from 'components/avatar/Avatar.component';

const Avatar = styled(AvatarComponent)`
  border-color: ${({ theme }) => theme.color.success.dark};
`;

export default { Avatar };
