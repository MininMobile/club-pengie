/**
 * An X and Y position
 */
class Point {
    /**
     * Set X, Y and Z position
     * @param {number} x X position
     * @param {number} y Y position
     * @param {number} z Z position
     */
    constructor(x = 0, y = 0, z = 0) {
        /** @type {number} */
        this.x = x;
        /** @type {number} */
        this.y = y;
        /** @type {number} */
        this.z = z;
    }

    /**
     * Get X, Y and Z position in pixels
     * @returns {object} X, Y and Z position suffixed with "px"
     */
    toString() {
        return {
            x:this.x + "px",
            y:this.y + "px",
            z:this.z + "px"
        }
    }
}

module.exports = Point;