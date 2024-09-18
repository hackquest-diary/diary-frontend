import create, { State } from 'zustand'

interface UserSOLBalanceStore extends State {
  balance: number;
}

const useUserSOLBalanceStore = create<UserSOLBalanceStore>((set, _get) => ({
  balance: 0,
  getUserSOLBalance: async (publicKey, connection) => {
  },
}));

export default useUserSOLBalanceStore;
