export const getAvatarName = (name: string) => {
  const avatarName = name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .join("");

  if (avatarName.length > 2) {
    return avatarName.slice(0, 2);
  }

  return avatarName;
};
