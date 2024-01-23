import Button from '@mui/material/Button';
import { styled } from '@mui/system';

// const SortButton = styled(Button)`
//   color: var(--navy);
//   brorder: none;
// //   borderColor: (--dark-grey);
// //   borderRight: 1px solid var(--dark-grey);
// //   &:not(:last-of-type) {
// //     borderRightColor: var(--dark-grey); // 마지막 버튼을 제외한 모든 버튼의 오른쪽 테두리 색을 빨간색으로 변경
// //   }
// `;
const SortButton = styled(Button)`
  color: ${props => props.selected ? 'var(--navy)' : 'var(--dark-grey)'};
  border: none;
`;

export default SortButton;
