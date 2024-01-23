const mongoose = require('mongoose');
const sources = require('../app/models/Course.js');
mongoose.connect('mongodb://localhost:27017/education_dev', { useNewUrlParser: true, useUnifiedTopology: true });
async function seedSources() {
    try {
        await sources.deleteMany({});
        await sources.create([
            { name: 'Kiến Thức Nhập Môn IT', description: 'Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nên xem các videos tại khóa này trước nhé.',url: 'M62l1xA5Eu8',image:'https://files.fullstack.edu.vn/f8-prod/courses/7.png',slug:'lessons-for-newbie' },
            { name: 'HTML CSS từ Zero đến Hero', description: 'Trong khóa này chúng ta sẽ cùng nhau xây dựng giao diện 2 trang web là The Band & Shopee.',url: 'M62l1xA5Eu8',image:'https://files.fullstack.edu.vn/f8-prod/courses/2.png', slug:'html-css' },
            { name: 'Lập Trình JavaScript Cơ Bản', description: 'Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học.',url: 'M62l1xA5Eu8',image:'https://files.fullstack.edu.vn/f8-prod/courses/1.png', slug:'javascript-co-ban' },
            { name: 'Lập Trình JavaScript Nâng Cao', description: 'Hiểu sâu hơn về cách Javascript hoạt động, tìm hiểu về IIFE, closure, reference types, this keyword, bind, call, apply, prototype, ...',url: 'M62l1xA5Eu8',image:'https://files.fullstack.edu.vn/f8-prod/courses/12.png',slug:'javascript-nang-cao' },
            // Add more documents as needed
        ]);
        console.log('User seed data inserted successfully.');
    } catch (error) {
        console.error('Error seeding users:', error.message);
    }
}

module.exports = { seedSources };