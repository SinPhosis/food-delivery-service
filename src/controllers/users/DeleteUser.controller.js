export const deleteUser = (req, res) => {
    users.pop();
    res.send({ status : "success", data : users });
};