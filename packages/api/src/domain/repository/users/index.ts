// import { User } from '../../company/schema/users';
// import { connectDb } from '../../../../infra/db/config/sqlite';

// async function createAndSaveUser() {
//   const { connect } = await connectDb();

//   const userRepository = connect.getRepository(User);

//   const newUser = new User();
//   newUser.firstName = 'João';
//   newUser.lastName = 'Silva';
//   newUser.age = 1;

//   const savedUser = await userRepository.save(newUser);

//   return savedUser;
// }
