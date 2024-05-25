interface InputProps {
  icon?: string;
  placeholder: string;
  type: 'text' | 'password' | 'email';
}

const Input: React.FC<InputProps> = ({ icon, placeholder, type }) => {
  return (
    <div className='relative w-full'>
      <div className='absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none'>
        {icon}
      </div>
      <input
        type={type}
        placeholder={placeholder}
        className="bg-primary-background w-full text-primary-foreground rounded-lg text-sm ps-10 px-2.5 py-4 focus:outline-none"
      />
    </div>
  );
};

export default Input;