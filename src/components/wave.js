import React, { useState } from 'react';
import { css } from '@emotion/core';

const Wave = () => {
  const [waves, setWaves] = useState(0);
  const label = `👋 ${waves} ${waves === 1 ? 'wave' : 'waves'}`;
  return (
    <button
      css={css`
        background-color: rebeccapurple;
        border: none;
        color: white;
        font-size: 1.25rem;
        width: 160px;
        padding: 4px 0;
        border-radius: 20px;
        cursor: pointer;
      `}
      onClick={() => setWaves(waves + 1)}
    >
      {label}
    </button>
  );
};

export default Wave;
