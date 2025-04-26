// model.js
const model = {
    gettime(country, city) {
        return fetch(
            `https://api.aladhan.com/v1/timingsByCity?city=${encodeURIComponent(city)}&country=${encodeURIComponent(country)}&method=2`,
            {
                method: "GET" 
            }
        )
        .then(response => {
            if (!response.ok) {
                throw new Error(`خطأ في الشبكة لجلب الأوقات: ${response.status} ${response.statusText}`);
            }
            return response.json(); 
        })
        .catch(error => {
            console.error("خطأ أثناء جلب أوقات الصلاة من الـ API:", error);
            throw error; 
        });
    }
};
const loction =
{
  async fetchLocation() {
    try {
      const response = await fetch('http://ip-api.com/json/');
      const data = await response.json();
      if (data.status === "fail") {
        throw new Error("تعذر جلب بيانات الموقع.");
      }
      return {
        city: data.city,
        country: data.country
      };
    } catch (error) {
      throw error;
    }
  }
}