'use client';
import Card from '@/components/ui/card';
import FancyButton from '@/components/ui/fancy-button';
import LiveClock from '@/components/ui/live-clock';
import Profile from '@/components/ui/profile';
import WaterWaveWrapper from '@/components/visualEffects/water-wave-wrapper';
import { FaUser } from 'react-icons/fa';

export default function Page() {
  return (
    <WaterWaveWrapper
      imageUrl=''
      dropRadius='3'
      perturbance='3'
      resolution='2048'
    >
      {() => (
        <div className='h-screen p-20'>
          <div className='max-w-2xl mx-auto'>
          <Card>
            <div className='grid grid-cols-4'>
              {/* <Button>Basic button</Button> */}
              <Profile />
            </div>
            <Profile />
            <div className='w-[300px]'>
            <FancyButton text='Click me' icon={<FaUser />} />
            
            </div>
            <LiveClock timezone='Toronto/America' />
          </Card>
          </div>
        </div>
      )}
    </WaterWaveWrapper>
  );
}
