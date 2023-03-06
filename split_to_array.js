function split_str_to_array(str) {
  let array = str.split(' ');
  return array;
}
let str = "Expected view SubscriptionAPI to be called with a URL keyword argument named \"nickname\". Fix your URL conf, or set the `.lookup_field` attribute on the view correctly.";
let array = split_str_to_array(str);
console.log(array);