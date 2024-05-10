function MyCard({url,nombre,descripcion}){
    return(
        <>
<img src={url} alt=""/>
<h3>{nombre}</h3>
<p>{descripcion}</p>
</>
    )
}

export default MyCard