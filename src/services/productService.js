import axios from "axios";

const PRODUCT_API_BASE_URL = "http://localhost:8080/";

class ProductService {
  getProducts() {
    return axios.get(PRODUCT_API_BASE_URL + "getAllProduct");
  }

  createProduct(product) {
    return axios.post(PRODUCT_API_BASE_URL + "saveProduct", product);
  }

  getProductById(productId) {
    return axios.get(PRODUCT_API_BASE_URL + "getProduct", {
      params: { id: productId },
    });
  }

  updateProduct(product, productId) {
    return axios.put(PRODUCT_API_BASE_URL + "updateProduct", product, {
      params: { id: productId },
    });
  }

  deleteProduct(productId) {
    return axios.get(PRODUCT_API_BASE_URL + "deleteProduct", {
      params: { id: productId },
    });
  }
}

export default new ProductService();
