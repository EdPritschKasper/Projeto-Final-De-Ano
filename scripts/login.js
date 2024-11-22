import { API_BASE_URL } from "../config/apiConfig.js";
import { saveToLocalStorage } from "../scripts/storage.js";


document.getElementById("loginbotao").addEventListener("click",(event)=>{
    event.preventDefault();
    window.location.href="boards.html";

})