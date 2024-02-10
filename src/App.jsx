// Components
import Sidebar from "./components/Sidebar.jsx";
import CreateProject from "./components/CreateProject.jsx";

//hooks
import {useState,} from "react";
import DetailsProject from "./components/DetailsProject.jsx";

function App() {
    const [projects, setProjects] = useState([]); // Rinominato per chiarezza
    const [view, setView] = useState(false);
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);

    function handleProject(newProject) {
        setProjects(prevProjects => [...prevProjects, { ...newProject, tasks: [] }]);
    }

    function handleView(viewValue) {
        setView(viewValue);
    }

    function addTaskToProject(projectIndex, newTask) {
        setProjects(projects =>
            projects.map((project, index) =>
                index === projectIndex
                    ? { ...project, tasks: [...project.tasks, newTask] }
                    : project
            )
        );
    }

    function deleteTaskFromProject(projectIndex, taskIndex) {
        setProjects(projects =>
            projects.map((project, index) =>
                index === projectIndex
                    ? { ...project, tasks: project.tasks.filter((_, i) => i !== taskIndex) }
                    : project
            )
        );
    }

    return (
        <main className="flex">
            <Sidebar
                proj={projects}
                setView={handleView}
                setSelectedProjectIndex={setSelectedProjectIndex}
                selectedProjectIndex={selectedProjectIndex}
            />

            {view ? (
                <DetailsProject
                    objProject={projects}
                    index={selectedProjectIndex}
                    deleteTask={(projectIndex) => deleteTaskFromProject(projectIndex)}
                    addTaskToProject={addTaskToProject}
                    deleteTaskFromProject={deleteTaskFromProject}
                />
            ) : (
                <CreateProject onProjectCreate={handleProject}/>
            )}
        </main>
    );
}


export default App;
