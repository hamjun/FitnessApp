const activityCalories = (lb125, lb155, lb185) => (lb125 + lb155 + lb185)/(125+155+185);

const activites = [
  {
    name: 'Walking',
    calories: activityCalories(120, 149, 178),
    gym: false
  },
  {
    name: 'Running',
    calories: activityCalories(240, 298, 355),
    gym: false
  },
  {
    name: 'Bicycling',
    calories: activityCalories(240, 298, 355),
    gym: false
  },
  {
    name: 'Yoga',
    calories: activityCalories(120, 149, 178),
    gym: false
  },
  {
    name: 'Jump Rope',
    calories: activityCalories(300, 372, 444),
    gym: false
  },
  {
    name: 'Weight Lifting',
    calories: activityCalories(90, 112, 133),
    gym: true
  },
  {
    name: 'Stationary Bike',
    calories: activityCalories(210, 260, 311),
    gym: true
  },
  {
    name: 'Swimming',
    calories: activityCalories(180, 223, 266),
    gym: true
  },
  {
    name: 'Stair Step Machine',
    calories: activityCalories(180, 223, 266),
    gym: true
  }
];

export default activites;
