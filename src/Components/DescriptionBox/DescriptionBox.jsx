import React  from 'react';
import './DescriptionBox.css';


const DescriptionBox = () => {
    return(
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className='descriptionbox-nav-box'>Description</div>
                <div className='descriptionbox-nav-box fade'>Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>An E-Commerce website is ann online platform tht facilitate
                    buying and selling of products or services over the internent serves as a virtual marketplace where
                    businesses and individual showcase their products , interact with customers, and conduct
                    transacrions without the need for a physical presence.E-Commerce websites gained immense popularity
                    due their convening accessibility, and the global reach they offer. </p>
                <p>E-Commerce websites typically display products or services and detailed descriptions, 
                    images, prices, and any available variation (eg., sizes,colors). Each product usually has its own 
                    dedicated with relevany information.</p>
            </div>


        </div>
    )
}
export default DescriptionBox;