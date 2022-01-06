import { Button, Container, Name, Range, WrapperButtons } from "./themeControl-style";


export function ThemeControl() { 
    

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
                type="range"
                min="1"
                max="3"
            />
        </Container>
    ) 
       
    
}