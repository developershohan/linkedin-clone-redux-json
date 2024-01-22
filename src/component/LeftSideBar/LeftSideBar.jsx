import { FaBookmark } from 'react-icons/fa'
import { FcSimCardChip } from 'react-icons/fc'
import { FiPlus } from 'react-icons/fi'
import { HiUserGroup } from 'react-icons/hi'
import { IoIosArrowDown } from 'react-icons/io'

const LeftSideBar = () => {
  return (
    <div>
                  <div className="left-sitebar">
            <div className="top-part">
              <img src="https://cdn.pixabay.com/photo/2017/01/20/17/26/operating-system-1995434_640.png" alt="" />
              <br />
              <br />
              <div className="profile-conten">
                <h6>Shohanur Rahman</h6>
                <p>WordPress | React | NodeJs | MongoDB</p>
              </div>
              <hr />
              <div className="profile-view">
                <p>Profile viewers</p>
                <h6> 6 </h6>
              </div>
              <div className="post-impressions">
                <p>Post impressions</p>
                <h6> 15 </h6>
              </div>
              <hr style={{ margin: "0px" }} />
              <div className="premium">
                <p>Stengthen your profile with an Ai writing assistant</p>
                <h6> <FcSimCardChip /> Try Premium for BDT0</h6>
              </div>
              <hr style={{ margin: "0px" }} />
              <div className="mydream">
                <p> <FaBookmark /> &nbsp; My items</p>
              </div>
            </div>

            <div className="bottom-part">

              <div className="recent">
                <p>Recent</p>
                <i> <IoIosArrowDown /> </i>
              </div>

              <div className="ui">
                <i><HiUserGroup /> </i>
                <p>User experience(UX) design, P...</p>
              </div>

              <div className="ux">
                <i><HiUserGroup /> </i>
                <p>User Experience design (UX)</p>
              </div>

              <div className="groups">
                <h6>Groups</h6>
                <i> <IoIosArrowDown /> </i>
              </div>

              <div className="ui">
                <i><HiUserGroup /> </i>
                <p>User experience(UX) design, P...</p>
              </div>

              <div className="ux">
                <i><HiUserGroup /> </i>
                <p>User Experience design (UX)</p>
              </div>

              <div className="see-all">
                <p>See all</p>
              </div>

              <div className="events">
                <h6>Events</h6>
                <i> <FiPlus /> </i>
              </div>

              <h5>Followed Hashtags</h5>
              <hr />
              <div className="discover">
                <p>Discover more</p>
              </div>

            </div>


          </div>
    </div>
  )
}

export default LeftSideBar