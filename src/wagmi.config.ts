import { createConfig, http } from 'wagmi'
import { linea } from 'wagmi/chains'

export const wagmiConfig = createConfig({
  chains: [linea],
  transports: {
    [linea.id]: http(),
  },
})
