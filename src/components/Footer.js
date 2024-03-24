import React from "react";
import github from "../images/github.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="grid grid-cols-12 col-span-12 justify-center items-center bg-[#283136]">
      <div className="grid grid-cols-12 col-span-12 justify-center p-16 items-center text-white border-b-2 border-white mx-16">
        <div className="flex flex-col col-span-3 col-start-4">
          <h3 className="italic text-xl font-semibold">Learn</h3>
          <span className="">Coaching</span>
          <span className="">About us</span>
          <span className="">Speaking</span>
        </div>
        <div className="flex flex-col col-span-3">
          <Link to="/">
            <h1>Reading Matters</h1>
          </Link>
        </div>
        <div className="flex flex-col col-span-3">
          <h3 className="italic text-xl font-semibold">Explore</h3>
          <span className="">Books</span>
          <span className="">Blog</span>
          <span className="">Resources</span>
        </div>
      </div>
      <div className="">
        <div> Motherfucker !!! </div>
      </div>
      <footer className="col-span-12 footer wrapper">
        <h1>Reading Matters</h1>
        <h2 className="text-center">
          Copyright © 2023<span> IshitaRaina. </span>All rights reserved.
        </h2>
        <img className="img-fluid" src={github} alt="Github" />
      </footer>
    </div>
  );
}
