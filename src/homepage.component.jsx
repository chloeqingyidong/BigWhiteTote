import React from 'react';
import './homepage.styles.scss';

const HomePage = () => (
    <div className = 'homepage'>
        <div className = 'directory-menu'>
            <div className = 'menu-item'>
                <div className = 'content'>
                    <h1 className = 'title'>#007</h1>
                    <span className = 'subtitle'>LOOKBOOK</span>
                </div>
            </div>
            <div className = 'menu-item'>
                <div className = 'content'>
                    <h1 className = 'title'>#006</h1>
                    <span className = 'subtitle'>LOOKBOOK</span>
                </div>
            </div>
            <div className = 'menu-item'>
                <div className = 'content'>
                    <h1 className = 'title'>BWT©</h1>
                    <span className = 'subtitle'>LOOKBOOK</span>
                </div>
            </div>
            <div className = 'menu-item'>
                <div className = 'content'>
                    <h1 className = 'title'>WOMEN</h1>
                    <span className = 'subtitle'>SHOP</span>
                </div>
            </div>
            <div className = 'menu-item'>
                <div className = 'content'>
                    <h1 className = 'title'>MEN</h1>
                    <span className = 'subtitle'>SHOP</span>
                </div>
            </div>
        </div>
    </div>
);

export default HomePage;
