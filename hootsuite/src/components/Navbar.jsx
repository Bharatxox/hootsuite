import Button from "../utils/Button";
import Logo from "/Hootsuite_logo.png";
const Navbar = () => {
  const list1 = ["Platform", "Plans", "Enterprise", "Resource", "Education"];
  const list2 = ["Contacts", "Login"];
  return (
    <nav className="bg-white text-black flex w-full justify-between px-10">
      <div className="flex items-center gap-7">
        <img src={Logo} className="h-[70px]" />
        <ul className="flex font-bold gap-6">
          {list1.map((e) => (
            <li key={e} className="cursor-pointer hover:text-primary">
              {e}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-5">
        <ul className="flex font-medium gap-5">
          {list2.map((e) => (
            <li key={e} className="cursor-pointer hover:text-primary">
              {e}
            </li>
          ))}
        </ul>
        <Button name={"Sign Up"} />
      </div>
    </nav>
  );
};

export default Navbar;
