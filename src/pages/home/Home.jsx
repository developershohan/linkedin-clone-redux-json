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
import axios from "axios";
import Swal from "sweetalert2";
import RightSideBar from "../../component/right-sidebar/rightSideBar";
import LeftSideBar from "../../component/LeftSideBar/LeftSideBar";
import {  useDispatch, useSelector } from 'react-redux'
import { get_linkedinPost } from "../../redux/action";


const Home = () => {



  const dispatch = useDispatch()
  const { linkedinPost, message, error, loading } = useSelector(state => state);


  useEffect(() => {

    dispatch(get_linkedinPost())
}, [])

  //////////////////=========create Part Start ===========//////////////////////////////

  //post modal show hide state
  const [postModal, setpostModal] = useState(false);

  //crate post data state
  const [createPost, setCreatePost] = useState({
    post: "",
    photo: "",
  })


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
  const postDataSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:6060/linkedinPost", createPost);
    setCreatePost({
      post: "",
      photo: "",
    })
    setpostModal(false);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500
    });
    getAllpost();
  }





  //get all posts state
  const [allPost, setAllPost] = useState([]);

  const getAllpost = async () => {

    const alldata = await axios.get("http://localhost:6060/linkedinPost")
    setAllPost(alldata.data);
  }

  useEffect(() => {
    getAllpost()
  }, [])


  //////////////////=========create Part End ===========//////////////////////////////

  //////////////////=========Delete post start ===========//////////////////////////////

  const handleDeletePost = async (id) => {

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
        axios.delete(`http://localhost:6060/linkedinPost/${id}`);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        getAllpost();
      }
    });

  }

  //////////////////=========Delete post end ===========//////////////////////////////

  //////////////////=========Edit post data start ===========//////////////////////////////
  //show edit modal
  const [postEditModal, setPostEditModal] = useState(false);


  //edit data update
  const [editPost, setEditPost] = useState({
    post: "",
    photo: ""
  });

  //update edit data
  const handleEditPost = async (id) => {
    setPostEditModal(true);

    const editData = await axios.get(`http://localhost:6060/linkedinPost/${id}`);
    setEditPost(editData.data);

  }

  //hide edit show
  const handleHidePostEdit = () => {
    setPostEditModal(false);
  }


  //input handler chanage
  const handleInputEdit = (e) => {

    setEditPost((prevState) => ({
      ...prevState, [e.target.name]: e.target.value
    }))

  }

  // updated value submmit
  const editDataSubmit = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:6060/linkedinPost/${editPost.id}`, editPost)
    setPostEditModal(false);
    getAllpost();
  }

  //////////////////=========Edit post data start ===========//////////////////////////////

  return (
    <>
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {message && <p>{message}</p>}

    </div>
      {/* edit modal */}
      <Container>
        <Row>
          <Col md={6}>
            <Modal show={postEditModal}>
              <Modal.Header className="post-modal-header"  >
                <div className="user-profile-info">
                  <div className="profile-pic">
                    <img src="https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/412880005_3709095272655142_1248761113307502751_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=Ui83ULL09j8AX-F-bRr&_nc_ht=scontent.fdac5-2.fna&oh=00_AfAhw7-wTASn0FDoMt_uSNTfM656zGXr9AbFei5XxKkfqA&oe=65B35684" alt="" />
                  </div>
                  <div className="user-info">
                    <h6>Shohanur Rahman <span><FaSortDown /></span></h6>
                    <p>Post to Anyone</p>
                  </div>
                </div>
                <i onClick={handleHidePostEdit}><RxCross2 /></i>
              </Modal.Header>
              <form onSubmit={editDataSubmit} >
                <Modal.Body className="post-body">
                  <textarea name="post" id="" cols="50" rows="10" placeholder="What do you want to talk about?" onChange={handleInputEdit} value={editPost.post}>

                  </textarea>
                  <input type="text" name="photo" placeholder="Give media link here" className="form-control" onChange={handleInputEdit} value={editPost.photo} />

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
                  <button type="submit"> Post </button>
                </Modal.Footer>
              </form>

            </Modal>
          </Col>
        </Row>
      </Container>

      {/* post modal */}
      <Container>
        <Row>
          <Col md={6}>
            <Modal show={postModal} onHide={setpostModal}>
              <Modal.Header className="post-modal-header"  >
                <div className="user-profile-info">
                  <div className="profile-pic">
                    <img src="https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/412880005_3709095272655142_1248761113307502751_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=Ui83ULL09j8AX-F-bRr&_nc_ht=scontent.fdac5-2.fna&oh=00_AfAhw7-wTASn0FDoMt_uSNTfM656zGXr9AbFei5XxKkfqA&oe=65B35684" alt="" />
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
                  <textarea name="post" id="" cols="50" rows="10" placeholder="What do you want to talk about?" onChange={handleInputChange}>
                  </textarea>
                  <input type="text" name="photo" placeholder="Give media link here" className="form-control" onChange={handleInputChange} />

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
                  <button type="submit"> Post </button>
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
            <hr />
            <h1>posts</h1>


            {
              allPost.map((item, index) => {

                return (
                  <div className="post-area" key={index}>
                    <div className="post-item">

                      <div className="post-menu">
                        <p>Suggested</p>
                        <div className="left-part">

                          <Dropdown>
                            <Dropdown.Toggle className="menu-btn">
                              <i><BsThreeDots /></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="menu-option">
                              <Dropdown.Item href="#/action-1" onClick={() => handleEditPost(item.id)}> Edit post</Dropdown.Item>
                              <Dropdown.Item href="#/action-2" onClick={() => handleDeletePost(item.id)} > Delete post </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>




                          <i><RxCross2 /></i>
                        </div>
                      </div>

                      <hr />

                      <div className="post-top">
                        <div className="user-info-area">
                          <img src="https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/412880005_3709095272655142_1248761113307502751_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=Ui83ULL09j8AX-F-bRr&_nc_ht=scontent.fdac5-2.fna&oh=00_AfAhw7-wTASn0FDoMt_uSNTfM656zGXr9AbFei5XxKkfqA&oe=65B35684" alt="" />
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
                          <p> {item.post} </p>
                        </div>
                        <div className="post-img">
                          <img src={item.photo} />
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
            }



          </div>
          <RightSideBar />

        </Container>
      </div>
    </>
  )
}

export default Home