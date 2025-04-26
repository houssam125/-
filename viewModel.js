// viewModel.js
const viewModel = {
    async fetchTimes() {
        try {
            // 1. عرض حالة "جاري تحديد الموقع"
            view.showStatus("⏳ جاري تحديد موقعك عبر IP...");
            
            // الحصول على الموقع الجغرافي
          
    
            // 2. الحصول على المدينة والدولة عبر الإحداثيات
            const { city, country } = await loction.fetchLocation();
          
            
            view.load(`⏳ جاري تحميل أوقات الصلاة لـ ${city}, ${country}...`);
            
            // 3. الحصول على أوقات الصلاة
            const data = await model.gettime(country, city);
            
            // 4. تحقق من بيانات أوقات الصلاة
            if (!data || !data.data || !data.data.timings) {
                console.error("Invalid prayer time data structure received:", data);
                throw new Error("لم يتم العثور على بيانات أوقات الصلاة بالتنسيق المتوقع.");
            }
    
            // 5. اعرض النتائج
            view.done(data.data.timings);
        } catch (error) {
            // التعامل مع الأخطاء
            view.showError(error.message || "حدث خطأ غير متوقع.");
            console.error("خطأ في سلسلة viewModel.fetchTimes:", error);
        }
    }
    
};
