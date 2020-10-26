//global vars
window.$ = (el) => document.querySelector(el);
window.$$ = (el) => document.querySelectorAll(el);
import { gsap } from "@l/gsap";
window.tl = gsap.timeline();
window.axios = require("axios");




