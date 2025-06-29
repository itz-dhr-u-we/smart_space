"use client";
import React from "react";
import Image from "next/image";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <section className="hidden w-1/2 items-center justify-center bg-brand p-10 lg:flex xl:w-2/5">
        <div className="flex max-h-[800px] max-w-[430px] flex-col justify-center space-y-12">
          <span className="text-6xl font-bold tracking-tight text-primary">
          SMART SPACE
          </span> 
          
          <div className="space-y-5 text-white">
            <h1 className="h1">All your documents, one smart solution</h1>
            <p className="body-1">
              Keep everything organized, secure, and just a click away.
            </p>
          </div>
          <Image
            src="/assets/images/files.png"
            alt="Files"
            width={342}
            height={342}
            className="cursor-pointer transition-transform duration-300 ease-in-out hover:rotate-6 hover:scale-110"

            draggable="false"

          />
        </div>
      </section>

      <section className="flex flex-1 flex-col items-center bg-white p-4 py-10 lg:justify-center lg:p-10 lg:py-0">
        <div className="mb-16 lg:hidden">
          
        </div>

        {children}
      </section>
    </div>
  );
};

export default Layout;
