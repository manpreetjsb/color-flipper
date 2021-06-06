import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import { ColorBox, MainGrid } from './ColorComp.styles'
import Button from '@material-ui/core/Button'

interface IColorList {
  id: number
  color: string
}
const colorList = [
  { id: 1, color: 'IndianRed' },
  { id: 2, color: 'LightCoral' },
  { id: 3, color: 'Salmon' },
  { id: 4, color: 'DarkSalmon' },
  { id: 5, color: 'LightSalmon' },
  { id: 6, color: 'Crimson' },
  { id: 7, color: 'DarkRed' },
  { id: 8, color: 'Red' },
  { id: 9, color: 'FireBrick' },
  { id: 10, color: 'DarkRed' },
]

const generateRandomColor = () => {
  const min = 1
  const max = 10
  return Math.floor(min + Math.random() * (max - min))
}

const ColorComp: React.FC = () => {
  const [Color, setColor] = useState<IColorList>(
    colorList[generateRandomColor()]
  )

  const changeColor = () => {
    setColor(colorList[generateRandomColor()])
  }

  return (
    <ColorBox
      display='flex'
      justifyContent='center'
      alignItems='center'
      props={Color.color}
    >
      <Grid container xs={4} item justify='center'>
        <Box>
          <MainGrid container spacing={2}>
            <Grid item xs={8}>
              Background Color : <span data-testid='Cname'>{Color.color}</span>
            </Grid>
            <MainGrid item xs={8}>
              <Button
                variant='contained'
                color='secondary'
                data-testid='changeBgColor'
                onClick={() => changeColor()}
              >
                Change BG Color
              </Button>
            </MainGrid>
          </MainGrid>
        </Box>
      </Grid>
    </ColorBox>
  )
}

export default ColorComp
