import type { SVGProps } from 'react';

interface ResumeIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const ResumeIcon = ({
  size = 12,
  color = 'rgb(185, 185, 185)',
  children,
  ...props
}: ResumeIconProps) => (
  <svg
    {...props}
    viewBox='0 0 512 512'
    width={size}
    height={size}
    fill='currentColor'
    shapeRendering='geometricPrecision'
    aria-hidden='true'
    focusable='false'
    style={{
      fontSize: size,
      color,
      ...props.style,
    }}
  >
    <g transform='translate(0 512) scale(1 -1)'>
      {children}
    </g>
  </svg>
);