// function to get mock image source based on id
export const getAvatarImageSource = (id: string) => {
  switch (id) {
    case '1':
      return require('../assets/profile-1.png')
    case '2':
      return require('../assets/profile-2.png')
    case '3':
      return require('../assets/profile-3.png')
    default:
      return require('../assets/profile-4.png')
  }
}
