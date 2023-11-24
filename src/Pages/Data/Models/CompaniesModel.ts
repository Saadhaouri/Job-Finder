export default class CompaniesModel {
  id: string;
  Title: string;
  Logo: string;

  constructor(id: string, Title: string, Logo: string) {
    this.id = id;
    this.Title = Title;
    this.Logo = Logo;
  }
}
