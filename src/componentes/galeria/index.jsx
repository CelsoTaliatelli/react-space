import Tags from "../tags";
import styles from "./Galeria.module.scss";
import fotosJson from "./fotos.json";

import Cards from "./cards";
import { useState } from "react";

const Galeria = () => {
    const [fotos, setFotos] = useState(fotosJson);
    const tags = [...new Set(fotos.map((foto) => foto.tag))];
    const filtraFotos = (tag) => {
        const novasFotos = fotos.filter((foto) => {
            return foto.tag === tag;
        })
       setFotos(novasFotos); 
    }

    return(
        <section className={styles.galeria}>
            <h2>Navegue pela galeria</h2>
            <Tags tags={tags} filtrarFotos={filtraFotos} setFotos={setFotos}/>
            <Cards fotos={fotos} styles={styles}/>
        </section>
    );
}

export default Galeria;