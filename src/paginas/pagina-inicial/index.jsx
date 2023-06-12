import Cabecalho from "../../componentes/cabecalho";
import Menu from "../../componentes/menu";
import styles from "./PaginaInicial.module.scss";
import Banner from "../../componentes/banner";

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
        </>
    )
}

export default PaginaInicial;