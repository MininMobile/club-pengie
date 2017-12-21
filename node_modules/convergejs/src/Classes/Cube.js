/**
 * An X, Y and Z side length
 */
class Cube {
    /**
     * Set X, Y and Z side lengths
     * @param {number} x X length
     * @param {number} y Y length
     * @param {number} z Z length
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
     * Get X, Y and Z length in pixels
     * @returns {object} X, Y and Z length suffixed with "px"
     */
    toString() {
        return {
            x:this.x + "px",
            y:this.y + "px",
            z:this.z + "px"
        }
    }
}

module.exports = Cube;