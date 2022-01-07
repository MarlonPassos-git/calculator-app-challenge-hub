import { Button, Container, Name, Range, WrapperButtons } from "./themeControl-style";

interface ThemeControlProps { 
    theme: number;
    setTheme: Function;
}


export function ThemeControl({ theme, setTheme }: ThemeControlProps) { 
    
    function handledRange(event: HTMLInputElement): void { 
        const themeNumber = +event.value;

        setTheme(themeNumber);
    }

    return (
        <Container>
            <Name>
                Theme
            </Name>
            <WrapperButtons>
                <Button>1</Button>
                <Button>2</Button>
                <Button>3</Button>
            </WrapperButtons>
            <Range
                onChange={(e) => handledRange(e.target)}
                type="range"
                min="1"
                max="3"
            />
        </Container>
    ) 
       
    
}