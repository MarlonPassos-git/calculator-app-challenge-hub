import { DefaultTheme  } from 'styled-components'

const theme3: DefaultTheme = {
    colors: {
        background: '#17062A',
        header: {
            text: '#FFE53D',
            button: {
                background: '#1E0936',
                element: '#00DED0',
                hover: '#93FFF8',
            },
        },
        display: {
            background: '#1E0936',
            text: '#FFE53D',
        },
        button: {
            ContainerBackground: '#1E0936',
            text: {
                default: '#FFE53D',
                equal: '#1A2327',
                wipers: '#FFFFFF',
            },
            background: {
                default: {
                    shadow: '#881C9E',
                    normal: '#331C4D',
                    hover: '#6C34AC',
                },
                equal: {
                    shadow: '#6CF9F1',
                    normal: '#00DED0',
                    hover: '#93FFF8',
                },
                wipers: {
                    shadow: '#BE15F4',
                    normal: '#56077C',
                    hover: '#8631AF'
                },
            }
        },
    }
}

export default theme3