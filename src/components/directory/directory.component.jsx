import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss'

class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections:[
            {
              title: '當季 | New',
              imageUrl: 'https://i.ibb.co/nBM6TSK/6-D28-FC89-8-A94-4-ED3-B59-C-53-B4500-CD6-DE.jpg',
              id: 1,
              linkUrl: 'shop/new'
            },
            {
              title: '街頭 | Street',
              imageUrl: 'https://i.ibb.co/q5XMsH7/1-A16-C4-D5-FB49-46-E2-8665-EF95-C23-EEB1-A.jpg',
              id: 2,
              linkUrl: 'shop/street'
            },
            {
              title: '都市 | Urban',
              imageUrl: 'https://i.ibb.co/09M07dJ/3-DD9-E8-D2-9094-4185-AB44-5-D2-C5726046-F.jpg',
              id: 3,
              linkUrl: 'shop/urban'
            },
            {
              title: '首創 | Origin',
              imageUrl: 'https://i.ibb.co/VJpnmcx/IMG-7996.jpg',
              id: 4,
              linkUrl: 'shop/urban'
            },
            {
              title: 'Big WHhite Tote ©',
              imageUrl: 'https://i.ibb.co/31LWR68/BWTCOVER.jpg',
              id: 5,
              size: 'large',
              linkUrl: 'shop/all'
            }]
        };
    };

    render() {
        return (
            <div className = 'directory-menu'>
                {
                    this.state.sections.map(({ title, imageUrl, id, linkUrl, size }) => (
                    <MenuItem key = {id} title = {title} imageUrl = {imageUrl} size= {size} />
                    ))
                }
            </div>
        );
    };
};

export default Directory;