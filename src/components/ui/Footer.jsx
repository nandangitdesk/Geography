import footerContact from "../../api/footerApi.json";
import { IoCallSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const footerIcon = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />,
  };

  return (
    <footer className="bg-zinc-800 text-white py-10 mt-10">
      <div className="container mx-auto px-4 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {footerContact.map((curData, index) => {
            const { icon, title, details } = curData;
            return (
              <div className="footer-contact flex items-start space-x-3" key={index}>
                <div className="icon text-2xl">{footerIcon[icon]}</div>
                <div className="footer-contact-text">
                  <p className="font-semibold">{title}</p>
                  <p className="text-sm text-gray-400">{details}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="copyright-area mt-10 border-t border-gray-600 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="copyright-text">
              <p className="text-center md:text-left">
                Copyright &copy; 2024, All Right Reserved{" "}
                <NavLink
                  to="/"
                  target="_blank"
                  className="text-zinc-500 hover:underline"
                >
                  Geography
                </NavLink>
              </p>
            </div>

            <div className="footer-menu">
              <ul className="flex justify-center md:justify-end space-x-4 flex-wrap">
                <li>
                  <NavLink to="/" className="hover:text-zinc-400">Home</NavLink>
                </li>
                <li>
                  <NavLink
                    to="/"
                    target="_blank"
                    className="hover:text-zinc-400"
                  >
                    Social
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/"
                    target="_blank"
                    className="hover:text-zinc-400"
                  >
                    Source Code
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className="hover:text-zinc-400">Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;