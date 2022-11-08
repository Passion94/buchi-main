
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import StackedLineChartOutlinedIcon from '@mui/icons-material/StackedLineChartOutlined';
import NotListedLocationOutlinedIcon from '@mui/icons-material/NotListedLocationOutlined';
import FlutterDashOutlinedIcon from '@mui/icons-material/FlutterDashOutlined';


const date= new Date().getFullYear();

function Footer() {
  return (
    <div className="footer">
      <p className="para"> Find me on social media.</p>
      
       <a className="links" href="https://www.quora.com/profile/Peter-Moses-Mohemos" target="_blank"><i class="fa fa-quora w3-hover-opacity"></i></a>
       <a href="https://stackoverflow.com/users/5482255/peter-moses-mohemos" target="_blank"><i class="fa fa-stack-overflow w3-hover-opacity"></i></a>
       <a className="links" href="https://web.facebook.com/mohemos" target="_blank"><i class="fa fa-facebook-official w3-hover-opacity"></i></a>
       <a className="links" href="https://twitter.com/mohemos" target="_blank"><i class="fa fa-twitter w3-hover-opacity"></i></a>
       
      <p className="para para2"> © Moses Hennuho Peter, {date}</p>
    </div>
  );
}

export default Footer;
