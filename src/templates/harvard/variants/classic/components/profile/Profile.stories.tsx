import type { Meta, StoryObj } from '@storybook/react-vite';
import { profileDefinition } from './profile.definition';
import { withHarvardTheme } from '../../template/HarvardClassic.decorator';

const meta = {
  title: 'Templates/Harvard/Classic/Profile',

  component: profileDefinition.component,

  tags: ['autodocs'],

  parameters: {
    layout: 'centered',
  },

  decorators: [withHarvardTheme],
  excludeStories: ['baseArgsProfile']

} satisfies Meta<typeof profileDefinition.component>;

export default meta;

type Story = StoryObj<typeof meta>;

//* Configuración base
export const baseArgsProfile = {
  name: {
    value: 'Pepe Elías García Fernández',
    variant: profileDefinition.schema.name.variant.value,
    display: profileDefinition.schema.name.display
  },

  title: {
    value: 'Senior Frontend Software Engineer',
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
    ...baseArgsProfile,

    name: {
      ...baseArgsProfile.name,
      value: 'Pepe García',
    },

    title: {
      ...baseArgsProfile.title,
      value: 'Frontend Developer',
    },

    photo: {
      ...baseArgsProfile.photo,
      value: '/image/photoDefaul.svg',
    },

    contact: {
      ...baseArgsProfile.contact,
    },
  },
};

//* Name variants
export const NameVariantUppercase: Story = {
  name: 'Variante del nombre en mayúsculas',

  args: {
    ...baseArgsProfile,
    photo: {
      display: false,
      value: '',
      variant: 'square'
    },
    name: {
      ...baseArgsProfile.name,
      value: 'pepe garcía',
      variant: 'uppercase',
    },
  },
};

export const NameVariantCapitalize: Story = {
  name: 'Capitalizar variante de nombre',

  args: {
    ...baseArgsProfile,
    photo: {
      display: false,
      value: '',
      variant: 'square'
    },
    name: {
      ...baseArgsProfile.name,
      value: 'pepe garcía',
      variant: 'capitalize',
    },
  },
};

//* Photo variants
export const PhotoVariantSquare: Story = {
  name: 'Foto variante cuadrada',

  args: {
    ...baseArgsProfile,

    name: {
      ...baseArgsProfile.name,
      value: 'Pepe García',
    },

    photo: {
      ...baseArgsProfile.photo,
      variant: 'square',
    },

    title: {
      ...baseArgsProfile.title,
      value: 'Senior Frontend Software Engineer',
      display: false
    }
  },
};

export const PhotoVariantCircular: Story = {
  name: 'Variante fotográfica circular',

  args: {
    ...baseArgsProfile,

    name: {
      ...baseArgsProfile.name,
      value: 'Pepe García',
    },

    photo: {
      ...baseArgsProfile.photo,
      variant: 'circular',
    },

    title: {
      ...baseArgsProfile.title,
      value: 'Senior Frontend Software Engineer'
    }
  },
};


//* Display 
export const WithoutPhoto: Story = {
  name: 'Sin foto de perfil',

  args: {
    ...baseArgsProfile,

    photo: {
      ...baseArgsProfile.photo,
      value: '',
      display: false,
    },

    name: {
      ...baseArgsProfile.name,
      value: 'Pepe Elías García Fernández',
    },

    title: {
      ...baseArgsProfile.title,
      value: 'Senior Frontend Software Engineer',
    },
  },
};

//* Long content                                                              */
export const LongContent: Story = {
  name: 'Contenido extenso',

  args: {
    ...baseArgsProfile,

    name: {
      ...baseArgsProfile.name,
      value: 'Pepe Elías García Fernández',
    },

    title: {
      ...baseArgsProfile.title,
      value: 'Senior Frontend Software Engineer',
    },

    photo: {
      ...baseArgsProfile.photo,
      variant: 'square',
    },

    contact: {
      ...baseArgsProfile.contact,

      variant: 'list',
    },
  },
};