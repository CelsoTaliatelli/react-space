import styles from "./Tags.module.scss";
import fotos from "../galeria/fotos.json"

const Tags = ({tags, filtrarFotos, setFotos}) => {
    return(
        <div className={styles.tags}>
            <p>Filtre por tags:</p>
            <ul className={styles.tags__lista}>
                {tags.map((tag) => {
                    return(
                        <li key={tag} onClick={() => filtrarFotos(tag)}>{tag}</li>
                    );
                })}
                <li onClick={() => setFotos(fotos)}>Todas</li>
            </ul>
        </div>
    );
}

export default Tags;