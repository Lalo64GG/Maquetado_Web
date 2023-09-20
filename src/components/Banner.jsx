import React from 'react'
import styled from '@emotion/styled'

import imagen from '../img/x.avif'
import Formulario from './Formulario'
import TextContainer from './TextContainer'

const Font = styled.div `
    padding: 3rem;
    height: 500px;
    width: 100%;
    background-image: url(${imagen});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    display: flex;
    justify-content: space-between;

    @media (max-width: 480px) {
        height: 300px;
    }
`

function Banner() {
  return (
    <Font className=' mt-12'>
        <TextContainer
          children = { "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusamus itaque qui reprehenderit molestiae, nihil eum tenetur numquam, necessitatibus harum maxime? Exercitationem placeat laborum accusamus non aperiam eveniet delectus. A dolor adipisci iste iure veritatis cumque perspiciatis, odio voluptates nisi optio eos dignissimos earum maxime in ratione. Voluptates earum consequatur dolor eos! Vel quisquam animi sit id, delectus praesentium esse adipisci eius quasi assumenda odio voluptate nostrum non et magni harum excepturi velit? " }
        />
        <Formulario 
        />

    </Font>
  )
}

export default Banner