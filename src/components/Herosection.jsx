import React from "react";

export default function Herosection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-start text-white container">
      {/* Background Image */}
      <img
        src="/puplic/assets/imgs/image.png"
        alt="Background"
        className="absolute top-1/2 left-1/2 w-[90%] h-[80%] object-cover rounded-3xl -translate-x-1/2 -translate-y-1/2 -z-10"
      />

      {/* Content */}
      <div className="flex flex-col items-start justify-center w-[40%] p-8 gap-6">
        <h1 className="text-7xl font-bold text-black">Air, sleep, dream</h1>
        <p className="text-xl text-black">Find and book a great experience.</p>
        <button className="btn btn-primary rounded-3xl shadow text-white">
          Start your search
        </button>
      </div>
    </section>
  );
}

// import React from "react";

// export default function Herosection() {
//   return (
//     <section className="relative w-full h-screen flex flex-col text-white">
//       {/* Navbar */}
//       <nav className="absolute top-0 left-0 w-full flex justify-between items-center p-6 z-10">
//         <h2 className="text-2xl font-bold text-white">Logo</h2>
//         <ul className="flex gap-6 text-lg font-medium">
//           <li><a href="#" className="hover:text-gray-300">Home</a></li>
//           <li><a href="#" className="hover:text-gray-300">About</a></li>
//           <li><a href="#" className="hover:text-gray-300">Contact</a></li>
//         </ul>
//       </nav>

//       {/* Background Image */}
//       <img
//         src="/assets/imgs/image.png"
//         alt="Background"
//         className="absolute top-0 left-0 w-full h-[80%] object-cover rounded-b-3xl -z-10"
//       />

//       {/* Content */}
//       <div className="flex flex-col items-start justify-center w-[40%] p-8 gap-6 h-full">
//         <h1 className="text-7xl font-bold text-black">Air, sleep, dream</h1>
//         <p className="text-lg text-black">Find and book a great experience.</p>
//         <button className="btn btn-primary rounded-3xl shadow text-white">
//           Start your search
//         </button>
//       </div>
//     </section>
//   );
// }
