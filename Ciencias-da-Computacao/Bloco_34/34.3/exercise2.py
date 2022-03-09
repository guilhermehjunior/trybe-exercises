import requests


url = "https://api.github.com/users"


def show_site_content(path=""):
    response = requests.get(path)
    return response.json()


def print_users():
    users = show_site_content(url)
    for user in users:
        print(f"{user['login']} {user['url']}")


print_users()
