export default function About() {
  return (
    <section
      id="about"
      className="bg-[#030712] py-28 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <p className="text-sky-400 font-medium">
          About Me
        </p>

        <h2 className="mt-3 text-5xl font-bold">
          Who I Am
        </h2>

        <div className="mt-12 grid gap-16 lg:grid-cols-2">

          {/* Left */}

          <div>

            <p className="text-lg leading-9 text-gray-400">

              I'm a passionate MERN Stack Developer currently pursuing
              B.Tech in Computer Science Engineering.

            </p>

            <p className="mt-6 text-lg leading-9 text-gray-400">

              I enjoy creating modern, scalable and user-friendly
              applications using React, Next.js, Node.js,
              Express.js and MongoDB.

            </p>

            <p className="mt-6 text-lg leading-9 text-gray-400">

              I'm constantly learning new technologies,
              improving problem-solving skills,
              and building projects that solve real-world problems.

            </p>

          </div>

          {/* Right */}

          <div className="grid grid-cols-2 gap-6">

            <div className="rounded-2xl border border-gray-800 bg-[#111827] p-8">

              <h3 className="text-5xl font-bold text-sky-400">
                6+
              </h3>

              <p className="mt-3 text-gray-400">
                Months Internship
              </p>

            </div>

            <div className="rounded-2xl border border-gray-800 bg-[#111827] p-8">

              <h3 className="text-5xl font-bold text-sky-400">
                10+
              </h3>

              <p className="mt-3 text-gray-400">
                Projects Built
              </p>

            </div>

            <div className="rounded-2xl border border-gray-800 bg-[#111827] p-8">

              <h3 className="text-5xl font-bold text-sky-400">
                15+
              </h3>

              <p className="mt-3 text-gray-400">
                Technologies
              </p>

            </div>

            <div className="rounded-2xl border border-gray-800 bg-[#111827] p-8">

              <h3 className="text-5xl font-bold text-sky-400">
                Top 5
              </h3>

              <p className="mt-3 text-gray-400">
                ByteVerse Hackathon
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}