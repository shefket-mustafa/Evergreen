import { useNavigate } from "react-router"

export interface ServiceData {
    
        id: string,
        backgroundImg: string,
        serviceTitle: string,
        serviceDescription: string,
    
}

interface Props {
    service: ServiceData;
  }

export default function ServicesItem( {service}: Props ){

    const navigate = useNavigate();


    return <div onClick={() => navigate(`/services/${service.id}/details`)} className=" w-65 rounded-md overflow-hidden transition-shadow p-2 shadow-md cursor-pointer">

        <div className="h-40  bg-cover bg-center" style={{backgroundImage: service.backgroundImg}}>
        </div>

        <p className="text-black font-bold text-sm py-1 bg-white">{service.serviceTitle}</p>
        <p className="text-gray-500 text-xs">{service.serviceDescription}</p>
        

    </div>
}