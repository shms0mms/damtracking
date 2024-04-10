
from geopy.geocoders import Nominatim #Подключаем библиотеку
from geopy.distance import geodesic #И дополнения
 
# print('Координаты города 1: ', location_1.latitude, location_1.longitude) #Выводим координаты первого города
# gps_point_1 = location_1.latitude, location_1.longitude #Выводим координаты первого города
# gps_point_2 = location_2.latitude, location_2.longitude #Выводим координаты второго города
# print('Координаты города 2: ', location_2.latitude, location_2.longitude) #Выводим общие данные
# print('Дистанция между городом', location_1, 'и городом ', location_2, ': ', geodesic(gps_point_1, gps_point_2).kilometers, ' километров') #Выво


geolocator = Nominatim(user_agent="Main") 



def check_address(address:str) -> bool:
    location = geolocator.geocode(address) #Получаем полное название первого города
    
    if location:
        return str(location)
    else:
        return False
    
def give_killometrs(addres1:str, addres2 :str):
    
    location_1 = geolocator.geocode(addres1) 
    location_2 = geolocator.geocode(addres2) 
    gps_point_1 = location_1.latitude, location_1.longitude 
    gps_point_2 = location_2.latitude, location_2.longitude
    return geodesic(gps_point_1, gps_point_2).kilometers
    