import styles from "./Flexbox.module.css";

export default function Flexbox() {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>Complex flexbox example</h1>
      </header>

      <section className={styles.section}>
        <article className={styles.article}>
          <h2 className={styles.subtitle}>First article</h2>

          <p className={styles.paragraph}>
            Tacos actually microdosing, pour-over semiotics banjo chicharrones
            retro fanny pack portland everyday carry vinyl typewriter. Tacos
            PBR&B pork belly, everyday carry ennui pickled sriracha normcore
            hashtag polaroid single-origin coffee cold-pressed. PBR&B tattooed
            trust fund twee, leggings salvia iPhone photo booth health goth
            gastropub hammock.
          </p>
        </article>

        <article className={styles.article}>
          <h2 className={styles.subtitle}>Second article</h2>

          <p className={styles.paragraph}>
            Tacos actually microdosing, pour-over semiotics banjo chicharrones
            retro fanny pack portland everyday carry vinyl typewriter. Tacos
            PBR&B pork belly, everyday carry ennui pickled sriracha normcore
            hashtag polaroid single-origin coffee cold-pressed. PBR&B tattooed
            trust fund twee, leggings salvia iPhone photo booth health goth
            gastropub hammock.
          </p>
        </article>

        <article className={styles.article}>
          <div>
            <button className={styles.button}>Smile</button>
            <button className={styles.button}>Laugh</button>
            <button className={styles.button}>Wink</button>
            <button className={styles.button}>Shrug</button>
            <button className={styles.button}>Blush</button>
          </div>
          <div>
            <p className={styles.paragraph}>
              Tacos actually microdosing, pour-over semiotics banjo chicharrones
              retro fanny pack portland everyday carry vinyl typewriter. Tacos
              PBR&B pork belly, everyday carry ennui pickled sriracha normcore
              hashtag polaroid single-origin coffee cold-pressed. PBR&B tattooed
              trust fund twee, leggings salvia iPhone photo booth health goth
              gastropub hammock.
            </p>
          </div>
          <div>
            <p className={styles.paragraph}>
              Cray food truck brunch, XOXO +1 keffiyeh pickled chambray
              waistcoat ennui. Organic small batch paleo 8-bit. Intelligentsia
              umami wayfarers pickled, asymmetrical kombucha letterpress kitsch
              leggings cold-pressed squid chartreuse put a bird on it. Listicle
              pickled man bun cornhole heirloom art party.
            </p>
          </div>
        </article>
      </section>
    </>
  );
}
