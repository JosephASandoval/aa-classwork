json.name @party.name
json.guests @party.guests do |guest|
    json.name guest.name
    json.gifts guest.gifts, :title
end
# @party.guests => array of guest objects

# =>
# {
#     "name": "Secret Santa Extravaganza",
#     "guests": [
#         {
#             "name": "John Smith",
#             "gifts": [
#                 {
#                     "title": "A Bottle of Wine"
#                 },
#                 {
#                     "title": "Another Bottle of Wine"
#                 }
#             ]
#         }
#     ]
# }