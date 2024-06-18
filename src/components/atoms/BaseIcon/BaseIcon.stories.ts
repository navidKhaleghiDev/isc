import type { Meta, StoryObj } from '@storybook/react';
import { BaseIcon } from './BaseIcon';

const meta = {
    title: 'atoms/IconsList',

    component: BaseIcon,

    parameters: {
      layout: 'centered',
    },

    tags: ['autodocs'],

  } satisfies Meta<typeof BaseIcon>;

  export default meta;
type Story = StoryObj<typeof meta>;

export const User:Story = {
    args : {
        color: 'teal',
        size: 'xxxl',
        hoverColor: 'default',
        className: '',
        icon: 'ph:user'
    }
}

export const RoundLogin:Story = {
    args : {
        color: 'teal',
        size: 'xs',
        hoverColor: 'default',
        className: '',
        icon: 'ic:round-login'
    }
}

export const UserPlus:Story = {
    args : {
        color: 'teal',
        size: 'md',
        hoverColor: 'default',
        className: '',
        icon: 'iconoir:user-plus'
    }
}

export const CalendarCheck:Story = {
    args : {
        color: 'teal',
        size: 'md',
        hoverColor: 'default',
        className: '',
        icon: 'ph:calendar-check'
    }
}

export const Cube:Story = {
    args : {
        color: 'teal',
        size: 'md',
        hoverColor: 'default',
        className: '',
        icon: 'ph:cube'
    }
}

export const Rows:Story = {
    args : {
        color: 'teal',
        size: 'md',
        hoverColor: 'default',
        className: '',
        icon: 'ph:rows'
    }
}

export const ArrowLeft:Story = {
    args : {
        color: 'teal',
        size: 'sm',
        hoverColor: 'default',
        className: '',
        icon: 'iconamoon:arrow-left-2-thin'
    }
}

export const GearSix:Story = {
    args : {
        color: 'teal',
        size: 'xs',
        hoverColor: 'default',
        className: '',
        icon: 'ph:gear-six'
    }
}

export const Monitor:Story = {
    args : {
        color: 'teal',
        size: 'xs',
        hoverColor: 'default',
        className: '',
        icon: 'ph:monitor'
    }
}

export const Devices:Story = {
    args : {
        color: 'teal',
        size: 'xs',
        hoverColor: 'default',
        className: '',
        icon: 'ph:devices'
    }
}

export const UsersThree:Story = {
    args : {
        color: 'teal',
        size: 'xs',
        hoverColor: 'default',
        className: '',
        icon: 'ph:users-three'
    }
}

export const LogoutSharp:Story = {
    args : {
        color: 'teal',
        size: 'lg',
        hoverColor: 'default',
        className: '',
        icon: 'material-symbols:logout-sharp'
    }
}

export const MoreVertical:Story = {
    args : {
        color: 'teal',
        size: 'xs',
        hoverColor: 'default',
        className: '',
        icon: 'jam:more-vertical'
    }
}

export const BaselinePlus:Story = {
    args : {
        color: 'teal',
        size: 'xs',
        hoverColor: 'default',
        className: '',
        icon: 'ic:baseline-plus'
    }
}

export const Bake:Story = {
    args : {
        color: 'teal',
        size: 'lg',
        hoverColor: 'default',
        className: '',
        icon: 'ep:back'
    }
}

export const TrashSimple:Story = {
    args : {
        color: 'teal',
        size: 'lg',
        hoverColor: 'default',
        className: '',
        icon: 'ph:trash-simple'
    }
}