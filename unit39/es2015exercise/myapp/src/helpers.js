
// choice(items): returns a randomly selected item from array of items
function choice(items) {
    let randIdx = Math.floor(Math.random() * items.length);
    return items[randIdx];
}

// remove(items, item): removes the first matching item from items, if item exists, and returns it. Otherwise returns undefined.
function remove(items, item) {
    return items.filter(val => val !== item);
}

export { choice, remove }