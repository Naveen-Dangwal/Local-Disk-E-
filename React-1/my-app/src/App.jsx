import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Enter the text to manipulate</h1>
        <TextForm />
      </div>
    </>
  );
}

export default App;
