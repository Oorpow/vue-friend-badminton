export const uploadConfig = {
  action: import.meta.env.VITE_LOCAL_SERVER + 'upload/spaceBg',
  uploadStyle: {
    padding: '7px',
    borderRadius: '50%',
    border: '1px solid #3b82f6',
    backgroundColor: 'white',
  },
}

export enum uploadType {
  bg = 'spaceBg',
  avatar = 'avatar',
}
