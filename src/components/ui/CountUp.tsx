
import { useCountUp } from '@/hooks/useCountUp';

interface CountUpProps {
  end: number;
  duration?: number;
  delay?: number;
  suffix?: string;
  className?: string;
}

const CountUp = ({ end, duration = 2000, delay = 0, suffix = '', className = '' }: CountUpProps) => {
  const { count, elementRef } = useCountUp({ end, duration, delay });

  return (
    <div ref={elementRef} className={className}>
      {count}{suffix}
    </div>
  );
};

export default CountUp;
