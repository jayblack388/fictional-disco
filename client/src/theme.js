const sizes = {
    desktopMin: 960, // desktop start
    desktopMax: 1200, // large monitors, not really "max"
    tabletMin: 768, // tablet start
    tabletMax: 959, // tablet end
    mobileMax: 959, // all mobile, including tablet
};

const breakpoints = {
    mobile: `@media screen and (max-width: ${sizes.mobileMax}px)`,
    mobileOnly: `@media screen and (max-width: ${sizes.tabletMin}px)`,
    tablet: `@media screen and (min-width: ${sizes.tabletMin}px)`,
    tabletOnly: `@media screen and (min-width: ${sizes.tabletMin}px) and (max-width: ${sizes.tabletMax}px)`,
    desktop: `@media screen and (min-width: ${sizes.desktopMin}px)`,
    desktopSmall: `@media screen and (min-width: ${sizes.desktopMin}px) and (max-width: ${sizes.desktopMax}px)`,
    desktopLarge: `@media screen and (min-width: ${sizes.desktopMax}px)`,
};

if (!window.theme) {
    window.theme = {
        colors: {
            primary: '#19334b',
            secondary: '#2488ab',
            border: '#ebebeb',
            success: '#accdc5',
            danger: '#dc3545',
            warning: '#f3993f',
            info: '#17a2b8',
            dark: '#1b374f',
            light: '#f3f9fa',
            lightSubtext: '#5d7081',
            muted: '#eae9e9',
            white: '#fff',
            black: 'rgb( 0, 0, 0)',
            transparent: 'transparent',
            link: '#2488ab',
            grayBorderLight: '#f2f2f2',
            blueGray: '#456888',
            disabled: { border: '#5d7081', background: '#e9ecef' },
        },
        layout: { spacingInterval: '8' },
        icon: { family: 'icomoon', prefix: 'icon-' },
        font: {
            familyHeading: 'Montserrat',
            familyBody: 'Helvetica Neue, Helvetica, Arial, sans-serif',
            style: 'sans-serif',
            sizeBase: '1',
            sizeUnit: 'rem',
            colorBody: '#1b374f',
            weights: {
                thin: '100',
                extraLight: '200',
                light: '300',
                normal: '400',
                medium: '500',
                semiBold: '600',
                bold: '700',
                extraBold: '800',
                black: '900',
            },
        },
    };
}

window.theme.breakpoints = breakpoints;

export default window.theme;