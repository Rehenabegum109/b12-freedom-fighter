import { Link, NavLink } from "react-router";
import logo from "../../assets/img/firebase-logo.png"
import MyContainer from "../Container/MyContainer";
import Mylink from "../MyLink/Mylink";
// import MyLink from "./MyLink";
// import MyLink from "./MyLink";


const Navbar = () => {
  return (
    <div className="bg-slate-100f py-2 border-b border-b-slate-300 ">
      <MyContainer className="flex items-center  justify-between">
        <figure>
          <img src={logo} className="w-[55px]" />
        </figure>
        <ul className="flex items-center gap-2">
          {/* <li>
            <NavLink to={"/"} className={({isActive}) =>(isActive ?'text-purple-500' :'')}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/aboutUs"} className={({isActive}) =>(isActive ?'text-purple-500' :'')}>About us</NavLink>
          </li>
          <li>
            <NavLink to={"/profile"} className={({isActive}) =>(isActive ?'text-purple-500' :'')}>Profile</NavLink>
          </li> */}

          
          <li>
            <Mylink to={"/"}>Home</Mylink>
          </li>
         
          <li>
            <Mylink to={"/aboutUs"}>About us</Mylink>
          </li>
          <li>
            <Mylink to={"/profile"}>Profile</Mylink>
          </li>
        </ul>

        <button className="bg-purple-500 text-white px-4 py-2 rounded-md font-semibold cursor-pointer">
          <Link to={"/signin"}>Sign in</Link>
        </button>
    
    </MyContainer>
    </div>
  );
};

export default Navbar;
