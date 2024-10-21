
export const Card = ({title,target,username,date}) => {
    return <div className="flex justify-center mt-20">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-2xl">
            <a href="#">
                <img className="rounded-t-lg" src="../src/assets/patient.jpg" alt="" />
            </a>
            <div className="p-5">
                
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-600 ">{title}</h5>
                
                <p className="flex font-semibold text-slate-600">by {username}</p>
                <div className="mb-3  text-black-700 font-semibold">{target} <div className="text-slate-500 inline-block">raised</div></div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 ">
                <div className="bg-blue-600 h-2.5 rounded-full w-20"></div>
                </div>
                <div className="pt-2 text-slate-500">Last donation 7 hours ago...</div>
                <div className="flex justify-between">
                    <div>
                        <p className="font-bold">40</p> days left
                    </div>
                    <div>
                    <p className="font-bold">120</p> Supportors
                    </div>
                </div>
            </div>
        </div>

    </div>
}