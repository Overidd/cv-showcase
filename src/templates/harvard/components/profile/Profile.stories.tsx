import type { Meta, StoryObj } from '@storybook/react-vite';
import { Profile } from './Profile';
import { withHarvardTheme } from '../../variants/classic';
import { profileConfig, type ProfileProps } from './profile.config';

const meta = {
  title: 'Templates/Harvard/Profile',

  component: Profile,

  tags: ['autodocs'],

  parameters: {
    layout: 'centered',
  },

  decorators: [withHarvardTheme],
} satisfies Meta<typeof Profile>;

export default meta;

type Story = StoryObj<typeof meta>;

//* Configuración base
const baseArgs: ProfileProps = {
  name: {
    value: profileConfig.props.name.value,
    variant: profileConfig.props.name.variant.value,
    display: profileConfig.props.name.display
  },

  title: {
    value: profileConfig.props.title.value,
    display: profileConfig.props.title.display
  },

  contact: {
    variant: profileConfig.props.contact.variant?.value,

    display: profileConfig.props.contact.display,

    children: profileConfig.props.contact.children,
  },

  photo: {
    value: profileConfig.props.photo.value,
    variant: profileConfig.props.photo.variant.value,
    display: profileConfig.props.photo.display,
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