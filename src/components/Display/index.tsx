import { useState } from "react";
import { useDados } from "../../context/context";
import { Container, Equation } from "./display-style";

export function Display() {
    // @ts-ignore
    const { equation, setEquation } = useDados();

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