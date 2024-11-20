export function Default({ children, fontClassname }: { children: React.ReactNode, fontClassname: string }) {
  return (<>
    <div
      className={`h-fit w-full flex px-10 py-3 bg-[#131313] 
          border-solid border-[#2D2D2D] border-[1px] font-thin text-center 
          justify-center items-center text-xl ` + fontClassname}
    >🚧 actively building alpha-v0.1</div>
    {children}
  </>)
}