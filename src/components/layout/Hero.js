import React from "react";
import Image from "next/image";
import Right from "../icons/Right";

// const Cards = () => {
//   return (
//     <>
//       <section class="text-gray-400 body-font">
//         <div class="container py-24 mx-auto" bis_skin_checked="1">
//           <div class="flex flex-wrap -m-4" bis_skin_checked="1">
//             <div class="p-4 md:w-1/3" bis_skin_checked="1">
//               <div
//                 class="h-full border-2 border-g rounded-lg overflow-hidden"
//                 bis_skin_checked="1"
//               >
//                 <Image
//                   class="lg:h-48 md:h-36 w-full object-contain object-center"
//                   width={100}
//                   height={100}
//                   src={"/pizza.png"}
//                   alt="blog"
//                 />
//                 <div class="p-6" bis_skin_checked="1">
//                   <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
//                     CATEGORY
//                   </h2>
//                   <h1 class="title-font text-lg font-medium text-white mb-3">
//                     The Catalyzer
//                   </h1>
//                   <p class="leading-relaxed mb-3">
//                     Photo booth fam kinfolk cold-pressed sriracha leggings
//                     jianbing microdosing tousled waistcoat.
//                   </p>
//                   <div
//                     class="flex items-center flex-wrap "
//                     bis_skin_checked="1"
//                   >
//                     <a class="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0">
//                       Learn More
//                       <svg
//                         class="w-4 h-4 ml-2"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                         stroke-width="2"
//                         fill="none"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                       >
//                         <path d="M5 12h14"></path>
//                         <path d="M12 5l7 7-7 7"></path>
//                       </svg>
//                     </a>
//                     <span class="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-g">
//                       <svg
//                         class="w-4 h-4 mr-1"
//                         stroke="currentColor"
//                         stroke-width="2"
//                         fill="none"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         viewBox="0 0 24 24"
//                       >
//                         <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
//                         <circle cx="12" cy="12" r="3"></circle>
//                       </svg>
//                       1.2K
//                     </span>
//                     <span class="text-gray-500 inline-flex items-center leading-none text-sm">
//                       <svg
//                         class="w-4 h-4 mr-1"
//                         stroke="currentColor"
//                         stroke-width="2"
//                         fill="none"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         viewBox="0 0 24 24"
//                       >
//                         <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
//                       </svg>
//                       6
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div class="p-4 md:w-1/3" bis_skin_checked="1">
//               <div
//                 class="h-full border-2 border-g rounded-lg overflow-hidden"
//                 bis_skin_checked="1"
//               >
//                 <Image
//                   class="lg:h-48 md:h-36 w-full object-contain object-center"
//                   width={100}
//                   height={100}
//                   src={"/pizza.png"}
//                   alt="blog"
//                 />
//                 <div class="p-6" bis_skin_checked="1">
//                   <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
//                     CATEGORY
//                   </h2>
//                   <h1 class="title-font text-lg font-medium text-white mb-3">
//                     The 400 Blows
//                   </h1>
//                   <p class="leading-relaxed mb-3">
//                     Photo booth fam kinfolk cold-pressed sriracha leggings
//                     jianbing microdosing tousled waistcoat.
//                   </p>
//                   <div class="flex items-center flex-wrap" bis_skin_checked="1">
//                     <a class="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0">
//                       Learn More
//                       <svg
//                         class="w-4 h-4 ml-2"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                         stroke-width="2"
//                         fill="none"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                       >
//                         <path d="M5 12h14"></path>
//                         <path d="M12 5l7 7-7 7"></path>
//                       </svg>
//                     </a>
//                     <span class="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-g">
//                       <svg
//                         class="w-4 h-4 mr-1"
//                         stroke="currentColor"
//                         stroke-width="2"
//                         fill="none"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         viewBox="0 0 24 24"
//                       >
//                         <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
//                         <circle cx="12" cy="12" r="3"></circle>
//                       </svg>
//                       1.2K
//                     </span>
//                     <span class="text-gray-500 inline-flex items-center leading-none text-sm">
//                       <svg
//                         class="w-4 h-4 mr-1"
//                         stroke="currentColor"
//                         stroke-width="2"
//                         fill="none"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         viewBox="0 0 24 24"
//                       >
//                         <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
//                       </svg>
//                       6
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div class="p-4 md:w-1/3" bis_skin_checked="1">
//               <div
//                 class="h-full border-2 border-g rounded-lg overflow-hidden"
//                 bis_skin_checked="1"
//               >
//                 <Image
//                   class="lg:h-48 md:h-36 w-full object-contain object-center"
//                   width={100}
//                   height={100}
//                   src={"/pizza.png"}
//                   alt="blog"
//                 />
//                 <div class="p-6" bis_skin_checked="1">
//                   <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
//                     CATEGORY
//                   </h2>
//                   <h1 class="title-font text-lg font-medium text-white mb-3">
//                     The 400 Blows
//                   </h1>
//                   <p class="leading-relaxed mb-3">
//                     Photo booth fam kinfolk cold-pressed sriracha leggings
//                     jianbing microdosing tousled waistcoat.
//                   </p>
//                   <div class="flex items-center flex-wrap" bis_skin_checked="1">
//                     <a class="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0">
//                       Learn More
//                       <svg
//                         class="w-4 h-4 ml-2"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                         stroke-width="2"
//                         fill="none"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                       >
//                         <path d="M5 12h14"></path>
//                         <path d="M12 5l7 7-7 7"></path>
//                       </svg>
//                     </a>
//                     <span class="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-g">
//                       <svg
//                         class="w-4 h-4 mr-1"
//                         stroke="currentColor"
//                         stroke-width="2"
//                         fill="none"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         viewBox="0 0 24 24"
//                       >
//                         <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
//                         <circle cx="12" cy="12" r="3"></circle>
//                       </svg>
//                       1.2K
//                     </span>
//                     <span class="text-gray-500 inline-flex items-center leading-none text-sm">
//                       <svg
//                         class="w-4 h-4 mr-1"
//                         stroke="currentColor"
//                         stroke-width="2"
//                         fill="none"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         viewBox="0 0 24 24"
//                       >
//                         <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
//                       </svg>
//                       6
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div class="p-4 md:w-1/3" bis_skin_checked="1">
//               <div
//                 class="h-full border-2 border-g rounded-lg overflow-hidden"
//                 bis_skin_checked="1"
//               >
//                 <Image
//                   class="lg:h-48 md:h-36 w-full object-contain object-center"
//                   width={100}
//                   height={100}
//                   src={"/pizza.png"}
//                   alt="blog"
//                 />
//                 <div class="p-6" bis_skin_checked="1">
//                   <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
//                     CATEGORY
//                   </h2>
//                   <h1 class="title-font text-lg font-medium text-white mb-3">
//                     The 400 Blows
//                   </h1>
//                   <p class="leading-relaxed mb-3">
//                     Photo booth fam kinfolk cold-pressed sriracha leggings
//                     jianbing microdosing tousled waistcoat.
//                   </p>
//                   <div class="flex items-center flex-wrap" bis_skin_checked="1">
//                     <a class="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0">
//                       Learn More
//                       <svg
//                         class="w-4 h-4 ml-2"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                         stroke-width="2"
//                         fill="none"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                       >
//                         <path d="M5 12h14"></path>
//                         <path d="M12 5l7 7-7 7"></path>
//                       </svg>
//                     </a>
//                     <span class="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-g">
//                       <svg
//                         class="w-4 h-4 mr-1"
//                         stroke="currentColor"
//                         stroke-width="2"
//                         fill="none"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         viewBox="0 0 24 24"
//                       >
//                         <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
//                         <circle cx="12" cy="12" r="3"></circle>
//                       </svg>
//                       1.2K
//                     </span>
//                     <span class="text-gray-500 inline-flex items-center leading-none text-sm">
//                       <svg
//                         class="w-4 h-4 mr-1"
//                         stroke="currentColor"
//                         stroke-width="2"
//                         fill="none"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         viewBox="0 0 24 24"
//                       >
//                         <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
//                       </svg>
//                       6
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div class="p-4 md:w-1/3" bis_skin_checked="1">
//               <div
//                 class="h-full border-2 border-g rounded-lg overflow-hidden"
//                 bis_skin_checked="1"
//               >
//                 <Image
//                   class="lg:h-48 md:h-36 w-full object-contain object-center"
//                   width={100}
//                   height={100}
//                   src={"/pizza.png"}
//                   alt="blog"
//                 />
//                 <div class="p-6" bis_skin_checked="1">
//                   <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
//                     CATEGORY
//                   </h2>
//                   <h1 class="title-font text-lg font-medium text-white mb-3">
//                     The 400 Blows
//                   </h1>
//                   <p class="leading-relaxed mb-3">
//                     Photo booth fam kinfolk cold-pressed sriracha leggings
//                     jianbing microdosing tousled waistcoat.
//                   </p>
//                   <div class="flex items-center flex-wrap" bis_skin_checked="1">
//                     <a class="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0">
//                       Learn More
//                       <svg
//                         class="w-4 h-4 ml-2"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                         stroke-width="2"
//                         fill="none"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                       >
//                         <path d="M5 12h14"></path>
//                         <path d="M12 5l7 7-7 7"></path>
//                       </svg>
//                     </a>
//                     <span class="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-g">
//                       <svg
//                         class="w-4 h-4 mr-1"
//                         stroke="currentColor"
//                         stroke-width="2"
//                         fill="none"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         viewBox="0 0 24 24"
//                       >
//                         <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
//                         <circle cx="12" cy="12" r="3"></circle>
//                       </svg>
//                       1.2K
//                     </span>
//                     <span class="text-gray-500 inline-flex items-center leading-none text-sm">
//                       <svg
//                         class="w-4 h-4 mr-1"
//                         stroke="currentColor"
//                         stroke-width="2"
//                         fill="none"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         viewBox="0 0 24 24"
//                       >
//                         <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
//                       </svg>
//                       6
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div class="p-4 md:w-1/3" bis_skin_checked="1">
//               <div
//                 class="h-full border-2 border-g rounded-lg overflow-hidden"
//                 bis_skin_checked="1"
//               >
//                 <Image
//                   class="lg:h-48 md:h-36 w-full object-contain object-center"
//                   width={100}
//                   height={100}
//                   src={"/pizza.png"}
//                   alt="blog"
//                 />
//                 <div class="p-6" bis_skin_checked="1">
//                   <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
//                     CATEGORY
//                   </h2>
//                   <h1 class="title-font text-lg font-medium text-white mb-3">
//                     Shooting Stars
//                   </h1>
//                   <p class="leading-relaxed mb-3">
//                     Photo booth fam kinfolk cold-pressed sriracha leggings
//                     jianbing microdosing tousled waistcoat.
//                   </p>
//                   <div
//                     class="flex items-center flex-wrap "
//                     bis_skin_checked="1"
//                   >
//                     <a class="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0">
//                       Learn More
//                       <svg
//                         class="w-4 h-4 ml-2"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                         stroke-width="2"
//                         fill="none"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                       >
//                         <path d="M5 12h14"></path>
//                         <path d="M12 5l7 7-7 7"></path>
//                       </svg>
//                     </a>
//                     <span class="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-g">
//                       <svg
//                         class="w-4 h-4 mr-1"
//                         stroke="currentColor"
//                         stroke-width="2"
//                         fill="none"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         viewBox="0 0 24 24"
//                       >
//                         <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
//                         <circle cx="12" cy="12" r="3"></circle>
//                       </svg>
//                       1.2K
//                     </span>
//                     <span class="text-gray-500 inline-flex items-center leading-none text-sm">
//                       <svg
//                         class="w-4 h-4 mr-1"
//                         stroke="currentColor"
//                         stroke-width="2"
//                         fill="none"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         viewBox="0 0 24 24"
//                       >
//                         <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
//                       </svg>
//                       6
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

export default function Hero() {
  return (
    <>
      <section className="hero">
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
      {/* <Cards /> */}
    </>
  );
}
