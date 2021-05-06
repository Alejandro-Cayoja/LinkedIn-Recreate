import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Sidebar.css";

function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://image.freepik.com/vector-gratis/fondo-pantalla-formas-geometricas-neon_23-2148427188.jpg" alt=""/>
                <Avatar className="sidebar__avatar" />
                <h2>Alejandro Cayoja</h2>
                <h4>Stronranger@gmail.com</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">165</p>
                </div>
                <div className="sidebar__stat">
                    <p>Wiews on post</p>
                    <p className="sidebar__statNumber">253</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('softwareengineering')}
                {recentItem('developer')}
            </div>
        </div>
    )
}

export default Sidebar;
