import { ThemeControl } from "../ThemeControl";
import { Container, Title } from "./header-style";


export function Header() {
    return (
        <Container>
            <Title>
                calc
            </Title>
            <ThemeControl/>      
        </Container>
    )
}
