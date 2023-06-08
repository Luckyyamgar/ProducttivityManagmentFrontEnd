import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/product"; 

class ProductService {

    saveProduct(product) {
        return axios.post(API_URL + "/", product);
    }

    getAllProduct() {
        return axios.get(API_URL + "/getallproduct");
    }

    getProductById(id) {
        return axios.get(API_URL + "/" + id);
    }

    deleteProduct(id) {
        return axios.delete(API_URL + "/delete/" + id);
    }

    editProduct(product) {
        return axios.post(API_URL + "/editproduct/" + product.id, product );
    }

}

export default new ProductService;