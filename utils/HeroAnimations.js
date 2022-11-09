let baseLoadingTime = 800;

export const animations = {
    clip: {
        from: {
            opacity: 0,
            'clip-path': 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)',
        },
        to: {
            opacity: 1,
            'clip-path': 'polygon(0 100%, 100% 100%, 100% 0, 0 0)',
        },
        delay: baseLoadingTime,
        config: {
            duration: 1000,
        },
    },

    up: {
        from: {
            opacity: 0,
            y: 150,
        },
        to: {
            opacity: 1,
            y: 0,
        },
        delay: baseLoadingTime,
    },

    midLeft: {
        from: { opacity: 0, x: -100 },
        to: { opacity: 1, x: 0 },
        delay: baseLoadingTime + 100,
    },
    midRight: {
        from: { opacity: 0, x: 100 },
        to: { opacity: 1, x: 0 },
        delay: baseLoadingTime + 100,
    },

    sideLeft: {
        from: { opacity: 0, y: 200 },
        to: { opacity: 1, y: 0 },
        delay: baseLoadingTime + 200,
    },
    sideRight: {
        from: { opacity: 0, y: -200 },
        to: { opacity: 1, y: 0 },
        delay: baseLoadingTime + 200,
    },

    inOut: {
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: baseLoadingTime + 230,
    },

    dashLeft: {
        from: {
            opacity: 0,
            'clip-path': 'polygon(0% 0%, 0% 33%, 0% 62%, 0% 100%)',
        },
        to: {
            opacity: 1,
            'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        },
        delay: baseLoadingTime,
        config: {
            duration: 1000,
        },
    },

    dashRight: {
        from: {
            opacity: 0,
            'clip-path': 'polygon(100% 30%, 100% 0%, 100% 100%, 100% 64%)',
        },
        to: {
            opacity: 1,
            'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        },
        delay: baseLoadingTime,
        config: {
            duration: 1000,
        },
    },
};
