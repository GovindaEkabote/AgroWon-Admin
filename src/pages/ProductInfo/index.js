  import React, { useRef } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Slider from "react-slick";
import img from "../../assets/images/Govinda.jpg";
import img2 from "../../assets/images/srk.jpeg";
import { GrProductHunt } from "react-icons/gr";
import { BiSolidCategory } from "react-icons/bi";
import { IoSettingsSharp } from "react-icons/io5";
import { IoIosColorPalette } from "react-icons/io";
import { MdPhotoSizeSelectActual } from "react-icons/md";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { RiStockLine } from "react-icons/ri";
import { BsStars } from "react-icons/bs";
import { BsFillCalendarDateFill } from "react-icons/bs";
import profile from "../../assets/images/Govinda.jpg";
import UserAvatarImage from "../../components/userAvatarImage";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import { FaReply } from "react-icons/fa";
const ProductDetails = () => {

  const productSliderBig = useRef();
  const productSliderSmall = useRef();
  
  var productsSliderOptions = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  var productsSliderSmOptions = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
  };
  
    const gotoSlide = (index) => {
        productSliderBig.current.slickGoTo(index);
        productSliderSmall.current.slickGoTo(index);
    };
  
  return (
    <>
      <div className="right-content w-100">
        <div className="card shadow border-0 w-100 flex-row p-4">
          <h5 className="mb-0">Product View</h5>
          <Breadcrumbs aria-label="breadcrumb" className="ml-auto breadcrumbs_">
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Link underline="hover" color="inherit" href="/product">
              Product
            </Link>
            <Link underline="hover" color="inherit" href="/product/details">
              Product Info
            </Link>
          </Breadcrumbs>
        </div>

        <div className="card productDetailsSection">
          <div className="row">
            <div className="col-md-5">
              <div className="sliderWrapper pt-3 pb-3 pl-4 pr-4">
                <h6 className="mb-4">Product Images</h6>
                <Slider {...productsSliderOptions} ref={productSliderBig} className="sliderBig mb-2">
                  <div className="item">
                    <img src={img} alt="" className="w-100" />
                  </div>
                   <div className="item">
                    <img src={img} alt="" className="w-100" />
                  </div>
                  <div className="item">
                    <img src={img} alt="" className="w-100" />
                  </div>
                  <div className="item">
                    <img src={img} alt="" className="w-100" />
                  </div>
                  <div className="item">
                    <img src={img} alt="" className="w-100" />
                  </div>
                  <div className="item">
                    <img src={img} alt="" className="w-100" />
                  </div>
                  <div className="item">
                    <img src={img} alt="" className="w-100" />
                  </div>
                </Slider>
                <Slider {...productsSliderSmOptions} ref={productSliderSmall} className="sliderSmall">
                  <div className="item" onClick={() => gotoSlide(0)}>
                    <img src={img} alt="" className="w-100" />
                  </div>
                  <div className="item" onClick={() => gotoSlide(1)}>
                    <img src={img} alt="" className="w-100" />
                  </div>
                  <div className="item" onClick={() => gotoSlide(2)}>
                    <img src={img} alt="" className="w-100" />
                  </div>
                  <div className="item" onClick={() => gotoSlide(3)}>
                    <img src={img} alt="" className="w-100" />
                  </div>
                  <div className="item" onClick={() => gotoSlide(4)}>
                    <img src={img} alt="" className="w-100" />
                  </div>
                  <div className="item" onClick={() => gotoSlide(5)}>
                    <img src={img} alt="" className="w-100" />
                  </div>
                  <div className="item" onClick={() => gotoSlide(6)}>
                    <img src={img} alt="" className="w-100" />
                  </div>
                  <div className="item" onClick={() => gotoSlide(7)}>
                    <img src={img2} alt="" className="w-100" />
                  </div>
                </Slider>
              </div>
            </div>

            <div className="col-md-7">
              <div className="sliderWrapper pt-3 pb-3 pl-4 pr-4">
                <h6 className="mb-4">Product Details</h6>
                <h4>
                  TrustBasket Vermicompost 5kg 100% Natural Organic Fertilizer
                  for Plants
                </h4>
                <div className="productInfo mt-4">
                  <div className="row mb-3">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <GrProductHunt />
                      </span>
                      <span className="name">Brand</span>
                    </div>
                    <div className="col-sm-9">
                      <span>TrustBasket</span>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <BiSolidCategory />
                      </span>
                      <span className="name">Category</span>
                    </div>
                    <div className="col-sm-9">
                      <span>Fertilizer</span>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <IoSettingsSharp />
                      </span>
                      <span className="name">Tags</span>
                    </div>
                    <div className="col-sm-9">
                      <span>
                        <ul className="list list-inline tags sml">
                          <li className="list-inline-item">
                            <span>Organic</span>
                          </li>
                          <li className="list-inline-item">
                            <span>NonOrganic</span>
                          </li>
                          <li className="list-inline-item">
                            <span>Organic</span>
                          </li>
                          <li className="list-inline-item">
                            <span>NonOrganic</span>
                          </li>
                          <li className="list-inline-item">
                            <span>Organic</span>
                          </li>
                          <li className="list-inline-item">
                            <span>NonOrganic</span>
                          </li>
                        </ul>
                      </span>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <IoIosColorPalette />
                      </span>
                      <span className="name">Color</span>
                    </div>
                    <div className="col-sm-9">
                      <span>
                        <ul className="list list-inline tags sml">
                          <li className="list-inline-item">
                            <span>RED</span>
                          </li>
                          <li className="list-inline-item">
                            <span>YELLOW</span>
                          </li>
                          <li className="list-inline-item">
                            <span>PINK</span>
                          </li>
                          <li className="list-inline-item">
                            <span>ORANGE</span>
                          </li>
                          <li className="list-inline-item">
                            <span>BLACK</span>
                          </li>
                          <li className="list-inline-item">
                            <span>WHITE</span>
                          </li>
                        </ul>
                      </span>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <MdPhotoSizeSelectActual />
                      </span>
                      <span className="name">Size</span>
                    </div>
                    <div className="col-sm-9">
                      <span>
                        <ul className="list list-inline tags sml">
                          <li className="list-inline-item">
                            <span>5KG</span>
                          </li>
                          <li className="list-inline-item">
                            <span>10KG</span>
                          </li>
                          <li className="list-inline-item">
                            <span>15KG</span>
                          </li>
                          <li className="list-inline-item">
                            <span>20KG</span>
                          </li>
                          <li className="list-inline-item">
                            <span>25KG</span>
                          </li>
                        </ul>
                      </span>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <RiMoneyRupeeCircleFill />
                      </span>
                      <span className="name">Price</span>
                    </div>
                    <div className="col-sm-9">
                      <span className="del">100</span>
                      <span>100</span>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <RiStockLine />
                      </span>
                      <span className="name">Stock</span>
                    </div>
                    <div className="col-sm-9">
                      <span>Fertilizer</span>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <BsStars />
                      </span>
                      <span className="name">Review</span>
                    </div>
                    <div className="col-sm-9">
                      <span>Fertilizer</span>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <BsFillCalendarDateFill />
                      </span>
                      <span className="name">Published</span>
                    </div>
                    <div className="col-sm-9">
                      <span>Fertilizer</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4">
            <h4 className="mt-4 mb-3">Product Description</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <br />
            <h4 className="mt-4 mb-4">Reating </h4>
            <div className="ratingSection">
              <div className="ratingrow d-flex align-items-center">
                <span className="col1">5 star</span>
                <div className="col2">
                  <div class="progress">
                    <div
                      className="progress-bar"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div>
                <span className="col3">(22)</span>
              </div>
              <div className="ratingrow d-flex align-items-center">
                <span className="col1">4 star</span>
                <div className="col2">
                  <div class="progress">
                    <div
                      className="progress-bar"
                      style={{ width: "58%" }}
                    ></div>
                  </div>
                </div>
                <span className="col3">(282)</span>
              </div>
              <div className="ratingrow d-flex align-items-center">
                <span className="col1">3 star</span>
                <div className="col2">
                  <div class="progress">
                    <div
                      className="progress-bar"
                      style={{ width: "35%" }}
                    ></div>
                  </div>
                </div>
                <span className="col3">(782)</span>
              </div>
              <div className="ratingrow d-flex align-items-center">
                <span className="col1">2 star</span>
                <div className="col2">
                  <div class="progress">
                    <div
                      className="progress-bar"
                      style={{ width: "40%" }}
                    ></div>
                  </div>
                </div>
                <span className="col3">(242)</span>
              </div>
              <div className="ratingrow d-flex align-items-center">
                <span className="col1">1 star</span>
                <div className="col2">
                  <div class="progress">
                    <div
                      className="progress-bar"
                      style={{ width: "10%" }}
                    ></div>
                  </div>
                </div>
                <span className="col3">(122)</span>
              </div>
            </div>

            <br />
            <h4 className="mt-4 mb-4">Customer Reviews</h4>
            <div className="reviewsSection">
              <div className="reviewsRow">
                <div className="row">
                  <div className="col-sm-7 d-flex">
                    <div className="d-flex aligh-items-center flex-colume">
                      <div className="userInfo d-flex align-items-center mb-3">
                        <UserAvatarImage img={profile} lg={true} />
                        <div className="info pl-3">
                          <h6>Govinda Ekbote</h6>
                          {/* <span>25 minutes ago</span> */}
                          <Rating
                            name="read-only"
                            className="ratings"
                            value={4.5}
                            precision={0.5}
                            readOnly
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-5 d-flex aligh-items-center">
                    <div className="ml-auto">
                      <Button className="btn-blue btn-lg  btn-big ">
                        <FaReply />
                        &nbsp;Reply
                      </Button>
                    </div>
                  </div>
                  <p className="mt-3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </div>

              <div className="reviewsRow reply">
                <div className="row">
                  <div className="col-sm-7 d-flex">
                    <div className="d-flex aligh-items-center flex-colume">
                      <div className="userInfo d-flex align-items-center mb-3">
                        <UserAvatarImage img={profile} lg={true} />
                        <div className="info pl-3">
                          <h6>Govinda Ekbote</h6>
                          {/* <span>25 minutes ago</span> */}
                          <Rating
                            name="read-only"
                            className="ratings"
                            value={4.5}
                            precision={0.5}
                            readOnly
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-5 d-flex aligh-items-center">
                    <div className="ml-auto">
                      <Button className="btn-blue btn-lg  btn-big ">
                        <FaReply />
                        &nbsp;Reply
                      </Button>
                    </div>
                  </div>
                  <p className="mt-3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </div>
              <div className="reviewsRow reply">
                <div className="row">
                  <div className="col-sm-7 d-flex">
                    <div className="d-flex aligh-items-center flex-colume">
                      <div className="userInfo d-flex align-items-center mb-3">
                        <UserAvatarImage img={profile} lg={true} />
                        <div className="info pl-3">
                          <h6>Govinda Ekbote</h6>
                          {/* <span>25 minutes ago</span> */}
                          <Rating
                            name="read-only"
                            className="ratings"
                            value={4.5}
                            precision={0.5}
                            readOnly
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-5 d-flex aligh-items-center">
                    <div className="ml-auto">
                      <Button className="btn-blue btn-lg  btn-big ">
                        <FaReply />
                        &nbsp;Reply
                      </Button>
                    </div>
                  </div>
                  <p className="mt-3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </div>

              <div className="reviewsRow">
                <div className="row">
                  <div className="col-sm-7 d-flex">
                    <div className="d-flex aligh-items-center flex-colume">
                      <div className="userInfo d-flex align-items-center mb-3">
                        <UserAvatarImage img={profile} lg={true} />
                        <div className="info pl-3">
                          <h6>Govinda Ekbote</h6>
                          {/* <span>25 minutes ago</span> */}
                          <Rating
                            name="read-only"
                            className="ratings"
                            value={4.5}
                            precision={0.5}
                            readOnly
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-5 d-flex aligh-items-center">
                    <div className="ml-auto">
                      <Button className="btn-blue btn-lg  btn-big ">
                        <FaReply />
                        &nbsp;Reply
                      </Button>
                    </div>
                  </div>
                  <p className="mt-3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </div>

              <br/>
              <h4 className="mt-4 mb-4">Reply Reviews</h4>
                <form className="reviewForm mb-4">
                  <textarea  placeholder="Reply here.."/>
                </form>
                <Button className="w-100 btn-blue btn-big btn-lg">Drop Your Reply</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
