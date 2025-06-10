document.addEventListener("DOMContentLoaded", () => {
  const uploadForm = document.getElementById("upload-form");
  const resultWrapper = document.getElementById("result-wrapper");
  const labelSpan = document.getElementById("label");
  // Changed this from reuse_idea to reuse-ideas ul
  const reuseIdeasList = document.getElementById("reuse-ideas");
  const funFactSpan = document.getElementById("fun-fact");
  const confidenceSpan = document.getElementById("confidence");
  const timeSpan = document.getElementById("time");
  const uploadedImage = document.getElementById("uploaded-image");
  const errorDiv = document.getElementById("error");

  const info = {
    laptop: {
      fun_fact: "💡 Laptops have reusable RAM, SSDs, and displays that can be upcycled into other gadgets.",
      reuse_ideas: [
        "🖼️ Digital Picture Frame: Turn the screen into a photo display.",
        "💻 Student Lab: Install Linux and donate it for tech education."
      ]
    },
    camera: {
      fun_fact: "📸 Old digital cameras often use CCD sensors that are now considered rare and valuable for optics experiments.",
      reuse_ideas: [
        "🎥 Time-lapse Recorder: Repurpose as a time-lapse camera.",
        "🔍 Science Kit: Use the lens for homemade microscopes."
      ]
    },
    microwave: {
      fun_fact: "💡 Microwaves contain powerful magnets and motors which can be repurposed.",
      reuse_ideas: [
        "🧲 Salvage Magnets: Reuse in science demos or motors.",
        "⚙️ Motor Uses: Use the spinning plate motor for small DIY robots."
      ]
    },
    keyboard: {
      fun_fact: "⌨️ Most keyboards are durable and can last over 50 million keystrokes!",
      reuse_ideas: [
        "🕒 Word Clock: Turn keys into a clock face.",
        "🔤 Alphabet Toy: Teach kids letters using painted keys."
      ]
    },
    mobile: {
      fun_fact: "📱 Mobiles contain more gold per gram than gold ore—about 100 times more!",
      reuse_ideas: [
        "📚 Learning Device: Preload eBooks and apps for education.",
        "🎮 Game Console: Use old phones as handheld gaming devices."
      ]
    },
    mouse: {
      fun_fact: "🖱️ Optical mice use tiny cameras to detect surface movement—cool tech in a tiny shell!",
      reuse_ideas: [
        "🎮 Game Button: Convert mouse buttons into arcade game controls.",
        "🔍 Mini Microscope: Repurpose the sensor for basic microscopy."
      ]
    },
    tv: {
      fun_fact: "📺 TVs are treasure troves of capacitors, screens, and circuit boards for reuse.",
      reuse_ideas: [
        "🖼️ Smart Mirror: Turn the screen into a digital mirror.",
        "📊 Wall Display: Use it for dashboards or learning boards."
      ]
    },
    smartwatch: {
      fun_fact: "⌚ Smartwatches can be used as sensors in DIY fitness or health monitoring projects.",
      reuse_ideas: [
        "📶 IoT Sensor: Use built-in sensors for basic IoT experiments.",
        "📅 Task Tracker: Convert it into a task reminder for kids or elders."
      ]
    }
  };

  uploadForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    errorDiv.style.display = "none";

    const fileInput = document.getElementById("image-input");
    const file = fileInput.files[0];
    if (!file) return;

    uploadedImage.src = URL.createObjectURL(file);

    const formData = new FormData();
    formData.append("image", file);

    try {
      const start = performance.now();

      const response = await fetch("/predict", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error("Server error: " + errorText.slice(0, 100));
      }

      const data = await response.json();
      const duration = (performance.now() - start).toFixed(2);

      const itemLabel = data.label.toLowerCase();
      const confidence = data.confidence;
      const reuseInfo = info[itemLabel];

      labelSpan.textContent = data.label;
      confidenceSpan.textContent = confidence;
      timeSpan.textContent = `${duration} ms`;
      funFactSpan.textContent = reuseInfo?.fun_fact || "";

      // Clear old reuse ideas
      reuseIdeasList.innerHTML = "";

      if (reuseInfo && reuseInfo.reuse_ideas.length > 0) {
        reuseInfo.reuse_ideas.forEach(idea => {
          const li = document.createElement("li");
          li.textContent = idea;
          reuseIdeasList.appendChild(li);
        });
      } else {
        const li = document.createElement("li");
        li.textContent = "No reuse ideas available.";
        reuseIdeasList.appendChild(li);
      }

      resultWrapper.style.display = "flex";
    } catch (err) {
      errorDiv.textContent = err.message;
      errorDiv.style.display = "block";
    }
  });
});
