import geopy
import geopy.distance


def get_distantion(latitude1:float,longtitude1:float,latitude2:float,longtitude2:float) -> float:
    
    pos1 = (latitude1,longtitude1)
    
    pos2 = (latitude2,longtitude2)
    
    
    dists = geopy.distance.geodesic(pos1, pos2).kilometers
    taxi_price =(100+(round(dists)/10)*30)
    return {"distantion":dists, "taxi_price":taxi_price,"bus_price": taxi_price/2 ,"taxi_time":round(dists/72),"bus_time":round(dists/72*1.5) }
    
    