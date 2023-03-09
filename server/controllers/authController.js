export const loginUser = async (req, res) => {
    const { userName, password } = req.body;

    try {
        //check for already existingsuer
        const user = await userModel.findOne({ userName: userName });

        if (user) {
            const valid = await bcrypt.compare(password, user.password);
            if (valid) {
                //token generation
                const token = jwt.sign({ userName: userName, id: user._id }, process.env.JWT_KEY, { expiresIn: "1h" });
                res.status(200).json({ user, token });
            } else {
                res.status(400).json("wrong password!");
            }
        } else res.status(404).json("User does not exists!");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
