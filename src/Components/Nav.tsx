import { AiFillDollarCircle } from "react-icons/ai";
import Logo from "../assets/logo.png";


const Nav = ({coin}: {coin:number}) => {

  

  return (
    <div className="bg-red-100">
      <nav className="flex justify-between items-center container mx-auto">
        <img src={Logo} alt="" />

        <ul className="flex gap-4 items-center">
          <li>Home</li>
          <li>Fixture</li>
          <li>Players</li>
          <li>Schedule</li>
        </ul>
        <h2 className="font-bold text-3xl text-black-500 flex items-center gap-2"> <AiFillDollarCircle/> {coin}
        </h2>
      </nav>
    </div>
  );
};

export default Nav;
