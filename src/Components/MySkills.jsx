import React from 'react'

function MySkills({theme}) {

    const skills = [
{ name: "JavaScript", icon: "https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png" },
{ name: "TypeScript", icon: "https://camo.githubusercontent.com/0a0ca073f31c852332b07c8d6e1544c7c5f130e89307b2954a2e89969eca1c94/68747470733a2f2f63646e2e69636f6e73636f75742e636f6d2f69636f6e2f667265652f706e672d3235362f667265652d747970657363726970742d333532313737342d323934353237322e706e673f663d77656270" },
{ name: "React", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" },
{ name: "Next.js", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQwZ-yxccKMLUtU6QYiiSqo35bfnJtqHDmqw&s" },
{ name: "Tailwind CSS", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png" },
{ name: "HTML5", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2QP4wG2DnJ7gi_F4OjFWO6PsrZQ1sjOrX4A&s" },
{ name: "CSS3", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbeQpKelscmTQUfCHtzeVWuD4WZ29U6Zxl3Q&s" },
{ name: "Figma", icon: "https://cdn.sanity.io/images/599r6htc/regionalized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png" },
{ name: "Git", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5DhXo6L_GD3mOBeXwBBjsjYAs4fLXu0tCow&s" },
{ name: "Node.js", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6bebC_d4eWwJ-x9ntqDuT94TvOgumSBVWHg&s" },
];
  return (
    <>
    {/* bg-[#0f1720]     */}
    <section className={theme?" bg-[#0f1720]   py-24":" py-24"}>
<h2 className={theme?"text-5xl font-extrabold  text-center mb-16 text-white":"text-5xl font-extrabold  text-center mb-16"}>
My Tech Stack
</h2>


<div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
{skills.map((skill, index) => (
<div
key={index}
className={theme?" bg-gray-800 rounded-2xl py-10 flex flex-col items-center shadow-xl hover:scale-105 transition duration-300" :" rounded-2xl py-10 flex flex-col items-center shadow-xl hover:scale-105 transition duration-300"}
>
<img src={skill.icon} alt={skill.name} className={theme?"w-16 h-16 text-white object-contain mb-4":"w-16 h-16 object-contain mb-4"} />
<p className={theme?" text-white text-lg font-medium":" text-lg font-medium"}>{skill.name}</p>
</div>
))}
</div>
</section>
    </>
  )
}

export default MySkills