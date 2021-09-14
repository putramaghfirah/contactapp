import { combine } from 'zustand/middleware'
import create from 'zustand'

export const useAlert = create(
  combine({ isActive: false }, set => ({
    setActive: (isActive: boolean) => {
      set({ isActive })
    },
  })),
)
