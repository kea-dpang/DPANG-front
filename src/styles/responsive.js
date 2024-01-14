import { css } from 'styled-components';

const sizes = {
    mobile: '320px',
    tablet: '768px',
    Mdesktop: '1600',
    desktop: '1920px',
  };

const media = {
  mobile: (styles) => `
    @media (max-width: ${sizes.mobile}) {
      ${styles}
    }
  `,
  tablet: (styles) => `
    @media (max-width: ${sizes.tablet}) {
      ${styles}
    }
  `,
  desktop: (styles) => `
    @media (max-width: ${sizes.desktop}) {
      ${styles}
    }
  `,
  mdesktop: (styles) => `
  @media (max-width: ${sizes.Mdesktop}) {
    ${styles}
  }
`,
};


export default media;
