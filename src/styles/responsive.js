import { css } from 'styled-components';

const sizes = {
    Mdesktop: '1728px',
    Ldesktop: '1920px',
  };

const media = {
  Ldesktop: (styles) => `
    @media (max-width: ${sizes.Ldesktop}) {
      ${styles}
    }
  `,
  Mdesktop: (styles) => `
  @media (min-width: ${sizes.Mdesktop}) {
    ${styles}
  }
`,
};


export default media;
