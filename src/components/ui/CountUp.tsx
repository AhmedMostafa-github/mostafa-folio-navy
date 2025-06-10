
import { motion } from 'framer-motion';
import { useCountUp } from '@/hooks/useCountUp';

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

const CountUp = ({ end, duration = 2000, suffix = '', className = '' }: CountUpProps) => {
  const { count, startCounting } = useCountUp({ end, duration });

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onViewportEnter={startCounting}
    >
      {count}{suffix}
    </motion.div>
  );
};

export default CountUp;
