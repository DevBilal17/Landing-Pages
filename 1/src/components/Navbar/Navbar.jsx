import React from "react";
import profileImg from "../../assets/me.jpeg";
const Navbar = () => {
  return (
    <div className="bg-[#030406] text-white">
      <nav className="container mx-auto pt-6 flex items-center justify-between flex-wrap gap-3 px-3">
        <a href="/" className="inline-flex">
          <h2 className="text-2xl font-bold">2rism</h2>
          <img src="/favicon.svg" alt="" className="-mt-4  object-contain"/>
        </a>

        <ul className="lg:flex hidden items-center space-x-12">
          <li className="text-white/70 transition hover:text-white cursor-pointer"><a href="#">home</a></li>
          <li className="text-white/70 transition hover:text-white cursor-pointer"><a href="#">hotels</a></li>
          <li className="text-white/70 transition hover:text-white cursor-pointer"><a href="#">restaurants</a></li>
          <li className="text-white/70 transition hover:text-white cursor-pointer"><a href="#">tours</a></li>
          <li className="text-white/70 transition hover:text-white cursor-pointer"><a href="#">destinations</a></li>
          <li className="text-white/70 transition hover:text-white cursor-pointer"><a href="#">activities</a></li>
          <li className="text-white/70 transition hover:text-white cursor-pointer"><a href="#">contact</a></li>
        </ul>

        <div className="flex gap-2">
          <div>
            <p className="text-right text-white/50">Hola,</p>
            <h4 className="font-medium">M. Bilal</h4>
          </div>
          <div className="h-12 w-12 rounded-full overflow-hidden">
            <img src={profileImg} alt=""  />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
