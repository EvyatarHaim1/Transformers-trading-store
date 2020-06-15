import { observable} from 'mobx'

export class product {
   
    @observable _id;
    @observable name;
    @observable price;
    @observable sellerId;
    @observable sellerName;
    @observable quantity;
    @observable sold;
   
    constructor(_id,name,price, sellerId, sellerName,quantity, sold) {
    this._id = _id;
    this.name= name;
    this.price= price;
    this.sellerId= sellerId;
    this.sellerName= sellerName;
    this.quantity= quantity;
    this.sold= sold;
    }
}