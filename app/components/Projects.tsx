type Props = {}

const Projects = (props: Props) => {
  return (
    <>
      <div className="h-96 grid grid-cols-2 place-content-stretch">
        <div className="bg-white border-r border-t border-black flex items-center justify-center font-mono text-2xl">Project</div>
        <div className="border-t flex items-center justify-center font-mono text-2xl">01</div>
      </div>
      <div className="h-96 grid grid-cols-2 place-content-stretch">
        <div className="border-r border-t border-black flex items-center justify-center font-mono text-2xl">Project</div>
        <div className="bg-white border-t flex items-center justify-center font-mono text-2xl">02</div>
      </div>
      <div className="h-96 grid grid-cols-2 place-content-stretch">
        <div className="bg-white border-r border-t border-black flex items-center justify-center font-mono text-2xl">Project</div>
        <div className="border-t flex items-center justify-center font-mono text-2xl">03</div>
      </div>
      <div className="h-96 grid grid-cols-2 place-content-stretch">
        <div className="border-r border-t border-black flex items-center justify-center font-mono text-2xl">Project</div>
        <div className="bg-white border-t flex items-center justify-center font-mono text-2xl">04</div>
      </div>

    </>

  )
}

export default Projects