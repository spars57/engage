import { Grid, GridProps } from '@mui/material'
import { FC, PropsWithChildren } from 'react'

interface Props extends GridProps {
  config: 0 | 1 | 2 | 3 | 4 | 6 | 8 | 12
}

const GapGrid: FC<PropsWithChildren<Props>> = ({
  config = 3,
  children,
  ...props
}) => (
  <Grid container {...props}>
    <Grid item xs={config}></Grid>
    <Grid item xs={12 - config * 2}>
      {children}
    </Grid>
    <Grid item xs={config}></Grid>
  </Grid>
)

export default GapGrid
