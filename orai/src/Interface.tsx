interface ProductProps {
    name: string;
    price: number;
}

const Product: React.FC<ProductProps> = () => {
    const product = {
        name: "Sample Product",
        price: 29.99
    };

    return (
        <div>
            <h2>{product.name}</h2>
            <p>Price: ${product.price.toFixed(2)}</p>
        </div>
    );
};

export default Product;