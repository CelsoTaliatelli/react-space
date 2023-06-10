import logo from './logo.png';
import  search from './search.png';
import styles from './Cabecalho.module.scss';

const Cabecalho = () => {
    return (
        <header className={styles.cabecalho}>
            <img src={logo} alt="Logo do React space" />
            <div className={styles.cabecalho__container}>
                <input className={styles.cabecalho__input} type="search" name="" id="" placeholder="O que você procura?"/>
                <img src={search} alt="icone de busca" />
            </div>
        </header>
    );
}


export default Cabecalho;