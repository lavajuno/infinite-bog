const WORDS = [
    "bog",
    "hole",
    "tree",
    "branch",
    "limb",
    "nest",
    "bird",
    "egg",
    "car",
    "sort",
    "couch",
    "boat",
    "bee",
    "rock",
    "cube",
    "sphere",
    "straw",
    "shirt",
    "book",
    "rug",
    "bush",
    "can",
    "orange",
    "stick",
    "house",
    "plate",
    "bell",
    "beach",
    "camp",
    "bed",
    "bench",
    "fish",
    "beast",
    "door",
    "flea",
    "tank",
    "inn",
    "hearth",
    "horse",
    "ghost",
    "gnome",
    "arch",
    "lime",
    "leaf",
    "mire",
    "pan",
    "pipe",
    "pond",
    "porch",
    "deck",
    "ranch",
    "reef",
    "scarf",
    "sea",
    "seal",
    "tent",
    "thorn",
    "tick",
    "train",
    "vase",
    "verse",
    "vine",
    "wasp",
    "weed",
    "yacht",
    "yam",
]

const N_WORDS = WORDS.length;

const INTRO = "Hi ho, the rattlin' bog<br>\nThe bog down in the valley-o<br>\nRare bog, the rattlin' bog<br>\nThe bog down in the valley-o<br>\n<br>\n"

/**
 * There may be many like it, but this one is yours.
 */
class Bog {

    /**
     * @type {[string]}
     */
    #items;

    /**
     * Begins your journey into this instance of Bog.
     */
    constructor() {
        this.#items = ["bog"];
    }

    /**
     * @returns The start of our descent into the bog, starting with the familiar lyrics we all know. 
     */
    getInitialVerses() {
        let result = "<h3>Begin</h3>\n";
        result += INTRO;
        let initial_items = [
            "hole",
            "tree",
            "branch",
            "limb",
            "nest",
            "bird",
            "egg",
            "bird"
        ];
        let n_initial_items = initial_items.length;
        for(let i = 0; i < n_initial_items; i++) {
            this.#items.push(initial_items[i]);
            result += this.#makeVerse(this.#items);
        }
        return result;
    }

    /**
     * Continues our bog journey, deviating from what one would normally expect
     * to be in the bog. 
     * Or maybe not. Have you ever journeyed deep into a bog? Didn't think so.
     * @param {Number} n How many verses to generate
     * @returns {String} The next n verses for this bog
     */
    getNextVerses(n) {
        let result = "";
        for(let i = 0; i < n; i++) {
            this.#items.push(WORDS[this.#randint(N_WORDS)]);
            result += this.#makeVerse(this.#items);
        }
        return result;
    }

    /**
     * Generates a new verse for this bog based on its items
     * @param {[String]} items This bog's items (in order)
     * @returns A new verse for this bog
     */
    #makeVerse(items) {
        let n = items.length;
        let result = `<h3>Verse ${n - 1}</h3>`;
        result += this.#well(items[n - 2], items[n - 1]);
        for(let i = n - 3; i >= 0; i--) {
            result += this.#and(items[i], items[i + 1]);
        }
        result += "And the bog down in the valley-o<br>\n<br>\n";
        result += INTRO;
        return result;
    }

    /**
     * @param {String} parent_item
     * @param {String} child_item
     * @returns {String} Well in the {parent_item} there was a {child_item}...
     */
    #well(parent_item, child_item) {
        return `Well in the ${parent_item} there was a ${child_item}<br>\nA rare ${child_item}, a rattlin' ${child_item}<br>\nThe ${child_item} in the ${parent_item}<br>\n`;
    }

    /**
     * @param {String} parent_item
     * @param {String} child_item
     * @returns {String} And the {child_item} in the {parent_item}
     */
    #and(parent_item, child_item) {
        return `And the ${child_item} in the ${parent_item}<br>\n`;
    }

    #randint(max) {
        return Math.floor(Math.random() * max);
    }
}
