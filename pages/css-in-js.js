import styled from 'styled-components'

const Title = styled.h1`
    font-size: 50px;
    color:${({theme})=>theme.colors.primary};`

// ntar dibuka
const NormalText = styled.p`
    font-size: 20px;
    color: #eaaaf2;` 

function CSSJS() {
    return(
        <div>
            <Title>Styled-Components</Title>
            <NormalText>CSS kadang muncul kadang engga hehe</NormalText>
        </div>
        
        // <h2 style={{olor:'red'}}>CSS IN JS, HELLO WORLD!</h2>
    )
}

export default CSSJS