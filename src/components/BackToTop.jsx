import { FaLongArrowAltUp} from "react-icons/fa";
const BackToTop = ({top}) => {
    return  <a
    href={`#${top}`}
  >
    <h1 className="flex justify-center items-center gap-2 mb-16 text-green-700/30 hover:text-green-700 transition"><FaLongArrowAltUp/>back to top</h1>
  </a>
}

export default BackToTop
