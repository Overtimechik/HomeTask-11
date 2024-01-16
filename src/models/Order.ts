interface InitParams {
    user: string;
    address: string;
    sum: number;
    goods: string;
  }
  
  export class Order {
    private user: string;
    private address: string;
    private sum: number;
    private goods: string;
    private createDate: Date;
    private deliveryDate: Date;
  
    constructor(params: InitParams) {
      this.user = params.user;
      this.address = params.address;
      this.sum = params.sum;
      this.goods=params.goods
      this.createDate = new Date();
      this.deliveryDate = this.generateDeliveryDate();
    }
    private generateDeliveryDate() {
      const deliveryDate = new Date(this.createDate);
      deliveryDate.setDate(deliveryDate.getDate() + 7);
      return deliveryDate;
    }
    get UserInfo() { 
      return this.user;
   }
    getInfoOrder() {
      return `${this.user} \n${this.goods}`
      //return `${this.user}, спасибо за оформление заказа на сумму ${this.sum}, ожидайте доставку ${this.deliveryDate} по адресу ${this.address}`;
    }
    getInfoOrder2() {
      return `Ваш заказ ${this.user} на сумму ${this.sum} будет доставлен ${this.deliveryDate}`
      //return `${this.user}, спасибо за оформление заказа на сумму ${this.sum}, ожидайте доставку ${this.deliveryDate} по адресу ${this.address}`;
    }
    seAddress(address:string){
      this.address = address;
    } 

  }