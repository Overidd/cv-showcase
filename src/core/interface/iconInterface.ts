import type { SVGProps } from 'react';

export type IconComponent = (
  props: SVGProps<SVGSVGElement>
) => React.ReactNode;

export interface IconInterface {
  [key: string]: IconComponent;
}