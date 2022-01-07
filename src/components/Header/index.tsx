import { ThemeControl } from "../ThemeControl";
import { Container, Title } from "./header-style";

interface HeaderProps { 
    theme: number;
    setTheme: Function;
}

export function Header({ theme, setTheme }: HeaderProps) {
    return (
        <Container>
            <Title>
                calc
            </Title>
            <ThemeControl theme={theme} setTheme={setTheme}/>      
        </Container>
    )
}
