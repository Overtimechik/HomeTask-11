import { Order } from "./src/models/Order";
type TProduct = {
    name:string
    price:number
}
type TBuyer = {
    fullname:string
    login:string
    password:string
    country:string
    city:string
    age:number
    id:string
}
const getBuyer = () =>{
    return fetch("https://run.mocky.io/v3/b1bd6eba-759d-4e61-9d45-0816794d2d0b")
}   
const getProduct = () =>{
    return fetch("https://run.mocky.io/v3/de2f0069-2896-4b67-99cc-fbd0ff242ccf")
}   
let buyer = (await (await getBuyer()).json()) as TBuyer[];
let product = (await (await getProduct()).json()) as TProduct[];
let min = 0
let max = 4
let RBuyer = Math.floor(Math.random() * (max - min + 1) + min)
let RFor = Math.floor(Math.random() * 10)
let counter_price = 0
let products = ""
for(let i=0; i<RFor;i++){
    let RProduct = Math.floor(Math.random() * 10)
    counter_price += product[RProduct].price
    products+=product[RProduct].name
    products+="; "
}

const user = buyer[RBuyer].fullname;
const address = buyer[RBuyer].country+" "+buyer[RBuyer].city;
const sum = counter_price;
const goods = products
const order = new Order({ user, address, sum, goods });
console.log(order.getInfoOrder());
console.log(order.getInfoOrder2());
