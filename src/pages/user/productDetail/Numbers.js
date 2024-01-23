import * as React from 'react';
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

// 수량 증가. 선택 박스
export default function NumberBadge({ count, setCount }) {
//   const [count, setCount] = React.useState(0);
  return (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, border: '1px solid var(--dark-grey)',borderRadius: '0.1875rem', }}>
        {/* 수량 줄이기 버튼 (count가 0이면 버튼 비활성화)*/}
        <IconButton size="sm" variant="outlined" onClick={() => setCount((c) => c - 1)} disabled={count === 1}>
          <Remove />
        </IconButton>
        {/* 수량 */}
        <Typography fontWeight="md">
          {count}
        </Typography>
        {/* 수량 늘리기 버튼 */}
        <IconButton size="sm" variant="outlined" onClick={() => setCount((c) => c + 1)}>
          <Add />
        </IconButton>
      </Box>
  );
}
