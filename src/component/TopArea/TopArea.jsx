import { FaImage, FaOutdent, FaRegCalendarAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux'


const TopArea = () => {
const {setpostModal}= useSelector(state => state);

    const handleShowPostModal = () => {
        setpostModal(true);
      }
      
    
  return (
    <div>
        
        <div className="top-area">
<div className="top-line">
  <img src="https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/412880005_3709095272655142_1248761113307502751_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=Ui83ULL09j8AX-F-bRr&_nc_ht=scontent.fdac5-2.fna&oh=00_AfAhw7-wTASn0FDoMt_uSNTfM656zGXr9AbFei5XxKkfqA&oe=65B35684" alt="" />
  <h6 onClick={handleShowPostModal}>Star a post</h6>
</div>
<div className="post-category">
  <div className="media">
    <i> <FaImage /> </i>
    <h6>Media</h6>
  </div>
  <div className="event">
    <i> <FaRegCalendarAlt /> </i>
    <h6>Event</h6>
  </div>
  <div className="artical">
    <i> <FaOutdent /> </i>
    <h6>Write article</h6>
  </div>
</div>
</div>
    </div>
  )
}

export default TopArea