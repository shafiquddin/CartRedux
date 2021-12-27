import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PROD = [
  { id: "p1", price: 6,title:'first' ,description: "This is my first book I ever Wrote" },
  { id: "p2", price: 8,title:'second' ,description: "This is my second book" },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PROD.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
