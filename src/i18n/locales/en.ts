export const en = {
    common: {
        save: 'Save',
        cancel: 'Cancel',
        continue: 'Continue',
        close: 'Close',
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

    sidebar: {
        home: 'Home',
        myCVs: 'My CVs',
        templates: 'Templates',
        editor: 'Editor',
        jobOffers: 'Job Offers',
    },

    dropdownMenuUser: {
        profile: 'My profile',
        logout: 'Logout',
    },

    home: {
        title: 'Home',
        subtitle: 'General system information, for better decision making.',
    },

    cvs: {
        title: 'My CVs',
        subtitle: 'History of available CVs created.',
    },

    templates: {
        title: 'Templates',
        subtitle: 'Select the CV template that best suits your profile.',
    },

    editor: {
        title: 'Editor',
        sections: {
            generalInfo: 'General information',
            profesionalProfile: 'Professional profile',
            workExperiences: 'Work experiences',
            education: 'Education',
            skills: 'Skills',
            repositories: 'Repositories',
            portfolio: 'Portfolio',
            extraInfo: 'Extra information',
        },

        fields: {
            name: 'Name',
            rol: 'Rol',
            email: 'Email',
            address: 'Address',
            phone: 'Phone',
            summary: 'Summary',
            companyName: 'Company name',
            dateRange: 'Date range',
            description: 'Description',
            education: 'Education',
            area: 'Area. Example: Frontend',
            tecnologies: 'Tecnologies. Example: React, Angular, Vue',
            repositoryLink: 'Repository link',
            portfolioLink: 'Portfolio link',
            extraInfo: 'Extra information',
        },

        modal: {
            title: 'Preview',
            fonts: 'Fonts',
            colors: 'Colors',
            template: 'Template',
            intOptionFonts: 'Select a font',
            intOptionColors: 'Select a color',
            intOptionTemplate: 'Select a template',
            defaultMessage: 'Please select a template to start creating/editing your CV.',
        }
    },

    jobOffers: {
        title: 'Job Offers',
        subtitle: 'Available job offers, in which you can apply.',
    },
} as const