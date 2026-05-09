import { useState } from "react";
import "./App.css";

function App() {
  const [imagenes] = useState([
    {
      id: 1,
      titulo: "Arte 3D",
      url: "https://wallpapers.com/images/hd/3d-art-pictures-3840-x-2560-x7sf3583sfkarveu.jpg",
    },
    {
      id: 2,
      titulo: "Wallpaper 3D",
      url: "https://5.imimg.com/data5/SELLER/Default/2021/2/AM/DI/KN/19099136/3d-wallpapers-3d-3713-500x500.jpg",
    },
    {
      id: 3,
      titulo: "Imagen Moderna",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQESZukm_pIH6VM6XZdpRcU6DU5Ayd2dLuy1g&s",
    },
    {
      id: 4,
      titulo: "Fondo Abstracto",
      url: "https://static.vecteezy.com/system/resources/previews/005/087/191/non_2x/abstract-3d-effect-background-for-presentations-and-websites-calming-colorful-wavy-wallpaper-vector.jpg",
    },
  ]);

  return (
    <div className="container">
      <h1>Galería 3D</h1>

      <div className="galeria">
        {imagenes.map((img) => (
          <div className="card" key={img.id}>
            <img src={img.url} alt={img.titulo} />

            <div className="contenido">
              <h2>{img.titulo}</h2>
              <button>Ver Imagen</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;