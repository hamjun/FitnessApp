const activityCalories = (lb125, lb155, lb185) => (lb125 + lb155 + lb185)/(125+155+185);

const activites = [
  {
    name: 'Walking',
    calories: activityCalories(120, 149, 178),
    gym: false,
    intensity: 1,
    time: 17
  },
  {
    name: 'Running',
    calories: activityCalories(240, 298, 355),
    gym: false,
    intensity: 2,
    time: 16
  },
  {
    name: 'Bicycling',
    calories: activityCalories(240, 298, 355),
    gym: false,
    intensity: 2,
    time: 15
  },
  {
    name: 'Yoga',
    calories: activityCalories(120, 149, 178),
    gym: false,
    intensity: 1,
    time: 19
  },
  {
    name: 'Jump Rope',
    calories: activityCalories(300, 372, 444),
    gym: false,
    intensity: 3,
    time: 19
  },
  {
    name: 'Weight Lifting',
    calories: activityCalories(90, 112, 133),
    gym: true,
    intensity: 2,
    time: 12
  },
  {
    name: 'Stationary Bike',
    calories: activityCalories(210, 260, 311),
    gym: true,
    intensity: 2,
    time: 12
  },
  {
    name: 'Swimming',
    calories: activityCalories(180, 223, 266),
    gym: true,
    intensity: 3,
    time: 12
  },
  {
    name: 'Stair Step Machine',
    calories: activityCalories(180, 223, 266),
    gym: true,
    intensity: 1,
    time: 12
  }
];

export default activites;