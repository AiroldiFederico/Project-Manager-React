import Sidebar from "./components/Sidebar.jsx";

function App() {


    const proj = [
        {
            name: "Learning React"
        },
        {
            name: "Studying React"
        }
    ]


    return (
        <>
            <Sidebar proj={proj}/>
        </>
    );
}

export default App;
