import { Container } from "./keyboard-style";
import { Key } from '../Key';

export function Keyboard() { 
    const keys = [
        '7', '8', '9', 'del',
        '4', '5', '6', '+',
        '1', '2', '3', '-',
        '.', '0', '/', 'x',
        'reset', '='
    ];

    return (
        <Container>
            {keys.map(key => <Key key={key}>{key}</Key>) }
        </Container>
    )
}   