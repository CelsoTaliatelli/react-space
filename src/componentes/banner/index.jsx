import styles from './Banner.module.scss';
import banner from './banner.png';

const Banner = () => {
    return(
        <div className={styles.banner}>
            <h1>A galeria mais completa do espaço.</h1>
            <img src={banner} alt="imagem da terra vista do espaço."></img>
        </div>
    )
}

export default Banner;