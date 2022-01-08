import { useEffect, useState } from "react";
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
        const regex = /(\+|-|\.|x|\/){2}/i;
        
        if (regex.test(equation)) { 
            setEquation(equation.slice(0, -1))
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
                value={equation}
                type="text"
                onChange={handleInput}
                pattern="/[0-9]*/"
            />
        </Container>
    )
}