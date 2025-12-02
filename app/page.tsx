import Content from './Content'

import MobileNavabar from './components/MobileNavabar';
import SocialLinks from './components/SocialLinks';

export default function Home() {

  return (
    <div className="w-screen h-screen bg-black" >
      <div className='content flex  m-auto justify-end   ' >
        <div className='w-full m-auto  h-[auto] ' >
          <SocialLinks />
          <MobileNavabar />
          <Content />
        </div>

      </div>
    </div>

  );
}
