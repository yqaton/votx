export const colours = {
  tomato: '#F44336',
  pink: '#E91E63',
  purple: '#9C27B0',
  deep_purple: '#673AB7',
  indigo: '#3F51B5',
  blue: '#2196F3',
  deep_orange: '#FF5722',
  teal: '#009688',
  blue_grey: '#607D8B'
};

export const get_random_colour = () => {
  const cs = Object.values(colours);
  const random_number = Math.floor(Math.random() * cs.length);

  return cs[random_number];
};
