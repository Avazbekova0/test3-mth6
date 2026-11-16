import { useQuery } from '@tanstack/react-query';

export function useTasks() {
  return useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos?_limit=15'
      );

      if (!response.ok) {
        throw new Error('Ошибка загрузки');
      }

      return response.json();
    }
  });
};
