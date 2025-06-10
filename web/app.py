from flask import Flask, render_template, request, jsonify, redirect, url_for, flash
import numpy as np
import tensorflow as tf
from tensorflow.keras.preprocessing import image
from PIL import Image
import datetime

app = Flask(__name__)
app.secret_key = 'your_secret_key_here'  # Needed for flashing messages

# Load the trained e-waste classification model
model = tf.keras.models.load_model("ewaste_model.h5")

# E-Waste categories (all lowercase to match prediction labels)
categories = ['camera', 'keyboard', 'laptop', 'microwave', 'mobile', 'mouse', 'smartwatch', 'tv']

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/education')
def education():
    return render_template('education.html')

@app.route('/testimonials')
def testimonials():
    return render_template('testimonials.html')

# ✅ Feedback form submission handler
@app.route('/submit_feedback', methods=['POST'])
def submit_feedback():
    name = request.form.get('name')
    message = request.form.get('message')
    rating = request.form.get('rating')

    # You could save this to a file, database, or send an email
    print(f"Feedback received: {name} rated {rating}/5 and said: {message}")

    flash("✅ Thank you for your feedback!", "success")
    return redirect(url_for('testimonials'))

@app.route('/predict', methods=['POST'])
def predict():
    try:
        file = request.files['image']
        img = Image.open(file.stream).convert("RGB")
        img = img.resize((224, 224))  # Resize to 224x224, matching Colab preprocessing

        # Convert PIL image to numpy array with Keras preprocessing method
        img_array = image.img_to_array(img) / 255.0
        img_array = np.expand_dims(img_array, axis=0)

        prediction = model.predict(img_array)
        predicted_index = np.argmax(prediction)
        confidence = float(prediction[0][predicted_index])
        predicted_label = categories[predicted_index]

        timestamp = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')

        return jsonify({
            "label": predicted_label,
            "confidence": f"{confidence:.2%}",
            "time": timestamp
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
