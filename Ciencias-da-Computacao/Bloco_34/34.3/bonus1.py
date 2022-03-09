import requests
from parsel import Selector


url = "https://en.wikipedia.org/wiki/Gallery_of_sovereign_state_flags"


def get_flags_names_from_wikipedia():
    response = requests.get(url)
    selector = Selector(response.text)
    flags_containers = selector.css("ul.gallery")
    for flag_container in flags_containers:
        flags_names = flag_container.css("div.gallerytext p a::text").getall()
        for flag in flags_names:
            print(flag)


get_flags_names_from_wikipedia()
