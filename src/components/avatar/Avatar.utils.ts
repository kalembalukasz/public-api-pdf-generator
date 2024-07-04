import { ImgSizes } from './Avatar.types';

export const setSize = (size?: ImgSizes): string => {
  switch (size) {
    case 'large':
      return '62px';

    case 'medium':
      return '42px';

    case 'small':
      return '30px';

    default:
      return '42px';
  }
};
