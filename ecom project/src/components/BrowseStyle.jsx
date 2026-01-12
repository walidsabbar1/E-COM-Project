import "./BrowseStyle.css";

function BrowseStyle() {
  const styles = [
    { title: "Casual", img: "/images/casual.png" },
    { title: "Formal", img: "/images/formal.png" },
    { title: "Party", img: "/images/party.png" },
    { title: "Gym", img: "/images/gym.png" },
  ];

  return (
    <section className="browse-style">
      <h2 className="section-title">BROWSE BY DRESS STYLE</h2>

      <div className="styles-grid">
        {styles.map((style) => (
          <div
            key={style.title}
            className="style-card"
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
