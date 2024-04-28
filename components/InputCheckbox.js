export default function InputCheckbox({ title }) {
  return (
    <div className="rounded-xl p-5 hidden md:block bg-dark">
      <div className="flex items-center justify-between">
        <span className="font-danaDemiBold text-white">{title}</span>
        <label className="w-[46px] h-6 bg-COLOR1-HA rounded-full cursor-pointer">
          <input className="hidden peer group" type="checkbox" name=""></input>
          <div className=" peer-checked:bg-COLOR3-HA w-6 p-1 rounded-full flex justify-end peer-checked:w-full transition-all">
            <div className="bg-COLOR2-HA size-4 rounded-full"></div>
          </div>
        </label>
      </div>
    </div>
  );
}
