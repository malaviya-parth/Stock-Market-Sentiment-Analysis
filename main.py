from scrapper import Scrapper

url = 'https://in.tradingview.com/markets/stocks-india/news/'

scrapper = Scrapper(url)
# print(scrapper.get_title())
# print(scrapper.soup)
# print(scrapper.get_articles())
# print(scrapper.get_article_title(scrapper.get_articles()[0]))

print(scrapper.get_all_article_titles())