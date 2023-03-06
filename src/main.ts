import "./style.css";
import { setupCounter } from "./counter";
import App from "./App";

new App(document.querySelector<HTMLDivElement>("#app") as HTMLElement).render();

// setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
