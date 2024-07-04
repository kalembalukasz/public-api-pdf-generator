export type ImgSizes = 'small' | 'medium' | 'large';

export interface IAvatarProps {
  src: string;
  alt?: string;
  size?: ImgSizes;
  className?: string;
}
