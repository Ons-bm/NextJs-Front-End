import React from "react";

export default function FooterAdmin() {
  return (
    <>
      <footer className="block py-4">
        <div className="container mx-auto px-4">
          <hr className="mb-4 border-b-1 border-blueGray-200" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4">
              <div className="text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left">
                Copyright © {new Date().getFullYear()}{" "}
              </div>
            </div>
            <div className="w-full md:w-8/12 px-4">
              <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                <li>
                  <a
                  href="https://www.linkedin.com/in/bouzir-mohamed-ali/"
                  target={"_blank"}
                  className="text-blueGray-600 hover:text-blueGray-300 text-sm font-semibold block py-1 px-3"
                  >
                  Bouzir Mohamed Ali
                </a>
                </li>
                <li>
                  <a
                  href="https://www.linkedin.com/in/ons-ben-mabrouk-499904197/"
                  target={"_blank"}
                  className="text-blueGray-600 hover:text-blueGray-300 text-sm font-semibold block py-1 px-3"
                  >
                  Ben Mabrouk Ons
                </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
