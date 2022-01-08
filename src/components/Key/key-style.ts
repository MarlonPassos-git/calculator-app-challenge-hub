import styled from 'styled-components'
import { progressiveClamp } from 'progressive-size'


interface ContainerProps { 
    size?: '1' | '2',
    color: 'equal' | 'wipers' | 'default'
}

export const Container = styled.button<ContainerProps>`
    grid-column: ${props => (props.size === '1' || props.size === undefined) ? 'span 1' : 'span 2'};
    
    width: 100%;
    padding-top: 3px;
    border-radius: ${progressiveClamp(5, 10)};
    
    text-transform: uppercase;
    text-align: center;
    font-size: ${(props) => { 
        if (props.color === 'equal' || props.color === 'wipers') {
            return 'var(--font-small)'
        }
        return 'var(--font-medium)'
    
    }};
    color: ${props =>  props.theme.colors.button.text[props.color] };
        
    background-color: ${props =>  props.theme.colors.button.background[props.color].normal };
    box-shadow: 
        0px -4px 0px 0px 
        ${props => props.theme.colors.button.background[props.color].shadow}
        inset
    ;

    &:hover, &:focus, &:focus-visible {
        background-color: ${props =>  props.theme.colors.button.background[props.color].hover };
    }
    
`