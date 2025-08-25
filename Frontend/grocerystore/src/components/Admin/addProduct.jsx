import ProductForm from './addProductForm'

function AddProduct() {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-between bg-black w-full p-4 rounded-lg">
            <h1 className="text-white text-lg sm:text-xl font-semibold mb-3 sm:mb-0">
                Hello Admin, Welcome to Product
            </h1>
            <ProductForm />
        </div>
    );
}

export default AddProduct;
