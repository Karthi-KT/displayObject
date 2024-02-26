import DisplayTable from "./Compnents/DisplayTable";
import Header from "./Compnents/Header";
import StudentData from "./Compnents/StudentData.js";

function App() {
  return (
    <>
      <Header StudentData={StudentData} />
      <DisplayTable StudentData={StudentData} />
    </>
  );
}

export default App;
