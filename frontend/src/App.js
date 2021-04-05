import './App.css';
import { EditUserProvider } from './contexts/editUserData';
import Routes from './Routes';


function App() {
  return (
    <div className="root">
      <EditUserProvider>
        <Routes />
      </EditUserProvider>
    </div>
  );
}

export default App;
