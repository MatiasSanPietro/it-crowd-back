// import { Request, Response } from "express";
// import bcrypt from "bcrypt";
// import { User } from "../models/user";
// import jwt from "jsonwebtoken";

// export const newUser = async (req: Request, res: Response) => {
//   const { username, password } = req.body;

//   const user = await User.findOne({ where: { username: username } });

//   if (user) {
//     return res.status(400).json({
//       msg: `User already exists ${username}`,
//     });
//   }

//   const hashedPassword = await bcrypt.hash(password, 10);

//   try {
//     await User.create({
//       username: username,
//       password: hashedPassword,
//     });

//     res.json({
//       msg: `User ${username} created!`,
//     });
//   } catch (error) {
//     res.status(400).json({
//       msg: "Error",
//       error,
//     });
//   }
// };

// export const loginUser = async (req: Request, res: Response) => {
//   const { username, password } = req.body;

//   const user: any = await User.findOne({ where: { username: username } });

//   if (!user) {
//     return res.status(400).json({
//       msg: `User ${username} doesn't exists in the database`,
//     });
//   }

//   const passwordValid = await bcrypt.compare(password, user.password);
//   if (!passwordValid) {
//     return res.status(400).json({
//       msg: `Wrong password`,
//     });
//   }

//   const token = jwt.sign(
//     {
//       username: username,
//     },
//     process.env.SECRET_KEY || "secretitcrowd"
//   );

//   res.json(token);
// };
