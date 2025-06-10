# 🧠 **Aitana: Promoting Circular Economy Through Electronic Waste Management in Eastleigh, Nairobi**

![Image](https://github.com/user-attachments/assets/e623b92c-5743-43ab-a1bc-4257d73cd9fa)

## 🤖 **Overview**
**Aitana** is a smart software application that helps communities in Eastleigh, Nairobi—and beyond—manage electronic waste (e-waste) responsibly. Using machine learning and image recognition, Aitana allows users to upload pictures of common e-waste items (such as mobile phones, smartwatches, keeyboards, and more), identifies them, and suggests creative ideas for reuse or upcycling.

This project supports the circular economy by combining AI technology with environmental education, encouraging sustainable innovation and reducing hazardous waste in urban areas.

---

## 🔗 PROJECT LINKS:

[VIDEO DEMO](https://youtu.be/JSxADyp6AjM)

[AITANA GITHUB REPOSITORY](https://github.com/MohamedAYasin/AITANA)

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
python
from google.colab import drive
drive.mount('/content/drive')

import os
DATASET_PATH = "/content/drive/MyDrive/ewaste"
CATEGORIES = sorted(os.listdir(DATASET_PATH))

---

### 📊 Step 2: Visualize Class Distribution

Count and plot the number of images per class using Seaborn.

---

### 📸 Step 3 & 4: Load and Augment Data + Sample Grid Visualization

Data is loaded using `ImageDataGenerator` with real-time augmentation (rotation, zoom, shift, etc.). A grid shows 3 sample images from each class.

---

### 🧠 Step 5: Build Model with Transfer Learning

A **MobileNetV2** base model (pretrained on ImageNet) is used for feature extraction. The top layers are customized for e-waste classification.

python
from tensorflow.keras.applications import MobileNetV2

base_model = MobileNetV2(weights='imagenet', include_top=False, input_shape=(224, 224, 3))

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

## ⚙️ How to Set Up the Project

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/aitana-ewaste.git
cd aitana-ewaste

### 2. Set up the virtual environment

```bash
python3 -m venv venv
source venv/bin/activate    # or `venv\Scripts\activate` on Windows
```

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

### 4. Launch the app (using Streamlit or Flask)

```bash
# For Streamlit
streamlit run app.py
```

---

## 🧠 Project Functionality (Core Features)

* ✅ Upload image of e-waste (e.g., phone, keyboard, microwave)
* ✅ Predict e-waste category using trained ML model
* ✅ Suggest creative reuse/upcycling ideas for the item
* ✅ Show fun facts related to the object
* ✅ Save and evaluate classification results

---


* 🧭 **App interface screenshots:**



* ⚡ **Circuit diagram (if applicable):**
  *Not applicable for software-only project* (Remove if not needed)

---

## 🚀 Deployment Plan

| Stage                | Description                                                                   |
| -------------------- | ----------------------------------------------------------------------------- |
| 🔧 Local Testing     | Fully functional using Streamlit on localhost                                 |
| 🌐 Cloud Hosting     | Plan to deploy on Streamlit Cloud or Render                                   |
| 📱 Mobile Extension  | Future plan: Convert UI into mobile app using Flutter or React Native         |
| 📊 Data Storage      | E-waste image datasets hosted on Google Drive                                 |
| 🛡️ Ethics & Privacy | Follows Kenya’s Data Protection Act; user consent & safety mechanisms ensured |

---

## 🎥 Video Demo

📺 **Watch the 5–10 min demo video:**
[![Aitana Demo Video](https://www.youtube.com/watch?v=YOUR_VIDEO_ID_HERE)

---

## 🙌 **Acknowledgments**

This project is part of a **capstone at [The African Leadership University](https://alueducation.com/)** aiming to address e-waste management and promote creative sustainability in **Kenya**.

---
