export const getAvatarName = (name: string) => {
  const avatarName = name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .join("");

  return avatarName;
};
