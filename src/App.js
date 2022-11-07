
import './styles.css';
import Flexcontainer from "./Flexcontainer";
import Footer from "./secondbox/Footer";

function App (){
    return ( 
        <div style={{margin: '0px', padding: '0px'}}>
            <div className="main-container">
                <Flexcontainer/>
                
            </div>
            <Footer/>
        </div>  
    );
}

export default App;