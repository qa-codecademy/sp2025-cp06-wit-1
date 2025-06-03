class ProjectCardModel {
  constructor(project) {
    this.id = project.id;
    this.title = project.title;
    this.description = project.description;
    this.image = project.image;
    this.typeId = project.typeId;
    this.datePosted = new Date(project.datePosted);
    this.endDate = new Date(project.endDate);
    this.isActive = project.isActive;
    this.collected = project.collected;
    this.goal = project.goal;
  }

  getFormattedDate() {
    return this.datePosted.toLocaleDateString();
  }

  getFormattedEndDate() {
    return this.endDate.toLocaleDateString();
  }

  getRemainingAmount() {
    return Math.max(0, this.goal - this.collected);
  }

  getProgressPercentage() {
    return Math.min(100, Math.round((this.collected / this.goal) * 100));
  }
}

export default ProjectCardModel;
