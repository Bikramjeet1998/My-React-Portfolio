import React from "react";

export default function MainView() {
  return (
    <div class="relative w-full bg-slate-900">
      <div class="mx-auto max-w-7xl lg:px-8">
        <div class="flex flex-col justify-center px-4 py-10 lg:px-6">
          <h1 class="mt-8 max-w-4xl text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-6xl">
            I'm Bikramjeet singh
            <div class="text-5xl font-bold mt-2 bg-gradient-to-t from-orange-600 to-amber-300 text-transparent bg-clip-text">
              Backend Developer   
            </div>
          </h1>

          <p class="mt-8 max-w-3xl text-lg text-white">
            Experienced backend developer proficient in PHP, Laravel, and Mysql.
            Skilled in building RESTful APIs and microservices architecture.
            Expertise in optimizing database performance and Agile
            methodologies. Collaborative team player with a track record of
            enhancing application scalability and responsiveness. Dedicated to
            continuous learning and staying updated with emerging technologies.
          </p>
          <div class="mt-8">
            <button
              type="button"
              class="rounded-md bg-orange-400 px-3 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black  bg-gradient-to-r from-orange-600 to-amber-300"
            >
              Subscribe
            </button>
          </div>
        </div>
        <div class="rounded-lg bg-gray-200 ">
          <img
            class="aspect-[3/2] w-full rounded-lg bg-gray-50 object-cover lg:aspect-auto lg:h-[400px]"
            src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
