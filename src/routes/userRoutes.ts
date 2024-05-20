import proxy from "../service/appServiceProxy";
import { userRoutes } from '../helper/routes';

const userRoute = async (app: any) => {
	app.get(userRoutes.UsersRoute, proxy.user.getUsers);
	app.post(userRoutes.UsersRoute, proxy.user.create);
	app.post(userRoutes.UserLoginRoute, proxy.user.loginUser);
	app.get(userRoutes.UserByIdRoute, proxy.user.getUserById);
	app.get(userRoutes.UserProfileByTokenRoute, proxy.auth.authenticate, proxy.user.getUserByToken);
};

export default userRoute;
