var Mouse = function () {
    this._x = 0;
    this._y = 0
    this.x = 0;
    this.y = 0;

    this.updatePosition = function (event) {
        var e = event || window.event;
        this.x = e.clientX - this._x;
        this.y = (e.clientY - this._y) * -1;
    }

    this.setOrigin = function (e) {
        this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
        this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
    }

    this.show = function () {
        return "(" + this.x + "," + this.y + ")";
    }

}

export default Mouse;