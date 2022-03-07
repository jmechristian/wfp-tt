import data from '../data';
import One from '../components/One';

export default function Home() {
  const testimonials = data.testimonials;
  return (
    <div className='one__wrapper'>
      {testimonials.map((t, index) => (
        <One key={index} author={t.author} content={t.content} />
      ))}
    </div>
  );
}
