import Header from "./componentes/Header";
import MyCard from "./componentes/MyCard";
import Footer from "./componentes/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Tags from "./componentes/Tags";
import Boton from "./componentes/Boton";

function App() {
  return (
    
    <div className="container">
      <Header titulo={'Adopta un perrito'}/>
<section className="cards">
<Tags
url="https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
nombre="Kayser"
colorButton="success"
textButton="Adoptar"
descripcion="Es juguetón,amigable y se lleva bien con los niños y otros animales.¡Haz de Kayser parte de tu familiaa hoy mismo!" />

<Tags
url="https://images.pexels.com/photos/1390361/pexels-photo-1390361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
nombre="Bobby"
colorButton="primary"
textButton="Adoptar"
descripcion="Lleno de energía y listo para jugar.Dale a Bobby el hogar amoroso que se merece" />

<Tags
url="https://images.pexels.com/photos/1458916/pexels-photo-1458916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
nombre="Issy"
colorButton="danger"
textButton="Adoptar"
descripcion="Una perra de tamaño mediano con un corazón gigante.Hazte amigo de Issy y experimenta un amor incondicional"/>


<Tags
url="https://images.pexels.com/photos/895259/pexels-photo-895259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
nombre="Leah Lupita"
colorButton="warning"
textButton="Adoptar"
descripcion="Es una compañera leal y cariñosa que adora los mimos y abrazos. ¡Ayuda a Leah Lupita a encontrar su final feliz" />
      </section>
      <Footer/> 

      </div>

);
}


export default App
