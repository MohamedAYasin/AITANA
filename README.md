Here's your **GitHub-ready `README.md` file** with **all key headers bolded** and formatted for clarity and markdown compatibility:

---

````markdown
# 🧠 **Aitana: Promoting Circular Economy Through Electronic Waste Management in Eastleigh, Nairobi**

## 🧠 **Overview**
**Aitana** is a smart software application that helps communities in Eastleigh, Nairobi—and beyond—manage electronic waste (e-waste) responsibly. Using machine learning and image recognition, Aitana allows users to upload pictures of common e-waste items (such as mobile phones, computers, batteries, and more), identifies them, and suggests creative ideas for reuse or upcycling.

This project supports the circular economy by combining AI technology with environmental education, encouraging sustainable innovation and reducing hazardous waste in urban areas.

---

## 💡 **Problem Statement**
Nairobi generates over 2,400 tonnes of waste daily, with Eastleigh being a hotspot for e-waste due to its dense population and electronics trade. Existing e-waste solutions in Kenya, such as the **WEEE Centre** and **EWIK**, focus mostly on recycling and disposal—but there is **no software-based solution** that empowers residents to identify and creatively reuse e-waste items. Aitana fills that gap.

---

## 🎯 **Project Objectives**

### 🎯 Main Objective:
To develop a machine-learning-powered software solution that promotes e-waste reuse and supports circular economy practices in Eastleigh.

### ✅ Specific Objectives:
- Identify and analyze the top seven most discarded reusable e-waste items in Eastleigh.
- Build an image classification model to detect these e-waste items.
- Provide users with practical and safe reuse or upcycling recommendations.
- Collect user feedback through Likert-scale surveys to evaluate usability and effectiveness.

---

## 🧰 **Tech Stack**

| Component              | Tool/Technology        |
|------------------------|------------------------|
| Programming Language   | Python                 |
| Machine Learning       | TensorFlow / PyTorch   |
| Image Processing       | OpenCV, PIL            |
| Model Training         | Jupyter Notebooks      |
| Web Interface (optional) | Streamlit / Flask    |
| Dataset Storage        | Google Drive / Local   |
| Survey Tool            | Google Forms / Custom UI |
| Version Control        | Git + GitHub           |

---

## 📁 **Dataset**

The dataset includes the following e-waste categories:
- Camera
- Keyboard
- Laptop
- Microwave
- Mobile
- Mouse
- Smartwatch
- TV

Each class consists of labeled images stored in directories. The dataset is loaded from Google Drive.

---

## 📌 **Project Pipeline**

### ✅ Step 1: Mount Google Drive and Set Dataset Path
```python
from google.colab import drive
drive.mount('/content/drive')

import os
DATASET_PATH = "/content/drive/MyDrive/ewaste"
CATEGORIES = sorted(os.listdir(DATASET_PATH))
````

---

### 📊 Step 2: Visualize Class Distribution

Count and plot the number of images per class using Seaborn.

---

### 📸 Step 3 & 4: Load and Augment Data + Sample Grid Visualization

Data is loaded using `ImageDataGenerator` with real-time augmentation (rotation, zoom, shift, etc.). A grid shows 3 sample images from each class.

---

### 🧠 Step 5: Build Model with Transfer Learning

A **MobileNetV2** base model (pretrained on ImageNet) is used for feature extraction. The top layers are customized for e-waste classification.

```python
from tensorflow.keras.applications import MobileNetV2

base_model = MobileNetV2(weights='imagenet', include_top=False, input_shape=(224, 224, 3))
# Add custom top layers here...
```

---

### 📈 Step 6: Train the Model

The model is trained for 10 epochs using a batch size of 32 with categorical crossentropy loss and Adam optimizer.

---

### 🧪 Step 7: Evaluate the Model

Evaluation is done on validation data using:

* Accuracy
* Precision, Recall, F1-score
* Confusion matrix

---

### 💾 Step 8: Save the Model

The trained model is saved as `ewaste_model.h5`. A warning may recommend using the new `.keras` format.

---

### 🧮 Step 9: Metrics on Validation Data

Validation set is evaluated again for:

* Classification report
* Detailed confusion matrix

---

### 📉 Step 10: Plot Training History

Plots are generated for:

* Training & validation accuracy
* Training & validation loss

---

### 🔍 Step 11: Test the Model + Suggest Reuse Ideas

Users can upload images and receive:

* Predicted e-waste category
* Fun facts
* Creative reuse or upcycling suggestions

**Example for mobile**:
💡 *Mobiles contain more gold per gram than gold ore!*
📚 *Learning Device: Preload eBooks and apps for education.*
🎮 *Game Console: Use old phones as handheld gaming devices.*

---

## 💡 **Features**

✅ 8-Class e-waste image classification
🌱 Sustainable reuse idea generation
📷 Image upload and real-time predictions
🔬 Fun tech facts for learning and awareness

---

## 🔧 **Requirements**

* Python 3.x
* TensorFlow 2.x
* NumPy, Matplotlib, Seaborn
* Scikit-learn
* OpenCV
* Google Colab (or Jupyter with Drive access)

---

## 🚀 **Future Work**

* Improve model accuracy with more data and augmentation
* Add object detection to localize e-waste in photos
* Integrate a web UI or mobile app for easier interaction
* Expand reuse idea database using generative AI (e.g., GPT)

---

## 🙌 **Acknowledgments**

This project is part of a **capstone at \[The African Leadership University]** aiming to address e-waste management and promote creative sustainability in **Kenya**.

---



---
