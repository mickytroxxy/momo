const getColorFromGradient = (gradientString: string) => {
  const colorRegex = /#[0-9a-fA-F]{6}/g;
  const colors = gradientString.match(colorRegex);

  return colors ? colors.slice(0, 3) : [];
};

export default getColorFromGradient;
