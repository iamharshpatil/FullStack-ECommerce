export const registerFormControls = [
    {
        name: 'username',
        type: 'text',
        label: 'Username',
        placeholder: 'Enter your username',
        required: true,
        componetType: 'input',
        validation: {
            minLength: 3,
            maxLength: 20,
            pattern: /^[a-zA-Z0-9_]+$/,
            errorMessage: 'Username must be 3-20 characters long and can only contain letters, numbers, and underscores.'
        }
    },
    {
        name: 'email',
        type: 'email',
        label: 'Email',
        placeholder: 'Enter your email address',
        componetType: 'input',
        required: true,
        validation: {
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            errorMessage: 'Please enter a valid email address.'
        }
    },
    {
        name: 'password',
        type: 'password',
        label: 'Password',
        componetType: 'input',
        placeholder: 'Enter your password',
        required: true,
        validation: {
            minLength: 8,
            errorMessage: 'Password must be at least 8 characters long.'
        }
    }
]
export const loginFormControls = [
    {
        name: 'email',
        type: 'email',
        label: 'Email',
        placeholder: 'Enter your email address',
        componetType: 'input',
        required: true,
        validation: {
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            errorMessage: 'Please enter a valid email address.'
        }
    },
    {
        name: 'password',
        type: 'password',
        label: 'Password',
        componetType: 'input',
        placeholder: 'Enter your password',
        required: true,
        validation: {
            minLength: 8,
            errorMessage: 'Password must be at least 8 characters long.'
        }
    }
]