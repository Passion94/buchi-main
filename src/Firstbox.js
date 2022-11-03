
import { Icon } from '@mui/material';
import HouseIcon from '@mui/icons-material/House';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import StarOutlineIcon from '@mui/icons-material/StarOutline';




function Firstbox() {
  return <div className="data-container">
    <img
        className="mosespicture"
        src="https://mosespeter.com/image/moses-peter.jpg"
        alt="Mosespicture"

      />
   <div className="first-box ">




      <div className="name">
      <p> Moses Henuhho Peter</p>
      </div>

       <h3 className="first-box-icon"><BusinessCenterIcon  className="fa-icon briefcase"/> <span className="target">Software Engineer</span>
        </h3>
        <p className="first-box-icon"><HouseIcon className="fa-icon home"/>Lagos Nigeria
        </p>
        <p className="first-box-icon"><EmailIcon className="fa-icon envelope"/>
           mohemos@gmail.com
        </p>
        <p className="first-box-icon"><PhoneIcon className="fa-icon phone"/>
      +234 8039092522
        </p>
        <hr style={{margin:"20px"}}/>

        <div className="backendSkills">
          <h2> <span className="target"><StarOutlineIcon className="fa-icon asterisk"/> Backend Skills</span></h2>

          <p> Data structure & Algorithm, System Analysis & Design</p>
          <progress className="progressbar" id="file" value="95" max="100" />
          <p>

            Database (Mysql, Postgres, MongoDB, ElasticSearch, SQLite, Redis)
          </p>
          <div>
          <progress id="file" value="95" max="100">

          </progress>
          <p> Node.js (Express, Sail, Handlebars.js)</p>
          <progress id="file" value="95" max="100">

          </progress>
          <p> PHP (Laravel, Smarty, Blade)</p>
          <progress id="file" value="85" max="100">

          </progress>
          <p> Java</p>
          <progress id="java" value="30" max="100">

          </progress>
          <p> Golang (Still learning....)</p>
          <progress id="golang" value="10" max="100">

          </progress>
          </div>
          <hr style={{margin:"20px"}}/>

           <div className="frontend-skills">

          <h2> FrontEnd Skills  </h2>
          <p> HTML </p>
          <progress id="file" value="95" max="100"></progress>

          <p> Javascript (React.js, jQuery, Vanilla)</p>
          <p>

            <progress id="file" value="95" max="100">

            </progress>
          </p>
          <p> CSS (Bootstrap, materia-ui, W3CSS)</p>
          <p>

            <progress id="css" value="70" max="100">

            </progress>
          </p>
          </div>

          <hr style={{margin:"20px"}}/>

          <div className="mobile">
          <h2>  <span className="target"> Mobile App Development</span>
          </h2>

          <p> Android Application (React Native)</p>
          <progress id="file" value="100" max="100"></progress>

          <p> Apple iOS Application (React Native)</p>
          <progress id="file" value="100" max="100"></progress>
          </div>
          <hr style={{margin:"20px"}}/>
          <div className="desktop-app">
          <h2>  Desktop App Development  </h2>

          <p> Electron.js (Windows, Linux & Mac OS desktop app) </p>
          <p>

            <progress id="css" value="70" max="100"></progress>
          </p>
          </div>
          <hr style={{margin:"20px"}}/>
          <div className="otherskills">
          <h2>  <span className="target">Other skills </span></h2>
          <p> Web/Mobile App Optimization </p>
          <p>
            <progress id="file" value="100" max="100"></progress>
          </p>
          <p> Search Engine Optimization</p>
          <p>

            <progress id="file" value="100" max="100"></progress>
          </p>
          </div>
        </div>

      </div>
    </div>
;
}

export default Firstbox;
