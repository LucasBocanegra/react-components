import React, { Component } from 'react';
import { Button, Row, Col} from 'react-bootstrap';

/** Import CSS **/
import './assets/stylesheet/app.css';

/** Import Components **/
import  Sibebar from "./components/template/Sidebar";


class App extends Component {
  

  render() {
    return (
      <div className="wrapper">
        {/* Sidebar */}
        <Sibebar />

        {/* Page Content */}
        <div id="content">
            <Row className="show-grid">
              <Col xs={12}>
                <h2>Collapsible Sidebar Using Bootstrap 3</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                <div className="line"></div>

                <Button bsStyle="primary">Primary</Button> 
              </Col>
            </Row>
        </div>
      </div>
    );
  }
}

export default App;
