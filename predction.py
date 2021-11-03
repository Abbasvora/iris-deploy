import os
import pickle
import numpy as np
import os
import warnings

warnings.filterwarnings("ignore")
# with open("model.pkl", "rb") as f:
#     model = pickle.load(f)

model = pickle.load(open("./model.pkl", "rb"))
sc = pickle.load(open("./transform.pkl", "rb"))
mappings = {"0": "Setosa", "1": "Versicolor", "2": "Virginica"}

# features = [5.2, 3.2, 3.6, 1.7]

def y_pred(features):
    test = [np.array(features)]
    test = sc.transform(test)
    pred = model.predict(test)
    return mappings[str(pred[0])]
