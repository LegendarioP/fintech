import Header from "./components/Header";
import Slidenav from "./components/Slidenav";
import Resumo from "./Pages/Resumo";
import { DataContextProvider } from "./Context/DataContext";


function App() {
  return (
    <DataContextProvider>
      <div className="container">
        <Header />
        <main>
          <Slidenav />
          <Resumo />
        </main>
      </div>
    </DataContextProvider>
  );
}

export default App
