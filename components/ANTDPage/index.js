import "antd/dist/antd.css";
import { Layout } from "antd";

import Head from "next/head";
const { Header, Footer, Sider, Content } = Layout;
export default function Home() {
  return (
    <div>
      <section className="main-container">
        <article className="markdown">
          <div>
            <h1>
              Introduction
              <a
                className="edit-button"
                href="https://github.com/ant-design/ant-design/edit/master/docs/spec/introduce.en-US.md"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span
                  role="img"
                  aria-label="edit"
                  className="anticon anticon-edit"
                >
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="edit"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"></path>
                  </svg>
                </span>
              </a>
            </h1>
            <section className="markdown">
              <div>
                <img src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*P0S-QIRUbsUAAAAAAAAAAABkARQnAQ" />
              </div>
              <p>
                Ant Financial has a large number of enterprise-level products.
                With complex scenarios, designers and developers often need to
                respond fast due to frequent changes in product demands and
                concurrent R &amp; D workflow. Many similar contents exist in
                the process. Through abstraction, we could obtain some stable
                and highly reusable components and pages.
              </p>
              <p>
                On the other hand, with the trend of commercialization, more and
                more enterprise products begin to pursue better user
                experiences. Under this situation, Ant User-Experience Design
                Team builds a design system for enterprise products based on
                four design values of Natural, Certain, Meaningful, and Growing.
                It aims to uniform the user interface specs and reduce
                redundancies and excessive production costs, helping product
                designers to focus on better user experience.
              </p>
            </section>
          </div>
          <div className="toc-affix">
            <div className="">
              <ul className="toc">
                <li>
                  <a
                    className="current"
                    href="#Guidelines-and-Resources"
                    title="Guidelines and Resources"
                  >
                    Guidelines and Resources
                  </a>
                </li>
                <li>
                  <a
                    className=""
                    href="#Front-end-Implementation"
                    title="Front-end Implementation"
                  >
                    Front-end Implementation
                  </a>
                </li>
                <li>
                  <a
                    className=""
                    href="#Who's-using-Ant-Design"
                    title="Who's using Ant Design"
                  >
                    Who's using Ant Design
                  </a>
                </li>
                <li>
                  <a
                    className=""
                    href="#Words-From-Community"
                    title="Words From Community"
                  >
                    Words From Community
                  </a>
                </li>
                <li>
                  <a
                    className=""
                    href="#How-to-Contribute"
                    title="How to Contribute"
                  >
                    How to Contribute
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <section className="markdown">
            <h2 id="Guidelines-and-Resources" data-scrollama-index="0">
              <span>Guidelines and Resources</span>
              <a href="#Guidelines-and-Resources" className="anchor">
                #
              </a>
            </h2>
            <p>
              We provide comprehensive design guidelines, best practices,
              resources, and tools to help designers produce high-quality
              product prototypes.
            </p>
            <ul>
              <li>
                <p>
                  <a href="/docs/spec/values">Design values</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/docs/spec/overview">Design patterns</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/docs/spec/visual">Visualization</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/docs/spec/illustration">Illustrations</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/docs/resources">Design resources</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="http://kitchen.alipay.com/">Sketch toolbox</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/docs/spec/article">Articles</a>
                </p>
              </li>
            </ul>
            <h2 id="Front-end-Implementation" data-scrollama-index="1">
              <span>Front-end Implementation</span>
              <a href="#Front-end-Implementation" className="anchor">
                #
              </a>
            </h2>
            <p>
              <a href="http://facebook.github.io/react/">React</a> is used to
              encapsulate a library of components which embody our design
              language. We welcome the community to implement{" "}
              <a href="/docs/spec/introduce">our design system</a> in other
              front-end frameworks of their choice.
            </p>
            <ul>
              <li>
                <a href="/docs/react/introduce" target="_blank">
                  Ant Design of React{" "}
                </a>
                (official implementation)
              </li>
              <li>
                <a href="http://ng.ant.design" target="_blank">
                  NG-ZORRO - Ant Design of Angular
                </a>
              </li>
              <li>
                <a href="http://ng.mobile.ant.design" target="_blank">
                  NG-ZORRO-MOBILE - Ant Design Mobile of Angular
                </a>
              </li>
              <li>
                <a href="http://antdv.com" target="_blank">
                  Ant Design of Vue
                </a>
              </li>
              <li>
                <a href="https://ant-design-blazor.github.io/" target="_blank">
                  Ant Design Blazor
                </a>
              </li>
              <li>
                <a href="https://ecomfe.github.io/santd" target="_blank">
                  San UI Toolkit for Ant Design
                </a>
              </li>
              <li>
                <a href="https://github.com/priornix/antizer" target="_blank">
                  antizer (ClojureScript)
                </a>
              </li>
            </ul>
            <h2 id="Who's-using-Ant-Design" data-scrollama-index="2">
              <span>Who's using Ant Design</span>
              <a href="#Who's-using-Ant-Design" className="anchor">
                #
              </a>
            </h2>
            <ul>
              <li>
                <p>
                  <a href="http://www.antgroup.com/index.htm?locale=en_US">
                    Ant Financial
                  </a>
                </p>
              </li>
              <li>
                <p>
                  <a href="http://www.alibaba.com/">Alibaba</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="http://www.tencent.com">Tencent</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="http://www.baidu.com">Baidu</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="http://www.koubei.com/">Koubei</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="http://www.meituan.com">Meituan</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="http://www.xiaojukeji.com/">Didi</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="https://www.ele.me/">Eleme</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="https://github.com/ant-design/ant-design/issues/477">
                    Other Users
                  </a>
                </p>
              </li>
            </ul>
            <blockquote>
              <p>
                If your company or products use Ant Design, and you'd like to be
                added to this growing list, click{" "}
                <a href="https://github.com/ant-design/ant-design/issues/477">
                  here
                </a>{" "}
                to leave us a message.
              </p>
            </blockquote>
            <h2 id="Words-From-Community" data-scrollama-index="3">
              <span>Words From Community</span>
              <a href="#Words-From-Community" className="anchor">
                #
              </a>
            </h2>
            <ul>
              <li>
                <p>
                  Hacknews:{" "}
                  <a href="https://news.ycombinator.com/item?id=13053137">
                    Show HN: Antd – A set of high-quality React components
                  </a>
                </p>
              </li>
              <li>
                <p>
                  Alligator:{" "}
                  <a href="https://alligator.io/react/beautiful-uis-ant-design/">
                    Crafting Beautiful UIs in React Using Ant Design
                  </a>
                </p>
              </li>
              <li>
                <p>
                  <a href="https://blog.logrocket.com/introduction-to-ant-design/">
                    Introduction to Ant Design
                  </a>
                </p>
              </li>
              <li>
                <p>
                  <a href="https://developer.okta.com/blog/2020/09/16/ant-design-react-app">
                    Build a React App with Ant Design Principles
                  </a>
                </p>
              </li>
              <li>
                <p>
                  <a href="https://medium.com/javascript-in-plain-english/antd-library-what-why-useful-or-not-5fec225b639d">
                    Meet Antd, an enterprise React UI library
                  </a>
                </p>
              </li>
            </ul>
            <h2 id="How-to-Contribute" data-scrollama-index="4">
              <span>How to Contribute</span>
              <a href="#How-to-Contribute" className="anchor">
                #
              </a>
            </h2>
            <p>
              Contributions to Ant Design on Github are welcomed! Whether you
              have questions, concerns, or suggestions for improving Ant Design
              - please don't hesitate to reach out to us{" "}
              <a href="https://github.com/ant-design/ant-design/issues">here</a>
              .
            </p>
          </section>
          <section className="markdown api-container"></section>
        </article>
        <ul className="contributors-list">
          <a
            href="https://github.com/afc163"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="ant-avatar ant-avatar-circle ant-avatar-image">
              <img src="https://avatars.githubusercontent.com/u/507615?s=40&amp;v=4" />
            </span>
          </a>
          <a
            href="https://github.com/zombieJ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="ant-avatar ant-avatar-circle ant-avatar-image">
              <img src="https://avatars.githubusercontent.com/u/5378891?s=40&amp;v=4" />
            </span>
          </a>
          <a
            href="https://github.com/yesmeck"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="ant-avatar ant-avatar-circle ant-avatar-image">
              <img src="https://avatars.githubusercontent.com/u/465125?s=40&amp;v=4" />
            </span>
          </a>
          <a
            href="https://github.com/vagusX"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="ant-avatar ant-avatar-circle ant-avatar-image">
              <img src="https://avatars.githubusercontent.com/u/6828924?s=40&amp;v=4" />
            </span>
          </a>
          <a
            href="https://github.com/tsaiDavid"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="ant-avatar ant-avatar-circle ant-avatar-image">
              <img src="https://avatars.githubusercontent.com/u/12259854?s=40&amp;v=4" />
            </span>
          </a>
          <a
            href="https://github.com/benjycui"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="ant-avatar ant-avatar-circle ant-avatar-image">
              <img src="https://avatars.githubusercontent.com/u/3580607?s=40&amp;v=4" />
            </span>
          </a>
          <a
            href="https://github.com/tangjinzhou"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="ant-avatar ant-avatar-circle ant-avatar-image">
              <img src="https://avatars.githubusercontent.com/u/6937879?s=40&amp;v=4" />
            </span>
          </a>
          <a
            href="https://github.com/vthinkxie"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="ant-avatar ant-avatar-circle ant-avatar-image">
              <img src="https://avatars.githubusercontent.com/u/1506722?s=40&amp;v=4" />
            </span>
          </a>
          <a
            href="https://github.com/hengkx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="ant-avatar ant-avatar-circle ant-avatar-image">
              <img src="https://avatars.githubusercontent.com/u/8358236?s=40&amp;v=4" />
            </span>
          </a>
          <a
            href="https://github.com/xrkffgg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="ant-avatar ant-avatar-circle ant-avatar-image">
              <img src="https://avatars.githubusercontent.com/u/29775873?s=40&amp;v=4" />
            </span>
          </a>
          <a
            href="https://github.com/ElderJames"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="ant-avatar ant-avatar-circle ant-avatar-image">
              <img src="https://avatars.githubusercontent.com/u/7550366?s=40&amp;v=4" />
            </span>
          </a>
          <a
            href="https://github.com/HeskeyBaozi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="ant-avatar ant-avatar-circle ant-avatar-image">
              <img src="https://avatars.githubusercontent.com/u/15819224?s=40&amp;v=4" />
            </span>
          </a>
          <a
            href="https://github.com/fisherspy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="ant-avatar ant-avatar-circle ant-avatar-image">
              <img src="https://avatars.githubusercontent.com/u/4652360?s=40&amp;v=4" />
            </span>
          </a>
          <a
            href="https://github.com/vertonghenb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="ant-avatar ant-avatar-circle ant-avatar-image">
              <img src="https://avatars.githubusercontent.com/u/10981553?s=40&amp;v=4" />
            </span>
          </a>
          <a
            href="https://github.com/ashishg-qburst"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="ant-avatar ant-avatar-circle ant-avatar-image">
              <img src="https://avatars.githubusercontent.com/u/20454953?s=40&amp;v=4" />
            </span>
          </a>
        </ul>
      </section>
    </div>
  );
}
