class BasicDate {
    private _day: number
    private _year: number
    private _mount: number
    public get day(): number {
        return this._day;
    }


    public set day(x: number) {
        if (x >= 1 && x <= 31) {
            this._day = Math.floor(x);
        }
    }

    public get year(): number {
        return this._year;
    }

    public set year(x: number) {
        if (x >= 2020 && x <= 2050) {
            this._year = Math.floor(x);
        }
    }
    public get mount(): number {
        return this._mount;
    }


    public set mount(x: number) {
        if (x >= 1 && x <= 12) {
            this._mount = Math.floor(x);
        }
    }


    public toString(): string {
        return "date:" + this.day + "." + this.day + "." + this.year+"    "
    }
}
