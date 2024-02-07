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

    function handleDeleteTask(index) {
        setProject(currentProjects => currentProjects.filter((_, i) => i !== index));
        setView(false);
        setSelectedProjectIndex(null);
    }

    return (
        <main className="flex">

            <Sidebar
                proj={project}
                setView={handleView}
                setSelectedProjectIndex={setSelectedProjectIndex}
                selectedProjectIndex={selectedProjectIndex}
            />


            { view ? <DetailsProject objProject={project} index={selectedProjectIndex} deleteTask={handleDeleteTask}/> : <CreateProject onProjectCreate={handleProject}/>}

        </main>
    );
}

export default App;
