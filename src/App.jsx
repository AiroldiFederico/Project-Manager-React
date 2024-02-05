// Components
import Sidebar from "./components/Sidebar.jsx";
import CreateProject from "./components/CreateProject.jsx";

//hooks
import {useRef, } from "react";

function App() {

    const proj = []

    return (
        <main className="flex">
            <Sidebar proj={proj} />

            <CreateProject/>

        </main>
    );
}

export default App;
