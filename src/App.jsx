import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card  from './card.jsx'



function App() {

  const empleados = [
    {
      name: "Bill Mahoney",
      position: "Product Owner",
      image: "https://media.discordapp.net/attachments/1374554074384564244/1374557518247886999/photo1.png?ex=682e7bf2&is=682d2a72&hm=ba9289fc16ebb35cc36bddadd6b5a5c36fcfcc1f5803277fdad282e55b833310&=&format=webp&quality=lossless&width=559&height=800"
    },
    {
      name: "Saba Cabrera",
      position: "Art Director",
      image: "https://media.discordapp.net/attachments/1374554074384564244/1374557518553940060/photo2.png?ex=682e7bf2&is=682d2a72&hm=7201cbe01be53e48a1ee93c65016f084358467f3885344c0024cede214791fde&=&format=webp&quality=lossless&width=549&height=800"
    },
    {
      name: "Shae Le",
      position: "Teach Lead",
      image: "https://media.discordapp.net/attachments/1374554074384564244/1374557519128825986/photo3.png?ex=682e7bf2&is=682d2a72&hm=60fa14f1811020b5ed8818e836a65412f78f76ee673dd973257d227a54e7249c&=&format=webp&quality=lossless&width=559&height=800"
    },
    {
      name: "Skiylah Lu",
      position: "UX Designer",
      image: "https://media.discordapp.net/attachments/1374554074384564244/1374557519619555368/photo4.png?ex=682e7bf2&is=682d2a72&hm=f97c21b687928ac4b959175204976d23b7b0990ff5a4016fb6248c853ff9a466&=&format=webp&quality=lossless&width=556&height=800"
    },
    {
      name: "Griff Richards",
      position: "Developer",
      image: "https://media.discordapp.net/attachments/1374554074384564244/1374557519992717312/photo5.png?ex=682e7bf2&is=682d2a72&hm=bf0d85b3bc0f4725248d88daf6096a93b4b22b1736849120f4c7d41e4647e6c9&=&format=webp&quality=lossless&width=549&height=800"
    },
    {
      name: "Stan Jhon",
      position: "Developer",
      image: "https://media.discordapp.net/attachments/1374554074384564244/1374557520751755264/photo6.png?ex=682e7bf2&is=682d2a72&hm=573522addcd3b956709d6c5d62b0edb331484380246594c75ff4dba93fc70568&=&format=webp&quality=lossless&width=556&height=800"
    }
  ];
  return (
    <div>
      <image className="w-20" src="./assets/image.png"></image>
      <h1 className="ml-4 mt-7 font-bold text-3xl mb-6">The creative Crew</h1>
      <h2 className="ml-10 font-bold">Who we are</h2>
      <p className="ml-10 mb-10">We are team of creativily diverse. driven. Innovatine individuals working in various location in the world.</p>
  <div className="grid grid-cols-2">
  {empleados.map((empleado, idx) => (
    <div key={idx} className={(idx % 2 === 1) ? "mt-10" : "mt-[-20px]"}>
      <Card
        image={empleado.image}
        name={empleado.name}
        position={empleado.position}
      />
    </div>
  ))}
</div>
    </div>
  );
}

export default App;