import products from "../../data/products";
import './ProductsTable.css';

const ProductsTable = () => {
  const renderProductTable = () =>
    products.map((product, index) => (
      <tr key={product.id} className={index % 2 !== 0 ? 'even' : 'odd'}>
        <td>{product.id}</td>
        <td>{product.description}</td>
        <td>$ {product.price.toFixed(2).replace('.', ',')}</td>
      </tr>
    ));

  return (
    <div className="products_table">
      <table>
        <thead>
          <tr>
            <th>Id.</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{renderProductTable()}</tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
