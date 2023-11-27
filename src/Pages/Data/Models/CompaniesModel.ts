export default class CompaniesModel {
  id: string;
  Title: string;
  logo: string;

  constructor(id: string, Title: string, logo: string) {
    this.id = id;
    this.Title = Title;
    this.logo = logo;
  }
}
