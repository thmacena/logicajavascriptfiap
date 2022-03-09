/*Elabore um programa em JavaScript que contenha o nome de 5 
pessoas em um vetor A, outras 5 pessoas em um vetor B. Crie o 
vetor C, com o dobro da capacidade, contendo os elementos do 
vetor A e do Vetor B*/


const nomesA = ["Victor","Pedro","Marcela","Luana","Yasmin","Gabriella"];

const nomesB = ["Armando","Jurema","Vitoria","Joana","Rachel","Juliana"];

const allnames = [nomesA.concat(nomesB)];

alert(allnames);