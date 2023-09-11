import productRepo from "../repository/productRepo";
import logger from "../core/logger";

const getAllProduct = () => {
    logger.info("Fetching all the products from product repository");
    return productRepo.getAllProducts();
}

export default {
    getAllProduct
}
