const getdata = require("../../../common/database");

const order = async (req, res) => {
    orders = await getdata(`SELECT order_id, SUM(price) FROM public.orderlines
    left join products on products.product_id = orderlines.product_id
    group by order_id
    order by order_id`);
    res.send(orders);
}

module.exports = {
    order
}