import React from 'react'

import {Container, Image, Label} from './style'
import ImageLoader from '../../assets/image/loader.gif'

export const Loader = () => {
  return (
    <Container>
      <Image src={ImageLoader} alt="loader"/>
      <Label>Carregando...</Label>
    </Container>
  )
}