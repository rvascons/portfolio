import { Link, Outlet } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="h-full block px-10">
            <div className="flex h-1/5 flex-row justify-center space-x-10 pb-10">
                <Link className=" h-full w-1/3 items-center shadow-md shadow-slate-900 bg-red-600 hover:bg-red-800 border-stone-800 border-4 rounded-xl" to="/"><div /></Link>
                <Link className=" h-full w-1/3 items-center shadow-md shadow-slate-900 bg-blue-600 hover:bg-blue-800 border-stone-800 border-4 rounded-xl" to="/projects"><div /></Link>
                <Link className=" h-full w-1/3 items-center shadow-md shadow-slate-900 bg-green-600 hover:bg-green-800 border-stone-800 border-4 rounded-xl" to="/studies"><div /></Link>
            </div>
            <div className="h-4/5 w-full">
                <Outlet />
            </div>
        </div >
    )
}