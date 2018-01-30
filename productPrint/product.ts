class Product {
    public itemName: string
    private _price: number
    public fullTime: FullTime
    public get price(): number {
        return this._price;
    }


    public set price(x: number) {
        if (x > 0) {
            this._price = x;
        }
    }
    public toString(): string {
        return this.fullTime.toString() + "item name:" + this.itemName + "    " + "price:" + this.price + "    "
    }
}