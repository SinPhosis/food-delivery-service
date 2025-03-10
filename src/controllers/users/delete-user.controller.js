export const deleteUser = (req, res) => {
  try {
    const { id } = req.body;

    const userIndex = users.findIndex((user) => user.id === id);

    if (userIndex === -1) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    res.status(201).send({ status: "success", data: users });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.send(500).json({ success: false, message: "Error deleting user" });
  }
};
