import './App.css';
import { UserProvider } from "./UserContext";
import UserCard from './UserCard';

function App() {
  console.log("<App /> rerender")
  return (
    <UserProvider>
      <div className="App">
        <UserCard />
      </div>
    </UserProvider>
  );
}

export default App;
