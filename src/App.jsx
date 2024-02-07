// Components
import Sidebar from "./components/Sidebar.jsx";
import CreateProject from "./components/CreateProject.jsx";

//hooks
import {useRef, useState,} from "react";
import DetailsProject from "./components/DetailsProject.jsx";

function App() {

    const [project, setProject] = useState([]);

    function  handleProject(newProject) {
        setProject(prevProject => [...prevProject, newProject])
        console.log(newProject);
    }

    let selected = true;

    return (
        <main className="flex">

            <Sidebar proj={project} />

            { selected ? <DetailsProject/> : <CreateProject onProjectCreate={handleProject}/>}

        </main>
    );
}

export default App;
