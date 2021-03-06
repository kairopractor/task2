import "material-design-lite/material.min.css";
//import "material-design-lite/material.min.js"
import Head from "next/head";
import Image from "next/image";
import templates_mo from "../../public/templates_mo.svg";
import components from "../../public/components.svg";
import styles from "../../public/styles.svg";
import customize from "../../public/customize.svg";

export default function Home() {
  return (
    <main className="docs-layout-content mdl-layout__content mdl-color-text--grey-600">
      <div className="content mdl-grid mdl-grid--no-spacing" id="content">
        <div className="subpageheader mdl-cell--12-col"></div>

        <section className="docs-text-styling about-panel about-panel--text mdl-cell mdl-cell--12-col">
          <dl>
            <dt>Material Design Lite</dt>
            <dd>
              Material Design Lite lets you add a{" "}
              <a href="http://google.com/design/spec">Material Design</a> look
              and feel to your websites. It doesn’t rely on any JavaScript
              frameworks and aims to optimize for cross-device use, gracefully
              degrade in older browsers, and offer an experience that is
              immediately accessible.{" "}
              <a href="started/index.html">Get started now</a>.
            </dd>
          </dl>
        </section>

        <section className="about-panel about-panel--templates mdl-cell mdl-cell--12-col">
          <Image src={templates_mo} />
          Templates
        </section>

        <section className="docs-text-styling about-panel about-panel--text mdl-cell mdl-cell--12-col">
          <p>
            The MDL components are created with CSS, JavaScript, and HTML. You
            can use the components to construct web pages and web apps that are
            attractive, consistent, and functional. Pages developed with MDL
            will adhere to modern web design principles like browser
            portability, device independence, and graceful degradation.
          </p>
        </section>

        <section className="about-panel about-panel--components mdl-color-text--white mdl-cell mdl-cell--6-col">
          <Image src={components} />
          Components
        </section>
        <section className="about-panel about-panel--styles mdl-color-text--white mdl-cell mdl-cell--6-col">
          <Image src={styles} />
          Styles
        </section>
        <section className="about-panel about-panel--customize mdl-color-text--white mdl-cell mdl-cell--12-col">
          <Image src={customize} />
          Customize
        </section>

        <p></p>
        <section className="docs-text-styling about-panel about-panel--text mdl-cell mdl-cell--12-col">
          <p>
            The MDL component library includes new versions of common user
            interface controls such as buttons, check boxes, and text fields,
            adapted to follow Material Design concepts. The library also
            includes enhanced and specialized features like cards, column
            layouts, sliders, spinners, tabs, typography, and more. MDL is free
            to download and use, and may be used with or without any library or
            development environment (such as{" "}
            <a href="https://developers.google.com/web/starter-kit/">
              Web Starter Kit
            </a>
            ). It is a cross-browser, cross-OS web developer's toolkit that can
            be used by anyone who wants to write more productive, portable, and
            — most importantly — usable web pages.
          </p>
        </section>
        <p></p>
        <script src="assets/index.js" async=""></script>
      </div>
      
    </main>
  );
}
