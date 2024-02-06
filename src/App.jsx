// Components
import Sidebar from "./components/Sidebar.jsx";
import CreateProject from "./components/CreateProject.jsx";

//hooks
import {useRef, useState,} from "react";

function App() {

    const [project, setProject] = useState([]);

    function  handleProject(newProject) {
        setProject(prevProject => [...prevProject, newProject])
        console.log(newProject);
    }

    console.log(project);

    return (
        <main className="flex">
            <Sidebar proj={project} />

            <CreateProject onProjectCreate={handleProject}/>

        </main>
    );
}

export default App;
