import MyImage from "@/public/assets/images/me/me.jpg";
import Image from 'next/image';
const Profile = () => {
  return (
    <div className='flex items-center gap-x-2 transition-colors duration-75 text-primary-foreground'>
      <div className='"relative w-[100px] h-[100px] rounded-full flex items-center justify-center bg-gradient-to-r from-blue-joust to-green-benzol'>
        <Image
          src={MyImage}
          alt='Syed Talal Abbas'
          className='w-[95px] h-[95px] border-[0.2vw] border-blue-cosmos rounded-full object-cover'
        />

        <div className='w-3 h-3 rounded-full bg-green-bezol border border-blue-cosmos absolute right-0 bottom-5'>
        </div>
      </div>
      <div className='text-3xl font-medium'>Syed Talal Abbas Jafri</div>
    </div>
  );
}

export default Profile;
