import React from 'react';
import { After, Before, Shade } from '../assets';
import ReactCompareImage from 'react-compare-image';

const VirtualCard = () => {
    return (
        <div className="container-virtual">
            <div className="container-virtual__left">
                <p>Essaie virtuel</p>
                <p>Dire adieu à la mauvaise mine</p>
                <p>Essayez le !</p>
                <img src={Shade} alt="shade" />
            </div>
            <div className="container-virtual__right">
                <div className="container-virtual__right-wrapper">
                    <ReactCompareImage leftImage={Before} rightImage={After} />
                </div>
            </div>
        </div>
    );
};

export default VirtualCard;