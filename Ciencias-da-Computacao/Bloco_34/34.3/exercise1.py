import requests


def show_site_content(path=""):
    response = requests.get(path)
    return response.text


print(show_site_content("https://httpbin.org/encoding/utf8"))
