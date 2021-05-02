import cssText from "bundle-text:./styles.scss"
import 'bootstrap/js/dist/modal'
import {getProdictInfo} from "./actions"
import badMarker from "./components/badMarker"
import goodMarker from "./components/goodMarker"
import modal from "./components/modal"

setTimeout(() => document.querySelectorAll('.product').forEach(e => {
  const href = e.querySelector('.productInfo h3 a').href

  getProdictInfo(href)
    .then(function (response) {
      typeof response == "undefined" ? badMarker(e) : goodMarker(e, response)
    })
}), 5000)

document.addEventListener('click', e => {
  if (e.target.classList.contains('unimagined_good_marker')) {
    document.querySelector('#unimaginedModal .modal-title').textContent = e.target.dataset.name
    document.querySelector('#unimaginedModal .modal-body').textContent = e.target.dataset.description
  }
})

const html = `<style>${cssText}</style>${modal}`

const shadowHost = document.createElement("div")
shadowHost.innerHTML = html
document.body.insertAdjacentElement("beforebegin", shadowHost)

//const shadowRoot = shadowHost.attachShadow({ mode: 'open' })
//shadowRoot.innerHTML = html