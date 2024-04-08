from geopy.geocoders import Nominatim

geolocator = Nominatim(user_agent="geoapiExercises")


# Текстовый адрес, который нужно геокодировать
address = "1600 Amphitheatre Parkway, Mountain View, CA"

# Вызываем метод geocode объекта геокодера для геокодирования адреса
location = geolocator.geocode(address)

# Печатаем результат
print("Адрес:", address)
print("Широта:", location.latitude)
print("Долгота:", location.longitude)