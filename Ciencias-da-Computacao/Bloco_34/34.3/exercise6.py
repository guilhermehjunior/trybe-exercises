from array import array
from pymongo import MongoClient


with MongoClient() as client:
    db = client.library

    def books_in_category(category: str):
        books = db.books.find(
            # {"categories": {"$elemMatch": {"$eq": category}}},
            {"categories": category},
            {"title": 1}
        )
        for book in books:
            print(book["title"])

    books_in_category("Java")
