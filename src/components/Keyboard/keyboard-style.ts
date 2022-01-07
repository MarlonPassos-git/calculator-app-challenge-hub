import styled from 'styled-components'
import { Rem, progressiveClamp } from 'progressive-size'

export const Container = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
    column-gap:  ${progressiveClamp(13, 25)};
    row-gap:  ${progressiveClamp(13, 24)};


    width: 100%;
    height: ${progressiveClamp(420, 480)};
    padding: ${progressiveClamp(24, 32)};
    border-radius: ${Rem(10)};

    background-color: ${props => props.theme.colors.button.ContainerBackground};

`