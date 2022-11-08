
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';

const date= new Date().getFullYear();

function Footer() {
  return (
    <div className="footer">
      <p className="para"> Find me on social media.</p>
      
       <a className="links" href="https://www.quora.com/profile/Peter-Moses-Mohemos">Q</a>
      <a className="links" href="https://stackoverflow.com/users/5482255/peter-moses"></a>
      <a className="links" href="https://web.facebook.com/mohemos"><FacebookTwoToneIcon className="facebook"/></a>
      <a className="links" href="https://twitter.com/mohemos"></a>
      <p className="para para2"> © Moses Hennuho Peter, {date}</p>
    </div>
  );
}

export default Footer;
