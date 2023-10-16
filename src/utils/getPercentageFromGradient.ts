// getPercentageFromGradient

const getPercentageFromGradient = (gradientString: string) => {
  const percentageRegex = /\d+(\.\d+)?(?=%)/g;
  const percentages = gradientString.match(percentageRegex);

  return percentages ? percentages.slice(0, 3) : [];
};
export default getPercentageFromGradient;
