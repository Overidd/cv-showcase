import type {
  Meta,
  StoryObj
} from '@storybook/react-vite';

import {
  withHarvardTheme
} from '../../variants/classic';

import {
  profileDefinition,
  type ProfileProps
} from '.';

const meta = {
  title: 'Templates/Harvard/Classic/Profile',

  component: profileDefinition.component,

  tags: ['autodocs'],

  parameters: {
    layout: 'centered',
  },

  decorators: [withHarvardTheme],

} satisfies Meta<typeof profileDefinition.component>;

export default meta;

type Story = StoryObj<typeof meta>;

//* Configuración base
const baseArgs: ProfileProps = {
  name: {
    value: '',
    variant: profileDefinition.schema.name.variant.value,
    display: profileDefinition.schema.name.display
  },

  title: {
    value: '',
    display: profileDefinition.schema.title.display
  },

  contact: {
    variant: profileDefinition.schema.contact.variant?.value,

    display: profileDefinition.schema.contact.display,

    children: profileDefinition.schema.contact.children,
  },

  photo: {
    value: profileDefinition.schema.photo.value,
    variant: profileDefinition.schema.photo.variant.value,
    display: profileDefinition.schema.photo.display,
  },
};

//* Default
export const Default: Story = {
  args: {
    ...baseArgs,

    name: {
      ...baseArgs.name,
      value: 'Pepe García',
    },

    title: {
      ...baseArgs.title,
      value: 'Frontend Developer',
    },

    photo: {
      ...baseArgs.photo,
      value: '/image/photoDefaul.svg',
    },

    contact: {
      ...baseArgs.contact,
    },
  },
};

//* Name variants
export const NameVariantUppercase: Story = {
  name: 'Variante del nombre en mayúsculas',

  args: {
    ...baseArgs,
    photo: {
      display: false,
      value: '',
      variant: 'square'
    },
    name: {
      ...baseArgs.name,
      value: 'pepe garcía',
      variant: 'uppercase',
    },
  },
};

export const NameVariantCapitalize: Story = {
  name: 'Capitalizar variante de nombre',

  args: {
    ...baseArgs,
    photo: {
      display: false,
      value: '',
      variant: 'square'
    },
    name: {
      ...baseArgs.name,
      value: 'pepe garcía',
      variant: 'capitalize',
    },
  },
};

//* Photo variants
export const PhotoVariantSquare: Story = {
  name: 'Foto variante cuadrada',

  args: {
    ...baseArgs,

    name: {
      ...baseArgs.name,
      value: 'Pepe García',
    },

    photo: {
      ...baseArgs.photo,
      variant: 'square',
    },

    title: {
      ...baseArgs.title,
      value: 'Senior Frontend Software Engineer',
      display: false
    }
  },
};

export const PhotoVariantCircular: Story = {
  name: 'Variante fotográfica circular',

  args: {
    ...baseArgs,

    name: {
      ...baseArgs.name,
      value: 'Pepe García',
    },

    photo: {
      ...baseArgs.photo,
      variant: 'circular',
    },

    title: {
      ...baseArgs.title,
      value: 'Senior Frontend Software Engineer'
    }
  },
};


//* Display 
export const WithoutPhoto: Story = {
  name: 'Sin foto de perfil',

  args: {
    ...baseArgs,

    photo: {
      ...baseArgs.photo,
      value: '',
      display: false,
    },

    name: {
      ...baseArgs.name,
      value: 'Pepe Elías García Fernández',
    },

    title: {
      ...baseArgs.title,
      value: 'Senior Frontend Software Engineer',
    },
  },
};

//* Long content                                                              */
export const LongContent: Story = {
  name: 'Contenido extenso',

  args: {
    ...baseArgs,

    name: {
      ...baseArgs.name,
      value: 'Pepe Elías García Fernández',
    },

    title: {
      ...baseArgs.title,
      value: 'Senior Frontend Software Engineer',
    },

    photo: {
      ...baseArgs.photo,
      variant: 'square',
    },

    contact: {
      ...baseArgs.contact,

      variant: 'list',
    },
  },
};