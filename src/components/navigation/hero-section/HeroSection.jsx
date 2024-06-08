import React from 'react';
import image from '../.././../Assets/heroimage.jpg'
import Contanier from '../../../container/Contanier';
const HeroSection = () => {
    return (
        <div
            className="bg-cover bg-center h-[700px] flex items-center justify-center"
            style={{ backgroundImage: `url(${image})` }}
        >
            <Contanier>
                <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold text-center">
                    Welcome to Bagdad Phone Store
                </h1>
            </Contanier>
        </div>
    );
};

export default HeroSection;
