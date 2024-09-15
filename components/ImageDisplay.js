import Image from 'next/image';

const ImageDisplay = () => {
  return (
    <div>
      <Image src="/ss.png" alt="Sample Image" width={500} height={500} />
    </div>
  );
};

export default ImageDisplay;