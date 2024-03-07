

export default function Title({children}:any) {
  return (
    <div>
        <h1 className='text-center text-3xl font-bold text-gray-600'>{children}</h1>
        <div className='flex justify-center my-2 items-center'>
                   <div className='w-28 h-1 bg-gray-600'></div>
        </div>
    </div>
  )
}
