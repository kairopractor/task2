import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import Image from "next/image";
import bootstrapicons from "../../public/bootstrap-icons.png";
import bootstrapthemes from "../../public/bootstrap-themes.png";

export default function Home() {
  return (
    <div className="container">
      <div className="bd-masthead mb-3" id="content">
        <div className="container px-4 px-md-3">
          <div className="row align-items-lg-center">
            <div className="col-8 mx-auto col-md-4 order-md-2 col-lg-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="600"
                height="533"
                className="img-fluid mb-3 mb-md-0"
                role="img"
                viewBox="0 0 900 800"
              >
                <title>Bootstrap</title>
                <defs>
                  <filter
                    id="filter0_d"
                    width="704"
                    height="623.928"
                    x="98"
                    y="96"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood
                      floodOpacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feColorMatrix
                      in="SourceAlpha"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    ></feColorMatrix>
                    <feOffset dy="8"></feOffset>
                    <feGaussianBlur stdDeviation="16"></feGaussianBlur>
                    <feColorMatrix values="0 0 0 0 0.423529 0 0 0 0 0.0666667 0 0 0 0 0.956863 0 0 0 0.25 0"></feColorMatrix>
                    <feBlend
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow"
                    ></feBlend>
                    <feBlend
                      in="SourceGraphic"
                      in2="effect1_dropShadow"
                      result="shape"
                    ></feBlend>
                  </filter>
                  <filter
                    id="filter1_d"
                    width="704"
                    height="623.928"
                    x="98"
                    y="96"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood
                      floodOpacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feColorMatrix
                      in="SourceAlpha"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    ></feColorMatrix>
                    <feOffset dy="8"></feOffset>
                    <feGaussianBlur stdDeviation="16"></feGaussianBlur>
                    <feColorMatrix values="0 0 0 0 0.423529 0 0 0 0 0.0666667 0 0 0 0 0.956863 0 0 0 0.25 0"></feColorMatrix>
                    <feBlend
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow"
                    ></feBlend>
                    <feBlend
                      in="SourceGraphic"
                      in2="effect1_dropShadow"
                      result="shape"
                    ></feBlend>
                  </filter>
                  <filter
                    id="filter2_d"
                    width="260.144"
                    height="302.767"
                    x="327.804"
                    y="252.368"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood
                      floodOpacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feColorMatrix
                      in="SourceAlpha"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    ></feColorMatrix>
                    <feOffset dy="4"></feOffset>
                    <feGaussianBlur stdDeviation="8"></feGaussianBlur>
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix>
                    <feBlend
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow"
                    ></feBlend>
                    <feBlend
                      in="SourceGraphic"
                      in2="effect1_dropShadow"
                      result="shape"
                    ></feBlend>
                  </filter>
                  <filter
                    id="filter3_d"
                    width="261.369"
                    height="303.992"
                    x="327.192"
                    y="251.755"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood
                      floodOpacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feColorMatrix
                      in="SourceAlpha"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    ></feColorMatrix>
                    <feOffset dy="4"></feOffset>
                    <feGaussianBlur stdDeviation="8"></feGaussianBlur>
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix>
                    <feBlend
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow"
                    ></feBlend>
                    <feBlend
                      in="SourceGraphic"
                      in2="effect1_dropShadow"
                      result="shape"
                    ></feBlend>
                  </filter>
                  <linearGradient
                    id="paint1_linear"
                    x1="211.405"
                    x2="769.059"
                    y1="251.5"
                    y2="494.972"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#9013fe"></stop>
                    <stop offset=".995" stopColor="#6610f2"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear"
                    x1="363.642"
                    x2="515.493"
                    y1="319.901"
                    y2="465.49"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#fff"></stop>
                    <stop offset="1" stopColor="#f1e5fc"></stop>
                  </linearGradient>
                  <radialGradient
                    id="paint0_radial"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="rotate(90 25 425) scale(400)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#ced4da"></stop>
                    <stop offset="1" stopColor="#ced4da" stopOpacity="0"></stop>
                  </radialGradient>
                  <clipPath id="clip0">
                    <path fill="#fff" d="M0 0h900v800H0z"></path>
                  </clipPath>
                </defs>
                <g clipPath="url(#clip0)">
                  <circle
                    cx="450"
                    cy="400"
                    r="400"
                    fill="url(#paint0_radial)"
                  ></circle>
                  <path
                    fill="#ffc107"
                    fillRule="evenodd"
                    d="M138 539h98v46h-98v-46zm100-2v50H136v-50h102z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fill="#ffc107"
                    fillRule="evenodd"
                    d="M238 539h89a7 7 0 017 7v32a7 7 0 01-7 7h-89v-46zm89-2a9 9 0 019 9v32a9 9 0 01-9 9h-91v-50h91zm-281.816 0c-5.072 0-9.184 4.029-9.184 9v32c0 4.971 4.112 9 9.184 9H136v-50H45.184zM60 558a4 4 0 000 8h52a4 4 0 000-8H60z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fill="#007bff"
                    fillRule="evenodd"
                    d="M115 400a8 8 0 100-16 8 8 0 000 16zm0 2c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm-30 0c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm0-5a5 5 0 100-10 5 5 0 000 10zm53-15a4 4 0 00-4 4v12a4 4 0 004 4h12a4 4 0 004-4v-12a4 4 0 00-4-4h-12zm11.676 5.324a1.103 1.103 0 00-1.591.033l-5.115 6.517-3.084-3.084a1.105 1.105 0 00-1.562 1.563l3.898 3.898a1.103 1.103 0 001.589-.03l5.881-7.351a1.103 1.103 0 00-.016-1.546zM180 384h-12a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-12a2 2 0 00-2-2zm-12-2a4 4 0 00-4 4v12a4 4 0 004 4h12a4 4 0 004-4v-12a4 4 0 00-4-4h-12z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fill="#adb5bd"
                    fillRule="evenodd"
                    d="M473 554c0-5.523 4.477-10 10-10h260c5.523 0 10 4.477 10 10v130.125c0 5.523-4.477 10-10 10H626.646a7.994 7.994 0 00-5.64 2.327l-6.596 6.556c-.78.776-2.04.776-2.82 0l-6.596-6.556a7.994 7.994 0 00-5.64-2.327H483c-5.523 0-10-4.477-10-10V554zm10-8a8 8 0 00-8 8v29h276v-29a8 8 0 00-8-8H483zm268 39H475v99.125a8 8 0 008 8h116.354a10 10 0 017.05 2.908L613 701.59l6.596-6.557a10 10 0 017.05-2.908H743a8 8 0 008-8V585z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fill="#007bff"
                    fillRule="evenodd"
                    d="M503 74c0-5.523 4.477-10 10-10h260c5.523 0 10 4.477 10 10v160c0 5.523-4.477 10-10 10H513c-5.523 0-10-4.477-10-10V74zm10-8a8 8 0 00-8 8v29h276V74a8 8 0 00-8-8H513zm268 39H505v97h276v-97zm0 99H644v38h129a8 8 0 008-8v-30zm-139 38v-38H505v30a8 8 0 008 8h129z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fill="#007bff"
                    fillRule="evenodd"
                    d="M756.293 79.293a1 1 0 011.414 0L762 83.586l4.293-4.293a1 1 0 111.414 1.414L763.414 85l4.293 4.293a1 1 0 11-1.414 1.414L762 86.414l-4.293 4.293a1 1 0 11-1.414-1.414L760.586 85l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fill="#007bff"
                    d="M673 223a4 4 0 014-4h72a4 4 0 010 8h-72a4 4 0 01-4-4zm-140 0a4 4 0 014-4h72a4 4 0 010 8h-72a4 4 0 01-4-4z"
                  ></path>
                  <path
                    fill="#e83e8c"
                    fillRule="evenodd"
                    d="M757 432H475a7 7 0 00-7 7v32a7 7 0 007 7h282a7 7 0 007-7v-32a7 7 0 00-7-7zm-282-2a9 9 0 00-9 9v32a9 9 0 009 9h282a9 9 0 009-9v-32a9 9 0 00-9-9H475zm310 0a9 9 0 00-9 9v32a9 9 0 009 9h72a9 9 0 009-9v-32a9 9 0 00-9-9h-72zm10 21a4 4 0 000 8h52a4 4 0 000-8h-52z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fill="#dc3545"
                    fillRule="evenodd"
                    d="M825 336H541a6 6 0 100 12h284a6 6 0 100-12zm-284-2a8 8 0 000 16h284a8 8 0 000-16H541z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fill="#dc3545"
                    d="M533 342a8 8 0 018-8h242v16H541a8 8 0 01-8-8z"
                  ></path>
                  <path
                    fill="#adb5bd"
                    fillRule="evenodd"
                    d="M57 271a6 6 0 00-6 6v28a6 6 0 006 6h81.515a6 6 0 014.242 1.757l7.536 7.536a1 1 0 001.414 0l7.536-7.536a6 6 0 014.242-1.757H245a6 6 0 006-6v-28a6 6 0 00-6-6H57zm33 16a4 4 0 000 8h122a4 4 0 000-8H90z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fill="#20c997"
                    fillRule="evenodd"
                    d="M253 157c0-5.523-4.477-10-10-10H141c-5.523 0-10 4.477-10 10v39a1 1 0 002 0v-39a8 8 0 018-8h102a8 8 0 018 8v39a1 1 0 001 1h198a1 1 0 000-2H253v-38z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fill="#20c997"
                    d="M151 174a4 4 0 014-4h72a4 4 0 010 8h-72a4 4 0 01-4-4z"
                  ></path>
                  <path
                    fill="url(#paint1_linear)"
                    fillRule="evenodd"
                    d="M202.606 300.603c-8.615-28.187 6.531-60.366 36.506-68.398l309.643-82.969c29.975-8.031 59.181 12.264 65.814 40.982 6.371 27.588 17.095 62.662 33.744 89.141 16.7 26.562 36.732 40.854 62.058 36.589l7.125 26.591c-24.065 8.969-34.268 31.362-35.45 62.716-1.178 31.256 7.072 66.993 15.348 94.07 8.615 28.187-6.531 60.366-36.506 68.398l-309.643 82.969c-29.975 8.031-59.181-12.264-65.814-40.982-6.371-27.587-17.095-62.661-33.744-89.141-16.7-26.562-36.732-40.854-62.058-36.588l-7.125-26.592c24.065-8.969 34.268-31.362 35.45-62.715 1.178-31.257-7.072-66.994-15.348-94.071z"
                    clipRule="evenodd"
                    filter="url(#filter0_d)"
                  ></path>
                  <path
                    fillOpacity=".15"
                    fillRule="evenodd"
                    d="M239.37 233.171c-29.369 7.87-44.275 39.435-35.808 67.14 8.286 27.109 16.576 62.974 15.391 94.4-1.175 31.158-11.239 53.906-35.25 63.291l6.659 24.848c25.486-3.877 45.576 10.791 62.172 37.187 16.739 26.623 27.493 61.828 33.872 89.448 6.519 28.227 35.21 48.11 64.58 40.241l309.644-82.969c29.369-7.87 44.275-39.435 35.807-67.139-8.285-27.11-16.575-62.975-15.39-94.401 1.175-31.158 11.239-53.906 35.25-63.29l-6.659-24.849c-25.486 3.877-45.576-10.791-62.172-37.186-16.739-26.624-27.493-61.829-33.872-89.449-6.519-28.227-35.21-48.11-64.58-40.241L239.37 233.171zm471.001 82.777c-25.326 4.265-45.358-10.027-62.058-36.589-16.649-26.479-27.373-61.553-33.744-89.141-6.633-28.718-35.839-49.013-65.814-40.982l-309.643 82.969c-29.975 8.032-45.121 40.211-36.506 68.398 8.276 27.077 16.526 62.814 15.348 94.071-1.182 31.353-11.385 53.746-35.45 62.715l7.125 26.592c25.326-4.266 45.358 10.026 62.058 36.588 16.649 26.479 27.373 61.554 33.744 89.141 6.633 28.718 35.839 49.013 65.814 40.982l309.643-82.969c29.975-8.032 45.121-40.211 36.506-68.398-8.276-27.077-16.526-62.814-15.348-94.07 1.182-31.354 11.385-53.747 35.45-62.716l-7.125-26.591z"
                    clipRule="evenodd"
                    filter="url(#filter1_d)"
                  ></path>
                  <path
                    fill="url(#paint2_linear)"
                    d="M494.943 510.853c48.05-12.875 70.547-44.737 59.895-84.492-8.052-30.051-34.542-46.271-66.141-41.494l-.336-1.252c21.532-9.796 33.472-35.977 27.056-59.924-9.143-34.12-41.392-49.3-81.46-38.564l-88.221 23.639a2 2 0 00-1.414 2.449l59.481 221.988a2 2 0 002.45 1.414l88.69-23.764zM386.538 328.532l46.642-12.498c25.355-6.794 42.858.93 48.478 21.903 5.997 22.382-7.395 39.39-37.759 47.526l-39.286 10.527-18.075-67.458zm45.167 168.567l-19.92-74.345 46.328-12.414c33.181-8.891 53.753-.983 60.296 23.434 6.542 24.416-6.724 41.894-38.34 50.366l-48.364 12.959z"
                    filter="url(#filter2_d)"
                  ></path>
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M343.839 311.345a2.5 2.5 0 011.767-3.062l88.221-23.639c20.12-5.391 38.326-4.288 52.67 2.492 14.355 6.784 24.796 19.232 29.403 36.426 6.438 24.026-5.424 50.293-26.947 60.331l.111.414c31.637-4.594 58.171 11.749 66.257 41.925 5.36 20.004 2.385 38.065-8.009 52.744-10.386 14.667-28.139 25.902-52.24 32.36l-88.69 23.764a2.5 2.5 0 01-3.062-1.768l-59.481-221.987zm2.026-2.096a1.5 1.5 0 00-1.06 1.837l59.481 221.988a1.5 1.5 0 001.837 1.06l88.691-23.764c23.949-6.418 41.47-17.551 51.682-31.972 10.203-14.409 13.151-32.157 7.859-51.908-7.981-29.786-34.216-45.87-65.584-41.129l-.442.067-.561-2.093.386-.175c21.297-9.689 33.137-35.616 26.78-59.34-4.536-16.926-14.791-29.128-28.864-35.78-14.083-6.656-32.036-7.775-51.984-2.43l-88.221 23.639zm40.061 18.929l47.124-12.627c12.743-3.414 23.585-3.201 31.974.566 8.408 3.775 14.275 11.085 17.117 21.691 3.034 11.325 1.167 21.34-5.336 29.545-6.485 8.183-17.539 14.51-32.777 18.593l-39.768 10.656-18.334-68.424zm1.224.707l17.817 66.492 38.802-10.397c15.126-4.053 25.951-10.297 32.253-18.248 6.284-7.929 8.115-17.61 5.153-28.666-2.778-10.367-8.473-17.405-16.56-21.037-8.106-3.64-18.693-3.891-31.306-.512l-46.159 12.368zm24.022 93.515l46.812-12.543c16.638-4.458 30.197-4.729 40.447-.757 10.282 3.985 17.155 12.209 20.461 24.544 3.303 12.329 1.615 22.969-4.946 31.595-6.545 8.603-17.885 15.133-33.748 19.384l-48.846 13.088-20.18-75.311zm1.225.707l19.662 73.379 47.88-12.829c15.753-4.221 26.854-10.666 33.211-19.024 6.341-8.335 8.014-18.643 4.776-30.73-3.238-12.081-9.921-20.019-19.856-23.87-9.967-3.863-23.284-3.643-39.827.79l-45.846 12.284z"
                    clipRule="evenodd"
                    filter="url(#filter3_d)"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="col-md-8 order-md-1 col-lg-7 text-center text-md-start">
              <h1 className="mb-3">
                Build fast, responsive sites with Bootstrap
              </h1>
              <p className="lead mb-4">
                Quickly design and customize responsive mobile-first sites with
                Bootstrap, the world’s most popular front-end open source
                toolkit, featuring Sass variables and mixins, responsive grid
                system, extensive prebuilt components, and powerful JavaScript
                plugins.
              </p>

              <div className="d-flex flex-column flex-md-row">
                <a
                  href="/docs/5.1/getting-started/introduction/"
                  className="btn btn-lg btn-bd-primary mb-3 me-md-3"
                >
                  Get started
                </a>
                <a
                  href="/docs/5.1/getting-started/download/"
                  className="btn btn-lg btn-outline-secondary mb-3"
                >
                  Download
                </a>
              </div>
              <p className="text-muted mb-0">
                Currently <strong>v5.1.1</strong>
                <span className="px-1">·</span>
                <a
                  href="https://getbootstrap.com/docs/4.6/getting-started/introduction/"
                  className="link-secondary"
                >
                  v4.6.x docs
                </a>
                <span className="px-1">·</span>
                <a href="/docs/versions/" className="link-secondary">
                  All releases
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container masthead-followup px-4 px-md-3">
        <section className="row mb-5 pb-md-4 align-items-center">
          <div className="col-md-5">
            <h2 className="display-5 fw-normal">Installation</h2>
            <p className="lead fw-normal">
              Install Bootstrap’s source Sass and JavaScript files via npm,
              Composer, or Meteor.
            </p>
            <p>
              Package managed installs don’t include documentation or our full
              build scripts. You can also{" "}
              <a href="https://github.com/twbs/bootstrap-npm-starter">
                use our npm template repo
              </a>{" "}
              to quickly generate a Bootstrap project via npm.
            </p>
            <a
              className="btn btn-lg btn-outline-primary mb-3"
              href="/docs/5.1/getting-started/download/"
            >
              Read installation docs
            </a>
          </div>
          <div className="col-md-7 ps-md-5">
            <div className="bd-clipboard">
              <button
                type="button"
                className="btn-clipboard"
                title=""
                data-bs-original-title="Copy to clipboard"
              >
                Copy
              </button>
            </div>
            <div className="highlight">
              <pre tabIndex="0" className="chroma">
                <code className="language-sh" data-lang="sh">
                  npm install bootstrap
                </code>
              </pre>
            </div>
            <div className="bd-clipboard">
              <button
                type="button"
                className="btn-clipboard"
                title=""
                data-bs-original-title="Copy to clipboard"
              >
                Copy
              </button>
            </div>
            <div className="highlight">
              <pre tabIndex="0" className="chroma">
                <code className="language-sh" data-lang="sh">
                  gem install bootstrap -v 5.1.1
                </code>
              </pre>
            </div>
          </div>
        </section>

        <section className="row mb-5 pb-md-4 align-items-center">
          <div className="col-md-5">
            <h2 className="display-5 fw-normal">jsDelivr</h2>
            <p className="lead fw-normal">
              When you only need to include Bootstrap’s compiled CSS or JS, you
              can use <a href="https://www.jsdelivr.com/">jsDelivr</a>.
            </p>
            <p>
              See it in action with our simple{" "}
              <a href="/docs/5.1/getting-started/introduction/#starter-template">
                starter template
              </a>
              , or <a href="/docs/5.1/examples/">browse the examples</a> to
              jumpstart your next project. You can also choose to include Popper
              and our JS{" "}
              <a href="/docs/5.1/getting-started/introduction/#separate">
                separately
              </a>
              .
            </p>
            <a
              className="btn btn-lg btn-outline-primary mb-3"
              href="/docs/5.1/getting-started/introduction/"
            >
              Explore the docs
            </a>
          </div>
          <div className="col-md-7 ps-md-5">
            <div className="bd-clipboard">
              <button
                type="button"
                className="btn-clipboard"
                title=""
                data-bs-original-title="Copy to clipboard"
              >
                Copy
              </button>
            </div>
            <div className="highlight">
              <pre tabIndex="0" className="chroma">
                <code className="language-html" data-lang="html">
                  <span className="c">&lt;!-- CSS only --&gt;</span>
                  <span className="p">&lt;</span>
                  <span className="nt">link</span>{" "}
                  <span className="na">href</span>
                  <span className="o">=</span>
                  <span className="s">
                    "https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
                  </span>{" "}
                  <span className="na">rel</span>
                  <span className="o">=</span>
                  <span className="s">"stylesheet"</span>{" "}
                  <span className="na">integrity</span>
                  <span className="o">=</span>
                  <span className="s">
                    "sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
                  </span>{" "}
                  <span className="na">crossorigin</span>
                  <span className="o">=</span>
                  <span className="s">"anonymous"</span>
                  <span className="p">&gt;</span>
                </code>
              </pre>
            </div>
            <div className="bd-clipboard">
              <button
                type="button"
                className="btn-clipboard"
                title=""
                data-bs-original-title="Copy to clipboard"
              >
                Copy
              </button>
            </div>
            <div className="highlight">
              <pre tabIndex="0" className="chroma">
                <code className="language-html" data-lang="html">
                  <span className="c">
                    &lt;!-- JavaScript Bundle with Popper --&gt;
                  </span>
                  <span className="p">&lt;</span>
                  <span className="nt">script</span>{" "}
                  <span className="na">src</span>
                  <span className="o">=</span>
                  <span className="s">
                    "https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"
                  </span>{" "}
                  <span className="na">integrity</span>
                  <span className="o">=</span>
                  <span className="s">
                    "sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ"
                  </span>{" "}
                  <span className="na">crossorigin</span>
                  <span className="o">=</span>
                  <span className="s">"anonymous"</span>
                  <span className="p">&gt;&lt;/</span>
                  <span className="nt">script</span>
                  <span className="p">&gt;</span>
                </code>
              </pre>
            </div>
          </div>
        </section>

        <section className="row mb-5 pb-md-4 align-items-center">
          <div className="col-md-5">
            <h2 className="display-5 fw-normal">Bootstrap Icons</h2>
            <p className="lead fw-normal">
              For the first time ever, Bootstrap has its own open source SVG
              icon library, designed to work best with our components and
              documentation.
            </p>
            <p>
              Bootstrap Icons are designed to work best with Bootstrap
              components, but they’ll work in any project. They’re SVGs, so they
              scale quickly and easily, can be implemented in several ways, and
              can be styled with CSS.
            </p>
            <a
              href="https://icons.getbootstrap.com/"
              className="btn btn-lg btn-outline-primary mb-3"
            >
              Get Bootstrap Icons
            </a>
          </div>
          <div className="col-md-7 ps-md-5">
            <Image src={bootstrapicons} />
          </div>
        </section>

        <section className="row mb-5 pb-md-4 align-items-center">
          <div className="col-md-5">
            <h2 className="display-5 fw-normal">Official Themes</h2>
            <p className="lead fw-normal">
              Take Bootstrap to the next level with premium themes from the{" "}
              <a href="https://themes.getbootstrap.com/">
                official Bootstrap Themes marketplace
              </a>
              .
            </p>
            <p>
              Themes are built on Bootstrap as their own extended frameworks,
              rich with new components and plugins, documentation, and powerful
              build tools.
            </p>
            <a
              href="https://themes.getbootstrap.com/"
              className="btn btn-lg btn-outline-primary mb-3"
            >
              Browse themes
            </a>
          </div>
          <div className="col-md-7 ps-md-5">
            <Image src={bootstrapthemes} />
          </div>
        </section>
      </div>
    </div>
  );
}