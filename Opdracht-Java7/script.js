const paintWall = function (direction, colors) {
    console.log("I'm painting the" + direction + "wall" + colors)
};

const green = " green"
const blue = " blue"
const north = " north "
const southeast = " south-east "

paintWall(green);
paintWall(blue);

paintWall(north, green);
paintWall(green, north);

