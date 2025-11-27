import React from 'react'

function MySkills({theme}) {

    const skills = [
{ name: "JavaScript", icon: "" },
{ name: "TypeScript", icon: "" },
{ name: "React", icon: "" },
{ name: "Next.js", icon: "" },
{ name: "Tailwind CSS", icon: "" },
{ name: "HTML5", icon: "" },
{ name: "CSS3", icon: "" },
{ name: "Figma", icon: "" },
{ name: "Git", icon: "" },
{ name: "Node.js", icon: "" },
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