## Stock Market Sentiment Analysis

- The project focusses on predicting the sentiment of the stock market based on the news headlines. 
- The dataset is taken from Kaggle.
    - The dataset contains two columns: Text and Sentiment
- The model is trained from the Kaggle dataset with various models
    - K Nearest Neighbors (**Accuracy: 76.0**, neighbors: 8, metric: cosine)
    - Naive Bayes (**Accuracy: 73.3**)
    - Logistic Regression (**Accuracy: 78.3**)
    - Random Forest (**Accuracy: 78.8**, estimators: 100, random_state: 0) 
    - XGBoost (**Accuracy: 76.5**, estimators: 100, random_state: 0, learning_rate: 0.8, max_depth: 6)

- Further the scrapper file is used to scrap the news headlines from the website https://tradingview.com and using the headlines from the website, the model predicts the sentiment regarding that headline.
- For the scrapping data I have used **Logistic Regression model.**

## How to run the project
- Clone the repository
- Install the requirements.txt file
- Run the model.ipynb file
- Run the scrapper.py file
- Run the LivePredictionScrapper.ipynb file

