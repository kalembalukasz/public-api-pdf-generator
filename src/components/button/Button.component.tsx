import { IButtonProps } from './Button.types';
import S from './Button.styles';

const Button: React.FC<IButtonProps> = ({
  captionId,
  type = 'button',
  icon,
  onClick,
  className,
  isDanger,
  disabled,
}) => (
  <S.Button onClick={onClick} isDanger={isDanger} type={type} className={className} disabled={disabled}>
    {icon}

    <span>{captionId}</span>
  </S.Button>
);

export default Button;
