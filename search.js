const products = [
  { name: "Iphone", price: 70000 },
  { name: "laptop", price: 50000 },
  { name: "laptop sony ", price: 51200 },
  { name: "Iphone 13 pro", price: 160000 },
  { name: "watch iphone", price: 10000 },
  { name: "watch normal", price: 5000 },
];

function searchProduct(products, textSearch) {
  let result = [];
  for (const product of products) {
    if (product.name.includes(textSearch)) {
      result.push(product);
    }
  }
  return result;
}
const matching = searchProduct(products, "laptop");
console.log(matching);
