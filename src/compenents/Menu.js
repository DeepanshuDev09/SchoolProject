import React from 'react';
import './menu.css';

export default function Menu() {
    return (
        <div className="menu-bar d-flex">
            <div className="d-flex flex-row me-auto menu-contact">
                <div className="p-2">contactschool@gmail.com</div>
                <div className="p-2">+91 99999 99999</div>
            </div>
            <div className="d-flex flex-row-reverse menu-links">
                <div className="p-3">Calendar</div>
                <div className="p-3">Alumni</div>
            </div>
            <div className="d-flex menu-support">
                <div className="p-3 support-box">Support Kids</div>
            </div>
        </div>
    );
}
