import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center px-6 my-7 bg-slate-800 h-[70px] rounded-2xl text-slate-100 fixed w-11/12 left-14 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.55)] z-10" >
            <div className="px-6 font-bold text-2xl tracking-widest">
                <a href="">TURING THOUGHTS</a>
            </div>
            <ul className="flex justify-end gap-6 px-6">
                <li className="tracking-wide text-lg opacity-75 bg-[rgb(250,148,148)] px-3 py-1 rounded-xl text-slate-900"><Link to="/" >Home</Link></li>
                <li className="tracking-wide text-lg hover:opacity-75 hover:bg-[rgb(250,148,148)] px-3 py-1 hover:rounded-xl hover:text-slate-900"><Link to="/about" >About</Link></li>
                <li className="tracking-wide text-lg hover:opacity-75 hover:bg-[rgb(250,148,148)] px-3 py-1 hover:rounded-xl hover:text-slate-900"><Link href="" >Customer Login</Link></li>
                <li className="tracking-wide text-lg hover:opacity-75 hover:bg-[rgb(250,148,148)] px-3 py-1 hover:rounded-xl hover:text-slate-900"><Link to="/employee-login">Employee Login</Link></li>
            </ul>
        </div>
    );
}

export default Navbar;