import Header from "./components/header/Header";

export default function App() {

  return (
    <div className="App">
     <Header
      style={{
         color: "yellow", 
         backgroundColor: "red",
         padding: "10px",
         textAlign: "center",
         fontSize: "50px"
        }} 
        title={"Hello World"}
        withQuotes={false}
      />
    </div>
  )
}


