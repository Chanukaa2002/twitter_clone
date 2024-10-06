import jwt from "jsonwebtoken";

export const genarateTokenAndSetCookie = (id, res) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, //ms
    httpOnly: true, //cookie cannot be accessed by client side
    sameSite: "strict", //cookie cannot be accessed by cross site
    secure: process.env.NODE_ENV !== "development",
  });
};
