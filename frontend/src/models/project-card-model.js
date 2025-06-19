class ProjectCardModel {
  constructor(project) {
    this.id = project.id;
    this.title = project.title;
    this.description = project.description;
    this.image = project.image;
    this.typeId = project.typeId;
    this.datePosted = this.parseDate(project.datePosted, new Date());
    this.endDate = this.parseDate(project.endDate);
    this.isActive = project.isActive !== undefined ? project.isActive : true;
    this.collected = project.collected || 0;
    this.goal = project.goal;
  }

  parseDate(dateInput, fallback = null) {
    const d = new Date(dateInput);
    return !isNaN(d.getTime()) ? d : fallback;
  }

  getFormattedDate() {
    return this.datePosted ? this.datePosted.toLocaleDateString() : "–";
  }

  getFormattedEndDate() {
    return this.endDate ? this.endDate.toLocaleDateString() : "–";
  }

  getRemainingAmount() {
    return Math.max(0, this.goal - this.collected);
  }

  getProgressPercentage() {
    return Math.min(100, Math.round((this.collected / this.goal) * 100));
  }
}

export default ProjectCardModel;
