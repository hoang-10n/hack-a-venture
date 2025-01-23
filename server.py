from flask import Flask, request, jsonify
from flask_cors import CORS
from werkzeug.utils import secure_filename
import os
import requests

app = Flask(__name__)
CORS(app)  # Enables CORS for all domains


@app.route("/api/proxy", methods=["POST"])
def proxy_api():
    file = request.files["images"]
    filename = secure_filename(file.filename)
    data_stuff = {key: request.form[key] for key in request.form}
    print(data_stuff, filename, file)

    try:
        # Send the request to the external API
        response = requests.post(
            "https://plant.id/api/v3/identification",
            files={
                "file": (
                    filename,
                    file,
                    "multipart/form-data",
                )
            },
            data={key: request.form[key] for key in request.form},
            headers={"Api-Key": "YGXTHx68wRYavehysDzlg3dSxzd9TlxhnTZvw9frUbjJpyqxMI"},
        )
        return jsonify(response.json())
    except requests.exceptions.RequestException as e:
        return (
            jsonify(
                {
                    "message": "Error communicating with the target API",
                    "details": str(e),
                }
            ),
            500,
        )


@app.route("/", methods=["GET"])
def index():
    return "Hello World!"


if __name__ == "__main__":
    port = 3001
    app.run(host="localhost", port=port, debug=True)
