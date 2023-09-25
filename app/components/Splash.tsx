type Props = {}

const Hero = (props: Props) => {
  return (
    <div className='min-h-screen grid grid-cols-2 place-items-stretch gap-0'>
      <div className='border-b border-black'></div>
      <div className='border-l border-b border-black'></div>
      <div className='border-b border-black'></div>
      <div className='border-b border-l border-black'></div>
    </div>
  )
}

export default Hero