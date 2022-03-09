from pymongo import MongoClient


with MongoClient() as client:
    db = client.library

    def show_total_books_per_category():
        books = db.books.aggregate([
            {"$match": {"status": "PUBLISH"}},
            {"$unwind": "$categories"},
            {"$group": {"_id": "$categories", "total": {"$sum": 1}}},
            {"$sort": {"_id": -1}}
        ])
        for book in books:
            print(book)

    show_total_books_per_category()
