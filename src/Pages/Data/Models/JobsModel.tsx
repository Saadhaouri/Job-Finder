export default class JobModel {
  constructor(
    public id: string,
    public JobTitle: string,
    public time: string,
    public Country: string,
    public Description: string,
    public Companies: string,
    public category: string
  ) {}
}
