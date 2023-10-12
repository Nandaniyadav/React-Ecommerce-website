import React from 'react'
import { styled } from 'styled-components'
import Button from '../Styles/Button'
import { NavLink } from 'react-router-dom'

const Errorpage = () => {
  return (
    <Wrapper>
      <div className='container'>
        <h2>404</h2>
        <h3>UH OH! You're lost.</h3>
        <p>The Page you are looking for not exits</p>
        <NavLink to="/">
          <Button>Go Back Home </Button>
        </NavLink>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
.container {
  padding:9rem 0;
  text-align:center;
}
h2{
  font-size:8rem;
}
h3{
  font-size:5rem;
}
p{
  margin:2rem 0;
}
`

export default Errorpage
