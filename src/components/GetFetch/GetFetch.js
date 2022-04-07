const productos = [
  {id: 0, nombre: "Torta 100% Chocolate", precio: 2870, cantidad: 1, img: "./assets/ImgProd/100choco.jpg", stock: "si"},
  {id: 1, nombre: "Torta Ferrero Nutella", precio: 2700, cantidad: 1, img: "./assets/ImgProd/ferreronut.jpg", stock: "no"},
  {id: 2, nombre: "Torta Red Velvet", precio: 3360, cantidad: 1, img: "./assets/ImgProd/redvelvet.jpg", stock: "si"},
  {id: 3, nombre: "Torta Brownie Bon", precio: 2650, cantidad: 1, img: "./assets/ImgProd/browniebon.jpg", stock: "no"},
  {id: 4, nombre: "Brownies", precio: 2200, cantidad: 1, img: "./assets/ImgProd/brownies.jpg", stock: "si"},
  {id: 5, nombre: "Alfacookies", precio: 1180, cantidad: 1, img: "./assets/ImgProd/alfacookies.png", stock: "no"},
  {id: 6, nombre: "Lemonies", precio: 2150, cantidad: 1, img: "./assets/ImgProd/lemonies.jpg", stock: "si"},
  {id: 7, nombre: "Cheescake Frutos Rojos", precio: 2780, cantidad: 1, img: "./assets/ImgProd/cheescakefr.jpg", stock: "si"}
];

export const getFetch = new Promise(( resolve, reject) =>{
    let condition = true
    if (condition) {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    } else {
        reject('Error 400')
    }
})