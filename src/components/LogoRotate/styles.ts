import { styled } from '@mui/material'

export const AppLogo = styled('img')`
  height: 40vmin;
  pointer-events: none;
  animation: App-logo infinite 20s linear;

  @keyframes App-logo {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
