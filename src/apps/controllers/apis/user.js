const getdata = require("../../../common/database");
const getUsers = async (req, res) => {
    const users = await getdata(`SELECT user_id, full_name, phone_number FROM users`);
    res.send(users);
};
const getUserData = async (req, res) => {
    const id = req.params.id;
    const user = await getdata(`SELECT user_id, full_name, phone_number FROM users WHERE user_id = ${id}`);
    const addresses = await getdata(`SELECT * FROM addresses WHERE user_id = ${id}`);
    user.rows[0].addresses = addresses.rows
    res.send(user);
};



module.exports = {getUsers, getUserData}