import { Link } from 'react-router';
import { Button } from './button';
import { PATHS } from '@/config/path.config';
import Icon from './icon';

const LinkWithIcon = ({ variant, to, className, icon, children, ...props }) => {
  return (
    <Button asChild variant={variant} className={className} {...props}>
      <Link to={to} className="flex gap-2 items-center justify-between">
        <Icon icon={icon} size={20} />
        {children}
      </Link>
    </Button>
  );
};

export { LinkWithIcon };
