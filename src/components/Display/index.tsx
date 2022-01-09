import { useEffect } from "react";
import { useDados } from "../../context/context";
import { Container, Equation } from "./display-style";


export function Display() {


   



    // @ts-ignore
    const { equation, setEquation } = useDados();

    useEffect(() => { 

    if (localStorage.getItem('historicEquation') !== null) {
        setEquation(localStorage.getItem('historicEquation'));
    }
    
  }, [])

    useEffect(() => { 
        const regex = /(\+|-|\.|x|\/){2}$/i;
        
        if (regex.test(equation)) { 
            setEquation(equation.slice(0, -1))
        }
        if (/^[\/x]/.test(equation)) { 
            setEquation('')
        }

        localStorage.setItem('historicEquation', equation.toString());

    }, [equation]);

    function handleInput(e: React.ChangeEvent<HTMLInputElement>) { 
        const regex = /^([0-9]|\+|\.|-|x|\/|\*)*$/

        if (regex.test(e.target.value)) { 
            setEquation(e.target.value)
        }
    }

    return (
        <Container>
            
            <Equation
                aria-label="input equation"
                value={equation}
                data-cy='display-input'
                type="text"
                onChange={handleInput}
                pattern="/[0-9]*/"
            />
        </Container>
    )
}