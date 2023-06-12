import Tags from "../tags";
import styles from "./Galeria.module.scss";
import fotos from "./fotos.json";

import Cards from "./cards";

const Galeria = () => {
    return(
        <section className={styles.galeria}>
            <h2>Navegue pela galeria</h2>
            <Tags />
            <Cards fotos={fotos} styles={styles}/>
        </section>
    );
}

export default Galeria;