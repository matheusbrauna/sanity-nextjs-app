import { create } from 'zustand'

interface UseNoContentFoundModalStore {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

export const useNoContentFoundModal = create<UseNoContentFoundModalStore>(
  set => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
  })
)
