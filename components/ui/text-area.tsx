interface TextAreaProps {
  icon?: string;
  placeholder: string;
}

const TextArea: React.FC<TextAreaProps> = ({ icon, placeholder }) => {
  return (
    <div className='relative w-full'>
      <div className='absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none'>
        {icon}
      </div>
      <textarea
        placeholder={placeholder}
        className="bg-primary-background w-full text-primary-foreground rounded-lg text-sm ps-10 p-2.5 pt-9 focus:outline-none"
      />
    </div>
  );
};

export default TextArea;
