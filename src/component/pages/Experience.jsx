import React from 'react'

export default function Experience() {
  return (
    <div>
      <section
        id="experience"
        className=" w-full py-8 md:py-8 lg:py-8  text-white bg-slate-900"
      >
        <div className="  container px-4 md:px-6 ">
          <h2 className="text-3xl font-bold  sm:text-5xl bg-gradient-to-l from-orange-600 to-amber-500 text-transparent bg-clip-text w-fit">
            Work Experience
          </h2>
          <div className="mt-4">
            <h3 className="text-xl font-bold">Software Engineer at XYZ Corp</h3>
            <p className="text-gray-500 dark:text-gray-400">2019 - Present</p>
            <p className="mt-2">
              Developed and maintained web applications and services for XYZ
              Corp's core products. Worked with a team of five agile developers
              to plan, design, and develop robust solutions in a timely manner.
            </p>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-bold">Junior Developer at ABC Inc</h3>
            <p className="text-gray-500 dark:text-gray-400">2017 - 2019</p>
            <p className="mt-2">
              Assisted in the development of web applications and programming
              software. Participated in agile teams and effectively communicated
              with all team members.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
