import { FaLinkedin, FaSortDown } from "react-icons/fa";
import { Link } from "react-router-dom";



const RightSideBar = () => {
  return (
    <div>
        <div className="right-sitebar">
<img src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png" alt="" />
<div className="links">
  <Link> About</Link>
  <Link> Accessibility</Link>
  <Link> Help Center</Link>
  <Link> Privacy & Terms <FaSortDown/> </Link>
  <Link> Ad Choices</Link>
  <Link> Advertising</Link>
  <Link> Business Services <FaSortDown/> </Link>
  <Link> Get the LinkedIn app</Link>
  <Link> More</Link>
</div>
<p><span>Linked</span><FaLinkedin/> Linkedin Corporation &copy; 2023 </p>
</div>
    </div>
  )
}

export default RightSideBar