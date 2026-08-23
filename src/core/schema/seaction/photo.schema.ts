
export interface PhotoConfigSchema {
  defaultValue: string;
  display: boolean;
  isChangeDisplay: boolean;

  variant: {
    defaultValue: string;
    options: readonly string[];
  };
};