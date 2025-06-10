
import React from 'react';
import { useCountUp } from '@/hooks/useCountUp';

interface CountUpProps {
  end: number;
  duration?: number;
  start?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  children?: (value: string) => React.ReactNode;
}

const CountUp: React.FC<CountUpProps> = ({
  end,
  duration = 2000,
  start = 0,
  decimals = 0,
  prefix = '',
  suffix = '',
  className = '',
  children
}) => {
  const { value, ref } = useCountUp({
    end,
    duration,
    start,
    decimals,
    prefix,
    suffix
  });

  if (children) {
    return (
      <span ref={ref} className={className}>
        {children(value)}
      </span>
    );
  }

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
};

export default CountUp;
