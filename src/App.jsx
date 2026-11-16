import './App.css'
import { AllTasks } from './components/allTasks'
import { SelectedTasks } from './components/SelectedTasks'

function App() {
  return (
    <div className="app">
      <h1>Фриланс-биржа 💙</h1>

      <div className="container">
        <AllTasks />
        <SelectedTasks />
      </div>
    </div>
  )
}

export default App