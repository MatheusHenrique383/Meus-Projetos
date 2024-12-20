/*Importa as funções necessárias do Firebase*/
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-analytics.js";

// Sua configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBpRWQrg-7d9m-blrjAYNbmlv4G8EYr0M4",
  authDomain: "meu-portifolio-30.firebaseapp.com",
  projectId: "meu-portifolio-30",
  storageBucket: "meu-portifolio-30.firebasestorage.app",
  messagingSenderId: "297107888488",
  appId: "1:297107888488:web:865d7dd000d424565c5edd",
  measurementId: "G-B3D30ZBXEQ"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa o Firebase Analytics
const analytics = getAnalytics(app);
