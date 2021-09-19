import "tailwindcss/tailwind.css";
import styles from "./TailwindPage.module.css";
import Head from "next/head";
const curleyBracesOpen = "{";
const curleyBracesClose = "}";

export default function Home() {
  return (
    <div
      id="content-wrapper"
      className={
        styles.root +
        " min-w-0 w-full flex-auto lg:static lg:max-h-full lg:overflow-visible"
      }
    >
      <div className="w-full flex">
        <div className="min-w-0 flex-auto px-4 sm:px-6 xl:px-8 pt-10 pb-24 lg:pb-16">
          <div className="pb-10 border-b border-gray-200 mb-10">
            <div>
              <h1 className="inline-block text-3xl font-extrabold text-gray-900 tracking-tight">
                Installation
              </h1>
            </div>
            <p className="mt-1 text-lg text-gray-500">
              Learn how to get Tailwind CSS up and running in your project.
            </p>
          </div>
          <div>
            <div className="prose">
              <h2
                className="group flex whitespace-pre-wrap"
                id="integration-guides"
              >
                <a
                  href="#integration-guides"
                  className="absolute after:hash opacity-0 group-hover:opacity-100"
                  aria-label="Anchor"
                ></a>
                <span>Integration guides</span>
              </h2>
              <p>
                Installing Tailwind CSS can be a slightly different process
                depending on what other frameworks/tools you’re using, so we’ve
                put together a bunch of guides that cover popular setups.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
              <a
                className="flex flex-col items-center py-4 shadow-sm ring-1 ring-black ring-opacity-5 rounded-xl"
                href="/docs/guides/nextjs"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="96"
                  height="48"
                  fill="none"
                  viewBox="0 0 96 48"
                  className="h-12 w-auto"
                >
                  <path
                    fill="#000"
                    d="M33.663 16.442h12.38v.986H34.798v7.422h10.575v.986H34.798v8.149h11.374v.986H33.663V16.442zm13.49 0h1.315l5.829 8.148 5.957-8.148 8.104-10.35-13.313 19.355 6.86 9.524h-1.367l-6.241-8.668-6.267 8.668h-1.342l6.912-9.524-6.447-9.005zm15.242.986v-.986h14.108v.986h-6.5v17.543H68.87V17.428h-6.473zm-44.22-.986h1.42l19.56 29.335L31.07 34.97 19.362 17.843l-.052 17.128h-1.134V16.442zM76.39 33.687a.401.401 0 01-.406-.412c0-.233.174-.413.406-.413a.4.4 0 01.405.413.4.4 0 01-.405.412zm1.115-1.086h.607c.009.33.25.551.602.551.395 0 .618-.238.618-.684v-2.825h.619v2.828c0 .804-.464 1.266-1.232 1.266-.72 0-1.214-.449-1.214-1.136zm3.254-.035h.613c.052.379.422.62.955.62.496 0 .86-.258.86-.612 0-.305-.23-.488-.758-.612l-.514-.125c-.72-.169-1.048-.518-1.048-1.105 0-.712.58-1.186 1.448-1.186.81 0 1.4.474 1.436 1.147h-.602c-.058-.368-.378-.599-.842-.599-.488 0-.814.236-.814.596 0 .285.21.449.73.57l.438.109c.817.19 1.154.523 1.154 1.124 0 .765-.592 1.244-1.535 1.244-.883 0-1.477-.457-1.521-1.172z"
                  ></path>
                </svg>
                <div className="mt-3 text-sm text-gray-900 font-semibold sm:mt-2">
                  Next.js
                </div>
              </a>
              <a
                className="flex flex-col items-center py-4 shadow-sm ring-1 ring-black ring-opacity-5 rounded-xl"
                href="/docs/guides/vue-3-vite"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  fill="none"
                  viewBox="0 0 48 48"
                  className="h-12 w-auto"
                >
                  <path fill="#fff" d="M0 0h48v48H0z"></path>
                  <path
                    fill="#435466"
                    d="M24 14.502l-5.202-9.01h-7.446L24 27.401 36.65 5.492h-7.447L24 14.502z"
                  ></path>
                  <path
                    fill="#4DBA87"
                    d="M38.382 5.492L24.001 30.401 9.62 5.492H1.477L24 44.507 46.525 5.492h-8.143z"
                  ></path>
                </svg>
                <div className="mt-3 text-sm text-gray-900 font-semibold sm:mt-2">
                  Vue 3 (Vite)
                </div>
              </a>
              <a
                className="flex flex-col items-center py-4 shadow-sm ring-1 ring-black ring-opacity-5 rounded-xl"
                href="/docs/guides/laravel"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  fill="none"
                  viewBox="0 0 48 48"
                  className="h-12 w-auto"
                >
                  <g clip-path="url(#laravel_svg__clip0)">
                    <path
                      fill="#FF2D20"
                      d="M45.16 12.562c.015.059.023.12.023.18v9.482a.692.692 0 01-.347.6l-7.958 4.582v9.081a.693.693 0 01-.346.6L19.92 46.65c-.038.022-.08.035-.121.05-.015.005-.03.015-.047.02a.695.695 0 01-.354 0c-.019-.006-.036-.016-.054-.023-.038-.014-.078-.026-.114-.047L2.62 37.087a.693.693 0 01-.347-.6V8.042c0-.062.01-.123.025-.182.005-.02.017-.038.024-.057.013-.037.025-.074.044-.108.013-.022.032-.04.047-.06.02-.029.038-.057.062-.081.02-.02.046-.035.068-.052.025-.02.048-.043.076-.06h.001l8.305-4.781a.693.693 0 01.691 0l8.305 4.781h.002c.027.018.05.04.076.059.022.017.047.033.067.052.024.025.042.053.062.081.015.02.035.039.047.061.02.035.031.071.045.108.007.02.019.038.024.058.016.06.024.12.024.181v17.767l6.92-3.985V12.74c0-.06.01-.121.025-.18.006-.02.017-.038.024-.058.014-.036.026-.074.045-.107.013-.023.032-.04.047-.062.02-.027.038-.056.062-.08.02-.02.045-.035.067-.052.026-.02.049-.043.076-.06h.001l8.306-4.781a.692.692 0 01.691 0l8.305 4.782c.03.017.052.038.078.058.021.018.046.033.066.052.024.025.042.054.062.081.016.021.035.04.047.062.02.033.031.07.045.107.008.02.02.038.024.059zm-1.361 9.262v-7.885l-2.906 1.673-4.015 2.312v7.885l6.922-3.985h-.001zm-8.305 14.263v-7.89l-3.95 2.256-11.277 6.436v7.964l15.227-8.766zM3.658 9.24v26.848l15.225 8.766V36.89l-7.954-4.502-.002-.001-.004-.002c-.027-.015-.05-.038-.074-.057-.022-.017-.047-.031-.066-.05l-.002-.003c-.022-.021-.038-.048-.057-.072-.017-.024-.038-.044-.052-.068v-.002c-.016-.026-.026-.057-.037-.087-.011-.026-.026-.05-.033-.078-.008-.033-.01-.068-.013-.102-.004-.025-.01-.051-.01-.077V13.224L6.563 10.91 3.658 9.24v-.001zm7.613-5.18l-6.92 3.983 6.919 3.983 6.918-3.984L11.27 4.06h.001zm3.599 24.857l4.014-2.31V9.238l-2.906 1.673-4.015 2.312V30.59l2.907-1.674zM36.187 8.76l-6.92 3.983 6.92 3.983 6.917-3.984-6.917-3.982zm-.693 9.165l-4.015-2.312-2.906-1.673v7.885l4.014 2.31 2.907 1.675v-7.885zm-15.92 17.768L29.722 29.9l5.073-2.895-6.913-3.98-7.96 4.582-7.255 4.177 6.907 3.91z"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="laravel_svg__clip0">
                      <path fill="#fff" d="M0 0h48v48H0z"></path>
                    </clipPath>
                  </defs>
                </svg>
                <div className="mt-3 text-sm text-gray-900 font-semibold sm:mt-2">
                  Laravel
                </div>
              </a>
              <a
                className="flex flex-col items-center py-4 shadow-sm ring-1 ring-black ring-opacity-5 rounded-xl"
                href="/docs/guides/nuxtjs"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  fill="none"
                  viewBox="0 0 48 48"
                  className="h-12 w-auto"
                >
                  <path
                    fill="#00C58E"
                    d="M27.07 15.679l-1.505 2.65-5.15-9.068L4.607 37.098H15.31c0 1.464 1.168 2.65 2.608 2.65H4.607a2.6 2.6 0 01-2.258-1.325 2.69 2.69 0 010-2.65L18.158 7.934a2.6 2.6 0 012.258-1.326 2.6 2.6 0 012.258 1.326l4.397 7.744z"
                  ></path>
                  <path
                    fill="#2F495E"
                    d="M38.48 35.773l-9.906-17.442-1.505-2.651-1.506 2.65-9.905 17.443a2.69 2.69 0 000 2.651 2.6 2.6 0 002.258 1.326h18.303a2.6 2.6 0 002.259-1.325 2.69 2.69 0 000-2.652h.002zM17.916 37.1l9.153-16.117 9.15 16.117H17.916z"
                  ></path>
                  <path
                    fill="#108775"
                    d="M45.564 38.423a2.6 2.6 0 01-2.257 1.325H36.22c1.44 0 2.608-1.186 2.608-2.65H43.3L30.61 14.746l-2.034 3.582-1.506-2.65 1.282-2.258a2.6 2.6 0 012.258-1.325 2.6 2.6 0 012.258 1.325l12.696 22.35a2.69 2.69 0 010 2.652z"
                  ></path>
                </svg>
                <div className="mt-3 text-sm text-gray-900 font-semibold sm:mt-2">
                  Nuxt.js
                </div>
              </a>
              <a
                className="flex flex-col items-center py-4 shadow-sm ring-1 ring-black ring-opacity-5 rounded-xl"
                href="/docs/guides/create-react-app"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 48 48"
                  className="h-12 w-auto"
                >
                  <g clip-path="url(#create-react-app_svg__prefix__clip0)">
                    <path
                      fill="#09D3AC"
                      d="M40.421 21.99c0-2.068-2.434-3.902-6.176-5.022.9-3.802.507-6.828-1.285-7.851a2.866 2.866 0 00-1.438-.36c-1.671 0-3.784 1.167-5.918 3.187-2.134-2.005-4.24-3.166-5.91-3.166a2.84 2.84 0 00-1.458.366c-1.783 1.026-2.152 4.034-1.264 7.818-3.725 1.114-6.147 2.933-6.153 4.991-.006 2.06 2.438 3.902 6.18 5.019-.9 3.805-.51 6.828 1.285 7.851.437.245.933.37 1.434.36 1.675 0 3.788-1.167 5.922-3.187 2.13 2.005 4.238 3.166 5.91 3.166a2.87 2.87 0 001.458-.366c1.783-1.026 2.15-4.034 1.264-7.803 3.724-1.129 6.146-2.948 6.15-5.003zM26.98 12.621c2.458-2.2 3.994-2.437 4.54-2.437.254-.008.505.052.727.174.858.49 1.2 2.215.927 4.502a17.01 17.01 0 01-.3 1.738 29.323 29.323 0 00-3.776-.621 29.54 29.54 0 00-2.473-3.025 7.53 7.53 0 01.355-.33zm-7.44 11.07c.233.45.482.9.74 1.353.259.453.529.912.829 1.365a28.224 28.224 0 01-2.353-.438c.21-.762.477-1.512.783-2.28zm-.832-5.715c.76-.177 1.555-.324 2.38-.438-.3.444-.558.9-.828 1.377-.27.477-.508.9-.739 1.357a35.303 35.303 0 01-.813-2.296zm1.564 4.003a35.87 35.87 0 011.227-2.358 34.91 34.91 0 011.432-2.285 34.292 34.292 0 012.7-.099c.928.003 1.802.036 2.67.105.497.727.974 1.501 1.425 2.267.45.765.864 1.566 1.236 2.35-.369.786-.78 1.575-1.224 2.355a34.05 34.05 0 01-1.432 2.287 34.268 34.268 0 01-5.37-.006 33.674 33.674 0 01-1.428-2.265 35.2 35.2 0 01-1.224-2.35h-.012zm9.862-4.432c.816.114 1.606.26 2.353.435a27.04 27.04 0 01-.792 2.266 43.689 43.689 0 00-1.549-2.701h-.012zm.828 7.479c.258-.454.505-.908.739-1.36.3.78.6 1.549.81 2.3a26.13 26.13 0 01-2.377.434c.29-.444.57-.902.84-1.374h-.012zM25.61 13.973c.54.576 1.071 1.2 1.59 1.87a38.384 38.384 0 00-1.57-.036c-.53 0-1.073 0-1.599.036a25.4 25.4 0 011.579-1.87zm-6.657-3.602a1.46 1.46 0 01.741-.168 3.942 3.942 0 011.558.394c1.1.518 2.112 1.205 3.001 2.034l.352.322c-.882.945-1.7 1.948-2.45 3a29.68 29.68 0 00-3.796.62 15.277 15.277 0 01-.3-1.703c-.313-2.266.048-3.994.891-4.487l.003-.012zm-1.588 15.217a17.63 17.63 0 01-1.662-.6c-2.131-.9-3.452-2.056-3.452-3.043 0-.988 1.327-2.137 3.455-3.023a17.492 17.492 0 011.632-.582c.375 1.243.833 2.46 1.369 3.643a29.636 29.636 0 00-1.342 3.605zm6.903 5.733c-2.458 2.2-3.994 2.434-4.544 2.434a1.409 1.409 0 01-.726-.174c-.858-.49-1.2-2.215-.927-4.502.07-.584.17-1.163.3-1.735 1.244.286 2.505.493 3.775.618a29.157 29.157 0 002.473 3.025l-.35.334zm1.372-1.354c-.54-.576-1.072-1.2-1.594-1.87a33.9 33.9 0 001.573.036c.531 0 1.074 0 1.6-.033-.52.666-1.048 1.29-1.582 1.867h.003zm6.657 3.602a1.447 1.447 0 01-.744.177c-.547 0-2.101-.24-4.55-2.431l-.352-.322a29.522 29.522 0 002.446-3 29.104 29.104 0 003.8-.62c.132.583.237 1.153.3 1.703.297 2.263-.048 3.991-.903 4.48l.003.013zm3.241-8.536c-.513.21-1.056.405-1.632.58a29.554 29.554 0 00-1.372-3.645 29.44 29.44 0 001.348-3.601c.564.172 1.118.372 1.662.6 2.128.9 3.452 2.056 3.449 3.044-.003.987-1.327 2.124-3.458 3.01l.003.012zm-9.928-.306a2.755 2.755 0 10.006-5.51 2.755 2.755 0 00-.006 5.51zM7.302 5.365v33.21h36.637V5.365H7.302zm35.205 31.781H8.737V6.796h33.77v30.35zm-25.51-10.174c-.901 3.805-.511 6.828 1.284 7.851.437.245.933.37 1.434.36 1.675 0 3.788-1.167 5.922-3.187 2.13 2.005 4.238 3.166 5.91 3.166a2.87 2.87 0 001.458-.366c1.783-1.026 2.15-4.034 1.264-7.803 3.724-1.117 6.146-2.936 6.15-4.991.002-2.056-2.435-3.902-6.177-5.022.9-3.802.507-6.828-1.285-7.851a2.866 2.866 0 00-1.438-.36c-1.671 0-3.784 1.167-5.918 3.187-2.134-2.005-4.24-3.166-5.91-3.166a2.84 2.84 0 00-1.458.366c-1.783 1.026-2.152 4.034-1.264 7.818-3.725 1.114-6.147 2.933-6.153 4.991-.006 2.06 2.44 3.884 6.183 5.007h-.003zm7.265 4.349c-2.458 2.2-3.994 2.434-4.544 2.434a1.409 1.409 0 01-.726-.174c-.858-.49-1.2-2.215-.927-4.502.07-.584.17-1.163.3-1.735 1.244.286 2.505.493 3.775.618a29.157 29.157 0 002.473 3.025l-.35.334zm7.44-11.072c-.237-.45-.483-.9-.744-1.354-.26-.453-.54-.9-.816-1.347.816.114 1.606.26 2.353.435-.22.741-.483 1.5-.79 2.266h-.002zm.817 5.702a26.13 26.13 0 01-2.377.435 34.84 34.84 0 001.567-2.734 24.8 24.8 0 01.804 2.314l.006-.015zm-1.564-4.006c-.369.786-.78 1.575-1.224 2.355a34.05 34.05 0 01-1.432 2.287 34.316 34.316 0 01-5.37-.006 33.674 33.674 0 01-1.428-2.265 35.375 35.375 0 01-1.236-2.35 35.87 35.87 0 011.227-2.36 34.91 34.91 0 011.432-2.284 34.292 34.292 0 012.7-.099c.928.003 1.802.036 2.67.105.497.727.974 1.501 1.425 2.267.45.765.867 1.581 1.24 2.364l-.004-.014zm-9.847 4.465a28.224 28.224 0 01-2.353-.438c.222-.738.49-1.5.795-2.266.234.45.483.9.742 1.354.258.453.516.897.816 1.35zm-.837-7.503c-.262.45-.508.9-.739 1.357a30.191 30.191 0 01-.825-2.287c.76-.177 1.555-.324 2.38-.438-.28.444-.546.903-.816 1.368zm5.366 11.06c-.54-.576-1.072-1.2-1.594-1.87a33.9 33.9 0 001.573.036c.531 0 1.074 0 1.6-.033a27.702 27.702 0 01-1.58 1.867zm6.657 3.602a1.447 1.447 0 01-.744.177c-.547 0-2.101-.24-4.55-2.431l-.352-.322a29.522 29.522 0 002.446-3 29.106 29.106 0 003.8-.62c.132.583.237 1.153.3 1.703.3 2.263-.045 3.991-.9 4.48v.013zm1.585-15.205c.564.172 1.118.372 1.662.6 2.128.9 3.452 2.056 3.449 3.044-.003.987-1.324 2.149-3.455 3.034-.513.21-1.056.405-1.632.58a29.554 29.554 0 00-1.372-3.645 29.431 29.431 0 001.348-3.625v.012zm-6.903-5.73c2.458-2.2 3.994-2.437 4.54-2.437.254-.008.505.052.727.174.858.49 1.2 2.215.927 4.502a17.01 17.01 0 01-.3 1.738 29.306 29.306 0 00-3.776-.621 29.54 29.54 0 00-2.473-3.025c.114-.123.235-.235.358-.343l-.003.012zm-1.366 1.339c.54.576 1.071 1.2 1.59 1.87a38.384 38.384 0 00-1.57-.036c-.53 0-1.073 0-1.599.036a25.4 25.4 0 011.579-1.87zm-6.657-3.602a1.46 1.46 0 01.741-.168 3.942 3.942 0 011.558.394c1.1.518 2.112 1.205 3.001 2.034l.352.322c-.882.945-1.7 1.948-2.45 3a29.68 29.68 0 00-3.796.62 15.277 15.277 0 01-.3-1.703c-.313-2.266.048-3.994.891-4.487l.003-.012zm-3.247 8.551a17.492 17.492 0 011.632-.582c.375 1.243.833 2.46 1.369 3.643a29.623 29.623 0 00-1.348 3.602 17.63 17.63 0 01-1.662-.6c-2.131-.9-3.452-2.056-3.452-3.043 0-.988 1.333-2.134 3.46-3.02zm9.904.3a2.755 2.755 0 102.752 2.758 2.751 2.751 0 00-2.752-2.773v.015zm0 0a2.755 2.755 0 102.752 2.758 2.751 2.751 0 00-2.752-2.773v.015zm0 0a2.755 2.755 0 102.752 2.758 2.751 2.751 0 00-2.752-2.773v.015zm14.811 2.773c0-2.067-2.434-3.901-6.176-5.02.9-3.803.507-6.829-1.285-7.852a2.866 2.866 0 00-1.438-.36c-1.671 0-3.784 1.167-5.918 3.187-2.134-2.005-4.24-3.166-5.91-3.166a2.84 2.84 0 00-1.458.366c-1.783 1.026-2.152 4.034-1.264 7.818-3.725 1.114-6.147 2.933-6.153 4.991-.006 2.06 2.438 3.902 6.18 5.019-.9 3.805-.51 6.828 1.285 7.851.437.245.933.37 1.434.36 1.675 0 3.788-1.167 5.922-3.187 2.13 2.005 4.238 3.166 5.91 3.166a2.87 2.87 0 001.458-.366c1.783-1.026 2.15-4.034 1.264-7.803 3.724-1.135 6.146-2.954 6.15-5.01v.006zM26.98 12.623c2.458-2.2 3.994-2.437 4.54-2.437.254-.008.505.052.727.174.858.49 1.2 2.215.927 4.502a17.01 17.01 0 01-.3 1.738 29.323 29.323 0 00-3.776-.621 29.54 29.54 0 00-2.473-3.025 7.53 7.53 0 01.355-.33zm-7.44 11.07c.233.45.482.9.74 1.353.259.453.529.912.829 1.365a28.224 28.224 0 01-2.353-.438c.21-.762.477-1.512.783-2.28zm-.832-5.715c.76-.177 1.555-.324 2.38-.438-.3.444-.558.9-.828 1.377-.27.477-.508.9-.739 1.357a35.303 35.303 0 01-.813-2.296zm1.564 4.003a35.87 35.87 0 011.227-2.358 34.91 34.91 0 011.432-2.285 34.292 34.292 0 012.7-.099c.928.003 1.802.036 2.67.105.497.727.974 1.501 1.425 2.267.45.765.864 1.566 1.236 2.35-.369.786-.78 1.575-1.224 2.355a34.05 34.05 0 01-1.432 2.287 34.268 34.268 0 01-5.37-.006 33.674 33.674 0 01-1.428-2.265 35.2 35.2 0 01-1.224-2.35h-.012zm9.862-4.432c.816.114 1.606.26 2.353.435a27.04 27.04 0 01-.792 2.266 43.689 43.689 0 00-1.549-2.701h-.012zm.828 7.479c.258-.454.505-.908.739-1.36.3.78.6 1.549.81 2.3a26.13 26.13 0 01-2.377.434c.29-.444.57-.902.84-1.374h-.012zM25.61 13.973c.54.576 1.071 1.2 1.59 1.87a38.384 38.384 0 00-1.57-.036c-.53 0-1.073 0-1.599.036a25.4 25.4 0 011.579-1.87zm-6.657-3.602a1.46 1.46 0 01.741-.168 3.942 3.942 0 011.558.394c1.1.518 2.112 1.205 3.001 2.034l.352.322c-.882.945-1.7 1.948-2.45 3a29.68 29.68 0 00-3.796.62 15.277 15.277 0 01-.3-1.703c-.313-2.266.048-3.994.891-4.487l.003-.012zm-1.588 15.217a17.63 17.63 0 01-1.662-.6c-2.131-.9-3.452-2.056-3.452-3.043 0-.988 1.327-2.137 3.455-3.023a17.492 17.492 0 011.632-.582c.375 1.243.833 2.46 1.369 3.643a29.636 29.636 0 00-1.342 3.605zm6.903 5.733c-2.458 2.2-3.994 2.434-4.544 2.434a1.409 1.409 0 01-.726-.174c-.858-.49-1.2-2.215-.927-4.502.07-.584.17-1.163.3-1.735 1.244.286 2.505.493 3.775.618a29.157 29.157 0 002.473 3.025l-.35.334zm1.372-1.354c-.54-.576-1.072-1.2-1.594-1.87a33.9 33.9 0 001.573.036c.531 0 1.074 0 1.6-.033-.52.666-1.048 1.29-1.582 1.867h.003zm6.657 3.602a1.447 1.447 0 01-.744.177c-.547 0-2.101-.24-4.55-2.431l-.352-.322a29.522 29.522 0 002.446-3 29.104 29.104 0 003.8-.62c.132.583.237 1.153.3 1.703.297 2.263-.048 3.991-.903 4.48l.003.013zm3.241-8.536c-.513.21-1.056.405-1.632.58a29.554 29.554 0 00-1.372-3.645 29.44 29.44 0 001.348-3.601c.564.172 1.118.372 1.662.6 2.128.9 3.452 2.056 3.449 3.044-.003.987-1.327 2.124-3.458 3.01l.003.012zm-9.928-.306a2.755 2.755 0 10.006-5.51 2.755 2.755 0 00-.006 5.51zM4.805 41.084V7.862L3.367 9.303v33.213h36.631l1.435-1.432H4.805z"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="create-react-app_svg__prefix__clip0">
                      <path fill="#fff" d="M0 0h48v48H0z"></path>
                    </clipPath>
                  </defs>
                </svg>
                <div className="mt-3 text-sm text-gray-900 font-semibold sm:mt-2">
                  Create React App
                </div>
              </a>
              <a
                className="flex flex-col items-center py-4 shadow-sm ring-1 ring-black ring-opacity-5 rounded-xl"
                href="/docs/guides/gatsby"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  fill="none"
                  viewBox="0 0 48 48"
                  className="h-12 w-auto"
                >
                  <path
                    fill="#fff"
                    d="M41.282 24h-11v3.143h7.543c-1.1 4.715-4.557 8.643-9.114 10.215L10.64 19.286c1.885-5.5 7.228-9.428 13.357-9.428 4.714 0 8.957 2.357 11.628 5.971l2.357-2.043c-3.142-4.243-8.171-7.071-13.985-7.071-8.172 0-15.086 5.814-16.815 13.514l20.743 20.743c7.543-1.886 13.357-8.8 13.357-16.971zm-34.571.158c0 4.4 1.729 8.643 5.028 11.943 3.3 3.3 7.7 5.028 11.943 5.028L6.711 24.158z"
                  ></path>
                  <path
                    fill="#639"
                    d="M24 2C11.9 2 2 11.9 2 24s9.9 22 22 22 22-9.9 22-22S36.1 2 24 2zM11.743 36.257c-3.3-3.3-5.029-7.7-5.029-11.943l17.129 16.972c-4.4-.157-8.8-1.729-12.1-5.029zm16.028 4.557L7.186 20.23C8.914 12.529 15.829 6.714 24 6.714c5.814 0 10.843 2.829 13.986 7.072l-2.357 2.043C32.957 12.214 28.714 9.857 24 9.857c-6.129 0-11.314 3.929-13.357 9.429l18.071 18.071c4.557-1.571 8.015-5.5 9.115-10.214h-7.543V24h11c0 8.171-5.815 15.086-13.515 16.814z"
                  ></path>
                </svg>
                <div className="mt-3 text-sm text-gray-900 font-semibold sm:mt-2">
                  Gatsby
                </div>
              </a>
            </div>
            <div className="prose">
              <p>
                Don’t see your favorite tool in the list? We’re always working
                on new guides, but in the mean time you can follow the
                instructions for{" "}
                <a href="#installing-tailwind-css-as-a-post-css-plugin">
                  installing Tailwind CSS as a PostCSS plugin
                </a>{" "}
                instead to get set up in no time.
              </p>
              <h2
                className="group flex whitespace-pre-wrap"
                id="installing-tailwind-css-as-a-post-css-plugin"
              >
                <a
                  href="#installing-tailwind-css-as-a-post-css-plugin"
                  className="absolute after:hash opacity-0 group-hover:opacity-100"
                  aria-label="Anchor"
                ></a>
                <span>Installing Tailwind CSS as a PostCSS plugin</span>
              </h2>
              <p>
                <em>Tailwind CSS requires Node.js 12.13.0 or higher.</em>
              </p>
              <p>
                For most real-world projects, we recommend installing Tailwind
                as a PostCSS plugin. Most modern frameworks use PostCSS under
                the hood already, and there’s a good chance you’ve used or are
                currently using other PostCSS plugins like{" "}
                <a href="https://github.com/postcss/autoprefixer">
                  autoprefixer
                </a>
                .
              </p>
              <p>
                If you’ve never heard of PostCSS or are wondering how it’s
                different from tools like Sass, read our guide on{" "}
                <a href="/docs/using-with-preprocessors#using-post-css-as-your-preprocessor">
                  using PostCSS as your preprocessor
                </a>{" "}
                for an introduction.
              </p>
              <p>
                If this is a bit over your head and you’d like to try Tailwind
                without configuring PostCSS, read our instructions on{" "}
                <a href="#using-tailwind-cli">using Tailwind CLI</a> instead.
              </p>
              <h3
                className="group flex whitespace-pre-wrap"
                id="install-tailwind-via-npm"
              >
                <a
                  href="#install-tailwind-via-npm"
                  className="absolute after:hash opacity-0 group-hover:opacity-100"
                  aria-label="Anchor"
                ></a>
                <span>Install Tailwind via npm</span>
              </h3>
              <p>
                For most projects (and to take advantage of Tailwind’s
                customization features), you’ll want to install Tailwind and its
                peer-dependencies via npm.
              </p>
              <div className="my-6 rounded-xl overflow-hidden bg-gray-800">
                <pre className="language-shell">
                  <code className="language-shell">
                    <span className="token function">npm</span>{" "}
                    <span className="token function">install</span> -D
                    tailwindcss@latest postcss@latest autoprefixer@latest
                  </code>
                </pre>
              </div>
              <p>
                Since Tailwind{" "}
                <a href="/docs/browser-support#vendor-prefixes">
                  does not automatically add vendor prefixes
                </a>{" "}
                to the CSS it generates, we recommend installing{" "}
                <a href="https://github.com/postcss/autoprefixer">
                  autoprefixer
                </a>{" "}
                to handle this for you like we’ve shown in the snippet above.
              </p>
              <p>
                If you’re integrating Tailwind with a tool that relies on an
                older version of PostCSS, you may see an error like this:
              </p>
              <div className="my-6 rounded-xl overflow-hidden bg-gray-800">
                <pre className="language-shell">
                  <code className="language-shell">
                    Error: PostCSS plugin tailwindcss requires PostCSS{" "}
                    <span className="token number">8</span>.
                  </code>
                </pre>
              </div>
              <p>
                In this case, you should{" "}
                <a href="#post-css-7-compatibility-build">
                  install the PostCSS 7 compatibility build
                </a>{" "}
                instead.
              </p>
              <h3
                className="group flex whitespace-pre-wrap"
                id="add-tailwind-as-a-post-css-plugin"
              >
                <a
                  href="#add-tailwind-as-a-post-css-plugin"
                  className="absolute after:hash opacity-0 group-hover:opacity-100"
                  aria-label="Anchor"
                ></a>
                <span>Add Tailwind as a PostCSS plugin</span>
              </h3>
              <p>
                Add <code>tailwindcss</code> and <code>autoprefixer</code> to
                your PostCSS configuration. Most of the time this is a{" "}
                <code>postcss.config.js</code> file at the root of your project,
                but it could also be a <code>.postcssrc</code> file, or{" "}
                <code>postcss</code> key in your <code>package.json</code> file.
              </p>
              <div className="my-6 rounded-xl overflow-hidden bg-gray-800">
                <pre className="language-js">
                  <code className="language-js">
                    <span className="token comment">// postcss.config.js</span>
                    module<span className="token punctuation">.</span>
                    <span className="token property-access">exports</span>{" "}
                    <span className="token operator">=</span>{" "}
                    <span className="token punctuation">
                      {curleyBracesOpen}
                    </span>
                    plugins<span className="token operator">:</span>{" "}
                    <span className="token punctuation">
                      {curleyBracesOpen}
                    </span>
                    tailwindcss<span className="token operator">:</span>{" "}
                    <span className="token punctuation">
                      {curleyBracesOpen}
                    </span>
                    <span className="token punctuation">
                      {curleyBracesOpen}
                    </span>
                    <span className="token punctuation">,</span>
                    autoprefixer<span className="token operator">:</span>{" "}
                    <span className="token punctuation">
                      {curleyBracesOpen}
                    </span>
                    <span className="token punctuation">
                      {curleyBracesOpen}
                    </span>
                    <span className="token punctuation">,</span>
                    <span className="token punctuation">
                      {curleyBracesOpen}
                    </span>
                    <span className="token punctuation">
                      {curleyBracesOpen}
                    </span>
                  </code>
                </pre>
              </div>
              <p>
                If you aren’t sure where PostCSS plugins are configured for the
                tools you’re using, you’ll want to refer to the documentation
                for those tools to learn where this should go.
              </p>
              <p>
                If you’re using any other PostCSS plugins, you should read our
                documentation on{" "}
                <a href="/docs/using-with-preprocessors">
                  using PostCSS as your preprocessor
                </a>{" "}
                for more details about the best way to order them with Tailwind.
              </p>
              <h3
                className="group flex whitespace-pre-wrap"
                id="create-your-configuration-file"
              >
                <a
                  href="#create-your-configuration-file"
                  className="absolute after:hash opacity-0 group-hover:opacity-100"
                  aria-label="Anchor"
                ></a>
                <span>Create your configuration file</span>
              </h3>
              <p>
                If you’d like to customize your Tailwind installation, generate
                a config file for your project using the Tailwind CLI utility
                included when you install the <code>tailwindcss</code> npm
                package:
              </p>
              <div className="my-6 rounded-xl overflow-hidden bg-gray-800">
                <pre className="language-shell">
                  <code className="language-shell">npx tailwindcss init</code>
                </pre>
              </div>
              <p>
                This will create a minimal <code>tailwind.config.js</code> file
                at the root of your project:
              </p>
              <div className="my-6 rounded-xl overflow-hidden bg-gray-800">
                <pre className="language-js">
                  <code className="language-js">
                    <span className="token comment">// tailwind.config.js</span>
                    module<span className="token punctuation">.</span>
                    <span className="token property-access">exports</span>{" "}
                    <span className="token operator">=</span>{" "}
                    <span className="token punctuation">
                      {curleyBracesOpen}
                    </span>
                    purge<span className="token operator">:</span>{" "}
                    <span className="token punctuation">[</span>
                    <span className="token punctuation">]</span>
                    <span className="token punctuation">,</span>
                    darkMode<span className="token operator">:</span>{" "}
                    <span className="token boolean">false</span>
                    <span className="token punctuation">,</span>{" "}
                    <span className="token comment">
                      // or 'media' or 'class'
                    </span>
                    theme<span className="token operator">:</span>{" "}
                    <span className="token punctuation">
                      {curleyBracesOpen}
                    </span>
                    extend<span className="token operator">:</span>{" "}
                    <span className="token punctuation">
                      {curleyBracesOpen}
                    </span>
                    <span className="token punctuation">
                      {curleyBracesOpen}
                    </span>
                    <span className="token punctuation">,</span>
                    <span className="token punctuation">
                      {curleyBracesOpen}
                    </span>
                    <span className="token punctuation">,</span>
                    variants<span className="token operator">:</span>{" "}
                    <span className="token punctuation">
                      {curleyBracesOpen}
                    </span>
                    <span className="token punctuation">
                      {curleyBracesOpen}
                    </span>
                    <span className="token punctuation">,</span>
                    plugins<span className="token operator">:</span>{" "}
                    <span className="token punctuation">[</span>
                    <span className="token punctuation">]</span>
                    <span className="token punctuation">,</span>
                    <span className="token punctuation">
                      {curleyBracesOpen}
                    </span>
                  </code>
                </pre>
              </div>
              <p>
                Learn more about configuring Tailwind in the{" "}
                <a href="/docs/configuration">configuration documentation</a>.
              </p>
              <h3
                className="group flex whitespace-pre-wrap"
                id="include-tailwind-in-your-css"
              >
                <a
                  href="#include-tailwind-in-your-css"
                  className="absolute after:hash opacity-0 group-hover:opacity-100"
                  aria-label="Anchor"
                ></a>
                <span>Include Tailwind in your CSS</span>
              </h3>
              <p>
                Create a CSS file if you don’t already have one, and use the{" "}
                <code>@tailwind</code> directive to inject Tailwind’s{" "}
                <code>base</code>, <code>components</code>, and{" "}
                <code>utilities</code> styles:
              </p>
              <div className="my-6 rounded-xl overflow-hidden bg-gray-800">
                <pre className="language-css">
                  <code className="language-css">
                    <span className="token comment">
                      /* ./your-css-folder/styles.css */
                    </span>
                    <span className="token atrule">
                      <span className="token rule">@tailwind</span> base
                      <span className="token punctuation">;</span>
                    </span>
                    <span className="token atrule">
                      <span className="token rule">@tailwind</span> components
                      <span className="token punctuation">;</span>
                    </span>
                    <span className="token atrule">
                      <span className="token rule">@tailwind</span> utilities
                      <span className="token punctuation">;</span>
                    </span>
                  </code>
                </pre>
              </div>
              <p>
                Tailwind will swap these directives out at build-time with all
                of the styles it generates based on your configured design
                system.
              </p>
              <p>
                If you’re using <code>postcss-import</code> (or a tool that uses
                it under the hood, such as{" "}
                <a href="https://github.com/rails/webpacker">Webpacker</a> for
                Rails), use our imports instead of the <code>@tailwind</code>{" "}
                directive to avoid issues when importing any of your own
                additional files:
              </p>
              <div className="my-6 rounded-xl overflow-hidden bg-gray-800">
                <pre className="language-css">
                  <code className="language-css">
                    <span className="token atrule">
                      <span className="token rule">@import</span>{" "}
                      <span className="token string">"tailwindcss/base"</span>
                      <span className="token punctuation">;</span>
                    </span>
                    <span className="token atrule">
                      <span className="token rule">@import</span>{" "}
                      <span className="token string">
                        "tailwindcss/components"
                      </span>
                      <span className="token punctuation">;</span>
                    </span>
                    <span className="token atrule">
                      <span className="token rule">@import</span>{" "}
                      <span className="token string">
                        "tailwindcss/utilities"
                      </span>
                      <span className="token punctuation">;</span>
                    </span>
                  </code>
                </pre>
              </div>
              <p>
                If you’re working in a JavaScript framework like React or Vue
                that supports directly importing CSS files into your JS, you can
                also skip creating a CSS file altogether and import{" "}
                <code>tailwindcss/tailwind.css</code> instead which has all of
                these directives already in place:
              </p>
              <div className="my-6 rounded-xl overflow-hidden bg-gray-800">
                <pre className="language-js">
                  <code className="language-js">
                    <span className="token comment">// app.js</span>
                    <span className="token keyword module">import</span>{" "}
                    <span className="token string">
                      "tailwindcss/tailwind.css"
                    </span>
                  </code>
                </pre>
              </div>
              <h3
                className="group flex whitespace-pre-wrap"
                id="building-your-css"
              >
                <a
                  href="#building-your-css"
                  className="absolute after:hash opacity-0 group-hover:opacity-100"
                  aria-label="Anchor"
                ></a>
                <span>Building your CSS</span>
              </h3>
              <p>
                How you actually build your project will depend on the tools
                that you’re using. Your framework may include a command like{" "}
                <code>npm run dev</code> to start a development server that
                compiles your CSS in the background, you may be running{" "}
                <code>webpack</code> yourself, or maybe you’re using{" "}
                <code>postcss-cli</code> and running a command like{" "}
                <code>postcss styles.css -o compiled.css</code>.
              </p>
              <p>
                If you’re already familiar with PostCSS you probably know what
                you need to do, if not refer to the documentation for the tool
                you are using.
              </p>
              <p>
                When building for production, be sure to configure the{" "}
                <code>purge</code> option to remove any unused classes for the
                smallest file size:
              </p>
              <div className="my-6 rounded-xl overflow-hidden bg-gray-800">
                <pre className="language-diff-js">
                  <code className="language-diff-js">
                    <span className="token unchanged language-js">
                      <span className="token prefix unchanged"> </span>{" "}
                      <span className="token comment">
                        // tailwind.config.js
                      </span>
                      <span className="token prefix unchanged"> </span> module
                      <span className="token punctuation">.</span>
                      <span className="token property-access">
                        exports
                      </span>{" "}
                      <span className="token operator">=</span>{" "}
                      <span className="token punctuation">
                        {curleyBracesOpen}
                      </span>
                    </span>
                    <span className="token inserted-sign inserted language-js">
                      <span className="token prefix inserted">+</span> purge
                      <span className="token operator">:</span>{" "}
                      <span className="token punctuation">[</span>
                      <span className="token prefix inserted">+</span>{" "}
                      <span className="token string">'./src/**/*.html'</span>
                      <span className="token punctuation">,</span>
                      <span className="token prefix inserted">+</span>{" "}
                      <span className="token string">'./src/**/*.js'</span>
                      <span className="token punctuation">,</span>
                      <span className="token prefix inserted">+</span>{" "}
                      <span className="token punctuation">]</span>
                      <span className="token punctuation">,</span>
                    </span>
                    <span className="token unchanged language-js">
                      <span className="token prefix unchanged"> </span> darkMode
                      <span className="token operator">:</span>{" "}
                      <span className="token boolean">false</span>
                      <span className="token punctuation">,</span>{" "}
                      <span className="token comment">
                        // or 'media' or 'class'
                      </span>
                      <span className="token prefix unchanged"> </span> theme
                      <span className="token operator">:</span>{" "}
                      <span className="token punctuation">
                        {curleyBracesOpen}
                      </span>
                      <span className="token prefix unchanged"> </span> extend
                      <span className="token operator">:</span>{" "}
                      <span className="token punctuation">
                        {curleyBracesOpen}
                      </span>
                      <span className="token punctuation">
                        {curleyBracesOpen}
                      </span>
                      <span className="token punctuation">,</span>
                      <span className="token prefix unchanged"> </span>{" "}
                      <span className="token punctuation">
                        {curleyBracesOpen}
                      </span>
                      <span className="token punctuation">,</span>
                      <span className="token prefix unchanged"> </span> variants
                      <span className="token operator">:</span>{" "}
                      <span className="token punctuation">
                        {curleyBracesOpen}
                      </span>
                      <span className="token punctuation">
                        {curleyBracesOpen}
                      </span>
                      <span className="token punctuation">,</span>
                      <span className="token prefix unchanged"> </span> plugins
                      <span className="token operator">:</span>{" "}
                      <span className="token punctuation">[</span>
                      <span className="token punctuation">]</span>
                      <span className="token punctuation">,</span>
                      <span className="token prefix unchanged"> </span>{" "}
                      <span className="token punctuation">
                        {curleyBracesOpen}
                      </span>
                    </span>
                  </code>
                </pre>
              </div>
              <p>
                Read our separate guide on{" "}
                <a href="/docs/optimizing-for-production">
                  optimizing for production
                </a>{" "}
                to learn more about tree-shaking unused styles for best
                performance.
              </p>
              <p>
                If you’re integrating Tailwind with a tool that relies on an
                older version of PostCSS, you may see an error like this when
                trying to build your CSS:
              </p>
              <div className="my-6 rounded-xl overflow-hidden bg-gray-800">
                <pre className="language-shell">
                  <code className="language-shell">
                    Error: PostCSS plugin tailwindcss requires PostCSS{" "}
                    <span className="token number">8</span>.
                  </code>
                </pre>
              </div>
              <p>
                In this case, you should{" "}
                <a href="#post-css-7-compatibility-build">
                  switch to our PostCSS 7 compatibility build
                </a>{" "}
                instead.
              </p>
              <h2
                className="group flex whitespace-pre-wrap"
                id="using-tailwind-cli"
              >
                <a
                  href="#using-tailwind-cli"
                  className="absolute after:hash opacity-0 group-hover:opacity-100"
                  aria-label="Anchor"
                ></a>
                <span>Using Tailwind CLI</span>
              </h2>
              <p>
                <em>Tailwind CSS requires Node.js 12.13.0 or higher.</em>
              </p>
              <p>
                If you’d like to compile your CSS with Tailwind without
                integrating it directly into any sort of build tooling, you can
                use the Tailwind CLI tool to generate your CSS without
                configuring PostCSS or even installing Tailwind as a dependency
                if you don’t want to.
              </p>
              <p>
                Use <code>npx</code> which is a tool that is automatically
                installed alongside <code>npm</code> to generate a fully
                compiled Tailwind CSS file:
              </p>
              <div className="my-6 rounded-xl overflow-hidden bg-gray-800">
                <pre className="language-shell">
                  <code className="language-shell">
                    npx tailwindcss -o tailwind.css
                  </code>
                </pre>
              </div>
              <p>
                This will create a file called <code>tailwind.css</code>{" "}
                generated based on Tailwind’s{" "}
                <a href="https://unpkg.com/browse/tailwindcss@%5E2/stubs/defaultConfig.stub.js">
                  default configuration
                </a>
                , and automatically add any necessary vendor prefixes using{" "}
                <a href="https://github.com/postcss/autoprefixer">
                  autoprefixer
                </a>
                .
              </p>
              <p>
                Now you can pull this file into your HTML just like any other
                stylesheet:
              </p>
              <div className="my-6 rounded-xl overflow-hidden bg-gray-800">
                <pre className="language-html">
                  <code className="language-html">
                    <span className="token doctype">
                      <span className="token punctuation">&lt;!</span>
                      <span className="token name">doctype</span>{" "}
                      <span className="token name">html</span>
                      <span className="token punctuation">&gt;</span>
                    </span>
                    <span className="token tag">
                      <span className="token tag">
                        <span className="token punctuation">&lt;</span>html
                      </span>
                      <span className="token punctuation">&gt;</span>
                    </span>
                    <span className="token tag">
                      <span className="token tag">
                        <span className="token punctuation">&lt;</span>head
                      </span>
                      <span className="token punctuation">&gt;</span>
                    </span>
                    <span className="token comment">&lt;!-- ... --&gt;</span>
                    <span className="token tag">
                      <span className="token tag">
                        <span className="token punctuation">&lt;</span>meta
                      </span>{" "}
                      <span className="token attr-name">charset</span>
                      <span className="token attr-value">
                        <span className="token punctuation attr-equals">=</span>
                        <span className="token punctuation">"</span>UTF-8
                        <span className="token punctuation">"</span>
                      </span>{" "}
                      <span className="token punctuation">/&gt;</span>
                    </span>
                    <span className="token tag">
                      <span className="token tag">
                        <span className="token punctuation">&lt;</span>meta
                      </span>{" "}
                      <span className="token attr-name">name</span>
                      <span className="token attr-value">
                        <span className="token punctuation attr-equals">=</span>
                        <span className="token punctuation">"</span>viewport
                        <span className="token punctuation">"</span>
                      </span>{" "}
                      <span className="token attr-name">content</span>
                      <span className="token attr-value">
                        <span className="token punctuation attr-equals">=</span>
                        <span className="token punctuation">"</span>
                        width=device-width, initial-scale=1.0
                        <span className="token punctuation">"</span>
                      </span>{" "}
                      <span className="token punctuation">/&gt;</span>
                    </span>
                    <span className="token tag">
                      <span className="token tag">
                        <span className="token punctuation">&lt;</span>link
                      </span>{" "}
                      <span className="token attr-name">href</span>
                      <span className="token attr-value">
                        <span className="token punctuation attr-equals">=</span>
                        <span className="token punctuation">"</span>
                        /tailwind.css
                        <span className="token punctuation">"</span>
                      </span>{" "}
                      <span className="token attr-name">rel</span>
                      <span className="token attr-value">
                        <span className="token punctuation attr-equals">=</span>
                        <span className="token punctuation">"</span>stylesheet
                        <span className="token punctuation">"</span>
                      </span>
                      <span className="token punctuation">&gt;</span>
                    </span>
                    <span className="token tag">
                      <span className="token tag">
                        <span className="token punctuation">&lt;/</span>head
                      </span>
                      <span className="token punctuation">&gt;</span>
                    </span>
                    <span className="token tag">
                      <span className="token tag">
                        <span className="token punctuation">&lt;</span>body
                      </span>
                      <span className="token punctuation">&gt;</span>
                    </span>
                    <span className="token comment">&lt;!-- ... --&gt;</span>
                    <span className="token tag">
                      <span className="token tag">
                        <span className="token punctuation">&lt;/</span>body
                      </span>
                      <span className="token punctuation">&gt;</span>
                    </span>
                    <span className="token tag">
                      <span className="token tag">
                        <span className="token punctuation">&lt;/</span>html
                      </span>
                      <span className="token punctuation">&gt;</span>
                    </span>
                  </code>
                </pre>
              </div>
              <h3
                className="group flex whitespace-pre-wrap"
                id="watching-for-changes"
              >
                <a
                  href="#watching-for-changes"
                  className="absolute after:hash opacity-0 group-hover:opacity-100"
                  aria-label="Anchor"
                ></a>
                <span>Watching for changes</span>
              </h3>
              <p>
                You can use the <code>--watch</code> or <code>-w</code> flag to
                start a watch process and automatically rebuild your CSS any
                time you make any changes:
              </p>
              <div className="my-6 rounded-xl overflow-hidden bg-gray-800">
                <pre className="language-shell">
                  <code className="language-shell">
                    npx tailwindcss -o tailwind.css --watch
                  </code>
                </pre>
              </div>
              <h3
                className="group flex whitespace-pre-wrap"
                id="using-a-custom-css-file"
              >
                <a
                  href="#using-a-custom-css-file"
                  className="absolute after:hash opacity-0 group-hover:opacity-100"
                  aria-label="Anchor"
                ></a>
                <span>Using a custom CSS file</span>
              </h3>
              <p>
                If you’d like to process any custom CSS alongside the default
                styles Tailwind generates, create a CSS file wherever you
                normally would and use the <code>@tailwind</code> directive to
                include Tailwind’s <code>base</code>, <code>components</code>,
                and <code>utilities</code> styles:
              </p>
              <div className="my-6 rounded-xl overflow-hidden bg-gray-800">
                <pre className="language-css">
                  <code className="language-css">
                    <span className="token comment">
                      /* ./src/tailwind.css */
                    </span>
                    <span className="token atrule">
                      <span className="token rule">@tailwind</span> base
                      <span className="token punctuation">;</span>
                    </span>
                    <span className="token atrule">
                      <span className="token rule">@tailwind</span> components
                      <span className="token punctuation">;</span>
                    </span>
                    <span className="token atrule">
                      <span className="token rule">@tailwind</span> utilities
                      <span className="token punctuation">;</span>
                    </span>
                    <span className="token atrule">
                      <span className="token rule">@layer</span> components
                    </span>{" "}
                    <span className="token punctuation">
                      {curleyBracesOpen}
                    </span>
                    <span className="token selector">
                      <span className="token class">.btn</span>
                    </span>{" "}
                    <span className="token punctuation">
                      {curleyBracesOpen}
                    </span>
                    <span className="token atrule atapply">
                      <span className="token rule">@apply</span> px-4 py-2 bg-
                      <span className="token color">blue</span>
                      <span className="token number">-600</span> text-
                      <span className="token color">white</span> rounded
                      <span className="token punctuation">;</span>
                    </span>
                    <span className="token punctuation">
                      {curleyBracesOpen}
                    </span>
                    <span className="token punctuation">
                      {curleyBracesOpen}
                    </span>
                  </code>
                </pre>
              </div>
              <p>Then include the path to that file when building your CSS:</p>
              <div className="my-6 rounded-xl overflow-hidden bg-gray-800">
                <pre className="language-shell">
                  <code className="language-shell">
                    npx tailwindcss -i ./src/tailwind.css -o ./dist/tailwind.css
                  </code>
                </pre>
              </div>
              <p>
                Read about{" "}
                <a href="/docs/adding-base-styles">adding base styles</a>,{" "}
                <a href="/docs/extracting-components">extracting components</a>,
                and{" "}
                <a href="/docs/adding-new-utilities">adding new utilities</a> to
                learn more about adding custom CSS on top of Tailwind.
              </p>
              <h3
                className="group flex whitespace-pre-wrap"
                id="customizing-your-configuration"
              >
                <a
                  href="#customizing-your-configuration"
                  className="absolute after:hash opacity-0 group-hover:opacity-100"
                  aria-label="Anchor"
                ></a>
                <span>Customizing your configuration</span>
              </h3>
              <p>
                If you’d like to customize what Tailwind generates, create a{" "}
                <code>tailwind.config.js</code> file using the Tailwind CLI
                tool:
              </p>
              <div className="my-6 rounded-xl overflow-hidden bg-gray-800">
                <pre className="language-shell">
                  <code className="language-shell">npx tailwindcss init</code>
                </pre>
              </div>
              <p>
                This will create a minimal <code>tailwind.config.js</code> file
                at the root of your project:
              </p>
              <div className="my-6 rounded-xl overflow-hidden bg-gray-800">
                <pre className="language-js">
                  <code className="language-js">
                    <span className="token comment">// tailwind.config.js</span>
                    module<span className="token punctuation">.</span>
                    <span className="token property-access">exports</span>{" "}
                    <span className="token operator">=</span>{" "}
                    <span className="token punctuation">
                      {curleyBracesOpen}
                    </span>
                    purge<span className="token operator">:</span>{" "}
                    <span className="token punctuation">[</span>
                    <span className="token punctuation">]</span>
                    <span className="token punctuation">,</span>
                    darkMode<span className="token operator">:</span>{" "}
                    <span className="token boolean">false</span>
                    <span className="token punctuation">,</span>{" "}
                    <span className="token comment">
                      // or 'media' or 'class'
                    </span>
                    theme<span className="token operator">:</span>{" "}
                    <span className="token punctuation">
                      {curleyBracesOpen}
                    </span>
                    extend<span className="token operator">:</span>{" "}
                    <span className="token punctuation">
                      {curleyBracesOpen}
                    </span>
                    <span className="token punctuation">
                      {curleyBracesOpen}
                    </span>
                    <span className="token punctuation">,</span>
                    <span className="token punctuation">
                      {curleyBracesOpen}
                    </span>
                    <span className="token punctuation">,</span>
                    variants<span className="token operator">:</span>{" "}
                    <span className="token punctuation">
                      {curleyBracesOpen}
                    </span>
                    <span className="token punctuation">
                      {curleyBracesOpen}
                    </span>
                    <span className="token punctuation">,</span>
                    plugins<span className="token operator">:</span>{" "}
                    <span className="token punctuation">[</span>
                    <span className="token punctuation">]</span>
                    <span className="token punctuation">,</span>
                    <span className="token punctuation">
                      {curleyBracesOpen}
                    </span>
                  </code>
                </pre>
              </div>
              <p>
                This file will automatically be read when building your CSS with
                Tailwind CLI:
              </p>
              <div className="my-6 rounded-xl overflow-hidden bg-gray-800">
                <pre className="language-shell">
                  <code className="language-shell">
                    npx tailwindcss -i ./src/tailwind.css -o ./dist/tailwind.css
                  </code>
                </pre>
              </div>
              <p>
                If you’d like to keep your config file in a different location
                or give it a different name, pass the config file path using the{" "}
                <code>-c</code> option when building your CSS:
              </p>
              <div className="my-6 rounded-xl overflow-hidden bg-gray-800">
                <pre className="language-shell">
                  <code className="language-shell">
                    npx tailwindcss -i ./src/tailwind.css -c
                    ./.config/tailwind.config.js -o ./dist/tailwind.css
                  </code>
                </pre>
              </div>
              <p>
                Learn more about configuring Tailwind in the{" "}
                <a href="/docs/configuration">configuration documentation</a>.
              </p>
              <h3
                className="group flex whitespace-pre-wrap"
                id="disabling-autoprefixer"
              >
                <a
                  href="#disabling-autoprefixer"
                  className="absolute after:hash opacity-0 group-hover:opacity-100"
                  aria-label="Anchor"
                ></a>
                <span>Disabling Autoprefixer</span>
              </h3>
              <p>
                By default, the Tailwind CLI tool will run your CSS through{" "}
                <a href="https://github.com/postcss/autoprefixer">
                  Autoprefixer
                </a>{" "}
                to add any necessary vendor prefixes. If you already have
                Autoprefixer set up in your build pipeline somewhere further
                down the chain, you can disable it in the Tailwind CLI tool
                using the <code>--no-autoprefixer</code> flag to avoid running
                it twice:
              </p>
              <div className="my-6 rounded-xl overflow-hidden bg-gray-800">
                <pre className="language-shell">
                  <code className="language-shell">
                    npx tailwindcss --no-autoprefixer -o tailwind.css
                  </code>
                </pre>
              </div>
              <h3
                className="group flex whitespace-pre-wrap"
                id="using-a-custom-post-css-configuration"
              >
                <a
                  href="#using-a-custom-post-css-configuration"
                  className="absolute after:hash opacity-0 group-hover:opacity-100"
                  aria-label="Anchor"
                ></a>
                <span>Using a custom PostCSS configuration</span>
              </h3>
              <p>
                If you’d like to use other PostCSS plugins alongside Tailwind,
                you can create a <code>postcss.config.js</code> file in your
                project root to add your extra plugins and Tailwind will include
                them if you use the <code>--postcss</code> flag when building
                your CSS:
              </p>
              <div className="my-6 rounded-xl overflow-hidden bg-gray-800">
                <pre className="language-shell">
                  <code className="language-shell">
                    npx tailwindcss --postcss -o tailwind.css
                  </code>
                </pre>
              </div>
              <div className="my-6 rounded-xl overflow-hidden bg-gray-800">
                <pre className="language-js">
                  <code className="language-js">
                    <span className="token comment">// postcss.config.js</span>
                    module<span className="token punctuation">.</span>
                    <span className="token property-access">exports</span>{" "}
                    <span className="token operator">=</span>{" "}
                    <span className="token punctuation">
                      {curleyBracesOpen}
                    </span>
                    plugins<span className="token operator">:</span>{" "}
                    <span className="token punctuation">[</span>
                    <span className="token function">require</span>
                    <span className="token punctuation">(</span>
                    <span className="token string">'postcss-100vh-fix'</span>
                    <span className="token punctuation">)</span>
                    <span className="token punctuation">,</span>
                    <span className="token punctuation">]</span>
                    <span className="token punctuation">
                      {curleyBracesOpen}
                    </span>
                  </code>
                </pre>
              </div>
              <p>
                By default, plugins are applied <em>after</em> Tailwind
                generates your CSS. If you have plugins that need to run before
                Tailwind, just include <code>tailwindcss</code> in your plugin
                list and Tailwind CLI will detect it and respect your custom
                plugin order:
              </p>
              <div className="my-6 rounded-xl overflow-hidden bg-gray-800">
                <pre className="language-js">
                  <code className="language-js">
                    <span className="token comment">// postcss.config.js</span>
                    module<span className="token punctuation">.</span>
                    <span className="token property-access">exports</span>{" "}
                    <span className="token operator">=</span>{" "}
                    <span className="token punctuation">
                      {curleyBracesOpen}
                    </span>
                    plugins<span className="token operator">:</span>{" "}
                    <span className="token punctuation">[</span>
                    <span className="token function">require</span>
                    <span className="token punctuation">(</span>
                    <span className="token string">'postcss-import'</span>
                    <span className="token punctuation">)</span>
                    <span className="token punctuation">,</span>
                    <span className="token function">require</span>
                    <span className="token punctuation">(</span>
                    <span className="token string">'tailwindcss'</span>
                    <span className="token punctuation">)</span>
                    <span className="token punctuation">,</span>
                    <span className="token function">require</span>
                    <span className="token punctuation">(</span>
                    <span className="token string">'postcss-100vh-fix'</span>
                    <span className="token punctuation">)</span>
                    <span className="token punctuation">,</span>
                    <span className="token punctuation">]</span>
                    <span className="token punctuation">
                      {curleyBracesOpen}
                    </span>
                  </code>
                </pre>
              </div>
              <p>
                If you’d like to automatically generate a basic{" "}
                <code>postcss.config.js</code> file when creating your{" "}
                <code>tailwind.config.js</code> file, use the{" "}
                <code>--postcss</code> or <code>-p</code> flag when initializing
                your config file:
              </p>
              <div className="my-6 rounded-xl overflow-hidden bg-gray-800">
                <pre className="language-shell">
                  <code className="language-shell">
                    npx tailwindcss init --postcss
                  </code>
                </pre>
              </div>
              <h3
                className="group flex whitespace-pre-wrap"
                id="building-for-production"
              >
                <a
                  href="#building-for-production"
                  className="absolute after:hash opacity-0 group-hover:opacity-100"
                  aria-label="Anchor"
                ></a>
                <span>Building for production</span>
              </h3>
              <p>
                When building for production, set{" "}
                <code>NODE_ENV=production</code> on the command line when
                building your CSS:
              </p>
              <div className="my-6 rounded-xl overflow-hidden bg-gray-800">
                <pre className="language-shell">
                  <code className="language-shell">
                    <span className="token assign-left variable">NODE_ENV</span>
                    <span className="token operator">=</span>production npx
                    tailwindcss -i ./src/tailwind.css -o ./dist/tailwind.css
                  </code>
                </pre>
              </div>
              <p>
                This will make sure Tailwind removes any unused CSS for best
                performance. Read our separate guide on{" "}
                <a href="/docs/optimizing-for-production">
                  optimizing for production
                </a>{" "}
                to learn more.
              </p>
              <p>
                You can also use the <code>--minify</code> flag to compress your
                CSS with <a href="https://cssnano.co/">cssnano</a>:
              </p>
              <div className="my-6 rounded-xl overflow-hidden bg-gray-800">
                <pre className="language-shell">
                  <code className="language-shell">
                    <span className="token assign-left variable">NODE_ENV</span>
                    <span className="token operator">=</span>production npx
                    tailwindcss -i ./src/tailwind.css -o ./dist/tailwind.css
                    --minify
                  </code>
                </pre>
              </div>
              <h2
                className="group flex whitespace-pre-wrap"
                id="using-tailwind-via-cdn"
              >
                <a
                  href="#using-tailwind-via-cdn"
                  className="absolute after:hash opacity-0 group-hover:opacity-100"
                  aria-label="Anchor"
                ></a>
                <span>Using Tailwind via CDN</span>
              </h2>
              <p>
                Before using the CDN build, please note that many of the
                features that make Tailwind CSS great are not available without
                incorporating Tailwind into your build process.
              </p>
            </div>
            <ul className="list-none pl-0 space-y-3 my-5">
              <li className="flex items-start space-x-2">
                <svg className="w-6 h-6 flex-none mt-0.5" fill="none">
                  <circle cx="12" cy="12" r="12" fill="#FECDD3"></circle>
                  <path
                    d="M8 8l8 8M16 8l-8 8"
                    stroke="#B91C1C"
                    stroke-width="2"
                  ></path>
                </svg>
                <span className="prose">
                  You can't customize Tailwind's default theme
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <svg className="w-6 h-6 flex-none mt-0.5" fill="none">
                  <circle cx="12" cy="12" r="12" fill="#FECDD3"></circle>
                  <path
                    d="M8 8l8 8M16 8l-8 8"
                    stroke="#B91C1C"
                    stroke-width="2"
                  ></path>
                </svg>
                <span className="prose">
                  You can't use any{" "}
                  <a href="/docs/functions-and-directives">directives</a> like{" "}
                  <code>@apply</code>, <code>@variants</code>, etc.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <svg className="w-6 h-6 flex-none mt-0.5" fill="none">
                  <circle cx="12" cy="12" r="12" fill="#FECDD3"></circle>
                  <path
                    d="M8 8l8 8M16 8l-8 8"
                    stroke="#B91C1C"
                    stroke-width="2"
                  ></path>
                </svg>
                <span className="prose">
                  You can't enable additional variants like{" "}
                  <a href="/docs/hover-focus-and-other-states#group-focus">
                    <code>group-focus</code>
                  </a>
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <svg className="w-6 h-6 flex-none mt-0.5" fill="none">
                  <circle cx="12" cy="12" r="12" fill="#FECDD3"></circle>
                  <path
                    d="M8 8l8 8M16 8l-8 8"
                    stroke="#B91C1C"
                    stroke-width="2"
                  ></path>
                </svg>
                <span className="prose">
                  You can't install third-party plugins
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <svg className="w-6 h-6 flex-none mt-0.5" fill="none">
                  <circle cx="12" cy="12" r="12" fill="#FECDD3"></circle>
                  <path
                    d="M8 8l8 8M16 8l-8 8"
                    stroke="#B91C1C"
                    stroke-width="2"
                  ></path>
                </svg>
                <span className="prose">
                  You can't tree-shake unused styles
                </span>
              </li>
            </ul>
            <div className="prose">
              <p>
                To get the most out of Tailwind, you really should{" "}
                <a href="#installing-tailwind-css-as-a-post-css-plugin">
                  install it as a PostCSS plugin
                </a>
                .
              </p>
              <p>
                To pull in Tailwind for quick demos or just giving the framework
                a spin, grab the latest default configuration build via CDN:
              </p>
              <div className="my-6 rounded-xl overflow-hidden bg-gray-800">
                <pre className="language-html">
                  <code className="language-html">
                    <span className="token tag">
                      <span className="token tag">
                        <span className="token punctuation">&lt;</span>link
                      </span>{" "}
                      <span className="token attr-name">href</span>
                      <span className="token attr-value">
                        <span className="token punctuation attr-equals">=</span>
                        <span className="token punctuation">"</span>
                        https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css
                        <span className="token punctuation">"</span>
                      </span>{" "}
                      <span className="token attr-name">rel</span>
                      <span className="token attr-value">
                        <span className="token punctuation attr-equals">=</span>
                        <span className="token punctuation">"</span>stylesheet
                        <span className="token punctuation">"</span>
                      </span>
                      <span className="token punctuation">&gt;</span>
                    </span>
                  </code>
                </pre>
              </div>
              <p>
                Note that while the CDN build is large{" "}
                <em>(71.3kB compressed, 2872.2kB raw)</em>,{" "}
                <strong>
                  it's not representative of the sizes you see when including
                  Tailwind as part of your build process
                </strong>
                .
              </p>
              <p>
                Sites that follow our{" "}
                <a href="/docs/optimizing-for-production">best practices</a> are
                almost always under 10kb compressed.
              </p>
              <h2
                className="group flex whitespace-pre-wrap"
                id="html-starter-template"
              >
                <a
                  href="#html-starter-template"
                  className="absolute after:hash opacity-0 group-hover:opacity-100"
                  aria-label="Anchor"
                ></a>
                <span>HTML starter template</span>
              </h2>
              <p>
                For Tailwind’s styles to work as expected, you’ll want to use
                the HTML5 doctype and include the responsive viewport meta tag
                to properly handle responsive styles on all devices.
              </p>
              <div className="my-6 rounded-xl overflow-hidden bg-gray-800">
                <pre className="language-html">
                  <code className="language-html">
                    <span className="token doctype">
                      <span className="token punctuation">&lt;!</span>
                      <span className="token name">doctype</span>{" "}
                      <span className="token name">html</span>
                      <span className="token punctuation">&gt;</span>
                    </span>
                    <span className="token tag">
                      <span className="token tag">
                        <span className="token punctuation">&lt;</span>html
                      </span>
                      <span className="token punctuation">&gt;</span>
                    </span>
                    <span className="token tag">
                      <span className="token tag">
                        <span className="token punctuation">&lt;</span>head
                      </span>
                      <span className="token punctuation">&gt;</span>
                    </span>
                    <span className="token tag">
                      <span className="token tag">
                        <span className="token punctuation">&lt;</span>meta
                      </span>{" "}
                      <span className="token attr-name">charset</span>
                      <span className="token attr-value">
                        <span className="token punctuation attr-equals">=</span>
                        <span className="token punctuation">"</span>UTF-8
                        <span className="token punctuation">"</span>
                      </span>{" "}
                      <span className="token punctuation">/&gt;</span>
                    </span>
                    <span className="token tag">
                      <span className="token tag">
                        <span className="token punctuation">&lt;</span>meta
                      </span>{" "}
                      <span className="token attr-name">name</span>
                      <span className="token attr-value">
                        <span className="token punctuation attr-equals">=</span>
                        <span className="token punctuation">"</span>viewport
                        <span className="token punctuation">"</span>
                      </span>{" "}
                      <span className="token attr-name">content</span>
                      <span className="token attr-value">
                        <span className="token punctuation attr-equals">=</span>
                        <span className="token punctuation">"</span>
                        width=device-width, initial-scale=1.0
                        <span className="token punctuation">"</span>
                      </span>{" "}
                      <span className="token punctuation">/&gt;</span>
                    </span>
                    <span className="token tag">
                      <span className="token tag">
                        <span className="token punctuation">&lt;</span>link
                      </span>{" "}
                      <span className="token attr-name">href</span>
                      <span className="token attr-value">
                        <span className="token punctuation attr-equals">=</span>
                        <span className="token punctuation">"</span>
                        /path/to/tailwind.css
                        <span className="token punctuation">"</span>
                      </span>{" "}
                      <span className="token attr-name">rel</span>
                      <span className="token attr-value">
                        <span className="token punctuation attr-equals">=</span>
                        <span className="token punctuation">"</span>stylesheet
                        <span className="token punctuation">"</span>
                      </span>
                      <span className="token punctuation">&gt;</span>
                    </span>
                    <span className="token comment">&lt;!-- ... --&gt;</span>
                    <span className="token tag">
                      <span className="token tag">
                        <span className="token punctuation">&lt;/</span>head
                      </span>
                      <span className="token punctuation">&gt;</span>
                    </span>
                    <span className="token tag">
                      <span className="token tag">
                        <span className="token punctuation">&lt;</span>body
                      </span>
                      <span className="token punctuation">&gt;</span>
                    </span>
                    <span className="token comment">&lt;!-- ... --&gt;</span>
                    <span className="token tag">
                      <span className="token tag">
                        <span className="token punctuation">&lt;/</span>body
                      </span>
                      <span className="token punctuation">&gt;</span>
                    </span>
                    <span className="token tag">
                      <span className="token tag">
                        <span className="token punctuation">&lt;/</span>html
                      </span>
                      <span className="token punctuation">&gt;</span>
                    </span>
                  </code>
                </pre>
              </div>
              <p>
                Many front-end frameworks like Next.js, vue-cli and others do
                all this for you behind the scenes automatically, so depending
                on what you’re building you might not need to set this up.
              </p>
              <h2
                className="group flex whitespace-pre-wrap"
                id="post-css-7-compatibility-build"
              >
                <a
                  href="#post-css-7-compatibility-build"
                  className="absolute after:hash opacity-0 group-hover:opacity-100"
                  aria-label="Anchor"
                ></a>
                <span>PostCSS 7 compatibility build</span>
              </h2>
              <p>
                As of v2.0, Tailwind CSS depends on PostCSS 8. Because PostCSS 8
                is only a few months old, many other tools in the ecosystem
                haven’t updated yet, which means you might see an error like
                this in your terminal after installing Tailwind and trying to
                compile your CSS:
              </p>
              <div className="my-6 rounded-xl overflow-hidden bg-gray-800">
                <pre className="language-shell">
                  <code className="language-shell">
                    Error: PostCSS plugin tailwindcss requires PostCSS{" "}
                    <span className="token number">8</span>.
                  </code>
                </pre>
              </div>
              <p>
                To help bridge the gap until everyone has updated, we also
                publish a PostCSS 7 compatibility build as{" "}
                <code>@tailwindcss/postcss7-compat</code> on npm.
              </p>
              <p>
                If you run into the error mentioned above, uninstall Tailwind
                and re-install using the compatibility build instead:
              </p>
              <div className="my-6 rounded-xl overflow-hidden bg-gray-800">
                <pre className="language-shell">
                  <code className="language-shell">
                    <span className="token function">npm</span> uninstall
                    tailwindcss postcss autoprefixer
                    <span className="token function">npm</span>{" "}
                    <span className="token function">install</span> -D
                    tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7
                    autoprefixer@^9
                  </code>
                </pre>
              </div>
              <p>
                The compatibility build is identical to the main build in every
                way, so you aren’t missing out on any features or anything like
                that.
              </p>
              <p>
                Once the rest of your tools have added support for PostCSS 8,
                you can move off of the compatibility build by re-installing
                Tailwind and its peer-dependencies using the <code>latest</code>{" "}
                tag:
              </p>
              <div className="my-6 rounded-xl overflow-hidden bg-gray-800">
                <pre className="language-shell">
                  <code className="language-shell">
                    <span className="token function">npm</span> uninstall
                    tailwindcss
                    <span className="token function">npm</span>{" "}
                    <span className="token function">install</span> -D
                    tailwindcss@latest postcss@latest autoprefixer@latest
                  </code>
                </pre>
              </div>
            </div>
          </div>
          <div className="mt-16 flex leading-6 font-medium">
            <a
              className="flex text-right ml-auto transition-colors duration-200 hover:text-gray-900"
              href="https://github.com/tailwindlabs/tailwindcss/releases"
            >
              Release Notes
              <span aria-hidden="true" className="ml-2">
                →
              </span>
            </a>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-6 text-right">
            <a
              className="mt-10 text-sm hover:text-gray-900"
              href="https://github.com/tailwindlabs/tailwindcss.com/edit/master/src/pages/docs/installation.mdx"
            >
              Edit this page on GitHub
            </a>
          </div>
        </div>
        <div className="hidden xl:text-sm xl:block flex-none w-64 pl-8 mr-8">
          <div className="flex flex-col justify-between overflow-y-auto sticky max-h-(screen-18) pt-10 pb-6 top-18">
            <div className="mb-8">
              <h5 className="text-gray-900 uppercase tracking-wide font-semibold mb-3 text-sm lg:text-xs">
                On this page
              </h5>
              <ul className="overflow-x-hidden text-gray-500 font-medium">
                <li>
                  <a
                    href="#integration-guides"
                    className="block transform transition-colors duration-200 py-2 hover:text-gray-900 text-gray-900"
                  >
                    Integration guides
                  </a>
                </li>
                <li>
                  <a
                    href="#installing-tailwind-css-as-a-post-css-plugin"
                    className="block transform transition-colors duration-200 py-2 hover:text-gray-900"
                  >
                    Installing Tailwind CSS as a PostCSS plugin
                  </a>
                </li>
                <li className="ml-4">
                  <a
                    href="#install-tailwind-via-npm"
                    className="block py-2 transition-colors duration-200 hover:text-gray-900 font-medium"
                  >
                    Install Tailwind via npm
                  </a>
                </li>
                <li className="ml-4">
                  <a
                    href="#add-tailwind-as-a-post-css-plugin"
                    className="block py-2 transition-colors duration-200 hover:text-gray-900 font-medium"
                  >
                    Add Tailwind as a PostCSS plugin
                  </a>
                </li>
                <li className="ml-4">
                  <a
                    href="#create-your-configuration-file"
                    className="block py-2 transition-colors duration-200 hover:text-gray-900 font-medium"
                  >
                    Create your configuration file
                  </a>
                </li>
                <li className="ml-4">
                  <a
                    href="#include-tailwind-in-your-css"
                    className="block py-2 transition-colors duration-200 hover:text-gray-900 font-medium"
                  >
                    Include Tailwind in your CSS
                  </a>
                </li>
                <li className="ml-4">
                  <a
                    href="#building-your-css"
                    className="block py-2 transition-colors duration-200 hover:text-gray-900 font-medium"
                  >
                    Building your CSS
                  </a>
                </li>
                <li>
                  <a
                    href="#using-tailwind-cli"
                    className="block transform transition-colors duration-200 py-2 hover:text-gray-900"
                  >
                    Using Tailwind CLI
                  </a>
                </li>
                <li className="ml-4">
                  <a
                    href="#watching-for-changes"
                    className="block py-2 transition-colors duration-200 hover:text-gray-900 font-medium"
                  >
                    Watching for changes
                  </a>
                </li>
                <li className="ml-4">
                  <a
                    href="#using-a-custom-css-file"
                    className="block py-2 transition-colors duration-200 hover:text-gray-900 font-medium"
                  >
                    Using a custom CSS file
                  </a>
                </li>
                <li className="ml-4">
                  <a
                    href="#customizing-your-configuration"
                    className="block py-2 transition-colors duration-200 hover:text-gray-900 font-medium"
                  >
                    Customizing your configuration
                  </a>
                </li>
                <li className="ml-4">
                  <a
                    href="#disabling-autoprefixer"
                    className="block py-2 transition-colors duration-200 hover:text-gray-900 font-medium"
                  >
                    Disabling Autoprefixer
                  </a>
                </li>
                <li className="ml-4">
                  <a
                    href="#using-a-custom-post-css-configuration"
                    className="block py-2 transition-colors duration-200 hover:text-gray-900 font-medium"
                  >
                    Using a custom PostCSS configuration
                  </a>
                </li>
                <li className="ml-4">
                  <a
                    href="#building-for-production"
                    className="block py-2 transition-colors duration-200 hover:text-gray-900 font-medium"
                  >
                    Building for production
                  </a>
                </li>
                <li>
                  <a
                    href="#using-tailwind-via-cdn"
                    className="block transform transition-colors duration-200 py-2 hover:text-gray-900"
                  >
                    Using Tailwind via CDN
                  </a>
                </li>
                <li>
                  <a
                    href="#html-starter-template"
                    className="block transform transition-colors duration-200 py-2 hover:text-gray-900"
                  >
                    HTML starter template
                  </a>
                </li>
                <li>
                  <a
                    href="#post-css-7-compatibility-build"
                    className="block transform transition-colors duration-200 py-2 hover:text-gray-900"
                  >
                    PostCSS 7 compatibility build
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
