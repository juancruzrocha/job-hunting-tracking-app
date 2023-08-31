import cruzDev from "./assets/cruzDev.png";
import "./App.css";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/navBar/NavBar";

function App() {
  // const postulacion = {
  //   empresa,
  //   fecha,
  //   puesto,
  //   descripcion,
  //   contactoDirecto: true,
  // };

  const postulaciones = [
    {
      id: 1,
      empresa: "fulltimeforce",
      recruiter: "Daniela Ramirez",
      fecha: "30/08/2023",
      tecnologias: ["react", "node"],
      descripcion:
        "Hola! ¿Estás buscando trabajo como Fullstack Developer?  Fulltimeforce sigue creciendo y  nos encontramos reclutando talentos Fullstack en todo #Latam. Postula para ser parte de nuestra base de talentos, con el fin de poder brindarte a futuro una oportunidad de crecimiento profesional. Fullstack con inglés avanzado (+1 años experiencia profesional)     Experiencia en React y Nodejs, Experiencia deseable en Typescript",
      contactoDirecto: true,
      mail: "daniela.ramirez@fulltimeforce.com",
    },
    {
      id: 2,
      empresa: "Puma",
      recruiter: "Guido Cassanello",
      fecha: "30/08/2023",
      tecnologias: ["react", "node"],
      descripcion:
        "Nos encontramos en la búsqueda de un React Developer para la Cia. PUMA. Esta posición formará parte del área de IT en el SSC. Nos orientamos a un profesional de Sistemas o carreras afines con experiencia de al menos 2 años en roles similares. El objetivo de la posición es ser el desarrollador de React que contribuya al desarrollo de aplicaciones web de vanguardia, creando interfaces de usuario atractivas utilizando React.js. Es importante contar con buen nivel de inglés",
      contactoDirecto: true,
      mail: "gcassanello@ghidinirodil.com",
    },
  ];

  return (
    <>
      <NavBar />
      <div className="column">
        <div className="border">
          <p className="read-the-docs">Hola Cruz...</p>
          <a
            href="https://www.linkedin.com/in/juan-cruz-rocha/"
            target="_blank"
          >
            <img
              src={cruzDev}
              className="logo"
              alt="Juan Cruz Rocha's LinkedIn Profile"
            />
          </a>
          <p>*Inserte ruido de mate*</p>
          <p>CHUUPT</p>
          <h3>
            Aca vamos a estar creando nuestra aplicacion para tener control de
            nuestra busqueda laboral
          </h3>
          <p>Bueno pero no grites...</p>
          <p>
            Preguntate todos los dias como vas a hacer para acercarte al
            objetivo que estas buscando ese mismo dia.
          </p>
          <p> - De esa forma es mas facil empezar.</p>
          <p>- La idea es que puedas aprender algo de react con css.</p>
          <p>
            - Para hacerlo tenes que ver el video de Henry X de Css con React.
          </p>
          <a
            href="https://www.linkedin.com/in/juan-cruz-rocha/"
            target="_blank"
          >
            <img
              src={cruzDev}
              className="logo"
              alt="Juan Cruz Rocha's LinkedIn Profile"
            />
          </a>
        </div>
        <div className="border">
          Historial de postulaciones:
          {postulaciones.map((postulacion) => {
            <ul>
              <li>Postulacion n:{postulacion.id}</li>
              <li>Empresa: {postulacion.empresa}</li>
              <li>Fecha: {postulacion.fecha}</li>
              <li>Recruiter: {postulacion.recruiter}</li>
              <li>Descripcion del puesto: {postulacion.descripcion}</li>
              <li>Mail: {postulacion.mail}</li>
            </ul>;
          })}
          {/* <ul>
            <li>Postulacion n:{postulaciones.id}</li>
            <li>Empresa: {postulaciones.empresa}</li>
            <li>Fecha: {postulaciones.fecha}</li>
            <li>Recruiter: {postulaciones.recruiter}</li>
            <li>Descripcion del puesto: {postulaciones.descripcion}</li>
            <li>Mail: {postulaciones.mail}</li>
          </ul> */}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
