import requests
from parsel import Selector

url = "http://books.toscrape.com/catalogue/the-grand-design_405/index.html"


class Utils():
    @staticmethod
    def get_title(selector):
        return selector.css("h1::text").get()

    @staticmethod
    def get_price(selector):
        return selector.css("p.price_color").re_first(r"£\d+.\d{2}")

    @staticmethod
    def get_description(selector):
        description = selector.css("#product_description ~ p::text").get()
        sufix = "...more"
        if description.endswith(sufix):
            description = description[:-len(sufix)]
        return description

    @staticmethod
    def get_img_url(selector):
        return selector.css("img::attr(src)").get()


def request_url(path):
    return requests.get(path)


def main():
    response = request_url(url)
    selector = Selector(response.text)
    title = Utils.get_title(selector)
    price = Utils.get_price(selector)
    description = Utils.get_description(selector)
    img_url = Utils.get_img_url(selector)
    print(f"{title},{price},{description},{img_url}")


main()
