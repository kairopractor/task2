import styles from "./IndexPage.module.css";
import Image from "next/image";
import bootstrap from "../../public/bootstrap.png";
import tailwind from "../../public/tailwind.png";
import mdl from "../../public/mdl.png";
import antd from "../../public/antd.svg";
import koshka from "../../public/koshka.png";

export default function Home() {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Системы модульной верстки</h1>
      <p className={styles.description}>
        Модульная система вёрстки — система вёрстки, при которой основой
        композиции полос и разворотов становится модульная сетка с определенным
        шагом (модулем), одинаковым или разным по горизонтали и вертикали.
        Модульная система упрощает и ускоряет художественное конструирование и
        создаёт благоприятные условия для автоматизации вёрстки при
        использовании компьютерных настольно-издательских систем.
      </p>
      <Image src={koshka} />

      <h2 className={styles.title}>CSS фреймворки</h2>

      <ul className={styles.grid}>
        <li className={styles.card}>
          <a href="/bootstrap" className={styles.link}>
            bootstrap
          </a>
          <h2 className={styles.name}>Bootstrap</h2>
          <div className={styles.image}>
            <Image src={bootstrap} />
          </div>
          <p className={styles.description}>
            Bootstrap — свободный набор инструментов для создания сайтов и
            веб-приложений. Включает в себя HTML- и CSS-шаблоны оформления для
            типографики, веб-форм, кнопок, меток, блоков навигации и прочих
            компонентов веб-интерфейса, включая JavaScript-расширения.
          </p>
        </li>

        <li className={styles.card}>
          <a href="/tailwind" className={styles.link}>
            tailwind
          </a>
          <h2 className={styles.name}>Tailwind</h2>
          <div className={styles.image}>
            <Image src={tailwind} />
          </div>
          <p className={styles.description}>
            Tailwind CSS — это настраиваемый низкоуровневый CSS-фреймворк с
            широкими возможностями настройки, который предоставляет вам все
            строительные блоки, необходимые для создания дизайна на заказ без
            каких-либо раздражающих, продуманных стилей, с которыми вам придется
            бороться, чтобы переопределить.
          </p>
        </li>

        <li className={styles.card}>
          <a href="/mdl" className={styles.link}>
            mdl
          </a>
          <h2 className={styles.name}>Material Design Lite</h2>
          <div className={styles.image}>
            <Image src={mdl} />
          </div>
          <p className={styles.description}>
            Material Design Lite — это новый фреймворк от Google, фреймворк для
            веб-разработчиков, позволяющий верстать страницы просто и быстро.
            Как и в предыдущих уроках, сначала требуется подключить MDL
            библиотеки – стили и файлы JS в шапке документа.
          </p>
        </li>

        <li className={styles.card}>
          <a href="/antd" className={styles.link}>
            antd
          </a>
          <h2 className={styles.name}>AntD</h2>
          <div className={styles.image}>
            <Image src={antd} />
          </div>
          <p className={styles.description}>
            Ant Design — это полноценная дизайн-система, визуальный язык. Со
            своими принципами, стайлгайдами и библиотекой компонентов, о которой
            и пойдет речь в этой статье.
          </p>
        </li>
      </ul>
    </div>
  );
}
