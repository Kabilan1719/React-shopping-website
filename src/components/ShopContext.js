import React, { createContext, useState } from 'react'
export const ShopContext = createContext();

const ShopArray = ({children}) => {
    const [products, setProducts] = useState([
        {
            id : 1,
            img : 'https://static.wixstatic.com/media/c22c23_67a4de6683784fbbb684418e49d5d854~mv2.png/v1/fill/w_373,h_373,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_67a4de6683784fbbb684418e49d5d854~mv2.png',
            Name : 'Sheer 10.2" Tablet with Wi-Fi , 32GB',
            Price : '$85.00',
            Discount : null,
            Sale : false
        },
        {
            id : 2,
            img : 'https://static.wixstatic.com/media/c22c23_9a6d29ecf9c640b28cc79f695e9fb3c2~mv2.png/v1/fill/w_373,h_373,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_9a6d29ecf9c640b28cc79f695e9fb3c2~mv2.png',
            Name : 'JP - Space Tablet 10.4" Wi-Fi 32GB',
            Price : '$85.00',
            Discount : '$70.00',
            Sale : true
        },
        {
            id : 3,
            img : 'https://static.wixstatic.com/media/c22c23_23738414163d418092290f6b9becc5f5~mv2.png/v1/fill/w_373,h_373,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_23738414163d418092290f6b9becc5f5~mv2.png',
            Name : 'Pilates Go 10.5" Touch-Screen, 64GB With Cover',
            Price : '$85.00',
            Discount : null,
            Sale : false
        },
        {
            id : 4,
            img : 'https://static.wixstatic.com/media/c22c23_5669a61229d34b15b7ff71c4f2269a4b~mv2.png/v1/fill/w_373,h_373,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_5669a61229d34b15b7ff71c4f2269a4b~mv2.png',
            Name : 'Ove Tablet FD Plus - 10.3",32GB',
            Price : '$85.00',
            Discount : '$70.00',
            Sale : true
        },
        {
            id : 5,
            img : 'https://static.wixstatic.com/media/c22c23_91ee238e5ee447878278fd04f4d3fafe~mv2.png/v1/fill/w_373,h_373,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_91ee238e5ee447878278fd04f4d3fafe~mv2.png',
            Name : 'Sheer Pro 7.9-Inch Mini Tablet',
            Price : '$85.00',
            Discount : '$70.00',
            Sale : true
        },
        {
            id : 6,
            img : 'https://static.wixstatic.com/media/c22c23_a055ae2dfe6f457b9c2f6f3fa6d95126~mv2.png/v1/fill/w_373,h_373,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_a055ae2dfe6f457b9c2f6f3fa6d95126~mv2.png',
            Name : 'Ocean Pro 11 - 12.3" Touch Screen',
            Price : '$85.00',
            Discount : '$70.00',
            Sale : true
        },
        {
            id : 7,
            img : 'https://static.wixstatic.com/media/c22c23_597373dec7644ad2818277724199fb0c~mv2.png/v1/fill/w_373,h_373,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_597373dec7644ad2818277724199fb0c~mv2.png',
            Name : 'Corr Playtime 10.3", 32GB With Wi-Fi',
            Price : '$85.00',
            Discount : null,
            Sale : false
        },
        {
            id : 8,
            img : 'https://static.wixstatic.com/media/c22c23_01a8a61a9f6c4e3a97711b8c684050e9~mv2.png/v1/fill/w_373,h_373,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_01a8a61a9f6c4e3a97711b8c684050e9~mv2.png',
            Name : 'Pilates 14" Touch Screen Laptop 12GB Memory',
            Price : '$85.00',
            Discount : null,
            Sale : false
        },
        {
            id : 9,
            img : 'https://static.wixstatic.com/media/c22c23_dbf65eb585cf415ba135313576716352~mv2.png/v1/fill/w_373,h_373,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_dbf65eb585cf415ba135313576716352~mv2.png',
            Name : 'Turn5 Portable Bluetooth Speaker With Handle',
            Price : '$85.00',
            Discount : '$70.00',
            Sale : true
        },
        {
            id : 10,
            img : 'https://static.wixstatic.com/media/c22c23_bb3cb6edf9ff4594817c7a2aaedd2a15~mv2.png/v1/fill/w_373,h_373,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_bb3cb6edf9ff4594817c7a2aaedd2a15~mv2.png',
            Name : 'TV Bluetooth Soundbar With HDMI-ARC Connectivity',
            Price : '$85.00',
            Discount : '$70.00',
            Sale : true
        },
        {
            id : 11,
            img : 'https://static.wixstatic.com/media/c22c23_09339ee46fd441b8bdaf76b3a7081135~mv2.png/v1/fill/w_373,h_373,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_09339ee46fd441b8bdaf76b3a7081135~mv2.png',
            Name : 'Pill Shape Silver Portable Bluetooth Speaker',
            Price : '$85.00',
            Discount : null,
            Sale : false
        },
        {
            id : 12,
            img : 'https://static.wixstatic.com/media/c22c23_d4488c12f2bc40dfbd1bbd82956eb97a~mv2.png/v1/fill/w_373,h_373,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_d4488c12f2bc40dfbd1bbd82956eb97a~mv2.png',
            Name : 'Round Mini Portable Bluetooth Speaker',
            Price : '$85.00',
            Discount : '$70.00',
            Sale : true
        },
        {
            id : 13,
            img : 'https://static.wixstatic.com/media/c22c23_68fb3f3fcf134e91a00a956483ba56f8~mv2.png/v1/fill/w_373,h_373,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_68fb3f3fcf134e91a00a956483ba56f8~mv2.png',
            Name : 'Studio 8 Portable Bluetooth Speaker',
            Price : '$85.00',
            Discount : null,
            Sale : false
        },
        {
            id : 14,
            img : 'https://static.wixstatic.com/media/c22c23_65076c29d2de4910b9376408663514c2~mv2.png/v1/fill/w_373,h_373,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_65076c29d2de4910b9376408663514c2~mv2.png',
            Name : 'Balo Headphones 700 Wireless Noise Cancelling',
            Price : '$85.00',
            Discount : '$70.00',
            Sale : true
        },
        {
            id : 15,
            img : 'https://static.wixstatic.com/media/c22c23_68efa76790cf48a7acdb518977ce72a1~mv2.png/v1/fill/w_373,h_373,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_68efa76790cf48a7acdb518977ce72a1~mv2.png',
            Name : 'Space Buds True Wireless Earbud Headphones',
            Price : '$85.00',
            Discount : null,
            Sale : false
        },
        {
            id : 16,
            img : 'https://static.wixstatic.com/media/c22c23_31759778ff1248978471f8cc44c24f9d~mv2.png/v1/fill/w_373,h_373,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_31759778ff1248978471f8cc44c24f9d~mv2.png',
            Name : 'Drums Pro Wireless On-Ear Headphones',
            Price : '$85.00',
            Discount : null,
            Sale : false
        },
        {
            id : 17,
            img : 'https://static.wixstatic.com/media/c22c23_77c2b89535374768bec1d6337dcdbddc~mv2.jpg/v1/fill/w_373,h_373,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_77c2b89535374768bec1d6337dcdbddc~mv2.jpg',
            Name : 'Shel 50" Class LED 4K UHD Smart TV',
            Price : '$85.00',
            Discount : null,
            Sale : false
        },
        {
            id : 18,
            img : 'https://static.wixstatic.com/media/c22c23_396e7b1e80764edca161180595507710~mv2.jpg/v1/fill/w_373,h_373,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_396e7b1e80764edca161180595507710~mv2.jpg',
            Name : 'Space Moon Smartwatch With Charger',
            Price : '$85.00',
            Discount : '$70.00',
            Sale : true
        },
        {
            id : 19,
            img : 'https://static.wixstatic.com/media/c22c23_75059a72af5e4949aecdfbda8746f4ef~mv2.jpg/v1/fill/w_373,h_373,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_75059a72af5e4949aecdfbda8746f4ef~mv2.jpg',
            Name : 'Fitboot Inspire Fitness Tracker With Heart Rate Tracking',
            Price : '$85.00',
            Discount : '$70.00',
            Sale : true
        },
        {
            id : 20,
            img : 'https://static.wixstatic.com/media/c22c23_35b786fdd0bb443e9ac09561af1569d3~mv2.jpg/v1/fill/w_373,h_373,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_35b786fdd0bb443e9ac09561af1569d3~mv2.jpg',
            Name : 'Safay GEN 2 256GB VR headset With Touch Controllers',
            Price : '$85.00',
            Discount : null,
            Sale : false
        },
        {
            id : 21,
            img : 'https://static.wixstatic.com/media/c22c23_4567980aa0eb4bfba21b3706eaa8b2ca~mv2.jpg/v1/fill/w_373,h_373,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_4567980aa0eb4bfba21b3706eaa8b2ca~mv2.jpg',
            Name : 'FitWatch Fitness Smart Watch',
            Price : '$85.00',
            Discount : null,
            Sale : false
        },
        {
            id : 22,
            img : 'https://static.wixstatic.com/media/c22c23_a79ca5eba4af45bc99bf27f0d9eb637d~mv2.jpg/v1/fill/w_373,h_373,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_a79ca5eba4af45bc99bf27f0d9eb637d~mv2.jpg',
            Name : 'HV Virtual Reality System for PC',
            Price : '$85.00',
            Discount : null,
            Sale : false
        },
        {
            id : 23,
            img : 'https://static.wixstatic.com/media/c22c23_d898eb06de73454788ddf633d055e85b~mv2.jpg/v1/fill/w_373,h_373,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_d898eb06de73454788ddf633d055e85b~mv2.jpg',
            Name : 'Pantony 6P Activity Tracker',
            Price : '$85.00',
            Discount : null,
            Sale : false
        },
        {
            id : 24,
            img : 'https://static.wixstatic.com/media/c22c23_ee8bc28108d44d34b0ed1b312845667f~mv2.jpg/v1/fill/w_373,h_373,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_ee8bc28108d44d34b0ed1b312845667f~mv2.jpg',
            Name : 'FitWatch XDH Fitness Smart Watch',
            Price : '$85.00',
            Discount : null,
            Sale : false
        },
        {
            id : 25,
            img : 'https://static.wixstatic.com/media/c22c23_f37a0a50f81146d7bbaf5edb5803cd9f~mv2.jpg/v1/fill/w_373,h_373,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_f37a0a50f81146d7bbaf5edb5803cd9f~mv2.jpg',
            Name : 'Pantony X21 5G, 128GB With Z Pen',
            Price : '$85.00',
            Discount : null,
            Sale : false
        },
        {
            id : 26,
            img : 'https://static.wixstatic.com/media/c22c23_229835b7ed254c8c95f2b90ef1404ded~mv2.jpg/v1/fill/w_373,h_373,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_229835b7ed254c8c95f2b90ef1404ded~mv2.jpg',
            Name : 'JP Exmax Phantom, 5G, 16GB',
            Price : '$85.00',
            Discount : null,
            Sale : false
        },
    ])
  return (
    <ShopContext.Provider value={{products}}>
        {children}
    </ShopContext.Provider>
  )
}

export default ShopArray