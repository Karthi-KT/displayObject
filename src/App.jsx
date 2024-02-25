import DisplayTable from "./Compnents/DisplayTable";
import Header from "./Compnents/Header";
import StudentData from "./StudentData"

function App() {
  return (
    
    <>
      <Header />
      <DisplayTable StudentData={StudentData} />
    </>
  );
}

export default App;
