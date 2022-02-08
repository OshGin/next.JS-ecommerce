import Image from 'next/image';
import altai from '../../public/altai.jpg';
import chicago from '../../public/chicago.jpg';
import nightout from '../../public/nightout.jpg';
import sketch from '../../public/sketch.jpg';
const pictures = [
  {
    id: 1,
    price: 20,
    name: 'Altai',
    preview: <Image src="/altai.jpg" alt="Mountain" width={500} height={500} />,
    fullview: <Image src={altai} alt="Altai" />,
    discription:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.',
  },
  {
    id: 2,
    price: 100,
    name: 'Chicago',
    preview: <Image src="/chicago.jpg" alt="City" width={500} height={500} />,
    fullview: <Image src={chicago} alt="Chicago" />,
    discription:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.',
  },
  {
    id: 3,
    price: 50,
    name: 'Sketch',
    preview: (
      <Image src="/sketch.jpg" alt="Painting" width={500} height={500} />
    ),
    fullview: <Image src={sketch} alt="Sketch" />,
    discription:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.',
  },
  {
    id: 4,
    price: 60,
    name: 'Nightout',
    preview: (
      <Image src="/nightout.jpg" alt="partystreet" width={500} height={500} />
    ),
    fullview: <Image src={nightout} alt="Nightout" />,
    discription:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.',
  },
];

export default pictures;
