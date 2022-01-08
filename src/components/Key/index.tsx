import { useDados } from "../../context/context";
import { Container } from "./key-style";

interface KeyProps { 
    children: string;
}

export function Key({ children }: KeyProps) { 
    
    // @ts-ignore
    const { equation, setEquation } = useDados();

    const differentStyles = {
        'del': {
            size: '1',
            color: 'wipers',
            calback: handleKeyDelete,
        },
        '=': {
            size: '2',
            color: 'equal',
            calback: handleKeyEqual,
        },
        'reset': {
            size: '2',
            color: 'wipers',
            calback: handleKeyReset,
        },
    }

    function handleKeyAdd(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) { 
    
        const valor = e.currentTarget.innerHTML
        setEquation(equation + valor)
        
    }

    function handleKeyEqual() {
        const equationValid = equation.replace(/x/gi, '*');

        setEquation(String(eval(equationValid)))
    }

    function handleKeyReset() { 
        setEquation('')
    }

    function handleKeyDelete(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) { 
        setEquation(equation.slice(0, -1))
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
                onClick={ 
                    //@ts-ignore
                    differentStyles[children].calback
                }
            >
                { children }
            </Container>
        )
    }    

    return (
        <Container
            onClick={handleKeyAdd}
            color={'default'}
        >
                { children }
        </Container>
    )
}
