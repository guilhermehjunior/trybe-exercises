from exercise4 import Utils, request_url
from parsel import Selector


url = "http://books.toscrape.com/catalogue/the-grand-design_405/index.html"


class newUtils(Utils):
    @staticmethod
    def books_quantity(selector):
        return selector.css(".instock.availability::text").re_first(r"\d")


def main():
    response = request_url(url)
    selector = Selector(response.text)
    title = newUtils.get_title(selector)
    price = newUtils.get_price(selector)
    description = newUtils.get_description(selector)
    img_url = newUtils.get_img_url(selector)
    books_available = newUtils.books_quantity(selector)
    print(f"{title},{price},{description},{img_url},{books_available}")


main()
