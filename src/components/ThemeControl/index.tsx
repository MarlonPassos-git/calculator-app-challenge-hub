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
                <Button
                    data-cy="theme-button-1"
                    onClick={() => setTheme(1)}
                >
                    1
                </Button>
                <Button
                    data-cy="theme-button-2"

                    onClick={() => setTheme(2)}
                >
                    2
                </Button>
                <Button
                    data-cy="theme-button-3"
                    
                    onClick={() => setTheme(3)}
                >
                    3
                </Button>
            </WrapperButtons>
            
            <Range
                aria-label="change theme"
                data-cy="input-range"
                onChange={(e) => handledRange(e.target)}
                type="range"
                min="1"
                max="3"
                value={theme}
            />
        </Container>
    ) 
       
    
}