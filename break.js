const products = [
    { name: "Iphone", price: 70000 },
    { name: "laptop", price: 50000 },
    { name: "laptop sony ", price: 5200 },
    { name: "Iphone 13 pro", price: 160000 },
    { name: "watch iphone", price: 402200 },
    { name: "watch normal", price: 5000 },
  ];

/*   for(const product of products){
      if(product.price<5000){
        break;
      }
      console.log(product);
  } */

  for (const product of products){
      if(product.price<10000){
          continue;
      }
      console.log(product);
  }