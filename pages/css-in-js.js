import styled from 'styled-components'

const Title = styled.h1`
    font-size: 50px;
    color:${({theme})=>theme.colors.primary};`

function CSSJS() {
    return(
        <Title>Styled-Components</Title>
        // <h2 style={{olor:'red'}}>CSS IN JS, HELLO WORLD!</h2>
    )
}

export default CSSJS