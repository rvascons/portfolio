import Project from "./project";
const Projects: React.FC = () => {
    return (
        <div className="grid gap-4 grid-cols-3 p-4 h-full bg-blue-600 border-stone-800 border-4 rounded-xl shadow-inner shadow-slate-900">
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
        </div>
    );
}

export default Projects;