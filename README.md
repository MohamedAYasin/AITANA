# 🧠 **Aitana: Promoting Circular Economy Through Electronic Waste Management in Eastleigh, Nairobi**

![Image](https://github.com/user-attachments/assets/e623b92c-5743-43ab-a1bc-4257d73cd9fa)

## 🤖 **Overview**
**Aitana** is a smart software application that helps communities in Eastleigh, Nairobi—and beyond—manage electronic waste (e-waste) responsibly. Using machine learning and image recognition, Aitana allows users to upload pictures of common e-waste items (such as mobile phones, smartwatches, keeyboards, and more), identifies them, and suggests creative ideas for reuse or upcycling.

This project supports the circular economy by combining AI technology with environmental education, encouraging sustainable innovation and reducing hazardous waste in urban areas.

---

## 🔗 PROJECT LINKS:

[VIDEO DEMO](https://youtu.be/JSxADyp6AjM)

[AITANA GITHUB REPOSITORY](https://github.com/MohamedAYasin/AITANA)

[Figma UI Design](https://www.figma.com/design/9gb5JAkpy6ek0occVEYhrZ/AITANA?node-id=0-1&p=f&t=OXElhzjblm1rQ4Yj-0)

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

## 📌 **WEB UI SCREENSHOTS**

![Image](https://github.com/user-attachments/assets/1f5dbefe-4bdf-4857-865b-84eb77c897cf)

![Image](https://github.com/user-attachments/assets/af59b9e6-f4e4-4974-8134-5d73022b39ca)

![Image](https://github.com/user-attachments/assets/bfb778d6-dd48-444d-8fc3-4efaf27bead1)

![Image](https://github.com/user-attachments/assets/98180f3b-eeb2-4f91-849f-d38cf5b49faa)

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

## 🙌 **Acknowledgments**

This project is part of a **capstone at [The African Leadership University](https://alueducation.com/)** aiming to address e-waste management and promote creative sustainability in **Kenya**.

---
