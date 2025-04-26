// view.js
const view = {
    showError(errorMessage) {
        const status = document.getElementById("status");
        status.textContent = "❌ خطأ: " + errorMessage;
        status.style.color = "red";
        document.getElementById("prayer-times").innerHTML = ""; 
    },

    load(message = "⏳ جاري تحميل الأوقات...") { 
        const status = document.getElementById("status");
        status.innerHTML = `<h1>${message}</h1>`; 
        status.style.color = "orange"; 
        document.getElementById("prayer-times").innerHTML = ""; 
    },

    showStatus(message) { 
        const status = document.getElementById("status");
        status.textContent = message;
        status.style.color = "blue"; 
        document.getElementById("prayer-times").innerHTML = ""; 
    },

    done(times) {
        const status = document.getElementById("status");
        status.textContent = "✅ تم جلب الأوقات بنجاح!"; 
        status.style.color = "green"; 

        document.getElementById("prayer-times").innerHTML = `
     <h3>أوقات الصلاة:</h3>
     <ul>
       <li><strong>الفجر:</strong> ${times.Fajr}</li>
       <li><strong>الشروق:</strong> ${times.Sunrise}</li>
       <li><strong>الظهر:</strong> ${times.Dhuhr}</li>
       <li><strong>العصر:</strong> ${times.Asr}</li>
       <li><strong>المغرب:</strong> ${times.Maghrib}</li>
       <li><strong>العشاء:</strong> ${times.Isha}</li>
     </ul>
   `;
    }
};
