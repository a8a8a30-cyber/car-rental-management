# 🚗 نظام إدارة تأجير السيارات
## Car Rental Management System

برنامج إداري لإدارة شركة تأجير سيارات — يشمل إدارة المركبات، العقود، الصيانة، والتحليلات.

---

## 🌐 روابط الوصول — Access URLs

| الخدمة / Service | الرابط / URL |
|---|---|
| 🖥️ واجهة المستخدم (Frontend) | **http://localhost:3000** |
| ⚙️ واجهة برمجة التطبيقات (API) | **http://localhost:5000** |
| 🔌 نقاط API | **http://localhost:5000/api** |

### نقاط API المتاحة — Available API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | http://localhost:5000/api/vehicles | جلب جميع المركبات |
| POST | http://localhost:5000/api/vehicles | إضافة مركبة جديدة |
| GET | http://localhost:5000/api/contracts | جلب جميع العقود |
| POST | http://localhost:5000/api/contracts | إنشاء عقد جديد |
| GET | http://localhost:5000/api/maintenance | جلب سجلات الصيانة |
| POST | http://localhost:5000/api/maintenance | إضافة سجل صيانة |
| GET | http://localhost:5000/api/analytics | جلب بيانات التحليلات |

---

## 🚀 تشغيل البرنامج — Getting Started

### الطريقة الأولى: Docker Compose (موصى بها)

```bash
docker-compose up --build
```

ثم افتح المتصفح على: **http://localhost:3000**

### الطريقة الثانية: تشغيل محلي

**الخلفية (Backend):**
```bash
cd backend
npm install
npm run dev
# يعمل على: http://localhost:5000
```

**الواجهة الأمامية (Frontend):**
```bash
cd frontend
npm install
npm run dev
# يعمل على: http://localhost:3000
```

---

## 🧪 تشغيل الاختبارات — Running Tests

```bash
# اختبارات الخلفية
cd backend && npm test

# اختبارات الواجهة الأمامية
cd frontend && npm test
```

---

## 📦 المتطلبات — Requirements

- Node.js 20+
- Docker & Docker Compose (اختياري)

---

## 📄 الصفحات — Pages

| الصفحة / Page | الرابط / URL |
|---|---|
| لوحة التحكم (Dashboard) | http://localhost:3000/dashboard |
| المركبات (Vehicles) | http://localhost:3000/vehicles |
| العقود (Contracts) | http://localhost:3000/contracts |
| الصيانة (Maintenance) | http://localhost:3000/maintenance |
| التحليلات (Analytics) | http://localhost:3000/analytics |
