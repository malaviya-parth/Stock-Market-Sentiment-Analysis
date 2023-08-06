import pandas as pd
import numpy as np
from scrapper import Scrapper
import spacy
import joblib
import json

nlp = spacy.load('en_core_web_sm')


url = 'https://in.tradingview.com/markets/stocks-india/news/'

scrapper = Scrapper(url)
titles1 = scrapper.get_all_article_titles()
titles_array = np.array(titles1)
# print(titles_array)

def preprocessor(titles):
    processed_titles = []
    answer = []
    for title in titles:
        doc = nlp(title)
        processed_title = []
        for token in doc:
            if token.is_stop or token.is_punct:
                continue
            processed_title.append(token.lemma_.lower())
        processed_titles.append(processed_title)
    answer = np.array(processed_titles, dtype=object)
    return answer

processed_titles1 = preprocessor(titles1)

# Converting processed titles to String
for i in range(len(processed_titles1)):
    processed_titles1[i] = ' '.join(processed_titles1[i])

# print(processed_titles1)

vectorizer = joblib.load('tfidf_vectorizer.joblib')
df_text_transformed = vectorizer.transform(processed_titles1)

loaded_model = joblib.load('model.joblib')
predictions = loaded_model.predict(df_text_transformed)

sentiment = []
for i in range(len(predictions)):
    if predictions[i] == 1:
        sentiment.append('Positive')
    else:
        sentiment.append('Negative')
# for i in range(len(titles1)):
#     print(titles1[i], ' : ', sentiment[i])

res = {titles1[i]: sentiment[i] for i in range(len(titles1))}
res = {}
for i in range(len(titles1)):
    res[titles1[i]] = sentiment[i]

# print(res)

json_data = json.dumps(res, indent=4)
# print(json_data)