export const Inputbox = ({label,placeholder,onChange})=>{
    return <div>
        <div className=" font-medium text-left text-xl pt-6">{label}</div>
        <input onChange={onChange} placeholder={placeholder} className="w-full px-2 h-12 border rounded border-slate-200"></input>
    </div>
}