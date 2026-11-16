import { useTasks } from '../store/useTasks'
import { useSelectedStore } from '../store/useSelectedStore'

export const AllTasks = () => {
  const { data, error, isError, isLoading } = useTasks()

  const addTask = useSelectedStore((state) => state.addTask)
  const selectedTasks = useSelectedStore((state) => state.selectedTasks)

  if (isLoading) return <div className="message">Загрузка...</div>

  if (isError) return <div className="message">{error.message}</div>

  return (
    <div className="tasks">
      <h2>Все заказы 💙</h2>

      <div className="cards">
        {data?.map((order) => {
          const isSelected = selectedTasks.some(
            (task) => task.id === order.id
          )

          return (
            <div className="task-card" key={order.id}>
              <h3>{order.title}</h3>

              <button
                className="add-btn"
                disabled={isSelected}
                onClick={() => addTask(order)}>
                {isSelected ? 'Уже выбрано' : 'Взять в работу'}
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
