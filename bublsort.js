function buble_sort(mas) {
    for (var i = 0, tmp; i < mas.length - 1; i++) {
        for (var j = 0; j < mas.length - 1; j++) {
            if (mas[j] > mas[j + 1]) {
                tmp = mas[j];
                mas[j] = mas[j + 1];
                mas[j + 1] = tmp;
            }
        }
    }
    return mas
}
var mas = [10, 5, 8, 9, 1, 3, 2];
console.log(buble_sort(mas))
