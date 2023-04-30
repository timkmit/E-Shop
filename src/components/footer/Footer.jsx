import Container from "@mui/material/Container";
import './style.css'


const Footer = () => {
    return ( 
        <div className="footer">
      <p>&copy; 2023 База строительных материалов. Все права защищены.</p>
      <p>Связаться с нами: timengalytchev@mail.ru</p>
      <p>Следите за нами в соцсетях:</p>
      <div className="social-icons">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f">tg</i>
        </a>
        <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter">vk</i>
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram">inst</i>
        </a>
      </div>
    </div>
        
     );
}
 
export default Footer;