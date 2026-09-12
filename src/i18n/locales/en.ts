import { init } from "i18next";

export const en = {
    common: {
        save: 'Save',
        cancel: 'Cancel',
        continue: 'Continue',
    },

    auth: {
        info: {
            title: "Build your professional story",
            item1: "Design.",
            item2: "Content.",
            item3: "Opportunities.",
            subtitle1: "A professional CV for the next step in your career.",
            subtitle2: "Remember that a good CV opens doors, your experience keeps them open"
        },
        login: {
            title: 'Welcome back',
            subtitle: 'Sign in to continue',
            email: 'Email',
            password: 'Password',
            remember: 'Keep me signed in',
            forgotPassword: 'Forgot your password?',
            submit: 'Sign in',
            initTerms: 'By continuing, you agree to our',
            termsAndConditions: 'Terms of Service',
            and: 'and',
            privacyPolicy: 'Privacy Policy',
        },
    },
} as const