import 'styled-components';

declare module 'styled-components' { 
    export interface DefaultTheme {
        colors: {
            background: string,
            header: {
                text: string,
                button: {
                    background: string,
                    element: string,
                    hover: string,
                },
            },
            display: { 
                background: string,
                text: string,
            },
            button: {
                ContainerBackground: string,
                text: {
                    default: string,
                    equal: string,
                    wipers: string,
                },
                background: {
                    default: {
                        normal: string,
                        hover: string,
                    },
                    equal: {
                        normal: string,
                        hover: string,
                    },
                    wipers: {
                        normal: string,
                        hover: string
                    },
                }
            },
    }
  }
}