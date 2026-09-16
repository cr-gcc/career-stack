export const es = {
    common: {
        save: 'Guardar',
        cancel: 'Cancelar',
        continue: 'Continuar',
        close: 'Cerrar',
    },

    auth: {
        info: {
            title: "Construye tu historia profesional",
            item1: "Diseño.",
            item2: "Contenido.",
            item3: "Oportunidades.",
            subtitle1: "Un CV profecional, para el siguiente paso en tu carrera.",
            subtitle2: "\"Recuerda que un buen cv abre puertas, tu experiencia las mantiene\""
        },
        login: {
            title: 'Bienvenido de nuevo',
            subtitle: 'Ingrese sus credenciales para iniciar sesión',
            email: 'Correo electrónico',
            password: 'Contraseña',
            remember: 'Mantener sesión iniciada',
            forgotPassword: '¿Olvidaste tu contraseña?',
            submit: 'Iniciar sesión',
            initTerms: 'Al continuar, aceptas los',
            termsAndConditions: 'Términos de Servicio',
            and: 'y la',
            privacyPolicy: 'Política de Privacidad',
        },
    },

    sidebar: {
        home: 'Inicio',
        myCVs: 'Mis CVs',
        templates: 'Plantillas',
        editor: 'Editor',
        jobOffers: 'Empleos',
    },

    dropdownMenuUser: {
        profile: 'Mi perfil',
        logout: 'Cerrar sesión',
    },

    home: {
        title: 'Inicio',
        subtitle: 'Datos generales del sistema, para la mejor toma de decisiones.',
    },

    cvs: {
        title: 'Mis CVs',
        subtitle: 'Historico de CVs creados disponibles.',
    },

    templates: {
        title: 'Plantillas',
        subtitle: 'Selecciona la plantilla de CV que mejor se adapte a tu perfil.',
    },

    editor: {
        title: 'Editor',
        sections: {
            generalInfo: 'Información general',
            profesionalProfile: 'Perfil profesional',
            workExperiences: 'Experiencia laboral',
            education: 'Formación académica',
            skills: 'Habilidades',
            repositories: 'Repositorios',
            portfolio: 'Portafolio',
            extraInfo: 'Información adicional',
        },

        fields: {
            name: 'Nombre',
            rol: 'Rol',
            email: 'Correo electrónico',
            address: 'Dirección',
            phone: 'Teléfono',
            summary: 'Resumen',
            companyName: 'Nombre de la empresa',
            dateRange: 'Rango de fechas',
            description: 'Descripción',
            education: 'Educación',
            area: 'Área. Eje: Frontend',
            tecnologies: 'Tecnologias. Eje: React, Angular, Vue',

            repositoryLink: 'Enlace al repositorio',
            portfolioLink: 'Enlace al portafolio',
            extraInfo: 'Información adicional',
        },
        modal: {
            title: 'Vista previa',
            fonts: 'Fuentes',
            colors: 'Colores',
            template: 'Plantilla',
            intOptionFonts: 'Selecciona una fuente',
            intOptionColors: 'Selecciona un color',
            intOptionTemplate: 'Selecciona una plantilla',
            defaultMessage: 'Por favor selecciona una plantilla para inciar con la creación/edición de tu CV.',
        }
    },

    jobOffers: {
        title: 'Ofertas de Empleo',
        subtitle: 'Ofertas de empleo disponibles, en las cuales podrás postular.',
    }
} as const