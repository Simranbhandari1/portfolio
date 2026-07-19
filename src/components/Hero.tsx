// import Image from 'next/image';

// export default function Hero() {
//   return (
//     <section className="relative min-h-screen overflow-hidden bg-[#030712] text-white">
//       {/* Background Glow */}
//       <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-sky-500/20 blur-[180px]" />

//       <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center justify-between gap-14 px-6 pt-28 lg:flex-row">
//         {/* Left Side */}
//         <div className="max-w-2xl">
//           <span className="rounded-full border border-sky-500/30 bg-sky-500/10 px-5 py-2 text-sm text-sky-400">
//             Available for Internship & Full-Time
//           </span>

//           <h2 className="mt-8 text-xl text-gray-400">Hello, I'm</h2>

//           <h1 className="mt-2 text-6xl font-extrabold leading-none md:text-8xl">
//             SIMRAN
//             <br />
//             {/* <span className="text-sky-400">BHANDARI</span> */}
//           </h1>

//           <h3 className="mt-8 text-2xl font-semibold text-gray-200">
//             MERN Stack Developer
//           </h3>

//           <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
//             Passionate about building scalable, responsive and high-performance
//             web applications using React, Next.js, Node.js, Express and MongoDB.
//           </p>

//           <div className="mt-10 flex flex-wrap gap-5">
//             <button className="rounded-xl bg-sky-500 px-7 py-4 font-semibold transition hover:scale-105 hover:bg-sky-400">
//               View Projects
//             </button>

//             <button className="rounded-xl border border-gray-700 px-7 py-4 transition hover:border-sky-500 hover:bg-sky-500/10">
//               Download Resume
//             </button>
//           </div>

//           <div className="mt-12 flex flex-wrap gap-3">
//             {[
//               'React',
//               'Next.js',
//               'Node.js',
//               'Express',
//               'MongoDB',
//               'Tailwind',
//             ].map((skill) => (
//               <span
//                 key={skill}
//                 className="rounded-full border border-gray-700 px-5 py-2 text-sm text-gray-300"
//               >
//                 {skill}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Right Side */}
//         <div className="relative">
//           <div className="absolute inset-0 rounded-full bg-sky-500 blur-3xl opacity-20" />

//           <div className="relative h-[420px] w-[420px] overflow-hidden rounded-full border-4 border-sky-500/40 bg-[#111827]">
//             <Image
//               src="/profile.jpg"
//               alt="Profile"
//               fill
//               className="object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#030712] text-white">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-sky-500/15 blur-[180px]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center justify-between gap-16 px-6 pt-28 lg:flex-row lg:px-10">
        {/* Left Side */}
        <div className="max-w-xl text-center lg:text-left">
          {/* Status Badge */}
          <span className="inline-flex rounded-full border border-sky-500/30 bg-sky-500/10 px-5 py-2 text-sm font-medium text-sky-400">
            🚀 Available for Internship & Full-Time
          </span>

          {/* Greeting */}
          <p className="mt-8 text-xl text-gray-400">Hello, I'm</p>

          {/* Name */}
          <h1 className="mt-2 text-7xl font-black leading-none tracking-tight md:text-8xl">
            SIMRAN
          </h1>

          {/* Role */}
          <h2 className="mt-6 text-3xl font-semibold text-white">
            MERN Stack Developer
          </h2>

          {/* Description */}
          <p className="mt-6 text-lg leading-8 text-gray-400">
            I build modern, scalable and user-focused web applications using
            React, Next.js, Node.js and MongoDB.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-5 lg:justify-start">
            <button className="rounded-xl bg-sky-500 px-7 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-sky-400">
              Explore Projects
            </button>

            <button className="rounded-xl border border-gray-700 px-7 py-4 font-semibold transition duration-300 hover:border-sky-500 hover:bg-sky-500/10">
              Resume ↓
            </button>
          </div>

          {/* Skills */}
          <div className="mt-12 flex flex-wrap justify-center gap-3 lg:justify-start">
            {['React', 'Next.js', 'Node.js', 'MongoDB'].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-gray-700 px-5 py-2 text-sm text-gray-300 transition hover:border-sky-500 hover:text-sky-400"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="relative">
          {/* Glow */}
          <div className="absolute inset-0 rounded-full bg-sky-500/20 blur-3xl" />

          {/* Profile Image */}
          <div className="relative h-[360px] w-[360px] overflow-hidden rounded-full border-2 border-sky-500/40 bg-[#111827] shadow-[0_0_50px_rgba(14,165,233,0.15)] md:h-[430px] md:w-[430px]">
            <Image
              src="/profile.jpg"
              alt="Simran"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
