const product_01_image_01 = require("../images/products/product-01 (1).jpg");
const product_01_image_02 = require("../images/products/product-01 (2).jpg");
// const product_01_image_03 = require('../images/products/product-01 (3).jpg')

const product_02_image_01 = require("../images/products/product-02 (1).jpg");
const product_02_image_02 = require("../images/products/product-02 (2).jpg");

const product_03_image_01 = require("../images/products/product-03 (1).jpg");
const product_03_image_02 = require("../images/products/product-03 (2).jpg");

const product_04_image_01 = require("../images/products/product-04 (1).jpg");
const product_04_image_02 = require("../images/products/product-04 (2).jpg");

const product_05_image_01 = require("../images/products/product-05 (1).jpg");
const product_05_image_02 = require("../images/products/product-05 (2).jpg");

const product_06_image_01 = require("../images/products/product-06 (1).jpg");
const product_06_image_02 = require("../images/products/product-06 (2).jpg");

const product_07_image_01 = require("../images/products/product-07 (1).jpg");
const product_07_image_02 = require("../images/products/product-07 (2).jpg");

const product_08_image_01 = require("../images/products/product-08 (1).jpg");
const product_08_image_02 = require("../images/products/product-08 (2).jpg");

const product_09_image_01 = require("../images/products/product-09 (1).jpg");
const product_09_image_02 = require("../images/products/product-09 (2).jpg");

const product_10_image_01 = require("../images/products/product-10 (1).jpg");
const product_10_image_02 = require("../images/products/product-10 (2).jpg");

const product_11_image_01 = require("../images/products/product-11 (1).jpg");
const product_11_image_02 = require("../images/products/product-11 (2).jpg");

const product_12_image_01 = require("../images/products/product-12 (1).jpg");
const product_12_image_02 = require("../images/products/product-12 (2).jpg");

const products = [
  {
    title: "Áo thun Dinosaur 01",
    price: "189000",
    image01: product_01_image_01,
    image02: product_01_image_02,
    categorySlug: "t-shirt",
    colors: ["white", "red", "orange"],
    slug: "t-shirt-dinosaur-01",
    size: ["s", "m", "l", "xl"],
    description:
      "Nostrud eiusmod ea amet occaecat esse qui commodo. Aute sit eu esse occaecat est ad. Irure excepteur adipisicing dolor proident excepteur est velit exercitation aliquip deserunt nisi. <br /> <br />Qui exercitation occaecat dolore non exercitation nulla duis duis proident et voluptate magna consequat. Sunt veniam occaecat deserunt adipisicing ipsum exercitation cupidatat eu qui mollit est. Ea aute quis occaecat cillum labore sunt qui dolor laborum tempor id enim. Nisi aliqua voluptate magna nulla proident consectetur ad ut fugiat cillum. <br /> <br />Enim Lorem cupidatat incididunt fugiat dolor et sit in. Dolore ut ipsum elit incididunt nisi cillum eiusmod laboris anim ullamco quis. Enim deserunt incididunt est nulla.<br /> <br />Consectetur magna qui commodo cillum est voluptate consectetur culpa exercitation deserunt cupidatat. Ad nulla mollit ea ad eiusmod nulla consectetur elit duis quis proident ea pariatur pariatur. Lorem quis do exercitation mollit eiusmod. Eu sunt do incididunt anim qui aute dolore reprehenderit velit occaecat.",
  },
  {
    title: "Áo thun Dinosaur 02",
    price: "159000",
    image01: product_02_image_01,
    image02: product_02_image_02,
    categorySlug: "t-shirt",
    colors: ["white", "red", "blue"],
    slug: "t-shirt-dinosaur-02",
    size: ["s", "m"],
    description:
      "Nostrud eiusmod ea amet occaecat esse qui commodo. Aute sit eu esse occaecat est ad. Irure excepteur adipisicing dolor proident excepteur est velit exercitation aliquip deserunt nisi. <br /> <br />Qui exercitation occaecat dolore non exercitation nulla duis duis proident et voluptate magna consequat. Sunt veniam occaecat deserunt adipisicing ipsum exercitation cupidatat eu qui mollit est. Ea aute quis occaecat cillum labore sunt qui dolor laborum tempor id enim. Nisi aliqua voluptate magna nulla proident consectetur ad ut fugiat cillum. <br /> <br />Enim Lorem cupidatat incididunt fugiat dolor et sit in. Dolore ut ipsum elit incididunt nisi cillum eiusmod laboris anim ullamco quis. Enim deserunt incididunt est nulla.<br /> <br />Consectetur magna qui commodo cillum est voluptate consectetur culpa exercitation deserunt cupidatat. Ad nulla mollit ea ad eiusmod nulla consectetur elit duis quis proident ea pariatur pariatur. Lorem quis do exercitation mollit eiusmod. Eu sunt do incididunt anim qui aute dolore reprehenderit velit occaecat.",
  },
  {
    title: "Áo thun Dinosaur 03",
    price: "190000",
    image01: product_03_image_01,
    image02: product_03_image_02,
    categorySlug: "t-shirt",
    colors: ["white", "red", "orange", "yellow"],
    slug: "t-shirt-dinosaur-03",
    size: ["m"],
    description:
      "Nostrud eiusmod ea amet occaecat esse qui commodo. Aute sit eu esse occaecat est ad. Irure excepteur adipisicing dolor proident excepteur est velit exercitation aliquip deserunt nisi. <br /> <br />Qui exercitation occaecat dolore non exercitation nulla duis duis proident et voluptate magna consequat. Sunt veniam occaecat deserunt adipisicing ipsum exercitation cupidatat eu qui mollit est. Ea aute quis occaecat cillum labore sunt qui dolor laborum tempor id enim. Nisi aliqua voluptate magna nulla proident consectetur ad ut fugiat cillum. <br /> <br />Enim Lorem cupidatat incididunt fugiat dolor et sit in. Dolore ut ipsum elit incididunt nisi cillum eiusmod laboris anim ullamco quis. Enim deserunt incididunt est nulla.<br /> <br />Consectetur magna qui commodo cillum est voluptate consectetur culpa exercitation deserunt cupidatat. Ad nulla mollit ea ad eiusmod nulla consectetur elit duis quis proident ea pariatur pariatur. Lorem quis do exercitation mollit eiusmod. Eu sunt do incididunt anim qui aute dolore reprehenderit velit occaecat.",
  },
  {
    title: "Áo thun Polo 04",
    price: "194000",
    image01: product_04_image_01,
    image02: product_04_image_02,
    categorySlug: "t-shirt",
    colors: ["white", "orange", "blue"],
    slug: "t-shirt-polo-04",
    size: ["xl"],
    description:
      "Nostrud eiusmod ea amet occaecat esse qui commodo. Aute sit eu esse occaecat est ad. Irure excepteur adipisicing dolor proident excepteur est velit exercitation aliquip deserunt nisi. <br /> <br />Qui exercitation occaecat dolore non exercitation nulla duis duis proident et voluptate magna consequat. Sunt veniam occaecat deserunt adipisicing ipsum exercitation cupidatat eu qui mollit est. Ea aute quis occaecat cillum labore sunt qui dolor laborum tempor id enim. Nisi aliqua voluptate magna nulla proident consectetur ad ut fugiat cillum. <br /> <br />Enim Lorem cupidatat incididunt fugiat dolor et sit in. Dolore ut ipsum elit incididunt nisi cillum eiusmod laboris anim ullamco quis. Enim deserunt incididunt est nulla.<br /> <br />Consectetur magna qui commodo cillum est voluptate consectetur culpa exercitation deserunt cupidatat. Ad nulla mollit ea ad eiusmod nulla consectetur elit duis quis proident ea pariatur pariatur. Lorem quis do exercitation mollit eiusmod. Eu sunt do incididunt anim qui aute dolore reprehenderit velit occaecat.",
  },
  {
    title: "Áo thun Polo 05",
    price: "194000",
    image01: product_05_image_01,
    image02: product_05_image_02,
    categorySlug: "t-shirt",
    colors: ["white", "pink"],
    slug: "t-shirt-polo-05",
    size: ["xxl"],
    description:
      "Nostrud eiusmod ea amet occaecat esse qui commodo. Aute sit eu esse occaecat est ad. Irure excepteur adipisicing dolor proident excepteur est velit exercitation aliquip deserunt nisi. <br /> <br />Qui exercitation occaecat dolore non exercitation nulla duis duis proident et voluptate magna consequat. Sunt veniam occaecat deserunt adipisicing ipsum exercitation cupidatat eu qui mollit est. Ea aute quis occaecat cillum labore sunt qui dolor laborum tempor id enim. Nisi aliqua voluptate magna nulla proident consectetur ad ut fugiat cillum. <br /> <br />Enim Lorem cupidatat incididunt fugiat dolor et sit in. Dolore ut ipsum elit incididunt nisi cillum eiusmod laboris anim ullamco quis. Enim deserunt incididunt est nulla.<br /> <br />Consectetur magna qui commodo cillum est voluptate consectetur culpa exercitation deserunt cupidatat. Ad nulla mollit ea ad eiusmod nulla consectetur elit duis quis proident ea pariatur pariatur. Lorem quis do exercitation mollit eiusmod. Eu sunt do incididunt anim qui aute dolore reprehenderit velit occaecat.",
  },
  {
    title: "Áo thun Polo 06",
    price: "194000",
    image01: product_06_image_01,
    image02: product_06_image_02,
    categorySlug: "t-shirt",
    colors: ["black"],
    slug: "t-shirt-polo-06",
    size: ["s", "m", "xl"],
    description:
      "Nostrud eiusmod ea amet occaecat esse qui commodo. Aute sit eu esse occaecat est ad. Irure excepteur adipisicing dolor proident excepteur est velit exercitation aliquip deserunt nisi. <br /> <br />Qui exercitation occaecat dolore non exercitation nulla duis duis proident et voluptate magna consequat. Sunt veniam occaecat deserunt adipisicing ipsum exercitation cupidatat eu qui mollit est. Ea aute quis occaecat cillum labore sunt qui dolor laborum tempor id enim. Nisi aliqua voluptate magna nulla proident consectetur ad ut fugiat cillum. <br /> <br />Enim Lorem cupidatat incididunt fugiat dolor et sit in. Dolore ut ipsum elit incididunt nisi cillum eiusmod laboris anim ullamco quis. Enim deserunt incididunt est nulla.<br /> <br />Consectetur magna qui commodo cillum est voluptate consectetur culpa exercitation deserunt cupidatat. Ad nulla mollit ea ad eiusmod nulla consectetur elit duis quis proident ea pariatur pariatur. Lorem quis do exercitation mollit eiusmod. Eu sunt do incididunt anim qui aute dolore reprehenderit velit occaecat.",
  },
  {
    title: "Áo somi caro 07",
    price: "194000",
    image01: product_07_image_01,
    image02: product_07_image_02,
    categorySlug: "shirt",
    colors: ["white", "red", "orange", "blue"],
    slug: "shirt-caro-07",
    size: ["l", "xl"],
    description:
      "Nostrud eiusmod ea amet occaecat esse qui commodo. Aute sit eu esse occaecat est ad. Irure excepteur adipisicing dolor proident excepteur est velit exercitation aliquip deserunt nisi. <br /> <br />Qui exercitation occaecat dolore non exercitation nulla duis duis proident et voluptate magna consequat. Sunt veniam occaecat deserunt adipisicing ipsum exercitation cupidatat eu qui mollit est. Ea aute quis occaecat cillum labore sunt qui dolor laborum tempor id enim. Nisi aliqua voluptate magna nulla proident consectetur ad ut fugiat cillum. <br /> <br />Enim Lorem cupidatat incididunt fugiat dolor et sit in. Dolore ut ipsum elit incididunt nisi cillum eiusmod laboris anim ullamco quis. Enim deserunt incididunt est nulla.<br /> <br />Consectetur magna qui commodo cillum est voluptate consectetur culpa exercitation deserunt cupidatat. Ad nulla mollit ea ad eiusmod nulla consectetur elit duis quis proident ea pariatur pariatur. Lorem quis do exercitation mollit eiusmod. Eu sunt do incididunt anim qui aute dolore reprehenderit velit occaecat.",
  },
  {
    title: "Áo somi dài tay 08",
    price: "194000",
    image01: product_08_image_01,
    image02: product_08_image_02,
    categorySlug: "shirt",
    colors: ["white", "red", "black"],
    slug: "shirt-dai-tay-08",
    size: ["s", "m", "xl"],
    description:
      "Nostrud eiusmod ea amet occaecat esse qui commodo. Aute sit eu esse occaecat est ad. Irure excepteur adipisicing dolor proident excepteur est velit exercitation aliquip deserunt nisi. <br /> <br />Qui exercitation occaecat dolore non exercitation nulla duis duis proident et voluptate magna consequat. Sunt veniam occaecat deserunt adipisicing ipsum exercitation cupidatat eu qui mollit est. Ea aute quis occaecat cillum labore sunt qui dolor laborum tempor id enim. Nisi aliqua voluptate magna nulla proident consectetur ad ut fugiat cillum. <br /> <br />Enim Lorem cupidatat incididunt fugiat dolor et sit in. Dolore ut ipsum elit incididunt nisi cillum eiusmod laboris anim ullamco quis. Enim deserunt incididunt est nulla.<br /> <br />Consectetur magna qui commodo cillum est voluptate consectetur culpa exercitation deserunt cupidatat. Ad nulla mollit ea ad eiusmod nulla consectetur elit duis quis proident ea pariatur pariatur. Lorem quis do exercitation mollit eiusmod. Eu sunt do incididunt anim qui aute dolore reprehenderit velit occaecat.",
  },
  {
    title: "Áo somi tay dài 09",
    price: "194000",
    image01: product_09_image_01,
    image02: product_09_image_02,
    categorySlug: "shirt",
    colors: ["white", "blue"],
    slug: "shirt-tay-dai-09",
    size: ["m"],
    description:
      "Nostrud eiusmod ea amet occaecat esse qui commodo. Aute sit eu esse occaecat est ad. Irure excepteur adipisicing dolor proident excepteur est velit exercitation aliquip deserunt nisi. <br /> <br />Qui exercitation occaecat dolore non exercitation nulla duis duis proident et voluptate magna consequat. Sunt veniam occaecat deserunt adipisicing ipsum exercitation cupidatat eu qui mollit est. Ea aute quis occaecat cillum labore sunt qui dolor laborum tempor id enim. Nisi aliqua voluptate magna nulla proident consectetur ad ut fugiat cillum. <br /> <br />Enim Lorem cupidatat incididunt fugiat dolor et sit in. Dolore ut ipsum elit incididunt nisi cillum eiusmod laboris anim ullamco quis. Enim deserunt incididunt est nulla.<br /> <br />Consectetur magna qui commodo cillum est voluptate consectetur culpa exercitation deserunt cupidatat. Ad nulla mollit ea ad eiusmod nulla consectetur elit duis quis proident ea pariatur pariatur. Lorem quis do exercitation mollit eiusmod. Eu sunt do incididunt anim qui aute dolore reprehenderit velit occaecat.",
  },
  {
    title: "Quần jean phong cách 10",
    price: "194000",
    image01: product_10_image_01,
    image02: product_10_image_02,
    categorySlug: "jeans",
    colors: ["blue", "black"],
    slug: "jeans-phong-cach-10",
    size: ["l"],
    description:
      "Nostrud eiusmod ea amet occaecat esse qui commodo. Aute sit eu esse occaecat est ad. Irure excepteur adipisicing dolor proident excepteur est velit exercitation aliquip deserunt nisi. <br /> <br />Qui exercitation occaecat dolore non exercitation nulla duis duis proident et voluptate magna consequat. Sunt veniam occaecat deserunt adipisicing ipsum exercitation cupidatat eu qui mollit est. Ea aute quis occaecat cillum labore sunt qui dolor laborum tempor id enim. Nisi aliqua voluptate magna nulla proident consectetur ad ut fugiat cillum. <br /> <br />Enim Lorem cupidatat incididunt fugiat dolor et sit in. Dolore ut ipsum elit incididunt nisi cillum eiusmod laboris anim ullamco quis. Enim deserunt incididunt est nulla.<br /> <br />Consectetur magna qui commodo cillum est voluptate consectetur culpa exercitation deserunt cupidatat. Ad nulla mollit ea ad eiusmod nulla consectetur elit duis quis proident ea pariatur pariatur. Lorem quis do exercitation mollit eiusmod. Eu sunt do incididunt anim qui aute dolore reprehenderit velit occaecat.",
  },
  {
    title: "Quần jean 11",
    price: "194000",
    image01: product_11_image_01,
    image02: product_11_image_02,
    categorySlug: "jeans",
    colors: ["blue", "black"],
    slug: "jeans-11",
    size: ["s", "m", "xl"],
    description:
      "Nostrud eiusmod ea amet occaecat esse qui commodo. Aute sit eu esse occaecat est ad. Irure excepteur adipisicing dolor proident excepteur est velit exercitation aliquip deserunt nisi. <br /> <br />Qui exercitation occaecat dolore non exercitation nulla duis duis proident et voluptate magna consequat. Sunt veniam occaecat deserunt adipisicing ipsum exercitation cupidatat eu qui mollit est. Ea aute quis occaecat cillum labore sunt qui dolor laborum tempor id enim. Nisi aliqua voluptate magna nulla proident consectetur ad ut fugiat cillum. <br /> <br />Enim Lorem cupidatat incididunt fugiat dolor et sit in. Dolore ut ipsum elit incididunt nisi cillum eiusmod laboris anim ullamco quis. Enim deserunt incididunt est nulla.<br /> <br />Consectetur magna qui commodo cillum est voluptate consectetur culpa exercitation deserunt cupidatat. Ad nulla mollit ea ad eiusmod nulla consectetur elit duis quis proident ea pariatur pariatur. Lorem quis do exercitation mollit eiusmod. Eu sunt do incididunt anim qui aute dolore reprehenderit velit occaecat.",
  },
  {
    title: "Quần jean 12",
    price: "194000",
    image01: product_12_image_01,
    image02: product_12_image_02,
    categorySlug: "jeans",
    colors: ["blue"],
    slug: "jeans-12",
    size: ["s", "m", "xl"],
    description:
      "Nostrud eiusmod ea amet occaecat esse qui commodo. Aute sit eu esse occaecat est ad. Irure excepteur adipisicing dolor proident excepteur est velit exercitation aliquip deserunt nisi. <br /> <br />Qui exercitation occaecat dolore non exercitation nulla duis duis proident et voluptate magna consequat. Sunt veniam occaecat deserunt adipisicing ipsum exercitation cupidatat eu qui mollit est. Ea aute quis occaecat cillum labore sunt qui dolor laborum tempor id enim. Nisi aliqua voluptate magna nulla proident consectetur ad ut fugiat cillum. <br /> <br />Enim Lorem cupidatat incididunt fugiat dolor et sit in. Dolore ut ipsum elit incididunt nisi cillum eiusmod laboris anim ullamco quis. Enim deserunt incididunt est nulla.<br /> <br />Consectetur magna qui commodo cillum est voluptate consectetur culpa exercitation deserunt cupidatat. Ad nulla mollit ea ad eiusmod nulla consectetur elit duis quis proident ea pariatur pariatur. Lorem quis do exercitation mollit eiusmod. Eu sunt do incididunt anim qui aute dolore reprehenderit velit occaecat.",
  },
  {
    title: "Áo thun Dinosaur 13",
    price: "189000",
    image01: product_01_image_01,
    image02: product_01_image_02,
    categorySlug: "t-shirt",
    colors: ["white", "red"],
    slug: "t-shirt-dinosaur-13",
    size: ["s", "m", "xl"],
    description:
      "Nostrud eiusmod ea amet occaecat esse qui commodo. Aute sit eu esse occaecat est ad. Irure excepteur adipisicing dolor proident excepteur est velit exercitation aliquip deserunt nisi. <br /> <br />Qui exercitation occaecat dolore non exercitation nulla duis duis proident et voluptate magna consequat. Sunt veniam occaecat deserunt adipisicing ipsum exercitation cupidatat eu qui mollit est. Ea aute quis occaecat cillum labore sunt qui dolor laborum tempor id enim. Nisi aliqua voluptate magna nulla proident consectetur ad ut fugiat cillum. <br /> <br />Enim Lorem cupidatat incididunt fugiat dolor et sit in. Dolore ut ipsum elit incididunt nisi cillum eiusmod laboris anim ullamco quis. Enim deserunt incididunt est nulla.<br /> <br />Consectetur magna qui commodo cillum est voluptate consectetur culpa exercitation deserunt cupidatat. Ad nulla mollit ea ad eiusmod nulla consectetur elit duis quis proident ea pariatur pariatur. Lorem quis do exercitation mollit eiusmod. Eu sunt do incididunt anim qui aute dolore reprehenderit velit occaecat.",
  },
  {
    title: "Áo thun Dinosaur 14",
    price: "159000",
    image01: product_02_image_01,
    image02: product_02_image_02,
    categorySlug: "t-shirt",
    colors: ["white", "blue"],
    slug: "t-shirt-dinosaur-14",
    size: ["s", "m"],
    description:
      "Nostrud eiusmod ea amet occaecat esse qui commodo. Aute sit eu esse occaecat est ad. Irure excepteur adipisicing dolor proident excepteur est velit exercitation aliquip deserunt nisi. <br /> <br />Qui exercitation occaecat dolore non exercitation nulla duis duis proident et voluptate magna consequat. Sunt veniam occaecat deserunt adipisicing ipsum exercitation cupidatat eu qui mollit est. Ea aute quis occaecat cillum labore sunt qui dolor laborum tempor id enim. Nisi aliqua voluptate magna nulla proident consectetur ad ut fugiat cillum. <br /> <br />Enim Lorem cupidatat incididunt fugiat dolor et sit in. Dolore ut ipsum elit incididunt nisi cillum eiusmod laboris anim ullamco quis. Enim deserunt incididunt est nulla.<br /> <br />Consectetur magna qui commodo cillum est voluptate consectetur culpa exercitation deserunt cupidatat. Ad nulla mollit ea ad eiusmod nulla consectetur elit duis quis proident ea pariatur pariatur. Lorem quis do exercitation mollit eiusmod. Eu sunt do incididunt anim qui aute dolore reprehenderit velit occaecat.",
  },
  {
    title: "Áo thun Dinosaur 15",
    price: "190000",
    image01: product_03_image_01,
    image02: product_03_image_02,
    categorySlug: "t-shirt",
    colors: ["red", "blue"],
    slug: "t-shirt-dinosaur-15",
    size: ["xl"],
    description:
      "Nostrud eiusmod ea amet occaecat esse qui commodo. Aute sit eu esse occaecat est ad. Irure excepteur adipisicing dolor proident excepteur est velit exercitation aliquip deserunt nisi. <br /> <br />Qui exercitation occaecat dolore non exercitation nulla duis duis proident et voluptate magna consequat. Sunt veniam occaecat deserunt adipisicing ipsum exercitation cupidatat eu qui mollit est. Ea aute quis occaecat cillum labore sunt qui dolor laborum tempor id enim. Nisi aliqua voluptate magna nulla proident consectetur ad ut fugiat cillum. <br /> <br />Enim Lorem cupidatat incididunt fugiat dolor et sit in. Dolore ut ipsum elit incididunt nisi cillum eiusmod laboris anim ullamco quis. Enim deserunt incididunt est nulla.<br /> <br />Consectetur magna qui commodo cillum est voluptate consectetur culpa exercitation deserunt cupidatat. Ad nulla mollit ea ad eiusmod nulla consectetur elit duis quis proident ea pariatur pariatur. Lorem quis do exercitation mollit eiusmod. Eu sunt do incididunt anim qui aute dolore reprehenderit velit occaecat.",
  },
  {
    title: "Áo somi dài tay 16",
    price: "194000",
    image01: product_08_image_01,
    image02: product_08_image_02,
    categorySlug: "shirt",
    colors: ["blue", "black"],
    slug: "shirt-dai-tay-16",
    size: ["m", "xl"],
    description:
      "Nostrud eiusmod ea amet occaecat esse qui commodo. Aute sit eu esse occaecat est ad. Irure excepteur adipisicing dolor proident excepteur est velit exercitation aliquip deserunt nisi. <br /> <br />Qui exercitation occaecat dolore non exercitation nulla duis duis proident et voluptate magna consequat. Sunt veniam occaecat deserunt adipisicing ipsum exercitation cupidatat eu qui mollit est. Ea aute quis occaecat cillum labore sunt qui dolor laborum tempor id enim. Nisi aliqua voluptate magna nulla proident consectetur ad ut fugiat cillum. <br /> <br />Enim Lorem cupidatat incididunt fugiat dolor et sit in. Dolore ut ipsum elit incididunt nisi cillum eiusmod laboris anim ullamco quis. Enim deserunt incididunt est nulla.<br /> <br />Consectetur magna qui commodo cillum est voluptate consectetur culpa exercitation deserunt cupidatat. Ad nulla mollit ea ad eiusmod nulla consectetur elit duis quis proident ea pariatur pariatur. Lorem quis do exercitation mollit eiusmod. Eu sunt do incididunt anim qui aute dolore reprehenderit velit occaecat.",
  },
  {
    title: "Áo somi tay dài 17",
    price: "194000",
    image01: product_09_image_01,
    image02: product_09_image_02,
    categorySlug: "shirt",
    colors: ["white", "blue"],
    slug: "shirt-tay-dai-17",
    size: ["s", "l", "xl"],
    description:
      "Nostrud eiusmod ea amet occaecat esse qui commodo. Aute sit eu esse occaecat est ad. Irure excepteur adipisicing dolor proident excepteur est velit exercitation aliquip deserunt nisi. <br /> <br />Qui exercitation occaecat dolore non exercitation nulla duis duis proident et voluptate magna consequat. Sunt veniam occaecat deserunt adipisicing ipsum exercitation cupidatat eu qui mollit est. Ea aute quis occaecat cillum labore sunt qui dolor laborum tempor id enim. Nisi aliqua voluptate magna nulla proident consectetur ad ut fugiat cillum. <br /> <br />Enim Lorem cupidatat incididunt fugiat dolor et sit in. Dolore ut ipsum elit incididunt nisi cillum eiusmod laboris anim ullamco quis. Enim deserunt incididunt est nulla.<br /> <br />Consectetur magna qui commodo cillum est voluptate consectetur culpa exercitation deserunt cupidatat. Ad nulla mollit ea ad eiusmod nulla consectetur elit duis quis proident ea pariatur pariatur. Lorem quis do exercitation mollit eiusmod. Eu sunt do incididunt anim qui aute dolore reprehenderit velit occaecat.",
  },
  {
    title: "Quần jean phong cách 18",
    price: "194000",
    image01: product_10_image_01,
    image02: product_10_image_02,
    categorySlug: "jeans",
    colors: ["blue", "black"],
    slug: "jeans-phong-cach-18",
    size: ["s", "m", "l", "xl"],
    description:
      "Nostrud eiusmod ea amet occaecat esse qui commodo. Aute sit eu esse occaecat est ad. Irure excepteur adipisicing dolor proident excepteur est velit exercitation aliquip deserunt nisi. <br /> <br />Qui exercitation occaecat dolore non exercitation nulla duis duis proident et voluptate magna consequat. Sunt veniam occaecat deserunt adipisicing ipsum exercitation cupidatat eu qui mollit est. Ea aute quis occaecat cillum labore sunt qui dolor laborum tempor id enim. Nisi aliqua voluptate magna nulla proident consectetur ad ut fugiat cillum. <br /> <br />Enim Lorem cupidatat incididunt fugiat dolor et sit in. Dolore ut ipsum elit incididunt nisi cillum eiusmod laboris anim ullamco quis. Enim deserunt incididunt est nulla.<br /> <br />Consectetur magna qui commodo cillum est voluptate consectetur culpa exercitation deserunt cupidatat. Ad nulla mollit ea ad eiusmod nulla consectetur elit duis quis proident ea pariatur pariatur. Lorem quis do exercitation mollit eiusmod. Eu sunt do incididunt anim qui aute dolore reprehenderit velit occaecat.",
  },
  // 18 products
];

const getAllProducts = () => products;

const getProducts = (count) => {
  const max = products.length - count;
  const min = 0;
  const start = Math.floor(Math.random() * (max - min) + min);
  return products.slice(start, start + count);
};

const getProductBySlug = (slug) => products.find((e) => e.slug === slug);

const getCartItemsDetails = (cartItems) => {
  let res = [];
  if (cartItems.length > 0) {
    cartItems.forEach((element) => {
      let product = getProductBySlug(element.slug);
      res.push({
        ...element,
        product: product,
      });
    });
  }
  return res;
};

const productData = {
  getAllProducts,
  getProducts,
  getProductBySlug,
  getCartItemsDetails,
};

export default productData;
