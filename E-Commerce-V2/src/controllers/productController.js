import productService from "../service/productService";
import logger from "../core/logger";

const getAllProduct = async(req,res) => {
    logger.info("Request recieved for fetching all the products");
    const products = await productService.getAllProduct();
    res.status(200).json(products);
}

export default {
    getAllProduct
}