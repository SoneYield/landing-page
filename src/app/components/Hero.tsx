import React from "react";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';
import Link from "next/link";

const Hero = () => {
  return (
    <div>
      <div className="max-w-7xl m-auto h-screen">
        <div className="pt-6 h-full pb-6">
          <div className="rounded-3xl bg-layer p-8 h-full">
            <div className="rounded-3xl bg-block p-8 h-full flex flex-col justify-between">
              <Navbar />
              <div className="text-center">
                <h2 className="text-5xl font-medium">Maximum Returns in</h2>
                <h2 className="text-5xl font-medium">DeFi with Minimum Effort</h2>
                <h3 className="text-xl mt-3">Grow Your Assets Smartly with SoneYield</h3>
                <Link href={'https://alpha-v1.soneyield.com/'}><button className="text-gray-600 font-thin bg-button hover:bg-layer hover:text-text custom-border duration-500 ease-in-out px-4 py-2 rounded-lg mt-3">Launch Dapp</button></Link>
              </div>
              <div className="flex gap-3 mx-auto items-center">
                <Link href={'#'}><FontAwesomeIcon className="w-8 hover:text-button duration-500 ease-in-out" icon={faTwitter}/></Link>
                <Link href={'#'}><FontAwesomeIcon className="w-8 hover:text-button duration-500 ease-in-out" icon={faDiscord}/></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
