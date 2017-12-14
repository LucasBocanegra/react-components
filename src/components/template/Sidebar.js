import React, { Component } from "react";
import { Collapse, Well } from 'react-bootstrap';

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
                <a href="#">{this.props.alias}</a>
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

                    {this.props.alias}
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
                                                             alias={item.alias} />
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

                {/* Sidebar Links */}
                <ul className="list-unstyled components">

                    <SideBarItem index="home" alias="Home" active="true" />
                    <SideBarItem index="sobre" alias="Sobre" />
                    <SideBarItemExtended 
                            index="paginas"
                            alias="Páginas"
                            subItems={[
                                {index: "sub1", alias: "Sub Menu 1"},                       
                                {index: "sub2", alias: "Sub Menu 2"},                       
                                {index: "sub3", alias: "Sub Menu 3"}                       
                            ]} /> 
                    <SideBarItem index="portifolio" alias="Portfolio" />
                    <SideBarItem index="contato" alias="Contato" />
                </ul>
            </nav>
        );
    }
}

export default SideBar;