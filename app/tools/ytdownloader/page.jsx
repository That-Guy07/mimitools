"use client";

import React from "react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import axios from "axios";
import { TbArrowBarToDown, TbRefresh } from "react-icons/tb";

const page = () => {
  const [URLvalue, setURLvalue] = useState("");
  const [finalLink, setFinalLink] = useState();
  const [showDownload, setShowDownload] = useState(false);
  const [res, setres] = useState();
  const [inputForm, setInputForm] = useState(true);
  const [buffer, setBuffer] = useState(false);

  const handleDownload = async () => {
    try {
      setInputForm(false);
      setBuffer(true);
      const res = await axios.get(`/api/downloader?url=${URLvalue}`);
      setBuffer(false);
      console.log(res.data);
      setres(res.data);
      setFinalLink(res.data.format.url);
      setShowDownload(true);
    } catch (error) {
      setBuffer(false);
      setInputForm(true);
      console.log(error);
    }
  };

  const handleDownloadAgain = () => {
    setURLvalue("");
    setFinalLink("");
    setShowDownload(false);
    setInputForm(true);
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="flex flex-col justify-center min-h-[70vh] mx-auto max-w-4xl">
        {inputForm && (
          <div className="shadow-lg border min-h-[180px] rounded-lg ">
            <h3 className="my-3 font-semibold text-xl text-center">
              Download Youtube Video
            </h3>
            <div className="flex flex-col items-center">
              <input
                className="h-12 px-2 rounded-full outline-none bg-gray-200 text-gray-500 w-11/12 md:w-1/2 text-center"
                type="text"
                name="inputURL"
                value={URLvalue}
                onChange={(e) => setURLvalue(e.target.value)}
                placeholder="Enter URL"
              />
              <button
                className="bg-red-600 text-gray-200 my-3 rounded-full px-4 py-3 w-32 hover:bg-red-700"
                onClick={handleDownload}
              >
                Get Link
              </button>
            </div>
          </div>
        )}
        {showDownload && (
          <div className="p-2 rounded-lg shadow-lg border">
            <div className="">
              <video className="mb-2 w-full h-auto" src={finalLink} controls>
                Your browser does not support the video.
              </video>
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold line-clamp-1">
                  {res.fileName}
                </h3>
                <div className="flex">
                  <button
                    className="bg-red-600 text-gray-200 rounded-full p-2 md:px-4 md:py-2 hover:bg-red-700 flex items-center"
                    onClick={handleDownloadAgain}
                  >
                    <span className="hidden md:block font-medium">
                      Redownload
                    </span>
                    <TbRefresh className="text-2xl md:ml-1" />
                  </button>
                  <a
                    href={finalLink}
                    download={res.fileName}
                    className="items-center ml-2"
                  >
                    <button className="bg-red-600 text-gray-200 rounded-full p-2 md:px-4 md:py-2 hover:bg-red-700 flex items-center">
                      <span className="hidden md:block font-medium">
                        Download
                      </span>
                      <TbArrowBarToDown className="text-2xl md:ml-1" />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
        {buffer && (
          <div className="p-2 rounded-lg shadow-lg border">
            <div className="animate-pulse">
              <div className="w-full h-56 md:h-[29rem] mb-2 rounded-lg bg-gray-400"></div>
              <div className="flex justify-between">
                <div className="w-2/3 h-10 md:h-12 bg-gray-400 rounded-lg"></div>
                <div className="flex h-10 md:h-12">
                  <div className="rounded-full h-10 md:h-12 w-10 md:w-32 bg-gray-400 mr-3"></div>
                  <div className="rounded-full h-10 md:h-12 w-10 md:w-32 bg-gray-400"></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default page;
