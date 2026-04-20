import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <div className="noise-overlay">
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
