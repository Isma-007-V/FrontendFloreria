// eslint-disable-next-line no-unused-vars
import React from 'react'
import BannerImg from "../../assets/website/flores15.png"
import BgTexture from "../../assets/website/Fondo10.jpg"
import {GrSecure} from "react-icons/gr";
// eslint-disable-next-line no-unused-vars
import { MdLocalFlorist } from 'react-icons/md';
// eslint-disable-next-line no-unused-vars
import { FaLeaf } from 'react-icons/fa';
// eslint-disable-next-line no-unused-vars
import { GiFlowerPot } from 'react-icons/gi';



const bgImage = {
  backgroundImage: `url(${BgTexture})`,
  backgroundColor: "#270c03",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%"
};

const Banner = () => {
  return (
    <>
    <div style={bgImage}>
      <div className='container min-h-[550px] flex justify-center items-center py-12 sm:py-0'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
            {/*Seccion de imagen */}
            <div>
                <img src={BannerImg} alt=''className='
                max-w-[430px] w-full mx-auto spin 
                drop-shadow-xl'/>
            </div>

            {/*seccion de texto*/}
            <div className='flex flex-col justify-center
            gap-6 sm:pt-0'>
              <h1 className='text-3xl sm:text-4xl
              font-bold font-cursive'>Premium blen flower</h1>
              <p className='text-sm text-gray-500
              tracking-wide leanding-5'>
              Premium Blend Flowers refers to a curated selection of high-quality, fresh, and often rare flowers chosen for their elegance and beauty. 
              These exclusive blooms are perfect for creating luxurious floral arrangements, ideal for special occasions or as a sophisticated gift.
              </p>
              <div className='grid grid-cols-2 gap-6'>
                <div className='space-y-5'>

                  <div className='flex items-center gap-3'>
                    <MdLocalFlorist className='text-2xl h-12 w-12 shadow-sm p-3 
                    rounded-full bg-red-100'
                    />
                    <span>Premium Bouquet</span>
                  </div>

                  <div className='flex items-center gap-3'>
                    <FaLeaf className='text-2xl h-12 w-12 shadow-sm p-3 
                    rounded-full bg-green-100'
                    />
                    <span>Fast Delivery</span>
                  </div>

                  <div className='flex items-center gap-3'>
                    <GiFlowerPot className='text-2xl h-12 w-12 shadow-sm p-3 
                    rounded-full bg-yellow-100'
                    />
                    <span>Premium Bouquet</span>
                  </div> 
                </div>
                <div className='border-l-4 border-primary/90 pl-6 space-y-3'>
                  <h1 className='text-2xl font-semibold 
                  font-cursive'>
                    clavels lover 
                  </h1>
                  <p className='text-gray-500 text-sm'>
                    {""}
                    clavels lover is a premium flower shop that offers a wide variety of high-quality flowers,
                    including roses, lilies, carnations, and more. Our flowers are sourced from the best.
                  </p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Banner
