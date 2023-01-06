import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="main-container">
        <Header />
        <Form />
      </div>
    </>
  );
}

export default App;
