import React from 'react'

import { Container, Space, Text80, Text40, Text22, TextHotOrCold, TextValue, Button } from './style'

export default ({ data, setRefresh }) => {
  return (
    <Container>


      <div>
        <Text80>Olá você que esta em:</Text80>
        <Text40>{data?.name} - {data?.sys?.country}</Text40>

        <Space top={50} />

        <Text22>
          A temperatura atual ai é
          <TextHotOrCold value={data?.main?.temp} > {data?.main?.temp}°C </TextHotOrCold>
          e a sensação termica é de
          <TextHotOrCold value={data?.main?.temp}> {data?.main?.feels_like}°C </TextHotOrCold>
        </Text22>

        <Space top={20} />

        <Text22>
          Humidade do ar esta em 
          <TextValue > {data?.main?.humidity}% </TextValue>
        </Text22>

        <Space top={20} />

        <Button
          onClick={() => {
            setRefresh()
          }}
        >
          Atualizar
        </Button>
      </div>
    </Container>
  )
}