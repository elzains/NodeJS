// Generator Runtime
import "regenerator-runtime";
// Styling Codes
import "../styles/main.css";
import "../styles/navbar.css";
import "../styles/content.css";
import "../styles/footer.css";
import "../styles/responsive.css";
import "../styles/switchmode.css";
// Component UI
import Navbar from "./components/navbar";
import Content from "./components/content";
import Footer from "./components/footer";
// Helper Codes
import $ from "jquery";
// Darkmode Codes
$(document).ready(function(){
    $('#light-mode-toggle').click(function() {
    $('body').toggleClass('darkmode');
    });
});

// English
const btnTopNav = document.querySelector('.language')
const topnavDown = () => {
    blur = document.querySelector('.item-language')
    blur.classList.toggle('activate')
}
btnTopNav.addEventListener('click', topnavDown)

