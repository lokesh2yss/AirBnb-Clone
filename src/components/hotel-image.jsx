import { Button } from './ui/button';
import Icon from './ui/icon';

const HotelImage = ({ photo }) => {
  return (
    <div className="relative">
      <img
        src={photo}
        alt="Hotel Image"
        width={96}
        height={96}
        className="object-cover size-24 rounded-md"
      />
      <Button
        size="icon"
        type="button"
        variant="destructive"
        className="absolute size-6 rounded-full -top-2 -right-2"
      >
        <Icon icon="close" size="14" />
      </Button>
    </div>
  );
};

export default HotelImage;
