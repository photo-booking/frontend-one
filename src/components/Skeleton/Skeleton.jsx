import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = props => (
  <ContentLoader
    speed={2}
    width={320}
    height={626}
    viewBox="0 0 320 626"
    backgroundColor="#d6d6d6"
    foregroundColor="#bfbfbf"
    {...props}
  >
    <rect
      x="0"
      y="0"
      rx="12"
      ry="12"
      width="320"
      height="420"
    />
    <circle
      cx="272"
      cy="468"
      r="24"
    />
    <rect
      x="24"
      y="452"
      rx="0"
      ry="0"
      width="136"
      height="16"
    />
    <rect
      x="24"
      y="472"
      rx="0"
      ry="0"
      width="191"
      height="16"
    />
    <rect
      x="24"
      y="508"
      rx="0"
      ry="0"
      width="220"
      height="12"
    />
    <rect
      x="24"
      y="528"
      rx="0"
      ry="0"
      width="272"
      height="12"
    />
    <rect
      x="24"
      y="548"
      rx="0"
      ry="0"
      width="168"
      height="12"
    />
    <rect
      x="24"
      y="578"
      rx="0"
      ry="0"
      width="102"
      height="20"
    />
  </ContentLoader>
);

export default Skeleton;
