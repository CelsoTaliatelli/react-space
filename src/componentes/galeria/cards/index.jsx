import favorito  from "./favorito.png";
import open from "./open.png";

const Cards = ({fotos, styles}) => {
    return(
        <ul className={styles.galeria__cards}>
        {fotos.map((foto) => {
            return (
                <li key={foto.id} className={styles.galeria__card}>
                    <img 
                        src={foto.imagem} 
                        alt={foto.titulo} 
                        className={styles.galeria__imagem}
                    />
                    <p className={styles.galeria__descricao}>{foto.titulo}</p>
                    <div>
                        <p>{foto.creditos}</p>
                        <span>
                            <img src={favorito}alt="icone coração de curtir" />
                            <img src={open}alt="icone de abrir modal" />
                        </span>
                    </div>
                </li>
            );
        })}
    </ul>
    );
}

export default Cards;