
export function generate(limit = 200, upper=500) {
    var out = [];
    for (var i = 0; i < limit; i++) {
        out.push(Math.floor(Math.random() * upper));
    }
    return out.join(',');
}

if (!module.parent) {
    console.log(generate());
}

