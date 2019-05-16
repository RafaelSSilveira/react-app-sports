class RideInGroupMock {
  labels = ["Always", "Sometimes", "Never"];

  /**
   * @description Returns a random Ride In Group Label ["Always", "Sometimes", "Never"]
   * @returns String
   */
  random() {
    return this.labels[Math.floor(Math.random() * this.labels.length)];
  }
}

export default new RideInGroupMock();