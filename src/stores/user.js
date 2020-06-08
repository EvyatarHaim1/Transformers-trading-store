import { observable} from 'mobx'

export class user {
    @observable _id;
    @observable firstname;
    @observable lastname;
    @observable email;
    @observable age;
    @observable city;
    @observable phone;
    @observable password;
    @observable country;
    @observable acquired;
    @observable products;
    @observable picture;
    @observable credit;
    
    constructor(_id,firstname,lastname, email, age,city, phone, password,country,acquired,products,picture,credit) {
    this._id = _id;
    this.firstname= firstname;
    this.lastname= lastname;
    this.email= email;
    this.age= age;
    this.city= city;
    this.phone= phone;
    this.password= password;
    this.country= country;
    this.acquired= acquired;
    this.products= products;
    this.picture= picture;
    this.credit= credit;
    }
}