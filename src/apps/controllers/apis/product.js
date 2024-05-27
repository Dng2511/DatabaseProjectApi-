const getdata = require("../../../common/database");

const getProducts = async (req, res) => {
    const limit = 40;
    const page = req.query.page || 1;

    const products = await getdata(`SELECT 
    p.*, 
    AVG(c.rate) AS average_rate
FROM 
    products p
LEFT JOIN 
    comments c ON p.product_id = c.product_id
GROUP BY 
p.product_id
ORDER BY 
p.product_id DESC
LIMIT ${limit} OFFSET ${limit*(page - 1)};`);
    res.send(products);

};

const getProductById = async (req, res) => {
    const id = req.params.id;
    const product = await getdata(`SELECT p.*, u.full_name as seller_name from products p join users u on u.user_id = p.seller_id WHERE product_id = ${id}`);
    res.send(product);

};

module.exports = {getProducts, getProductById}