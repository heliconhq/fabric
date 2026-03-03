import React from 'react';

const TooltipMetric = ({ dataKey, label, color, tooltipData }) => {
  const datumData = tooltipData.datumByKey[dataKey];

  if (!datumData) {
    return null;
  }

  return (
    <>
      <h4>{label}</h4>
      <p
        style={{
          color,
        }}
      >
        {datumData.datum.value}
      </p>
    </>
  );
};

export default TooltipMetric;
