import urllib3.request
from bs4 import BeautifulSoup

# Path: scrapper.py
class Scrapper:
    def __init__(self, url):
        self.url = url
        self.http = urllib3.PoolManager()
        self.response = self.http.request('GET', self.url)
        self.soup = BeautifulSoup(self.response.data, 'html.parser')

    def get_title(self):
        return self.soup.title.string

    def get_articles(self):
        return self.soup.find_all('article')  

    def get_article_title(self, article):
        return article.find('span', {"class":"title-rY32JioV"})
    
    def get_all_article_titles(self):
        articles = self.get_articles()
        titles = []
        for article in articles:
            if self.get_article_title(article) is not None:
                titles.append(str(self.get_article_title(article).string))
        return titles