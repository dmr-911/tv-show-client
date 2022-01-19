import useProducts from "./useProducts";

const useData = () =>{
    const {products} = useProducts();
    return {products};
};

export default useData;