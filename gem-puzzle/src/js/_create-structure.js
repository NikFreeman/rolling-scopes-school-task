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
  canvas.width = 400;
  canvas.height = 400;
  canvas.classList.add("border", "bg-slate-400", "rounded-md");
  main.appendChild(div);
  main.appendChild(canvas);
  fragment.appendChild(main);
  document.body.appendChild(fragment);
}
function createFooter() {
  const fragment = document.createDocumentFragment();
  const footer = document.createElement("footer");
  footer.classList.add("mx-auto", "max-w-max");
  fragment.appendChild(footer);
  const textFrameSize = document.createElement("span");
  textFrameSize.setAttribute("id", "area-size");
  textFrameSize.classList.add("font-bold", "text-slate-300");
  textFrameSize.textContent = "4x4";
  const frameSize = document.createElement("div");
  frameSize.classList.add("text-center", "text-slate-300", "my-3");
  frameSize.textContent = "Frame size: ";
  frameSize.appendChild(textFrameSize);
  footer.appendChild(frameSize);
  const selectSize = document.createElement("div");
  selectSize.classList.add("flex", "text-slate-300");
  selectSize.textContent = " Other size: ";
  footer.appendChild(selectSize);
  const ol = document.createElement("ol");
  ol.classList.add("flex", "justify-between", "gap-2", "px-1");
  selectSize.appendChild(ol);
  for (let i = 3; i < 9; i++) {
    const li = document.createElement("li");
    const input = document.createElement("input");
    input.classList.add("peer", "hidden");
    input.setAttribute("type", "radio");
    input.setAttribute("name", "size");
    input.setAttribute("id", `size${i}`);
    input.setAttribute("value", i);
    if (i == 4) input.setAttribute("checked", "true");
    const label = document.createElement("label");
    label.classList.add(
      "text-slate-300",
      "font-bold",
      "hover:text-slate-500",
      "peer-checked:text-green-500",

      "peer-checked:animate-pulse",
      "hover:transition-colors",
      "duration-500",
      "hover:text-slate-100"
    );
    label.setAttribute("for", `size${i}`);
    label.textContent = `${i}x${i}`;
    li.appendChild(input);
    li.appendChild(label);
    ol.appendChild(li);
  }

  document.body.appendChild(fragment);
}
function appendStructure() {
  settingBody();
  createHeader();
  createMain();
  createFooter();
}
export { appendStructure };
