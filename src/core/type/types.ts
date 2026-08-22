export type CSSVariables = React.CSSProperties & {
  [key: `--${string}`]: string | number;
};