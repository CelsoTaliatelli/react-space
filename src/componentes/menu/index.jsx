import styles from './Menu.module.scss';
import home from './../../assets/icones/home-ativo.png';
import maisCurtidas from './../../assets/icones/mais-curtidas-inativo.png';
import maisVistas from './../../assets/icones/mais-vistas-inativo.png';
import novas from './../../assets/icones/novas-inativo.png';
import surpreendaMe from './../../assets/icones/surpreenda-me-inativo.png';

const itensMenu = [
    {titulo:'Inicio',endereco:'/',img: home},
    {titulo:'Mais curtidas',endereco:'/mais-curtidas',img: maisCurtidas},
    {titulo:'Mais vistas',endereco:'/mais-curtidas',img: maisVistas},
    {titulo:'Mais novas',endereco:'/mais-curtidas',img: novas},
    {titulo:'Surpreenda-me',endereco:'/mais-curtidas',img: surpreendaMe}
]

const Menu = () => {
    return(
        <nav className={styles.menu}>
            <ul className={styles.menu__lista}>
                {itensMenu.map(item => 
                     <li key={item.titulo} className={styles.menu__item}>
                     <img src={item.img} alt="" />
                     <a href={item.endereco}>{item.titulo}</a>
                 </li>
                )}
               
            </ul>
        </nav>
    );
}

export default Menu;