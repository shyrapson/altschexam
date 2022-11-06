import {
  AiFillTwitterCircle,
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <section className="footer_container">
      <div className="footer_list">
        <ul>
          <li>
            <p>Power by</p>
          </li>
          <li className="footer_logo">
            <a href="">
              {" "}
              ALT<span className="line">_</span>
              <span>SCHOOL</span>
            </a>
          </li>
          <div className="social_icons">
            <AiFillTwitterCircle />
            <AiOutlineInstagram />
            <AiFillFacebook />
            <AiFillYoutube />
          </div>
          <h6 className="tel">tel: +2347033777762</h6>
        </ul>
        <ul>
          <li>
            <h1>Schools</h1>
          </li>
          <li>
            <a href="#">School of Enginering</a>
          </li>
          <li>
            <a href="#">School of Data</a>
          </li>
          <li>
            <a href="#">School of Product</a>
          </li>
        </ul>
        <ul>
          <li>
            <h1>Specialization</h1>
          </li>
          <li>
            <a href="#">Frontend Engineering</a>
          </li>
          <li>
            <a href="#">Backend Engineering</a>
          </li>
          <li>
            <a href="@">Cloud Engineering</a>
          </li>
          <li>
            <a href="#">Product Design</a>
          </li>
        </ul>
      </div>
      <p className="atyear">©2022 Altschool Africa. All rights reserved</p>
    </section>
  );
};

export default Footer;
