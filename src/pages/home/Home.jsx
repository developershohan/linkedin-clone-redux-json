import { Col, Container, Dropdown, Modal, Row } from "react-bootstrap";
import './Home.scss';

import { FaImage } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaOutdent } from "react-icons/fa";
import { FaSortDown } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { BiWorld } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";
import { AiTwotoneLike } from "react-icons/ai";
import { FcIdea } from "react-icons/fc";
import { CiHeart } from "react-icons/ci";
import { FaRegThumbsUp } from "react-icons/fa";
import { TfiCommentAlt } from "react-icons/tfi";
import { ImLoop } from "react-icons/im";
import { FiSend } from "react-icons/fi";
import { FaRegSmile } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { CiCircleMore } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import { useEffect, useState } from "react";

import Swal from "sweetalert2";
import RightSideBar from "../../component/right-sidebar/rightSideBar";
import LeftSideBar from "../../component/LeftSideBar/LeftSideBar";
import { useDispatch, useSelector } from 'react-redux'
import { add_inkedinPost, delete_inkedinPost, get_linkedinPost, update_linkedin } from "../../redux/action";


const Home = () => {



  const { linkedinPost, message, error, loading } = useSelector(state => state.linkedinPost);

  const dispatch = useDispatch()
  const [createPost, setCreatePost] = useState({
    post: "",
    photo: "",
  })

  useEffect(() => {

    dispatch(get_linkedinPost())
  }, [])

  //////////////////=========create Part Start ===========//////////////////////////////

  //post modal show hide state
  const [postModal, setpostModal] = useState(false);
  const [editMode, seteditMode] = useState(false);


  //crate post data state



  //post modal show
  const handleShowPostModal = () => {
    setpostModal(true);
  }


  //post modal hide
  const handleHidePostModal = () => {
    setpostModal(false);
  }


  //get post data item
  const handleInputChange = (e) => {
    setCreatePost((prevState) => ({
      ...prevState, [e.target.name]: e.target.value
    }))
  }

  //submit post data
  const postDataSubmit = (e) => {
    e.preventDefault();


    if (editMode) {
      dispatch(update_linkedin({ ...createPost, id: createPost.id }))
      seteditMode(false);
      Swal.fire({
        icon: "success",
        title: "Post Updated Successfully",
        showConfirmButton: false,
        timer: 1500
      });
    
    } else {
      dispatch(add_inkedinPost(createPost))
      Swal.fire({
        icon: "success",
        title: "Post Added Successfully",
        showConfirmButton: false,
        timer: 1500
      });
    }
    setpostModal(false);
    setCreatePost({
      post: "",
      photo: "",
    })


  }

  //////////////////=========create Part End ===========//////////////////////////////

  //////////////////=========Delete post start ===========//////////////////////////////

  const handleDeletePost = (id) => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(delete_inkedinPost(id))
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });

      }
    });

  }

  //////////////////=========Delete post end ===========//////////////////////////////

  //////////////////=========Edit post data start ===========//////////////////////////////
  //show edit modal


  //update edit data
  const handleEditPost = (item) => {
    seteditMode(true);
    setpostModal(true);
    setCreatePost({
      id: item.id, 
      post: item.post || "", 
      photo: item.photo || "",
    });
  };




  //////////////////=========Edit post data start ===========//////////////////////////////

  return (
    <>
      <div>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {message && <p>{message}</p>}

      </div>

      {/* post modal */}
      <Container>
        <Row>
          <Col md={6}>
            <Modal show={postModal} onHide={setpostModal}>
              <Modal.Header className="post-modal-header"  >
                <div className="user-profile-info">
                  <div className="profile-pic">
                    <img src="https://scontent.fdac24-4.fna.fbcdn.net/v/t39.30808-6/412880005_3709095272655142_1248761113307502751_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=h4ckv853pEUAX89ClSt&_nc_ht=scontent.fdac24-4.fna&oh=00_AfD1w2zHbDBzs_9ceKQaVHc6z-2-ZI-PEcCkP9lUQgOZTw&oe=65BD39C4" alt="" />
                  </div>
                  <div className="user-info">
                    <h6>Shohanur Rahman <span><FaSortDown /></span></h6>
                    <p>Post to Anyone</p>
                  </div>
                </div>
                <i onClick={handleHidePostModal}><RxCross2 /></i>
              </Modal.Header>
              <form onSubmit={postDataSubmit} >
                <Modal.Body className="post-body">
                  <textarea type="text" name="post" id="" cols="50" rows="10" placeholder="What do you want to talk about?" value={createPost.post} onChange={handleInputChange}>
                  </textarea>
                  <input type="text" name="photo" placeholder="Give media link here" className="form-control" value={createPost.photo} onChange={handleInputChange} />

                  <div className="imgogi">
                    <i> <FaRegSmile /> </i>
                  </div>
                  <div className="addmedia">
                    <div className="add-item">
                      <div className="image">
                        <i> <FaImage /> </i>
                      </div>
                    </div>

                    <div className="event">
                      <i> <FaCalendarAlt /> </i>
                    </div>
                    <div className="celebrate">
                      <i> <CiCircleMore /> </i>
                    </div>
                    <div className="more">
                      <i> <BsThreeDots /> </i>
                    </div>
                  </div>

                </Modal.Body>
                <Modal.Footer className="modal-footer">
                  <i> <IoTimeOutline /> </i>
                  <button type="submit"> {editMode ? "Update" : "Post"} </button>
                </Modal.Footer>
              </form>

            </Modal>
          </Col>
        </Row>
      </Container>

      <div className="linkedin">
        <Container className="main-with">
          <LeftSideBar />

          <div className="main-home">
            <div className="top-area">
              <div className="top-line">
                <img src="https://scontent.fdac24-4.fna.fbcdn.net/v/t39.30808-6/412880005_3709095272655142_1248761113307502751_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=h4ckv853pEUAX89ClSt&_nc_ht=scontent.fdac24-4.fna&oh=00_AfD1w2zHbDBzs_9ceKQaVHc6z-2-ZI-PEcCkP9lUQgOZTw&oe=65BD39C4" alt="" />
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
            <hr />
            <h4>Total Posts: {linkedinPost.length}</h4>

            {linkedinPost && linkedinPost.length > 0
              ?
              linkedinPost.map((item, index) => {

                return (
                  <div className="post-area" key={index}>
                    <div className="post-item">

                      <div className="post-menu">
                        <p>Suggested {index + 1} </p>
                        <div className="left-part">

                          <Dropdown>
                            <Dropdown.Toggle className="menu-btn">
                              <i><BsThreeDots /></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="menu-option">
                              <Dropdown.Item  onClick={() => handleEditPost(item)}> Edit post</Dropdown.Item>
                              <Dropdown.Item  onClick={() => handleDeletePost(item.id)} > Delete post </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>




                          <i><RxCross2 /></i>
                        </div>
                      </div>

                      <hr />

                      <div className="post-top">
                        <div className="user-info-area">
                          <img src="https://scontent.fdac24-4.fna.fbcdn.net/v/t39.30808-6/412880005_3709095272655142_1248761113307502751_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=h4ckv853pEUAX89ClSt&_nc_ht=scontent.fdac24-4.fna&oh=00_AfD1w2zHbDBzs_9ceKQaVHc6z-2-ZI-PEcCkP9lUQgOZTw&oe=65BD39C4" alt="" />
                          <div className="user-info">
                            <h6>Shohanur Rahman</h6>
                            <p>WordPress / React / NodeJs / MongoDB</p>
                            <p>2 hours. <BiWorld /> </p>
                          </div>
                        </div>
                        <div className="follow">
                          <h5> <FaPlus /> Follow</h5>
                        </div>
                      </div>

                      <div className="post-body">
                        <div className="post-content">
                          <p> {item?.post} </p>
                        </div>
                        <div className="post-img">
                          <img src={item?.photo} />
                        </div>
                      </div>
                      <div className="post-footer">
                        <div className="reaction-count">
                          <div className="reaction">
                            <i className="like"> <AiTwotoneLike /> </i>
                            <i className="light"><FcIdea /></i>
                            <i className="love"><CiHeart /></i>
                            <p>200</p>
                          </div>
                          <div className="comment">
                            <p>50 comments</p>
                            <p>120 repost</p>
                          </div>
                        </div>
                        <hr />
                        <div className="reaction-area">
                          <div className="like-item">
                            <FaRegThumbsUp />
                            <p>Like</p>
                          </div>
                          <div className="comment-item">
                            <TfiCommentAlt />
                            <p>Comment</p>
                          </div>
                          <div className="repost-item">
                            <ImLoop />
                            <p>Repost</p>
                          </div>
                          <div className="sent-item">
                            <FiSend />
                            <p>Sent</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )

              })
              : "no data found"
            }



          </div>
          <RightSideBar />

        </Container>
      </div>
    </>
  )
}










export default Home