// Components
import Sidebar from "./components/Sidebar.jsx";
import CreateProject from "./components/CreateProject.jsx";

//hooks
import {useRef, useState,} from "react";
import DetailsProject from "./components/DetailsProject.jsx";

function App() {

    const [project, setProject] = useState([]);
    const [view, setView] = useState(true);

    function  handleProject(newProject) {
        setProject(prevProject => [...prevProject, newProject])
    }

    function handleView(notSelected) {

        setView(preView => {
            if (notSelected) {
                preView = false;
            } else {
                preView = true;
            }
        })
    }

    return (
        <main className="flex">

            <Sidebar proj={project} setView={handleView}/>

            { view ? <DetailsProject/> : <CreateProject onProjectCreate={handleProject}/>}

        </main>
    );
}

export default App;
