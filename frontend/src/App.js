import './App.css';
import { UserActivityProvider } from './contexts/userActivity';
import Routes from './Routes';


function App() {
  return (
    <div className="root">
      <UserActivityProvider>
        <Routes />
      </UserActivityProvider>
    </div>
  );
}

export default App;
