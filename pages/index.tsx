import type { NextPage } from 'next'
import Head from 'next/head'
import styled from '@emotion/styled'


const Main = styled.main`
display: flex;
margin-top: 20%;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 20px;
width: 100%;
height: 50vh;
`

const Title = styled.h1`
margin-bottom: 5px;
`
const Subtitle = styled.h2`
color: pink; 
font-size: 20px; 
font-style: italic;
`

const Group = styled.div`
border-radius: 5px;
color: black;
border:solid 3px black;
width: 250px;
> h3 
{ 
  text-align:  center;
}
`
const Home = () => {

  return (

    <Main>
      <Title>
        <h1>Executando React com Next.JS</h1>
      </Title>
      <Subtitle>
        <h2>Site criado em TypeScript publicado na Vercel</h2>
      </Subtitle>
      <Group>
        <h3> Grupo 5 </h3>
        <ul>
          <li>Flávia Sorati</li>
          <li>Isadora Araújo</li>
          <li>Juliana Cruz</li>
          <li>Laura Montenegro</li>
          <li>Priscila Andrade</li>
          <li>Tatiane Alvarenga</li>

        </ul>
      </Group>
    </Main>
  )
}


export default Home