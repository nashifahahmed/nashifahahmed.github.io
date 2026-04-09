/*
    Name: Nashifah Ahmed
    File: script.js
    Date: 10 April 2026
    Description: This is the code for INFT1206 Lab 4 Part 2 - Image gallery
*/

const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

const images = [
    {filename: "pic1.jpg", alt: "Closeup of a human eye"},
    {filename: "pic2.jpg", alt: "Rock that look like a wave"},
    {filename: "pic3.jpg", alt: "Purple and white pansies"},
    {filename: "pic4.jpg", alt: "Section of wall from a pharoah\'s tomb"},
    {filename: "pic5.jpg", alt: "Large moth on a leaf"}
];

