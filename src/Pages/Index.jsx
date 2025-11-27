
import Header from '../Components/Header'
import About from '../Components/About'
import MySkills from '../Components/MySkills'
import React, { useState } from "react";
import Contact from '../Components/Contact';
import AppFooter from '../Components/AppFooter';
function Index() {

  // use state for theme

  const [theme,setTheme]=useState(false)


// project sample ,view
const categories = ["All Projects", "React", "Vue.js", "Next.js", "Full-stack", "PWA"];
const [active, setActive] = useState("All Projects");


const projects = [
{
title: "E-commerce Platform",
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiRekB-JX-thJrzj48Wg-wSL093_4KYr1hiQ&s",
tags: ["React", "Firebase", "Material UI"],
category: "React",
description:
"A feature-rich e-commerce site with product listings, a shopping cart, and secure checkout integration.",
},
{
title: "Data Viz Dashboard",
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcAxLALD6U8F0PjkKizK9iYc7hhkOp6oxx1A&s",
tags: ["Next.js", "Tailwind CSS", "Stripe"],
category: "Next.js",
description:
"An interactive dashboard for visualizing complex datasets, featuring dynamic charts and subscription payments.",
},
{
title: "Task Management App",
image: "https://s3-alpha.figma.com/hub/file/1317533092/8aa5e957-9cd8-4ff6-a975-886c4d597b8a-cover.png",
tags: ["Vue.js", "GraphQL", "Apollo"],
category: "Vue.js",
description:
"A sleek and intuitive to-do application that helps users organize their tasks and boost productivity.",
},
];


const filtered =
active === "All Projects" ? projects : projects.filter((p) => p.category === active);

// 
  return (
   <> 
   
   {/* Header */}
   <Header setTheme={setTheme} theme={theme}/>

{/* main */}
   <div id='home'>
     <section className={theme?"min-h-screen flex items-center bg-[#0f1720] text-white":"min-h-screen flex items-center"}>
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* Left column: text */}
          <div className="text-left max-w-2xl">
            <h1 className={theme?"text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-tight":"text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-gray-950 leading-tight"}>
             John Babu
            </h1>

            <p className={theme?"mt-4 text-lg text-blue-600 font-medium":"mt-4 text-lg text-blue-800 font-medium"}>
              Front-End Developer
            </p>

            <p className={theme?"mt-6 text-gray-300 text-lg leading-relaxed":"mt-6 text-gray-500 text-lg leading-relaxed"}>
              I create beautiful, user-friendly digital experiences with a passion for modern web
              technologies and elegant, efficient code.
            </p>

            <div className="mt-8">
              <a
                href="#contact"
                className="inline-block px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 transition"
                aria-label="View my Contat info"
              >
                HIRE ME
              </a>
            </div>
          </div>

          {/* Right column: circular profile with glow */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full flex items-center justify-center">
              
              {/* outer glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#335fbe80] to-transparent blur-2xl opacity-80 animate-pulse" />

              {/* ring with shadow */}
              <div
                className="absolute inset-1 rounded-full border-8 border-transparent"
                style={{
                  boxShadow: '0 30px 80px rgba(2,6,23,0.8), inset 0 6px 20px rgba(10,30,60,0.35)',
                }}
              />

              {/* profile image */}
              <img
                src="https://img.freepik.com/free-photo/businessman-curly-haired-young-businessman-blue-shirt_259150-58623.jpg?semt=ais_hybrid&w=740&q=80"
                alt="Profile"
                className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover shadow-2xl border-4 border-white"
                style={{ objectPosition: 'right ' }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
   </div>

   <About theme={theme}/>

   <MySkills theme={theme}/>

{/* projects smaple viwe */}
   <section className={theme?"bg-[#0f1720] py-24":"py-24"}>
<div className="container mx-auto px-6">
<h2 className={theme?"text-5xl font-extrabold text-white  text-center":"text-5xl font-extrabold  text-center"}>My Work & Projects</h2>
<p className={theme?"text-gray-300 text-center max-w-2xl mx-auto mt-4":"text-gray-800 text-center max-w-2xl mx-auto mt-4"}>
A selection of my projects that showcase my passion for front-end development and creating
intuitive user experiences.
</p>


{/* Filters */}
<div className="flex flex-wrap justify-center gap-4 mt-10">
{categories.map((cat) => (
<button
key={cat}
onClick={() => setActive(cat)}
className={`px-6 py-2 rounded-full border transition text-sm font-medium ${
active === cat
? "bg-blue-600 text-white border-blue-600"
: theme?"border-gray-600 text-white hover:border-blue-400 hover:text-blue-400":"border-gray-600 text-gray-800 hover:border-blue-400 hover:text-blue-400"
}`}
>
{cat}
</button>
))}
</div>


{/* Project Cards */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
{filtered.map((p, i) => (
<div
key={i}
className={theme?"rounded-2xl shadow-xl bg-gray-800 overflow-hidden hover:scale-[1.02] transition duration-300 ":"rounded-2xl shadow-xl overflow-hidden hover:scale-[1.02] transition duration-300"}
>
<img src={p.image} alt={p.title} className="w-full h-60 object-cover" />


<div className="p-6">
<h3 className={theme?"text-2xl text-white  font-semibold":"text-2xl  font-semibold"}>{p.title}</h3>


<div className="flex gap-2 flex-wrap mt-3">
{p.tags.map((tag, index) => (
<span
key={index}
className="px-3 py-1 text-xs bg-white text-blue-900 rounded-full border border-blue-700"
>
{tag}
</span>
))}
</div>


<p className={theme?"text-gray-300 text-sm mt-4 leading-relaxed":"text-gray-800 text-sm mt-4 leading-relaxed"}>{p.description}</p>
</div>
</div>
))}
</div>
</div>
</section>

{/* contact */}

<Contact theme={theme}/>

{/* Footer */}

<AppFooter theme={theme}/>
</>
)
}

export default Index