/**
 * BrowseStyle Section
 * Displays different clothing style categories in a grid
 */
import { Link } from 'react-router-dom';
import styles from './BrowseStyle.module.css';

function BrowseStyle() {
  const styleCategories = [
    { title: "Casual", img: "/images/casual.png", link: "/category/casual" },
    { title: "Formal", img: "/images/formal.png", link: "/category/formal" },
    { title: "Party", img: "/images/party.png", link: "/category/party" },
    { title: "Gym", img: "/images/gym.png", link: "/category/gym" },
  ];

  return (
    <section className={styles.browseStyle}>
      <h2 className={styles.sectionTitle}>BROWSE BY DRESS STYLE</h2>

      <div className={styles.stylesGrid}>
        {styleCategories.map((style) => (
          <Link
            key={style.title}
            to={style.link}
            className={styles.styleCard}
            style={{ backgroundImage: `url(${style.img})` }}
          >
            <span>{style.title}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default BrowseStyle;
