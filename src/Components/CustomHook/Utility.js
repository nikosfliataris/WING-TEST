export const CheckUser = (user) => {
  if (!user) {
    return false;
  } else {
    const { userRole } = user;
    if (userRole.includes("admin")) return true;
  }

  return false;
};
