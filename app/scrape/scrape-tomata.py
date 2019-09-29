# this script scrape top movies names from rotten tomato

import bs4
from urllib.request import urlopen as uReq
from bs4 import BeautifulSoup as soup
import random

tomato_url = "https://www.rottentomatoes.com/top/"

# open connection, grab the web page
uClient = uReq(tomato_url)

# read the page into a var
page_html = uClient.read()

# closing connection
uClient.close()

# parse the page_html
page_soup = soup(page_html, "html.parser")

# grab all movies lists
movies_lists = page_soup.find_all("table", {"class":"movie_list"})

# grab all movie names and put in a list
movies = []
for list in movies_lists:
    td_list = list.find_all("td", {"class":"middle_col"})
    for td in td_list:
        movies.append(td.a.text)

print(random.choice(movies))
