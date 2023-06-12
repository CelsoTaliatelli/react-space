import Cabecalho from "../../componentes/cabecalho";
import Menu from "../../componentes/menu";
import styles from "./PaginaInicial.module.scss";
import Banner from "../../componentes/banner";
import Rodape from "../../componentes/rodape";

const PaginaInicial = () => {
    return(
        <>
            <Cabecalho />
            <main>
                <section className={styles.principal}>
                    <Menu />
                    <Banner />
                </section>
            </main>
            <Rodape />
        </>
    )
}

export default PaginaInicial;