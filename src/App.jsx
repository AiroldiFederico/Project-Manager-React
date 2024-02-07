// Components
import Sidebar from "./components/Sidebar.jsx";
import CreateProject from "./components/CreateProject.jsx";

//hooks
import {useRef, useState,} from "react";
import DetailsProject from "./components/DetailsProject.jsx";

function App() {

    const [project, setProject] = useState([]);
    const [view, setView] = useState(false);
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);


    function  handleProject(newProject) {
        setProject(prevProject => [...prevProject, newProject])
    }

    function handleView(viewValue) {
        setView(viewValue);
    }

    console.log(project);

    return (
        <main className="flex">

            <Sidebar
                proj={project}
                setView={handleView}
                setSelectedProjectIndex={setSelectedProjectIndex}
                selectedProjectIndex={selectedProjectIndex}
            />


            { view ? <DetailsProject objProject={project} index={selectedProjectIndex}/> : <CreateProject onProjectCreate={handleProject}/>}

        </main>
    );
}

export default App;
