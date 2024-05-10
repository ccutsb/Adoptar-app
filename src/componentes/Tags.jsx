import Card from 'react-bootstrap/Card';
import Boton from './Boton';

const Tags = ({url, nombre, colorButton, textButton,descripcion}) => {
return (
<>
<Card style={{ width: "18rem", height: "100%" }}>
<Card.Img variant="top" src={url} style={{ height: '300px', objectFit: 'cover' }}/>
<Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
<div style={{ textAlign: 'center' }}>
<Card.Title>{nombre}</Card.Title>
{descripcion && <Card.Text>{descripcion}</Card.Text>}
</div>
<div style={{ textAlign: 'center' }}></div>
<Boton colorButton={colorButton} textButton={textButton}  />
</Card.Body>
</Card>
</>
);
};
export default Tags;
