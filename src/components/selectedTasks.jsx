import { useSelectedStore } from '../store/useSelectedStore'

export const selectedTasks = () => {
  const selectedTasks = useSelectedStore(
    (state) => state.selectedTasks
  )

  const removeTask = useSelectedStore(
    (state) => state.removeTask
  )

  const clearAll = useSelectedStore(
    (state) => state.clearAll
  )

  return (
    <div className="selected">
      <h2>Мои заказы</h2>

      <h3 className="count">
        Выбрано: {selectedTasks.length}
      </h3>

      <div className="cards">
        {selectedTasks.map((task) => (
          <div className="task-card selected-card" key={task.id}>
            <h3>{task.title}</h3>

            <button
              className="remove-btn"
              onClick={() => removeTask(task.id)}
            >
              Отказаться
            </button>
          </div>
        ))}
      </div>

      {selectedTasks.length > 0 && (
        <button className="clear-btn" onClick={clearAll}>
          Очистить всё
        </button>
      )}

      {selectedTasks.length === 0 && (
        <p className="empty">
          Вы пока не выбрали заказы 💙
        </p>
      )}
    </div>
  )
}
