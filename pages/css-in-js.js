import styled from 'styled-components'
import Header from '../comps/header'

const Title = styled.h1`
    font-size: ${({theme})=>theme.fontSize.big};
    color:${({theme})=>theme.colors.primary};`

const NormalText = styled.p`
    font-size: 20px;
    color: #eaaaf2;` 

const MiniText = styled.p`
    font-size: ${({theme})=>theme.fontSize.small};
`

function CSSJS() {
    return(
        <>
            <Title>Styled-Components</Title>
            <NormalText>CSS kadang muncul kadang engga</NormalText>
            <MiniText>Hehe</MiniText>
        </>
        // <h2 style={{color:'red'}}>CSS IN JS, HELLO WORLD!</h2>
    )
}

export default CSSJS

// ntar dinyalain, ya.
CSSJS.getLayout = function PageLayout(page) {
    return (<>
      <Header/>
      {page}
      </>
    )
}