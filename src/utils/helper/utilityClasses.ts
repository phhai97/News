const utilityClasses = () => {
  let arrayTemp: any = Array(1).keys();
  const data = [...arrayTemp].reduce(
    (returnValue, currentValue) =>
      returnValue.concat(
        `
      .mh-${currentValue}{
        min-height: ${currentValue}px !important;
      }
      .mt-${currentValue}{
        margin-top:${currentValue}px !important;
      }
      .mb-${currentValue}{
        margin-bottom:${currentValue}px !important;
      }
      .ml-${currentValue}{
        margin-left:${currentValue}px !important;
      }
      .mr-${currentValue}{
        margin-right:${currentValue}px !important;
      }
      .pd-${currentValue}{
        padding:${currentValue}em !important;
      }
    `
      ),
    ""
  );
  return data;
};
export default utilityClasses();
