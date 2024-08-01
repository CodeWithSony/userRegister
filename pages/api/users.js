

// import dbConnect from '@/lib/dbconnect';
// // import dbConnect from "@/lib/dbconnect";
// // import User from '../../models/User';
// import User from "../../models/User"


// export default async function handler(req, res) {
//   await dbConnect();

//   if (req.method === 'POST') {
//     try {
//       const { name, email, age } = req.body;

//       // Validation can be added here if needed

//       const newUser = new User({ name, email, age });
//       await newUser.save();

//       res.status(201).json({ message: 'User registered successfully!', user: newUser });
//     } catch (error) {
//       res.status(400).json({ error: error.message });
//     }
//   } else if (req.method === 'GET') {
//     try {
//       const users = await User.find();
//       res.status(200).json(users);
//     } catch (error) {
//       res.status(400).json({ error: error.message });
//     }
//   } else {
//     res.status(405).json({ error: 'Method not allowed' });
//   }
// }



// import dbConnect from '../../lib/dbConnect';
import dbConnect from '@/lib/dbconnect';
// import User from '../../models/User';
import User from "../../models/User"

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    try {
      const { name, email, age } = req.body;
      const newUser = new User({ name, email, age });
      await newUser.save();
      res.status(201).json({ message: 'User registered successfully!', user: newUser });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  } else if (req.method === 'GET') {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
