import Image from "next/image";
import Navbar from "@/components/Navbar";
import { RiArrowRightWideLine } from "react-icons/ri";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="Body p-1 mx-auto max-w-4xl">
        <h1 className="font-bold text-lg mx-1 my-2">Tools</h1>
        <div className="Tools">
          <Link href="tools/ytdownloader">
          <div className="YTdownloader px-2 w-2/3 md:w-1/3 h-32 bg-gradient-to-tr hover:bg-gradient-to-bl from-red-600 hover:from-red-700 to-rose-500 hover:to-rose-500 text-gray-100 border rounded-lg shadow-lg flex justify-between items-center">
            <div className="YTdownloader__content">
              <h2 className="font-bold text-lg mx-1 my-1">
                YouTube Downloader
              </h2>
              <p className="mx-1 my-1 text-sm">
                Download YouTube videos in MP4 format.
              </p>
            </div>
            <RiArrowRightWideLine className="text-4xl text-center" />
          </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
