class Point{
    constructor(x,y)
    {
        this.x = x;
        this.y = y;
    }

    get getX()
    {
        return this.x;
    }

    get getY()
    {
        return this.y;
    }

    set setX(newX)
    {
        this.x = newX;
    }

    set setY(newY)
    {
        this.y = newY;
    }

    static calculateDist(P1,P2)
    {
        const dy = P2.y - P1.y;
        const dx = P2.x - P1.x;

        return Math.hypot(dy,dx);
    }

    static calculateSlope(P1,P2)
    {
        const dy = P2.y - P1.y;
        const dx = P2.x - P1.x;

        return dy / dx ;
    }

    static centroid(P1,P2,P3)
    {
        const dx = (P1.x+P2.x+P3.x)/3;
        const dy = (P1.y+P2.y+P3.y)/3;4

        return new Point(dx,dy);
    }
}

const P1 = new Point(3,5);
const P2 = new Point(6,9);
const P3 = new Point(7,5);
console.log(Point.calculateDist(P1,P2));
console.log(Point.centroid(P1,P2,P3));