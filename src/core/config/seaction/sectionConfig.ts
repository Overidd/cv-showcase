import type React from 'react';

import type {
  ProfilePropsConfig,
} from './profilePropsConfig';

export interface SectionConfigMap {
  sectionProfile: {
    config: ProfilePropsConfig;
  };
}

export type SectionKey = keyof SectionConfigMap;


export type SectionConfig<
  K extends SectionKey = SectionKey,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TProps = any,
> = {
  [P in K]: {
    key: P;

    name: string;

    component: React.ComponentType<TProps>;

    interconnections: SectionKey[];

    config: {
      isDuplicate: boolean;
      isDragAndDrop: boolean;
      isEdit: boolean;
      isDelete: boolean;
    };

    props: SectionConfigMap[P]['config'];
  };
}[K];