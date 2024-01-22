
import './Topbar.scss';
import { GrLinkedin } from "react-icons/gr";
import { MdOutlineSearch } from "react-icons/md";
import { IoHomeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { HiOutlineUsers } from "react-icons/hi2";
import { IoBriefcase } from "react-icons/io5";
import { AiTwotoneMessage } from "react-icons/ai";
import { IoNotificationsSharp } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { LiaTableSolid } from "react-icons/lia";

const Topbar = () => {
  return (
    <>
    <div className="topbar">
        <container className="topbar-area">
            <div className="log-Scarch-part">
                <li> <GrLinkedin/> </li>
                <div className="search">
                    <i><MdOutlineSearch/></i>
                    <input type="text" placeholder="Search"/>
                </div>
            </div>
            <div className="menu-part">
                <ul className="menu-area">
                    <li className="menu-item"> <Link to=""> <IoHomeSharp/> Home</Link> </li>
                    <li className="menu-item"> <Link to=""> <HiOutlineUsers/> My Network</Link> </li>
                    <li className="menu-item"> <Link to=""> <IoBriefcase/> Jobs</Link> </li>
                    <li className="menu-item"> <Link to=""> <AiTwotoneMessage/> Messaging</Link> </li>
                    <li className="menu-item"> <Link to=""> <IoNotificationsSharp/> Notifications </Link> </li>
                    <li className="menu-item" > 
                        <Link to=""> 
                            <img src="https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/412880005_3709095272655142_1248761113307502751_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=Ui83ULL09j8AX-F-bRr&_nc_ht=scontent.fdac5-2.fna&oh=00_AfAhw7-wTASn0FDoMt_uSNTfM656zGXr9AbFei5XxKkfqA&oe=65B35684" alt="" />
                            <div className="me">
                                <span>Me</span>
                                <i> <IoMdArrowDropdown/> </i>
                            </div>
                        </Link> 
                    </li>  
                </ul>
                <div className="busyness-part">
                    <ul className="busyness-area">
                        <li className="menu-item"> 
                            <Link to="">    
                                <i> <LiaTableSolid/> </i>
                                <span>For Busyness <IoMdArrowDropdown/> </span>
                                    
                            </Link> 
                        </li>
                        <li className="menu-item">
                            <Link className="premium" >
                                Try Premium for <br />
                                BDT0
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </container>
    </div>
    </>
  )
}

export default Topbar