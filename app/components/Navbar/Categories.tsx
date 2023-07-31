import Container from '../Container';

import {
  FaSwimmingPool,
  FaUmbrellaBeach,
} from 'react-icons/fa';
import { MdOutlineSportsMotorsports } from 'react-icons/md';
import { TbWaterpolo } from 'react-icons/tb';
import CategoryBox from '../CategoryBox';
import {
  usePathname,
  useSearchParams,
} from 'next/navigation';

export const categories = [
  {
    label: 'Pools',
    icon: FaSwimmingPool,
    description:
      'This pool has included amenities',
  },
  {
    label: 'Pools',
    icon: FaSwimmingPool,
    description:
      'This pool has included amenities',
  },
  {
    label: 'Pools',
    icon: FaSwimmingPool,
    description:
      'This pool has included amenities',
  },
  {
    label: 'Pools',
    icon: FaSwimmingPool,
    description:
      'This pool has included amenities',
  },
  {
    label: 'Pools',
    icon: FaSwimmingPool,
    description:
      'This pool has included amenities',
  },
  {
    label: 'Beach Leisure Zones',
    icon: FaUmbrellaBeach,
    description:
      'Leisure Zone with capacity up to 10 people',
  },
  {
    label: 'Jet Skis',
    icon: MdOutlineSportsMotorsports,
    description:
      'Jet Skis for medium-experienced people ',
  },
  {
    label: 'Lake Cabins',
    icon: TbWaterpolo,
    description: 'This lake has included Kayak',
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();

  const isMainPage = pathname === '/';
  if (!isMainPage) {
    return null;
  }
  return (
    <Container>
      <div className='pt-4 flex flex-row items-center justify-between overflow-x-auto'>
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            selected={category === item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
