class FullTime extends BasicDate {

    private _hour: number
    private _minuts: number
    private _seconds: number
    public get hour(): number {
        return this._hour;
    }


    public set hour(x: number) {
        if (x >= 0 && x <= 24) {
            this._hour = Math.floor(x);
        }
    }

    public get minuts(): number {
        return this._minuts;
    }

    public set minuts(x: number) {
        if (x >= 0 && x <= 60) {
            this._minuts = Math.floor(x);
        }
    }
    public get seconds(): number {
        return this._seconds;
    }


    public set seconds(x: number) {
        if (x >= 0 && x <= 60) {
            this._seconds = Math.floor(x);
        }
    }
    public toString(): string {
        return super.toString() + "time" + this.hour + ":" + this.minuts + ":" + this.seconds + "    "
    }
}