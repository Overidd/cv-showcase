
export interface PhotoConfigProps {
  defaultValue: string;
  display: boolean;
  isChangeDisplay: boolean;

  variant: {
    defaultValue: string;
    options: readonly string[];
  };
};