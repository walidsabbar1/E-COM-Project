/**
 * BrowseStyle Section
 * Displays different clothing style categories in a grid
 */
import styles from './BrowseStyle.module.css';

function BrowseStyle() {
  const styleCategories = [
    { title: "Casual", img: "/images/casual.png" },
    { title: "Formal", img: "/images/formal.png" },
    { title: "Party", img: "/images/party.png" },
    { title: "Gym", img: "/images/gym.png" },
  ];

  return (
    <section className={styles.browseStyle}>
      <h2 className={styles.sectionTitle}>BROWSE BY DRESS STYLE</h2>

      <div className={styles.stylesGrid}>
        {styleCategories.map((style) => (
          <div
            key={style.title}
            className={styles.styleCard}
            style={{ backgroundImage: `url(${style.img})` }}
          >
            <span>{style.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BrowseStyle;
