import styled from 'styled-components'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'

interface ColorProps {
  props: string
}

export const ColorBox = styled(Box)<ColorProps>`
  background-color: ${(props) => props.props || 'black'};
  min-height: 100vh;
`
export const MainGrid = styled(Grid)`
  display: flex;
  justify-content: center;
`
