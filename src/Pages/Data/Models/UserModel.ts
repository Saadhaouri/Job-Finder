export default class UserModel {
  id: string;
  firstname: string;
  lastname: string;
  dateofbirth: Date;
  country: string;
  region: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  acceptedConditions: boolean;

  constructor(
    id: string,
    firstname: string,
    lastname: string,
    dateofbirth: Date,
    country: string,
    region: string,
    email: string,
    password: string,
    passwordConfirmation: string,
    acceptedConditions: boolean
  ) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.dateofbirth = dateofbirth;
    this.country = country;
    this.region = region;
    this.email = email;
    this.password = password;
    this.passwordConfirmation = passwordConfirmation;
    this.acceptedConditions = acceptedConditions;
  }
}
