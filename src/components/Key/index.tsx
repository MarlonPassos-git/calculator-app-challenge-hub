import { Container } from "./key-style";

interface KeyProps { 
    children: string;
}

export function Key({children}: KeyProps) { 

    const differentStyles = {
        'del': {
            size: '1',
            color: 'wipers'
        },
        '=': {
            size: '2',
            color: 'equal'
        },
        'reset': {
            size: '2',
            color: 'wipers'
        },
    }

    if (differentStyles.hasOwnProperty(children)) {  
        return (
            <Container
                size={
                    //@ts-ignore    
                    differentStyles[children].size
                }
                color={ 
                    //@ts-ignore
                    differentStyles[children].color
                }
            >
                { children }
            </Container>
        )
    }    

    return (
        <Container
            color={'default'}
        >
                { children }
        </Container>
    )
}