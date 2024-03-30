import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface ToggleState {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}

const useToggleStore = create(persist<ToggleState>(
  (set, get) => ({
    sidebarOpen: true,
    toggleSidebar: () => set({ sidebarOpen: !get().sidebarOpen }),
  }),
  {
    name: 'toggle-storage',
    storage: createJSONStorage(() => localStorage),
  },
));

export default useToggleStore;
