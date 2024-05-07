
type Props = {
  name?: String
}

const FilterButtonMobile = (props: Props) => {
  return (
    <button
      className=" inline-flex items-center justify-between gap-4 bg-gradient-to-r from-black via-gray-900 to-black  rounded-full px-4 py-2 shadow-lg "
      style={{
        background:
          'linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.24) 44%, rgba(255, 255, 255, 0) 100%), linear-gradient(to right, #000000, #000000 44%, #000000)',
        border: '1px solid',
        borderColor:
          'linear-gradient(to right, #777C96 19%, #FFFFFF 100%, #777C96 19%)',
      }}
    >
      <h1 className="text-white text-[16px] font-normal leading-[21.78px]">
         {props.name}
      </h1>
     
    </button>
  );
}

export {FilterButtonMobile}