function facto(n) {
    return (n != 1) ? n * facto(n - 1) : 1;
}

console.log(facto(5));