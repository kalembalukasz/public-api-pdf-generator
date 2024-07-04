import S from './Avatar.styles';
import { IAvatarProps } from './Avatar.types';

const Avatar: React.FC<IAvatarProps> = ({ src, alt, size = 'large', className }) => (
  <S.Avatar src={src} alt={alt} size={size} className={className} />
);

export default Avatar;
