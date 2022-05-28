import { FC } from 'react';
import { Box } from '@chakra-ui/react';

type Props = {
  variant?: 'full' | 'hollow';
  size?: 'sm' | 'md' | 'lg';
};

const background = {
  full: 'currentColor',
  hollow: 'transparent',
};

const dimension = {
  sm: '10px',
  md: '15px',
  lg: '20px',
};

const Diamond: FC<Props> = ({ variant = 'full', size = 'md' }) => {
  return (
    <Box
      transform="rotateX(45deg) rotateZ(45deg)"
      w={dimension[size]}
      h={dimension[size]}
      bg={background[variant]}
      border="2px solid currentColor"
      data-testid="diamond"
    />
  );
};

export default Diamond;
