import './App.css';
import { StatusFilterProvider } from './contexts/statusFilter';
import Routes from './Routes';


function App() {
  return (
    <div className="root">
      <StatusFilterProvider>
        <Routes />
      </StatusFilterProvider>
    </div>
  );
}

export default App;
