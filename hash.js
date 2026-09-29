class HashTable {
    contructor(size) {
        this.size = size;
        this.table = new Array(size);
    }

    hash(key) {
        let hashValue = 0;
        for (let i = 0; i < key.length; i++) {
            hashValue += key.charCodeAt(i);
        }
        return hashValue % this.size;
    }

    set(key, value) {
        const index = this.hash(key);
        if (!this.table[index]) {
            this.table[index] = [];
        }
        this.table[index].push([key, value]);
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
                return true;
            }
        }
        return false;
    }

    print() {
        for (let i = 0; i < this.size; i++) {
            if (this.table[i]) {
                console.log(`${i}: ${this.table[i].map(([k, v]) => `${k}: ${v}`).join(", ")}`);
            }
        }
    }
}
