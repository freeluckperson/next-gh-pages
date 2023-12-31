import React from "react";
import Image from "next/image";
import Right from "../icons/Right";

export default function Hero() {
  return (
    <>
      <section className="hero mt-4">
        <div className="py-12">
          <h1 className="text-4xl font-semibold">
            Everything <br />
            is better <br /> with a <span className="text-primary">Pizza</span>
          </h1>
          <p className="my-4 text-gray-500 text-sm">
            Pizza is the missing piece that makes every day complete, a simple
            yet delicious joy in life
          </p>
          <div className="flex gap-4 text-sm">
            <button className="bg-primary uppercase font-semibold flex items-center gap-2 text-white px-4 py-2 rounded-full hover:bg-secondary hover:text-gray-700">
              Order now
              <Right />
            </button>
            <button className="flex gap-2 py-2 text-gray-600 font-semibold">
              Learn moore
              <Right />
            </button>
          </div>
        </div>
        <div className="h-160 w-160 relative">
          <Image
            src={"/pizza.png"}
            layout={"fill"}
            objectFit={"contain"}
            alt={"pizza"}
          />
        </div>
      </section>
    </>
  );
}
