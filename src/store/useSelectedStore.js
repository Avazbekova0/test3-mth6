import { create } from 'zustand';

export const useSelectedStore = create((set) => ({
    selectedTasks: [],

    addTask: (task) => set((state) => {
    const exists = state.selectedTasks.some(
        (item) => item.id === task.id
    );

    if (exists) return state;

    return {
        selectedTasks: [...state.selectedTasks, task]
    };
    }),
    removeTask: (id) => set((state) => ({
        selectedTasks: state.selectedTasks.filter((task => task.id !==id))
    })),
    clearAll: () => set({ selectedTasks: [] })
}));