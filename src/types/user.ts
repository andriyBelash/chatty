interface IMetadata {
  creationTime: string | number;
  lastSignInTime: string | number;
}

export default interface IUser {
  displayName: string;
  email: string;
  metadata?: IMetadata;
  phoneNumber: string | number;
  photoURL: any;
}
