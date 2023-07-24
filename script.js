
/* DROPDOWN CODE */
document.querySelectorAll(".dropdown").forEach(dropdown => {
	dropdown.addEventListener("click", (e) => {
		if(e.target.nodeName === "BUTTON"){
			if(dropdown.children[1].style.display == "initial"){
				e.target.children[0].style.transform = "rotate(0deg)"
				dropdown.children[1].style.display = "none"
			}else{
				e.target.children[0].style.transform = "rotate(180deg)"
				dropdown.children[1].style.display = "initial"
			}
		}
	})
})

/* FLOATING MOBILE MENU */

var menuIsOpen = false
const menu = document.querySelector("#floating-mobile-menu")
const hamburgerBtn = document.querySelector("#hamburger-button-img")

document.querySelector("#hamburger-button").addEventListener("click", () => {
	if(menuIsOpen){
		menu.style.display = "none"
		menuIsOpen = false
		hamburgerBtn.src = "./images/icon-hamburger.svg"
	}else{
		menu.style.display = "initial"
		menuIsOpen = true
		hamburgerBtn.src = "./images/icon-close.svg"
	}
})

window.addEventListener("resize", () => {
	menu.style.display = "none"
	hamburgerBtn.src = "./images/icon-hamburger.svg"
	menuIsOpen = false
})

/* DROPDOWN MOBILE MENU */

document.querySelectorAll(".mobile-dropdown").forEach(dropdown => {
	dropdown.addEventListener("click", (e) => {
		if(e.target.nodeName === "BUTTON"){
			if(dropdown.children[1].style.display == "initial"){
				e.target.children[0].style.transform = "rotate(0deg)"
				dropdown.children[1].style.display = "none"
			}else{
				e.target.children[0].style.transform = "rotate(180deg)"
				dropdown.children[1].style.display = "initial"
			}
		}
	})
})