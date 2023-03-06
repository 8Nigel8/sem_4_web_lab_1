function containsSubstring(str, substr) {
    return str.includes(substr);
}

let str = "Expected view SubscriptionAPI to be called with a URL keyword argument named \"nickname\". Fix your URL conf, or set the `.lookup_field` attribute on the view correctly.";
let substr = "Expected";
console.log(containsSubstring(str, substr));
substr = "notExist"
console.log(containsSubstring(str, substr));