import urbanStyle from "../assets/img-projects/GuitarApp.png";
import ReactEcommerce from "../assets/img-projects/DevTreeApp.png";
import imgNote from "../assets/img-projects/SeguimientoPacientes.png";
import SriEnLinea from "../assets/img-projects/CarruselSri2.png";

export const proyectos = [
  {
    titulo: "Guitar App",
    descripcion:
      "Aplicacion para venta de guitarras.",
    imagen: urbanStyle.src,
    tecnologias: ["React", "Tailwind", "Express", "MongoDB"],
    demo: "https://react-e-commerce-three-phi.vercel.app",
    codigo: "https://github.com/Lautaro-R-collins/React-E-commerce.git",
    categoria: "fullstack",
  },
  {
    titulo: "DevTree app",
    imagen: ReactEcommerce.src,
    tecnologias: ["React", "Tailwind", "Node.js" ,"Express", "MongoDB", "jwt"],
    demo: "https://devtree-jorge.netlify.app/",
    codigo: "https://github.com/crashe24/devtree-backend",
    categoria: "fullstack",
  },
  {
      titulo: "Seguimiento de Pacientes Veterinaria",
    imagen: imgNote.src,
    tecnologias: ["React", "Tailwind", "Express", "MongoDB"],
    demo: "https://frosty-dijkstra-53965b.netlify.app/",
    codigo: "https://github.com/crashe24/seguimiento-pacientes-app",
  },
  {
     titulo: "Boton de pago de SRI",
    imagen: SriEnLinea.src,
    tecnologias: ["Java", "JSF", "EJB", "Hibernate", "Oracle"],
    demo: "https://srienlinea.sri.gob.ec/sri-en-linea/inicio/NAT",
    codigo: "",
    categoria: "fullstack",
  },
  
];
