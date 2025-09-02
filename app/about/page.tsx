import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import Banner from "@/app/components/Home/Banner";
import contentData from "@/components/Content/about.json";
import ContactInfo from "@/components/Content/ContactInfo.json";

export const metadata: Metadata = {
  title: {
    absolute: contentData.metaTitle,
  },
  description: contentData.metaDescription,
  alternates: {
    canonical: `${ContactInfo.baseUrl}about/`,
  },
};
const page = () => {
  const text = `text-[#f76610]`;
  const btn = `bg-[#f76610] hover:bg-[#191e34]`;
  return (
    <div className="max-[1200px] flex flex-col items-center justify-center  bg-white text-black ">
      <div className="  w-screen min-w-[375px] cursor-default  text-lg md:w-full">
        {/* poster */}
        <Banner
          h1={contentData.h1Banner}
          image={contentData.bannerImage}
          header={contentData.bannerQuote}
          p1={contentData.metaDescription}
        />
        {/* poster */}
        {/* -----------------------------------------About Start------------------------ */}
        <div className="mx-4 mt-6 print:hidden md:mx-10">
          {/* who */}
          <div className="my-20 grid  w-full grid-cols-1 items-center justify-center gap-6 px-8 md:grid-cols-2">
            <div className="flex flex-col justify-center    ">
              <div className="text-">ABOUT </div>
              <div className="text-3xl font-bold ">
                {" "}
                Who We Are?<br></br>
              </div>
              <div className="mt-6 "></div>
              <div
                className="  text-justify"
                dangerouslySetInnerHTML={{ __html: contentData.p2 }}
              ></div>
            </div>
            <div className="w-full pt-10">
              <Image
                src={`${contentData.h2Image}`}
                className="rounded-lg border object-cover  shadow-lg "
                alt={
                  contentData.h2Image.split("/").pop()?.split(".")[0] || "image"
                }
                width={1000}
                height={1000}
              />
            </div>
          </div>
          {/* who */}
        </div>
        {/* -----------------------------------------About End------------------------ */}
        {/* Mission */}
        <div className="relative mx-4 mt-6 flex h-full flex-col gap-8 md:mx-10 md:flex-row  md:px-32">
          <div className="grid  w-full grid-cols-1 gap-8 rounded-lg p-4 md:grid-cols-3 ">
            <div className="rounded-lg border-[3px]  border-main duration-300 ease-in-out  hover:bg-main hover:text-white ">
              <h2 className="p-2 text-center text-2xl font-bold">
                {contentData.missionSection[0].title}
              </h2>
              <div
                className=" p-4 text-center"
                dangerouslySetInnerHTML={{
                  __html: contentData.missionSection[0].description,
                }}
              ></div>
            </div>

            <div className="rounded-lg border-[3px]  border-main bg-main  text-white duration-300 ease-in-out  hover:bg-transparent hover:text-black ">
              <h2 className="p-2 text-center text-2xl font-bold">
                {contentData.missionSection[1].title}
              </h2>
              <div
                className=" p-4 text-center"
                dangerouslySetInnerHTML={{
                  __html: contentData.missionSection[1].description,
                }}
              ></div>
            </div>

            <div className="rounded-lg border-[3px] border-main duration-300 ease-in-out  hover:bg-main hover:text-white ">
              <h2 className="p-2 text-center text-2xl font-bold">
                {contentData.missionSection[2].title}
              </h2>
              <div
                className=" p-4 text-center"
                dangerouslySetInnerHTML={{
                  __html: contentData.missionSection[2].description,
                }}
              ></div>
            </div>
          </div>
        </div>
        {/* Mission */}
        {/* -----------------------------------------Conversation ------------------------ */}
        <div className="my-20">
          <div className={`text-center text-4xl font-extrabold text-main`}>
            Let&apos;s Start a Conversation
          </div>
          <div className="mt-4 border-double text-center">
            <button
              className={`mt-3 rounded-lg bg-main px-4 py-3 font-bold tracking-wide text-white shadow-lg hover:bg-minor`}
            >
              <a id="cta-id" href={`tel:${ContactInfo.tel}`}>
                {" "}
                {ContactInfo.No}
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
