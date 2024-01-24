const mongoose = require('mongoose');
const sources = require('../app/models/Course.js');
mongoose.connect('mongodb://localhost:27017/education_dev', {useNewUrlParser: true, useUnifiedTopology: true});

async function seedSources() {
    try {
        // await sources.deleteMany({});
        await sources.create([
            {
                name: 'Kiến Thức Nhập Môn IT',
                description: 'Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nên xem các videos tại khóa này trước nhé.',
                videoId: 'M62l1xA5Eu8',
                image: 'https://img.youtube.com/vi/M62l1xA5Eu8/sddefault.jpg',
                slug: 'lessons-for-newbie'
            },
            {
                name: 'HTML CSS từ Zero đến Hero',
                description: 'Trong khóa này chúng ta sẽ cùng nhau xây dựng giao diện 2 trang web là The Band & Shopee.',
                videoId: 'M62l1xA5Eu8',
                image: 'https://img.youtube.com/vi/M62l1xA5Eu8/sddefault.jpg',
                slug: 'html-css'
            },
            {
                name: 'Lập Trình JavaScript Cơ Bản',
                description: 'Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học.',
                videoId: 'M62l1xA5Eu8',
                image: 'https://img.youtube.com/vi/M62l1xA5Eu8/sddefault.jpg',
                slug: 'javascript-co-ban'
            },
            {
                name: 'Lập Trình JavaScript Nâng Cao',
                description: 'Hiểu sâu hơn về cách Javascript hoạt động, tìm hiểu về IIFE, closure, reference types, this keyword, bind, call, apply, prototype, ...',
                videoId: 'M62l1xA5Eu8',
                image: 'https://img.youtube.com/vi/M62l1xA5Eu8/sddefault.jpg',
                slug: 'javascript-nang-cao'
            },
            {
                name: "RESIDENT EVIL 2 #2: 2 TIẾNG VẬT LỘN VỚI CÁC LOÀI QUÁI VẬT KINH KHIẾP NHẤT !!!",
                description: "Đây là game RESIDENT EVIL 2 Remake chơi trên kênh Trực Tiếp Game của tôi - Dũng CT. Rất mong nhận được sự ủng hộ của ae.",
                image: "https://img.youtube.com/vi/3BTe0J1oDUo/sddefault.jpg",
                videoId: "3BTe0J1oDUo",
                level: "Trình độ nâng cao",
                slug: 'resident-evil-2'
            }
            // Add more documents as needed
        ]);
        console.log('User seed data inserted successfully.');
    } catch (error) {
        console.error('Error seeding users:', error.message);
    }

}

module.exports = {seedSources};