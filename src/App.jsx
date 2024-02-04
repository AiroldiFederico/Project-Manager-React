import Sidebar from "./components/Sidebar.jsx";
import CreateProject from "./components/CreateProject.jsx";

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
        <main className="flex">
            <Sidebar proj={proj}/>

            <CreateProject/>

        </main>
    );
}

export default App;
