import React, { Component } from "react";
import { Collapse, Well, Glyphicon, FormGroup, FormControl, InputGroup } from 'react-bootstrap';

import '../../assets/stylesheet/sidebar.css';


class SidebarHeader extends Component {
    render() {
        return (
            <div className="sidebar-header">
                <h3>{this.props.title}</h3>
            </div>
        );
    }
}

class SideBarItem extends Component {
    render() {
        return (
            <li key={this.props.index} className={this.props.active ? "active" : "not-active"}>
                <a href="#">
                <Glyphicon glyph={this.props.icon} />
                {this.props.value}
                </a>
            </li>
        );
    }
}

class SideBarItemExtended extends Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <li key={this.props.index}>
                <a  href="#"
                    expanded={this.state.open ? "true" : "false"}
                    onClick={() => this.setState({ open: !this.state.open })}>
                    <Glyphicon glyph={this.props.icon} />
                    {this.props.value}
                </a>
                <Collapse in={this.state.open} >
                    <div>
                        <Well>
                            <ul className="list-unstyled">
                                { 
                                    this.props.subItems ?
                                        this.props.subItems.map(item =>{
                                            return (
                                                <SideBarItem key={item.index} 
                                                             value={item.value} />
                                            );
                                        })
                                        : null
                                }
                            </ul>
                        </Well>
                    </div>
                </Collapse>
            </li>
        );
    }
}

class SideBar extends Component {

    render() {
        return (
            <nav id="sidebar">
                {/*  Sidebar Header */}
                <SidebarHeader title="Flex Forward" />

                <FormGroup>
                    <InputGroup>
                        <FormControl type="text" placeholder="Pesquisar" />
                        <InputGroup.Addon>
                            <Glyphicon glyph="search" />
                        </InputGroup.Addon>
                    </InputGroup>
                </FormGroup>

                {/* Sidebar Links */}
                <ul className="list-unstyled components">
                    <li className="sub-title">
                        <p> Menu Principal </p>
                    </li>

                    <SideBarItem index="home" value="Home" active="true" icon="home" />
                    <SideBarItem index="sobre" value="Sobre" icon="question-sign" />
                    <SideBarItemExtended 
                            index="paginas"
                            value="Páginas"
                            icon="folder-close"
                            subItems={[
                                {index: "sub1", value: "Sub Menu 1"},                       
                                {index: "sub2", value: "Sub Menu 2"},                       
                                {index: "sub3", value: "Sub Menu 3"}                       
                            ]} /> 

                    <SideBarItem index="portifolio" value="Portfolio" icon="align-justify"  />
                    <SideBarItem index="contato" value="Contato" icon="envelope" />
                </ul>
            </nav>
        );
    }
}

export default SideBar;