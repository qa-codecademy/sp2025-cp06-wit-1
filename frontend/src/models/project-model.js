export default class Project {
  constructor (id, title, description, image, transaction, donation, date, typeId) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.image = image;
    this.transaction = transaction;
    this.donation = donation;
    this.date = date;
    this.typeId = typeId;
  }
};