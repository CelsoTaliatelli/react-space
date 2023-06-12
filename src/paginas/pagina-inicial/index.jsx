import Cabecalho from "../../componentes/cabecalho";
import Menu from "../../componentes/menu";
import styles from "./PaginaInicial.module.scss";
import Banner from "../../componentes/banner";
import Rodape from "../../componentes/rodape";
import Galeria from "../../componentes/galeria";
import Populares from "../../componentes/populares";

const PaginaInicial = () => {
    return(
        <>
            <Cabecalho />
            <main>
                <section className={styles.principal}>
                    <Menu />
                    <Banner />
                </section>
                <div className={styles.galeria}>
                    <Galeria />
                    <Populares />
                </div>
            </main>
            <Rodape />
        </>
    )
}

export default PaginaInicial;