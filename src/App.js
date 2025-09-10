import Demo from "./components/Demo";
import { Provider } from "./components/ui/provider";

function App() {
  return (
    <Provider>
      <Demo />
    </Provider>
  );
}

export default App;
