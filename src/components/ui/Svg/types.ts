import { ComponentPropsWithoutRef } from 'react';

export interface ISvgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  iconName?: TypeIconName;
  svgProps?: ComponentPropsWithoutRef<'svg'>;
}

// how can i make this by scripts?
export type TypeIconName = 'listIcon' | 'default';
