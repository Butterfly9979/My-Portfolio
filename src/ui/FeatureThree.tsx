import React from "react";
import { DollarSign, Zap, Moon, Filter } from "lucide-react";

export function FeatureThree() {
  return (
    <div className="  w-full py-10 mt-10 mb-5">
      <hr className="my-8   w-full" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8  ">
        <div className="mx-auto max-w-xl text-center">
          <div className="mx-auto inline-flex rounded-full bg-gray-100 px-4 py-1.5">
            <p className="text-xs font-semibold uppercase tracking-widest text-black">
              I have done all of projects
            </p>
          </div>
          <h2 className="mt-6 text-3xl font-bold leading-tightsm:text-4xl lg:text-5xl">
            DevUI helps you build beautiful website
          </h2>
          <p className="mt-4 text-base leading-relaxed ">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
              <DollarSign className="h-9 w-9 text-gray-700" />
            </div>
            <h3 className="mt-8 text-lg font-semibold">Secured Payments</h3>
            <p className="mt-4 text-sm ">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
              <Zap className="h-9 w-9 text-gray-700" />
            </div>
            <h3 className="mt-8 text-lg font-semibold ">Fast & Easy to Load</h3>
            <p className="mt-4 text-sm ">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
              <Moon className="h-9 w-9 text-gray-700" />
            </div>
            <h3 className="mt-8 text-lg font-semibold">Light & Dark Version</h3>
            <p className="mt-4 text-sm">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
              <Filter className="h-9 w-9 text-gray-700" />
            </div>
            <h3 className="mt-8 text-lg font-semibold ">Filter Blocks</h3>
            <p className="mt-4 text-sm ">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
