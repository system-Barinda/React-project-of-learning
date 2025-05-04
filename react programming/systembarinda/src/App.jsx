import React from "react";
import './css/menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faBars, faSearch, faSlash, faBan, faCode, faChevronDown, faPlus   } from '@fortawesome/free-solid-svg-icons';

const App = () => {
return(
<>
 <header>
    <div className="menu-campany">
        <div className="box-log-menu">
            <FontAwesomeIcon  icon={faBars} style={{ fontSize: '24px', cursor: 'pointer',marginTop:'2px' }} />
        </div>
        <div className="detail-log"></div>
        <div className="detail-dashboard"><p><h4>dashboard</h4></p></div>
        
    </div>
    {/* button of search */}
    <div className="search-box">
    <FontAwesomeIcon  icon={faSearch}  className="sear"/>  <p>type</p> <FontAwesomeIcon  icon={faCode }  className="sear"/>  <p>to search</p> 
    </div>
    <div className="menu-select">
        <div className="sub-menu-select"></div>
        <div className="sub-menu-select1">
        <FontAwesomeIcon  icon={faChevronDown}  className="icon-select"/>
        </div>
    </div>

    <div className="line-vertical"></div>

    <div className="box-add-create">
    <FontAwesomeIcon  icon={faPlus }  className="icon-create"/>
    <FontAwesomeIcon  icon={faChevronDown}  className="icon-create"/>
    </div>
    <div className="setting-container">

    </div>
 </header>
 <div className="task-operation">
  <div className="task-operation-header">
   <p>top task</p> <button className="add-task">new task</button>
  </div>
  <div className="search-task">
    <input type="search" placeholder="search tasks"/>
  </div>
 </div>

</>
);
};
export default App;