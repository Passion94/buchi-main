
import { Icon } from '@mui/material';
import HouseIcon from '@mui/icons-material/House';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import PublicIcon from '@mui/icons-material/Public';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';




function Firstbox() {
  return (<div className="data-container">
  <div style={{position:"relative"}}>
    <img
        className="mosespicture"
        src="https://mosespeter.com/image/moses-peter.jpg"
        alt="Mosespicture"
      />
      <div id="name">
        <p> Moses Hennuho Peter</p>
      </div>
</div>
   <div className="first-box ">




      

       <p className="first-box-icon software"><BusinessCenterIcon  className="fa-icon briefcase " fontSize='22px'/><strong> Software Engineer</strong></p>
        <p className="first-box-icon"><HouseIcon className="fa-icon home" fontSize='22px'/>Lagos Nigeria
        </p>
        <p className="first-box-icon"><EmailIcon className="fa-icon envelope" fontSize='22px'/>mohemos@gmail.com</p>
        <p className="first-box-icon"><PhoneIcon className="fa-icon phone" fontSize='22px'/>+234 8039092522</p>
        <hr style={{margin:"20px"}}/>

        <div className="backendSkills">
          <p className="frontend-skills-header"><StarOutlineIcon  className="fa-icon briefcase"/><b id='backend'> Backend Skills</b></p>

          <p className='First-box-paragraph'> Data structure & Algorithm, System Analysis & Design</p>
          <progress className="progressbar" id="file" value="95" max="100" />
          <p className='First-box-paragraph'>Database (Mysql, Postgres, MongoDB, ElasticSearch, SQLite, Redis)</p>
          <div>
          <progress id="file" value="95" max="100"></progress>
          <p className='First-box-paragraph'> Node.js (Express, Sail, Handlebars.js)</p>
          <progress id="file" value="95" max="100"></progress>
          <p className='First-box-paragraph'> PHP (Laravel, Smarty, Blade)</p>
          <progress id="file" value="85" max="100"></progress>
          <p className='First-box-paragraph'> Java</p>
          <progress id="java" value="30" max="100"></progress>
          <p className='First-box-paragraph'> Golang (Still learning....)</p>
          <progress id="golang" value="10" max="100"></progress>
          </div>
          <hr style={{margin:"20px"}}/>

           <div className="frontend-skills">

          <p className="frontend-skills-header"><PublicIcon className="fa-icon globe" fontSize='sm'/><b>FrontEnd Skills</b> </p>
          <p className='First-box-paragraph'> HTML </p>
          <progress id="file" value="95" max="100"></progress>

          <p className='First-box-paragraph'> Javascript (React.js, jQuery, Vanilla)</p>
          <p><progress id="file" value="95" max="100"></progress></p>
          <p className='First-box-paragraph'> CSS (Bootstrap, materia-ui, W3CSS)</p>
          <p><progress id="css" value="70" max="100"></progress></p>
          </div>

          <hr style={{margin:"20px"}}/>

          <div className="mobile">
          <p className="frontend-skills-header"><PublicIcon className="fa-icon globe" fontSize='sm'/><b>Mobile App Development</b></p>

          <p className='First-box-paragraph'> Android Application (React Native)</p>
          <progress id="file" value="100" max="100"></progress>

          <p className='First-box-paragraph'> Apple iOS Application (React Native)</p>
          <progress id="file" value="100" max="100"></progress>
          </div>
          <hr style={{margin:"20px"}}/>

          <div className="desktop-app">
          <p className='frontend-skills-header'><PublicIcon className="fa-icon globe" fontSize='sm'/>  <b>Desktop App Development</b>   </p>

          <p className='First-box-paragraph'>Electron.js (Windows, Linux & Mac OS desktop app)</p>
          <p><progress id="css" value="70" max="100"></progress></p>
          </div>
          <hr style={{margin:"20px"}}/>
          <div className="otherskills">
          <p className="frontend-skills-header"><PublicIcon className="fa-icon globe" fontSize='sm'/> <b>Other skills</b></p>
          <p className='First-box-paragraph'> Web/Mobile App Optimization </p>
          <p><progress id="file" value="100" max="100"></progress></p>
          <p className='First-box-paragraph'> Search Engine Optimization</p>
          <p><progress id="file" value="100" max="100"></progress></p>
          </div>
        </div>

      </div>
    </div>);
}


export default Firstbox;
