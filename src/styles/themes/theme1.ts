import { DefaultTheme  } from 'styled-components'
 
const theme1: DefaultTheme = {
    colors: {
        background: '#3A4663',
        header: {
            text: '#FFFFFF',
            button: {
                background: '#242D44',
                element: '#D03F2F',
                hover: '#F96B5B',
            },
        },
        display: {
            background: '#181F33',
            text: '#FFFFFF',
        },
        button: {
            ContainerBackground: '#242D44',
            text: {
                default: '#434A59',
                equal: '#FFFFFF',
                wipers: '#FFFFFF',
            },
            background: {
                default: {
                    shadow: '#B3A497',
                    normal: '#EAE3DC',
                    hover: '#FFFFFF',
                },
                equal: {
                    shadow: '#93261A',
                    normal: '#D03F2F',
                    hover: '#F96B5B',
                },
                wipers: {
                    shadow: '#414E73',
                    normal: '#647198',
                    hover: '#A2B2E1'
                },
            }
        },
    }
}

export default theme1