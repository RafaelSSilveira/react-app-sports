class DaysOfWeekMock {
  labels = [
    {
      description: 'Every Day',
      multiple: false
    },
    {
      description: 'Week Days',
      multiple: false
    },
    {
      description: 'Sun',
      multiple: true
    },
    {
      description: 'Mon',
      multiple: true
    },
    {
      description: 'Tue',
      multiple: true
    },
    {
      description: 'Wed',
      multiple: true
    },
    {
      description: 'Thu',
      multiple: true
    },
    {
      description: 'Fri',
      multiple: true
    },
    {
      description: 'Sat',
      multiple: true
    }
  ];

  /**
   * @description Returns a random Day Of Week Label ["Every Day", "Week Days", "Sun", "Mon", "Tue", "Web", "Thu", "Fri"]
   * @returns String[]
   */
  random() {
    let max = Math.floor((Math.random() * 3) + 1);
    let labels = [];

    for (let i = 0; i < max; i++) {
      let options = [];
      if (max === 1) {
        options = this.labels.filter(el => el.multiple === false);
      } else {
        options = this.labels.filter(el => el.multiple === true);
      }

      let item = options[Math.floor(Math.random() * options.length)]
      labels.push(item.description);
    }

    return labels;
  }
}

export default new DaysOfWeekMock();