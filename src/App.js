import "./App.css";
import { MainPage } from "./components";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <MainPage />
      </div>
    </QueryClientProvider>
  );
}

export default App;
