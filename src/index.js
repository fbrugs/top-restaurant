import "./styles.css"
import homepage from "./home.js"
import about from "./about.js"
import menu from "./menu.js"

const content = document.querySelector("#content");

for (const item of document.querySelectorAll("button")) {
	item.addEventListener("click", (e) => {
		content.innerHTML = '';
		switch (e.currentTarget.dataset.id) {
			case "home":
				homepage();
				break
			case "menu":
				menu();
				break
			case "about":
				about();
				break
		}
	})
}