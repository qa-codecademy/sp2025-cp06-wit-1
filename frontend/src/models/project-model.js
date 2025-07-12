export default class Project {
  constructor (id, title, description, image, bankAccount, goal, endDate, typeId) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.image = image;
    this.bankAccount = bankAccount;
    this.goal = goal;
    this.endDate = endDate;
    this.typeId = typeId;
  }
};