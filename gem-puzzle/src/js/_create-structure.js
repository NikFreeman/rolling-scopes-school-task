import { divide } from "lodash";
import buttons from "../../data/buttons";

const settingBody = () => {
  document.body.classList.add(
    "h-screen",
    "w-full",
    "bg-gradient-to-b",
    "from-gray-700",
    "to-gray-900"
  );
};
function createHeader() {
  const fragment = document.createDocumentFragment();
  const header = document.createElement("header");
  header.classList.add("mx-auto", "text-center");
  const logo = document.createElement("h1");
  logo.textContent = "Gem puzzle";
  logo.classList.add(
    "bg-gradient-to-r",
    "from-green-400",
    "to-blue-500",
    "text-transparent",
    "text-2xl",
    "bg-clip-text",
    "font-extrabold"
  );
  const nav = document.createElement("nav");
  nav.classList.add("m-1.5");
  for (const key in buttons) {
    if (Object.hasOwn(buttons, key)) {
      const button = document.createElement("button");
      button.setAttribute("id", key);
      button.textContent = buttons[key];
      button.classList.add(
        "w-44",
        "rounded-md",
        "border",
        "bg-green-600",
        "px-3",
        "mx-3",
        "font-semibold",
        "text-slate-200",
        "hover:bg-green-900",
        "hover:text-slate-100"
      );
      nav.appendChild(button);
    }
  }
  const wrapper = document.createElement("div");
  wrapper.classList.add("w-full", "justify-center", "items-start");
  header.appendChild(wrapper);
  wrapper.appendChild(logo);
  wrapper.appendChild(nav);
  fragment.appendChild(header);
  document.body.appendChild(fragment);
}
function createMain() {
  const fragment = document.createDocumentFragment();
  const main = document.createElement("main");
  main.classList.add("mx-auto", "max-w-fit");
  const div = document.createElement("div");
  div.classList.add("my-3", "flex", "justify-center");
  const paragraph1 = document.createElement("p");
  paragraph1.classList.add("w-40");
  paragraph1.textContent = "Movie: 0";
  div.appendChild(paragraph1);
  const paragraph2 = document.createElement("p");
  paragraph2.classList.add("w-40");
  paragraph2.textContent = "Time: 00:00";
  div.appendChild(paragraph2);
  const canvas = document.createElement("canvas");
  main.appendChild(div);
  main.appendChild(canvas);
  fragment.appendChild(main);
  document.body.appendChild(fragment);
}
function createFooter() {}
function appendStructure() {
  settingBody();
  createHeader();
  createMain();
  // createFooter();
}
export { appendStructure };
