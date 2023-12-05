import React from 'react';
import ContentLoader from 'react-content-loader';

export const SkeletonLogin = props => (
  <ContentLoader 
    speed={0}
    width={512}
    height={668}
    viewBox="0 0 512 600"
    backgroundColor="#c7c7c7"
    foregroundColor="#a2a0a0"
    {...props}
  >
    <rect x="94" y="0" rx="0" ry="0" width="325" height="72" /> 
    <rect x="76" y="124" rx="0" ry="0" width="360" height="44" /> 
    <rect x="76" y="176" rx="0" ry="0" width="360" height="44" /> 
    <rect x="76" y="236" rx="0" ry="0" width="28" height="20" /> 
    <rect x="76" y="260" rx="0" ry="0" width="360" height="44" /> 
    <rect x="76" y="310" rx="0" ry="0" width="64" height="20" /> 
    <rect x="76" y="335" rx="0" ry="0" width="360" height="44" /> 
    <rect x="76" y="420" rx="0" ry="0" width="360" height="44" /> 
    <rect x="144" y="472" rx="0" ry="0" width="125" height="20" /> 
    <rect x="273" y="472" rx="0" ry="0" width="73" height="20" />
  </ContentLoader>
);
