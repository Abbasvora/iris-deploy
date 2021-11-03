from flask import Flask, render_template, request, redirect
from flask.helpers import url_for
from predction import y_pred

app = Flask(__name__)


@app.route("/")
def hello_world():
    return render_template("main.html")


@app.route("/predict", methods=["POST", "GET"])
def predict():
    if request.method == "POST":
        features = [float(x) for x in request.form.values()]
        # print(y_pred(features))
        predction = y_pred(features)
        return render_template("main.html", predict=predction)
    else:
        return redirect(url_for("hello_world"))


if __name__ == "__main__":
    app.run()
