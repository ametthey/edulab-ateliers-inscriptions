// server/api/auth/login.post.ts
import { User } from "#auth-utils";
export default defineEventHandler(async (event) => {
  const storage = useStorage("data");

  // get the email and password from the post body
  // for a more robust solution you could use zod to validate the body
  const { email, password } = await readBody(event);

  // get the user from the storage
  // we'll make sure to include the password in the user object as it's stored in storage
  // but it's not returned from the server as part of the user object
  const user = await storage.getItem<User & { password?: string }>(email);

  // if the user doesn't exist, return an error
  if (!user) {
    return createError({
      statusCode: 400,
      statusMessage: "Svp de vérifier si vous avez un mot de passe et un identifiant",
    });
  }

  // if the user does exist, we'll verify the password
  // we'll use the verifyPassword function from Nuxt Auth Utils
  // to compare the stored hashed password with the user provided password
  const isPasswordValid = await verifyPassword(user?.password || "", password);

  // if the password is invalid, return an error
  if (!isPasswordValid) {
    throw createError({
      statusCode: 400,
      statusMessage: "Svp de vérifier si vous avez un mot de passe et un identifiant",
    });
  }

  // if the password is valid, we can set the session
  // without the user data without the password (for security)

  delete user.password;
  await setUserSession(event, {
    user,
    loggedInAt: new Date(),
  });

  // finally return the session data to the client
  // not really necessary but could be useful for the app to have
  return await getUserSession(event);
});
