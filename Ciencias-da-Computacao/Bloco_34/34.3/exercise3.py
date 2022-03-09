import requests

url = "https://scrapethissite.com/pages/advanced/?gotcha=headers"
response = requests.get(url, headers={"User-agent": "Chrome", "Accept": "text/html"})

print("bot detected" not in response.text)
