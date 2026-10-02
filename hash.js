class HashTable {
    constructor(size) {
        this.capacity = size;
        this.table = new Array(size);
        this.counter = 0;
    }

    hash(key) {
        let hashValue = 0;
        for (let i = 0; i < key.length; i++) {
            hashValue += key.charCodeAt(i);
        }
        return hashValue % this.capacity;
    }

    set(key, value) {
        const index = this.hash(key);
        if (!this.table[index]) {
            this.table[index] = [];
        }
        this.table[index].push([key, value]);
        this.counter++;
    }

    get(key) {
        const index = this.hash(key);
        if (!this.table[index]) {
            return undefined;
        }
        for (const [k, v] of this.table[index]) {
            if (k === key) {
                return v;
            }
        }
        return undefined;
    }

    remove(key) {
        const index = this.hash(key);
        if (!this.table[index]) {
            return false;
        }
        for (let i = 0; i < this.table[index].length; i++) {
            if (this.table[index][i][0] === key) {
                this.table[index].splice(i, 1);
                this.counter--;
                return true;
            }
        }
        return false;
    }

    get size() {
        return this.counter;
    }

    print() {
        for (let i = 0; i < this.capacity; i++) {
            if (this.table[i]) {
                console.log(`${i}: ${this.table[i].map(([k, v]) => `${k}: ${v}`).join(", ")}`);
            }
        }
    }
}

module.exports = HashTable;